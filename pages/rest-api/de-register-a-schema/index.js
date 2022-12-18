import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";
import HighlightedOutput from "../../../components/HighlightedOutput";

export default function DeregisterASchema() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>De-register a schema - BangDB REST API</title>
        <meta
          name="description"
          content="Learn how to de-register a schema using BangDB 2.0 REST API. Read the docs to know more about BangDB 2.0 REST API."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="De-register a schema - BangDB REST API"
        />
        <meta
          property="og:description"
          content="Learn how to de-register a schema using BangDB 2.0 REST API. Read the docs to know more about BangDB 2.0 REST API."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="De-register a schema - BangDB REST API"
        />
        <meta
          name="twitter:description"
          content="Learn how to de-register a schema using BangDB 2.0 REST API. Read the docs to know more about BangDB 2.0 REST API."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">De-register a schema</h1>
        <div className="article-body">
          <p>
            <strong>Method</strong> : DELETE
          </p>
          <p>
            <strong>URI</strong> : /stream/&lt;schema_name&gt;
          </p>
          <p>Response</p>
          <HighlightedOutput
            code={`{
    "deleted_streams": [
        {
            "name": "website__visitor",
            "stid": 5898111106141304454
        },
        {
            "name": "website__prod_details",
            "stid": 4480562733049181394
        },
        {
            "name": "website__visitor__catid__vid",
            "stid": 311737534354235283
        },
        {
            "name": "website__visitor__catid__pgid__vid",
            "stid": 587461041630563358
        },
        {
            "name": "website__visitor__catid__price",
            "stid": 5472232817932745759
        },
        {
            "name": "website__prod_details_1",
            "stid": 9133144046443633972
        }
    ],
    "errcode": 0,
    "num_streams_del": 6
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
