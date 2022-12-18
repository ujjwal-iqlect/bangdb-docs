import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";
import HighlightedOutput from "../../../components/HighlightedOutput";
import HighlightedJava from "../../../components/HighlightedJava";

export default function ListAllGraphTablesInTheDB() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>List all graph tables in the db - BangDB REST API</title>
        <meta
          name="description"
          content="Learn how to list all graph tables in the db using BangDB 2.0 REST API. Read the docs to know more about BangDB 2.0 REST API."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="List all graph tables in the db - BangDB REST API"
        />
        <meta
          property="og:description"
          content="Learn how to list all graph tables in the db using BangDB 2.0 REST API. Read the docs to know more about BangDB 2.0 REST API."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="List all graph tables in the db - BangDB REST API"
        />
        <meta
          name="twitter:description"
          content="Learn how to list all graph tables in the db using BangDB 2.0 REST API. Read the docs to know more about BangDB 2.0 REST API."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">List all graph tables in the db</h1>
        <div className="article-body">
          <p>To list all graph tables in the db:</p>
          <p>
            <strong>Method</strong> : GET
          </p>
          <p>
            <strong>URI</strong> : /graph/list
          </p>
          <p>Example</p>
          <HighlightedJava
            code={`curl -X GET http://192.168.1.105:18080/graph/list`}
          />
          <p>Response</p>
          <HighlightedOutput
            code={`{
   "graphs":[
      "mygraph",
      "website_graph"
   ],
   "num_graphs":2
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
