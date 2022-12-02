import React, { useState } from "react";
import Head from "next/head";
import Breadcrumb from "../../components/Breadcrumb";
import HighlightedCpp from "../../components/HighlightedCpp";
import HighlightedJava from "../../components/HighlightedJava";
import Link from "next/link";

export default function BangdbDatabaseApi() {
  const [tab, setTab] = useState(1);

  return (
    <React.Fragment>
      <Head>
        <title>Database Type - BangDB</title>
        <meta
          name="description"
          content="Learn about BangDB Database & server APIs. Read the documentation to know more about BangDB Server APIs."
        ></meta>
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Database Type - BangDB" />
        <meta
          property="og:description"
          content="Learn about BangDB Database & server APIs. Read the documentation to know more about BangDB Server APIs."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="Database Type - BangDB" />
        <meta
          name="twitter:description"
          content="Learn about BangDB Database & server APIs. Read the documentation to know more about BangDB Server APIs."
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
              <h1 className="article-title">Database</h1>
              <div className="article-body">
                <p>
                  BangDB Database represents the database within BangDB. The
                  database contains rest of the entities within BangDB, for
                  example: table, stream, ML etc. We need to create the database
                  object to be able to do anything within the database.
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
                  <p>To create the database object</p>
                  <HighlightedCpp
                    code={`BangDBDatabase(const char *dbName, BangDBEnv *env, DBParam *dbParam = NULL);`}
                  />
                  <p>To get the table or create a new table</p>
                  <HighlightedCpp
                    code={`BangDBTable *getTable(const char *tblName, TableEnv *tblenv = NULL, OpenType openflag = OPENCREATE);`}
                  />
                  <p>
                    Before creating new table, we should set the TableEnv object
                    properly based on what kind of table we wish to create.
                    There are several properties that we could set for the
                    table. Please see the section on &quot;table_env&quot;.
                  </p>
                  <p>OpenType has following options:</p>
                  <HighlightedCpp
                    code={`OPENCREATE, // to create new or open if table is not existing 
TRUNCOPEN, // hardly used (truncate and open) 
JUSTOPEN, // open only if exists, else fail`}
                  />
                  <p>
                    It returns NULL for error. To get the table stats, the
                    details of the table
                  </p>
                  <HighlightedCpp
                    code={`const char *getTableStats(const char *tblName, bool verbose);`}
                  />
                  <p>
                    It returns NULL for error or json describing the table and
                    it&apos;s stats. To get database stats
                  </p>
                  <HighlightedCpp
                    code={`const char *getStats(bool verbose = true);`}
                  />
                  <p>
                    It returns NULL for error or json describing the database
                    and it&apos;s stats. To get table reference (for already
                    created or opened table)
                  </p>
                  <HighlightedCpp
                    code={`TableEnv *getTableEnv(const char *tblName, long tblId = 0);`}
                  />
                  <p>
                    It returns NULL if table doesn&apos;t exist. Please note
                    this is the reference to the table and should not be
                    deleted. To drop a table
                  </p>
                  <HighlightedCpp code={`int dropTable(BangDBTable **tbl);`} />
                  <p>
                    It returns -1 for error. BangDB supports transaction for set
                    of operations. To get the transaction reference
                  </p>
                  <HighlightedCpp
                    code={`void beginTransaction(Transaction *txn);
long commitTransaction(Transaction *txn);
void abortTransaction(Transaction *txn);`}
                  />
                  <p>
                    Please see &quot;bangdb transaction&quot; for details to
                    dumpdata on the disk
                  </p>
                  <HighlightedCpp code={`int dumpData();`} />
                  <p>
                    This may be required when you simply want to force table
                    contents on disk for copying the files etc. It returns -1
                    for error. To check if table exist or not
                  </p>
                  <HighlightedCpp
                    code={`short doesTableExist(const char *tblName, long tblId = 0);`}
                  />
                  <p>To get number of tables</p>
                  <HighlightedCpp code={`long getNumTables(int flag = 1);`} />
                  <p>To get the list of the table names</p>
                  <HighlightedCpp code={`const char *getTableList();`} />
                  <p>To get the db param</p>
                  <HighlightedCpp code={`DBParam *getParam();`} />
                  <p>To get the name of the table</p>
                  <HighlightedCpp code={`const char *getName();`} />
                  <p>To get the type of the table</p>
                  <HighlightedCpp
                    code={`TableType getTableType(const char *tblName, long tblId = 0);`}
                  />
                  <p>To get the table id</p>
                  <HighlightedCpp
                    code={`long getTableId(const char *tblName);`}
                  />
                  <p>To check if table is valid</p>
                  <HighlightedCpp code={`bool isValid();`} />
                </div>
                <div
                  style={{
                    display: tab === 2 ? "block" : "none",
                  }}
                >
                  <p>To create the database object</p>
                  <HighlightedJava
                    code={`public BangDBDatabase(String dbName, BangDBEnv env, DBParam dbparam)`}
                  />
                  <p>
                    It returns null for error or json describing the database.
                    To get the table or create a new table
                  </p>
                  <HighlightedJava
                    code={`public BangDBTable getTable(String tableName, TableEnv tenv, OpenType openType)`}
                  />
                  <p>
                    Before creating new table, we should set the table_env
                    object properly based on what kind of table we wish to
                    create. There are several properties that we could set for
                    the table. Please see the section on &quot;table_env&quot;.
                    OpenType has following options:
                  </p>
                  <HighlightedJava
                    code={`OPENCREATE, // to create new or open if table is not existing 
TRUNCOPEN, // hardly used 
JUSTOPEN, // open only if exists, else fail`}
                  />
                  <p>
                    It returns null for error. To get the table stats, the
                    details of the table
                  </p>
                  <HighlightedJava
                    code={`public String getTableStats(String tblName, boolean verbose)`}
                  />
                  <p>
                    It returns null for error or json describing the table and
                    it&apos;s stats. To get database stats
                  </p>
                  <HighlightedJava
                    code={`public String getStats(boolean verbose)`}
                  />
                  <p>
                    It returns null for error or json describing the database
                    and it&apos;s stats. To get table reference (for already
                    created or opened table)
                  </p>
                  <HighlightedJava
                    code={`public TableEnv getTableEnv(String tblName, long tblId)`}
                  />
                  <p>
                    It returns null if table doesn&apos;t exist. Please note
                    this is the reference to the table and should not be
                    deleted. To drop a table
                  </p>
                  <HighlightedJava
                    code={`public int dropTable(BangDBTable tbl)`}
                  />
                  <p>
                    It returns -1 for error BangDB supports transaction for set
                    of operations. To get the transaction reference
                  </p>
                  <HighlightedJava
                    code={`public void beginTransaction(Transaction txn)`}
                  />
                  <p>To commit the transaction</p>
                  <HighlightedJava
                    code={`public long commitTransaction(Transaction txn)`}
                  />
                  <p>To abort the transaction</p>
                  <HighlightedJava
                    code={`public void abortTransaction(Transaction txn)`}
                  />
                  <p>
                    Please see &quot;bangdb Transaction&quot; for details to
                    dumpdata on the disk
                  </p>
                  <HighlightedJava code={`public int dumpData()`} />
                  <p>
                    This may be required when you simply want to force table
                    contents on disk for copying the files etc. It returns -1
                    for error to check if table exists or not
                  </p>
                  <HighlightedJava
                    code={`public boolean doesTableExist(String tblName, long tblId)`}
                  />
                  <p>To get number of tables in the db</p>
                  <HighlightedJava code={`public int getNumTables(int flag)`} />
                  <p>To get the table list</p>
                  <HighlightedJava code={`public String getTableList()`} />
                  <p>To get the DBParam for the db</p>
                  <HighlightedJava code={`public DBParam getParam()`} />
                  <p>To get the name of the db</p>
                  <HighlightedJava code={`public String getName()`} />
                  <p>To get the table type of the given table</p>
                  <HighlightedJava
                    code={`public TableType getTableType(String tblName, long tblId)`}
                  />
                  <p>To get the id of the table</p>
                  <HighlightedJava
                    code={`public long getTableId(String tblName)`}
                  />
                  <p>
                    BangDB stream processing supports UDFs (user defined
                    functions), to deal with UDFs
                  </p>
                  <HighlightedJava
                    code={`String add_udf(String udf_json)
String del_udf(String udf_name)
String exec_udf(String req_json)`}
                  />
                  <p>
                    The arguments for all these methods are json, these are
                    described in detail in UDF section.
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
