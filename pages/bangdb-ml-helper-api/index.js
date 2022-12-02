import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import HighlightedCpp from "../../components/HighlightedCpp";
import HighlightedJava from "../../components/HighlightedJava";

export default function BangdbMlHelperApi() {
  const [tab, setTab] = useState(1);

  return (
    <React.Fragment>
      <Head>
        <title>ML Helper - BangDB</title>
        <meta
          name="description"
          content="Learn about BangDB ML Helper & server APIs. Read the documentation to know more about BangDB Server APIs."
        ></meta>
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="ML Helper - BangDB" />
        <meta
          property="og:description"
          content="Learn about BangDB ML Helper & server APIs. Read the documentation to know more about BangDB Server APIs."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="ML Helper - BangDB" />
        <meta
          name="twitter:description"
          content="Learn about BangDB ML Helper & server APIs. Read the documentation to know more about BangDB Server APIs."
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
              <Breadcrumb text="Server API" url="/api-server" />
              <h1 className="article-title">ML Helper</h1>
              <div className="article-body">
                <p>
                  BangDB ML Helper offers several APIs to help simplify the ML
                  related activities. The type offers features from Training
                  model, prediction, versioning of model, deployment to managing
                  large files and binary objects related to ML. Check out the
                  few{" "}
                  <Link href={"/bangdb-ml-examples"}>real world examples</Link>{" "}
                  for to learn more or try them out on BangDB.
                </p>
                <div className="tab-shifter">
                  <div className="tab-wrapper">
                    <div className="tab" onClick={() => setTab(1)}>
                      <span className={tab !== 1 ? null : "active"}>C++</span>
                    </div>
                    <div className="tab" onClick={() => setTab(2)}>
                      <span className={tab !== 2 ? null : "active"}>Java</span>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: tab === 1 ? "block" : "none",
                  }}
                >
                  <p>To create MLHelper object</p>
                  <HighlightedCpp
                    code={`BangDB MLHelper(train_pred_brs_info *tpbinfo, const char *conf_path = NULL, bool isssl = true)`}
                  />
                  <p>
                    To create a bucket to store all intermediate training and
                    testing files
                  </p>
                  <HighlightedCpp
                    code={`int createBucket(const char *bucket_info)`}
                  />
                  <p>
                    <code>bucket_info</code> is the name for the bucket to be
                    created. It returns -1 for error.
                  </p>
                  <p>To create or to change name of the bucket</p>
                  <HighlightedCpp
                    code={`void setBucket(const char *bucket_info)`}
                  />
                  <p>To upload the files required to train or predict</p>
                  <HighlightedCpp
                    code={`long uploadFile(const char *key, const char *fpath, InsertOptions iop)`}
                  />
                  <p>
                    The key is the id of the file fpath takes the path to the
                    file including the file name.
                  </p>
                  <aside className="doc-api-code">
                    <p>InsertOptions is an enum with following options:</p>
                    <p>
                      INSERT_UNIQUE, // if non-existing then insert else return
                      <br />
                      UPDATE_EXISTING, // if existing then update else return
                      <br />
                      INSERT_UPDATE, // insert if non-existing else update
                      <br />
                      DELETE_EXISTING, // delete if existing
                      <br />
                      UPDATE_EXISTING_INPLACE, // only for inplace update
                      <br />
                      INSERT_UPDATE_INPLACE, // only for inplace update
                    </p>
                    <p>
                      Please see{" "}
                      <Link href={"/bangdb-client-common"}>bangdb common</Link>{" "}
                      for more info.
                    </p>
                  </aside>
                  <p>It returns -1 for error.</p>
                  <p>
                    This is to train a model we should call trainModel API. This
                    API returns immediately and if successful then it schedules
                    training of the model. User should call{" "}
                    <code>getModelStaus()</code> for sometime until it returns
                    the end status.
                  </p>
                  <HighlightedCpp code={`int trainModel(const char *req)`} />
                  <p>
                    It takes a training request and returns status of the
                    training request. It returns -1 for error.
                  </p>
                  <p>
                    To get status of the model when training request is fired
                  </p>
                  <HighlightedCpp
                    code={`char *getModelStatus(const char *req)`}
                  />
                  <p>Req input parameter is like following:</p>
                  <HighlightedCpp
                    code={`req = {"schema-name":, "model_name": }`}
                  />
                  <p>And the return value is like following:</p>
                  <HighlightedCpp
                    code={`{"schema-name":, "model_name":, "train_start_ts":, "train_end_ts":, "train_state":,}`}
                  />
                  <aside className="doc-api-code">
                    <p>
                      ML_BANGDB_TRAINING_STATE is an enum with following
                      options:
                    </p>
                    <h4>error</h4>
                    <p>
                      <br />
                      ML_BANGDB_TRAINING_STATE_INVALID_INPUT = 10,
                      <br />
                      ML_BANGDB_TRAINING_STATE_NOT_PRSENT,
                      <br />
                      ML_BANGDB_TRAINING_STATE_ERROR_PARSE,
                      <br />
                      ML_BANGDB_TRAINING_STATE_ERROR_FORMAT,
                      <br />
                      ML_BANGDB_TRAINING_STATE_ERROR_BRS,
                      <br />
                      ML_BANGDB_TRAINING_STATE_ERROR_TUNE,
                      <br />
                      ML_BANGDB_TRAINING_STATE_ERROR_TRAIN,
                      <br />
                      ML_FILE_TYPE_ERROR_VAL_TESTDATA,
                      <br />
                      ML_FILE_TYPE_ERROR_VAL_TRAINDATA,
                      <br />
                      ML_BANGDB_TRAINING_STATE_LIMBO,
                    </p>
                    <h4>intermediate states</h4>
                    <p>
                      ML_BANGDB_TRAINING_STATE_BRS_GET_PENDING,
                      <br />
                      ML_BANGDB_TRAINING_STATE_BRS_GET_DONE,
                      <br />
                      ML_BANGDB_TRAINING_STATE_REFORMAT_DONE,
                      <br />
                      ML_BANGDB_TRAINING_STATE_SCALE_TUNING_DONE,
                      <br />
                      ML_BANGDB_TRAINING_STATE_BRS_MODEL_UPLOAD_PENDING,
                    </p>
                    <h4>training done</h4>
                    <p>
                      ML_BANGDB_TRAINING_STATE_TRAINING_DONE, //25
                      <br />
                      ML_BANGDB_TRAINING_STATE_DEPRICATED
                    </p>
                    <p>
                      Please see{" "}
                      <Link href={"/bangdb-client-common"}>bangdb common</Link>{" "}
                      for more info.
                    </p>
                  </aside>
                  <p>
                    The above is true for ML related model status. For IE
                    (Information Extraction) related model status use following:
                  </p>
                  <aside className="doc-api-code">
                    <p>
                      IE_BANGDB_TRAINING_STATE is an enum with following
                      options:
                    </p>
                    <h4>error</h4>
                    <p>
                      IE_BANGDB_TRAINING_STATE_INVALID_INPUT = 10,
                      <br />
                      IE_BANGDB_TRAINING_STATE_NOT_PRSENT,
                      <br />
                      IE_BANGDB_TRAINING_STATE_ERROR_BRS,
                      <br />
                      IE_BANGDB_TRAINING_STATE_ERROR_HELPER_FILES,
                      <br />
                      IE_BANGDB_TRAINING_STATE_ERROR_BRS_FEATURE_EX,
                      <br />
                      IE_BANGDB_TRAINING_STATE_ERROR_BRS_HELP_FILES,
                      <br />
                      IE_BANGDB_TRAINING_STATE_ERROR_PRE_NER_TRAIN,
                      <br />
                      IE_BANGDB_TRAINING_STATE_LIMBO,
                      <br />
                      IE_BANGDB_TRAINING_STATE_ERROR_NER_TRAIN,
                      <br />
                      IE_BANGDB_TRAINING_STATE_ERROR_NER_TRAIN_BRS,
                      <br />
                      IE_BANGDB_TRAINING_STATE_ERROR_PRE_REL_TRAIN, //20
                      <br />
                      IE_BANGDB_TRAINING_STATE_ERROR_REL_TRAIN,
                      <br />
                      IE_BANGDB_TRAINING_STATE_ERROR_REL_TRAIN_BRS,
                      <br />
                      IE_BANGDB_TRAINING_STATE_ERROR_REL_LIST_BRS,
                      <br />
                      IE_FILE_TYPE_ERROR_VAL_TRAINDATA,
                      <br />
                      IE_FILE_TYPE_ERROR_VAL_TESTDATA,
                      <br />
                      IE_FILE_TYPE_ERROR_VAL_CLASSDATA,
                      <br />
                      IE_FILE_TYPE_ERROR_VAL_TOTALEXDATA
                    </p>
                    <h4>intermediate states</h4>
                    <p>
                      IE_BANGDB_TRAINING_STATE_BRS_GET_PENDING,
                      <br />
                      IE_BANGDB_TRAINING_STATE_BRS_GET_DONE,
                      <br />
                      IE_BANGDB_TRAINING_STATE_HELPER_DONE, //30
                      <br />
                      IE_BANGDB_TRAINING_STATE_PRE_NER_DONE,
                      <br />
                      IE_BANGDB_TRAINING_STATE_NER_DONE,
                      <br />
                      IE_BANGDB_TRAINING_STATE_PRE_REL_DONE,
                      <br />
                      IE_BANGDB_TRAINING_STATE_REL_DONE,
                      <br />
                      IE_BANGDB_TRAINING_STATE_BRS_MODEL_UPLOAD_PENDING,
                      <br />
                      IE_BANGDB_TRAINING_STATE_BRS_RELLIST_UPLOAD_PENDING
                    </p>
                    <h4>training done</h4>
                    <p>
                      IE_BANGDB_TRAINING_HELP_DONE, //37
                      <br />
                      IE_BANGDB_TRAINING_STATE_TRAINING_DONE, //38
                      <br />
                      IE_BANGDB_TRAINING_STATE_DEPRICATED
                    </p>
                    <p>
                      Please see{" "}
                      <Link href={"/bangdb-client-common"}>bangdb common</Link>{" "}
                      for more info.
                    </p>
                  </aside>
                  <p>
                    It returns NULL for error or errcode as -1, else errcode for
                    success. User should free the memory using{" "}
                    <code>delete[]</code>.
                  </p>
                  <p>To delete the mode</p>
                  <HighlightedCpp code={`int delModel(const char *req)`} />
                  <p>
                    This delete model by passing req parameter.{" "}
                    <code>{`req = {"schema_name":,"model_name":}`}</code> It
                    returns -1 for error.
                  </p>
                  <p>To delete training request</p>
                  <HighlightedCpp
                    code={`int delTrainRequest(const char *req)`}
                  />
                  <p>
                    This is to delete the training request. Helpful when
                    training got stuck for some reasons and the status was not
                    updated properly. It returns -1 for error.
                  </p>
                  <p>To predict for a particular data or event</p>
                  <HighlightedCpp code={`char *predict(const char *req)`} />
                  <p>Here is how req looks like:</p>
                  <HighlightedCpp
                    code={`{schema-name, attr_type: NUM, data_type:event, re_format:N, model_name: model_name, data:"1 1:1.2 2:3.2 3:1.1"}`}
                  />
                  <aside className="doc-api-code">
                    <p>ATTR_TYPE is an enum with following options:</p>
                    <p>
                      ML_BANGDB_ATTR_TYPE_INVALID = 0,
                      <br />
                      ML_BANGDB_ATTR_TYPE_NUM,
                      <br />
                      ML_BANGDB_ATTR_TYPE_STR,
                      <br />
                      ML_BANGDB_ATTR_TYPE_HYBRID,
                    </p>
                    <p>
                      Please see{" "}
                      <Link href={"/bangdb-client-common"}>bangdb common</Link>{" "}
                      for more info.
                    </p>
                  </aside>
                  <aside className="doc-api-code">
                    <p>DATA_TYPE is an enum with following options:</p>
                    <p>
                      ML_PREDICT_DATA_TYPE_INVALID = 0,
                      <br />
                      ML_PREDICT_DATA_TYPE_FILE,
                      <br />
                      ML_PREDICT_DATA_TYPE_EVENT
                    </p>
                    <p>
                      Please see{" "}
                      <Link href={"/bangdb-client-common"}>bangdb common</Link>{" "}
                      for more info.
                    </p>
                  </aside>
                  <aside className="doc-api-code">
                    <p>RE_FORMAT is an enum with following options:</p>
                    <p>
                      ML_BANGDB_ML_DATA_FORMAT_LIBSVM = 0,
                      <br />
                      ML_BANGDB_ML_DATA_FORMAT_CSV,
                      <br />
                      ML_BANGDB_ML_DATA_FORMAT_ARFF,
                      <br />
                      ML_BANGDB_ML_DATA_FORMAT_JSON,
                      <br />
                      ML_BANGDB_ML_DATA_FORMAT_INVALID
                    </p>
                    <p>
                      Please see{" "}
                      <Link href={"/bangdb-client-common"}>bangdb common</Link>{" "}
                      for more info.
                    </p>
                  </aside>
                  <p>
                    It returns NULL for error or errcode as -1 else errcode.
                    User should free the memory using <code>delete[]</code>.
                  </p>
                  <p>
                    To get to training request all all models for a particular
                    schema
                  </p>
                  <HighlightedCpp
                    code={`ResultSet *getTrainingRequests(const char *schema)`}
                  />
                  <p>It returns NULL for error code.</p>
                  <p>To get training request for a particular model</p>
                  <HighlightedCpp
                    code={`char *getRequest(const char *req) req : {“schema_name": ,"model_name": }`}
                  />
                  <p>
                    It returns NULL for error or errcode as -1 else errcode.
                    User should free the memory using <code>delete[]</code>.
                  </p>
                  <p>This sets the status for a particular training request</p>
                  <HighlightedCpp
                    code={`int setModelStatus(const char *status) status = {“schema_name": ,"model_name": ,"status": }`}
                  />
                  <p>It returns -1 for error.</p>
                  <p>To get prediction status</p>
                  <HighlightedCpp
                    code={`char *getModelPredStatus(const char *req) req = {"schema-name":, "model_name": }`}
                  />
                  <p>
                    It returns NULL for error or errcode as -1 else errcode.
                    User should free the memory using <code>delete[]</code>.
                  </p>
                  <p>To delete prediction request</p>
                  <HighlightedCpp
                    code={`int delPredRequest(const char *req) req = {"schema-name":, "model_name": “file_name":}`}
                  />
                  <p>It returns -1 for error.</p>
                  <p>To upload any ML related file</p>
                  <HighlightedCpp
                    code={`long uploadFile(const char *bucket_info, const char *key, const char *fpath, InsertOptions iop)`}
                  />
                  <p>
                    Key is the id for the file and fpath takes the path to the
                    file including the file name.
                  </p>
                  <p>To download a file from a given bucket</p>
                  <HighlightedCpp
                    code={`long downloadFile(const char *bucket_info, const char *key, const char *fname, const char *fpath)`}
                  />
                  <p>It returns -1 for error.</p>
                  <p>To get the binary from the given buckets</p>
                  <HighlightedCpp
                    code={`long getObject(const char *bucket_info, const char *key, const char **data, long *datlen)`}
                  />
                  <p>
                    It gets the object(binary or otherwise) from the given
                    bucket, key. It fills data with the object and sets the
                    datlen as length or size of the object. It returns -1 for
                    error.
                  </p>
                  <p>To delete a file from a bucket</p>
                  <HighlightedCpp
                    code={`int delFile(const char *bucket_info, const char *key)`}
                  />
                  <p>It returns -1 for error.</p>
                  <p>To delete a bucket</p>
                  <HighlightedCpp
                    code={`int delBucket(const char *bucket_info)`}
                  />
                  <p>It returns -1 for error.</p>
                  <p>To count the number of buckets</p>
                  <HighlightedCpp code={`long countBuckets()`} />
                  <p>It returns -1 for error or count for success.</p>
                  <p>To get number of slices are there for the given file</p>
                  <HighlightedCpp
                    code={`int countSlices(const char *bucket_info, const char *key)`}
                  />
                  <p>
                    Since BRS (bangdb resource server) stores large files and
                    objects in chunks, therefore we can count how many slices
                    are there for the given file (key) by calling this function.
                    It returns -1 for error for count for success.
                  </p>
                  <p>To count object in a given bucket</p>
                  <HighlightedCpp
                    code={`long countObjects(const char *bucket_info)`}
                  />
                  <p>It returns -1 for error.</p>
                  <p>To get details of all the objects in a given bucket</p>
                  <HighlightedCpp
                    code={`char *countObjectsDetails(const char *bucket_info)`}
                  />
                  <p>
                    It returns NULL for error else the details. User should free
                    memory using <code>delete[]</code>.
                  </p>
                  <p>Count the number of models for a schema</p>
                  <HighlightedCpp
                    code={`long countModels(const char *schema)`}
                  />
                  <p>It returns -1 for error else count.</p>
                  <p>To get list of objects for a given buckets</p>
                  <HighlightedCpp
                    code={`char *listObjects(const char *bucket_info, const char *key = NULL, int list_size_mb = 0)`}
                  />
                  <p>
                    This returns json string with the list of objects in a given
                    bucket for a given key or for all keys It returns NULL for
                    error else the object list. User should free the memory of
                    returned data using <code>delete[]</code>.
                  </p>
                  <p>To get list of buckets present</p>
                  <HighlightedCpp
                    code={`char *listBuckets(const char *user_info)`}
                  />
                  <p>
                    This returns the list of all buckets for the user given by
                    user_info which looks like following:
                  </p>
                  <HighlightedCpp
                    code={`{"access_key":"akey", "secret_key":"skey"}`}
                  />
                  <p>
                    It returns NULL for error else the object list. User should
                    free the memory of returned data using <code>delete[]</code>
                    .
                  </p>
                  <p>To get data from stream to train model</p>
                  <HighlightedCpp
                    code={`long uploadStreamDataForTrain(const char *req)`}
                  />
                  <p>It returns -1 for error.</p>
                  <p>To close the BangDB MLHelper</p>
                  <HighlightedCpp code={`void close BangDB ML Helper ()`} />
                  <p>To delete MLHelper object</p>
                  <HighlightedCpp code={`virtual ~ BangDB ML Helper()`} />
                </div>
                <div
                  style={{
                    display: tab === 2 ? "block" : "none",
                  }}
                >
                  <p>To get instance of the MLHelper</p>
                  <HighlightedJava
                    code={`public static synchronized BangDBMLHelper getInstance(String[] train_pred_brs_info)`}
                  />
                  <p>
                    <code>train_pred_brs_info</code> contains PORT and IP for
                    following in order overall length of array should be 6 order
                    - brs, pred, train.
                  </p>
                  <p>To get detail of the object as string</p>
                  <HighlightedJava code={`public String toString()`} />
                  <p>Returns the detail of the MLHelper object as string.</p>
                  <p>
                    To create a bucket to store all intermediate training and
                    testing files
                  </p>
                  <HighlightedJava
                    code={`public int createBucket(String bucket_info)`}
                  />
                  <p>
                    All intermediate files, models or training/ testing related
                    files are stored within BRS (bangdb resource server) in some
                    bucket.
                  </p>
                  <p>
                    This creates a bucket as defined by the{" "}
                    <code>bucket_info</code> which looks like following:
                  </p>
                  <HighlightedJava
                    code={`{access_key:, secret_key:, bucket_name:}`}
                  />
                  <p>It returns -1 for error.</p>
                  <p>
                    To create new bucket if doesn&apos;t exist otherwise update
                    the bucket name to this name
                  </p>
                  <HighlightedJava
                    code={`public void setBucket(String bucket_info)`}
                  />
                  <p>It returns -1 for error.</p>
                  <p>To upload training or prediction files</p>
                  <HighlightedJava
                    code={`public long uploadFile(String key, String path, InsertOptions flag)`}
                  />
                  <p>
                    Key is the id for the file and fpath takes the path to the
                    file including the file name.
                  </p>
                  <aside className="doc-api-code">
                    <p>InsertOptions is an enum with following options:</p>
                    <p>
                      INSERT_UNIQUE, // if non-existing then insert else return
                      <br />
                      UPDATE_EXISTING, // if existing then update else return
                      <br />
                      INSERT_UPDATE, // insert if non-existing else update
                      <br />
                      DELETE_EXISTING, // delete if existing
                      <br />
                      UPDATE_EXISTING_INPLACE, // only for inplace update
                      <br />
                      INSERT_UPDATE_INPLACE, // only for inplace update
                    </p>
                    <p>
                      Please see{" "}
                      <Link href={"/bangdb-client-common"}>bangdb common</Link>{" "}
                      for more info.
                    </p>
                  </aside>
                  <p>To upload file in the given bucket</p>
                  <HighlightedJava
                    code={`public long uploadFile(String bucketInfo, String key, String path, InsertOptions flag)`}
                  />
                  <p>It returns -1 for error else 0 or more than 0.</p>
                  <p>
                    This is to train a model we should call trainModel API. This
                    API returns immediately and if successful then it schedules
                    training of the model. User should call{" "}
                    <code>getModelStaus()</code> for sometime until it returns
                    the end status.
                  </p>
                  <HighlightedJava code={`public int trainModel(String req)`} />
                  <p>
                    It takes a training request and returns the status of the
                    training request. The training request looks like following:
                  </p>
                  <HighlightedJava
                    code={`{
   "schema-name":"id",
   "algo_type":"SVM",
   "algo_param":{
      "svm_type":1,
      "kernel":2,
      "degree":3,
      "gamma":0.2,
      "cost":1.1,
      "cache_size":50,
      "probability":0,
      "termination_criteria":0.001,
      "nu":0.5,
      "coef0":0.1
   },
   "attr_list":[
      {
         "name":"a1",
         "position":1
      },
      {
         "name":"a2",
         "position":2
      }
   ],
   "training_details":{
      "training_source":"infile",
      "training_source_type":"FILE",
      "file_size_mb":110,
      "train_speed":1
   },
   "scale":"Y/N",
   "tune_param":"Y/N",
   "attr_type":"NUM/STR",
   "re_format":"JSON",
   "custom_format":{
      "name":"ts_rollup",
      "fields":{
         "ts":"ts",
         "quantity":"qty",
         "entityid":"eid"
      },
      "aggr_type":2,
      "gran":1
   },
   "model_name":"my_model1",
   "udf":{
      "name":"udf_name",
      "udf_logic":1,
      "bucket_name":"udf_bucket"
   }
}`}
                  />
                  <p>To data from stream to train a model</p>
                  <HighlightedJava
                    code={`public long uploadStreamDataForTrain(String req)`}
                  />
                  <p>It returns -1 for error.</p>
                  <p>
                    To get the status of the model when training request is
                    fired
                  </p>
                  <HighlightedJava
                    code={`public String getModelStatus(String req)`}
                  />
                  <p>Req input parameter is like following:</p>
                  <HighlightedCpp
                    code={`req = {"schema-name":, "model_name": }`}
                  />
                  <p>And the return value is like following:</p>
                  <HighlightedJava
                    code={`{"schema-name":, "model_name":, "train_start_ts":, "train_end_ts":, "train_state":}`}
                  />
                  <p>
                    The <code>train_state</code> actually tells the status of
                    the model. The value for <code>train_state</code> are as
                    following:
                  </p>
                  <aside className="doc-api-code">
                    <p>
                      ML_BANGDB_TRAINING_STATE is an enum with following
                      options:
                    </p>
                    <h4>error</h4>
                    <p>
                      <br />
                      ML_BANGDB_TRAINING_STATE_INVALID_INPUT = 10,
                      <br />
                      ML_BANGDB_TRAINING_STATE_NOT_PRSENT,
                      <br />
                      ML_BANGDB_TRAINING_STATE_ERROR_PARSE,
                      <br />
                      ML_BANGDB_TRAINING_STATE_ERROR_FORMAT,
                      <br />
                      ML_BANGDB_TRAINING_STATE_ERROR_BRS,
                      <br />
                      ML_BANGDB_TRAINING_STATE_ERROR_TUNE,
                      <br />
                      ML_BANGDB_TRAINING_STATE_ERROR_TRAIN,
                      <br />
                      ML_FILE_TYPE_ERROR_VAL_TESTDATA,
                      <br />
                      ML_FILE_TYPE_ERROR_VAL_TRAINDATA,
                      <br />
                      ML_BANGDB_TRAINING_STATE_LIMBO,
                    </p>
                    <h4>intermediate states</h4>
                    <p>
                      ML_BANGDB_TRAINING_STATE_BRS_GET_PENDING,
                      <br />
                      ML_BANGDB_TRAINING_STATE_BRS_GET_DONE,
                      <br />
                      ML_BANGDB_TRAINING_STATE_REFORMAT_DONE,
                      <br />
                      ML_BANGDB_TRAINING_STATE_SCALE_TUNING_DONE,
                      <br />
                      ML_BANGDB_TRAINING_STATE_BRS_MODEL_UPLOAD_PENDING,
                    </p>
                    <h4>training done</h4>
                    <p>
                      ML_BANGDB_TRAINING_STATE_TRAINING_DONE, //25
                      <br />
                      ML_BANGDB_TRAINING_STATE_DEPRICATED
                    </p>
                    <p>
                      Please see{" "}
                      <Link href={"/bangdb-client-common"}>bangdb common</Link>{" "}
                      for more info.
                    </p>
                  </aside>
                  <p>
                    The above is true for ML related model status. For IE
                    (Information Extraction) related model status use following:
                  </p>
                  <aside className="doc-api-code">
                    <p>
                      IE_BANGDB_TRAINING_STATE is an enum with following
                      options:
                    </p>
                    <h4>error</h4>
                    <p>
                      IE_BANGDB_TRAINING_STATE_INVALID_INPUT = 10,
                      <br />
                      IE_BANGDB_TRAINING_STATE_NOT_PRSENT,
                      <br />
                      IE_BANGDB_TRAINING_STATE_ERROR_BRS,
                      <br />
                      IE_BANGDB_TRAINING_STATE_ERROR_HELPER_FILES,
                      <br />
                      IE_BANGDB_TRAINING_STATE_ERROR_BRS_FEATURE_EX,
                      <br />
                      IE_BANGDB_TRAINING_STATE_ERROR_BRS_HELP_FILES,
                      <br />
                      IE_BANGDB_TRAINING_STATE_ERROR_PRE_NER_TRAIN,
                      <br />
                      IE_BANGDB_TRAINING_STATE_LIMBO,
                      <br />
                      IE_BANGDB_TRAINING_STATE_ERROR_NER_TRAIN,
                      <br />
                      IE_BANGDB_TRAINING_STATE_ERROR_NER_TRAIN_BRS,
                      <br />
                      IE_BANGDB_TRAINING_STATE_ERROR_PRE_REL_TRAIN, //20
                      <br />
                      IE_BANGDB_TRAINING_STATE_ERROR_REL_TRAIN,
                      <br />
                      IE_BANGDB_TRAINING_STATE_ERROR_REL_TRAIN_BRS,
                      <br />
                      IE_BANGDB_TRAINING_STATE_ERROR_REL_LIST_BRS,
                      <br />
                      IE_FILE_TYPE_ERROR_VAL_TRAINDATA,
                      <br />
                      IE_FILE_TYPE_ERROR_VAL_TESTDATA,
                      <br />
                      IE_FILE_TYPE_ERROR_VAL_CLASSDATA,
                      <br />
                      IE_FILE_TYPE_ERROR_VAL_TOTALEXDATA
                    </p>
                    <h4>intermediate states</h4>
                    <p>
                      IE_BANGDB_TRAINING_STATE_BRS_GET_PENDING,
                      <br />
                      IE_BANGDB_TRAINING_STATE_BRS_GET_DONE,
                      <br />
                      IE_BANGDB_TRAINING_STATE_HELPER_DONE, //30
                      <br />
                      IE_BANGDB_TRAINING_STATE_PRE_NER_DONE,
                      <br />
                      IE_BANGDB_TRAINING_STATE_NER_DONE,
                      <br />
                      IE_BANGDB_TRAINING_STATE_PRE_REL_DONE,
                      <br />
                      IE_BANGDB_TRAINING_STATE_REL_DONE,
                      <br />
                      IE_BANGDB_TRAINING_STATE_BRS_MODEL_UPLOAD_PENDING,
                      <br />
                      IE_BANGDB_TRAINING_STATE_BRS_RELLIST_UPLOAD_PENDING
                    </p>
                    <h4>training done</h4>
                    <p>
                      IE_BANGDB_TRAINING_HELP_DONE, //37
                      <br />
                      IE_BANGDB_TRAINING_STATE_TRAINING_DONE, //38
                      <br />
                      IE_BANGDB_TRAINING_STATE_DEPRICATED
                    </p>
                    <p>
                      Please see{" "}
                      <Link href={"/bangdb-client-common"}>bangdb common</Link>{" "}
                      for more info.
                    </p>
                  </aside>
                  <p>To set the status of a model</p>
                  <HighlightedJava
                    code={`public int setModelStatus(String req)`}
                  />
                  <p>
                    This sets the status for a particular train request. The req
                    is as follows:
                  </p>
                  <HighlightedJava
                    code={`req = {"schema-name":, "model_name":, “status”: }`}
                  />
                  <p>Upon success it returns 0 else -1 for error.</p>
                  <p>To delete a model</p>
                  <HighlightedJava code={`public int delModel(String req)`} />
                  <p>
                    This is used to delete the model by passing req parameter
                  </p>
                  <HighlightedJava
                    code={`req = {"schema_name": ,"model_name": }`}
                  />
                  <p>To delete the training request</p>
                  <HighlightedJava
                    code={`public int delTrainRequest(String req)`}
                  />
                  <p>
                    This is to delete the training request. Helpful when
                    training got stuck for some reasons and the status was not
                    updated properly. Here is how req looks like:
                  </p>
                  <HighlightedJava
                    code={`req = {"schema-name":, "model_name": }`}
                  />
                  <p>To predict for a particular data or event</p>
                  <HighlightedJava code={`public String predict(String req)`} />
                  <p>The req json looks like:</p>
                  <HighlightedJava
                    code={`{schema-name, attr_type: NUM, data_type:event, re_arrange:N, re_format:N, model_name: model_name, data:"1 1:1.2 2:3.2 3:1.1"}`}
                  />
                  <aside className="doc-api-code">
                    <p>ATTR_TYPE is an enum with following options:</p>
                    <p>
                      ML_BANGDB_ATTR_TYPE_INVALID = 0,
                      <br />
                      ML_BANGDB_ATTR_TYPE_NUM,
                      <br />
                      ML_BANGDB_ATTR_TYPE_STR,
                      <br />
                      ML_BANGDB_ATTR_TYPE_HYBRID,
                    </p>
                    <p>
                      Please see{" "}
                      <Link href={"/bangdb-client-common"}>bangdb common</Link>{" "}
                      for more info.
                    </p>
                  </aside>
                  <aside className="doc-api-code">
                    <p>DATA_TYPE is an enum with following options:</p>
                    <p>
                      ML_PREDICT_DATA_TYPE_INVALID = 0,
                      <br />
                      ML_PREDICT_DATA_TYPE_FILE,
                      <br />
                      ML_PREDICT_DATA_TYPE_EVENT
                    </p>
                    <p>
                      Please see{" "}
                      <Link href={"/bangdb-client-common"}>bangdb common</Link>{" "}
                      for more info.
                    </p>
                  </aside>
                  <aside className="doc-api-code">
                    <p>RE_FORMAT is an enum with following options:</p>
                    <p>
                      ML_BANGDB_ML_DATA_FORMAT_LIBSVM = 0,
                      <br />
                      ML_BANGDB_ML_DATA_FORMAT_CSV,
                      <br />
                      ML_BANGDB_ML_DATA_FORMAT_ARFF,
                      <br />
                      ML_BANGDB_ML_DATA_FORMAT_JSON,
                      <br />
                      ML_BANGDB_ML_DATA_FORMAT_INVALID
                    </p>
                    <p>
                      Please see{" "}
                      <Link href={"/bangdb-client-common"}>bangdb common</Link>{" "}
                      for more info.
                    </p>
                  </aside>
                  <p>To predict for files only</p>
                  <HighlightedJava
                    code={`public int predict_async(String req)`}
                  />
                  <p>To get status of prediction request</p>
                  <HighlightedJava
                    code={`public String getModelPredStatus(String req)`}
                  />
                  <p>
                    Given a request get the prediction status. The req is as
                    follows:
                  </p>
                  <HighlightedJava
                    code={`req = {"schema-name":, "model_name": }`}
                  />
                  <p>
                    It returns NULL for error or errcode as -1 else errcode.
                  </p>
                  <p>To delete prediction request</p>
                  <HighlightedJava
                    code={`public int delPredRequest(String req)`}
                  />
                  <p>Deletes the request. The input param req is as follows:</p>
                  <HighlightedJava
                    code={`req = {"schema-name":, "model_name": “file_name”:}`}
                  />
                  <p>It returns 0 for success and -1 for error.</p>
                  <p>To get list of all the training request</p>
                  <HighlightedJava
                    code={`public ResultSet getTrainRequests(String req)`}
                  />
                  <p>
                    This returns all the training requests made so far for a
                    schema. The <code>prev_rs</code> should be NULL for the
                    first call and for subsequent calls, just pass the previous
                    rs. Upon success it returns 0 else -1 for error.
                  </p>
                  <p>To get training request from the ml housekeeping</p>
                  <HighlightedJava
                    code={`public String getRequestDetail(String req)`}
                  />
                  <p>
                    It returns response with status or NULL for error or if req
                    not found.
                  </p>
                  <p>To get the buckets list for a user</p>
                  <HighlightedJava
                    code={`public String listBuckets(String req)`}
                  />
                  <p>
                    This returns the list of all buckets for the user given by
                    req which looks like following:
                  </p>
                  <HighlightedJava
                    code={`{"access_key":"akey", "secret_key":"skey"}`}
                  />
                  <p>It may return NULL as well in case of error.</p>
                  <p>To get list of all buckets</p>
                  <HighlightedJava
                    code={`public String listAllBuckets(String req)`}
                  />
                  <p>To get list of object in a given bucket</p>
                  <HighlightedJava
                    code={`public String listObjects(String req, String skey, int listSizeMB)`}
                  />
                  <p>
                    This returns a json string with the list of objects in a
                    given bucket for a given key or for all keys (in case of
                    skey is NULL). It may return NULL for error as well.
                    list_size_mb defines the max size of the list, by default it
                    would return 2MB of data or less.
                  </p>
                  <p>To count number of models for a given schema</p>
                  <HighlightedJava
                    code={`public long getModelCount(String req)`}
                  />
                  <p>
                    This counts the models for a given schema else returns -1
                    for error.
                  </p>
                  <p>For admin settings</p>
                  <HighlightedJava code={`public int reinitMDM(String req)`} />
                  <p>
                    To check if the BRS is local or its a distributed system
                  </p>
                  <HighlightedJava code={`public boolean isBRSLocal()`} />
                  <p>
                    Returns if BRS is local, useful for distributed mode or
                    server.
                  </p>
                  <p>To download a file from BRS</p>
                  <HighlightedJava
                    code={`public long downloadFile(String bucketInfo, String key, String fname, String fpath)`}
                  />
                  <p>
                    The key is the name/id of the file to be downloaded and
                    bucketinfo details information about the bucket from which
                    the file has to be downloaded and fpath is the location on
                    the local system where to download the file with name of the
                    file as fname. It returns 0 for success else -1 for error.
                  </p>
                  <p>To get object from a particular bucket</p>
                  <HighlightedJava
                    code={`public byte[] getObject(String bucketInfo, String key)`}
                  />
                  <p>
                    It gets the object(binary or otherwise) from the given
                    bucket, key. It returns 0 for success else -1 for error.
                  </p>
                  <p>To get the number of buckets</p>
                  <HighlightedJava code={`public long countBuckets()`} />
                  <p>This returns a number of buckets else -1 for error.</p>
                  <p>To get the count of object in a particular bucket</p>
                  <HighlightedJava
                    code={`public long countObjects(String bucket_info)`}
                  />
                  <p>
                    This counts the number of objects in the given bucket else
                    returns -1 for error.
                  </p>
                  <p>To get list of object in a particular bucket</p>
                  <HighlightedJava
                    code={`public String countObjectsDetails(String bucket_info)`}
                  />
                  <p>
                    This gives the details of all the objects in the given
                    bucket(bucket_info) else returns NULL for error.
                  </p>
                  <p>To count the number of slices for a given key</p>
                  <HighlightedJava
                    code={`public int countSlices(String bucket_info, String key)`}
                  />
                  <p>
                    BRS stores large files and objects in chunks, therefore we
                    can count how many slices are there for the given file (key)
                    by calling this function. It returns count of slices else -1
                    for error.
                  </p>
                  <p>To delete a file from a particular bucket</p>
                  <HighlightedJava
                    code={`public int delFile(String bucket_info, String key)`}
                  />
                  <p>It returns 0 for success else -1 for error.</p>
                  <p>To delete or drop a bucket from BRS</p>
                  <HighlightedJava
                    code={`public int delBucket(String bucket_info)`}
                  />
                  <p>To close the BangDBMLHelper</p>
                  <HighlightedJava
                    code={`public synchronized void closeMLHelper()`}
                  />
                  <p>It returns 0 for success else -1 for error.</p>
                </div>
              </div>
            </article>
          </div>
        </main>
      </section>
    </React.Fragment>
  );
}
