import React, { useState } from "react";
import Head from "next/head";
import HighlightedCpp from "../../components/HighlightedCpp";
import HighlightedJava from "../../components/HighlightedJava";
import Breadcrumb from "../../components/Breadcrumb";

export default function NormalTableEmbedded() {
  const [tab, setTab] = useState(1);

  const cppCode = String.raw`bool flag = true;
DBParam dp;
dp.setTransactionType(DB_TRANSACTION_NONE);
BangDBDatabase * bdb = new BangDBDatabase("mydb", & dp);
if (!bdb) {
    printf("db could not be created, quitting\n");
    // return or handle error
}
// db_param sets the db environment, see the section to know more about it
TableEnv te;
te.setTableType(WIDE_TABLE);
// let's create long primary key type
te.setKeyType(NORMAL_KEY_LONG);
// enable reversed index
te.setAllowRevIdx(true);
BangDBTable * wide_tbl = bdb -> getTable("my_wide_tbl", & te, OPENCREATE);
if (!wide_tbl) {
    printf("we could not create the table my_wide_tbl\n");
    flag = false;
    // handle error
}
// now put in wide table
const char * doc1 = "{\"name\":\"sachin\", \"org\":\"bangdb\", \"address\":{\"city\":\"Bangalore\",\"state\":\"KA\"}, \"fav_quote\":\"We build too many walls and not enough bridges\"}";
long pk = 123;
FDT k, v;
_set_fdt( & k, pk);
// since we wish to put document, hence we will call put_doc
if (wide_tbl -> putDoc(doc1, & k) < 0) {
    printf("put_doc failed\n");
    flag = false;
    // handle error
}
// suppose we wish to now create index for name and address.city and reverse index fav_quote text then we will need to do following;
// let's create the index first, name of the index should be the field name on which we wish to add index
// supply max size of the index and specify whether to allows duplicate index or not
wide_tbl -> addIndex_str("name", 32, true);
wide_tbl -> addIndex_str("address.city", 32, true);
// also prepare to tell db to reverse index "fav_quote" and "state" fields
const char * rev_idx = "{\"_rev_idx_all\":0, \"_rev_idx_key_list\":[\"fav_quote\", \"state\"]}";
const char * doc2 = "{\"name\":\"arjun\", \"org\":\"bangdb\", \"address\":{\"city\":\"San jose\",\"state\":\"CA\"}, \"fav_quote\":\"Uneasy lies the head that wears the crown\"}";
bangdb_table::add_long_to_fdt(124, & k);
if (wide_tbl -> putDoc(doc2, & k, rev_idx) < 0) {
    printf("put doc failed with rev_idx\n");
    flag = false;
    // handle error
}
// to get data now
FDT * outv = NULL;
_set_fdt( & k, 123);
if (wide_tbl -> get( & k, & outv) < 0) {
    printf("get failed\n");
    flag = false;
    // handle error
}
// to ensure here for test (not needed otherwise)
else {
    printf("doc = %s\n", (char * ) outv -> data);
}
if (outv) {
    outv -> free();
    delete outv;
}
// please note that the doc has the pk also added, this happens with documents only
// query1 = scan all documents
ResultSet * rs = NULL;
while (true) {
    rs = wide_tbl -> scanDoc(rs);
    if (!rs) break;
    while (rs -> hasNext()) {
        printf("key = %ld, val = %s\n", rs -> getNextKeyLong(), rs -> getNextValStr());
        rs -> moveNext();
    }
}
// query2 = scan for documents having name equal to sachin
rs = NULL;
DataQuery dq;
dq.addQuery("name", EQ, "sachin", JO_INVALID);
while (true) {
    rs = wide_tbl -> scanDoc(rs, NULL, NULL, dq.getQuery());
    if (!rs) break;
    while (rs -> hasNext()) {
        printf("key = %ld, val = %s\n", rs -> getNextKeyLong(), rs -> getNextValStr());
        rs -> moveNext();
    }
}
// you will notice that even though we didn't create index on name until the first doc with name "sachin" was inserted,
// therefore we didn't get the result, however there is a way to still fetch, we can use following
rs = NULL;
ScanFilter sf;
sf.reserved = 13;
// magic num to tell db to fetch anyway, but note, this is not as efficient hence avoid unless required
while (true) {
    rs = wide_tbl -> scanDoc(rs, NULL, NULL, dq.getQuery(), & sf);
    if (!rs) break;
    while (rs -> hasNext()) {
        printf("key = %ld, val = %s\n", rs -> getNextKeyLong(), rs -> getNextValStr());
        rs -> moveNext();
    }
}
// query3 = scan for document with name equal to arjun and city san jose
rs = NULL;
dq.reset();
dq.addQuery("name", EQ, "arjun", JO_INVALID);
dq.addQuery("address.city", EQ, "San jose", JO_AND);
while (true) {
    rs = wide_tbl -> scanDoc(rs, NULL, NULL, dq.getQuery());
    if (!rs) break;
    while (rs -> hasNext()) {
        printf("key = %ld, val = %s\n", rs -> getNextKeyLong(), rs -> getNextValStr());
        rs -> moveNext();
    }
}
// query4 = scan for documents where the fav_quote has "crown" token/word and city "san jose"
rs = NULL:
    dq.reset();
dq.addQuery("address.city", EQ, "San jose", JO_INVALID);
dq.addQuery("crown, head", JO_AND, JO_AND, "fav_quote");
while (true) {
    rs = wide_tbl -> scanDoc(rs, NULL, NULL, dq.getQuery());
    if (!rs) break;
    while (rs -> hasNext()) {
        printf("key = %ld, val = %s\n", rs -> getNextKeyLong(), rs -> getNextValStr());
        rs -> moveNext();
    }
}
delete wide_tbl;
bdb -> closeDatabase(DEFAULT);
delete bdb;`;

  const javaCode = String.raw`System.loadLibrary("bangdb-java");
System.out.println("load banagdb-java successful");
boolean flag = true;
DBParam dbp = new DBParam();
dbp.setTransactionType(TransactionType.DB_MULTIOPS_TRANSACTION_NONE);
BangDBDatabase bdb = new BangDBDatabase("mydb", dbp);
if(bdb != null) { 
    System.out.println("java - bdb created");
}
else
    flag = false;

TableEnv tenv = new TableEnv();
BangDBTable tbl = bdb.getTable("mynormal_table", tenv, OpenType.OPENCREATE);
if(tbl != null) { 
    System.out.println("java - tbl created"); 
} 
else 
    flag = false;

System.out.println("table name = " + tbl.getName());
System.out.println("table dir = " + tbl.getTableDir());
System.out.println("table index type = " + tbl.getIndexType());
String tblStats = tbl.getStats(true); System.out.println(tblStats);

TableEnv te = bdb.getTableEnv("mynormal_table", 0);
if(te != null) 
    System.out.println(te.toString()); 

//put data 
String k1 = "key1";
String v1 = "this is value 1";
if(tbl.put(k1, v1.getBytes(), InsertOptions.INSERT_UNIQUE, null) < 0) { 
    System.out.println("put failed");
    flag = false; 
} 
else 
    System.out.println("put successful");

System.out.println("num of items in the table = " + tbl.count());

byte[] rv1 = tbl.get(k1, null);
String rv1_s = new String(rv1);
if(!rv1_s.equals(v1)) { 
    System.out.println("get failed - value mismatch. got [ "+new String(rv1)+" ] expected [ "+v1+" ]"); 
    flag = false;
}

String k2 = "key2"; String v2 = "this is value 2";
if(tbl.put(k2, v2.getBytes(), InsertOptions.INSERT_UNIQUE, null) < 0) { 
    System.out.println("put 2 failed"); flag = false;
} 
else 
    System.out.println("put 2 successful");

byte[] rv2 = tbl.get(k2, null);
String rv2_s = new String(rv2);
if(!rv2_s.equals(v2)) { 
    System.out.println("get failed - value 2 mismatch. got [ "+rv2_s+" ] expected [ "+v2+" ]");
    flag = false; 
}

ScanFilter sf = new ScanFilter();
ResultSet rs = tbl.scan(null, k1, k2, sf, null);
while(rs.hasNext()) { 
    System.out.println("key = " + rs.getNextKeyStr() + ", val = " + rs.getNextValStr());
    rs.moveNext();
}
rs.clear();

if(tbl.del(k1, null) < 0) { 
    System.out.println("del failed");
    flag = false;
} 

if(tbl.get(k1, null) != null) {
    System.out.println("got deleted data, get failed");
    flag = false;
}

// now create normal table with long key
te.reset();
te.setTable_type(TableType.NORMAL_TABLE);
te.setKey_type(KeyType.NORMAL_KEY_LONG);
BangDBTable tbl2 = bdb.getTable("normal_table2", te, OpenType.OPENCREATE);
if(tbl2.put(1, "long value 1".getBytes(), InsertOptions.INSERT_UNIQUE, null) < 0) { 
    System.out.println("put failed"); 
    flag = false;
}

System.out.println("get val = " + new String(tbl2.get(1, null))); rs = tbl2.scan(null, 1, 1, sf, null); 

while(rs.hasNext()) { 
    System.out.println("key = " + rs.getNextKeyLong() + ", val = " + rs.getNextValStr()); 
    rs.moveNext(); 
} 
rs.clear(); 

if(tbl2.del(1, null) < 0) { 
    System.out.println("del long failed");
    flag = false; 
}

if(tbl.get(1, null) != null) { 
    System.out.println("got long deleted data, get failed"); 
    flag = false; 
}
bdb.closeDatabase(CloseType.DEFAULT);`;

  return (
    <React.Fragment>
      <Head>
        <title>Normal Table - BangDB</title>
        <meta
          name="description"
          content="Database and Tables are two most important types to work with and most of the time developers will deal with these two types..."
        ></meta>
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Normal Table - BangDB" />
        <meta
          property="og:description"
          content="Database and Tables are two most important types to work with and most of the time developers will deal with these two types..."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="Normal Table - BangDB" />
        <meta
          name="twitter:description"
          content="Database and Tables are two most important types to work with and most of the time developers will deal with these two types..."
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
              <Breadcrumb text="Introduction" url="/bangdb-introduction" />
              <h1 className="article-title">Normal Table</h1>
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
                  help you understand the API and their usage.
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
