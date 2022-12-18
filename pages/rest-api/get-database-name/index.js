import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";
import HighlightedCpp from "../../../components/HighlightedCpp";
import HighlightedOutput from "../../../components/HighlightedOutput";
import Codebox from "../../../components/Codebox";

export default function GetDatabaseName() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Get database name - BangDB REST API</title>
        <meta
          name="description"
          content="Learn how to get database name using BangDB 2.0 REST API. Read the documentation to know more about BangDB 2.0 REST API."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Get database name - BangDB REST API"
        />
        <meta
          property="og:description"
          content="Learn how to get database name using BangDB 2.0 REST API. Read the documentation to know more about BangDB 2.0 REST API."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="Get database name - BangDB REST API"
        />
        <meta
          name="twitter:description"
          content="Learn how to get database name using BangDB 2.0 REST API. Read the documentation to know more about BangDB 2.0 REST API."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">Get database name</h1>
        <div className="article-body">
          <p>To get database name:</p>
          <p>
            <strong>Method</strong> : GET
          </p>
          <p>
            <strong>URI</strong> : /db
          </p>
          <p>Example</p>
          <Codebox code={`curl -X GET http://192.168.1.105:18080/db`} />
          <p>Response</p>
          <HighlightedOutput
            code={String.raw`{
   "dbname":"mydb"
}`}
          />
        </div>
      </DocArticle>
    </React.Fragment>
  );
}

export async function getStaticProps(context) {
  return {
    props: { apiSidebar: true },
  };
}
