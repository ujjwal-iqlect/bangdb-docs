import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";
import HighlightedOutput from "../../../components/HighlightedOutput";
import HighlightedJava from "../../../components/HighlightedJava";
import HighlightedCpp from "../../../components/HighlightedCpp";

export default function CreateAGraphTable() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Shortest path - BangDB Graph & Cypher</title>
        <meta
          name="description"
          content="Learn about shortest path. Read the well-written documentation to know more about BangDB 2.0 Graph and Cypher."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Shortest path - BangDB Graph & Cypher"
        />
        <meta
          property="og:description"
          content="Learn about shortest path. Read the well-written documentation to know more about BangDB 2.0 Graph and Cypher."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="Shortest path - BangDB Graph & Cypher"
        />
        <meta
          name="twitter:description"
          content="Learn about shortest path. Read the well-written documentation to know more about BangDB 2.0 Graph and Cypher."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">Shortest path</h1>
        <div className="article-body">
          <p>
            One of the most important tasks with graph is to find if there is a
            connection between two nodes and if there are more than one then
            finds the shortest path. BangDB supports this with minor
            modifications in the Cypher construct (but to simplify only) and use
            this for finding the shortest path, here is how it goes.
          </p>
          <p>
            Let&apos;s add a triple to have some multi-level connection.
            Let&apos;s add a triple for movie &quot;forrestGump&quot; winning
            &quot;oscar&quot;
          </p>
          <HighlightedJava
            code={`CREATE (Movie:forrestGump)-[WON_AWARD]->(Award:oscar)`}
          />
          <HighlightedOutput
            code={`{
   "msg" : [
      "success"
   ],
   "errcode" : 0
}`}
          />
          <p>
            Now, let&apos;s find the shortest path between Tom Hanks and Oscar
          </p>
          <HighlightedJava
            code={`S=>(Person:tom)-[#SHORT_PATH *]->(Award:oscar)`}
          />
          <HighlightedOutput
            code={`{
   "nodes":[
      {
         "label":"Person",
         "name":"tom",
         "_pk":"2471870506:978343320853564008"
      },
      {
         "_pk":"889565392:3325115057284420805",
         "name":"forrestGump",
         "label":"Movie"
      },
      {
         "label":"Award",
         "name":"oscar",
         "_pk":"3098302716:362283378203006142"
      }
   ],
   "path_count":1,
   "edges":[
      {
         "rel":"ACTED_IN",
         "_to_node":"889565392:3325115057284420805",
         "_from_node":"2471870506:978343320853564008"
      },
      {
         "_to_node":"3098302716:362283378203006142",
         "_from_node":"889565392:3325115057284420805",
         "rel":"WON_AWARD"
      }
   ]
}`}
          />
          <p>
            As you see, the returned result describes the path. If there was
            more than one path (more than one movie of Tom Hanks winning an
            Oscar), then it would have returned the shortest one. TO list all
            such paths between two nodes, we can use #ALL_PATH as shown in next
            section.
          </p>
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
