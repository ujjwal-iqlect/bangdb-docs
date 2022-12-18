import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";
import HighlightedOutput from "../../../components/HighlightedOutput";
import Codebox from "../../../components/Codebox";

export default function GetTheGeneralInfoStatisticsOfTheTables() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Get the general statistics of tables - BangDB REST API</title>
        <meta
          name="description"
          content="Learn how to get the general statistics of tables in the database using BangDB 2.0 REST API. Read the documentation to know more about BangDB 2.0 REST API."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Get the general statistics of tables - BangDB REST API"
        />
        <meta
          property="og:description"
          content="Learn how to get the general statistics of tables in the database using BangDB 2.0 REST API. Read the documentation to know more about BangDB 2.0 REST API."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="Get the general statistics of tables - BangDB REST API"
        />
        <meta
          name="twitter:description"
          content="Learn how to get the general statistics of tables in the database using BangDB 2.0 REST API. Read the documentation to know more about BangDB 2.0 REST API."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">Get the general statistics of tables</h1>
        <div className="article-body">
          <p>To get the statistics of tables within the database:</p>
          <p>
            <strong>Method</strong> : GET
          </p>
          <p>
            <strong>URI</strong> : /db/&lt;dbname&gt;/list/&lt;flag&gt;
          </p>
          <p>
            flag has value 0 or 1, 0 for brief stats and 1 for verbose. If you
            don&apos;t pass &quot;flag&quot; value then it&apos;s 0.
          </p>
          <p>Example</p>
          <Codebox
            code={`curl -X GET http://192.168.1.105:18080/db/mydb/stat`}
          />
          <p>Response</p>
          <HighlightedOutput
            code={`{
   "database":"mydb",
   "buffer_pool":4296202240,
   "tables":[
      {
         "name":"_sys_graph_meta_",
         "issys":1,
         "num_records":0,
         "num_index":0,
         "files":[
            
         ],
         "total_size":32768,
         "num_files":3
      },
      {
         "name":"_api_key_tbl",
         "issys":1,
         "num_records":0,
         "num_index":0,
         "files":[
            
         ],
         "total_size":32768,
         "num_files":3
      },
      "......",
      {
         "name":"_slot_attr_tv_rs",
         "issys":1,
         "num_records":0,
         "num_index":0,
         "files":[
            
         ],
         "total_size":49152,
         "num_files":3
      }
   ],
   "num_tables":32
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
