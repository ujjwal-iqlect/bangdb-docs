import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";
import HighlightedOutput from "../../../components/HighlightedOutput";
import HighlightedJava from "../../../components/HighlightedJava";

export default function GetPredictionStatusForAModel() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          Get prediction status for a model (async) - BangDB REST API
        </title>
        <meta
          name="description"
          content="Learn how to get prediction status for a model (async) using BangDB 2.0 REST API. Read the docs to know more about BangDB 2.0 REST API."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Get prediction status for a model (async) - BangDB REST API"
        />
        <meta
          property="og:description"
          content="Learn how to get prediction status for a model (async) using BangDB 2.0 REST API. Read the docs to know more about BangDB 2.0 REST API."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="Get prediction status for a model (async) - BangDB REST API"
        />
        <meta
          name="twitter:description"
          content="Learn how to get prediction status for a model (async) using BangDB 2.0 REST API. Read the docs to know more about BangDB 2.0 REST API."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">
          Get prediction status for a model (async)
        </h1>
        <div className="article-body">
          <p>
            To get prediction status for a model, in-case of async prediction:
          </p>
          <p>
            We can do prediction for file in async manner as well (esp. for big
            files), and in that case we can check out the status of the
            prediction as follows. Note we can do prediction for files in sync
            manner as well, so it&apos;s up to the user to pick one. The
            &lt;pred_type&gt; as defined in the previous API indicates whether
            the prediction was in sync (1) or async(2) manner.
          </p>
          <p>
            <strong>Method</strong> : GET
          </p>
          <p>
            <strong>URI</strong> :
            /ml/&lt;schema_name&gt;/&lt;model_name&gt;/&lt;file_name&gt;/status
          </p>
          <p>The prediction status has following values (Enum)</p>
          <aside className="doc-api-code">
            <p>ML_BANGDB_PRED_STATE_INVALID_INPUT = 10, // error - start</p>
            <p>ML_BANGDB_PRED_STATE_NOT_PRESENT,</p>
            <p>ML_BANGDB_PRED_STATE_ERROR_PARSE,</p>
            <p>ML_BANGDB_PRED_STATE_ERROR_FORMAT,</p>
            <p>ML_BANGDB_PRED_STATE_ERROR_BRS_FETCH,</p>
            <p>ML_BANGDB_PRED_STATE_ERROR_FILE_FORMAT,</p>
            <p>ML_BANGDB_PRED_STATE_ERROR_FILE_REFORMAT,</p>
            <p>ML_BANGDB_PRED_STATE_ERROR_FILE_TUNE,</p>
            <p>ML_BANGDB_PRED_STATE_ERROR_PREDICT,</p>
            <p>ML_BANGDB_PRED_STATE_LIMBO, // error -end</p>
            <p>ML_BANGDB_PRED_STATE_BRS_FETCH_PENDING,</p>
            <p>ML_BANGDB_PRED_STATE_BRS_FETCH_DONE,</p>
            <p>ML_BANGDB_PRED_STATE_REFORMAT_DONE,</p>
            <p>ML_BANGDB_PRED_STATE_TUNE_DONE,</p>
            <p>ML_BANGDB_PRED_STATE_BRS_PUT_DONE,</p>
            <p>ML_BANGDB_PRED_STATE_PREDICT_DONE,</p>
            <p>ML_BANGDB_PRED_STATE_DEPRICATED</p>
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
