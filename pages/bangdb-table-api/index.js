import React, { useState } from "react";
import Head from "next/head";
import Breadcrumb from "../../components/Breadcrumb";
import HighlightedCpp from "../../components/HighlightedCpp";
import HighlightedJava from "../../components/HighlightedJava";
import Link from "next/link";

export default function BangdbTableApi() {
  const [tab, setTab] = useState(1);

  return (
    <React.Fragment>
      <Head>
        <title>Table - BangDB</title>
        <meta
          name="description"
          content="Learn about BangDB Table & server APIs. Read the documentation to know more about BangDB Server APIs."
        ></meta>
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Table - BangDB" />
        <meta
          property="og:description"
          content="Learn about BangDB Table & server APIs. Read the documentation to know more about BangDB Server APIs."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="Table - BangDB" />
        <meta
          name="twitter:description"
          content="Learn about BangDB Table & server APIs. Read the documentation to know more about BangDB Server APIs."
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
              <h1 className="article-title">Table</h1>
              <div className="article-body">
                <p>
                  BangDB Database represents the database within BangDB. The
                  database contains rest of the entities within BangDB, for
                  example: table, stream, ML etc. We need to create the database
                  object to be able to do anything within the db.
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
                  <p>
                    To create a table, we use BangDBDatabase and call{" "}
                    <code>getTable()</code> API for the same.
                  </p>
                  <p>To close a table</p>
                  <HighlightedCpp
                    code={`int closeTable(ClosedType tblCloseType = DEFAULT_AT_CLIENT);`}
                  />
                  <aside className="doc-api-code">
                    <p>ClosedType is enum with following values:</p>
                    <p>
                      DEFAULT_AT_CLIENT
                      <br />
                      CONSERVATIVE_AT_SERVER
                      <br />
                      OPTIMISTIC_AT_SERVER,
                      <br />
                      CLEANCLOSE_AT_SERVER,
                      <br />
                      SIMPLECLOSE_AT_SERVER,
                      <br />
                      DEFAULT_AT_SERVER
                    </p>
                    <p>
                      Please see more on this at{" "}
                      <Link href={"/bangdb-client-common"}>bangdb common</Link>
                    </p>
                  </aside>
                  <p>It return negative value for error, usually -1.</p>
                  <p>To add index for a table</p>
                  <HighlightedCpp
                    code={`int addIndex(const char *idxName, TableEnv *tenv);`}
                  />
                  <p>
                    TableEnv is a type using which the user can describe the
                    various details for the index that should be created. For
                    more information please see TableEnv type. There are
                    however, two helper APIs provided for simplicity, in a few
                    cases we could simply use this.
                  </p>
                  <p>
                    For advanced setting, we should use the{" "}
                    <code>addIndex()</code> API
                  </p>
                  <HighlightedCpp
                    code={`int addIndex_str(const char *idxName, int idx_size, bool allowDuplicates);
int addIndex_num(const char *idxName, bool allowDuplicates);`}
                  />
                  <p>
                    The first one ( <code>addIndex_str()</code> ) creates index
                    for a string / text column/field. The <code>idx_size</code>{" "}
                    describes the max size if the index key. To create index for
                    num or fixed size datatype, we can use{" "}
                    <code>addIndex_num()</code> API. It return negative value
                    for error, usually -1.
                  </p>
                  <p>To Drop index we can simply call</p>
                  <HighlightedCpp
                    code={`int dropIndex(const char *idxName);`}
                  />
                  <p>
                    It return negative value for error, usually -1. To check if
                    an index is present
                  </p>
                  <HighlightedCpp
                    code={`bool hasIndex(const char *idxName);`}
                  />
                  <p>
                    To get table reference ( for already created or opened
                    table)
                  </p>
                  <HighlightedCpp code={`TableEnv *getTableEnv();`} />
                  <p>
                    User should delete the memory of returned table env by
                    calling delete. It returns NULL for error.
                  </p>
                  <p>To dump data on the disk</p>
                  <HighlightedCpp code={`int dumpData();`} />
                  <p>
                    It return negative value for error, usually -1. To get the
                    name of the table
                  </p>
                  <HighlightedCpp code={`const char *getName();`} />
                  <p>
                    User should delete the memory of returned data by calling{" "}
                    <code>delete[]</code>. It returns NULL for error.
                  </p>
                  <p>This returns the full table path on the file system.</p>
                  <HighlightedCpp code={`const char *getTableDir();`} />
                  <p>
                    User should delete the memory of returned data by calling{" "}
                    <code>delete[]</code>. It returns NULL for error.
                  </p>
                  <p>To get the index type of the table</p>
                  <HighlightedCpp code={`IndexType getIndexType();`} />
                  <aside className="doc-api-code">
                    <p>IndexType is an enum with following values:</p>
                    <p>
                      HASH, // Not supported
                      <br />
                      EXTHASH
                      <br />
                      BTREE,
                      <br />
                      HEAP, // Not supported
                    </p>
                    <p>
                      Please see more on this at{" "}
                      <Link href={"/bangdb-client-common"}>bangdb common</Link>
                    </p>
                  </aside>
                  <p>To get the table stats, the details of the table</p>
                  <HighlightedCpp
                    code={`const char *getStats(bool verbose = true);`}
                  />
                  <p>
                    User should delete the memory of returned data by calling{" "}
                    <code>delete[]</code>. To upload files in the table (for
                    files - supported only for TableType = LARGE_TABLE).
                  </p>
                  <HighlightedCpp
                    code={`long putFile(const char *key, const char *file_path, InsertOptions iop);
long putLargeData(const char *key, void *val, long vallen, InsertOptions iop);`}
                  />
                  <aside className="doc-api-code">
                    <p>InsertOptions is an enum with following values:</p>
                    <p>
                      INSERT_UNIQUE, //if non-existing then insert else return
                      <br />
                      UPDATE_EXISTING, //if existing then update else return
                      <br />
                      INSERT_UPDATE, //insert if non-existing else update
                      <br />
                      DELETE_EXISTING, //delete if existing
                      <br />
                      UPDATE_EXISTING_INPLACE, //only for inplace update
                      <br />
                      INSERT_UPDATE_INPLACE; //only for inplace update
                    </p>
                    <p>
                      Please see more on this at{" "}
                      <Link href={"/bangdb-client-common"}>bangdb common</Link>
                    </p>
                  </aside>
                  <p>
                    Key is typically file id (string only) and{" "}
                    <code>file_path</code> is the actual location of the file on
                    the server. These return negative value for error.
                  </p>
                  <p>To download file from table to local system</p>
                  <HighlightedCpp
                    code={`long getFile(const char *key, const char *fname, const char *fpath);
long getLargeData(const char *key, void **buf, long *vallen);`}
                  />
                  <p>
                    It uses key to retrieve the file and stores the file with
                    name fname in location fpath on the local system. These
                    return negative value (like -1) for error.
                  </p>
                  <p>
                    To get list of all large data keys (todo: make it recursive,
                    should have flag set in the json itself).
                  </p>
                  <HighlightedCpp
                    code={`char *listLargeDataKeys(const char *key, int list_size_mb = 0);`}
                  />
                  <p>
                    User should delete the memory of returned data by calling{" "}
                    <code>delete[]</code>. It returns NULL for error.
                  </p>
                  <p>To get the number of slices for a particular file.</p>
                  <HighlightedCpp
                    code={`int countSliceLargeData(const char *key);`}
                  />
                  <p>
                    Large files or large objects are kept in BangDB in slices.
                    These slices are combined to return the data/file/object.
                    This API returns the number of slices for any given
                    file/object. It return negative value for error, usually -1.
                  </p>
                  <p>To get count of files or large objects</p>
                  <HighlightedCpp code={`long countLargeData();`} />
                  <p>
                    It return negative value for error, usually -1. To delete
                    file/object from a Large table
                  </p>
                  <HighlightedCpp code={`int delLargeData(const char *key);`} />
                  <p>
                    It return negative value for error, usually -1. To put the
                    key and val for a normal table.
                  </p>
                  <HighlightedCpp
                    code={`long put(FDT *key, FDT *val, InsertOptions flag = INSERT_UNIQUE, Transaction *txn = NULL);`}
                  />
                  <p>
                    FDT is a helper type which allows us to deal with different
                    data using the same interface. It mainly has two important
                    parts. One is data (void*) and the other is length (length
                    of the data). Users should use the constructor provided by
                    the FDT to set data, else should ensure setting{" "}
                    <code>_fixed_sz_data</code> properly. If the data is of
                    fixed size then set it to 1 else 0. When we set data using a
                    constructor then FDT does this automatically. See{" "}
                    <Link href={"/bangdb-client-common"}>FDT</Link> for more
                    info.
                  </p>
                  <p>
                    It return negative value for error, usually -1. To scan data
                    between sk and ek, the two primary keys. This is for range
                    scan using primary key. Note that this API should be used
                    for NORMAL_TABLE. Since NORMAL_TABLE can&apos;t have indexes
                    hence we can scan using the primary keys only.
                  </p>
                  <HighlightedCpp
                    code={`ResultSet * scan(
   ResultSet * prev_rs,
   FDT * pk_skey = NULL, FDT * pk_ekey = NULL,
   ScanFilter * sf = NULL, Transaction * txn = NULL
);`}
                  />
                  <p>
                    It returns ResultSet, which allows the user to iterate
                    through the returned key and values. See ResultSet type for
                    more information. ScanFilter sets some of the elements for
                    scanning, see ScanFilter for more information. It returns
                    NULL for error.
                  </p>
                  <p>To get data for any table except a large table</p>
                  <HighlightedCpp
                    code={`int get(FDT *key, FDT **val, Transaction *txn = NULL);`}
                  />
                  <p>
                    If a transaction is enabled and wishes to put the operation
                    within it then we should pass the transaction object
                    reference, else it should be NULL. See Transaction for more
                    details. This API returns -1 for error.
                  </p>
                  <p>To delete data defined by key</p>
                  <HighlightedCpp
                    code={`long del(FDT *key, Transaction *txn = NULL);`}
                  />
                  <p>It returns -1 for error. To insert text data</p>
                  <HighlightedCpp
                    code={`long putText(const char *text, int textlen, FDT *k = NULL, InsertOptions flag = INSERT_UNIQUE);`}
                  />
                  <p>
                    It return negative value for error, usually -1. To scan text
                    data
                  </p>
                  <HighlightedCpp
                    code={`ResultSet *scanText(const char *wlist[], int nfilters, bool intersect = false);`}
                  />
                  <p>
                    This is for solely reverse indexing based scan. The wlist is
                    array of all the tokens to search for and intersect is true
                    then it works as AND else OR. It returns ResultSet for
                    success or NULL for error.
                  </p>
                  <p>To upload a document</p>
                  <HighlightedCpp
                    code={`long putDoc(const char *doc, FDT *pk = NULL, const char *rev_idx_fields_json = NULL, InsertOptions flag = INSERT_UNIQUE);`}
                  />
                  <aside className="doc-api-code">
                    <p>InsertOptions is an enum with following values:</p>
                    <p>
                      INSERT_UNIQUE, // if non-existing then insert else return
                      <br />
                      UPDATE_EXISTING, //i f existing then update else return
                      <br />
                      INSERT_UPDATE, // insert if non-existing else update
                      <br />
                      DELETE_EXISTING, // delete if existing
                      <br />
                      UPDATE_EXISTING_INPLACE, // only for inplace update
                      <br />
                      INSERT_UPDATE_INPLACE // only for inplace update
                    </p>
                    <p>
                      Please see more on this at{" "}
                      <Link href={"/bangdb-client-common"}>bangdb common</Link>.
                    </p>
                  </aside>
                  <p>It return negative value for error, usually -1.</p>
                  <p>
                    To scan for a document for given primary keys coupled with
                    filter query. This is a powerful API which allows users to
                    define the query and scan the table. The query could be
                    absent, or simple or complex in nature.
                  </p>
                  <p>
                    This query is a json doc and can be simply written or for
                    simplicity users may leverage DataQuery type to build the
                    query. For more detail, it is highly recommended to go
                    through the the DataQuery and also through the recommended
                    way to call and use scan.
                  </p>
                  <aside className="doc-note">
                    <strong>Note: </strong>This is a recursive scan function,
                    which means if there are lots of data to be returned then
                    multiple db calls would be required. However, users will not
                    have to set/reset the keys or queries instead keep calling
                    the same function until it exhausts.
                  </aside>
                  <HighlightedCpp
                    code={`ResultSet * scanDoc(
   ResultSet * prev_rs,
   FDT * pk_skey = NULL,
   FDT * pk_ekey = NULL,
   const char * idx_filter_json = NULL,
   ScanFilter * sf = NULL
);`}
                  />
                  <p>
                    It returns Resultset for success or NULL for error To count
                    number of keys for given query (idx_filter_json)
                  </p>
                  <HighlightedCpp
                    code={`long count(FDT *pk_skey, FDT *pk_ekey, const char *idx_filter_json = NULL, ScanFilter *sf = NULL);`}
                  />
                  <p>
                    It returns negative value or -1 for error. To get expected
                    count between two keys. Note this is just indicative and
                    should not be taken as an exact count.
                  </p>
                  <HighlightedCpp
                    code={`long expCount(FDT *skey, FDT *ekey);`}
                  />
                  <p>
                    It returns negative value or -1 for error. To get count for
                    number of keys in the table
                  </p>
                  <HighlightedCpp code={`long count();`} />
                  <p>
                    It returns negative value or -1 for error. To enable auto
                    commit for single operations. Usually it&apos;s always ON
                    and if WAL is selected (which is default) then it is ON
                    always.
                  </p>
                  <HighlightedCpp code={`void setAutoCommit(bool flag);`} />
                  <p>To get the type of the table</p>
                  <HighlightedCpp code={`TableType getTableType();`} />
                  <p>Returns true if this table is same as the given table</p>
                  <HighlightedCpp code={`bool isSameAs(BangDBTable *tbl);`} />
                </div>
                <div
                  style={{
                    display: tab === 2 ? "block" : "none",
                  }}
                >
                  <p>To create BangDBTable object</p>
                  <HighlightedJava code={`public BangDBTable()`} />
                  <p>To close a table</p>
                  <HighlightedJava
                    code={`public int closeTable(CloseType closeType, boolean force)`}
                  />
                  <p>
                    This closes the table and returns 0 for success and -1 for
                    error.
                  </p>
                  <aside className="doc-api-code">
                    <p>ClosedType is enum with following values:</p>
                    <p>
                      DEFAULT_AT_CLIENT
                      <br />
                      CONSERVATIVE_AT_SERVER
                      <br />
                      OPTIMISTIC_AT_SERVER,
                      <br />
                      CLEANCLOSE_AT_SERVER,
                      <br />
                      SIMPLECLOSE_AT_SERVER,
                      <br />
                      DEFAULT_AT_SERVER;
                    </p>
                    <p>
                      Please see more on this at{" "}
                      <Link href={"/bangdb-client-common"}>bangdb common</Link>.
                    </p>
                  </aside>
                  <p>To add index for a table</p>
                  <HighlightedJava
                    code={`public int addIndex(String idxName, TableEnv tenv)`}
                  />
                  <p>
                    This is the generic API for adding index for a table. It
                    returns 0 for success and -1 for error. TableEnv is a type
                    using which the user can describe the various details for
                    the table that should be created. For more information
                    please see TableEnv type. There are however, two helper APIs
                    provided for simplicity, in a few cases we could simply use
                    this.
                  </p>
                  <p>
                    For advanced setting, we should use the{" "}
                    <code>addIndex()</code> API
                  </p>
                  <HighlightedJava
                    code={`public int addIndex_str(String idxName, int idx_size, boolean allowDuplicates)
public int addIndex_num(String idxName, boolean allowDuplicates)`}
                  />
                  <p>
                    The first one ( <code>addIndex_str()</code> ) creates index
                    for a string / text column/field. The <code>idx_size</code>{" "}
                    describes the max size if the index key. To create index for
                    num or fixed size datatype, we can use{" "}
                    <code>addIndex_num()</code> API.
                  </p>
                  <p>To drop index we can simply call</p>
                  <HighlightedJava
                    code={`public int dropIndex(String idxName)`}
                  />
                  <p>
                    This will drop the index and It returns -1 for error and 0
                    for success.
                  </p>
                  <p>To check if an index is present</p>
                  <HighlightedJava
                    code={`public boolean hasIndex(String idxName)`}
                  />
                  <p>
                    This returns boolean if the given index is defined for the
                    table or not.
                  </p>
                  <p>To dump data on the disk</p>
                  <HighlightedJava code={`public int dumpData()`} />
                  <p>
                    This dumps the data for the table which forces all data for
                    the table to be written on the filesystem. It returns -1 for
                    error and 0 for success.
                  </p>
                  <p>To get the name of the table</p>
                  <HighlightedJava code={`public String getName()`} />
                  <p>This returns the full table path on the file system.</p>
                  <HighlightedJava code={`public String getTableDir()`} />
                  <p>
                    This returns the full table path on the file system, else
                    returns null for error.
                  </p>
                  <p>
                    To get the index type of the table. Index type is an enum.
                  </p>
                  <HighlightedJava code={`public IndexType getIndexType()`} />
                  <aside className="doc-api-code">
                    <p>IndexType is an enum with following values:</p>
                    <p>
                      HASH // Not supported
                      <br />
                      EXTHASH
                      <br />
                      BTREE,
                      <br />
                      HEAP // Not supported
                    </p>
                    <p>
                      Please see more on this at{" "}
                      <Link href={"/bangdb-client-common"}>bangdb common</Link>.
                    </p>
                  </aside>
                  <p>To get the table stats, the details of the table</p>
                  <HighlightedJava
                    code={`public String getStats(boolean verbose)`}
                  />
                  <p>
                    This will return json string for table stats. Verbose will
                    dictate the brevity of the response. For errors, it will
                    return null.
                  </p>
                  <p>To upload files in the table</p>
                  <HighlightedJava
                    code={`public long putFile(String key, String file_path, InsertOptions iop)`}
                  />
                  <p>
                    key is typically file id (string only) and file_path is the
                    actual location of the file on the server. This will return
                    negative value for error.
                  </p>
                  <aside className="doc-api-code">
                    <p>InsertOptions is an enum with following values:</p>
                    <p>
                      INSERT_UNIQUE, // if non-existing then insert else return
                      <br />
                      UPDATE_EXISTING, //i f existing then update else return
                      <br />
                      INSERT_UPDATE, // insert if non-existing else update
                      <br />
                      DELETE_EXISTING, // delete if existing
                      <br />
                      UPDATE_EXISTING_INPLACE, // only for inplace update
                      <br />
                      INSERT_UPDATE_INPLACE // only for inplace update
                    </p>
                    <p>
                      Please see more on this at{" "}
                      <Link href={"/bangdb-client-common"}>bangdb common</Link>.
                    </p>
                  </aside>
                  <p>To download file from table to local system</p>
                  <HighlightedJava
                    code={`public long getFile(String key, String fname, String fpath)`}
                  />
                  <p>
                    It uses a key to retrieve the file and stores the file with
                    the name fname in the location fpath on the local system.
                    This return negative value ( like -1 ) for error.
                  </p>
                  <p>
                    To upload files in the table ( for files - supported only
                    for TableType = LARGE_TABLE)
                  </p>
                  <HighlightedJava
                    code={`public long putLargeData(String key, byte[] val, InsertOptions iop)`}
                  />
                  <p>
                    Key is typically file id (string only) and file_path is the
                    actual location of the file on the server. This will return
                    negative value for error.
                  </p>
                  <p>
                    To get all large data keys (todo: make it recursive, should
                    have flag set in the json itself)
                  </p>
                  <HighlightedJava
                    code={`public byte[] getLargeData(String key)`}
                  />
                  <p>
                    This is only supported for tables of Large Table type. We
                    can use this API to get large data from the table identified
                    with the key. The data will be stored in buf and length of
                    the data in len variable. For success it returns 0 else -1
                    for error.
                  </p>
                  <p>To get the list of large data keys</p>
                  <HighlightedJava
                    code={`public String listLargeDataKeys(String skey, int list_size_mb)`}
                  />
                  <p>It returns NULL for error.</p>
                  <p>To get the number of slices for a particular file</p>
                  <HighlightedJava
                    code={`public int countSliceLargeData(String key)`}
                  />
                  <p>
                    Large files or large objects are kept in BangDB in slices.
                    These slices are combined to return the data/file/object.
                    This api returns the number of slices for any given
                    file/object. it returns negative value for error usually -1.
                  </p>
                  <p>To get the count of large data in the db</p>
                  <HighlightedJava code={`public long countLargeData()`} />
                  <p>This returns negative value for error usually -1.</p>
                  <p>To delete file/object from a Large table</p>
                  <HighlightedJava
                    code={`public int delLargeData(Stringkey)`}
                  />
                  <p>This returns negative values for error usually -1.</p>
                  <p>To put key and values into the table</p>
                  <HighlightedJava
                    code={`public long put(String key, byte[] val, InsertOptions flag, Transaction txn) 
public long put(long key, byte[] val, InsertOptions flag, Transaction txn) 
public long put(String key, String val, InsertOptions flag, Transaction txn) 
public long put(long key, String val, InsertOptions flag, Transaction txn)`}
                  />
                  <p>
                    To Scan data based on the query and between skey and ekey,
                    the two primary keys.
                  </p>
                  <HighlightedJava
                    code={`public ResultSet scan(
   ResultSet prev_rs,
   String pk_skey,
   String pk_ekey,
   ScanFilter sf, 
   Transaction txn
)`}
                  />
                  <p>
                    This is used for Normal Table type. This scans the data
                    between sk and ek, the two primary keys. Either or both of
                    these primary keys could be null. It returns ResultSet,
                    which allows the user to iterate through the returned key
                    and values. See ResultSet type for more information.
                    ScanFilter sets some of the elements for scanning, see
                    ScanFilter for more information.
                  </p>
                  <p>
                    To scan for a document for given primary keys coupled with
                    filter query. This is a powerful API which allows users to
                    define the query and scan the table. The query could be
                    absent, or simple or complex in nature. This query is a json
                    doc and can be simply written or for simplicity users may
                    leverage DataQuery type to build the query. For more detail,
                    it is highly recommended to go through the DataQuery and
                    also through the recommended way to call and use scan.
                  </p>
                  <aside className="doc-note">
                    <strong>Note: </strong>This is a recursive scan function,
                    which means if there are lots of data to be returned then
                    multiple db calls would be required. However, users will not
                    have to set/reset the keys or queries instead keep calling
                    the same function until it exhausts.
                  </aside>
                  <HighlightedJava
                    code={`public ResultSet scanDoc(
   ResultSet prev_rs, 
   String pk_skey, 
   String pk_ekey, 
   String idx_filter_json, 
   ScanFilter sf
)`}
                  />
                  <p>
                    This is used for wide tables only. It returns ResultSet for
                    success or NULL for error.
                  </p>
                  <p>To get data for a particular key</p>
                  <HighlightedJava
                    code={`public byte[] get(String key, Transaction txn) 
public byte[] get(long key, Transaction txn)`}
                  />
                  <p>
                    This could be used for any table except for large tables.
                    Given a key, it will return value in val attribute. This
                    returns 0 for success and -1 for error. If a transaction is
                    enabled and wishes to put the operation within it then we
                    should pass the transaction object reference, else it should
                    be NULL. See Transaction for more details.
                  </p>
                  <p>To delete data for a particular key</p>
                  <HighlightedJava
                    code={`public long del(String key, Transaction txn)
public long del(long key, Transaction txn)`}
                  />
                  <p>
                    This could be used for all table types. It deletes the data
                    defined by key. It returns 0 for success else -1 for error.
                  </p>
                  <p>To get number of events with condition</p>
                  <HighlightedJava
                    code={`public long count(String pk_skey, String pk_ekey, String idx_filter_json, ScanFilter sf)
public long count(long pk_skey, long pk_ekey, String idx_filter_json, ScanFilter sf)`}
                  />
                  <p>
                    This API can count the number of documents, or rows with
                    supplied filter query. This could also take primary index,
                    secondary indexes and reversed index all together or as
                    needed. It returns count if successful else -1 for error.
                  </p>
                  <p>To get the count of documents or row</p>
                  <HighlightedJava
                    code={`public long expCount(String skey, String ekey)
public long expCount(long skey, long ekey)`}
                  />
                  <p>
                    This API returns the expected count between two keys. Please
                    note this is not the exact count but a rough measurement. If
                    there are a large number of keys in the table and we wish to
                    know a rough estimate of count, then this function can be
                    very efficient and fast with very little overhead. Returns
                    count if successful else -1 for error.
                  </p>
                  <p>To get number of row in a table</p>
                  <HighlightedJava code={`public long count()`} />
                  <p>It returns negative value for error usually -1.</p>
                  <p>
                    To enable auto commit for single operations. Usually
                    it&apos;s always ON and if WAL is selected (which is
                    default) then it is ON always.
                  </p>
                  <HighlightedJava
                    code={`public void setAutoCommit(boolean flag)`}
                  />
                  <p>Returns true if this table is same as the given table</p>
                  <HighlightedJava
                    code={`public boolean isSameAs(BangDBTable tbl)`}
                  />
                  <p>To get the table type</p>
                  <HighlightedJava code={`public TableType getTableType()`} />
                </div>
              </div>
            </article>
          </div>
        </main>
      </section>
    </React.Fragment>
  );
}
