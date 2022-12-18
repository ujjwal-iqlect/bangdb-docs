import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";
import HighlightedOutput from "../../../components/HighlightedOutput";
import HighlightedJava from "../../../components/HighlightedJava";

export default function GetListOfObjectsFilesInTheBucket() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          Get the list of objects/files in the bucket - BangDB REST API
        </title>
        <meta
          name="description"
          content="Learn how to get the list of objects/files in the bucket using BangDB 2.0 REST API. Read the docs to know more about BangDB 2.0 REST API."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Get the list of objects/files in the bucket - BangDB REST API"
        />
        <meta
          property="og:description"
          content="Learn how to get the list of objects/files in the bucket using BangDB 2.0 REST API. Read the docs to know more about BangDB 2.0 REST API."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="Get the list of objects/files in the bucket - BangDB REST API"
        />
        <meta
          name="twitter:description"
          content="Learn how to get the list of objects/files in the bucket using BangDB 2.0 REST API. Read the docs to know more about BangDB 2.0 REST API."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">
          Get the list of objects/files in the bucket
        </h1>
        <div className="article-body">
          <p>
            <strong>Method</strong> : POST
          </p>
          <p>
            <strong>URI</strong> : /brs/object/list/1
          </p>
          <p>
            <strong>Body</strong> :
          </p>
          <HighlightedJava code={`{"bucket_name":"<name of the bucket>"}`} />
          <aside className="doc-note">
            <strong>Note: </strong>There is 1 in the end of URI, (this will get
            deprecated but for now it&apos;s there).
          </aside>
          <p>Example</p>
          <HighlightedJava
            code={`curl -H "Content-Type: application/json" -d'{"bucket_name":"ml_bucket_info"}' -X POST http://192.168.1.105:18080/brs/object/list/1`}
          />
          <p>Response</p>
          <HighlightedOutput
            code={`{
   "total_keys":5,
   "key_list":[
      {
         "key":"sales_model__website:0:1:441:1648550728434692"
      },
      {
         "key":"sales_model__website__param:0:1:932:1648550728434760"
      },
      {
         "key":"sales_model__website__range:0:1:108:1648550728434721"
      },
      {
         "key":"sales_model__website.traindetails:0:1:11549:1648550728435030"
      },
      {
         "key":"sales_model__website__visitor_upload.txt:0:1:1062:1648548818373679"
      }
   ]
}`}
          />
          <p>
            You will notice that various files (including the model) for
            training was stored in this bucket.
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
