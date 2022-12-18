import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";
import HighlightedOutput from "../../../components/HighlightedOutput";
import HighlightedJava from "../../../components/HighlightedJava";

export default function ListAllTheBucketsInTheDb() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>List all the buckets in the DB - BangDB REST API</title>
        <meta
          name="description"
          content="Learn how to list all the buckets in the database using BangDB 2.0 REST API. Read the docs to know more about BangDB 2.0 REST API."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="List all the buckets in the DB - BangDB REST API"
        />
        <meta
          property="og:description"
          content="Learn how to list all the buckets in the database using BangDB 2.0 REST API. Read the docs to know more about BangDB 2.0 REST API."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="List all the buckets in the DB - BangDB REST API"
        />
        <meta
          name="twitter:description"
          content="Learn how to list all the buckets in the database using BangDB 2.0 REST API. Read the docs to know more about BangDB 2.0 REST API."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">List all the buckets in the DB</h1>
        <div className="article-body">
          <p>
            <strong>Method</strong> : POST
          </p>
          <p>
            <strong>URI</strong> : /brs/list/&lt;flag&gt;
          </p>
          <p>
            <strong>Body</strong> :
          </p>
          <HighlightedJava code={`{"access_key":"brs_access_key"}`} />
          <p>Example</p>
          <HighlightedJava
            code={`curl -H "Content-Type: application/json" -d'{"access_key":"brs_access_key"}' -X POST http://192.168.1.105:18080/brs/list`}
          />
          <p>Response</p>
          <HighlightedOutput
            code={`{
   "total_buckets":4,
   "bucket_list":[
      {
         "bucket_info":"{\"bucket_name\":\"ml_bucket_info\",\"access_key\":\"brs_access_key\",\"secret_key\":\"brs_secret_key\",\"ttl\":604800,\"create_time\":1648495823801531,\"_pk\":\"ml_bucket_info\",\"_v\":1}"
      },
      {
         "bucket_info":"{\"bucket_name\":\"bangdb_udf_bucket\",\"access_key\":\"brs_access_key\",\"secret_key\":\"brs_secret_key\",\"ttl\":604800,\"create_time\":1648495823838877,\"_pk\":\"bangdb_udf_bucket\",\"_v\":1}"
      },
      {
         "bucket_info":"{\"bucket_name\":\"user_service_media_bucket\",\"access_key\":\"brs_access_key\",\"secret_key\":\"brs_secret_key\",\"create_time\":1648495826702257,\"_pk\":\"user_service_media_bucket\",\"_v\":1}"
      },
      {
         "bucket_info":"{\"bucket_name\":\"_bucket_info_billing\",\"access_key\":\"brs_access_key\",\"secret_key\":\"brs_secret_key\",\"create_time\":1648495826757492,\"_pk\":\"_bucket_info_billing\",\"_v\":1}"
      }
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
