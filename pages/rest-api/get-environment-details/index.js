import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";
import HighlightedOutput from "../../../components/HighlightedOutput";
import Codebox from "../../../components/Codebox";

export default function GetEnviromentDetails() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Get environment details - BangDB REST API</title>
        <meta
          name="description"
          content="Learn how to get environment details for a given table in the database using BangDB 2.0 REST API. Read the documentation to know more about BangDB 2.0 REST API."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Get environment details - BangDB REST API"
        />
        <meta
          property="og:description"
          content="Learn how to get environment details for a given table in the database using BangDB 2.0 REST API. Read the documentation to know more about BangDB 2.0 REST API."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="Get environment details - BangDB REST API"
        />
        <meta
          name="twitter:description"
          content="Learn how to get environment details for a given table in the database using BangDB 2.0 REST API. Read the documentation to know more about BangDB 2.0 REST API."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">Get environment details</h1>
        <div className="article-body">
          <p>Get environment details for a given table (system details):</p>
          <p>
            <strong>Method</strong> : GET
          </p>
          <p>
            <strong>URI</strong> :
            /db/&lt;dbname&gt;/&lt;table_name&gt;/tableenv
          </p>
          <p>Example</p>
          <Codebox
            code={`curl -X GET http://192.168.1.105:18080/db/mydb/my_table_test`}
          />
          <p>Response</p>
          <HighlightedOutput
            code={String.raw`{
   "db_type":1,
   "idx_type":2,
   "key_sz":24,
   "table_sz_hint":2,
   "log_sz_mb":128,
   "table_log_type":0,
   "table_type":1,
   "sort_method":2,
   "sort_direction":3,
   "key_type":1,
   "sort_id":6,
   "prim_data_type":2,
   "table_subtype":5,
   "wal_enabled":1,
   "allow_duplicate":1,
   "allow_rev_idx":0,
   "version_type":1,
   "ttlsec":0
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
