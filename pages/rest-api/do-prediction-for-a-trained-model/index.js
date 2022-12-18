import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";
import HighlightedOutput from "../../../components/HighlightedOutput";
import HighlightedJava from "../../../components/HighlightedJava";

export default function DoAPredictionForATrainedModel() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Do prediction for a trained model - BangDB REST API</title>
        <meta
          name="description"
          content="Learn how to do prediction for a trained model using BangDB 2.0 REST API. Read the docs to know more about BangDB 2.0 REST API."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Do prediction for a trained model - BangDB REST API"
        />
        <meta
          property="og:description"
          content="Learn how to do prediction for a trained model using BangDB 2.0 REST API. Read the docs to know more about BangDB 2.0 REST API."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="Do prediction for a trained model - BangDB REST API"
        />
        <meta
          name="twitter:description"
          content="Learn how to do prediction for a trained model using BangDB 2.0 REST API. Read the docs to know more about BangDB 2.0 REST API."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">Do prediction for a trained model</h1>
        <div className="article-body">
          <p>
            <strong>Method</strong> : POST
          </p>
          <p>
            <strong>URI</strong> : /ml/pred/&lt;pred_type&gt;
          </p>
          <p>
            <strong>Body</strong> : JSON doc for prediction
          </p>
          <p>&lt;pred_type&gt; has two possible values.</p>
          <p>
            1 = Async, should be used when predicting for lots of data in a
            file.
          </p>
          <p>
            2 = Sync, should be used when predicting for a single data line.
          </p>
          <p>Structure of the body</p>
          <HighlightedJava
            code={`{
   "schema-name":"<schema-name>",
   "model_name":"<model_name>",
   "data_type":"<1 for file, 2 for single data>",
   "attr_type":"<1 for number only, 2 for string only, 3 for hybrid>", // user hybrid when in doubt
   "algo_type":"<SVM | KMEANS etc ..>",
   "input_format":"<CSV | SVM | JSON | TEXT | KV>", // format of input data (data we wish to predict on)
   "expected_format":"<CSV | SVM | JSON >", // format of data expected by algo/model
   "data":"data"
}`}
          />
          <p>
            Now for the model trained in previous stage, let&apos;s do the
            prediction.
          </p>
          <p>Example</p>
          <HighlightedJava
            code={`curl -H "Content-Type: application/json" -d'{"schema-name":"website","model_name":"sales_model", "data_type":2,"attr_type":3,"algo_type":"SVM","input_format":"CSV","expected_format":"SVM","data":"v1,p2,c2,pg2,2"}' -X POST http://192.168.1.105:18080/ml/pred/2`}
          />
          <p>Response</p>
          <HighlightedOutput
            code={`{
   "predict_labels":49.239650444325,
   "mean_sq_err":2424.543175879315,
   "sq_cor_coef":1,
   "errorcode":0
}`}
          />
          <p>
            The predicted output is 49.23, which is the predicted sales for this
            row.
          </p>
          <p>
            Now let&apos;s add an event into the “visitor” stream, since the
            model is available, the stream processing engine should be able to
            use the model to predict the value and add into the stream as
            defined.
          </p>
          <HighlightedJava
            code={`curl -H "Content-Type: application/json" -d'{"vid":"v1","prod":"p2","catid":"c2","pgid":"pg2","price":54.50,"items":1}' -X POST http://192.168.1.105:18080/stream/website/visitor`}
          />
          <p>Now fetch the row from the stream and check</p>
          <HighlightedJava
            code={`curl -H "Content-Type: application/json" -d'{"sql":"select * from website.visitor limit 1"}' -X POST http://192.168.1.105:18080/db/mydb/query`}
          />
          <HighlightedOutput
            code={`{
   "rows":[
      {
         "k":1648557066923805,
         "v":"{\"vid\":\"v1\",\"prod\":\"p2\",\"catid\":\"c2\",\"pgid\":\"pg2\",\"price\":54.5,\"items\":1,\"_pk\":1648557066923805,\"pred_sales\":49.275022189464,\"_v\":1}"
      }
   ],
   "levk":1648557066923805,
   "num_items":1,
   "more_data_to_come":1,
   "switch_done":1
}`}
          />
          <p>
            As you see now, &quot;pred_sales&quot;:49.275 is added automatically
            by the DB.
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
