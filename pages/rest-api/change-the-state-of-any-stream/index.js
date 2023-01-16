import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";
import HighlightedOutput from "../../../components/HighlightedOutput";
import HighlightedCpp from "../../../components/HighlightedCpp";
import HighlightedJava from "../../../components/HighlightedJava";
import Codebox from "../../../components/Codebox";

export default function ChangeTheStateOfAnyStream() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Change/Get the state of any stream - BangDB REST API</title>
        <meta
          name="description"
          content="Learn how to change or get the state of any stream using BangDB 2.0 REST API. Read the documentation to know more about BangDB 2.0 REST API."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Change/Get the state of any stream - BangDB REST API"
        />
        <meta
          property="og:description"
          content="Learn how to change or get the state of any stream using BangDB 2.0 REST API. Read the documentation to know more about BangDB 2.0 REST API."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="Change/Get the state of any stream - BangDB REST API"
        />
        <meta
          name="twitter:description"
          content="Learn how to change or get the state of any stream using BangDB 2.0 REST API. Read the documentation to know more about BangDB 2.0 REST API."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">Change/Get the state of any stream</h1>
        <div className="article-body">
          <h2>Change the state</h2>
          <p>To change the state of any stream (ON | OFF):</p>

          <p>
            <strong>Method</strong> : PUT
          </p>
          <p>
            <strong>URI</strong> :
            /stream/&lt;schema_name&gt;/&lt;stream_name&gt;/state
          </p>
          <p>Body:</p>
          <HighlightedCpp
            code={`{"state":0} // [ 0 for switching OFF and 1 for ON, when in OFF state, stream can't ingest/process any event ]`}
          />
          <p>Example</p>
          <HighlightedJava
            code={`curl -H "Content-Type: application/json" -d'{"state":1}' -X PUT http://192.168.1.105:18080/stream/ecomm/visitor/state`}
          />
          <p>Response</p>
          <HighlightedOutput
            code={`{
   "errcode":0,
   "error":[
      "the stream [ visitor ] is already enabled"
   ]
}`}
          />
          <p>
            errcode 0 means success, but state was not changed as it&apos;s
            already in the enabled state.
          </p>
          <h2>Get the state</h2>
          <p>To get the state of the stream state we can call:</p>
          <p>
            <strong>Method</strong> : GET
          </p>
          <p>
            <strong>URI</strong> :
            /stream/&lt;schema_name&gt;/&lt;stream_name&gt;/state
          </p>
          <p>Example</p>
          <HighlightedJava
            code={`curl -X GET http://192.168.1.105:18080/stream/website/visitor/state`}
          />
          <p>Response</p>
          <HighlightedOutput
            code={`{
   "state": 1
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
