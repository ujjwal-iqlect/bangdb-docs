import React, { useState } from "react";
import Head from "next/head";
import Breadcrumb from "../../components/Breadcrumb";
import HighlightedCpp from "../../components/HighlightedCpp";
import HighlightedJava from "../../components/HighlightedJava";

export default function BangDBDatabaseEmbedded() {
  const [tab, setTab] = useState(1);

  return (
    <React.Fragment>
      <Head>
        <title>Database Type (Embedded) - BangDB</title>
        <meta
          name="description"
          content="Learn more about BangDB Database Type (Embedded). Read the well-written document to learn to make embedded applications using BangDB."
        ></meta>
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Database Type (Embedded) - BangDB" />
        <meta
          property="og:description"
          content="Learn more about BangDB Database Type (Embedded). Read the well-written document to learn to make embedded applications using BangDB."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="Database Type (Embedded) - BangDB"
        />
        <meta
          name="twitter:description"
          content="Learn more about BangDB Database Type (Embedded). Read the well-written document to learn to make embedded applications using BangDB."
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
              <h1 className="article-title">Database Type (Embedded)</h1>
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
                    code={
                      "BangDBDatabase(const char *dbName, DBParam *dbParam = NULL);"
                    }
                  />
                  <p>
                    To get the instance of BangDBDatabase, user may call this.
                    Pls note, user will get same reference for a db if called
                    multiple times with the same dbName. DB does reference
                    counting hence user may call close() as many times of force
                    close as well. DBParam defines the db environment. However,
                    for embedded BangDB, only few parameters need to be set as
                    opposed to for server BangDB. Please see DBParam below for
                    more details.
                  </p>
                  <p>
                    If successful, this will return pointer to BangDBDatabase
                    else NULL. Calling <code>bangdb_print_last_error()</code>{" "}
                    may help see the actual reason for the failure, however
                    it&apos;s not guaranteed that error will be printed after
                    calling this method, for details, you should always see the
                    db activity log. Please read more db log here.
                  </p>
                  <HighlightedCpp
                    code={
                      "BangDBTable *getTable(const char *tblName, TableEnv *tblenv = NULL, OpenType openflag = OPENCREATE);"
                    }
                  />
                  <p>
                    To get a table (create or open), we may call this function.
                    TableEnv describes the details of table to be opened. When
                    passed NULL, db uses default TableEnv setting which is
                    explained in the TableEnv section below.
                  </p>
                  <p>
                    Openflag would tell whether to create or open a table.
                    Following are different values for the OpenType:
                  </p>
                  <HighlightedCpp
                    code={String.raw`enum OpenType { 
   OPENCREATE, //If existing then open else create 
   TRUNCOPEN, //If exiting then truncate data and open 
   JUSTOPEN, //If existing then open else fail
}`}
                  />
                  <p>
                    Open create is good most of the time if you wish to open if
                    existing and create if not.
                  </p>
                  <aside className="doc-warning">
                    <strong>Warning: </strong>Opening an existing table with
                    different TableEnv may result in error.
                  </aside>
                  <HighlightedCpp code={"int dropTable(BangDBTable **tbl);"} />
                  <p>
                    Drop table would permanently delete the table and all its
                    data. It returns -1 for error or 0 for success.
                  </p>
                  <HighlightedCpp code={"int dumpData();"} />
                  <p>
                    Dump data would force the db to sync data with the file
                    system It returns -1 for error or 0 for success.
                  </p>
                  <HighlightedCpp
                    code={"void closeDatabase(CloseType dbclose = DEFAULT);"}
                  />
                  <p>
                    This will close the database. The dbclose dictates how to
                    close the db. Values of CloseType are as follows:
                  </p>
                  <HighlightedCpp
                    code={String.raw`enum CloseType {
   DEFAULT, //Simple close the db with syncing all data subsequently 
   CONSERVATIVE, //It will force sync data first. This may take time to close OPTIMISTIC, Similar to default, but ensures faster close 
   CLEANCLOSE, //It will clean all the data, delete everything before close 
   SIMPLECLOSE, //It will not iterate over every element
}`}
                  />
                  <p>
                    To put operations within transaction boundary, use these
                    functons.
                  </p>
                  <HighlightedCpp
                    code={String.raw`void beginTransaction(Transaction *txn);
long commitTransaction(Transaction *txn);
void abortTransaction(Transaction *txn);`}
                  />
                  <p>
                    Begin transaction starts the transaction commit would allow
                    to commit every operations done after begin transaction and
                    abort will simply cancel everything done within the
                    transaction boundary. Commit transaction returns transaction
                    number for success else -1 for error
                  </p>
                  <HighlightedCpp
                    code={"long getTableId(const char *tblName);"}
                  />
                  <p>This will return table id for the given table name</p>
                  <HighlightedCpp
                    code={
                      "bool doesTableExist(const char *tblName, long tblId = 0);"
                    }
                  />
                  <p>
                    To check if table exists or not. If tableid is 0 then db
                    will use tableName else tableid. Returns true if existing
                    else false
                  </p>
                  <HighlightedCpp code={"long getNumTables(int flag = 1);"} />
                  <p>
                    To know how many tables are there in the database.
                    <br />
                    flag = 1 means, return count for open tables
                    <br />
                    flag = 2 means, return count for closed tables
                    <br />
                    flag = 3 means, return overall count
                    <br />
                    it returns -1 for error
                  </p>
                  <HighlightedCpp code={"const char *getTableList();"} />
                  <p>
                    This returns list of all tables as a json string or NULL for
                    error
                  </p>
                  <HighlightedCpp
                    code={"const char *getStats(bool verbose = true);"}
                  />
                  <p>
                    This returns json string for database stats. Verbose = true
                    will return lots of details and false will return less
                    information
                  </p>
                  <HighlightedCpp
                    code={
                      "const char *getTableStats(const char *tblName, bool verbose);"
                    }
                  />
                  <p>
                    This returns json string for stats for the given table name
                    or NULL for error. Verbose = true will return lots of
                    details and false will return less information
                  </p>
                  <HighlightedCpp code={"DBParam *getParamRef();"} />
                  <p>
                    This returns the reference to the DBParam supplied during
                    getInstance call. Please note it&apos;s reference therefore
                    it should never be deleted by the user. DB should only clean
                    it.
                  </p>
                  <HighlightedCpp code={"const char *getNameRef();"} />
                  <p>
                    This returns the reference to the name of the db supplied
                    during getInstance call. Please note it&apos;s reference
                    therefore it should never be deleted by the user. DB should
                    only clean it.
                  </p>
                  <HighlightedCpp code={"void *getDatabaseRef();"} />
                  <p>
                    This returns the reference to the db itself, internal data
                    structure, only useful in some advanced use cases. Please
                    note it&apos;s reference therefore it should never be
                    deleted by the user. DB should only clean it.
                  </p>
                  <HighlightedCpp
                    code={
                      "TableType getTableType(const char *tblName, long tblId = 0);"
                    }
                  />
                  <p>
                    This return the type of the table for the given table name.
                    TableType is defined below in the TableEnv type discussion.
                  </p>
                  <HighlightedCpp
                    code={
                      "TableEnv *getTableEnv(const char *tblName, long tblId = 0);"
                    }
                  />
                  <p>
                    This return the TableEnv of the table for the given table
                    name if tableid is 0, else it used tableid.
                  </p>
                  <HighlightedCpp code={"virtual ~BangDBDatabase();"} />
                  <p>It deletes the BangDBDatabase object.</p>
                </div>
                <div
                  style={{
                    display: tab === 2 ? "block" : "none",
                  }}
                >
                  {" "}
                  <HighlightedJava
                    code={
                      "public BangDBDatabase(String dbName, DBParam dbparam)"
                    }
                  />
                  <p>
                    Given a dbname and dbparam, this will create the
                    BangDBDatabase object. DBParam is defined below for
                    reference.
                  </p>
                  <HighlightedJava
                    code={
                      "public BangDBTable getTable(String tableName, TableEnv tenv, OpenType openType)"
                    }
                  />
                  <p>
                    Returns BangDBTable object for given tableName, tenv.
                    OpenType when null, then OPENCREATE is used as default.
                  </p>
                  <HighlightedJava
                    code={"public void beginTransaction(Transaction txn) "}
                  />
                  <p>
                    To begin transaction, pass the Transaction object. Txn
                    cannot be null.
                  </p>
                  <HighlightedJava
                    code={"public long commitTransaction(Transaction txn)"}
                  />
                  <p>
                    To commit transaction, pass the Transaction object. Txn
                    cannot be null. It returns txn number for success or -1 for
                    error.
                  </p>
                  <HighlightedJava
                    code={"public void abortTransaction(Transaction txn)"}
                  />
                  <p>
                    To abort transaction, pass the Transaction object. Txn
                    cannot be null.
                  </p>
                  <HighlightedJava code={"public int dumpData()"} />
                  <p>
                    To dump data on the file system, syncing all data from
                    memory to filesystem, this api can be called. It returns 0
                    for success else -1 for error.
                  </p>
                  <HighlightedJava
                    code={"public int dropTable(BangDBTable tbl)"}
                  />
                  <p>
                    Given a BangDBTable, this api will drop the table from the
                    database, which would erase all data and other information
                    for the given table. It returns 0 for success else -1 for
                    error.
                  </p>
                  <HighlightedJava
                    code={
                      "public boolean doesTableExist(String tblName, long tblId)"
                    }
                  />
                  <p>
                    Given <code>tblName</code> or <code>tblId</code>, this can
                    check if the table is existing. If <code>tblId</code> is
                    less than 0 then <code>tblName</code> would be used, else{" "}
                    <code>tblId</code> is used. It returns true if exists else
                    false.
                  </p>
                  <HighlightedJava
                    code={`// flag = 1 for open, 2 for closed, 3 for all
public int getNumTables(int flag)`}
                  />
                  <p>
                    This will return number of tables in the database. Flag set
                    as 1 would return count for open tables only, whereas if set
                    to 2 then it will return count for closed tables only. Flag
                    set as 3 would return for both open and close. For error it
                    returns -1.
                  </p>
                  <HighlightedJava code={"public String getTableList()"} />
                  <p>
                    This will return list of table in json format, else null for
                    error.
                    <code>public String getStats(boolean verbose)</code> This
                    API would return json string containing the statistics of
                    the database. If verbose then it will returns lots of
                    details. It may return null for error.
                  </p>
                  <HighlightedJava
                    code={
                      "public String getTableStats(String tblName, boolean verbose)"
                    }
                  />
                  <p>
                    This API would return json string containing the statistics
                    of the given table. If verbose then it will returns lots of
                    details. It may return null for error.
                  </p>
                  <HighlightedJava code={"public String describeDatabase()"} />
                  <p>
                    This api would return json string describing the database.
                    It may return null for error.
                  </p>
                  <HighlightedJava code={"public DBParam getParam()"} />
                  <p>This returns dbParam used to create the DB object.</p>
                  <HighlightedJava code={"public String getName()"} />
                  <p>This returns name of the database or null for error.</p>
                  <HighlightedJava
                    code={
                      "public TableType getTableType(String tblName, long tblId)"
                    }
                  />
                  <p>
                    This returns table type for the given tblName or tblId. If
                    <code>tblId</code> is positive then it will be used else for
                    negative value tblName will be used.
                  </p>
                  <HighlightedJava
                    code={
                      "public TableEnv getTableEnv(String tblName, long tblId)"
                    }
                  />
                  <p>
                    This returns table environment for the given tblName or
                    tblId. If tblId is positive then it will be used else for
                    negative value tblName will be used. For error, null may be
                    returned.
                  </p>
                  <HighlightedJava
                    code={"public long getTableId(String tblName)"}
                  />
                  <p>
                    Given a tblName, this will return table id, else -1 for
                    error.
                  </p>
                  <HighlightedJava
                    code={"public String add_udf(String udf_json)"}
                  />
                  <p>
                    This will add udf to the database which could be later used
                    for computation. Here is the format of the{" "}
                    <code>udf_json</code>.
                  </p>
                  <HighlightedCpp
                    code={`{"name":"mylib", "base_class":"baseclass", "create_func":"maker","type":1, "src":"src_loc", "srctype":1, "bucket_info":{}}`}
                  />
                  <p>
                    It will return json string containing errcode, 0 for success
                    and -1 for error.
                  </p>
                  <HighlightedJava
                    code={"public String del_udf(String udf_name)"}
                  />
                  <p>
                    Given a <code>udf_name</code> this API will delete the udf
                    from the database. It will return json string containing
                    errcode, 0 for success and -1 for error.
                  </p>
                  <HighlightedJava
                    code={"public String exec_udf(String req_json)"}
                  />
                  <p>
                    This will allow user to execute udf given the request json.
                    req_json looks like following:
                  </p>
                  <HighlightedCpp
                    code={`{"name":, "id", "argv":["a", 1, 0.3], "exp-type"}`}
                  />
                  <p>and the return value is also a json and it looks like:</p>
                  <HighlightedJava code={`{"ret-val":"abc"}`} />
                  <HighlightedJava
                    code={"public void closeDatabase(CloseType dbclose)"}
                  />
                  <p>
                    To close database, call this function. Dbclose when null,
                    Default option is used.
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
