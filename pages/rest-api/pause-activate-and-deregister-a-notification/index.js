import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";
import HighlightedOutput from "../../../components/HighlightedOutput";
import HighlightedJava from "../../../components/HighlightedJava";

export default function PauseActivateAndDeregisterANotification() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          Pause, activate & de-register a notification - BangDB REST API
        </title>
        <meta
          name="description"
          content="Learn how to pause, activate & de-register a notification using BangDB 2.0 REST API. Read the docs to know more about BangDB 2.0 REST API."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Pause, activate & de-register a notification - BangDB REST API"
        />
        <meta
          property="og:description"
          content="Learn how to pause, activate & de-register a notification using BangDB 2.0 REST API. Read the docs to know more about BangDB 2.0 REST API."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="Pause, activate & de-register a notification - BangDB REST API"
        />
        <meta
          name="twitter:description"
          content="Learn how to pause, activate & de-register a notification using BangDB 2.0 REST API. Read the docs to know more about BangDB 2.0 REST API."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">
          Pause, activate & de-register a notification
        </h1>
        <div className="article-body">
          <p>
            <strong>Method</strong> : POST
          </p>
          <p>
            <strong>URI</strong> : /db/notification/state
          </p>
          <p>
            <strong>Body</strong> :
          </p>
          <HighlightedJava code={`{"notifid":"<notifid>","state":<0,1,-1>}`} />
          <aside className="doc-api-code">
            <p>
              <strong>state value</strong>
            </p>
            <p>state = 0 means pause the notification</p>
            <p>state = 1 means activate the notification</p>
            <p>state = -1 means deregister the notification and delete it</p>
          </aside>
          <p>Example</p>
          <HighlightedJava
            code={`curl -H "Content-Type: application/json" -d'{"notifid":1234,"state":0}' -X POST http://192.168.1.105:18080/db/notification/state`}
          />
          <p>Response</p>
          <HighlightedOutput
            code={`{
   "errcode":0,
   "error":[
      "[SUCCESS] notification template with notifid [ 1234 ] state has been changed properly"
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
    props: { apiSidebar: true },
  };
}
