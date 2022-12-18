import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";
import HighlightedOutput from "../../../components/HighlightedOutput";
import HighlightedJava from "../../../components/HighlightedJava";

export default function CreateABucket() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Create a bucket - BangDB REST API</title>
        <meta
          name="description"
          content="Learn how to create a bucket in the BRS using BangDB 2.0 REST API. Read the docs to know more about BangDB 2.0 REST API."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Create a bucket - BangDB REST API" />
        <meta
          property="og:description"
          content="Learn how to create a bucket in the BRS using BangDB 2.0 REST API. Read the docs to know more about BangDB 2.0 REST API."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="Create a bucket - BangDB REST API"
        />
        <meta
          name="twitter:description"
          content="Learn how to create a bucket in the BRS using BangDB 2.0 REST API. Read the docs to know more about BangDB 2.0 REST API."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">Create a bucket</h1>
        <div className="article-body">
          <p>
            <strong>Method</strong> : POST
          </p>
          <p>
            <strong>URI</strong> : /brs/bucket
          </p>
          <p>
            <strong>Body</strong> : JSON doc with bucket info
          </p>
          <p>Structure of body</p>
          <HighlightedJava
            code={`{
   "bucket_name":"",
   "access_key":"brs_access_key",
   "secret_key":"brs_secret_key"
}`}
          />
          <p>Example</p>
          <HighlightedJava
            code={`curl -H "Content-Type: application/json" -d'{"bucket_name":"my_test_bucket","access_key":"brs_access_key","secret_key":"brs_secret_key"}' -X POST http://192.168.1.105:18080/brs/bucket`}
          />
          <p>Response</p>
          <HighlightedOutput
            code={`{
   "success": 0
}`}
          />
          <p>
            Now, if you list the BRS buckets, you will see this bucket there
            too.
          </p>
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
