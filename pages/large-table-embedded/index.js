import React, { useState } from "react";
import Head from "next/head";
import Breadcrumb from "../../components/Breadcrumb";
import HighlightedCpp from "../../components/HighlightedCpp";
import HighlightedJava from "../../components/HighlightedJava";

export default function LargeTableEmbedded() {
  const [tab, setTab] = useState(1);

  const cppCode = String.raw`bool flag = true;
  DBParam dp;
  dp.setTransactionType(DB_TRANSACTION_NONE);
  BangDBDatabase * bdb = new BangDBDatabase("mydb", & dp);
  if (!bdb) {
      printf("db could not be created, quitting\n");
      //return or handle error
  }
  // db_param sets the db environment, see the section to know more about it
  // create a large table
  TableEnv te;
  te.setTableType(LARGE_TABLE);
  // large table must have composite primary key, else db will throw error
  te.setKeyType(COMPOSITE_KEY);
  te.setKeySize(64); // set key size keeping ~32 bytes for system to add/consume
  BangDBTable * large_tbl = bdb -> getTable("my_large_tbl", & te, OPENCREATE);
  if (!large_tbl) {
      printf("we could not create the table my_large_tbl\n");
      flag = false;
      // handle error
  }
  // let's load large file
  const char * file_path = "libbangdb.so.2.0";
  const char * fkey = "bangdb_2_0_binary";
  FDT fk;
  set_fat( & fk, fkey);
  if (large_tbl -> putFile( & fk, file_path, INSERT_UNIQUE) < 0) {
      printf("error in putting large file\n");
      flag = false;
      // handle error
  }
  const char * file_name = "linbangdb.so.2.0_new_name";
  const char * download_fpath = "/tmp";
  if (large_tbl -> getFile( & fk, file_name, download_fpath) < 0) {
      printf("get file error\n");
      flag = false;
      // handle error
  }
  int nslices = large_tbl -> countSliceLarge_data( & fk);
  printf("num of slices for the file = %d\n", nslices);
  const char * finfo = large_tbl -> listLargeDataKeys(fkey);
  printf("the file info = %s\n", finfo);
  delete[] finfo;
  delete large_tbl;
  bdb -> closeDatabase(DEFAULT);
  delete bdb;`;

  const javaCode = String.raw`System.loadLibrary("bangdb-java");
System.out.println("load banagdb-java successful");
boolean flag = true;
DBParam dbp = new DBParam();
dbp.setTransactionType(TransactionType.DB_MULTIOPS_TRANSACTION_NONE);
BangDBDatabase bdb = new BangDBDatabase("mydb", dbp);
if (bdb != null) {
    System.out.println("java - bdb created");
} else
    flag = false;
TableEnv tenv = new TableEnv();
te.setTable_type(TableType.LARGE_TABLE);
te.setKey_type(KeyType.COMPOSITE_KEY);
te.setKey_sz(48);
BangDBTable lt = bdb.getTable("large_table", te, OpenType.OPENCREATE);
if (lt.putFile("file1", "./bangdb.config", InsertOptions.INSERT_UNIQUE) < 0) {
    System.out.println("failed to upload file");
    flag = false;
}
if (lt.getFile("file1", "bangdb.config", "/tmp") < 0) {
    System.out.println("failed to download file");
    flag = false;
}
byte[] ldata = new byte[0x2000000];
if (lt.putLargeData("largeKey", ldata, InsertOptions.INSERT_UNIQUE) < 0) {
    System.out.println("failed to put large data");
    flag = false;
}
byte[] lrvd = lt.getLargeData("largeKey");
if (lrvd.length != ldata.length) {
    System.out.println("failed to get large data");
    flag = false;
}
System.out.println("Slice count = " + lt.countSliceLargeData("largeKey"));
System.out.println("list large keys = " + lt.listLargeDataKeys("largeKey", 1));
System.out.println("large count data = " + lt.countLargeData());
if (lt.delLargeData("largeKey") < 0) {
    System.out.println("failed to del large data");
    flag = false;
}
System.out.println("Slice count = " + lt.countSliceLargeData("largeKey"));
System.out.println("list large keys = " + lt.listLargeDataKeys("largeKey", 1));
System.out.println("large count data = " + lt.countLargeData());
bdb.closeDatabase(CloseType.DEFAULT);
if (flag)
    System.out.println("test_table_basic passed");
else
    System.out.println("test_table_basic failed");`;

  return (
    <React.Fragment>
      <Head>
        <title>Large Table - BangDB</title>
        <meta
          name="description"
          content="Large table is suitable for storing large files and objects. The size could run in several tens or hundreds of MBs or more."
        ></meta>
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Large Table - BangDB" />
        <meta
          property="og:description"
          content="Large table is suitable for storing large files and objects. The size could run in several tens or hundreds of MBs or more."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="Large Table - BangDB" />
        <meta
          name="twitter:description"
          content="Large table is suitable for storing large files and objects. The size could run in several tens or hundreds of MBs or more."
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
              <Breadcrumb text="Developing with BangDB" url="/" />
              <h1 className="article-title">Large Table</h1>
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
                  Here is a sample program which does most of the operations to
                  help you understand the APIs and their usage.
                </p>
                <div
                  style={{
                    display: tab === 1 ? "block" : "none",
                  }}
                >
                  <HighlightedCpp code={cppCode} />
                </div>
                <div
                  style={{
                    display: tab === 2 ? "block" : "none",
                  }}
                >
                  {" "}
                  <HighlightedJava code={javaCode} />
                </div>
              </div>
            </article>
          </div>
        </main>
      </section>
    </React.Fragment>
  );
}
