import React from "react";
import Head from "next/head";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import HighlightedCpp from "../../components/HighlightedCpp";
import HighlightedOutput from "../../components/HighlightedOutput";

export default function MLCommandsCli() {
  return (
    <React.Fragment>
      <Head>
        <title>ML Commands CLI - BangDB</title>
        <meta
          name="description"
          content="ML Commands - BangDB has ML natively integrated within it. What it means is that ML is part of the system and it does perform work."
        ></meta>
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="ML Commands CLI - BangDB" />
        <meta
          property="og:description"
          content="ML Commands - BangDB has ML natively integrated within it. What it means is that ML is part of the system and it does perform work."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="ML Commands CLI - BangDB" />
        <meta
          name="twitter:description"
          content="ML Commands - BangDB has ML natively integrated within it. What it means is that ML is part of the system and it does perform work."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <section className="main-container">
        <main className="container">
          <div className="article-content">
            <article className="article">
              <Breadcrumb text="Command Line Interface" url="/cli-overview" />
              <h1 className="article-title">ML Commands</h1>
              <div className="article-body">
                <p>
                  BangDB has ML natively integrated within it. What it means is
                  that ML is part of the system and it does perform work both in
                  implicit and explicit manner. This means that within BangDB we
                  have ML related support for training, testing, versioning,
                  storing and deploying the models for prediction in continuous
                  or other manner.
                </p>
                <p>
                  While BangDB implements and support certain algorithm
                  implement in c/c+ natively, it also allows users to bring
                  their model, framework or code to run as part of the system.
                </p>
                <p>
                  Users may leverage some of the frameworks like Tensorflow,
                  PyTorch etc. as they like or require. Since one of the major
                  problems with ML is dealing with large files, either
                  training/test files or models themselves, therefore BangDB
                  uses BRS to help users with these.
                </p>
                <p>
                  Let&apos;s now figure out the commands that CLI supports for
                  ML
                </p>
                <HighlightedOutput
                  code={`// Train, predict, deploy models using cli
train model model_name
train model from model_name
show models show models where schema = "myschema"
show status where schema = "myschema" and model = "mymodel"
select treq from bangdb_ml where schema = "myschema" and model = "mymodel"
select treq from bangdb_ml where schema = "myschema"
delete treq from bangdb_ml where schema = "myschema" and model = "mymodel"
update bangdb_ml set status = 25 where schema = "myschema" and model = "mymodel"
drop model mymodel where schema = "myschema" pred model model_name`}
                />
                <h2>Train model</h2>
                <p>
                  BangDB trains models based on the training instructions
                  (metadata) defined in the json format. We can write the
                  metadata in a text editor and save as file and use the file
                  directly to train or we can start a workflow here on the cli
                  which will eventually create the metadata and train the model.
                  Here is the training metadata format which BangDB leverages
                  for training models.
                </p>
                <aside className="doc-api-code">
                  <h4>REQUIRED</h4>
                  <p>
                    <strong>schema-name</strong> : name of the schema. we must
                    associate a schema to a model, this ensure uniqueness of the
                    model and also allows it to be used on a stream of data
                  </p>
                  <p>
                    <strong>model_name</strong> : name of the model
                  </p>
                  <p>
                    <strong>algo_type</strong> : Classification (1) | Regression
                    (2) | Lin-regression/Classification (3) | Kmeans (4) |
                    Custom (5) |<br />
                    IE - ontology (6) | IE - NER (7) | IE - Sentiment (8) | IE -
                    KB (9) | DL - resnet (10) |<br />
                    DL - lenet (11) | DL - face detection (12) | DL - shape
                    detection (13) | SL - object detection (14)
                    <br />[ 10, 11, 12, 13, 14 are not supported in this
                    version, take enterprise for these ]
                  </p>
                  <p>
                    <strong>scale</strong> : 1 if you wish to scale the data
                    else 0
                  </p>
                  <p>
                    <strong>tune_param</strong> : do you wish to tune the
                    parameters of the algo? select 1 else 0
                  </p>
                  <p>
                    <strong>attr_type</strong> : 1 for numerical, 2 for string
                    and 3 for hybrid
                  </p>
                  <p>
                    <strong>algo_param</strong> : list of algo params, specific
                    to the selected <code>algo_type</code>
                  </p>
                  <h4>OPTIONAL</h4>
                  <p>
                    <strong>custom_format</strong> : This is used to further
                    process the data before training, typically when data needs
                    to be rolled up for training.
                  </p>
                  <p>
                    <strong>name</strong> : name of the attribute, that will be
                    created
                  </p>
                  <p>
                    <strong>fields</strong> : It need 3 fields info;
                    ts(timestamp) field, quantity which needs to be rolled up,
                    and entityid ( groupby entity)
                  </p>
                  <p>
                    <strong>aggr_type</strong> : type of aggregation for
                    “quantity” while rolling up [ 1 for sum … ]
                  </p>
                  <p>
                    <strong>gran</strong> : roll up granularity in seconds
                  </p>
                  <p>
                    <strong>udf</strong> : user defined function that could be
                    used before training. It&apos;s a python file supplied by
                    user
                  </p>
                  <p>
                    <strong>name</strong> : name of the udf
                  </p>
                  <p>
                    <strong>udf_logic</strong> : there are set of logic that
                    user may define, select that, denoted by num. for ex: 1
                  </p>
                  <p>
                    <strong>bucket_name</strong> : name of the bucket which has
                    the udf file
                  </p>
                </aside>
                <p>
                  Let&apos;s take a look at a schema for training a
                  classification mode using svm
                </p>
                <HighlightedCpp
                  code={`training request : {
   "algo_param":{
      "termination_criteria":0.1,
      "degree":0,
      "svm_type":2,
      "kernel_type":2,
      "gamma":0.001,
      "shrinking":0
   },
   "attr_type":1,
   "tune_params":1,
   "scale":1,
   "schema-name":"myschema",
   "training_details":{
      "file_size_mb":1,
      "input_format":"SVM",
      "expected_format":"SVM",
      "train_speed":2,
      "training_source":"svmguide1",
      "training_source_type":1
   },
   "attr_list":[
      {
         "name":"a",
         "position":0
      },
      {
         "position":1,
         "name":"b"
      },
      {
         "position":2,
         "name":"c"
      },
      {
         "position":3,
         "name":"d"
      },
      {
         "name":"e",
         "position":4
      }
   ],
   "algo_type":"SVM",
   "model_name":"model1"
}`}
                />
                <p>Let&apos;s train this model using the workflow first</p>
                <HighlightedCpp code={`train model model1`} />
                <HighlightedOutput
                  code={`what's the name of the schema for which you wish to train the model?: myschema
do you wish to read earlier saved ml schema for editing/adding? [ yes | no ]:`}
                />
                <p>
                  Since we are creating new model and we don&apos;t have
                  metadata saved on the disk, hence we will select
                  &apos;no&apos; (or enter) and move on Now it lists all the
                  natively supported algo and also &quot;Custom (5)&quot; option
                  if we wish to use other framework etc.
                </p>
                <p>We will pick Classification (1)</p>
                <HighlightedOutput
                  code={`BangDB supports following algorithm, pls select from these
Classification (1) | Regression (2) | Lin-regression/Classification (3) |
Kmeans (4) | Custom (5) | IE - ontology (6) | IE - NER (7) | IE - Sentiment (8) |
IE - KB (9) | DL - resnet (10) | DL - lenet (11) | DL - face detection (12) |
DL - shape detection (13) | SL - object detection (14)
what's the algo would you like to use (or Enter for default (1)): 1`}
                />
                <p>
                  Based on algo selection, it asks for certain info on the
                  parameters etc.
                </p>
                <HighlightedOutput
                  code={`svm type [ C_SVC (0) | NU_SVC (1) | ONE_CLASS (2) ] (press enter for default (0)): 2
kernel type [ LINEAR (0) | POLY (1) | RBF (2) | SIGMOID (3) ] (press enter for default (0)): 2
degree (press enter for default (3): 
enter gamma (or press enter for default (0.001)):
enable shrinking? [ yes | no ]: 
what's the stopping criteria (eps) (or press enter for default (0.001)): 0.1
what's the input (training data) source? [ local file (1) | file on BRS (2) | stream (3) ] (press enter for default (1)): 1
enter the file name for upload (along with full path): trainfiles/svmguide1
what is the input data format for the train data [ LIBSVM (0) | CSV (1) | JSON (3) ] (press Enter for default 1): 0
what's the training speed you wish to select [ Very fast (1) | fast (2) | medium (3) | slow (4) | very slow (5) ] (or Enter for default (1)): 2 what's the attribute type [ NUM (1) | STRING (2) | HYBRID (3) ] (press enter for default (1)): 1
do you wish to scale the data? [ yes | no ]: yes
do you wish to tune the params? [ yes | no ]: yes`}
                />
                <p>
                  Finally we can also do attribute mapping here. This is useful
                  when we have data format and the format needed by the algo are
                  different, such that db could do the transformation
                  accordingly before testing.
                </p>
                <p>
                  It also helps in training and prediction on stream as subset
                  of event fields could be used for training and prediction.
                </p>
                <p>
                  we need to do the mapping so it can be used on streams later.
                  This means we need to provide attr name and its position in
                  the training file.
                </p>
                <HighlightedOutput
                  code={`attr name: a
attr position: 0
do you wish to add more attributes? [ yes | no ]: yes
attr name: b
attr position: 1
do you wish to add more attributes? [ yes | no ]: yes
attr name: c
attr position: 2
do you wish to add more attributes? [ yes | no ]: yes
attr name: d
attr position: 3
do you wish to add more attributes? [ yes | no ]: yes
attr name: e
attr position: 4
do you wish to add more attributes? [ yes | no ]: 
do you wish to add external udf to do some computations before the training? [ yes | no ]:`}
                />
                <p>Once we enter &quot;yes&quot;, model starts training.</p>
                <aside className="doc-note">
                  <strong>Note: </strong>Training in BangDB is asynchronous
                  process, which means that if db schedules training then it
                  returns immediately. User can do anything else as needed.
                </aside>
                <p>
                  To know the status of the training, we should use either of
                  the following:
                </p>
                <HighlightedCpp code={`show models`} />
                <HighlightedOutput
                  code={`+---------------+----------+----+------------+-----------+------------------------+------------------------+ 
|key            |model name|algo|train status|schema name|train start time        |train end time          |
+---------------+----------+----+------------+-----------+------------------------+------------------------+
|myschema:model1|model1    | SVM|passed      |myschema   |Wed Feb 3 13:44:47 2021 |Wed Feb 3 13:44:59 2021 |
+---------------+----------+----+------------+-----------+------------------------+------------------------+`}
                />
                <p>The above will show details for all models.</p>
                <p>To know specifically for a model</p>
                <HighlightedCpp
                  code={`show status where schema = "myschema" and model = "model1"`}
                />
                <HighlightedOutput
                  code={`{
    "schema-name":"myschema",
    "model_name":"model1",
    "train_req_state":25
}`}
                />
                <p>Now let&apos;s do test prediction here.</p>
                <h2>Predict for a test event (single data)</h2>
                <HighlightedCpp code={`pred model model1`} />
                <HighlightedOutput
                  code={`what's the name of the schema for which mode was trained?: myschema
do you wish to see the train request? [ yes | no ]: no
model algo type is [ SVM ] it needs [ NUM ] data type with [ LIBSVM ] input data format
what is the input data format for the given pred file [ LIBSVM (0) | CSV (1) | JSON (3) ] (press Enter for default 0): 0
do you wish to provide attribute list? [ yes | no ]: no
do you wish to consider the target (are you also supplying target value?) [ yes | no ]: no
do you wish to pred for file? or single event? [ yes (file) | no (single event) ]: no 
enter the test data: 1:2.617300e+01 2:5.886700e+01 3:-1.894697e-01 4:1.251225e+02
pred request = {"input_format":"SVM","expected_format":"SVM","schema-name":"myschema","model_name":"model1","algo_type":"SVM","attr_type":1,"consider_target":0,"data_type":2,"data":"1:2.617300e+01 2:5.886700e+01 3:-1.894697e-01 4:1.251225e+02"} {"predict_labels":1,"user_pred_accuracy":100,"errorcode":0}
success`}
                />
                <p>
                  We selected libsvm format of the event{" "}
                  <code>
                    &quot;1:2.617300e+01 2:5.886700e+01 3:-1.894697e-01
                    4:1.251225e+02&quot;
                  </code>{" "}
                  hence there was no conversion. Let&apos;s select csv file and
                  ask db to do the conversion.
                </p>
                <HighlightedOutput
                  code={`pred model model1 what's the name of the schema for which mode was trained?: myschema
do you wish to see the train request? [ yes | no ]:
model algo type is [ SVM ] it needs [ NUM ] data type with [ LIBSVM ] input data format
what is the input data format for the given pred file [ LIBSVM (0) | CSV (1) | JSON (3) ] (press Enter for default 0): 1
what is the separator (SEP) for the csv file? (press Enter for default ',' (comma) else type it):
do you wish to provide attribute list? [ yes | no ]:
do you wish to consider the target (are you also supplying target value?) [ yes | no ]:
do you wish to pred for file? or single event? [ yes (file) | no (single event) ]:
enter the test data: 26,58,-0.02,125 pred request = {"input_format":"CSV","SEP":",","expected_format":"SVM","schema-name":"myschema","model_name":"model1","algo_type":"SVM","attr_type":1,"consider_target":0,"data_type":2,"data":"26,58,-0.02,125"} {"predict_labels":1,"user_pred_accuracy":0,"errorcode":0}
success`}
                />
                <p>
                  Here we select 1 for input data format and gave the event in
                  csv; “26,58,-0.02,125” Now pred using a test file
                </p>
                <HighlightedCpp code={`pred model model1`} />
                <HighlightedOutput
                  code={`what's the name of the schema for which mode was trained?: myschema 
do you wish to see the train request? [ yes | no ]: 
model algo type is [ SVM ] it needs [ NUM ] data type with [ LIBSVM ] input data format 
what is the input data format for the given pred file [ LIBSVM (0) | CSV (1) | JSON (3) ] (press Enter for default 0):
do you wish to provide attribute list? [ yes | no ]: 
do you wish to consider the target (are you also supplying target value?) [ yes | no ]: yes 
do you wish to pred for file? or single event? [ yes (file) | no (single event) ]: yes 
do you wish to upload the file? [ yes | no ]: yes 
enter the test file name for upload (along with full path): trainfiles/svmguide1.t 
pred request = {"input_format":"SVM","expected_format":"SVM","schema-name":"myschema","model_name":"model1","algo_type":"SVM","attr_type":1,"consider_target":1,"data_type":1,"data":"svmguide1.t"}
{"pred_file_out":"model1__myschema__svmguide1.t.predict","errorcode":0}
do you wish to download the test file? [ yes | no ]: yes
test file [ model1__myschema__svmguide1.t.predict ] download successful, it's in the /tmp folder
success`}
                />
                <aside className="doc-note">
                  <strong>Note: </strong>We have the option of downloading the
                  file here itself (pred file) or you may take later from BRS
                  for the key specified here (ex:{" "}
                  <code>&quot;model1__myschema__svmguide1.t.predict&quot;</code>
                  ).
                  <p>
                    There are more commands here which are self explanatory, as
                    defined in the page upfront.
                    <br />
                    Check out few{" "}
                    <Link href={"/bangdb-ml-examples"}>
                      real world examples
                    </Link>{" "}
                    and try them out.
                  </p>
                </aside>
              </div>
            </article>
          </div>
        </main>
      </section>
    </React.Fragment>
  );
}
