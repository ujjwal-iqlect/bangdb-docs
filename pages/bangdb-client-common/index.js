import React, { useState } from "react";
import Head from "next/head";
import Breadcrumb from "../../components/Breadcrumb";
import HighlightedCpp from "../../components/HighlightedCpp";
import HighlightedJava from "../../components/HighlightedJava";

export default function BangdbClientCommon() {
  const [tab, setTab] = useState(1);

  return (
    <React.Fragment>
      <Head>
        <title>Helper (Common) - BangDB</title>
        <meta
          name="description"
          content="Learn about BangDB Helper (Common) enums & server APIs. Read the documentation to know more about BangDB Server APIs."
        ></meta>
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Helper (Common) - BangDB" />
        <meta
          property="og:description"
          content="Learn about BangDB Helper (Common) enums & server APIs. Read the documentation to know more about BangDB Server APIs."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="Helper (Common) - BangDB" />
        <meta
          name="twitter:description"
          content="Learn about BangDB Helper (Common) enums & server APIs. Read the documentation to know more about BangDB Server APIs."
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
              <h1 className="article-title">BangDB Helper (Common)</h1>
              <div className="article-body">
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
                    code={`enum ML_BANGDB_SERVER_TYPE
{
        ML_BANGDB_SERVER_TYPE_INVALID = 0,
        ML_BANGDB_SERVER_TYPE_TRAIN,
        ML_BANGDB_SERVER_TYPE_PREDICT,
        ML_BANGDB_SERVER_TYPE_TRAIN_PREDICT,
};

enum ML_BANGDB_ALGO_TYPE
{
        ML_BANGDB_ALGO_TYPE_INVALID = 0,
        ML_BANGDB_ALGO_TYPE_SVM,
        ML_BANGDB_ALGO_TYPE_IE,
        ML_BANGDB_ALGO_TYPE_IE_SENT,
        ML_BANGDB_ALGO_TYPE_IE_TAGS_SUPPORTED,
        ML_BANGDB_ALGO_TYPE_IE_NER_DETECT,
        ML_BANGDB_ALGO_TYPE_IE_WORD_DICT,
        ML_BANGDB_ALGO_TYPE_IE_NER_TRAIN,
        ML_BANGDB_ALGO_TYPE_KMEANS_TRAIN,
        ML_BANGDB_ALGO_TYPE_CUSTOM_EX,
        ML_BANGDB_ALGO_TYPE_LIN,

        //add all other algo type above this line
        ML_MAX_ALGO_TYPE,
};

enum ML_BANGDB_TRAIN_SOURCE
{
        ML_BANGDB_TRAIN_SOURCE_INVALID = 0,
        ML_BANGDB_TRAIN_SOURCE_FILE,
        ML_BANGDB_TRAIN_SOURCE_DIR,
        ML_BANGDB_TRAIN_SOURCE_DOMAIN,
        ML_BANGDB_TRAIN_SOURCE_STREAM,
        ML_BANGDB_TRAIN_SOURCE_TEXT,
};

enum ML_IE_TRAIN_ACTION
{
        ML_IE_TRAIN_ACTION_ALL = 0,
        ML_IE_TRAIN_ONLY_HELP,
        ML_IE_TRAIN_ACTION_SKIP_HELP,
        ML_IE_TRAIN_ACTION_SKIP_KB_TRAIN,
        ML_IE_TRAIN_ACTION_INVALID,
};

enum ML_PREDICT_DATA_TYPE
{
        ML_PREDICT_DATA_TYPE_INVALID = 0,
        ML_PREDICT_DATA_TYPE_FILE,
        ML_PREDICT_DATA_TYPE_EVENT,
};

enum ML_DATA_REFORMAT_TYPE
{
        ML_DATA_REFORMAT_TYPE_NONE = 0,
        ML_DATA_REFORMAT_TYPE_CSV,
        ML_DATA_REFORMAT_TYPE_ARFF,
        ML_DATA_REFORMAT_TYPE_JSON,
        ML_DATA_REFORMAT_JSON_TO_CSV,
        ML_DATA_REFORMAT_TYPE_TSROLLUP,
        ML_DATA_REFORMAT_TYPE_INVALID,  //add other enum val for different format above this
        // todo: need to add libsvm to csv, arff to csv etc
};

enum ML_BANGDB_ATTR_TYPE
{
        ML_BANGDB_ATTR_TYPE_INVALID = 0,
        ML_BANGDB_ATTR_TYPE_NUM,
        ML_BANGDB_ATTR_TYPE_STR,
        ML_BANGDB_ATTR_TYPE_HYBRID,
};

enum ML_BANGDB_TRAIN_SPEED
{
        ML_BANGDB_TRAIN_SPEED_VERYFAST = 1,
        ML_BANGDB_TRAIN_SPEED_FAST,
        ML_BANGDB_TRAIN_SPEED_MEDIUM,
        ML_BANGDB_TRAIN_SPEED_SLOW,
        ML_BANGDB_TRAIN_SPEED_VERYSLOW,
        ML_BANGDB_TRAIN_SPEED_INVALID,
};

enum ML_BANGDB_TRAINING_STATE
{
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
};

enum ML_BANGDB_PRED_STATE
{
        ML_BANGDB_PRED_STATE_INVALID_INPUT = 10,
        ML_BANGDB_PRED_STATE_NOT_PRESENT,
        ML_BANGDB_PRED_STATE_ERROR_PARSE,
        ML_BANGDB_PRED_STATE_ERROR_FORMAT,
        ML_BANGDB_PRED_STATE_ERROR_BRS_FETCH,
        ML_BANGDB_PRED_STATE_ERROR_FILE_FORMAT,
        ML_BANGDB_PRED_STATE_ERROR_FILE_REFORMAT,
        ML_BANGDB_PRED_STATE_ERROR_FILE_TUNE,
        ML_BANGDB_PRED_STATE_ERROR_PREDICT,
        ML_BANGDB_PRED_STATE_LIMBO,
        ML_BANGDB_PRED_STATE_BRS_FETCH_PENDING,
        ML_BANGDB_PRED_STATE_BRS_FETCH_DONE,
        ML_BANGDB_PRED_STATE_REFORMAT_DONE,
        ML_BANGDB_PRED_STATE_TUNE_DONE,
        ML_BANGDB_PRED_STATE_BRS_PUT_DONE,
        ML_BANGDB_PRED_STATE_PREDICT_DONE, //25
        ML_BANGDB_PRED_STATE_DEPRICATED
};

enum ML_BANGDB_TRAINING_STATE
{
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
};

enum ML_BANGDB_PRED_STATE
{
        ML_BANGDB_PRED_STATE_INVALID_INPUT = 10,
        ML_BANGDB_PRED_STATE_NOT_PRESENT,
        ML_BANGDB_PRED_STATE_ERROR_PARSE,
        ML_BANGDB_PRED_STATE_ERROR_FORMAT,
        ML_BANGDB_PRED_STATE_ERROR_BRS_FETCH,
        ML_BANGDB_PRED_STATE_ERROR_FILE_FORMAT,
        ML_BANGDB_PRED_STATE_ERROR_FILE_REFORMAT,
        ML_BANGDB_PRED_STATE_ERROR_FILE_TUNE,
        ML_BANGDB_PRED_STATE_ERROR_PREDICT,
        ML_BANGDB_PRED_STATE_LIMBO,
        ML_BANGDB_PRED_STATE_BRS_FETCH_PENDING,
        ML_BANGDB_PRED_STATE_BRS_FETCH_DONE,
        ML_BANGDB_PRED_STATE_REFORMAT_DONE,
        ML_BANGDB_PRED_STATE_TUNE_DONE,
        ML_BANGDB_PRED_STATE_BRS_PUT_DONE,
        ML_BANGDB_PRED_STATE_PREDICT_DONE, //25
        ML_BANGDB_PRED_STATE_DEPRICATED
};

//types of db
enum PersistType
{
        INMEM_ONLY, //only RAM based, cache enabled (no overflow to disk, ideally overflow to other RAM)
        INMEM_PERSIST, //disked backed, cache enabled (over flow to disk)
        PERSIST_ONLY, //cache disabled, direct file IO
        INVALID_PERSIST_TYPE
};

//types of index
enum IndexType
{
        HASH,
        EXTHASH,
        BTREE,
        HEAP,
        INVALID_INDEX_TYPE,
};

//log type
enum LogType
{
        SHARED_LOG,
        PRIVATE_LOG,
        INVALID_LOG
};

//how should we access db, various ways
enum OpenType
{
        OPENCREATE,
        TRUNCOPEN,
        JUSTOPEN
};

//how should db be closed
enum CloseType
{
        DEFAULT_AT_CLIENT,
        CONSERVATIVE_AT_SERVER,
        OPTIMISTIC_AT_SERVER,
        CLEANCLOSE_AT_SERVER,
        SIMPLECLOSE_AT_SERVER,
        DEFAULT_AT_SERVER,
};

//the insert options
enum InsertOptions
{
        INSERT_UNIQUE,          //if non-existing then insert else return
        UPDATE_EXISTING,        //if existing then update else return
        INSERT_UPDATE,          //insert if non-existing else update
        DELETE_EXISTING,        //delete if existing
        UPDATE_EXISTING_INPLACE, //only for inplace update
        INSERT_UPDATE_INPLACE, //only for inplace update
};

enum TransactionType
{
        DB_TRANSACTION_NONE,
        DB_OPTIMISTIC_TRANSACTION,
        DB_PESSIMISTIC_TRANSACTION,
};

enum TableSizeHint
{
        TINY_TABLE_SIZE,
        SMALL_TABLE_SIZE,
        NORMAL_TABLE_SIZE,
        BIG_TABLE_SIZE,
        TABLE_SIZE_INVALID,
};

enum TableType
{
        /* index and data files with opaque (void*) key */
        NORMAL_TABLE,
        WIDE_TABLE,
        INDEX_TABLE, //opaque(void*) as key and dataoff, datlen is of actual value in the data file store in main table
         //data is in same index file if dupl is not allowed, else data (as dofft) is in data file in chunk of 32 with link at the end
        /* no data file for following tables */
        PRIMITIVE_TABLE_INT, //int as key and int as val, stored in index file only, no data file
        PRIMITIVE_TABLE_LONG, //long as key and long as val, stored in index file only, no data file
        PRIMITIVE_TABLE_STRING, //opaque(void*) as key and data stored in the index only, no data file - Fixed Table

        LARGE_TABLE,

        BANGDB_TABLE_INVALID
};

enum TableSubType
{
        BANGDB_SW_TABLE,
        BANGDB_TOPK_TABLE,
        NON_ANALYTICAL_TABLE,
        //SW_ENTITY_COUNT_TABLE,
        //SW_GROUPBYOP_TABLE,
        INDEXBTREE_TABLE, // this is to override the selection of idx table, right now only for non_dupl keys index_table is selected
        DUPLINDEX_TABLE_NOLOG, // this is to override the selection of idx table, right now only for dupl keys dupl_index is selected
        BANGDB_SW_INVALID,
};

enum PrimitiveDataType
{
        PRIMITIVE_INT,
        PRIMITIVE_LONG,
        PRIMITIVE_STRING,
        PRIMITIVE_INVALID,
};

enum ScanLimitBy
{
        // Adding the below LIMIT_INVALID to use it as a default parameter.
        LIMIT_INVALID = -1,
        LIMIT_RESULT_SIZE,
        LIMIT_RESULT_ROW,
};

enum ScanOperator
{
        GT,
        GTE,
        LT,
        LTE,
        EQ,
        NE
};

enum JoinOperator
{
        JO_INVALID = -1,
        JO_AND = 0,
        JO_OR = 1,
};

//currently just supporting whether data is valid or invalid
//later we can leverage this for versioning as well
enum VersionType
{
        BANGDB_DATA_VERSION_OFF, //no version (current default)
        BANGDB_DATA_VERSION_VALID_INVALID, //db will mark data as valid or invalid
        BANGDB_DATA_VERSION_ON, //this is not supported as of now
};

enum SortMethod
{
        LEXICOGRAPH = 1,
        QUASI_LEXICOGRAPH = 2,
        SORT_METHOD_INVALID = 100,
};

enum SortDirection
{
        SORT_ASCENDING = 3,
        SORT_DESCENDING = 4,
    SORT_INVALID
};

enum KeyType
{
        NORMAL_KEY = 1, //opaque (void*) as key
        COMPOSITE_KEY = 3, //always treated as opaque even if it is of long:void* or long:long
        NORMAL_KEY_LONG = 10, //long as key
        //COMPOSITE_KEY_LONG, //long:long as key, all keys participating in composite will be long, no hybrid keys
        KEY_TYPE_INVALID = 100,
};`}
                  />
                </div>
                <div
                  style={{
                    display: tab === 2 ? "block" : "none",
                  }}
                >
                  <HighlightedJava
                    code={`public enum CloseType {
        DEFAULT_AT_CLIENT,
        CONSERVATIVE_AT_SERVER,
        OPTIMISTIC_AT_SERVER,
        CLEANCLOSE_AT_SERVER,
        SIMPLECLOSE_AT_SERVER,
        DEFAULT_AT_SERVER;
}

public enum IndexType {
   HASH, //depricated
   EXTHASH,
   BTREE,
   HEAP, //not supported
   IndexType_INVALID;
}

public enum InsertOptions {
        INSERT_UNIQUE, //if non-existing then insert else return
        UPDATE_EXISTING, //if existing then update else return
        INSERT_UPDATE, //insert if non-existing else update
        DELETE_EXISTING, //delete if existing
        UPDATE_EXISTING_INPLACE, //only for inplace update
        INSERT_UPDATE_INPLACE; //only for inplace update
}

public enum JoinType {
    JO_INVALID, JO_AND, JO_OR;
}

public enum KeyType {
        NORMAL_KEY, //value = 1, opaque (void*) as key
        COMPOSITE_KEY, //value = 3, always treated as opaque even if it is of long:void* or long:long
        NORMAL_KEY_LONG, //value = 10, long as key
        KEY_TYPE_INVALID; //value = -1
}

public enum LogType {
        SHARED_LOG,
        PRIVATE_LOG,
        LogType_INVALID;
}

public enum OpenType {
        OPENCREATE,
        TRUNCOPEN,
        JUSTOPEN;
}

public enum PersistType {
    INMEM_ONLY, //one proc, only RAM based, cache enabled (no overflow to disk, ideally overflow to other RAM)
    INMEM_PERSIST, //one proc, disked backed, cache enabled (over flow to disk)
    PERSIST_ONLY, //many procs one db file, cache disabled
    INVALID_PERSIST_TYPE;
}

public enum PrimitiveDataType {
        PRIMITIVE_INT,
        PRIMITIVE_LONG,
        PRIMITIVE_STRING,
        PRIMITIVE_INVALID;
}

public enum ScanLimitBy {
        LIMIT_RESULT_SIZE,
        LIMIT_RESULT_ROW,
        LIMIT_INVALID;
}

public enum ScanOperator {
        GT,
        GTE,
        LT,
        LTE,
        EQ,
        NE;
}

public enum SortDirection {
        SORT_ASCENDING,                 //value = 3
        SORT_DESCENDING,                //value = 4
        SORT_DIRECTION_INVALID;         //value = -1
}

public enum SortMethod {
        LEXICOGRAPH, //value = 1
        QUASI_LEXICOGRAPH, //value = 2
        SORT_METHOD_INVALID; //value = -1
}

public enum TableSizeHint {
        TINY_TABLE_SIZE,
        SMALL_TABLE_SIZE,
        NORMAL_TABLE_SIZE,
        BIG_TABLE_SIZE;
}

public enum TableSubType {
        BANGDB_SW_TABLE,
        BANGDB_TOPK_TABLE,
        NON_ANALYTICAL_TABLE,
        INDEXBTREE_TABLE,
        DUPLINDEX_TABLE,
        BANGDB_SW_INVALID;
}

public enum TableType {
        /* index and data files with opaque (void*) key */
        NORMAL_TABLE,
        WIDE_TABLE,
        /* no data file for following tables */
        INDEX_TABLE, //opaque(void*) as key and dataoff, datlen is of actual value in the data file store in main table, no data file
        PRIMITIVE_TABLE_INT, //int as key and int as val, stored in index file only, no data file
        PRIMITIVE_TABLE_LONG, //long as key and long as val, stored in index file only, no data file
        PRIMITIVE_TABLE_STRING, //opaque(void*) as key and data stored in the index only, no data file
        LARGE_TABLE,
        BANGDB_TABLE_INVALID;
}

public enum TransactionType {
        DB_MULTIOPS_TRANSACTION_NONE,
        DB_OPTIMISTIC_TRANSACTION,
        DB_PESSIMISTIC_TRANSACTION;
}

public enum VersionType {
        BANGDB_DATA_VERSION_INVALID,
        BANGDB_DATA_VERSION_VALID;
}`}
                  />
                </div>
              </div>
            </article>
          </div>
        </main>
      </section>
    </React.Fragment>
  );
}
