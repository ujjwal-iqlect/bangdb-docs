import React, { useState } from "react";
import Head from "next/head";
import Breadcrumb from "../../components/Breadcrumb";
import HighlightedCpp from "../../components/HighlightedCpp";
import HighlightedJava from "../../components/HighlightedJava";

export default function WideTableEmbedded() {
  const [tab, setTab] = useState(1);

  const cppCode = String.raw`bool flag = true;

DBParam dp;
dp.setTransactionType(DB_TRANSACTION_NONE);
BangDBDatabase *bdb = new BangDBDatabase("mydb", &dp);
if(!bdb)
{
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
BangDBTable *wide_tbl = bdb->getTable("my_wide_tbl", &te, OPENCREATE);
if(!wide_tbl)
{
 printf("we could not create the table my_wide_tbl\n");
 flag = false;
 // handle error
}

// now put in wide table
const char *doc1 = "{\"name\":\"sachin\", \"org\":\"bangdb\", \"address\":{\"city\":\"Bangalore\",\"state\":\"KA\"}, \"fav_quote\":\"We build too many walls and not enough bridges\"}";
long pk = 123;
FDT k, v;
_set_fdt(&k, pk);
// since we wish to put document, hence we will call put_doc
if(wide_tbl->putDoc(doc1, &k) < 0) {
 printf("put_doc failed\n");
 flag = false;
 // handle error
}
// suppose we wish to now create index for name and address.city and reverse index fav_quote text then we will need to do following;
// let's create the index first, name of the index should be the field name on which we wish to add index
// supply max size of the index and specify whether to allows duplicate index or not
wide_tbl->addIndex_str("name", 32, true);
wide_tbl->addIndex_str("address.city", 32, true);
// also prepare to tell db to reverse index "fav_quote" and "state" fields
const char *rev_idx = "{\"_rev_idx_all\":0, \"_rev_idx_key_list\":[\"fav_quote\", \"state\"]}";
const char *doc2 = "{\"name\":\"arjun\", \"org\":\"bangdb\", \"address\":{\"city\":\"San jose\",\"state\":\"CA\"}, \"fav_quote\":\"Uneasy lies the head that wears the crown\"}";
bangdb_table::add_long_to_fdt(124, &k);
if(wide_tbl->putDoc(doc2, &k, rev_idx) < 0)
{
 printf("put doc failed with rev_idx\n");
 flag = false;
 // handle error
}

// to get data now
FDT *outv = NULL;
_set_fdt(&k, 123);
if(wide_tbl->get(&k, &outv) < 0) {
 printf("get failed\n");
 flag = false;
 // handle error
}
// to ensure here for test (not needed otherwise)
else {
 printf("doc = %s\n", (char*)outv->data);
}
if(outv) {
 outv->free();
 delete outv;
}
// please note that the doc has the pk also added, this happens with documents only
// query1 = scan all documents
ResultSet *rs = NULL;
while(true) {
rs = wide_tbl->scanDoc(rs);
if(!rs) break;
while(rs->hasNext()) {
 printf("key = %ld, val = %s\n", rs->getNextKeyLong(), rs->getNextValStr());
 rs->moveNext();
}
}

// query2 = scan for documents having name equal to sachin
rs = NULL;
DataQuery dq;
dq.addQuery("name", EQ, "sachin", JO_INVALID);
while(true) {
 rs = wide_tbl->scanDoc(rs, NULL, NULL, dq.getQuery());
 if(!rs) break;
while(rs->hasNext()) {
 printf("key = %ld, val = %s\n", rs->getNextKeyLong(), rs->getNextValStr());
 rs->moveNext();
}
}
// you will notice that even though we didn't create index on name until the first doc with name "sachin" was inserted,
// therefore we didn't get the result, however there is a way to still fetch, we can use following
rs = NULL;
ScanFilter sf;
sf.reserved = 13; 
// magic num to tell db to fetch anyway, but note, this is not as efficient hence avoid unless required
while(true) {
rs = wide_tbl->scanDoc(rs, NULL, NULL, dq.getQuery(), &sf);
if(!rs) break;
while(rs->hasNext()) {
 printf("key = %ld, val = %s\n", rs->getNextKeyLong(), rs->getNextValStr());
 rs->moveNext();
}
}
// query3 = scan for document with name equal to arjun and city san jose
rs = NULL;
dq.reset();
dq.addQuery("name", EQ, "arjun", JO_INVALID);
dq.addQuery("address.city", EQ, "San jose", JO_AND);
while(true) {
 rs = wide_tbl->scanDoc(rs, NULL, NULL, dq.getQuery());
 if(!rs) break;
while(rs->hasNext()) {
 printf("key = %ld, val = %s\n", rs->getNextKeyLong(), rs->getNextValStr());
 rs->moveNext();
}
}
// query4 = scan for documents where the fav_quote has "crown" token/word and city "san jose"
 rs = NULL:
dq.reset();
dq.addQuery("address.city", EQ, "San jose", JO_INVALID);
dq.addQuery("crown, head", JO_AND, JO_AND, "fav_quote");
while(true) {
 rs = wide_tbl->scanDoc(rs, NULL, NULL, dq.getQuery());
 if(!rs) break;
while(rs->hasNext()) {
 printf("key = %ld, val = %s\n", rs->getNextKeyLong(), rs->getNextValStr());
 rs->moveNext();
}
}

delete wide_tbl;
bdb->closeDatabase(DEFAULT);
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
// wide table with long key
te.reset();
te.setTable_type(TableType.WIDE_TABLE);
te.setKey_type(KeyType.NORMAL_KEY_LONG);
BangDBTable wt = bdb.getTable("wide_table", te, OpenType.OPENCREATE);
te.reset();
te.setKey_sz(32);
wt.addIndex("loc", te);
wt.addIndex_num("numidx", true);
String doc1 = "{\"name\":\"sachin sinha\", \"loc\":\"India\"}";
String doc2 = "{\"name\":\"Abu Bakr\", \"loc\":\"Abu Dhabi\"}";
String doc3 = "{\"name\":\"Brad knapp\", \"loc\":\"USA\"}";
String doc4 = "{\"name\":\"Aarav sinhs\", \"loc\":\"India\"}";
String doc5 = "{\"name\":\"Teresa Clafford\", \"loc\":\"USA\"}";
wt.putDoc(doc1, 1, null, InsertOptions.INSERT_UNIQUE);
wt.putDoc(doc2, 2, null, InsertOptions.INSERT_UNIQUE);
wt.putDoc(doc3, 3, null, InsertOptions.INSERT_UNIQUE);
wt.putDoc(doc4, 4, null, InsertOptions.INSERT_UNIQUE);
wt.putDoc(doc5, 5, null, InsertOptions.INSERT_UNIQUE);
System.out.println("num of items = " + wt.count());
DataQuery dq = new DataQuery();
dq.addQueryFilter("loc", ScanOperator.EQ, "India", JoinType.JO_INVALID);
System.out.println("scanning for query = " + dq.getQuery());
rs = wt.scanDoc(null, 0, 0, dq.getQuery(), sf);
while (rs.hasNext()) {
    System.out.println("key = " + rs.getNextKeyLong() + ", val = " + rs.getNextValStr());
    rs.moveNext();
}
if (rs.count() != 2) {
    System.out.println("failed for rs count");
    flag = false;
}
System.out.println("table stats before dropIndex= " + wt.getStats(true));
if (wt.dropIndex("numidx") < 0) {
    System.out.println("failed for drop index");
    flag = false;
}
System.out.println("table stats after dropIndex = " + wt.getStats(true));
rs.clear();
long nc = wt.count(2, 7, dq.getQuery(), sf);
System.out.println("for query [  " + dq.getQuery() + " ] with pk(2,7), count = " + nc);
if (nc != 1) {
    System.out.println("failed for wt count with pks");
    flag = false;
}
sf.reset();
nc = wt.count(0, 0, dq.getQuery(), sf);
System.out.println("for query [  " + dq.getQuery() + " ] with open pk(), count = " + nc);
if (nc != 2) {
    System.out.println("failed for wt count");
    flag = false;
}
System.out.println("exp count = " + wt.expCount(0, 0));
System.out.println("table tyle for wt = " + wt.getTableType());
// now try large tables
te.reset();
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
te.reset();
te.setTable_type(TableType.WIDE_TABLE);
te.setKey_type(KeyType.NORMAL_KEY);
BangDBTable wtbl2 = bdb.getTable("wide_table2", te, OpenType.OPENCREATE);
System.out.println("1. Total items in table wt2 = " + wtbl2.count());
if (wtbl2.putDoc(doc1, "k1", null, InsertOptions.INSERT_UNIQUE) < 0) {
    System.out.println("failed to put string key val data");
    flag = false;
}
System.out.println("2. Total items in table wt2 = " + wtbl2.count());
byte[] rvb21 = wtbl2.get("k1", null);
String rv21 = rvb21 != null ? new String(rvb21) : null;
System.out.println("get for sting key val data = " + rv21);
wtbl2.putDoc(doc2, "k2", null, InsertOptions.INSERT_UNIQUE);
wtbl2.putDoc(doc3, "k3", null, InsertOptions.INSERT_UNIQUE);
wtbl2.putDoc(doc4, "k4", null, InsertOptions.INSERT_UNIQUE);
wtbl2.putDoc(doc5, "k5", null, InsertOptions.INSERT_UNIQUE);
System.out.println("3. Total items in table wt2 = " + wtbl2.count());
sf.reset();
dq.reset();
DataQuery dq2 = new DataQuery();
dq2.addQueryFilter("loc", ScanOperator.EQ, "India", JoinType.JO_INVALID);
System.out.println("scanning for query = " + dq2.getQuery());
String sk1 = "k1";
String sk2 = "k2";
rs = wtbl2.scanDoc(null, sk1, sk2, dq2.getQuery(), sf);
while (rs.hasNext()) {
    System.out.println("key = " + rs.getNextKeyStr() + ", val = " + rs.getNextValStr());
    rs.moveNext();
}
if (rs.count() != 1) {
    System.out.println("failed for rs count = " + rs.count());
    flag = false;
}
// text data use case
te.reset();
te.setTable_type(TableType.WIDE_TABLE);
te.setAllow_rev_idx(1);
te.setKey_type(KeyType.NORMAL_KEY);
BangDBTable texttbl = bdb.getTable("texttable", te, OpenType.OPENCREATE);
String t1 = "mango 245T kolkata to patna trainnum:2931 post address 23";
String t2 = "mango 245T kolkata to bangalore trainnum:8776 post address 34";
String t3 = "mango 123T kolkata to cochin trainnum:3441 post address 55";
String t4 = "mango 564T kolkata to hyderabad trainnum:8776 post address 77";
String tk1 = "mango_ship_key2";
String tk2 = "mango_ship_key3";
texttbl.putText(t1, null, InsertOptions.INSERT_UNIQUE);
texttbl.putText(t2, tk1, InsertOptions.INSERT_UNIQUE);
texttbl.putText(t3, tk2, InsertOptions.INSERT_UNIQUE);
System.out.println("num of items in text table = " + texttbl.count());
String list3[] = {
    "cochin",
    "245T"
};
rs = texttbl.scanText(list3, false);
while (rs.hasNext()) {
    System.out.println("key = " + rs.getNextKeyStr() + ", val = " + rs.getNextValStr());
    rs.moveNext();
}
if (rs.count() != 3) {
    System.out.println("scan text failed, count = " + rs.count());
    flag = false;
}
bdb.closeDatabase(CloseType.DEFAULT);`;

  return (
    <React.Fragment>
      <Head>
        <title>Wide Table - BangDB</title>
        <meta
          name="description"
          content="When we wish to store all kinds of data, including document data, and we also wish to create indexes then we should select wide table type."
        ></meta>
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Wide Table - BangDB" />
        <meta
          property="og:description"
          content="When we wish to store all kinds of data, including document data, and we also wish to create indexes then we should select wide table type."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="Wide Table - BangDB" />
        <meta
          name="twitter:description"
          content="When we wish to store all kinds of data, including document data, and we also wish to create indexes then we should select wide table type."
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
              <h1 className="article-title">Wide Table</h1>
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
                  help you understand the APIs and their usage. You may copy and
                  paste and run to check. It is advisable that you go though
                  this thoroughly to get hold of this. It&apos;s very simple,
                  dealing with just <code>put_doc()</code>, <code>get()</code>{" "}
                  and <code>scan_doc()</code> apis, that&apos;s all.
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
