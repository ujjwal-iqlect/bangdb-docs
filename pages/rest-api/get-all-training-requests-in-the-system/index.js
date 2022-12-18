import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";
import HighlightedOutput from "../../../components/HighlightedOutput";
import HighlightedJava from "../../../components/HighlightedJava";

export default function GetAllTrainingRequestsInTheSystem() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Get all training requests in the system - BangDB REST API</title>
        <meta
          name="description"
          content="Learn how to get all the training requests in the system using BangDB 2.0 REST API. Read the docs to know more about BangDB 2.0 REST API."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Get all training requests in the system - BangDB REST API"
        />
        <meta
          property="og:description"
          content="Learn how to get all the training requests in the system using BangDB 2.0 REST API. Read the docs to know more about BangDB 2.0 REST API."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="Get all training requests in the system - BangDB REST API"
        />
        <meta
          name="twitter:description"
          content="Learn how to get all the training requests in the system using BangDB 2.0 REST API. Read the docs to know more about BangDB 2.0 REST API."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">
          Get all training requests in the system
        </h1>
        <div className="article-body">
          <p>
            <strong>Method</strong> : GET
          </p>
          <p>
            <strong>URI</strong> : /ml/&lt;schema_name&gt;/request
          </p>
          <p>Example</p>
          <HighlightedJava
            code={`curl -X GET http://192.168.1.105:18080/ml/website/request`}
          />
          <p>Response</p>
          <HighlightedOutput
            code={`{
   "rows":[
      {
         "k":"website:sales_model",
         "v":"{\"schema-name\":\"website\",\"training_details\":{\"training_source\":\"visitor_upload.txt\",\"file_size_mb\":1,\"target_idx\":5,\"input_format\":\"JSON\",\"is_src_global\":0,\"train_speed\":3,\"bucket_name\":\"ml_bucket_info\",\"training_source_type\":1,\"expected_format\":\"SVM\"},\"algo_type\":\"SVM\",\"tune_params\":1,\"attr_list\":[{\"position\":0,\"name\":\"vid\"},{\"position\":1,\"name\":\"prod\"},{\"position\":2,\"name\":\"pgid\"},{\"position\":3,\"name\":\"catid\"},{\"name\":\"items\",\"position\":4},{\"name\":\"price\",\"position\":5}],\"scale\":1,\"attr_type\":3,\"algo_param\":{\"probability\":0,\"svm_type\":3,\"eps_svr\":0.1,\"kernel_type\":0,\"shrinking\":0,\"cost\":100,\"termination_criteria\":0.001},\"model_name\":\"sales_model\",\"train_start_ts\":1648550728425224,\"train_end_ts\":1648550728434816,\"train_req_state\":25,\"tuned_algo_params\":{\"C\":0.0625,\"g\":4,\"cache_size\":100,\"coef0\":0,\"degree\":3,\"eps\":0.001,\"kernel_type\":0,\"nr_weight\":0,\"nu\":0.5,\"p\":0.1,\"prob\":0,\"shrinking\":0,\"svm_type\":3,\"train_perf\":704},\"train_log\":{\"log\":[\"1648550728424954 : received train request\",\"verification done\",\"retrieved the training file [ sales_model__website__visitor_upload.txt ] from BRS\",\"file reformat done\",\"scaling and tuning the model params, by training many different models\",\"scaling and tuning done, selected params = 0.062500, 4.000000, 704.514490\",\"starting training for model [ sales_model__website ]\",\"1648550728434808 : training successful!\"],\"schema-name\":\"website\",\"model_name\":\"sales_model\",\"algo_type\":\"SVM\",\"train_start_ts\":1648550728425224,\"train_end_ts\":1648550728434809,\"errorcode\":0}}"
      }
   ],
   "num_items":1,
   "more_data_to_come":0,
   "switch_done":0
}`}
          />
          <aside className="doc-note">
            <strong>Note: </strong>It returns an array of model training
            requests, where &quot;k&quot; is schema-name : model_name and
            &quot;v&quot; is the training request.
          </aside>
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
