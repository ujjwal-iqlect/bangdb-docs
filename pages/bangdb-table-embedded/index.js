import React, { useState } from "react";
import Head from "next/head";
import Breadcrumb from "../../components/Breadcrumb";
import HighlightedCpp from "../../components/HighlightedCpp";
import HighlightedJava from "../../components/HighlightedJava";

export default function BangDBTableEmbedded() {
  const [tab, setTab] = useState(1);

  return (
    <React.Fragment>
      <Head>
        <title>Table (Embedded) - BangDB</title>
        <meta
          name="description"
          content="Learn more about BangDB Table (Embedded). Read the documentation to learn to make embedded applications using BangDB."
        ></meta>
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Table (Embedded) - BangDB" />
        <meta
          property="og:description"
          content="Learn more about BangDB Table (Embedded). Read the documentation to learn to make embedded applications using BangDB."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="Table (Embedded) - BangDB" />
        <meta
          name="twitter:description"
          content="Learn more about BangDB Table (Embedded). Read the documentation to learn to make embedded applications using BangDB."
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
              <Breadcrumb text="Embedded" url="/bangdb-introduction" />
              <h1 className="article-title">Table (Embedded)</h1>
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
                <p>
                  There are very few APIs here to deal with. For simplicity,
                  naming has been done to help understand the API.
                </p>
                <div
                  style={{
                    display: tab === 1 ? "block" : "none",
                  }}
                >
                  <p>Following is the API details:</p>
                  <HighlightedCpp
                    code={
                      "int closeTable(CloseType tblCloseType = DEFAULT, char *newname = NULL, bool force_close = false);"
                    }
                  />
                  <p>
                    This closes the table and return 0 for success and -1 for
                    error. bangdb_closeType is as defined above. Table maintains
                    open reference count hence it will not close if there are
                    open references to the table. When open reference is 0 then
                    it will close. However, if we wish to override this
                    behaviour then we must pass force_close = true.
                  </p>
                  <HighlightedCpp
                    code={"int addIndex(const char *idxName, TableEnv *tenv);"}
                  />
                  <p>
                    This is the generic api for adding index for a table. The
                    TableEnv describes the index type etc. It returns 0 for
                    success and -1 for error.
                  </p>
                  <HighlightedCpp
                    code={`// always creates index with following property 
BTREE,
INMEM_PERSIST,
QUASI_LEXICOGRAPH,
SORT_ASCENDING, 
log = off
int addIndex_str(const char *idxName, int idx_size, bool allowDuplicates);`}
                  />
                  <p>
                    This is special helper function for index creation. When we
                    wish to add index for string type, then we use this method.
                    idx_size is size in byte for the index keys that should be
                    allowed. <code>allowDuplicates</code> sets if duplicate
                    values will be allowed or not. It returns -1 for error and 0
                    for success.
                  </p>

                  <HighlightedCpp
                    code={`int addIndex_num(const char *idxName, bool allowDuplicates);`}
                  />
                  <p>
                    This is special helper function for index creation. When we
                    wish to add index for number type, then we use this method.
                    Allowduplicates sets if duplicate values will be allowed or
                    not. It returns -1 for error and 0 for success.
                  </p>
                  <HighlightedCpp
                    code={"int dropIndex(const char *idxName);"}
                  />
                  <p>
                    This will drop the index and clear the related data from the
                    file system and database. It returns -1 for error and 0 for
                    success.
                  </p>
                  <HighlightedCpp
                    code={"bool hasIndex(const char *idxName);"}
                  />
                  <p>
                    This returns reference to the TableEnv for the index for the
                    given indexname. If you just need reference then set copy =
                    false, in this case never delete the returned reference. If
                    you wish copy then you must delete and clear the memory. For
                    error it returns NULL.
                  </p>
                  <HighlightedCpp code={"TableEnv *getTableEnv();"} />
                  <p>
                    This returns the copy of TableEnv reference for the table
                    and user must delete it after use. For error it returns
                    NULL.
                  </p>
                  <HighlightedCpp code={`int dumpData();`} />
                  <p>
                    This dumps the data for the table which forces all data for
                    the table to be written on the filesystem. It returns -1 for
                    error and 0 for success.
                  </p>
                  <HighlightedCpp code={`const char *getName();`} />
                  <p>
                    This returns name of the table, and user should delete it.
                    It returns NULL for error.
                  </p>
                  <HighlightedCpp code={"const char *getTableDir();"} />
                  <p>
                    This returns full table path on file system, else returns
                    NULL for error. User should delete this.
                  </p>
                  <HighlightedCpp code={"IndexType getIndexType();"} />
                  <p>
                    This returns index type for the table. Index type is for the
                    primary key for the database. Here are the options of the
                    index type.
                  </p>
                  <HighlightedCpp
                    code={`HASH, // Not Supported
EXTHASH, // Supported, for hash keys
BTREE, // Supported, for sorted order
HEAP, // Deprecated
INVALID_INDEX_TYPE, // Invalid type`}
                  />

                  <HighlightedCpp
                    code={`const char *getStats(bool verbose = true);`}
                  />
                  <p>
                    This will return json string for table stats. Verbose will
                    dictate the brevity of the response. For errors, it will
                    return NULL.
                  </p>
                  <HighlightedCpp
                    code={`// for files - supported only for LARGE_TABLE
long putFile(FDT *key, const char *file_path, InsertOptions iop);`}
                  />
                  <p>
                    This is only supported for Large Table type (see
                    BangDBTable_type). We can upload small or very large file
                    using this api. Key is typically file id (string only) and
                    file_path is the actual location of file on the server. As
                    of now it takes local file path, but in next version it may
                    take network or url as well. InsertOptions define how do we
                    wish to put the file or data and the options are:
                  </p>
                  <HighlightedCpp
                    code={`INSERT_UNIQUE, // if non-existing then insert else return
UPDATE_EXISTING, // if existing then update else return
INSERT_UPDATE, // insert if non-existing else update
DELETE_EXISTING, // delete if existing
UPDATE_EXISTING_INPLACE, // only for inplace update
INSERT_UPDATE_INPLACE, // only for inplace update`}
                  />
                  <p>
                    Last two options should be used with caution and we will
                    discuss more on this later. This returns 0 for success and
                    -1 for error.
                  </p>
                  <HighlightedCpp
                    code={`long getFile(FDT *key, const char *fname, const char *fpath);`}
                  />
                  <p>
                    This returns the reference to the DBParam supplied during
                    getInstance call. Please note it&apos;s reference therefore
                    it should never be deleted by the user. DB should only clean
                    it.
                  </p>

                  <p>
                    This is only supported for Large Table type (see
                    BangDBTable_type). We can get the file from the server
                    identified by the key and name the file as fname and store
                    in the fpath on local system. This returns 0 for success and
                    -1 for error.
                  </p>
                  <HighlightedCpp
                    code={`long putLargeData(FDT *key, FDT *val, InsertOptions iop);`}
                  />
                  <p>
                    This is only supported for Large Table type (see
                    BangDBTable_type). We can use this api to put large binary
                    data (not file) identified with key (string only). Iop
                    describes the insert options as explained above. It returns
                    0 for success and -1 for error.
                  </p>
                  <HighlightedCpp
                    code={`long getLargeData(FDT *key, char **buf, long *len);`}
                  />
                  <p>
                    This is only supported for Large Table type (see
                    BangDBTable_type). We can use this api to get large data
                    from the table identified with key. The data will be stored
                    in buf and length of the data in len variable. For success
                    it returns 0 else -1 for error.
                  </p>
                  <HighlightedCpp
                    code={`char *listLargeData_keys(char *skey = NULL, int list_size_mb = MAX_ResultSet_SIZE);`}
                  />
                  <p>
                    This returns list of large data keys. list_size_mb defines
                    if we need to restrict the list size, default is
                    MAX_ResultSet_SIZE. The return value is json string, and it
                    contains the last key which should be used for recursive
                    subsequent calls.
                  </p>
                  <HighlightedCpp code={`int countSliceLargeData(FDT *key);`} />
                  <p>
                    This is only supported for Large Table type (see
                    BangDBTable_type). BangDB stores large data in chunks or
                    slices and this api will help us count the slices for the
                    given data (file or binary data) identified by the key. It
                    returns num of slices for success else -1 for error.
                  </p>
                  <HighlightedCpp code={`long countLargeData();`} />
                  <p>
                    This is only supported for Large Table type (see
                    BangDBTable_type). It returns count of large data in the db,
                    else -1 for error.
                  </p>
                  <HighlightedCpp code={`int delLargeData(FDT *key);`} />
                  <p>
                    This is only supported for Large Table type (see
                    BangDBTable_type). It deletes the large data identified with
                    the key and returns 0 on success and -1 for error.
                  </p>
                  <HighlightedCpp
                    code={`// for opaque data
long put(FDT *key, FDT *val, InsertOptions flag = INSERT_UNIQUE, Transaction *txn = NULL);`}
                  />
                  <p>
                    This is used for Normal Table type (see BangDBTable_type).
                    It puts key and val in to the table. If this put operation
                    is within transaction boundary then pass the transaction
                    reference as well. It returns 0 for success and -1 for
                    error.
                  </p>
                  <HighlightedCpp
                    code={`long put(FDT *key, DATA_VAR *val, InsertOptions flag = INSERT_UNIQUE, Transaction *txn = NULL);`}
                  />
                  <p>
                    This is used for Normal Table type (see BangDBTable_type).
                    It puts key and val in to the table. If this put operation
                    is within transaction boundary then pass the transaction
                    reference as well. Here it&apos;s very similar to previous
                    put, except that it takes DATA_VAR for val, where user can
                    define few other things and also use pre allocated buffer
                    for val, useful when we want to avoid too many memory
                    creation and deletion on heap. It returns 0 for success and
                    -1 for error.
                  </p>
                  <HighlightedCpp
                    code={String.raw`ResultSet * scan(
  ResultSet * prev_rs,
  FDT * pk_skey, FDT * pk_ekey,
  scan_filter * sf = NULL,
  DATA_VAR * dv = NULL,
  Transaction * txn = NULL
);`}
                  />
                  <p>
                    This is used for Normal Table type (see BangDBTable_type).
                    This scans the data between sk and ek, the two primary keys.
                    Either or both of these primary keys could be NULL. The
                    scan_filter describes how to scan. Please note that the
                    prev_rs argument should be NULL for the first call and for
                    subsequent call it should be the rs returned on the previous
                    call. This to ensure that recursive scan works without any
                    issues.
                  </p>
                  <p>Here is the definition of scan_filter:</p>
                  <HighlightedCpp
                    code={String.raw`scan_operator skey_op; // default GTE
scan_operator ekey_op; // default LTE
scan_limit_by limitby; // default LIMIT_RESULT_SIZE
short only_key = 0; // if we wish to retrieve only key and no value
short reserved = 0; // see notes below;
int limit; // default 2MB (MAX_ResultSet_SIZE) for LIMIT_RESULT_SETSIZE
int skip_count; // this is set by the db during scan, don't touch
void *arg; // any extra arg, interpreted by the callee`}
                  />
                  <h3>Reserved</h3>
                  <p>Reserved has different meaning for different numbers.</p>
                  <ul>
                    <li>
                      <strong>0</strong> - default value, don&apos;t do anything
                      [ no interpretation ]
                    </li>
                    <li>
                      <strong>1 to 9</strong> - select the key for secidx for
                      this idx in the array [ in the order of defining the idx
                      ], note this value starts from 1, in code it should be
                      from 0 (i-1)
                    </li>
                    <li>
                      <strong>10</strong> - select first one only from sec idx [
                      among duplicates ] for EQ
                    </li>
                    <li>
                      <strong>11</strong> - select last one only from sec idx [
                      among duplicates ] for EQ
                    </li>
                    <li>
                      <strong>12</strong> - means interpret arg as secidx_pkinfo
                      object ptr
                    </li>
                    <li>
                      <strong>13</strong> - use linear scan and not through
                      secondary indexes
                    </li>
                    <li>
                      <strong>14</strong> - use partial as well, useful for
                      scan_text, rev idx scan, we would like to select partial
                      ones as well.
                    </li>
                  </ul>
                  <HighlightedCpp
                    code={`// for text data, supported for only WIDE_TABLE
// reverse indexes the data (str) 
// FDT *key, if null then timestamp 
long putText(const char *str, int len, FDT *k = NULL, InsertOptions flag = INSERT_UNIQUE);`}
                  />
                  <p>
                    This api is for wide table only. Tt&apos;s used to put text
                    which will be reversed indexed fully. User may provide some
                    key or else timestamp will be used. Supported for only{" "}
                    <code>WIDE_TABLE</code>. It returns 0 for success and -1 for
                    error.
                  </p>
                  <HighlightedCpp
                    code={`ResultSet *scanText(const char *wlist[], int nfilters, bool intersect = false);`}
                  />
                  <p>
                    This is to search using list of keys/ tokens/ words. Wlist
                    is a list of all tokens that would be used for searching,
                    nfilters tells the number of tokens in the list, and
                    intersect boolean tells if we need to search with OR(false)
                    or AND(true) condition. It returns ResultSet for success or
                    NULL for error.
                  </p>
                  <HighlightedCpp
                    code={`long putDoc(const char *doc, FDT *pk = NULL, const char *rev_idx_fields_json = NULL, InsertOptions flag = INSERT_UNIQUE);`}
                  />
                  <p>
                    This APIs for for wide table only, and to put json document
                    pointed by doc. Pk is primary key if any,{" "}
                    <code>rev_idx_fields</code> describes if there are set of
                    fields that should be reversed indexed.
                  </p>
                  <HighlightedCpp
                    code={`rev_idx_fields_json = {\"_rev_idx_all\":0, \"_rev_idx_key_list\":[\"name\", \"city\"]}`}
                  />
                  <p>
                    Secondary indexed are defined using <code>addindex</code>{" "}
                    API as described previously. <code>put_doc</code> updates
                    all indexes accordingly. If <code>pk</code> is NULL then
                    BangDB uses timestamp as key, if{" "}
                    <code>rev_idx_fields_json</code> is NULL then it
                    doesn&apos;t do reversed indexing and default InsertOptions
                    is <code>INSERT_UNIQUE</code>. Upon success, it returns 0
                    else -1.
                  </p>
                  <HighlightedCpp
                    code={`ResultSet * scanDoc(
    ResultSet * prev_rs, FDT * pk_skey = NULL,
    FDT * pk_ekey = NULL,
    const char * idx_filter_json = NULL,
    scan_filter * sf = NULL
);`}
                  />
                  <p>
                    This is used for wide table only. It&apos;s used for
                    scanning the db for query. Query could combine primary
                    index, secondary indexes and reversed indexes (through
                    idx_filter_json) idx_filter_json can be defined directly by
                    writing a json query or dataQuery type could be used to
                    create the query in simple manner. Here is how the query
                    looks like:
                  </p>
                  <HighlightedCpp
                    code={`"{\"query\":[{\"key\":\"city.name\",\"cmp_op\":4,\"val\":\"paris\"},
{\"joinop\":0},{\"match_words\":\"sachin, rahul\",\"joinop\":1,\"field\":\"name.first\"}]}"`}
                  />
                  <p>
                    The query is combining secondary index “city.name” and
                    reversed index “name.first”. Joinop = 0 means AND,
                    therefore, fetch all the documents where name of the city is
                    paris and first name contains sachin or rahul.
                  </p>
                  <p>Or</p>
                  <HighlightedCpp
                    code={`{\"query\":[{\"key\":\"name\",\"cmp_op\":4,\"val\":\"sachin\"},
{\"joinop\":0},{\"key\":\"age\",\"cmp_op\":0,\"val\":40}]}`}
                  />
                  <p>
                    Here the query is find all documents where name is “sachin”
                    and age is greater than 40. Both name and age are secondary
                    indexes. We don&apos;t use reversed index here. Further, we
                    can query for following:
                  </p>
                  <HighlightedCpp
                    code={`{\"query\":[{\"key\":\"price\",\"cmp_op\":3,\"val\":\"$quote\"}], \"qtype\":2}`}
                  />
                  <p>
                    Here query says find all documents where price is less than
                    quote in the same doc. etc. Please see the query section for
                    detail discussion on this. Upon success it returns ResultSet
                    else NULL for error.
                  </p>
                  <HighlightedCpp
                    code={`int get(FDT *key, FDT **val, Transaction *txn = NULL);`}
                  />
                  <p>
                    This could be used for any table except large table. Given a
                    key, it will return value in val attribute. This returns 0
                    for success and -1 for error.
                  </p>
                  <HighlightedCpp
                    code={`int get(FDT *key, DATA_VAR *val, Transaction *txn = NULL);`}
                  />
                  <p>
                    This could be used for any table except large table. Given a
                    key, it will return value in val attribute. Please note val
                    is <code>DATA_VAR</code> here, which can be used for
                    avoiding creation of too many object on heap and then
                    deletion. This returns 0 for success and -1 for error.
                  </p>
                  <HighlightedCpp
                    code={`long del(FDT *key, Transaction *txn = NULL);`}
                  />
                  <p>
                    This could be used for all table types. It deletes the data
                    defined by key. It returns 0 for success else -1 for error.
                  </p>
                  <HighlightedCpp
                    code={`long count(FDT *pk_skey, FDT *pk_ekey, const char *idx_filter_json = NULL, scan_filter *sf = NULL);`}
                  />
                  <p>
                    We can cound the number of documents, or rows using this
                    method with supplied query filter. This could also take
                    primary index, secondary indexes and reverse index all
                    together or as needed. It returns count if successful else
                    -1 for error.
                  </p>
                  <HighlightedCpp
                    code={`long expCount(FDT *skey, FDT *ekey);`}
                  />
                  <p>
                    This API returns expected count between two keys. Please
                    note this is not the exact count but a rough measurement. If
                    there are large number of keys in the table and we wish to
                    know rough estimate of count, then this function can be very
                    efficient and fast with very less overhead. Returns count if
                    successful else -1 for error.
                  </p>
                  <HighlightedCpp code={`long count();`} />
                  <p>
                    This convenient function or special api for previous count()
                    api where it counts all the documents or rows in the table.
                    It works for normal and wide table.
                  </p>
                  <HighlightedCpp code={`void printStats();`} />
                  <p>This API prints stats of the table</p>
                  <HighlightedCpp code={`void setAutoCommit(bool flag);`} />
                  <p>
                    This is used if we wish to enable auto commit for single
                    operation.
                  </p>
                  <HighlightedCpp code={`bool isSameAs(BangDBTable *tbl);`} />
                  <p>
                    Returns true if this table is same as the given table, else
                    returns false.
                  </p>
                  <HighlightedCpp code={`BangDBTable_type getTableType();`} />
                </div>
                <div
                  style={{
                    display: tab === 2 ? "block" : "none",
                  }}
                >
                  <p>Following is the API details:</p>
                  <HighlightedJava
                    code={
                      "public int closeTable(CloseType closeType, boolean force)"
                    }
                  />
                  <p>
                    This closes the table and return 0 for success and -1 for
                    error. <code>bangdb_closeType</code> is as defined above.
                    Table maintains open reference count, hence it will not
                    close if there are open references to the table. When open
                    reference is 0 then it will close. However, if we wish to
                    override this behaviour then we must pass force_close =
                    true.
                  </p>
                  <HighlightedJava
                    code={"public int addIndex(String idxName, TableEnv tenv)"}
                  />
                  <p>
                    This is the generic API for adding index for a table. The
                    TableEnv describes the index type etc. It returns 0 for
                    success and -1 for error.
                  </p>
                  <HighlightedJava
                    code={
                      "public int addIndex_str(String idxName, int idx_size, boolean allowDuplicates)"
                    }
                  />
                  <p>
                    This is special helper function for index creation. When we
                    wish to add index for string type, then we use this method.{" "}
                    <code>idx_size</code> is size in byte for the index keys
                    that should be allowed. allowDuplicates sets if duplicate
                    values will be allowed or not. It returns -1 for error and 0
                    for success.
                  </p>
                  <HighlightedJava
                    code={
                      "public int addIndex_num(String idxName, boolean allowDuplicates)"
                    }
                  />
                  <p>
                    This is special helper function for index creation. When we
                    wish to add index for number type, then we use this method.
                    Allowduplicates sets if duplicate values will be allowed or
                    not. It returns -1 for error and 0 for success.
                  </p>
                  <HighlightedJava
                    code={`public int dropIndex(String idxName)`}
                  />
                  <p>
                    This will drop the index and clear the related data from the
                    file system and database. It returns -1 for error and 0 for
                    success.
                  </p>
                  <HighlightedJava
                    code={`public boolean hasIndex(String idxName)`}
                  />
                  <p>
                    This returns boolean if the given index is defined for the
                    table or not.
                  </p>
                  <HighlightedJava code={`public int dumpData()`} />
                  <p>
                    This dumps the data for the table which forces all data for
                    the table to be written on the filesystem. It returns -1 for
                    error and 0 for success.
                  </p>
                  <HighlightedJava code={`public String getName()`} />
                  <p>
                    This returns name of the table, It returns null for error.
                  </p>
                  <HighlightedJava code={`public String getTableDir()`} />
                  <p>
                    This returns full table path on file system, else returns
                    null for error.
                  </p>
                  <HighlightedJava code={`public IndexType getIndexType()`} />
                  <p>
                    This returns index type for the table. Index type is for the
                    primary key for the database.
                  </p>
                  <p>Here are the options of the index type:</p>
                  <HighlightedJava
                    code={`HASH, //Not Supported
EXTHASH, //Supported, for hash keys
BTREE, //Supported, for sorted order
HEAP, //Deprecated
INVALID_INDEX_TYPE, //Invalid type`}
                  />
                  <HighlightedJava
                    code={`public String getStats(boolean verbose)`}
                  />
                  <p>
                    This will return json string for table stats. Verbose will
                    dictate the brevity of the response. For errors, it will
                    return null.
                  </p>
                  <HighlightedJava
                    code={`public long putFile(String key, String file_path, InsertOptions iop)`}
                  />
                  <p>
                    This is only supported for Large Table type (see
                    BangDBTableType). We can upload small or very large file
                    using this API. Key is typically file id (string only) and
                    file_path is the actual location of file on the server. As
                    of now it takes local file path, but in next version it may
                    take network or url as well. <code>insert_options</code>{" "}
                    define how do we wish to put the file or data and the
                    options are:
                  </p>
                  <HighlightedJava code={"public DBParam getParam()"} />
                  <p>This returns dbParam used to create the DB object.</p>
                  <HighlightedJava code={"public String getName()"} />
                  <p>This returns name of the database or null for error.</p>
                  <HighlightedJava
                    code={
                      "public long getFile(String key, String fname, String fpath)"
                    }
                  />
                  <p>
                    This is only supported for Large Table type (see
                    BangDBTableType). We can get the file from the server
                    identified by the key and name the file as fname and store
                    in the fpath on local system. This returns 0 for success and
                    -1 for error.
                  </p>
                  <HighlightedJava
                    code={
                      "public long putLargeData(String key, byte[] val, InsertOptions iop)"
                    }
                  />
                  <p>
                    This is only supported for Large Table type (see
                    BangDBTableType). We can use this API to put large binary
                    data (not file) identified with key (string only). Iop
                    describes the insert options as explained above. It returns
                    0 for success and -1 for error.
                  </p>
                  <HighlightedJava
                    code={"public byte[] getLargeData(String key)"}
                  />
                  <p>
                    This is only supported for Large Table type (see
                    BangDBTableType). We can use this API to get large data from
                    the table identified with key. The data will be stored in
                    buf and length of the data in len variable. For success it
                    returns 0 else -1 for error.
                  </p>
                  <HighlightedJava
                    code={`public String listLargeDataKeys(String skey, int list_size_mb)`}
                  />
                  <p>
                    This returns list of large data keys.{" "}
                    <code>list_size_mb</code> defines if we need to restrict the
                    list size, default is <code>MAX_RESULTSET_SIZE</code>. The
                    return value is json string, and it contains the last key
                    which should be used for recursive subsequent calls.
                  </p>
                  <HighlightedCpp
                    code={`public int countSliceLargeData(String key)`}
                  />
                  <p>
                    This is only supported for Large Table type (see
                    BangDBTableType). BangDB stores large data in chunks or
                    slices and this api will help us count the slices for the
                    given data (file or binary data) identified by the key. It
                    returns num of slices for success else -1 for error.
                  </p>
                  <HighlightedJava code={`public long countLargeData()`} />
                  <p>
                    This is only supported for Large Table type (see
                    BangDBTableType). It returns count of large data in the db,
                    else -1 for error.
                  </p>
                  <HighlightedJava
                    code={`public int delLargeData(String key)`}
                  />
                  <p>
                    This is only supported for Large Table type (see
                    BangDBTableType). It deletes the large data identified with
                    the key and returns 0 on success and -1 for error.
                  </p>
                  <HighlightedJava
                    code={`// for opaque data
public long put(String key, byte[] val, InsertOptions flag, Transaction txn)`}
                  />
                  <p>
                    This is used for Normal Table type (see BangDBTableType). It
                    puts key and val in to the table. If this put operation is
                    within transaction boundary then pass the transaction
                    reference as well. It returns 0 for success and -1 for
                    error.
                  </p>
                  <HighlightedJava
                    code={`public long put(long key, byte[] val, InsertOptions flag, Transaction txn)`}
                  />
                  <p>Same as above except the key is long type here.</p>
                  <HighlightedJava
                    code={`public ResultSet scan(ResultSet prev_rs, String pk_skey, String pk_ekey, ScanFilter sf, Transaction txn)`}
                  />
                  <p>
                    This is used for Normal Table type (see BangDBTableType).
                    This scans the data between sk and ek, the two primary keys.
                    Either or both of these primary keys could be null. The
                    scan_filter describes how to scan.
                  </p>
                  <p>
                    Here is the definition of <code>scan_filter</code>:
                  </p>
                  <HighlightedJava
                    code={`scan_operator skey_op; // default GTE
scan_operator ekey_op; // default LTE
scan_limit_by limitby; // default LIMIT_RESULT_SIZE
short only_key = 0; // if we wish to retrieve only key and no value
short reserved = 0; // see notes below;
int limit; // default 2MB (MAX_RESULTSET_SIZE) for LIMIT_RESULT_SETSIZE
int skip_count; // this is set by the db during scan, don't touch
void *arg; // any extra arg, interpreted by the callee reserved`}
                  />
                  <h3>Reserved</h3>
                  <p>Reserved has different meaning for different numbers.</p>
                  <ul>
                    <li>
                      <strong>0</strong> - default value, don&apos;t do anything
                      [ no interpretation ]
                    </li>
                    <li>
                      <strong>1 to 9</strong> - select the key for secidx for
                      this idx in the array [ in the order of defining the idx
                      ], note this value starts from 1, in code it should be
                      from 0 (i-1)
                    </li>
                    <li>
                      <strong>10</strong> - select first one only from sec idx [
                      among duplicates ] for EQ
                    </li>
                    <li>
                      <strong>11</strong> - select last one only from sec idx [
                      among duplicates ] for EQ
                    </li>
                    <li>
                      <strong>12</strong> - means interpret arg as secidx_pkinfo
                      object ptr
                    </li>
                    <li>
                      <strong>13</strong> - use linear scan and not through
                      secondary indexes
                    </li>
                    <li>
                      <strong>14</strong> - use partial as well, useful for
                      scan_text, rev idx scan, we would like to select partial
                      ones as well.
                    </li>
                  </ul>
                  <HighlightedJava
                    code={`public ResultSet scan(ResultSet prev_rs, long pk_skey, long pk_ekey, ScanFilter sf, Transaction txn)`}
                  />
                  <p>
                    Same as above except <code>pk_skey</code> and{" "}
                    <code>pk_ekey</code> are of long type.
                  </p>
                  <HighlightedJava
                    code={`public ResultSet scan(ResultSet prev_rs, byte[] pk_skey, byte[] pk_ekey, ScanFilter sf, Transaction txn)`}
                  />
                  <p>
                    Same as above except <code>pk_skey</code> and{" "}
                    <code>pk_ekey</code> are of byte array type.
                  </p>
                  <HighlightedJava
                    code={`// for text data 
// reverse indexes the data (str) 
// FDT key, if null then timestamp 
public long putText(String str, String k, InsertOptions flag)`}
                  />
                  <p>
                    This API is for wide table only. it&apos;s used to put text
                    which will be reversed indexed fully. User may provide some
                    key or else timestamp will be used. It returns 0 for success
                    and -1 for error.
                  </p>
                  <HighlightedJava
                    code={`public long putText(String str, long k, InsertOptions flag)`}
                  />
                  <p>Same as above except the key is long type.</p>
                  <HighlightedJava
                    code={`public ResultSet scanText(String[] wlist, boolean intersect)`}
                  />
                  <p>
                    This is to search using list of keys / tokens / words. Wlist
                    is a list of all tokens that would be used for searching,
                    nfilters tells the number of tokens in the list, and
                    intersect boolean tells if we need to search with OR(false)
                    or AND(true) condition. It returns resultset for success or
                    NULL for error.
                  </p>
                  <HighlightedJava
                    code={`public long putDoc(String doc, String pk, String rev_idx_fields_json, InsertOptions flag)`}
                  />
                  <p>
                    This APIs for for wide table only, and to put json document
                    pointed by doc. Pk is primary key if any, rev_idx_fields
                    describes if there are set of fields that should be reverse
                    indexed.
                  </p>
                  <HighlightedJava
                    code={`rev_idx_fields_json = {\"_rev_idx_all\":0, \"_rev_idx_key_list\":[\"name\", \"city\"]}`}
                  />
                  <HighlightedJava
                    code={`public long putDoc(String doc, byte[] pk, String rev_idx_fields_json, InsertOptions flag)`}
                  />
                  <p>
                    Same as above except <code>pk</code> is byte array type
                  </p>
                  <HighlightedJava
                    code={`public long putDoc(String doc, long pk, String rev_idx_fields_json, InsertOptions flag)`}
                  />
                  <p>Same as above except pk is long type</p>
                  <HighlightedJava
                    code={`public ResultSet scanDoc(ResultSet prev_rs, String pk_skey, String pk_ekey, String idx_filter_json, ScanFilter sf)`}
                  />
                  <p>
                    This is used for wide table only. It&apos;s used for
                    scanning the db for query. Query could combine primary
                    index, secondary indexes and reversed indexes (through
                    idx_filter_json) <code>idx_filter_json</code> can be defined
                    directly by writing a json query or dataQuery type could be
                    used to create the query in simple manner. Here is how the
                    query looks like:
                  </p>
                  <HighlightedJava
                    code={`"{\"query\":[{\"key\":\"city.name\",\"cmp_op\":4,\"val\":\"paris\"},
{\"joinop\":0},{\"match_words\":\"sachin, rahul\",\"joinop\":1,\"field\":\"name.first\"}]}"`}
                  />
                  <p>
                    The query is combining secondary index “city.name” and
                    reversed index “name.first”. Joinop = 0 means AND,
                    therefore, fetch all the documents where name of the city is
                    paris and first name contains sachin or rahul.
                  </p>
                  <p>Or</p>
                  <HighlightedJava
                    code={`{\"query\":[{\"key\":\"name\",\"cmp_op\":4,\"val\":\"sachin\"},
{\"joinop\":0},{\"key\":\"age\",\"cmp_op\":0,\"val\":40}]}`}
                  />
                  <p>
                    Here the query is find all documents where name is “sachin”
                    and age is greater than 40. Both name and age are secondary
                    indexes. We don&apos;t use reversed index here. Further, we
                    can query for following:
                  </p>
                  <HighlightedJava
                    code={`{\"query\":[{\"key\":\"price\",\"cmp_op\":3,\"val\":\"$quote\"}], \"qtype\":2}`}
                  />
                  <p>
                    Here query says find all documents where price is less than
                    quote in the same doc. etc. Please see the query section for
                    detail discussion on this. Upon success it returns resultset
                    else null for error.
                  </p>
                  <HighlightedJava
                    code={`public ResultSet scanDoc(ResultSet prev_rs, long pk_skey, long pk_ekey, String idx_filter_json, ScanFilter sf)`}
                  />
                  <p>
                    Same as above except <code>pk_skey</code> and{" "}
                    <code>pk_ekey</code> are of long type
                  </p>
                  <HighlightedJava
                    code={`public ResultSet scanDoc(ResultSet prev_rs, byte[] pk_skey, byte[] pk_ekey, String idx_filter_json, ScanFilter sf)`}
                  />
                  <p>
                    Same as above except <code>pk_skey</code> and{" "}
                    <code>pk_ekey</code> are of byte array type
                  </p>
                  <HighlightedJava
                    code={`public byte[] get(String key, Transaction txn)`}
                  />
                  <p>
                    This could be used for any table except large table. Given a
                    key, it will return value in val attribute. This returns 0
                    for success and -1 for error.
                  </p>
                  <HighlightedJava
                    code={`public byte[] get(long key, Transaction txn)`}
                  />
                  <p>Same as above except key is of long type</p>
                  <HighlightedJava
                    code={`public long del(String key, Transaction txn)`}
                  />
                  <p>
                    This could be used for all table types. It deletes the data
                    defined by key. It returns 0 for success else -1 for error.
                  </p>
                  <HighlightedJava
                    code={`public long del(long key, Transaction txn)`}
                  />
                  <p>Same as above except key is of long type</p>
                  <HighlightedJava
                    code={`public long count(String pk_skey, String pk_ekey, String idx_filter_json, ScanFilter sf)`}
                  />
                  <p>
                    We can cound the number of documents, or rows using this
                    method with supplied query filter. This could also take
                    primary index, secondary indexes and reverse index all
                    together or as needed. It returns count if successful else
                    -1 for error.
                  </p>
                  <HighlightedJava
                    code={`public long count(long pk_skey, long pk_ekey, String idx_filter_json, ScanFilter sf)`}
                  />
                  <p>
                    Same as above except <code>pk_skey</code> and{" "}
                    <code>pk_ekey</code> are of long type
                  </p>
                  <HighlightedJava
                    code={`public long expCount(String skey, String ekey)`}
                  />
                  <p>
                    This API returns expected count between two keys. Please
                    note this is not the exact count but a rough measurement. If
                    there are large number of keys in the table and we wish to
                    know rough estimate of count, then this function can be very
                    efficient and fast with very less overhead. Returns count if
                    successful else -1 for error.
                  </p>
                  <HighlightedJava
                    code={`public long expCount(long skey, long ekey)`}
                  />
                  <p>Same as above except skey and ekey are of long type</p>
                  <HighlightedJava code={`public long count()`} />
                  <p>
                    This convenient function or special api for previous count()
                    api where it counts all the documents or rows in the table.
                    It works for normal and wide table.
                  </p>
                  <HighlightedJava
                    code={`public void setAutoCommit(boolean flag)`}
                  />
                  <p>
                    This is used if we wish to enable auto commit for single
                    operation.
                  </p>
                  <HighlightedJava
                    code={`public boolean isSameAs(BangDBTable tbl)`}
                  />
                  <p>
                    Returns true if this table is same as the given table, else
                    returns false.
                  </p>
                  <HighlightedJava code={`public TableType getTableType()`} />
                  <p>
                    This returns table type, more covered in BangDBTableType
                    subsequently.
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
