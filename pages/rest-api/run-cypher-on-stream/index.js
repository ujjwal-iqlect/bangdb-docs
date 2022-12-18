import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";
import HighlightedCpp from "../../../components/HighlightedCpp";
import HighlightedOutput from "../../../components/HighlightedOutput";
import HighlightedJava from "../../../components/HighlightedJava";

export default function RunCypherOnStream() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Run cypher on stream - BangDB REST API</title>
        <meta
          name="description"
          content="Learn how to run cypher on stream to get data as required using BangDB 2.0 REST API. Read the documentation to know more about BangDB 2.0 REST API."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Run cypher on stream - BangDB REST API"
        />
        <meta
          property="og:description"
          content="Learn how to run cypher on stream to get data as required using BangDB 2.0 REST API. Read the documentation to know more about BangDB 2.0 REST API."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="Run cypher on stream - BangDB REST API"
        />
        <meta
          name="twitter:description"
          content="Learn how to run cypher on stream to get data as required using BangDB 2.0 REST API. Read the documentation to know more about BangDB 2.0 REST API."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">Run cypher on stream</h1>
        <div className="article-body">
          <p>Run cypher on stream to get data as required.</p>
          <p>
            <strong>Method</strong> : POST
          </p>
          <p>
            <strong>URI</strong> :
            /stream/&lt;schema_name&gt;/&lt;stream_name&gt;/graph/query
          </p>
          <p>
            <strong>Body</strong> : Cypher query
          </p>
          <p>
            To get all the triples for visitor v1, where v1 BUYS product (any
            product)
          </p>
          <HighlightedJava
            code={`curl -H "Content-Type: application/json" -d's=>(vid:v1)-[BUYS]->(prod:*)' -X POST http://192.168.1.105:18080/stream/website/visitor/graph/query`}
          />
          <p>Response</p>
          <HighlightedOutput
            code={`{
   "triple":[
      {
         "sub":"vid:v1",
         "pred":"BUYS",
         "obj":"prod:p2"
      },
      {
         "sub":"vid:v1",
         "pred":"BUYS",
         "obj":"prod:p2"
      },
      {
         "sub":"vid:v1",
         "pred":"BUYS",
         "obj":"prod:p3"
      },
      {
         "sub":"vid:v1",
         "pred":"BUYS",
         "obj":"prod:p1"
      },
      {
         "sub":"vid:v1",
         "pred":"BUYS",
         "obj":"prod:p1"
      }
   ],
   "num_items":5
}`}
          />
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
