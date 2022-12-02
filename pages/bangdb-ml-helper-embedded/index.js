import React, { useState } from "react";
import Head from "next/head";
import Breadcrumb from "../../components/Breadcrumb";
import HighlightedCpp from "../../components/HighlightedCpp";
import HighlightedJava from "../../components/HighlightedJava";

export default function MLHelperEmbedded() {
  const [tab, setTab] = useState(1);

  return (
    <React.Fragment>
      <Head>
        <title>MLHelper (Embedded) - BangDB</title>
        <meta
          name="description"
          content="Learn more about BangDB MLHelper (Embedded). Read the documentation to learn to make embedded applications using BangDB."
        ></meta>
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="MLHelper (Embedded) - BangDB" />
        <meta
          property="og:description"
          content="Learn more about BangDB MLHelper (Embedded). Read the documentation to learn to make embedded applications using BangDB."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="MLHelper (Embedded) - BangDB" />
        <meta
          name="twitter:description"
          content="Learn more about BangDB MLHelper (Embedded). Read the documentation to learn to make embedded applications using BangDB."
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
              <Breadcrumb text="Embedded API" url="/bangdb-api" />
              <h1 className="article-title">ML Helper (Embedded)</h1>
              <div className="article-body">
                <p>
                  BangDB ML Helper (Embedded) offers several APIs to help
                  simplify the ML related activities. The type offers features
                  from Training model, prediction, versioning of model,
                  deployment to managing large files and binary objects related
                  to ML. Check out the few real world examples for to learn more
                  or try them out on BangDB.
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
                  <HighlightedCpp
                    code={`static BangDBMLHelper *getInstance(BangDBDatabase *bdb, long mem_budget = 0);`}
                  />
                  <p>
                    To get instance of the ml helper, we call this api. It takes
                    BangDBDatabase as required argument. It takes mem_budget as
                    optional parameter. The mem_budget defines the amount memory
                    we allocate for ML related activities, bangdb will always
                    respect this budget.
                  </p>
                  <p>
                    This is important when we run db and ml on same box or in
                    embedded mode or when multiple users are using it and we
                    wish to server all of them or when we wish to ensure ml
                    memory overflow doesn&apos;t create problem for the users
                    Upon success it returns reference to the{" "}
                    <code>ml_helper</code> else NULL.
                  </p>
                  <HighlightedCpp
                    code={`int createBucket(char *bucket_info);`}
                  />
                  <p>
                    All intermediate files, models or training/ testing related
                    files are stored within BRS (bangdb resource server) in some
                    bucket. This API allows us to create bucket as defined by
                    the bucket_info which looks like following:
                  </p>
                  <HighlightedCpp
                    code={`{access_key:, secret_key:, bucket_name:}`}
                  />
                  <HighlightedCpp code={`void setBucket(char *bucket_info);`} />
                  <p>
                    This is similar to <code>create_bucket</code>, but if there
                    is existing bucket with the name then it will change that to
                    this bucket.
                  </p>
                  <HighlightedCpp
                    code={`long uploadFile(char *key, char *fpath, insert_options iop);`}
                  />
                  <p>
                    This is any ML related file that we wish to further use for
                    training or testing or prediction. Key is the id for the
                    file and fpath takes the path to the file including the file
                    name. Please note it uploads in the default bucket. To load
                    in a particular bucket, please use other API described below
                    It returns 0 for success else -1 for error. Please see AI
                    section for more information.
                  </p>
                  <HighlightedCpp code={`char *trainModel(char *req);`} />
                  <p>
                    This is to train a model. It takes a training request and
                    returns status of the training request. The training request
                    looks like following:
                  </p>
                  <HighlightedCpp
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
                  <p>Please see AI section for more information.</p>
                  <HighlightedCpp code={`char *getModelStatus(char *req);`} />
                  <p>
                    This is to get the status of the model when training request
                    is fired. Req input parameter is like following:
                  </p>
                  <HighlightedCpp
                    code={`req = {"schema-name":, "model_name": }`}
                  />
                  <p>And the return value is like following:</p>
                  <HighlightedCpp
                    code={`{"schema-name":, "model_name":, "train_start_ts":, "train_end_ts":, "train_state":}`}
                  />
                  <p>
                    The <code>train_state</code> actually tells the status of
                    the model. The value for train_state are as following:
                  </p>
                  <HighlightedCpp
                    code={`enum ML_BANGDB_TRAINING_STATE {
   //error
   ML_BANGDB_TRAINING_STATE_INVALID_INPUT = 10, 
   ML_BANGDB_TRAINING_STATE_NOT_PRSENT,
   ML_BANGDB_TRAINING_STATE_ERROR_PARSE,
   ML_BANGDB_TRAINING_STATE_ERROR_FORMAT,
   ML_BANGDB_TRAINING_STATE_ERROR_BRS,
   ML_BANGDB_TRAINING_STATE_ERROR_TUNE,
   ML_BANGDB_TRAINING_STATE_ERROR_TRAIN,
   ML_FILE_TYPE_ERROR_VAL_TESTDATA,
   ML_FILE_TYPE_ERROR_VAL_TRAINDATA,
   ML_BANGDB_TRAINING_STATE_LIMBO,

   //intermediate states
   ML_BANGDB_TRAINING_STATE_BRS_GET_PENDING,
   ML_BANGDB_TRAINING_STATE_BRS_GET_DONE,
   ML_BANGDB_TRAINING_STATE_REFORMAT_DONE,
   ML_BANGDB_TRAINING_STATE_SCALE_TUNING_DONE,
   ML_BANGDB_TRAINING_STATE_BRS_MODEL_UPLOAD_PENDING,
   //training done
   ML_BANGDB_TRAINING_STATE_TRAINING_DONE, //25
   ML_BANGDB_TRAINING_STATE_DEPRICATED,
};`}
                  />
                  <p>
                    The above is true for ML related model status. For IE
                    (Information Extraction) related model status use following:
                  </p>
                  <HighlightedCpp
                    code={`enum IE_BANGDB_TRAINING_STATE {
   //error
   IE_BANGDB_TRAINING_STATE_INVALID_INPUT = 10,
   IE_BANGDB_TRAINING_STATE_NOT_PRSENT,
   IE_BANGDB_TRAINING_STATE_ERROR_BRS,
   IE_BANGDB_TRAINING_STATE_ERROR_HELPER_FILES,
   IE_BANGDB_TRAINING_STATE_ERROR_BRS_FEATURE_EX,
   IE_BANGDB_TRAINING_STATE_ERROR_BRS_HELP_FILES,
   IE_BANGDB_TRAINING_STATE_ERROR_PRE_NER_TRAIN,
   IE_BANGDB_TRAINING_STATE_LIMBO,
   IE_BANGDB_TRAINING_STATE_ERROR_NER_TRAIN,
   IE_BANGDB_TRAINING_STATE_ERROR_NER_TRAIN_BRS,
   IE_BANGDB_TRAINING_STATE_ERROR_PRE_REL_TRAIN, //20
   IE_BANGDB_TRAINING_STATE_ERROR_REL_TRAIN,
   IE_BANGDB_TRAINING_STATE_ERROR_REL_TRAIN_BRS,
   IE_BANGDB_TRAINING_STATE_ERROR_REL_LIST_BRS,
   IE_FILE_TYPE_ERROR_VAL_TRAINDATA,
   IE_FILE_TYPE_ERROR_VAL_TESTDATA,
   IE_FILE_TYPE_ERROR_VAL_CLASSDATA,
   IE_FILE_TYPE_ERROR_VAL_TOTALEXDATA,

   //intermediate states
   IE_BANGDB_TRAINING_STATE_BRS_GET_PENDING,
   IE_BANGDB_TRAINING_STATE_BRS_GET_DONE,
   IE_BANGDB_TRAINING_STATE_HELPER_DONE, //30
   IE_BANGDB_TRAINING_STATE_PRE_NER_DONE,
   IE_BANGDB_TRAINING_STATE_NER_DONE,
   IE_BANGDB_TRAINING_STATE_PRE_REL_DONE,
   IE_BANGDB_TRAINING_STATE_REL_DONE,
   IE_BANGDB_TRAINING_STATE_BRS_MODEL_UPLOAD_PENDING,
   IE_BANGDB_TRAINING_STATE_BRS_RELLIST_UPLOAD_PENDING,
   //training done
   IE_BANGDB_TRAINING_HELP_DONE, //37
   IE_BANGDB_TRAINING_STATE_TRAINING_DONE, //38
   IE_BANGDB_TRAINING_STATE_DEPRICATED,
};`}
                  />
                  <p>Please see AI section for more information.</p>
                  <HighlightedCpp code={`int delModel(char *req);`} />
                  <p>
                    This is used to delete the model by passing req parameter.
                    Here is how req looks like:
                  </p>
                  <HighlightedCpp
                    code={`req = {"schema-name":, "model_name": } int delTrainRequest(char *req);`}
                  />
                  <p>
                    This is to delete the training request. Helpful when
                    training got stuck for some reasons and the status was not
                    updated properly. Here is how req looks like:
                  </p>
                  <HighlightedCpp
                    code={`req = {"schema-name":, "model_name": }
//predict request must contain the algo type as well
//void *arg is for sorted list of positions of features 
char *predict(char *req, void *arg = NULL);`}
                  />
                  <p>
                    The predict API is used to predict for a particular data or
                    event. It takes req as parameter and default parameter arg
                    which describes the sorted position of the different
                    features. It&apos;s not required most of the time. Here is
                    how request looks like:
                  </p>
                  <HighlightedCpp
                    code={`{
   schema-name,
   attr_type:NUM,
   data_type:event,
   re_arrange:N,
   re_format:N,
   model_name:model_name,
   data:"1 1:1.2 2:3.2 3:1.1"
}

{
   schema-name,
   attr_type:NUM,
   data_typee:FILE,
   re_arrange:N,
   re_format:N,
   model_name:model_name,
   data:inputfile
}

{
   schema-name,
   attr_type:NUM,
   data_type:event,
   re_arrange:N,
   re_format:JSON,
   model_name:model_name,
   data:{
      k1:v1,
      k2:v2,
      k3:v3
   }
}`}
                  />
                  <HighlightedCpp
                    code={`resultset *getTrainingRequests( 
   resultset *prev_rs,
   char *accountid
);`}
                  />
                  <p>
                    This returns all the training requests made so far for an
                    account (or schema). The <code>prev_rs</code> should be NULL
                    for the first call and for subsequent calls, just pass the
                    previous rs. Upon success it returnss 0 else -1 for error.
                  </p>
                  <HighlightedCpp code={`char *getRequest(char *req);`} />
                  <p>
                    This returns request (training) from the ML housekeeping.
                    The request is as follows:
                  </p>
                  <HighlightedCpp
                    code={`req = {"schema-name":, "model_name": }`}
                  />
                  <p>
                    It returns response with status or NULL for error or if req
                    not found.
                  </p>
                  <HighlightedCpp code={`int setStatus(char *status);`} />
                  <p>
                    This sets the status for a particular train request. The
                    status is as follows:
                  </p>
                  <HighlightedCpp
                    code={`status = {"schema-name":, "model_name":, "status": }`}
                  />
                  <p>Upon success it returns 0 else -1 for error.</p>
                  <HighlightedCpp
                    code={`char *getModelPredStatus(char *req);`}
                  />
                  <p>
                    Given a request get the prediction status. The req is as
                    follows:
                  </p>
                  <HighlightedCpp
                    code={`req = {"schema-name":, "model_name": }
retval = {"schema-name":, "model_name":, “pred_req_state”:, “file_name”:}
int delPredRequest(char *req);`}
                  />
                  <p>Deletes the request. The input param req is as follows:</p>
                  <HighlightedCpp
                    code={`req = {"schema-name":, "model_name": “file_name”:}`}
                  />
                  <p>It returns 0 for success and -1 for error.</p>
                  <HighlightedCpp
                    code={`long uploadFile(char *bucket_info, char *key, char *fpath, insert_options iop);`}
                  />
                  <p>
                    This is any ML related file that we wish to further use for
                    training or testing or prediction. Key is the id for the
                    file and fpath takes the path to the file including the file
                    name. Please note it uploads in the give bucket. It returns
                    0 for success else -1 for error.
                  </p>
                  <HighlightedCpp
                    code={`long downloadFile(char *bucket_info, char *key, char *fname, char *fpath);`}
                  />
                  <p>
                    It downloads the file from the given bucket, key. It renames
                    the file as &quot;fname&quot; and stores the file at
                    &quot;fpath&quot; It returns 0 for success else -1 for
                    error.
                  </p>
                  <HighlightedCpp
                    code={`long getObject(char *bucket_info, char *key, char **data, long *datlen);`}
                  />
                  <p>
                    It gets the object(binary or otherwise) from the given
                    bucket, key. It fills data with the object and sets the
                    datlen as length or size of the object. It returns 0 for
                    success else -1 for error.
                  </p>
                  <HighlightedCpp
                    code={`int delFile(char *bucket_info, char *key);`}
                  />
                  <p>
                    This deletes the given file (key) from the given bucket
                    (bucket_info). It returns 0 for success and -1 for error.
                  </p>
                  <HighlightedCpp code={`int delBucket(char *bucket_info);`} />
                  <p>
                    This deletes the given bucket. It returns 0 for success and
                    -1 for error.
                  </p>
                  <HighlightedCpp code={`LONG_T countBuckets();`} />
                  <p>This returns number of buckets else -1 for error.</p>
                  <HighlightedCpp
                    code={`int countSlices(char *bucket_info, char *key);`}
                  />
                  <p>
                    Since BRS (bangdb resource server) stores large files and
                    objects in chunks, therefore we can count how many slices
                    are there for the given file (key) by calling this function.
                    It returns count of slices else -1 for error.
                  </p>
                  <HighlightedCpp
                    code={`LONG_T countObjects(char *bucket_info);`}
                  />
                  <p>
                    This counts the number of objects in the given bucket else
                    returns -1 for error.
                  </p>
                  <HighlightedCpp
                    code={`char *countObjectsDetails(char *bucket_info);`}
                  />
                  <p>
                    This gives the details of all the objects in the given
                    bucket(bucket_info) else returns NULL for error. Please note
                    it may set error in the returned json value as well.
                  </p>
                  <HighlightedCpp code={`long countModels(char *accountid);`} />
                  <p>
                    This counts the models for a given account else returns -1
                    for error.
                  </p>
                  <HighlightedCpp code={`int getRefCount();`} />
                  <p>
                    This returns reference count of all the references of the
                    <code>ml_helper</code> held by different objects.
                  </p>
                  <HighlightedCpp
                    code={`// this is to test if brs is local to the BE server DB
bool isBrsLocal();`}
                  />
                  <p>
                    This is useful to know if brs (bangdb resource server) is
                    local or remote. Mostly used by clients.
                  </p>
                  <HighlightedCpp
                    code={`char *listObjects(char *bucket_info, char *skey = NULL, int list_size_mb = MAX_RESULTSET_SIZE);`}
                  />
                  <p>
                    This returns json string with the list of objects in a given
                    bucket for a given key or for all keys (in case of skey is
                    NULL). It may return NULL for error as well.{" "}
                    <code>list_size_mb</code> defines the max size of the list,
                    by default it would return 2MB of data or less.
                  </p>
                  <HighlightedCpp
                    code={`// returns json with the name of buckets, else error 
{"access_key":"akey", "secret_key":"skey"}
char *listBuckets(char *user_info);`}
                  />
                  <p>
                    This returns the list of all buckets for the user given by{" "}
                    <code>user_info</code> which looks like following:
                  </p>
                  <HighlightedCpp
                    code={`{"access_key":"akey", "secret_key":"skey"}`}
                  />
                  <p>It may return NULL as well in case of error</p>
                  <HighlightedCpp
                    code={`int closeBangDBMLHelper(bool force = false);`}
                  />
                  <p>
                    This closes the bangdb ml helper. Since reference count is
                    maintained within the ml_helper therefore if force is set as
                    false and there are open references then it would not close
                    the <code>ml_helper</code>.
                  </p>
                  <p>
                    But if force is set to be true or number of references is 0
                    then it will close the ml_helper. It returns 0 for success
                    else -1 for error.
                  </p>
                </div>
                <div
                  style={{
                    display: tab === 2 ? "block" : "none",
                  }}
                >
                  <HighlightedJava
                    code={`public static synchronized BangDBMLHelper getInstance(BangDBDatabase bdb, long mem_budget)`}
                  />
                  <p>
                    To get instance of the ml helper, we call this API. It takes
                    BangDBDatabase as required argument. It takes mem_budget as
                    optional parameter. The <code>mem_budget</code> defines the
                    amount memory we allocate for ML related activities, bangdb
                    will always respect this budget. This is important when we
                    run db and ml on same box or in embedded mode or when
                    multiple users are using it and we wish to server all of
                    them or when we wish to ensure ml memory overflow
                    doesn&apos;t create problem for the users.
                  </p>
                  <p>
                    Upon success it returns reference to the{" "}
                    <code>ml_helper</code> else NULL.
                  </p>
                  <HighlightedJava code={`public String toString()`} />
                  <p>Returns the detail of the object as string</p>
                  <HighlightedJava
                    code={`public int createBucket(String bucket_info)`}
                  />
                  <p>
                    All intermediate files, models or training/ testing related
                    files are stored within BRS (bangdb resource server) in some
                    bucket. This api allows us to create bucket as defined by
                    the <code>bucket_info</code> which looks like following:
                  </p>
                  <HighlightedJava
                    code={`{access_key:, secret_key:, bucket_name:}
public void setBucket(String bucket_info)`}
                  />
                  <p>
                    This is similar to create_bucket, but if there is existing
                    bucket with the name then it will change that to this
                    bucket.
                  </p>
                  <HighlightedJava
                    code={`public long uploadFile(String key, String path, InsertOptions flag)`}
                  />
                  <p>
                    This is any ML related file that we wish to further use for
                    training or testing or prediction. Key is the id for the
                    file and fpath takes the path to the file including the file
                    name. Please note it uploads in the default bucket.
                  </p>
                  <p>
                    To load in a particular bucket, please use other API
                    described below It returns 0 for success else -1 for error.
                    Please see AI section for more information.
                  </p>
                  <HighlightedJava
                    code={`public long uploadFile(String bucketInfo, String key, String path, InsertOptions flag)`}
                  />
                  <p>
                    Same as above, except it will upload the file in the given
                    bucketInfo. Above API will put in the default bucket.
                  </p>
                  <HighlightedJava
                    code={`public String trainModel(String req)`}
                  />
                  <p>
                    This is to train a model. It takes a training request and
                    returns status of the training request. The training request
                    looks like following:
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
                  <p>Please see AI section for more information.</p>
                  <HighlightedJava
                    code={`public long uploadStreamDataForTrain(String req)`}
                  />
                  <HighlightedJava
                    code={`public String getModelStatus(String req)`}
                  />
                  <p>
                    This is to get the status of the model when training request
                    is fired. Req input parameter is like following:
                  </p>
                  <HighlightedJava
                    code={`req = {"schema-name":, "model_name": }`}
                  />
                  <p>And the return value is like following:</p>
                  <HighlightedJava
                    code={`{"schema-name":, "model_name":, "train_start_ts":, "train_end_ts":, "train_state":}`}
                  />
                  <p>
                    The train_state actually tells the status of the model. The
                    value for train_state are as following:
                  </p>
                  <HighlightedJava
                    code={`enum ML_BANGDB_TRAINING_STATE {
  //error
  ML_BANGDB_TRAINING_STATE_INVALID_INPUT = 10,
  ML_BANGDB_TRAINING_STATE_NOT_PRSENT,
  ML_BANGDB_TRAINING_STATE_ERROR_PARSE,
  ML_BANGDB_TRAINING_STATE_ERROR_FORMAT,
  ML_BANGDB_TRAINING_STATE_ERROR_BRS,
  ML_BANGDB_TRAINING_STATE_ERROR_TUNE,
  ML_BANGDB_TRAINING_STATE_ERROR_TRAIN,
  ML_FILE_TYPE_ERROR_VAL_TESTDATA,
  ML_FILE_TYPE_ERROR_VAL_TRAINDATA,
  ML_BANGDB_TRAINING_STATE_LIMBO,

  //intermediate states
  ML_BANGDB_TRAINING_STATE_BRS_GET_PENDING,
  ML_BANGDB_TRAINING_STATE_BRS_GET_DONE,
  ML_BANGDB_TRAINING_STATE_REFORMAT_DONE,
  ML_BANGDB_TRAINING_STATE_SCALE_TUNING_DONE,
  ML_BANGDB_TRAINING_STATE_BRS_MODEL_UPLOAD_PENDING,
  //training done
  ML_BANGDB_TRAINING_STATE_TRAINING_DONE, //25
  ML_BANGDB_TRAINING_STATE_DEPRICATED,
};`}
                  />
                  <p>
                    The above is true for ML related model status. For IE
                    (Information Extraction) related model status use following:
                  </p>
                  <HighlightedJava
                    code={`enum IE_BANGDB_TRAINING_STATE {
  //errorIE_BANGDB_TRAINING_STATE_INVALID_INPUT = 10, 
  IE_BANGDB_TRAINING_STATE_NOT_PRSENT,
  IE_BANGDB_TRAINING_STATE_ERROR_BRS,
  IE_BANGDB_TRAINING_STATE_ERROR_HELPER_FILES,
  IE_BANGDB_TRAINING_STATE_ERROR_BRS_FEATURE_EX,
  IE_BANGDB_TRAINING_STATE_ERROR_BRS_HELP_FILES,
  IE_BANGDB_TRAINING_STATE_ERROR_PRE_NER_TRAIN,
  IE_BANGDB_TRAINING_STATE_LIMBO,
  IE_BANGDB_TRAINING_STATE_ERROR_NER_TRAIN,
  IE_BANGDB_TRAINING_STATE_ERROR_NER_TRAIN_BRS,
  IE_BANGDB_TRAINING_STATE_ERROR_PRE_REL_TRAIN, //20
  IE_BANGDB_TRAINING_STATE_ERROR_REL_TRAIN,
  IE_BANGDB_TRAINING_STATE_ERROR_REL_TRAIN_BRS,
  IE_BANGDB_TRAINING_STATE_ERROR_REL_LIST_BRS,
  IE_FILE_TYPE_ERROR_VAL_TRAINDATA,
  IE_FILE_TYPE_ERROR_VAL_TESTDATA,
  IE_FILE_TYPE_ERROR_VAL_CLASSDATA,
  IE_FILE_TYPE_ERROR_VAL_TOTALEXDATA,
  //intermediate states
  IE_BANGDB_TRAINING_STATE_BRS_GET_PENDING,
  IE_BANGDB_TRAINING_STATE_BRS_GET_DONE,
  IE_BANGDB_TRAINING_STATE_HELPER_DONE, //30
  IE_BANGDB_TRAINING_STATE_PRE_NER_DONE,
  IE_BANGDB_TRAINING_STATE_NER_DONE,
  IE_BANGDB_TRAINING_STATE_PRE_REL_DONE,
  IE_BANGDB_TRAINING_STATE_REL_DONE,
  IE_BANGDB_TRAINING_STATE_BRS_MODEL_UPLOAD_PENDING,
  IE_BANGDB_TRAINING_STATE_BRS_RELLIST_UPLOAD_PENDING,
  //training done
  IE_BANGDB_TRAINING_HELP_DONE, //37
  IE_BANGDB_TRAINING_STATE_TRAINING_DONE, //38
  IE_BANGDB_TRAINING_STATE_DEPRICATED,
};`}
                  />
                  <p>Please see AI section for more information.</p>
                  <HighlightedJava
                    code={`public int setModelStatus(String req)`}
                  />
                  <p>
                    This sets the status for a particular train request. The
                    status is as follows:
                  </p>
                  <HighlightedJava
                    code={`status = {"schema-name":, "model_name":, “status”: }`}
                  />
                  <p>Upon success it returns 0 else -1 for error.</p>
                  <HighlightedJava code={`public int delModel(String req)`} />
                  <p>
                    This is used to delete the model by passing req parameter.
                    Here is how req looks like:
                  </p>
                  <HighlightedJava
                    code={`req = {"schema-name":, "model_name": } public int delTrainRequest(String req)`}
                  />
                  <p>
                    This is to delete the training request. Helpful when
                    training got stuck for some reasons and the status was not
                    updated properly. Here is how req looks like:
                  </p>
                  <HighlightedJava
                    code={`req = {"schema-name":, "model_name": }
public String predict(String req)`}
                  />
                  <p>
                    The predict API is used to predict for a particular data or
                    event. It takes req as parameter and default parameter arg
                    which describes the sorted position of the different
                    features. It&apos;s not required most of the time. Here is
                    how request looks like:
                  </p>
                  <HighlightedJava
                    code={`{
   schema-name,
   attr_type:NUM,
   data_type:event,
   re_arrange:N,
   re_format:N,
   model_name:model_name,
   data:"1 1:1.2 2:3.2 3:1.1"
}{
   schema-name,
   attr_type:NUM,
   data_typee:FILE,
   re_arrange:N,
   re_format:N,
   model_name:model_name,
   data:inputfile
}{
   schema-name,
   attr_type:NUM,
   data_type:event,
   re_arrange:N,
   re_format:JSON,
   model_name:model_name,
   data:{
      k1:v1,
      k2:v2,
      k3:v3
   }
}`}
                  />
                  <HighlightedJava
                    code={`public int predict_async(String req)`}
                  />
                  <HighlightedJava
                    code={`// not for embedded
public String getModelPredStatus(String req)`}
                  />
                  <p>
                    Given a request get the prediction status. The req is as
                    follows:
                  </p>
                  <HighlightedJava
                    code={`req = {"schema-name":, "model_name": }
retval = {"schema-name":, "model_name":, “pred_req_state”:, “file_name”:}
public int delPredRequest(String req)`}
                  />
                  <p>Deletes the request. The input param req is as follows:</p>
                  <HighlightedJava
                    code={`req = {"schema-name":, "model_name": "file_name":}`}
                  />
                  <p>It returns 0 for success and -1 for error.</p>
                  <HighlightedJava
                    code={`public ResultSet getTrainRequests(String req, String levk)`}
                  />
                  <p>
                    This returns all the training requests made so far for an
                    account (or schema). The prev_rs should be NULL for the
                    first call and for subsequent calls, just pass the previous
                    rs. Upon success it returnss 0 else -1 for error.
                  </p>
                  <HighlightedJava
                    code={`public String getRequestDetail(String req)`}
                  />
                  <p>
                    This returns request (training) from the ML housekeeping.
                    The request is as follows:
                  </p>
                  <HighlightedJava
                    code={`req = {"schema-name":, "model_name": }`}
                  />
                  <p>
                    It returns response with status or NULL for error or if req
                    not found.
                  </p>
                  <HighlightedJava
                    code={`public String listBuckets(String req)`}
                  />
                  <p>
                    This returns the list of all buckets for the user given by{" "}
                    <code>user_info</code> which looks like following:
                  </p>
                  <HighlightedJava
                    code={`{"access_key":"akey", "secret_key":"skey"}`}
                  />
                  <p>It may return NULL as well in case of error.</p>
                  <HighlightedJava
                    code={`public String listAllBuckets(String req)`}
                  />
                  <HighlightedJava
                    code={`public String listObjects(String req, String skey, int listSizeMB)`}
                  />
                  <p>
                    This returns json string with the list of objects in a given
                    bucket for a given key or for all keys (in case of skey is
                    NULL). It may return NULL for error as well.{" "}
                    <code>list_size_mb</code> defines the max size of the list,
                    by default it would return 2MB of data or less.
                  </p>
                  <HighlightedJava
                    code={`public long getModelCount(String req)`}
                  />
                  <p>
                    This counts the models for a given account else returns -1
                    for error.
                  </p>
                  <HighlightedJava code={`public int reinitMDM(String req)`} />
                  <p>Only for admin and server case</p>
                  <HighlightedJava
                    code={`// not for embedded
public boolean isBRSLocal()`}
                  />
                  <p>
                    Returns if BRS is local, useful for distributed mode or
                    server.
                  </p>
                  <HighlightedJava
                    code={`// not for embedded as it's always true
public long downloadFile(String bucketInfo, String key, String fname, String fpath)`}
                  />
                  <p>
                    It downloads the file from the given bucket, key. It renames
                    the file as &quot;fname&quot; and stores the file at
                    &quot;fpath&quot;. It returns 0 for success else -1 for
                    error.
                  </p>
                  <HighlightedJava
                    code={`public byte[] getObject(String bucketInfo, String key)`}
                  />
                  <p>
                    It gets the object(binary or otherwise) from the given
                    bucket, key. It fills data with the object and sets the
                    datlen as length or size of the object. It returns 0 for
                    success else -1 for error.
                  </p>
                  <HighlightedJava code={`public long countBuckets()`} />
                  <p>This returns number of buckets else -1 for error.</p>
                  <HighlightedJava
                    code={`public long countObjects(String bucket_info)`}
                  />
                  <p>
                    This counts the number of objects in the given bucket else
                    returns -1 for error.
                  </p>
                  <HighlightedJava
                    code={`public String countObjectsDetails(String bucket_info)`}
                  />
                  <p>
                    This gives the details of all the objects in the given
                    bucket(bucket_info) else returns NULL for error. Please note
                    it may set error in the returned json value as well.
                  </p>
                  <HighlightedJava
                    code={`public int countSlices(String bucket_info, String key)`}
                  />
                  <p>
                    Since BRS (bangdb resource server) stores large files and
                    objects in chunks, therefore we can count how many slices
                    are there for the given file (key) by calling this function.
                    It returns count of slices else -1 for error.
                  </p>
                  <HighlightedJava
                    code={`public int delFile(String bucket_info, String key)`}
                  />
                  <p>
                    It deletes the file specified with key and{" "}
                    <code>bucket_info</code>. Bucket info is as follows:
                  </p>
                  <HighlightedJava
                    code={`bucketInfo = {
\"bucket_name\":\"ml_bucket_info\",
\"access_key\":\"brs_access_key\",
\"secret_key\":\"brs_secret_key\"
}`}
                  />
                  <p>It returns 0 for success else -1 for error.</p>
                  <HighlightedJava
                    code={`public int delBucket(String bucket_info)`}
                  />
                  <p>
                    It deletes the bucket as specified. Bucket info looks like
                    following:
                  </p>
                  <HighlightedJava
                    code={`bucketInfo = {
\"bucket_name\":\"ml_bucket_info\",
\"access_key\":\"brs_access_key\",
\"secret_key\":\"brs_secret_key\"
}`}
                  />
                  <p>It returns 0 for success else -1 for error.</p>
                  <HighlightedJava
                    code={`public synchronized void closeMLHelper(boolean force)`}
                  />
                  <p>
                    This closes the BangDB ML helper. Since reference count is
                    maintained within the <code>ml_helper</code> therefore if
                    force is set as false and there are open references then it
                    would not close the <code>ml_helper</code>. But if force is
                    set to be true or number of references is 0 then it will
                    close the <code>ml_helper</code>. It returns 0 for success
                    else -1 for error.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </main>
      </section>
    </React.Fragment>
  );
}
