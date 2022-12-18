import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";
import HighlightedCpp from "../../../components/HighlightedCpp";
import HighlightedOutput from "../../../components/HighlightedOutput";
import Codebox from "../../../components/Codebox";

export default function ListAllTheTables() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>List all the tables - BangDB REST API</title>
        <meta
          name="description"
          content="Learn how to list all the tables in the database using BangDB 2.0 REST API. Read the documentation to know more about BangDB 2.0 REST API."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="List all the tables - BangDB REST API"
        />
        <meta
          property="og:description"
          content="Learn how to list all the tables in the database using BangDB 2.0 REST API. Read the documentation to know more about BangDB 2.0 REST API."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="List all the tables - BangDB REST API"
        />
        <meta
          name="twitter:description"
          content="Learn how to list all the tables in the database using BangDB 2.0 REST API. Read the documentation to know more about BangDB 2.0 REST API."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">List all the tables</h1>
        <div className="article-body">
          <p>List all the tables in the database:</p>
          <p>
            <strong>Method</strong> : GET
          </p>
          <p>
            <strong>URI</strong> : /db/&lt;dbname&gt;/list
          </p>
          <p>Example</p>
          <Codebox
            code={`curl -X GET http://192.168.1.105:18080/db/mydb/list`}
          />
          <p>Response</p>
          <HighlightedOutput
            code={String.raw`{
   "tables":[
      "_sys_graph_meta_",
      "_api_key_tbl",
      "_sys_stream_meta_",
      "_sys_dashboard_doc_tbl",
      "_sys_schema_meta_",
      "_sys_user_dashboard_tbl",
      "_sys_user_server_tbl",
      "_sys_sw_mgr_idx_tbl",
      "_attr_slot_uc",
      "_sys_notif_meta_tbl",
      "_slot_attr_c",
      "_bucket_info_billing",
      "_slot_attr_sv_rs",
      "ml_pred_train_housekeep_tbl",
      "_sys_user_activity_log_tbl",
      "_sys_entity_table_",
      "_attr_slot_tv_rs",
      "ml_bucket_info",
      "_attr_slot_sv_rs",
      "bangdb_udf_bucket",
      "_attr_slot_c",
      "_sys_user_tbl",
      "ml_pred_housekeep_tbl",
      "user_service_media_bucket",
      "_sys_notif_tbl_2",
      "_sys_bangdb_rs_meta_tbl",
      "_sys_attr_stats_tbl",
      "_sys_notif_tbl_1",
      "_slot_attr_uc",
      "_sys_sw_mgr_tbl",
      "_sys_stream_schema_",
      "_slot_attr_tv_rs"
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
