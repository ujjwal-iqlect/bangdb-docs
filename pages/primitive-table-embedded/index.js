import React, { useState } from "react";
import Head from "next/head";
import Breadcrumb from "../../components/Breadcrumb";
import HighlightedCpp from "../../components/HighlightedCpp";
import HighlightedJava from "../../components/HighlightedJava";

export default function PrimitiveTableEmbedded() {
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
// create primitive table
TableEnv te;
// primitive table has val always int or long type, only key we can be string, opaque or fixed type
// PRIMITIVE_TABLE_STRING - means key is staring or opaque type
te.setTableType(PRIMITIVE_TABLE_STRING);
te.setKeySize(24);
BangDBTable * prim_tbl = bdb -> getTable("my_prim_tbl", & te, OPENCREATE);
if (!prim_tbl) {
   printf("we could not create the table my_prim_tbl\n");
   flag = false;
   // handle error
}
FDT k, v;
// since we created PRIMITIVE_TABLE_STRING, therefore key is of string type
_set_fdt( & k, "prim_key1");
_set_fdt( & v, 1);
if (prim_tbl -> put( & k, & v, INSERT_UNIQUE) < 0) {
   printf("put for prim table failed\n");
   flag = false;
   // handle error
}
FDT * outv = NULL;
if (prim_tbl -> get( & k, & outv) < 0) {
   printf("get failed for prim table\n");
   flag = false;
   // handle error
}
if (outv) {
   outv -> free();
   delete outv;
}
// now scan
ResultSet * rs = NULL;
while (true) {
   rs = prim_tbl -> scan(rs, & k, NULL);
   if (!rs)
      break;
   while (rs -> hasNext()) {
      printf("key = %s, val = %ld\n", rs -> getNextKeyStr(), rs -> getNextValLong());
      rs -> moveNext();
   }
}
delete prim_tbl;
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
te.reset();
te.setTable_type(TableType.PRIMITIVE_TABLE_STRING);
te.setKey_sz(24);
BangDBTable prim_tbl = bdb.getTable("my_prim_tbl", te, OpenType.OPENCREATE);
if(prim_tbl != null) { 
    System.out.println("java - primitive table created"); 
} 
else 
    flag = false;
String k1 = "key1";
byte[] v1 = Longs.toByteArray(12345L);
if(prim_tbl.put(k1, v1, InsertOptions.INSERT_UNIQUE, null) < 0) { 
    System.out.println("put failed");
    flag = false; 
} 
else 
    System.out.println("put successful");
System.out.println("num of items in the table = " + tbl.count());
byte[] rv1 = prim_tbl.get(k1, null);
if(!rv1.equals(v1)) { 
    System.out.println("get failed - value mismatch. got [ "+new String(rv1)+" ] expected [ "+v1+" ]"); 
    flag = false;
}
bdb.closeDatabase(CloseType.DEFAULT);`;

  return (
    <React.Fragment>
      <Head>
        <title>Primitive Table - BangDB</title>
        <meta
          name="description"
          content="Primitive table is more like single column table where the value is always fixed type. int, long, double etc."
        ></meta>
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Primitive Table - BangDB" />
        <meta
          property="og:description"
          content="Primitive table is more like single column table where the value is always fixed type. int, long, double etc."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="Primitive Table - BangDB" />
        <meta
          name="twitter:description"
          content="Primitive table is more like single column table where the value is always fixed type. int, long, double etc."
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
              <h1 className="article-title">Primitive Table</h1>
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
