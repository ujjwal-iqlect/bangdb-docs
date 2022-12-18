import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";
import HighlightedOutput from "../../../components/HighlightedOutput";
import HighlightedJava from "../../../components/HighlightedJava";

export default function VariousNotificationQueries() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Various notification queries - BangDB REST API</title>
        <meta
          name="description"
          content="Learn how to various notification queries using BangDB 2.0 REST API. Read the docs to know more about BangDB 2.0 REST API."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Various notification queries - BangDB REST API"
        />
        <meta
          property="og:description"
          content="Learn how to various notification queries using BangDB 2.0 REST API. Read the docs to know more about BangDB 2.0 REST API."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="Various notification queries - BangDB REST API"
        />
        <meta
          name="twitter:description"
          content="Learn how to various notification queries using BangDB 2.0 REST API. Read the docs to know more about BangDB 2.0 REST API."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">Various notification queries</h1>
        <div className="article-body">
          <p>
            <strong>Method</strong> : POST
          </p>
          <p>
            <strong>URI</strong> : /db/&lt;db_name&gt;/query
          </p>
          <p>
            <strong>Body</strong> :
          </p>
          <HighlightedJava code={`{"sql":"<sql query...>"}`} />
          <ul>
            <li>List of all registered notification templates</li>
            <HighlightedJava code={`{"sql":"select * from reg_notif"}`} />
            <li>
              List of all notifications for a registered notification template
            </li>
            <HighlightedJava
              code={`{"sql":"select * from notif where notifid = <id>"}`}
            />
            <li>List of all open notifications</li>
            <HighlightedJava
              code={`{"sql":"select * from notif where openflag = 1"}`}
            />
            <li>Count of all notifications for a given notification id</li>
            <HighlightedJava
              code={`{"sql":"select count(*) from notif where notifid = <id>"}`}
            />
            <li>Count of all open notifications</li>
            <HighlightedJava
              code={`{"sql":"select count(*) from notif where notifid = <id> and openflag = 1"}`}
            />
          </ul>
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
