import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";
import HighlightedOutput from "../../../components/HighlightedOutput";
import HighlightedJava from "../../../components/HighlightedJava";

export default function RegisterANotification() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Register a notification - BangDB REST API</title>
        <meta
          name="description"
          content="Learn how to register a notification using BangDB 2.0 REST API. Read the docs to know more about BangDB 2.0 REST API."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Register a notification - BangDB REST API"
        />
        <meta
          property="og:description"
          content="Learn how to register a notification using BangDB 2.0 REST API. Read the docs to know more about BangDB 2.0 REST API."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="Register a notification - BangDB REST API"
        />
        <meta
          name="twitter:description"
          content="Learn how to register a notification using BangDB 2.0 REST API. Read the docs to know more about BangDB 2.0 REST API."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">Register a notification</h1>
        <div className="article-body">
          <p>
            <strong>Method</strong> : POST
          </p>
          <p>
            <strong>URI</strong> : /db/notification/register
          </p>
          <p>
            <strong>Body</strong> : JSON doc for notification
          </p>
          <p>Example</p>
          <HighlightedJava
            code={`curl -H "Content-Type: application/json" -d' {"notifid":1234, "name":"high_temp", "rule":"Default rule", "subject":"high temperature", "msg":"A Notification has been generated for high temperature", "freq":60, "pri":3, "mailto":["sachin@bangdb.com","admin@bangdb.com"], "endpoints":[ "http://alert.oil.com"], "tags":[ "oil","sensor" ], "mailfrom":"alert@bangdb.com" }' -X POST http://192.168.1.105:18080/db/notification/register`}
          />
          <p>Response</p>
          <HighlightedOutput
            code={`{
   "msg": "notification registered successfully"
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
