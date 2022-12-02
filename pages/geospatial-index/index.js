import React from "react";
import Head from "next/head";
import Link from "next/link";
import HighlightedCpp from "../../components/HighlightedCpp";
import Breadcrumb from "../../components/Breadcrumb";
import HighlightedJson from "../../components/HighlightedJson";

export default function GeoSpatialIndex() {
  const geoSpatialIndexForTableSetupCode = String.raw`TableEnv tenv;
tenv.setKeyType(COMPOSITE_KEY);
tenv.setSortMethod(LEXICOGRAPH);
tenv.setAllowDuplicate(true);
// if we wish to have duplicate index
// now create the index on the table tbl.addIndex("geohash", &tenv);
// note geohash is just the field name which will contain the gephash of the lat,long
// that's it`;

  const usingCATRCode = String.raw`{
    "name":"geohash",
    "type":5,
    "sidx":1,
    "opnm":"GEOHASH",
    "iatr":[
       "lat",
       "lon"
    ]
 }`;

  const queryStreamCode = String.raw`// query a stream 
  select * from schema1.stream1 where shopname = "starbucks coffee" and area = "MG Road" and geofilter {"location"{"lat":12.2345,"lon":77.2123},"index":"geohash","distance":1000}`;

  const countCode = String.raw`//or to simply count, we can use count(*) 
  select * from schema1.stream1 ...`;

  const queryTableCode = String.raw`// to query a table, we use exactly same format except we use table name instead of schema.stream
  select * from mytable where shopname = "starbucks coffee" and area = "MG Road" and geofilter {"location"{"lat":12.2345,"lon":77.2123},"index":"geohash","distance":1000}`;

  return (
    <React.Fragment>
      <Head>
        <title>GeoSpatial Index - BangDB</title>
        <meta
          name="description"
          content="BangDB allows geospatial index to be created on table or on streams. Once done then user can query the data using the index."
        ></meta>
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="GeoSpatial Index - BangDB" />
        <meta
          property="og:description"
          content="BangDB allows geospatial index to be created on table or on streams. Once done then user can query the data using the index."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="GeoSpatial Index - BangDB" />
        <meta
          name="twitter:description"
          content="BangDB allows geospatial index to be created on table or on streams. Once done then user can query the data using the index."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <section className="main-container">
        <main className="container">
          <div className="article-content">
            <article className="article">
              <Breadcrumb text="Introduction" url="/bangdb-introduction" />
              <h1 className="article-title">Geo Spatial Index</h1>
              <div className="article-body">
                <h2>Geo Spatial Index query for table or stream</h2>
                <p>
                  BangDB allows geo-spatial index to be created on table or on
                  streams. Once done then user can query the data using the
                  index. It also allows user to augment the query with other
                  constraints as required. For simplicity, it uses the similar
                  query structure as it uses for most of the other types of
                  queries Therefore we can query for something like:
                </p>
                <ol>
                  <li>
                    Find all entities within a distance of X meters from a point
                    p (lat, lon)
                  </li>
                  <li>
                    Find all entities within a box defined by bot-left and
                    top-left rectangle
                  </li>
                  <li>
                    Find all restaurants named “Starbucks coffee” within 1000
                    meters from my current location
                  </li>
                  <li>
                    Find all book stores near coffee restaurant within 2000
                    meters from my current location etc..
                  </li>
                </ol>
                <p>
                  To deal with geospatial index, BangDB takes the (lat,long),
                  converts it into a geohash (string type) and stores the
                  geohash in sorted manner using B+tree. Therefore it aligns
                  well with the normal indexing model internally. We have two
                  different ways to deal with geoindex, explicit way for a table
                  and implicit way for stream.
                </p>
                <h2>Geo Spatial Index for table</h2>
                <p>
                  Let&apos;s say we have a table which stores all the shops in a
                  given city. We assign a unique (lat,long) to every shop. Now,
                  in order to be able to run the query based on geoindex, we
                  need to create the index. To do so, we can use{" "}
                  <code>TableEnv</code> type for the same. We just need to set
                  up following:
                </p>
                <HighlightedCpp code={geoSpatialIndexForTableSetupCode} />
                <h2>Geo Spatial Index for stream</h2>
                <p>Here it&apos;s even simple. Following are the steps:</p>
                <p>
                  Let&apos;s say in a given stream we have &quot;lat&quot; and
                  &quot;lon&quot; as attributes which contains latitude and
                  longitude for a given location. Data/event is flowing into the
                  db. Now we must create the geohash index and add it to the
                  events in the incoming stream. To do so, we will use{" "}
                  <code>"catr"</code>.
                </p>
                <HighlightedCpp code={usingCATRCode} />
                <aside className="doc-note">
                  <strong>Note: </strong>This will allows db to compute the
                  geohash and index it properly for every single event (record)
                  coming into the stream. See{" "}
                  <Link href={"/catr-computing-attribute"}>catr</Link> for more
                  info.
                </aside>
                <p>
                  Now to query the data we can use following JSON structure to
                  set up the Geo Spatial filter.
                </p>

                <HighlightedJson
                  code={String.raw`{"location":{"lat":12.8282,"lon":77.5454},"index":"geohash","distance":1000}`}
                />
                <p>Or</p>
                <HighlightedJson
                  code={String.raw`{"location":{"lat":12.8282,"lon":77.5454},"index":"geohash","distance":1000,"neighbors":1} 
 // uses neighbors or`}
                />
                <HighlightedJson
                  code={String.raw`{"box":{"left_bot":{"lat":12.8282,"lon":77.5454},"right_top":{"lat":12.9282,"lon":77.9454}},"index":"geohash"}`}
                />
                <aside className="doc-note">
                  <strong>Note: </strong>We can add &quot;precision&quot; as
                  well [ range 1 to 12 ] which forces db to use it we can
                  add&quot;neighbors&quot;:1 to force db to use neighbors for
                  better accuracy.
                </aside>
                <p>
                  This is as simple as that. Now to add further filter, we can
                  use the dataQuery to add filter and then use{" "}
                  <code>&quot;addGeoQuery&quot;</code> function to add the above
                  json structure Same scan apis will be used to do the query.
                  Same way we can also query stream, using scan API.
                </p>
                <h2>Query from CLI</h2>
                <p>
                  It&apos;s rather simple for query from the cli; look at few
                  examples below.
                </p>
                <HighlightedCpp code={queryStreamCode} />
                <HighlightedCpp code={countCode} />
                <HighlightedCpp code={queryTableCode} />
              </div>
            </article>
          </div>
        </main>
      </section>
    </React.Fragment>
  );
}
