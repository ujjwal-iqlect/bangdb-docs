import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";
import HighlightedOutput from "../../../components/HighlightedOutput";
import HighlightedJava from "../../../components/HighlightedJava";
import HighlightedCpp from "../../../components/HighlightedCpp";

export default function TrainAModel() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Train a model - BangDB REST API</title>
        <meta
          name="description"
          content="Learn how to train a model using BangDB 2.0 REST API. Read the docs to know more about BangDB 2.0 REST API."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Train a model - BangDB REST API" />
        <meta
          property="og:description"
          content="Learn how to train a model using BangDB 2.0 REST API. Read the docs to know more about BangDB 2.0 REST API."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="Train a model - BangDB REST API" />
        <meta
          name="twitter:description"
          content="Learn how to train a model using BangDB 2.0 REST API. Read the docs to know more about BangDB 2.0 REST API."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">Train a model</h1>
        <div className="article-body">
          <p>
            <strong>Method</strong> : POST
          </p>
          <p>
            <strong>URI</strong> : /ml/train
          </p>
          <p>
            <strong>Body</strong> : JSON doc for training request
          </p>
          <p>The structure of body is as follows:</p>
          <HighlightedJava
            code={`{
   "schema-name": "<name of the schema>",
   "model_name": "<model_name>",
   "algo_type": "<algo SVM | KMEANS | LIN | IE | PY ....>",
   "algo_param": {
      "algo specific key/value pairs"
   },
   "training_details": {
      "training_source_type": "<source of training data; FILE | STREAM | BUCKET | DIR>",
      "stream-name": "<name of stream if source is STREAM>",
      "training_source": "<training file name>",
      "file_size_mb": "<estimated size of the training file>",
      "is_src_global": "<0 | 1, we can have files in global area or local to a schema>",
      "bucket_name": "<name of bucket for several files>",
      "input_format": "<JSON | CSV | SVM | TEXT | KV>",
      "expected_format": "<JSON | CSV | SVM | TEXT>",
      "target_idx": "<in case of csv, what's the target column's index>" ,
      "train_speed": "<speed of training VERY FAST | FAST | MEDIUM | SLOW | VERY SLOW&gt";
   },
   "attr_type": "<NUM(1) | STRING(2) | HYBRID(3)>",
   "scale": "<0|1, scale the data before training or not>",
   "tune_params": "<0|1, tune the param and select the best ones>",
   "attr_list": [
      {
         "name": "t0",
         "position": 0,
         "type":9
      },
   ... // list of attributes, their types and positions in the CSV file
   ]
  }
}`}
          />
          <aside className="doc-note">
            <strong>Note: </strong>It&apos;s really simple to create the json
            doc directly or use CLI or dashboard. You can save this schema and
            simply upload for test as well.
          </aside>
          <p>Example</p>
          <p>
            In our previous stream example, we registered a &quot;website&quot;
            schema. In that schema there is a stream called &quot;visitor&quot;
            where we are ingesting few attributes (vid, prod, catid, pgid, price
            and items). We have defined a &quot;catr&quot; (computed attribute)
            there in which we wish to predict the sales value for given set of
            attributes.
          </p>
          <p>
            We wish to predict this continuously as events arrive. We have
            mentioned using &quot;sales_model&quot; model to predict the sales
            value and storing them in the attribute &quot;pred_sales&quot;. Now
            if you query and see the stream data, you will not find the
            predicted value stored in &quot;pred_sales&quot;, this is because we
            have not trained the model yet.
          </p>
          <HighlightedJava
            code={`curl -H "Content-Type: application/json" -d'{"sql":"select * from website.visitor limit 1"}' -X POST http://192.168.1.105:18080/db/mydb/query`}
          />
          <p>Response</p>
          <HighlightedOutput
            code={`{
   "rows":[
      {
         "k":1648495954506356,
         "v":"{\"vid\":\"v1\",\"prod\":\"p2\",\"catid\":\"c2\",\"pgid\":\"pg2\",\"price\":51.5,\"items\":1,\"_pk\":1648495954506356,\"_v\":1}"
      }
   ],
   "levk":1648495954506356,
   "num_items":1,
   "more_data_to_come":1,
   "switch_done":1
}`}
          />
          <p>
            As you see, there is no &quot;pred_sales&quot; attribute in the
            event row (&quot;v&quot;).
          </p>
          <p>
            Now, let&apos;s train the model &quot;sales_model&quot; and next
            time when we insert an event, db will be able to find the model and
            use it to predict the salea value and store that value in the
            &quot;pred_sales&quot; attribute.
          </p>
          <p>
            Here, we have few events in the stream visitor and we will use this
            data to train the model (note: there are very few data points here,
            for better result we should train for more data/events).
          </p>
          <p>
            We uploaded stream data using API /stream/upload_data previously to
            a file upload_visitor.txt [ see API 31 ], we will use this to train
            the model. If you haven&apos;t uploaded yet then you should first
            upload the data, follow the API 31.
          </p>
          <p>Below is the training request for the same.</p>
          <p>Training request :</p>
          <HighlightedCpp
            code={`{
   "schema-name":"website",
   "training_details":{
      "training_source":"visitor_upload.txt",
      "file_size_mb":1,
      "target_idx":5,
      "input_format":"JSON",
      "is_src_global":0,
      "train_speed":3,
      "bucket_name":"ml_bucket_info",
      "training_source_type":1,
      "expected_format":"SVM"
   },
   "algo_type":"SVM",
   "tune_params":1,
   "attr_list":[
      {
         "position":0,
         "name":"vid"
      },
      {
         "position":1,
         "name":"prod"
      },
      {
         "position":2,
         "name":"pgid"
      },
      {
         "position":3,
         "name":"catid"
      },
      {
         "name":"items",
         "position":4
      },
      {
         "name":"price",
         "position":5
      }
   ],
   "scale":1,
   "attr_type":3,
   "algo_param":{
      "probability":0,
      "svm_type":3,
      "eps_svr":0.1,
      "kernel_type":0,
      "shrinking":0,
      "cost":100,
      "termination_criteria":0.001
   },
   "model_name":"sales_model"
}`}
          />
          <p>Now train the model using the API</p>
          <p>Response</p>
          <HighlightedOutput
            code={`{
   "msg": "train is scheduled, call API to get status"
}`}
          />
          <p>
            Training is always a async process in BangDB, therefore it returns
            immediately (this is because we don&apos;t want client to block for
            the time training is going on, as it may go on for long period as
            well). To check the status of the ongoing training, we can call the
            training status API, defined in the next section.
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
