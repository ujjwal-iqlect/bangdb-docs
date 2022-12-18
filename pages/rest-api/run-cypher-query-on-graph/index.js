import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";
import HighlightedOutput from "../../../components/HighlightedOutput";
import HighlightedJava from "../../../components/HighlightedJava";

export default function RunCypherQueryOnGraph() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Run cypher query on graph - BangDB REST API</title>
        <meta
          name="description"
          content="Learn how to run cypher query on graph using BangDB 2.0 REST API. Read the docs to know more about BangDB 2.0 REST API."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Run cypher query on graph - BangDB REST API"
        />
        <meta
          property="og:description"
          content="Learn how to run cypher query on graph using BangDB 2.0 REST API. Read the docs to know more about BangDB 2.0 REST API."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="Run cypher query on graph - BangDB REST API"
        />
        <meta
          name="twitter:description"
          content="Learn how to run cypher query on graph using BangDB 2.0 REST API. Read the docs to know more about BangDB 2.0 REST API."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">Run cypher query on graph</h1>
        <div className="article-body">
          <p>To run cypher query on graph:</p>
          <p>
            <strong>Method</strong> : POST
          </p>
          <p>
            <strong>URI</strong> : /graph/&lt;graph_table&gt;/query
          </p>
          <p>
            <strong>Data</strong> : query
          </p>
          <p>Example</p>
          <HighlightedJava
            code={`curl -H "Content-Type: application/json" -d' S=>(person:*)-[WORKS_IN]->(company:*)' -X POST http://192.168.1.105:18080/graph/mygraph/query`}
          />
          <p>Response</p>
          <HighlightedOutput
            code={`{
   "triple":[
      {
         "sub":"person:rajiv",
         "pred":"WORKS_IN",
         "obj":"company:microsoft"
      },
      {
         "sub":"person:sanjay",
         "pred":"WORKS_IN",
         "obj":"company:google"
      }
   ],
   "num_items":2
}`}
          />
          <p>Or</p>
          <HighlightedJava
            code={`curl -H "Content-Type: application/json" -d' S=>(@p person:*)-[@w WORKS_IN]->(@c company:*); RETURN p.name AS Person w.rel AS relation c.name AS Company w.startyear AS working_from' -X POST http://192.168.1.105:18080/graph/mygraph/query`}
          />
          <p>Response</p>
          <HighlightedOutput
            code={`{
   "rows":[
      {
         "Company":"microsoft",
         "Person":"rajiv",
         "relation":"WORKS_IN",
         "working_from":1997
      },
      {
         "Company":"google",
         "Person":"sanjay",
         "relation":"WORKS_IN",
         "working_from":2008
      }
   ],
   "num_items":2
}`}
          />
          <p>Notification related APIs URI start with /db/notification.</p>
        </div>
      </DocArticle>
    </React.Fragment>
  );
}

export async function getServerSideProps(context) {
  return {
    props: { apiSidebar: true },
  };
}
