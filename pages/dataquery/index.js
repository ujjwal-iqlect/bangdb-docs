import React, { useState } from "react";
import Head from "next/head";
import Breadcrumb from "../../components/Breadcrumb";
import HighlightedCpp from "../../components/HighlightedCpp";
import HighlightedJava from "../../components/HighlightedJava";
import Link from "next/link";

export default function DataQuery() {
  const [tab, setTab] = useState(1);

  const typicalWayToCallScanFunctionCode = String.raw`ScanFilter sf = new ScanFilter();
ResultSet rs = null;
while (true) {
   rs = tbl.scan(rs, pk1, pk2, sf);
   if (rs == null) break;
   while (rs.hasNext()) {
      // use rs 
      rs.getNextkey(),
      rs.getNextVal()
      rs.moveNext();
   }
}`;

  const scanFilterIsDefinedAsCode = String.raw`// ScanFiler is defined as
  
public ScanOperator skeyOp;
public ScanOperator ekeyOp;
public ScanLimitBy limitBy;
public int limit;
public int skipCount;
public int onlyKey;
public int reserved;`;

  const scanOperatorIsDefinedAsCode = String.raw`// ScanOperator is defined as below

  GT, // greater than
  GTE, // greater than equal to
  LT, // less than
  LTE, // less than equal to
  EQ, // equal to
  NE; // not equal to The ScanOperator is always applied to primary keys only and not the secondary keys.`;

  const scanAPIforNormalTblCode = String.raw`public ResultSet scan( ResultSet prev_rs,
  String pk_skey,
  String pk_ekey,
  ScanFilter sf,
  Transaction txn
)`;

  const scanAPIforWideTblCode = String.raw`public ResultSet scanDoc( ResultSet prev_rs,
  String pk_skey,
  String pk_ekey,
  String idx_filter_json,
  ScanFilter sf
)`;

  const sampleEventCode = String.raw`{
  "name":"sachin",
  "org":"bangdb",
  "address":{
     "home":{
        "city":"bangalore",
        "state":"ka",
        "pin":560034
     },
     "office":{
        "city":"bangalore",
        "state":"ka",
        "pin":560095
     }
  },
  "fav-qoute":"The happiness of your life depends on the quality of your thoughts"
}`;

  const multipleWaysToQueryCode = String.raw`query1 = using "name",  ex; where "name" = "sachin" etc...
query2 = using  "address.home.city" = "bangalore"
query3 = using match text, like "quality, thought"
// [ Note, we use reverse index here, search with list of tokens ]
// and so on...`;

  const cityNameAndCityOrgNameCode = String.raw`city:name 
//or
city:org:name
//etc.`;

  const queryFourCode = String.raw`query4 = find all docs where city could be any city but name is "sachin"; 
//here we may use
*:sachin`;

  const queryFiveCode = String.raw`*:bangdb:* [ using city:org:name as key arrangement ]
query5 = find all the doc where home.city is equal to office.city home.city = $office.city`;

  const addQueryCppCode = String.raw`void addQuery(
  const char *filterKey, 
  ScanOperator comp_op, 
  const char *filterVal, 
  JoinOperator jOp = JO_AND
);`;

  const addFilterQueryJavaCode = String.raw`public void addQueryFilter(String filterKey, ScanOperator cmpOp, String filterVal, JoinType joinOp)
public void addQueryFilter(String filterKey, ScanOperator cmpOp, long filterVal, JoinType joinOp)
public void addQueryFilter(String filterKey, ScanOperator cmpOp, double filterVal, JoinType joinOp) `;
  return (
    <React.Fragment>
      <Head>
        <title>Query in BangDB</title>
        <meta
          name="description"
          content="For scanning data in BangDB, we may use primary key based scan / query or secondary key based scan / query or reversed scan or all together."
        ></meta>
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Query in BangDB" />
        <meta
          property="og:description"
          content="For scanning data in BangDB, we may use primary key based scan / query or secondary key based scan / query or reversed scan or all together."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="Query in BangDB" />
        <meta
          name="twitter:description"
          content="For scanning data in BangDB, we may use primary key based scan / query or secondary key based scan / query or reversed scan or all together."
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
              <h1 className="article-title">Query in BangDB</h1>
              <div className="article-body">
                <h2>Filter for scan and data retrieval in BangDB</h2>
                <p>
                  For scanning data in BangDB, we may use primary key based scan
                  or secondary key based scan or text key(reversed) based scan
                  or all of these together. This makes the data scan a very
                  robust and flexible process. To help users to deal with
                  definition of these queries, we use dataQuery type. It&apos;s
                  not required that we use this type, we could simply write the
                  query in json form and operate.
                </p>
                <p>
                  Scan always returns resultset, which is nothing but an
                  iterable list of key, val which allows certain operations as
                  well. This list defined by type resultset.
                </p>
                <p>
                  Scan may return NULL as well if error is encountered, hence
                  user has to handle NULL as well. Since table or stream may
                  contain large amount of data, hence it will not be able to
                  return all of them at once, hence it will keep returning as
                  required or called by the user.
                </p>
                <p>
                  User may set the limits as well and certain other conditions
                  for filtering. These affect the way data is retrieved and also
                  amount of data is retrieved, both in terms of number of rows
                  or size of the data. It is defined by ScanFilter.
                </p>
                <HighlightedJava code={scanFilterIsDefinedAsCode} />
                <HighlightedJava code={scanOperatorIsDefinedAsCode} />
                <p>
                  For secondary keys, we use dataQuery which is defined below
                  ScanLimitBy is used to limit the size of the data that should
                  be retrieved in a single call <code>LIMIT_RESULT_SIZE</code>.
                </p>
                <ul>
                  <li>
                    limit by size, it takes integer which is in MB{" "}
                    <code>LIMIT_RESULT_ROW</code>
                  </li>
                  <li>limit by the number of rows OnlyKey is 0</li>
                </ul>
                <p>
                  If we wish to retrieve both key and value, else 1 for only
                  key.
                </p>
                <aside className="doc-note">
                  <strong>Note: </strong>
                  We overload this for special scenario for composite index,
                  discussed later ] reserved is also not used most of the time,
                  however, we may leverage this in some cases, as described
                  later.
                </aside>
                <p>
                  Once we call scan, then it may return partial data and hence
                  we need to keep calling this as needed to get all the data.
                  Here is sample pseudo code for calling scan. Typical way to
                  call scan function is as follows:
                </p>
                <HighlightedCpp code={typicalWayToCallScanFunctionCode} />
                <p>
                  This will allow user to retrieve the data. If user wishes to
                  break before data retrieval is done, then user will have to
                  clear the rs by calling.
                </p>
                <HighlightedCpp code={"rs.clear();"} />
                <h2>Scan API</h2>
                <p>
                  Let&apos;s look at the typical scan API in the BangDB. It has
                  following signatures:
                </p>
                <p>For non-json data, i.e. text or opaque data.</p>
                <p>
                  Applicable or exposed by <code>BangDBTable</code>.
                </p>
                <p>
                  For <code>NORMAL_TABLE</code>:
                </p>
                <HighlightedJava code={scanAPIforNormalTblCode} />
                <p>
                  The same is supported for long and byte[] <code>pk_skey</code>{" "}
                  and <code>pk_ekey</code> as well.
                </p>
                <p>For document or json data scan:</p>
                <p>
                  For <code>WIDE_TABLE</code>:
                </p>
                <HighlightedJava code={scanAPIforWideTblCode} />
                <p>
                  The same is supported for long and byte[] <code>pk_skey</code>{" "}
                  and <code>pk_ekey</code> as well. This one has one extra
                  argument, <code>idx_filter_scan</code>, and this is used for
                  querying using keys other than primary keys.
                </p>
                <p>
                  For <code>NORMAL_TABLE</code> or for <code>scan()</code>,
                  it&apos;s straight forward as we can only use primary keys
                  there. When we wish to scan entire table then we may pass null
                  for <code>pk_skey</code> and <code>pk_ekey</code> for non long
                  type. For long we may use 0 and <code>LONG_MAX_VAL</code>
                </p>
                <p>
                  For <code>WIDE_TABLE</code> or non-primary key based scan, we
                  have detailed discussed below.
                </p>
                <h2>Non primary key based scan</h2>
                <p>
                  Apart from primary keys, we can use secondary and
                  text(reverse) keys to query data. If we create indexes on
                  these secondary keys then it will boost performance but the
                  index is not required for querying data using these secondary
                  non-primary keys. However, it&apos;s highly recommended to
                  strategically create these secondary, reverse indexes for high
                  performance and efficient query.
                </p>
                <p>
                  Now, let&apos;s see what&apos;s these secondary keys are.
                  Let&apos;s consider a sample event or doc/data.
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
                <p>
                  Here is a sample program which does most of the operations to
                  help you understand the APIs and their usage.
                </p>
                <HighlightedCpp code={sampleEventCode} />
                <p>
                  As you see, there could be multiple ways to query here, few
                  examples are:
                </p>
                <HighlightedCpp code={multipleWaysToQueryCode} />
                <p>
                  Further we may wish to organize a key in composite manner for
                  the suitability of use cases Here in this doc, we have primary
                  key as long, string or composite and then query using primary
                  key in interesting ways; While long, opaque and string primary
                  keys are fine, composite key is quite interesting and useful
                  in many scenarios; Let&apos;s say we wish to have primary key
                  as composite key with following arrangement:
                </p>
                <HighlightedCpp code={cityNameAndCityOrgNameCode} />
                <p>
                  Now we have quite flexibility in querying in different manner:
                </p>
                <HighlightedCpp code={queryFourCode} />
                <p>Or name has &quot;sac&quot; as initial characters</p>
                <HighlightedCpp
                  code={
                    " *:sac$% [ $% means match everything before these chars but after ':' ]"
                  }
                />
                <p>
                  Or any city and any name as long as org is &quot;bangdb&quot;
                </p>
                <HighlightedCpp code={queryFiveCode} />
                <p>
                  This allows users to scan with data present in the doc itself
                  (helpful in stream). See the next section for example code.
                </p>
                <h2>DataQuery Type API for client</h2>
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
                  <p>Create DataQuery object</p>
                  <HighlightedCpp code={"DataQuery();"} />
                  <p>To add a query when filter value is string</p>
                  <HighlightedCpp code={addQueryCppCode} />
                  <p>To add a query when filter value is long</p>
                  <HighlightedCpp
                    code={
                      "void addQuery(const char *filterKey, ScanOperator comp_op, long filterVal, JoinOperator jOp = JO_AND);"
                    }
                  />
                  <p>To add a query when filter value is double</p>
                  <HighlightedCpp
                    code={
                      "void addQuery(const char *filterKey, ScanOperator comp_op, double filterVal, JoinOperator jOp = JO_AND);"
                    }
                  />
                  <p>To add a query when filter values are list of words</p>
                  <HighlightedCpp
                    code={
                      "void addQuery(const char *matchWordList, JoinOperator wordJoin, JoinOperator queryJoin, const char *field);"
                    }
                  />
                  <p>To get QueryType</p>
                  <HighlightedCpp code={"void setQueryType(int type);"} />
                  <p>To get the query</p>
                  <HighlightedCpp code={"const char *getQuery();"} />
                  <p>
                    User should delete the returned data using delete[] To print
                    query
                  </p>
                  <HighlightedCpp code={"void printQuery();"} />
                  <p>To delete DataQuery object</p>
                  <HighlightedCpp code={"virtual ~DataQuery();"} />
                  <p>
                    Please see <Link href={"/bangdb-table-api"}>Table API</Link>{" "}
                    for details on Scan API
                  </p>
                </div>
                <div
                  style={{
                    display: tab === 2 ? "block" : "none",
                  }}
                >
                  <p>To add a query when filter values are string</p>
                  <HighlightedJava
                    code={
                      "public void addQuery(String filterKey, ScanOperator cmpOp, String filterVal, JoinType joinOp)"
                    }
                  />
                  <p>To add a query when filter values are long</p>
                  <HighlightedJava
                    code={
                      "public void addQuery(String filterKey, ScanOperator cmpOp, long filterVal, JoinType joinOp)"
                    }
                  />
                  <p>To add a query when filter value is double</p>
                  <HighlightedJava
                    code={
                      "public void addQuery(String filterKey, ScanOperator cmpOp, double filterVal, JoinType joinOp)"
                    }
                  />
                  <p>To add filter Query</p>
                  <HighlightedJava code={addFilterQueryJavaCode} />
                  <p>To get the query</p>
                  <HighlightedJava code={"public String getQuery()"} />
                  <p>
                    Please see <Link href={"/bangdb-table-api"}>Table API</Link>{" "}
                    for details on Scan API
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
