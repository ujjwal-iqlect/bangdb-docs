import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";
import HighlightedOutput from "../../../components/HighlightedOutput";
import HighlightedJava from "../../../components/HighlightedJava";
import Codebox from "../../../components/Codebox";

export default function ShortPathAdvance() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>SHORT_PATH (advance) - BangDB Graph & Cypher</title>
        <meta
          name="description"
          content="Learn about SHORT_PATH (advance). Read the well-written documentation to know more about BangDB 2.0 Graph and Cypher."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="SHORT_PATH (advance) - BangDB Graph & Cypher"
        />
        <meta
          property="og:description"
          content="Learn about SHORT_PATH (advance). Read the well-written documentation to know more about BangDB 2.0 Graph and Cypher."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="SHORT_PATH (advance) - BangDB Graph & Cypher"
        />
        <meta
          name="twitter:description"
          content="Learn about SHORT_PATH (advance). Read the well-written documentation to know more about BangDB 2.0 Graph and Cypher."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">SHORT_PATH (advance)</h1>
        <div className="article-body">
          <p>
            One of the central property or the very reason for the existence of
            any graph is to be able to efficiently find connection between any
            given pair of nodes and in many cases also finding the shortest
            path. BangDB provides very efficient way to achieve this in
            different scenarios.
          </p>
          <p>
            Find the shortest path between given two nodes, without worrying
            about relationships in between. This means we are just interested in
            finding the shortest path.
          </p>
          <Codebox code={`CREATE GRAPH g4`} />
          <Codebox code={`USE GRAPH g4`} />
          <HighlightedJava
            code={`CREATE (city:A {"lat":12.97,"lon":77.59})-[BYROAD {"distance":100}]->(city:B {"lat":12.29,"lon":76.64})

CREATE (city:B {"lat":12.29,"lon":76.64})-[BYROAD {"distance":50}]->(city:C {"lat":11.41,"lon":76.69})

CREATE (city:B {"lat":12.29,"lon":76.64})-[BYROAD {"distance":120}]->(city:D {"lat":13.34,"lon":76.11})

CREATE (city:A {"lat":12.97,"lon":77.59})-[BYROAD {"distance":190}]->(city:D {"lat":13.34,"lon":76.11})

CREATE (city:C {"lat":11.41,"lon":76.69})-[BYROAD {"distance":30}]->(city:D {"lat":13.34,"lon":76.11})

CREATE (city:A)-[BYAIR {"distance":20}]->(city:B)

CREATE (city:B)-[BYAIR {"distance":10}]->(city:C)

CREATE (city:C)-[BYAIR {"distance":10}]->(city:D)

CREATE (city:B)-[BYAIR {"distance":25}]->(city:D)

CREATE (city:A)-[BYAIR {"distance":25}]->(city:C)`}
          />
          <p>
            Let&apos;s assume that we have four cities, A,B,C and D. They are
            connected via road and air. Distances by road (in green) and by air
            (in blue) are shown in the graph below. Also, the latitude and
            longitude pairs are provided for all the cities.
          </p>
          <p>
            We would like to know the shortest distance between city A and D, by
            road, air and finally by latitude and longitude based. Let&apos;s
            write the query now.
          </p>
          <p>
            First let&apos;s find out by road without the weight (without
            considering the distance).
          </p>
          <HighlightedJava code={`S=>(city:A)-[#SHORT_PATH *]->(city:D)`} />
          <HighlightedOutput
            code={`{
   "nodes":[
      {
         "name":"A",
         "label":"city"
      },
      {
         "label":"city",
         "name":"D"
      }
   ],
   "edges":[
      {
         "rel":"BYROAD"
      }
   ],
   "path_count":1
}`}
          />
          <p>
            As we see, without considering the distance, it picks the shortest
            path means of number of connections in between.
          </p>
          <p>
            Now, let&apos;s find out the shortest path by road, so we will use
            distance here
          </p>
          <HighlightedJava
            code={`S=>(city:A)-[#SHORT_PATH BYROAD {weight="distance"}]->(city:D)`}
          />
          <HighlightedOutput
            code={`{
   "nodes":[
      {
         "name":"A",
         "label":"city"
      },
      {
         "name":"B",
         "label":"city"
      },
      {
         "name":"C",
         "label":"city"
      },
      {
         "label":"city",
         "name":"D"
      }
   ],
   "path_count":1,
   "edges":[
      {
         "rel":"BYROAD"
      },
      {
         "rel":"BYROAD"
      },
      {
         "rel":"BYROAD"
      }
   ]
}`}
          />
          <p>Now, let&apos;s run the query for shortest distance by AIR</p>
          <HighlightedJava
            code={`S=>(city:A)-[#SHORT_PATH BYAIR {weight="distance"}]->(city:D)`}
          />
          <HighlightedOutput
            code={`{
   "edges":[
      {
         "rel":"BYAIR"
      },
      {
         "rel":"BYAIR"
      }
   ],
   "nodes":[
      {
         "label":"city",
         "name":"A"
      },
      {
         "name":"C",
         "label":"city"
      },
      {
         "label":"city",
         "name":"D"
      }
   ],
   "path_count":1
}`}
          />
          <p>
            If we run the query to find shortest distance by any means (Road or
            Air), we will get the right results in this case too. Notice the
            &apos;*&apos; after #SHORT_PATH to indicate any relation.
          </p>
          <HighlightedJava
            code={`S=>(city:A)-[#SHORT_PATH * {weight="distance"}]->(city:D)`}
          />
          <HighlightedOutput
            code={`{
   "path_count":1,
   "nodes":[
      {
         "label":"city",
         "name":"A"
      },
      {
         "label":"city",
         "name":"C"
      },
      {
         "name":"D",
         "label":"city"
      }
   ],
   "edges":[
      {
         "rel":"BYAIR"
      },
      {
         "rel":"BYAIR"
      }
   ]
}`}
          />
          <p>
            Finally, let&apos;s use latitude and longitude to compute the
            distance.
          </p>
          <HighlightedJava
            code={`S=>(city:A)-[#SHORT_PATH * {geo_distance="lat.lon"}]->(city:D)`}
          />
          <HighlightedOutput
            code={`{
   "path_count":1,
   "nodes":[
      {
         "label":"city",
         "name":"A"
      },
      {
         "label":"city",
         "name":"D"
      }
   ],
   "edges":[
      {
         "rel":"BYROAD"
      }
   ]
}`}
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
