import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Codebox from "../../components/Codebox";
import HighlightedCpp from "../../components/HighlightedCpp";
import HighlightedJava from "../../components/HighlightedJava";
import DocArticle from "../../components/DocArticle";
import Breadcrumb from "../../components/Breadcrumb";

export default function SampleClientApplication() {
  const [tab, setTab] = useState(1);

  const createEnvDBObjectCpCode = String.raw`DBParam dpm;
dpm.setTransactionType(DB_TRANSACTION_NONE);
#ifdef _BANGDB_SSL_ dpm.setSecureConn(true);
#endif BangDBEnv *env = new BangDBEnv(&amp;dpm);
BangDBDatabase *bdb = new BangDBDatabase("mydb", env, &amp;dpm);`;

  const startOprtCpCode = String.raw`TableEnv te;
te.setTableType(NORMAL_TABLE);
te.setKeySize(24);
// default key is string type, hence we can set the size of the key 
BangDBTable *t1 = bdb->getTable("normal_table", te, OPENCREATE);
// Open or create
if(!t1) { 
   printf("normal table creation failed\n"); return -1; 
}`;

  const getDBDescPrintCpCode = String.raw`const char *db_desc = NULL;
db_desc = bdb->getStats(true);
if(!db_desc) { 
   printf("getStats for db failed\n"); return -1; 
} else { 
   printf("getStats for db returns following:\n%s\n", db_desc);
   delete[] db_desc;
}`;

  const getTableDescCpCode = String.raw`const char *tbl_desc = t1->getStats(true); 
if(!tbl_desc) { 
   printf("table desc failed\n"); return -1;
} else { 
   printf("getStats for normal table returns following:\n%s\n", tbl_desc); delete[] tbl_desc;
}`;
  const putReadDataCpCode = String.raw`bool flag = true;
// let's put some key and value
FDT k("my_key1", 7), v("my_val1", 7);
if(t1-&gt;put(&amp;k, &amp;v, INSERT_UNIQUE) &lt; 0) { 
   printf("put in the normal table failed\n"); flag = false; 
} 
FDT *ov = NULL;
if(t1-&gt;get(&amp;k, &amp;ov) &lt; 0) { 
   printf("get in the normal table failed\n"); flag = false; 
} else { 
   printf("1. key = %s, val = %s\n", (char*)k.data, (char*)ov-&gt;data); ov-&gt;free();
}`;

  const prevKeyInsertUniqueCpCode = String.raw`v.data = (char*)"my_val1_update";
v.length = 14; if(t1-&gt;put(&amp;k, &amp;v, INSERT_UNIQUE) != 1)
// unique put should fail here as key exists
{ 
   printf("update in the normal table failed as it put unique data\n");
   flag = false;
} 
// we may call put with INSERT_UPDATE to update the existing key 
if(t1-&gt;put(&amp;k, &amp;v, INSERT_UPDATE) &lt; 0) {
   printf("update in the normal table failed as it could not update the key\n"); 
   flag = false; 
} ov = NULL; 
if(t1-&gt;get(&amp;k, &amp;ov) &lt; 0) { 
   printf("get in the normal table failed\n"); 
   flag = false; 
} else { 
   printf("2. key = %s, val = %s\n", (char*)k.data, (char*)ov-&gt;data); ov-&gt;free();
}`;

  const deleteKeyCpCode = String.raw`if(t1-&gt;del(&amp;k) &lt; 0) { 
printf("del in normal table failed\n");
flag = false; 
}
// try to get the deleted key, you should get -1 else it's error
ov = NULL;
if(t1-&gt;get(&amp;k, &amp;ov) &gt;= 0) { 
   printf("del error\n"); flag = false; 
} if(ov) { 
   printf("get in the normal table failed as it got the deleted key\n"); 
flag = false;
  } `;

  const scanTableCpCode = String.raw`ResultSet *rs = NULL; ScanFilter sf; int nc = 0;
// since there could be large amount of data and hence we may need to
// scan multiple times in order to get the data
// therefore we need to call scan recursively 
// BangDB simplifies this completely and allows user to call like following;
// Note; you may add other args as well as needed 
printf("Scanning for table t1\n");
while(true) { 
rs = t1-&gt;scan(rs, NULL, NULL, &amp;sf);
if(!rs) break;
nc += rs-&gt;count();
while(rs-&gt;hasNext()) { 
   // since this table has key and val as string hence can call these to print
   printf("key = %s, val = %s\n", rs-&gt;getNextKeyStr(), rs-&gt;getNextValStr()); rs-&gt;moveNext();
 } 
} 
printf("num of scanned items for table t1 = %d\n", nc);`;

  const createNormalTableCpCode = String.raw`te.reset();
te.setTableType(NORMAL_TABLE);
te.setKeyType(NORMAL_KEY_LONG);
// key is long now, not string, hence key_size is not needed 
BangDBTable *t2 = bdb-&gt;getTable("normal_table_long", &amp;te, OPENCREATE);
if(!t2) { 
   printf("normal table creating failed\n"); return -1;
} 
// put key val 
long lv = 1;
FDT k2(lv, 8), v2("my_val_long1", 12);
if(t2-&gt;put(&amp;k2, &amp;v2, INSERT_UNIQUE) &lt; 0) {
   printf("put in the normal table failed\n");
   flag = false;
}
// get the val for the given key 
ov = NULL;
if(t2-&gt;get(&amp;k2, &amp;ov) &lt; 0) { 
   printf("get in the normal table failed\n"); flag = false;
} else { 
    printf("3. key = %ld, val = %s\n", (long)k2.data, (char*)ov-&gt;data); ov-&gt;free();
}`;

  const dropTableUsingTwoCpCode = String.raw`if(t1-&gt;closeTable(CLEANCLOSE_AT_SERVER) &lt; 0) { 
printf("failed to drop the table t1\n"); flag = false; 
}
delete t1; 
// check if it exists 
if(bdb-&gt;doesTableExist("normal_table")) { 
  printf("table normal_table exists after dropping it\n"); flag = false; 
}`;

  const createWideTableCpCode = String.raw`te.reset();
te.setTableType(WIDE_TABLE);
te.setKeyType(NORMAL_KEY_LONG);
// let's use long key te.setAllowDuplicate(true);
// dupl key is allowed te.setVersionType(BANGDB_DATA_VERSION_VALID_INVALID);
// this will maintain versions, usually we should do this 
BangDBTable *t3 = bdb-&gt;getTable("my_wide_table1", &amp;te, OPENCREATE);
if(!t3) { 
   printf("wide table could not be created\n"); return -1;
}`;

  const putFewKeysCpCode = String.raw`FDT wk1(111, 8), wk2(222, 8), wk3(333, 8); FDT wv1("wide val 1", 10), wv2("wide val 2", 10), wv3("wide val 3", 10);
if(t3-&gt;put(&amp;wk1, &amp;wv1, INSERT_UNIQUE) &lt; 0) { 
   printf("put for widetable failed\n"); flag = false;
 } if(t3-&gt;put(&amp;wk2, &amp;wv2, INSERT_UNIQUE) &lt; 0) { 
   printf("put for widetable failed\n"); flag = false;
 } if(t3-&gt;put(&amp;wk3, &amp;wv3, INSERT_UNIQUE) &lt; 0) { 
   printf("put for widetable failed\n"); flag = false;
 } wv1.data = (char*)"wide_val_1_up"; wv1.length = 13;
if(t3-&gt;put(&amp;wk1, &amp;wv1, INSERT_UNIQUE) &lt; 0) { 
   printf("put for widetable failed\n"); 
   flag = false;
 } 
FDT *wov = NULL; 
if(t3-&gt;get(&amp;wk1, &amp;wov) &lt; 0) { 
  printf("get failed for wide table\n");
  flag = false; }
else { 
   printf("4. key = %d, val = %s\n", 111, (char*)wov-&gt;data);
   wov-&gt;
   free();
   delete wov; 
}`;

  const scanForSomeKeyRangeCpCode = String.raw`rs = NULL; sf.reset();
nc = 0;
printf("Scanning for table t3\n");
while(true) { 
   rs = t3-&gt;scan(rs, &amp;wk1, &amp;wk3, &amp;sf);
   if(!rs) break; nc += rs-&gt;count();
   while(rs-&gt;hasNext()) {
      printf("key = %ld, val = %s\n", rs-&gt;getNextKeyLong(), rs-&gt;getNextValStr()); rs-&gt;moveNext(); 
   } 
} 
printf("num of scanned items for table t3 = %d\n", nc);`;

  const countNokCpCode = String.raw`printf("total num of elements in t3 = %ld\n", t3-&gt;count());
printf("num of elements between wk2 and wk3 in t3 = %ld\n", t3-&gt;count(&amp;wk2, &amp;wk3));`;

  const createNewWideTableCpCode = String.raw`te.reset();
te.setAllowDuplicate(true);
te.reset();
te.setTableType(WIDE_TABLE);
te.setKeyType(NORMAL_KEY_LONG);
te.setAllowDuplicate(true);
te.setVersionType(BANGDB_DATA_VERSION_VALID_INVALID);
BangDBTable *t4 = bdb-&gt;getTable("my_wide_table2", &amp;te, OPENCREATE);
if(!t4) { 
   printf("wide table t4 could not be created\n"); return -1; 
}`;

  const addFewIndexesCpCode = String.raw`// this one creates an index on string type field where max size is 16 bytes
if(t4-&gt;addIndex_str("org", 16, true) &lt; 0) { 
   printf("error in adding index org\n"); flag = false;
} 
// this one creates an index on string type field where max size is 24 bytes 
// note, it's a nested index 
if(t4-&gt;addIndex_str("family.favsport", 24, true) &lt; 0) { 
   printf("error in adding index family.favsport\n"); 
flag = false; 
}`;

  const putSomeDocsCpCode = String.raw`const char *doc1 = "{\"name\":\"sachin sinha\", \"org\":\"iqlect\", \"likes\":[\"music\", \"sports\", \"movies\"], \"family\":{\"wife\":\"vijeta\", \"father\":\"k m n sinha\",\"favsport\":\"cricket\"}}";

const char *doc2 = "{\"name\":\"mukesh prasad singh\", \"org\":\"zopsmart\", \"likes\":[\"tech\", \"sports\", \"movies\"], \"family\":{\"wife\":\"julie\", \"father\":\"p prasad\",\"favsport\":\"football\"}}";

const char *doc3 = "{\"name\":\"aman thakur\", \"org\":\"google\", \"likes\":[\"investment\", \"ping pong\", \"movies\"], \"family\":{\"wife\":\"koyal\", \"father\":\"h thakur\",\"favsport\":\"cricket\"}}";

const char *doc4 = "{\"name\":\"arjun\", \"org\":\"nps\", \"likes\":[\"music\", \"video games\", \"movies\"], \"family\":{\"father\":\"Sachin Sinha\", \"mother\":\"vijeta\",\"favsport\":\"cricket\"}}";

if(t4-&gt;putDoc(doc1) &lt; 0) 
// note we are not supplying any key, in this case db will pick timestamp (in microsec) as the key 
{ 
   printf("put failed for doc1\n"); flag = false; 
} 
if(t4-&gt;putDoc(doc2) &lt; 0) { 
   printf("put failed for doc2\n"); 
   flag = false; 
} 
if(t4-&gt;putDoc(doc3) &lt; 0) { 
   printf("put failed for doc3\n");
   flag = false;
} 
if(t4-&gt;putDoc(doc4) &lt; 0) { 
   printf("put failed for doc4\n");
   flag = false;
}`;

  const defineSomeQueryCpCode = String.raw`DataQuery dq;
const char *idx_query; dq.addQuery("org", EQ, "iqlect", JO_INVALID);
// select all where org = Iqlect idx_query = dq.getQuery();
rs = NULL; // must set it to null sf.reset(); nc = 0;
printf("Scan query : select * from t4 where org = iqlect\n"); 
while(true) { 
   if((rs = t4-&gt;scanDoc(rs, NULL, NULL, idx_query, &amp;sf)) == NULL)
   // note scanDoc() here and not scan() break;
   nc += rs-&gt;count();
   while(rs-&gt;hasNext()) { 
      printf("key = %ld, val = %s\n", rs-&gt;getNextKeyLong(), rs-&gt;getNextValStr());  
      rs-&gt;moveNext();   
   }   
}   
printf("num of scanned items for table t4 (select * from t4 where org = iqlect) = %d\n", nc);`;

  const selectAllFFCpCode = String.raw`dq.reset(); dq.addQuery("family.favsport", EQ, "cricket", JO_INVALID);
idx_query = dq.getQuery();
rs = NULL;
// must set it to null sf.reset(); nc = 0;
printf("Scanning query : select * from t4 where family.favsport = cricket\n");
while(true) { 
if((rs = t4-&gt;scanDoc(rs, NULL, NULL, idx_query, &amp;sf)) == NULL) break;
nc += rs-&gt;count();
while(rs-&gt;hasNext()) { 
printf("key = %ld, val = %s\n", rs-&gt;getNextKeyLong(), rs-&gt;getNextValStr()); rs-&gt;moveNext(); 
} } 
printf("num of scanned items for table t4 (select * from t4 where family.favsport = cricket) = %d\n", nc);`;

  const countWithFilterCpCode = String.raw`printf("t4 count for filter based scan = %ld with total count = %ld\n", t4-gt;
count(NULL, NULL, idx_query, amp;sf), t4-&gt;count());`;

  const checkNOTblCpCode = String.raw`printf("num of tables in the db = %ld\n", bdb-&gt;getNumTables());
printf("does table t3 exist? ans = %s\n", bdb-&gt;doesTableExist("my_wide_table1") ? "yes" : "no");
printf("does table t1 exist? ans = %s\n", bdb-&gt;doesTableExist("normal_table") ? "yes" : "no");`;

  const getTableListCpCode = String.raw`const char *tbl_list = bdb-gt;
getTableList();
if(!tbl_list) { 
printf("tbl list is NULL\n"); flag = false;
 } else { 
printf("table list = \n%s\n", tbl_list); delete[] tbl_list;
 }`;

  const dropOrgIndexCpCode = String.raw`if(t4-&gt;dropIndex("org") lt; 0) { 
printf("drop index failed for index org\n");
flag = false;
}`;

  const putDocsAgainCpCode = String.raw`const char *doc5 = "{\"name\":\"raj\", \"org\":\"iqlect\", \"likes\":[\"music\", \"sprots\", \"movies\"], \"family\":{\"wife\":\"richa pandey\", \"father\":\"kevin\", \"mother\":\"latika\"}}";
if(t4-&gt;putDoc(doc5) &lt; 0) { 
printf("put failed for doc5\n"); flag = false;
 } 
printf("........ scan again for org index = iqlect .......\n");
dq.reset();
dq.addQuery("org", EQ, "iqlect", JO_INVALID); idx_query = dq.getQuery();
rs = NULL;
// must set it to null sf.reset();
nc = 0;
printf("Scan query - select * from t4 where org = iqlect\n");
while(true) { if((rs = t4-&gt;
scanDoc(rs, NULL, NULL, idx_query, &amp;sf)) == NULL) break;
nc += rs-&gt;count();
while(rs-&gt;hasNext()) { 
printf("key = %ld, val = %s\n", rs-&gt;getNextKeyLong(), rs-&gt;getNextValStr()); rs-&gt;moveNext();
 } } 
printf("num of scanned items for table t4 (select * from t4 where org = iqlect) = %d\n", nc);`;

  const closeTableCpCode = String.raw`if(t2-&gt;closeTable() &lt; 0) { 
printf("normal closeTable failed\n");
flag = false; }
delete t2;
// even if you don't close the table, it's a good practice to delete the table object, db won't clean this object, will just close the table`;

  const closeDBCpCode = String.raw`env-&gt;closeDatabase(bdb, CLEANCLOSE_AT_SERVER);
delete bdb;
delete env;
printf("test %s\n", flag ? "passed" : "failed"); return flag ? 0 : -1;`;

  const loadLibJCode = String.raw`System.loadLibrary("bangdb-client-java");
DBParam dbp = new DBParam(); dbp.set_port("10101");
dbp.set_host("127.0.0.1");
dbp.setTransactionType(TransactionType.DB_MULTIOPS_TRANSACTION_NONE);
BangDBEnv dbenv = new BangDBEnv(dbp);
BangDBDatabase bdb = new BangDBDatabase("mydb", dbenv, dbp);`;

  const createNormalTableJCode = String.raw`TableEnv te = new TableEnv();
te.setTableType(TableType.NORMAL_TABLE);
te.setKeySize(24);
// default key is String type, hence we can set the size of the key
BangDBTable t1 = bdb.getTable("normal_table", te, OpenType.OPENCREATE);
// Open or create if(t1 == null) { System.out.print("normal table creating failed\n"); return -1; }`;

  const getDBDescPrintJCode = String.raw`String db_desc = null;
db_desc = bdb.getStats(true);
if(db_desc == null) { 
   System.out.print("getStats for db failed\n");
   return -1; 
} else {
   System.out.print("getStats for db returns following:\n" + db_desc);
}
// we may get the table description as well 
String tbl_desc = t1.getStats(true);
if(tbl_desc == null) { 
   System.out.print("table desc failed\n"); return -1;
} else { 
   System.out.print("getStats for normal table returns following:\n" + tbl_desc);
}`;

  const putSomeKeyValueJCode = String.raw`String key = "my_key1";
String val = "my_val1";
if(t1.put(key, val.getBytes(), InsertOptions.INSERT_UNIQUE, null) &lt; 0) { 
   System.out.print("put in the normal table failed\n");
   flag = false;
} 
byte[]
ov = null;
if((ov = t1.get(key, null)) == null) { 
   System.out.print("get in the normal table failed\n");
   flag = false; 
}
else { 
   System.out.println("1. key = " + key + " val = " + new String(ov));
}`;

  const prevKeyInsertUniqueJCode = String.raw`val = "my_val1_update";
if(t1.put(key, val.getBytes(), InsertOptions.INSERT_UNIQUE, null) != 1) 
// unique put should fail here as key exists { 
   System.out.print("update in the normal table failed as it put unique data\n"); 
   flag = false; 
} 
// we may call put with INSERT_UPDATE to update the existing key 
if(t1.put(key, val.getBytes(), InsertOptions.INSERT_UPDATE, null) &lt; 0) { 
   System.out.print("update in the normal table failed as it could not update the key\n"); 
   flag = false;
}
ov = null;
if((ov = t1.get(key, null)) == null) { 
   System.out.print("get in the normal table failed\n");
   flag = false; 
} else { 
   System.out.println("1. key = " + key + " val = " + new String(ov));
}`;

  const deleteKeyJCode = String.raw`if(t1.del(key, null) &lt; 0) {
System.out.print("del in normal table failed\n");
flag = false; 
} // try to get the deleted key, you should get -1 else it's error
ov = null;
if((ov = t1.get(key, null)) != null) { 
  System.out.print("del error\n"); flag = false;
} 
if(ov != null) {
  System.out.print("get in the normal table failed as it got the deleted key\n"); 
  flag = false;
}`;

  const scanTableJCode = String.raw`ResultSet rs = null;
ScanFilter sf = new ScanFilter();
String sk = null; int nc = 0;
// since there could be large amount of data and hence we may need to
// scan multiple times in order to get the data
// therefore we need to call scan recursively
// BangDB simplifies this completely and allows user to call like following;
// Note; you may add other args as well as needed System.out.print("Scanning for table t1\n");
while(true) { 
   rs = t1.scan(rs, sk, null, sf, null);
   if(rs == null) break; nc += rs.count();
   while(rs.hasNext()) { 
      System.out.println("key = " + new String(rs.getNextKey()) + "val = " + new String(rs.getNextVal())); 
   rs.moveNext(); 
   } 
} 
System.out.println("num of scanned items for table t1 = "+ nc);`;

  const createNTLongAsKeyJCode = String.raw`te.reset();
te.setTableType(TableType.NORMAL_TABLE);
te.setKeyType(KeyType.NORMAL_KEY_LONG);
// key is long now, not String, hence key_size is not needed
BangDBTable t2 = bdb.getTable("normal_table_long", te, OpenType.OPENCREATE);
if(t2 == null) { 
   System.out.print("normal table creating failed\n");
   return -1;
}`;

  const putKeyValJCode = String.raw`long lk = 1;
val = "my_val_long1";
if(t2.put(lk, val.getBytes(), InsertOptions.INSERT_UNIQUE, null) &lt; 0) { 
   System.out.print("put in the normal table failed\n"); 
   flag = false;
}
// get the val for the given key 
ov = null;
if((ov = t2.get(lk, null)) == null) { 
   System.out.print("get in the normal table failed\n");
   flag = false;
}
else { 
   System.out.println("3. key = " + lk + " val = " + new String(ov));
}`;

  const dropTblUsingTwoJCode = String.raw`if(t1.closeTable(CloseType.CLEANCLOSE_AT_SERVER, true) &lt; 0) { 
  System.out.print("failed to drop the table t1\n");
  flag = false;
}
// check if it exists
if(bdb.doesTableExist("normal_table", 0)) {
  System.out.print("table normal_table exists after dropping it\n");
  flag = false; 
}`;

  const createWideTableJCode = String.raw`te.reset();
te.setTableType(TableType.WIDE_TABLE);
te.setKeyType(KeyType.NORMAL_KEY_LONG);
// let's use long key te.setAllowDuplicate(1);
// dupl key is allowed te.setVersionType(VersionType.BANGDB_DATA_VERSION_VALID);
// this will maintain versions, usually we should do this
BangDBTable t3 = bdb.getTable("my_wide_table1", te, OpenType.OPENCREATE);
if(t3 == null) { 
   System.out.print("wide table could not be created\n");
   return -1;
}`;

  const putFewKeyValJCode = String.raw`lk = 111;
val = "wide val 1";
if (t3.put(lk, val.getBytes(), InsertOptions.INSERT_UNIQUE, null) & lt; 0) {
   System.out.print("put for widetable failed\n");
   flag = false;
}
lk = 222;
val = "wide val 2";
if (t3.put(lk, val.getBytes(), InsertOptions.INSERT_UNIQUE, null) & lt; 0) {
   System.out.print("put for widetable failed\n");
   flag = false;
}
lk = 333;
val = "wide val 3";
if (t3.put(lk, val.getBytes(), InsertOptions.INSERT_UNIQUE, null) & lt; 0) {
   System.out.print("put for widetable failed\n");
   flag = false;
}
lk = 111;
val = "wide_val_1_up";
if (t3.put(lk, val.getBytes(), InsertOptions.INSERT_UNIQUE, null) & lt; 0) {
   System.out.print("put for widetable failed\n");
   flag = false;
}
ov = null;
if ((ov = t3.get(lk, null)) == null) {
   System.out.print("get failed for wide table\n");
   flag = false;
} else {
   System.out.println("4. key = " + lk + " val = " + new String(ov));
}`;

  const scanForKeyRangeJCode = String.raw`rs = null;
sf.reset();
nc = 0;
long lk1 = 111, lk3 = 333;
System.out.print("Scanning for table t3\n");
while (true) {
   rs = t3.scan(rs, lk1, lk3, sf, null);
   if (rs == null) break;
   nc += rs.count();
   while (rs.hasNext()) {
      System.out.println("key = " + rs.getNextKeyLong() + " val = " + new String(rs.getNextVal()));
      rs.moveNext();
   }
}
System.out.println("num of scanned items for table t3 = " + nc);
// may count number of keys as well, with or without range
System.out.println("total num of elements in t3 = " + t3.count());
long lk2 = 222;
sf.reset();
System.out.println("num of elements between lk2 and lk3 in t3 = " + t3.count(lk2, lk3, null, sf));`;

  const createNewWideTableJCode = String.raw`te.reset();
te.setAllowDuplicate(1);
te.reset();
te.setTableType(TableType.WIDE_TABLE);
te.setKeyType(KeyType.NORMAL_KEY_LONG);
te.setAllowDuplicate(1);
te.setVersionType(VersionType.BANGDB_DATA_VERSION_VALID);
BangDBTable t4 = bdb.getTable("my_wide_table2", te, OpenType.OPENCREATE);
if (t4 == null) {
   System.out.print("wide table t4 could not be created\n");
   return -1;
}`;

  const addFewIndexesJCode = String.raw`if (t4.addIndex_str("org", 16, true) & lt; 0) {
  System.out.print("error in adding index org\n");
  flag = false;
}
// this one creates an index on String type field where max size is 24 bytes
// note, it's a nested index
if (t4.addIndex_str("family.favsport", 24, true) & lt; 0) {
  System.out.print("error in adding index family.favsport\n");
  flag = false;
}`;

  const addSomeDataJCode = String.raw`String doc1 = "{\"name\":\"sachin sinha\", \"org\":\"iqlect\", \"likes\":[\"music\", \"sports\", \"movies\"], \"family\":{\"wife\":\"vijeta\", \"father\":\"k m n sinha\",\"favsport\":\"cricket\"}}";
String doc2 = "{\"name\":\"mukesh prasad singh\", \"org\":\"zopsmart\", \"likes\":[\"tech\", \"sports\", \"movies\"], \"family\":{\"wife\":\"julie\", \"father\":\"p prasad\",\"favsport\":\"football\"}}";
String doc3 = "{\"name\":\"aman thakur\", \"org\":\"google\", \"likes\":[\"investment\", \"ping pong\", \"movies\"], \"family\":{\"wife\":\"koyal\", \"father\":\"h thakur\",\"favsport\":\"cricket\"}}";
String doc4 = "{\"name\":\"arjun\", \"org\":\"nps\", \"likes\":[\"music\", \"video games\", \"movies\"], \"family\":{\"father\":\"Sachin Sinha\", \"mother\":\"vijeta\",\"favsport\":\"cricket\"}}";
if (t4.putDoc(doc1, 0, null, InsertOptions.INSERT_UNIQUE) & lt; 0)
// note we are not supplying any key, in this case db will pick timestamp (in microsec) as the key
{
   System.out.print("put failed for doc1\n");
   flag = false;
}
if (t4.putDoc(doc2, 0, null, InsertOptions.INSERT_UNIQUE) & lt; 0) {
   System.out.print("put failed for doc2\n");
   flag = false;
}
if (t4.putDoc(doc3, 0, null, InsertOptions.INSERT_UNIQUE) & lt; 0) {
   System.out.print("put failed for doc3\n");
   flag = false;
}
if (t4.putDoc(doc4, 0, null, InsertOptions.INSERT_UNIQUE) & lt; 0) {
   System.out.print("put failed for doc4\n");
   flag = false;
}`;

  const selectOrgSelectJCode = String.raw`DataQuery dq = new DataQuery();
String idx_query = null;
dq.addQuery("org", ScanOperator.EQ, "iqlect", JoinType.JO_INVALID);
// select all where org = Iqlect idx_query = dq.getQuery(); rs = null;
// must set it to null sf.reset(); nc = 0;
System.out.print("Scan query : select * from t4 where org = iqlect\n");
while (true) {
   if ((rs = t4.scanDoc(rs, 0, 0, idx_query, sf)) == null)
      // note scanDoc() here and not scan() break;
      nc += rs.count();
   while (rs.hasNext()) {
      System.out.println("key = " + rs.getNextKeyLong() + " val = " + new String(rs.getNextVal()));
      rs.moveNext();
   }
}
System.out.println("num of scanned items for table t4 (select * from t4 where org = iqlect) = " + nc);`;

  const selectFFJCode = String.raw`dq.reset();
dq.addQuery("family.favsport", ScanOperator.EQ, "cricket", JoinType.JO_INVALID);
idx_query = dq.getQuery();
rs = null;
// must set it to null sf.reset();
nc = 0; System.out.print("Scanning query : select * from t4 where family.favsport = cricket\n");
while(true) { if((rs = t4.scanDoc(rs, 0, 0, idx_query, sf)) == null)
// note scanDoc() here and not scan() break;
nc += rs.count();
while(rs.hasNext()) { 
System.out.println("key = " + rs.getNextKeyLong() + " val = " + new String(rs.getNextVal())); rs.moveNext(); 
} }
System.out.println("num of scanned items for table t4 (select * from t4 where family.favsport = cricket) = " + nc); `;

  const countForGivenQueryJCode = String.raw`System.out.println("t4 count for filter based scan = " + t4.count(null, null, idx_query, sf) + " with total count = " + t4.count());`;

  const checkTablesJCode = String.raw`System.out.println("num of tables in the db = " + bdb.getNumTables(3));
System.out.println("does table t3 exist? ans = " + bdb.doesTableExist("my_wide_table1", 0));
System.out.println("does table t1 exist? ans = " + bdb.doesTableExist("normal_table", 0));`;

  const getTableListJCode = String.raw`String tbl_list = bdb.getTableList();
if(tbl_list == null) { 
   System.out.print("tbl list is null\n");
   flag = false;
} else {
   System.out.println("table list = \n"+ tbl_list);
} `;

  const dropOrgPutValJCode = String.raw`if(t4.dropIndex("org") &lt; 0) {
   System.out.print("drop index failed for index org\n");
   flag = false;
}`;

  const putDocAgainJCode = String.raw`System.out.print("........ scan again for org index = iqlect .......\n");
dq.reset();
dq.addQuery("org", ScanOperator.EQ, "iqlect", JoinType.JO_INVALID); idx_query = dq.getQuery();
rs = null;
// must set it to null sf.reset();
nc = 0; System.out.print("Scan query - select * from t4 where org = iqlect\n");
while(true) { if((rs = t4.scanDoc(rs, 0, 0, idx_query, sf)) == null) 
// note scanDoc() here and not scan() break;
nc += rs.count(); while(rs.hasNext()) {
   System.out.println("key = " + rs.getNextKeyLong() + " val = " + new String(rs.getNextVal())); 
   rs.moveNext(); 
} } 
System.out.println("num of scanned items for table t4 (select * from t4 where org = iqlect) = " + nc);`;

  const closeTableJCode = String.raw`if(t2.closeTable(CloseType.DEFAULT_AT_SERVER, false) &lt; 0) { 
  System.out.print("normal closeTable failed\n"); flag = false;
}`;

  const closeDBJCode = String.raw`dbenv.closeDatabase(CloseType.CLEANCLOSE_AT_SERVER);
if(flag) System.out.println("test passed");
else {
  System.out.println("test failed"); return flag ? 0 : -1;
}`;

  return (
    <React.Fragment>
      <Head>
        <title>Sample Client Application for BangDB Server</title>
        <meta
          name="description"
          content="Sample client application for BangDB. It covers few basic features in simple sense, but would help user understand & build their application."
        ></meta>
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Sample Client Application for BangDB Server"
        />
        <meta
          property="og:description"
          content="Sample client application for BangDB. It covers few basic features in simple sense, but would help user understand & build their application."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="Sample Client Application for BangDB Server"
        />
        <meta
          name="twitter:description"
          content="Sample client application for BangDB. It covers few basic features in simple sense, but would help user understand & build their application."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Getting Started" url="/overview" />
        <h1 className="article-title">Sample program</h1>
        <div className="article-body">
          <h2>Sample client application for BangDB Server</h2>
          <p>
            This is just a sample client application for BangDB server. This
            sample client application for BangDB server covers few basic
            features in simple sense, but would help user understand and build
            their own application. There are follow 3 basic steps to write
            application:
          </p>
          <ol>
            <li>Get BangDB Environment and database</li>
            <li>Create tables, indexes, stream etc… and perform operations</li>
            <li>Close environment</li>
          </ol>
          <p>
            The client for BangDB is written in C/C++ and it does lot more than
            simply sending and receiving data over the tcp.
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
            <p>Let's first create the env and db object</p>
            <HighlightedCpp code={createEnvDBObjectCpCode} />
            <p>Now we need table to start the operations</p>
            <HighlightedCpp code={startOprtCpCode} />
            <p>Let's get the db description and print</p>
            <HighlightedCpp code={getDBDescPrintCpCode} />
            <p>We may get the table description as well</p>
            <HighlightedCpp code={getTableDescCpCode} />
            <p>Now let's put some data and read it</p>
            <HighlightedCpp code={putReadDataCpCode} />
            <p>
              Use the previous key with INSERT_UNIQUE flag and it should return
              1, which means key already exists
            </p>
            <HighlightedCpp code={prevKeyInsertUniqueCpCode} />
            <p>Delete the key now</p>
            <HighlightedCpp code={deleteKeyCpCode} />
            <p>Scan the table now</p>
            <HighlightedCpp code={scanTableCpCode} />
            <p>Create a normal table with long as key</p>
            <HighlightedCpp code={createNormalTableCpCode} />
            <p>Drop a table now</p>
            <p>There are two ways to do this</p>
            <ol>
              <li>Call dropTable() on BangDBDatabse</li>
              <li>
                Close the table and tell server to clean close it - I.e. delete
                everything for the table
              </li>
            </ol>
            <p>Let's drop the table using 2</p>
            <HighlightedCpp code={dropTableUsingTwoCpCode} />

            <p>
              Let's create wide table now, table that deals with json doc, but
              it can also store simple text
            </p>
            <HighlightedCpp code={createWideTableCpCode} />
            <p>Put few keys and vals and get them</p>
            <HighlightedCpp code={putFewKeysCpCode} />
            <p>
              Scan for some key range - this will recursively scan until all
              keys and values are scanned
            </p>
            <HighlightedCpp code={scanForSomeKeyRangeCpCode} />
            <p>May count number of keys as well, with or without range</p>
            <HighlightedCpp code={countNokCpCode} />
            <p>
              Try now with json doc - usually we should only put docs or
              non-docs, mixing may not be very logical, hence let's create new
              wide table
            </p>
            <HighlightedCpp code={createNewWideTableCpCode} />
            <p>Add few indexes</p>
            <HighlightedCpp code={addFewIndexesCpCode} />
            <p>Now let's put some docs</p>
            <HighlightedCpp code={putSomeDocsCpCode} />
            <p>
              Let's define some query for which we wish to scan the data, query
              selects data where “org=iqlect”
            </p>
            <HighlightedCpp code={defineSomeQueryCpCode} />
            <p>Now select all where family favsports = cricket</p>
            <HighlightedCpp code={selectAllFFCpCode} />
            <p>We can simply count with filter/query as well</p>
            <HighlightedCpp code={countWithFilterCpCode} />
            <p>Let's check number of tables in the DB</p>
            <HighlightedCpp code={checkNOTblCpCode} />
            <p>
              Get all table list and print - note you will get these tables in
              describe database or describe table api calls as well
            </p>
            <HighlightedCpp code={getTableListCpCode} />
            <p>
              Drop the “org” index and put some value and then scan using index
            </p>
            <HighlightedCpp code={dropOrgIndexCpCode} />
            <p>
              Now we can still put docs and query for index “org”, even though
              it's not there, db would still fetch the results for the query.
              Index helps the performance of query however it's not needed for
              the query
            </p>
            <HighlightedCpp code={putDocsAgainCpCode} />
            <p>
              You may close the table when done or in the end when you close
              database, all tables get closed as well
            </p>
            <HighlightedCpp code={closeTableCpCode} />
            <p>Close the db, it will close all other db resources as well</p>
            <HighlightedCpp code={closeDBCpCode} />
            <p>
              You can{" "}
              <Link
                className="external"
                href="https://bangdb.com/downloads/sample_client_app_cpp.tar.gz"
              >
                download the sample test file
              </Link>{" "}
              for BangDB and run.
            </p>
          </div>
          <div
            style={{
              display: tab === 2 ? "block" : "none",
            }}
          >
            <p>Load the lib and create the env and db</p>
            <HighlightedJava code={loadLibJCode} />
            <p>
              Let's create a normal table, note for normal table val is opaque
            </p>
            <HighlightedJava code={createNormalTableJCode} />
            <p>Let's get the db description and print</p>
            <HighlightedJava code={getDBDescPrintJCode} />
            <p>Let's put some key and value</p>
            <HighlightedJava code={putSomeKeyValueJCode} />
            <p>
              Use the previous key to INSERT_UNIQUE, it should return 1, which
              means key already exists, also when called get(), it will return
              the updated data
            </p>
            <HighlightedJava code={prevKeyInsertUniqueJCode} />
            <p>Delete the key now</p>
            <HighlightedJava code={deleteKeyJCode} />
            <p>Scan the table now</p>
            <HighlightedJava code={scanTableJCode} />
            <p>Create a normal table with long as key</p>
            <HighlightedJava code={createNTLongAsKeyJCode} />
            <p>Put key val</p>
            <HighlightedJava code={putKeyValJCode} />
            <p>Drop a table now</p>
            <p>There are two ways to do this:</p>
            <ol>
              <li>Call dropTable() on BangDBDatabse</li>
              <li>
                Close the table and tell server to clean close it - I.e. delete
                everything for the table
              </li>
            </ol>
            <p>Let's drop the table using 2</p>
            <HighlightedJava code={dropTblUsingTwoJCode} />
            <p>
              Let's create wide table now, table that deals with json doc, but
              it can also store simple text
            </p>
            <HighlightedJava code={createWideTableJCode} />
            <p>Put few keys and vals</p>
            <HighlightedJava code={putFewKeyValJCode} />
            <p>
              Scan for some key range - this will recursively scan until all
              keys and values are scanned
            </p>
            <HighlightedJava code={scanForKeyRangeJCode} />
            <p>
              Try now json doc - usually we should only put docs or non-docs,
              mixing may not be very logical
            </p>
            <p>Hence let's create new wide table</p>
            <HighlightedJava code={createNewWideTableJCode} />
            <p>Let's add few indexes as well</p>
            <p>
              This one creates an index on String type field where max size is
              16
            </p>
            <HighlightedJava code={addFewIndexesJCode} />
            <p>Let's add some data</p>
            <HighlightedJava code={addSomeDataJCode} />
            <p>
              Let's define some query for which we wish to scan the data. Let's
              use the query select * from t4 where “org” = “iqlect”
            </p>
            <HighlightedJava code={selectOrgSelectJCode} />
            <p>Now select all where family favsports = cricket</p>
            <HighlightedJava code={selectFFJCode} />
            <p>We can also count for the given query</p>
            <HighlightedJava code={countForGivenQueryJCode} />
            <p>Now, let's just check the tables</p>
            <HighlightedJava code={checkTablesJCode} />
            <p>
              Get all table list and print - note you will get these tables in
              describe database or describe table api calls as well
            </p>
            <HighlightedJava code={getTableListJCode} />
            <p>
              Drop the “org” index and put some value and then scan using index
            </p>
            <HighlightedJava code={dropOrgPutValJCode} />
            <p>
              Now we put the doc again, and search using same index and even
              though the index is deleted, db will still fetch the data for
              query that involves the index.
            </p>
            <aside className="doc-note">
              <strong>Note: </strong>Index is not needed for query to be
              successful, however index improves the performance significantly
            </aside>
            <HighlightedJava code={putDocAgainJCode} />
            <p>
              You may close the table when done or in the end when you close
              database, all tables get closed as well
            </p>
            <HighlightedJava code={closeTableJCode} />
            <p>
              To close the db, simply call the closeDatabase(), this clears
              every other resources in the db
            </p>
            <HighlightedJava code={closeDBJCode} />
            <p>
              You can{" "}
              <Link
                className="external"
                href="https://bangdb.com/downloads/sample_client_app_cpp.tar.gz"
              >
                download the sample test file
              </Link>{" "}
              for BangDB and run.
            </p>
          </div>
        </div>
      </DocArticle>
    </React.Fragment>
  );
}
