import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";
import HighlightedOutput from "../../../components/HighlightedOutput";
import HighlightedJava from "../../../components/HighlightedJava";
import Codebox from "../../../components/Codebox";

export default function GeospatialIndexAndQuery() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Geospatial Index and Query - BangDB Graph & Cypher</title>
        <meta
          name="description"
          content="BangDB Graph supports Geospatial Index. Which means we can add latitude, longitude pairs for set of entities."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Geospatial Index and Query - BangDB Graph & Cypher"
        />
        <meta
          property="og:description"
          content="BangDB Graph supports Geospatial Index. Which means we can add latitude, longitude pairs for set of entities."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="Geospatial Index and Query - BangDB Graph & Cypher"
        />
        <meta
          name="twitter:description"
          content="BangDB Graph supports Geospatial Index. Which means we can add latitude, longitude pairs for set of entities."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">Geospatial Index and Query</h1>
        <div className="article-body">
          <p>
            BangDB Graph supports Geospatial hashing-based indexing. Which means
            we can add latitude, longitude pairs for set of entities and then
            query for various entities within given Radius or Quadrants etc. For
            example, some of the queries related to &quot;Near me …&quot;,
            &quot;within radius of 2KM from a point or an entity …&quot; etc.
            can be answered easily.
          </p>

          <h2>Create Geospatial Index</h2>
          <p>
            Now, before we add entities and relations, we must create the
            geoindex for the Graph. Since different entities can have latitude
            and longitude and their names could be different too. Therefore, we
            must tell DB about the entity and their latitude, longitude pair. We
            can do this by issuing following command from CLI. Or from Ampere
            using the UI Add Index icon
          </p>
          <p>The syntax of the command is as follows:</p>
          <HighlightedJava
            code={`create geoindex <Graph_Name>.<Entity_Name> = <latitude_attribute_name>.<longitude_attribute_name>`}
          />

          <p>Let&apos;s see some of these examples in action.</p>
          <h3>Example 1</h3>
          <p>
            Finding persons near a given person, who is connected with others
            with some specific relation.
          </p>
          <Codebox code={`CREATE GRAPH gh1`} />
          <HighlightedJava
            code={`create geoindex gh1.Person latlon = lat.lon`}
          />
          <HighlightedJava
            code={`create geoindex gh1.Company latlon = lat.lon`}
          />
          <HighlightedJava
            code={`CREATE (Person:john {"lat":12.8025,"lon":77.4028})-[WORKS_AT]->(Company:Acme {"lat":12.8016,"lon":77.3937})

CREATE (Person:dan {"lat":12.8025,"lon":77.7599})-[WORKS_AT]->(Company:google {"lat":12.8444,"lon":77.5986})

CREATE (Person:mike {"lat":12.8146,"lon":77.6656})-[WORKS_AT]->(Company:Acme {"lat":12.8417,"lon":77.7577})

CREATE (Person:peter {"lat":12.8153,"lon":77.7010})-[WORKS_AT]->(Company:Acme {"lat":12.8543,"lon":77.5882})

CREATE (Person:susan {"lat":12.8187,"lon":77.4169})-[WORKS_AT]->(Company:Acme {"lat":12.8554,"lon":77.5265})

CREATE (Person:andrea {"lat":12.8235,"lon":77.5262})-[WORKS_AT]->(Company:Acme {"lat":12.8585,"lon":77.6706})

CREATE (Person:arti {"lat":12.8281,"lon":77.6464})-[WORKS_AT]->(Company:Acme {"lat":12.8610,"lon":77.5350})

CREATE (Person:teresa {"lat":12.8316,"lon":77.4727})-[WORKS_AT]->(Company:Acme {"lat":12.8696,"lon":77.5991})`}
          />
          <HighlightedJava
            code={`S=>(@p Person:john)-[#RADIUS_OF 1000 WORKS_AT]->(@c Company:*)`}
          />
          <HighlightedOutput
            code={`+-----------+--------+------------+
|sub        |pred    |         obj|
+-----------+--------+------------+
|Person:john|WORKS_AT|Company:Acme|
+-----------+--------+------------+`}
          />
          <HighlightedJava
            code={`S=>(@p Person:john)-[@r #RADIUS_OF 1000 WORKS_AT]->(@c Company:*); RETURN p.name AS person, r.rel AS works_at, c.name AS company`}
          />
          <HighlightedOutput
            code={`+-------+------+--------+
|company|person|works_at|
+-------+------+--------+
|Acme   |john  |WORKS_AT|
+-------+------+--------+`}
          />
          <HighlightedJava
            code={`S=>(@p Person:john)-[#RADIUS_OF 1000 WORKS_AT]->(@c Company:*); RETURN COUNT(c.name) AS Num_companies`}
          />
          <HighlightedOutput
            code={`+-------------+
|Num_companies|
+-------------+
|1            |
+-------------+`}
          />
          <h3>Example 2</h3>
          <p>
            Entities with no relationships, and finding based on geo-loc solely
          </p>
          <Codebox code={`CREATE GRAPH gh2`} />
          <HighlightedJava
            code={`create geoindex gh2.Person latlon = lat.lon`}
          />
          <HighlightedJava
            code={`CREATE (Person:john {"lat":12.8025,"lon":77.4028})

CREATE (Person:laila {"lat":12.8015,"lon":77.4022})

CREATE (Person:madlin {"lat":12.8021,"lon":77.4022})

CREATE (Person:rachel {"lat":12.8022,"lon":77.4023})

CREATE (Person:shiela {"lat":12.8020,"lon":77.4020})

CREATE (Person:amelia {"lat":12.8017,"lon":77.4013})

CREATE (Person:paulin {"lat":12.8023,"lon":77.4029})

CREATE (Person:melinda {"lat":12.8011,"lon":77.4019})`}
          />
          <p>Number of people living within radius of 3000m from John</p>
          <HighlightedJava
            code={`S=>(@p Person:john)-[#RADIUS_OF 3000 *]->(@c *); RETURN COUNT(c.name) AS Num_places`}
          />
          <HighlightedOutput
            code={`+----------+
|Num_places|
+----------+
|8         |
+----------+`}
          />
          <aside className="doc-note">
            <strong>Note: </strong>* in relation ([#RADIUS_OF 3000 *]), means
            that there may be any relation between subject and object or no
            relation at all.
          </aside>
          <h3>Example 3</h3>
          <p>
            Chained query. In these kinds of query, we would like to figure out
            some nearby entities, and then find some other related entities
            using some relation and filter.
          </p>
          <Codebox code={`CREATE GRAPH gh3`} />
          <HighlightedJava
            code={`create geoindex gh3.Person latlon = lat.lon`}
          />
          <HighlightedJava
            code={`create geoindex gh3.Theater latlon = lat.lon`}
          />
          <HighlightedJava
            code={`CREATE (Person:john {"lat":12.8025,"lon":77.4028})

CREATE (Theater:regent {"lat":12.8015,"lon":77.4022, "rating":3.9})-[RUNNING_PLAY]->(Play:"Romeo and Juliet" {"likes":81})

CREATE (Theater:veena {"lat":12.8021,"lon":77.4022, "rating":4.3})-[RUNNING_PLAY]->(Play:"Merchant of Venice" {"likes":88})

CREATE (Theater:mona {"lat":12.8022,"lon":77.4023, "rating":4.1})-[RUNNING_PLAY]->(Play:"ABC Murder" {"likes":71})

CREATE (Theater:ashok {"lat":12.8020,"lon":77.4020, "rating":3.6})-[RUNNING_PLAY]->(Play:"ABC Murder" {"likes":97})`}
          />
          <p>
            Find a Theater(s) within 3KM from person john, which has rating
            equal to or more than 4.1 and running the play &quot;ABC
            Murder&quot;
          </p>
          <HighlightedJava
            code={`S=>(@p Person:john)-[#RADIUS_OF 3000 *]->(@c Theater:* {rating >= 4.1})-[@r RUNNING_PLAY]->(@pl Play:"ABC Murder"); RETURN c.name AS Theater`}
          />
          <HighlightedOutput
            code={`+-------+
|Theater|
+-------+
|mona   |
+-------+`}
          />
          <p>
            Find the theatre with more than 4.1 likes and is within 3Km from
            john, which is running some play which has more than 80 likes.
          </p>
          <HighlightedJava
            code={`S=>(@p Person:john)-[#RADIUS_OF 3000 *]->(@c Theater:* {rating >= 4.1})-[@r RUNNING_PLAY]->(@pl Play:* {likes > 80}); RETURN c.name AS Theater, pl.name AS Play`}
          />
          <HighlightedOutput
            code={`+------------------+-------+
|Play              |Theater|
+------------------+-------+
|Merchant of Venice|veena  |
+------------------+-------+`}
          />
        </div>
      </DocArticle>
    </React.Fragment>
  );
}

export async function getServerSideProps(context) {
  return {
    props: { graphSidebar: true },
  };
}
