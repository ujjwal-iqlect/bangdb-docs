import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";
import HighlightedOutput from "../../../components/HighlightedOutput";
import HighlightedJava from "../../../components/HighlightedJava";

export default function GetTheTrainingStatusOfAModel() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Get the training status of a model - BangDB REST API</title>
        <meta
          name="description"
          content="Learn how to get the training status of a model using BangDB 2.0 REST API. Read the docs to know more about BangDB 2.0 REST API."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Get the training status of a model - BangDB REST API"
        />
        <meta
          property="og:description"
          content="Learn how to get the training status of a model using BangDB 2.0 REST API. Read the docs to know more about BangDB 2.0 REST API."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="Get the training status of a model - BangDB REST API"
        />
        <meta
          name="twitter:description"
          content="Learn how to get the training status of a model using BangDB 2.0 REST API. Read the docs to know more about BangDB 2.0 REST API."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">Get the training status of a model</h1>
        <div className="article-body">
          <p>
            <strong>Method</strong> : GET
          </p>
          <p>
            <strong>URI</strong> :
            /ml/&lt;schema_name&gt;/&lt;model_name&gt;/status
          </p>
          <p>Example</p>
          <p>For previous training request, we can see the status here</p>
          <HighlightedJava
            code={`curl -X GET http://192.168.1.105:18080/ml/website/sales_model/status`}
          />
          <p>Response</p>
          <HighlightedOutput
            code={`{
  "schema-name": "website",
  "model_name": "sales_model",
  "train_req_state": 25
}`}
          />
          <p>
            The train_req_state = 25 means success. Here is the list of enums
            for various different states.
          </p>
          <aside className="doc-api-code">
            <p>
              <strong>
                For All Algos except IE algos (IE, IE_NER, IE_SENT, KB)
              </strong>
            </p>
            <p>ML_BANGDB_TRAINING_STATE_INVALID_INPUT = 10,</p>
            <p>ML_BANGDB_TRAINING_STATE_NOT_PRSENT,</p>
            <p>ML_BANGDB_TRAINING_STATE_ERROR_PARSE,</p>
            <p>ML_BANGDB_TRAINING_STATE_ERROR_FORMAT,</p>
            <p>ML_BANGDB_TRAINING_STATE_ERROR_BRS,</p>
            <p>ML_BANGDB_TRAINING_STATE_ERROR_TUNE,</p>
            <p>ML_BANGDB_TRAINING_STATE_ERROR_TRAIN,</p>
            <p>ML_FILE_TYPE_ERROR_VAL_TESTDATA,</p>
            <p>ML_FILE_TYPE_ERROR_VAL_TRAINDATA,</p>
            <p>ML_BANGDB_TRAINING_STATE_LIMBO, //intermediate states</p>
            <p>ML_BANGDB_TRAINING_STATE_BRS_GET_PENDING,</p>
            <p>ML_BANGDB_TRAINING_STATE_BRS_GET_DONE,</p>
            <p>ML_BANGDB_TRAINING_STATE_REFORMAT_DONE,</p>
            <p>ML_BANGDB_TRAINING_STATE_SCALE_TUNING_DONE,</p>
            <p>
              ML_BANGDB_TRAINING_STATE_BRS_MODEL_UPLOAD_PENDING, //training done
            </p>
            <p>ML_BANGDB_TRAINING_STATE_TRAINING_DONE, //25</p>
            <p>ML_BANGDB_TRAINING_STATE_DEPRICATED</p>
          </aside>
          <aside className="doc-api-code">
            <p>
              <strong>For IE algos (IE, IE_NER, IE_SENT, KB)</strong>
            </p>
            <p>IE_BANGDB_TRAINING_STATE_INVALID_INPUT = 10,</p>
            <p>IE_BANGDB_TRAINING_STATE_NOT_PRSENT,</p>
            <p>IE_BANGDB_TRAINING_STATE_ERROR_BRS,</p>
            <p>IE_BANGDB_TRAINING_STATE_ERROR_HELPER_FILES,</p>
            <p>IE_BANGDB_TRAINING_STATE_ERROR_BRS_FEATURE_EX,</p>
            <p>IE_BANGDB_TRAINING_STATE_ERROR_BRS_HELP_FILES,</p>
            <p>IE_BANGDB_TRAINING_STATE_ERROR_PRE_NER_TRAIN,</p>
            <p>IE_BANGDB_TRAINING_STATE_LIMBO,</p>
            <p>IE_BANGDB_TRAINING_STATE_ERROR_NER_TRAIN,</p>
            <p>IE_BANGDB_TRAINING_STATE_ERROR_NER_TRAIN_BRS,</p>
            <p>IE_BANGDB_TRAINING_STATE_ERROR_PRE_REL_TRAIN, //20</p>
            <p>IE_BANGDB_TRAINING_STATE_ERROR_REL_TRAIN,</p>
            <p>IE_BANGDB_TRAINING_STATE_ERROR_REL_TRAIN_BRS,</p>
            <p>IE_BANGDB_TRAINING_STATE_ERROR_REL_LIST_BRS,</p>
            <p>IE_FILE_TYPE_ERROR_VAL_TRAINDATA,</p>
            <p>IE_FILE_TYPE_ERROR_VAL_TESTDATA,</p>
            <p>IE_FILE_TYPE_ERROR_VAL_CLASSDATA,</p>
            <p>IE_FILE_TYPE_ERROR_VAL_TOTALEXDATA, //intermediate states</p>
            <p>IE_BANGDB_TRAINING_STATE_BRS_GET_PENDING,</p>
            <p>IE_BANGDB_TRAINING_STATE_BRS_GET_DONE,</p>
            <p>IE_BANGDB_TRAINING_STATE_HELPER_DONE, //30 //KB</p>
            <p>IE_BANGDB_TRAINING_STATE_PRE_NER_DONE,</p>
            <p>IE_BANGDB_TRAINING_STATE_NER_DONE, // NER. [ for IE_NER ]</p>
            <p>IE_BANGDB_TRAINING_STATE_PRE_REL_DONE,</p>
            <p>IE_BANGDB_TRAINING_STATE_REL_DONE,</p>
            <p>IE_BANGDB_TRAINING_STATE_BRS_MODEL_UPLOAD_PENDING,</p>
            <p>
              IE_BANGDB_TRAINING_STATE_BRS_RELLIST_UPLOAD_PENDING, //training
              done
            </p>
            <p>IE_BANGDB_TRAINING_HELP_DONE, //37</p>
            <p>IE_BANGDB_TRAINING_STATE_TRAINING_DONE,</p>
            <p>IE_BANGDB_TRAINING_STATE_DEPRICATED,</p>
            <p></p>
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
