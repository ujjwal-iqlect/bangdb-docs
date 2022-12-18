import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";
import HighlightedOutput from "../../../components/HighlightedOutput";
import HighlightedJava from "../../../components/HighlightedJava";

export default function GetUsageOfTheSchema() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Get usage of the schema - BangDB REST API</title>
        <meta
          name="description"
          content="Learn how to get usage of the schema, number of events & size ingested & their stats etc. using BangDB 2.0 REST API. Read the docs to know more about BangDB 2.0 REST API."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Get usage of the schema - BangDB REST API"
        />
        <meta
          property="og:description"
          content="Learn how to get usage of the schema, number of events & size ingested & their stats etc. using BangDB 2.0 REST API. Read the docs to know more about BangDB 2.0 REST API."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="Get usage of the schema - BangDB REST API"
        />
        <meta
          name="twitter:description"
          content="Learn how to get usage of the schema, number of events & size ingested & their stats etc. using BangDB 2.0 REST API. Read the docs to know more about BangDB 2.0 REST API."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">Get usage of the schema</h1>
        <div className="article-body">
          <p>
            <strong>Method</strong> : POST
          </p>
          <p>
            <strong>URI</strong> : /stream/usage
          </p>
          <p>
            <strong>Body</strong> :
          </p>
          <HighlightedJava code={`{"sql":"select usage from bangdb_stream"}`} />
          <HighlightedJava
            code={`curl -H "Content-Type: application/json" -d' {"sql":"select usage from bangdb_stream"}' -X POST http://192.168.1.105:18080/stream/usage`}
          />
          <p>Response</p>
          <HighlightedOutput
            code={`{
   "rows":[
      {
         "k":9223372036854775807,
         "v":"{\"fromts\":0,\"tots\":9223372036854775807,\"aggr_val\":{\"cnt\":0,\"sum\":0,\"min\":0,\"max\":0,\"avg\":0,\"stdd\":0,\"skew\":0,\"kurt\":0}}"
      }
   ],
   "num_items":1,
   "more_data_to_come":0,
   "switch_done":0
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
