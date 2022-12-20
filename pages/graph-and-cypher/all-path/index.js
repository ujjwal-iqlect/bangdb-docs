import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";
import HighlightedOutput from "../../../components/HighlightedOutput";
import HighlightedJava from "../../../components/HighlightedJava";

export default function CreateAGraphTable() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>All path - BangDB Graph & Cypher</title>
        <meta
          name="description"
          content="Learn how to find all paths. Read the well-written documentation to know more about BangDB 2.0 Graph and Cypher."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="All path - BangDB Graph & Cypher" />
        <meta
          property="og:description"
          content="Learn how to find all paths. Read the well-written documentation to know more about BangDB 2.0 Graph and Cypher."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="All path - BangDB Graph & Cypher" />
        <meta
          name="twitter:description"
          content="Learn how to find all paths. Read the well-written documentation to know more about BangDB 2.0 Graph and Cypher."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">All path</h1>
        <div className="article-body">
          <HighlightedJava
            code={`S=>(Person:tom)-[#ALL_PATH *]->(Award:oscar)`}
          />
          <HighlightedOutput
            code={`{
   "paths":[
      {
         "nodes":[
            {
               "label":"Person",
               "_pk":"2471870506:978343320853564008",
               "name":"tom"
            },
            {
               "_pk":"889565392:3325115057284420805",
               "label":"Movie",
               "name":"forrestGump"
            },
            {
               "label":"Award",
               "_pk":"3098302716:362283378203006142",
               "name":"oscar"
            }
         ],
         "edges":[
            {
               "_from_node":"2471870506:978343320853564008",
               "_to_node":"889565392:3325115057284420805",
               "rel":"ACTED_IN"
            },
            {
               "_from_node":"889565392:3325115057284420805",
               "rel":"WON_AWARD",
               "_to_node":"3098302716:362283378203006142"
            }
         ]
      }
   ],
   "path_count":1
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
