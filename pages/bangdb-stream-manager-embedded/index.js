import React, { useState } from "react";
import Head from "next/head";
import Breadcrumb from "../../components/Breadcrumb";
import HighlightedCpp from "../../components/HighlightedCpp";
import HighlightedJava from "../../components/HighlightedJava";

export default function BangDBStreamManagerEmbedded() {
  const [tab, setTab] = useState(1);

  return (
    <React.Fragment>
      <Head>
        <title>Stream Manager (Embedded) - BangDB</title>
        <meta
          name="description"
          content="Learn more about BangDB Stream Manager (Embedded). Read the documentation to learn to make embedded applications using BangDB."
        ></meta>
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Stream Manager (Embedded) - BangDB"
        />
        <meta
          property="og:description"
          content="Learn more about BangDB Stream Manager (Embedded). Read the documentation to learn to make embedded applications using BangDB."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="Stream Manager (Embedded) - BangDB"
        />
        <meta
          name="twitter:description"
          content="Learn more about BangDB Stream Manager (Embedded). Read the documentation to learn to make embedded applications using BangDB."
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
              <h1 className="article-title">Stream Manager (Embedded)</h1>
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
                    code={`static BangDBStreamManager *getInstance(BangDBDatabase *bdb, BangDBMLHelper *bmlh);`}
                  />
                  <p>
                    To get instance of BangDBStreamManager. It takes BangDB
                    Database as parameter and also BangDBMLHelper as input
                    parameter. The BangDBMLHelper could be NULL in case we
                    don&apos;t wish to train and predict on streams. When
                    successful it returns the instance of the stream manager,
                    else NULL for error.
                  </p>
                  <HighlightedCpp
                    code={`char *registerSchema(const char *schema_json);`}
                  />
                  <p>
                    BangDB stream works on schema of the set of streams or what
                    we call app. We need to pass the app here which is in json
                    format. It returns json string with error code as 0 for
                    success else -1 for error. It also contains reason for
                    failure when it fails. The app / schema details are covered
                    in the stream section.
                  </p>
                  <HighlightedCpp
                    code={`char *deregisterSchema(const char *schema_name);`}
                  />
                  <p>
                    To de-register an app or schema, simply pass the name of the
                    schame and it will return json string with errcode as 0 for
                    success or -1 for error. It also contains reason for failure
                    when it fails. The app / schema details are covered in the
                    stream section.
                  </p>

                  <HighlightedCpp
                    code={`char *addStreams(long schemaid, const char *streams);`}
                  />
                  <p>
                    This is helpful when we wish to add streams in the existing
                    schema or app. The streams input here is json string that
                    contains array of streams to be added. It takes schemaid as
                    input for which the set of streams to be added. It returns
                    json string with errcode as 0 for success or -1 for error.
                    It also contains reason for failure when it fails. The app /
                    schema details are covered in the stream section.
                  </p>
                  <HighlightedCpp
                    code={`// streams
{\"schema\":\"myschema\", \"streams\":[{\"name\":\"mystream\"}]}
char *deleteStreams(long schemaid, const char *streams);`}
                  />
                  <p>
                    This deletes the set of streams defined in the streams json
                    containing names of the streams. It takes schemaid as input
                    for which the set of streams to be deleted. It returns json
                    string with errcode as 0 for success or -1 for error. It
                    also contains reason for failure when it fails. The app /
                    schema details are covered in the stream section.
                  </p>
                  <HighlightedCpp
                    code={`char *addUdfs(long schema_id, const char *udfs);`}
                  />
                  <p>
                    The stream manager may leverage user defined functions for
                    many computing as defined in the schema. Using this API, one
                    can add udfs for given scheamid. It returns json string with
                    errcode as 0 for success or -1 for error. It also contains
                    reason for failure when it fails. The know more about udf,
                    please see the udf section.
                  </p>
                  <HighlightedCpp
                    code={`char *delUdfs(long schema_id, const char *udfs);`}
                  />
                  <p>
                    This API can delete udfs for given scheamid. It returns json
                    string with errcode as 0 for success or -1 for error. It
                    also contains reason for failure when it fails. The know
                    more about udf, please see the udf section.
                  </p>
                  <HighlightedCpp
                    code={`char *put(long schemaid, long streamid, const char *doc);`}
                  />
                  <p>
                    To put event into the stream manager, this api is used. The
                    event is the doc (json document) and schemaid, streamid
                    define the stream for which the event should be put. It
                    returns json string with errcode as 0 for success or -1 for
                    error. It also contains reason for failure when it fails.
                    Please see stream section to know more about events.
                  </p>
                  <HighlightedCpp
                    code={`char *put(long schemaid, long streamid, FDT *k, FDT *v);`}
                  />
                  <p>
                    This is to simply put the document into any given stream for
                    a given schema. Please note there is no stream or event
                    processing that takes place for this api. This is similar to
                    table API. It returns json string with errcode as 0 for
                    success or -1 for error. It also contains reason for failure
                    when it fails.
                  </p>
                  <HighlightedCpp
                    code={`int get(long schemaid, long streamid, FDT *key, FDT **val);`}
                  />
                  <p>
                    This is to simply get the document from any given stream for
                    a give schema. This is similar to table api. It returns json
                    string with errcode as 0 for success or -1 for error. It
                    also contains reason for failure when it fails.
                  </p>
                  <HighlightedCpp
                    code={`ResultSet *scanDoc(
   long schemaid, 
   long streamid,
   ResultSet *prev_rs,
   FDT *k1 = NULL,
   FDT *k2 = NULL,
   const char *idx_filter_json = NULL,
   scan_filter *sf = NULL
);`}
                  />
                  <p>
                    This is to scan the stream for given filters. This is very
                    similar to the table API. It just takes additional schemaid
                    and streamid to identify the given stream.
                  </p>
                  <HighlightedCpp
                    code={`ResultSet *scanProcDoc(
   long schemaid, 
   long streamid, 
   const char *attr_names_json, 
   ResultSet *prev_rs, 
   scan_filter *sf = NULL
);`}
                  />
                  <p>
                    This is to scan aggregate, grouby and entity streams. The{" "}
                    <code>attr_names_json</code> defines what to do and for whom
                    this API is being called. The structure of the json is as
                    follows:
                  </p>
                  <HighlightedCpp
                    code={`for aggr = query_json = {"proc-type": 6,"attrs":["a", "b", ...], "option" : 1, "skey:"sk", "ekey":"ek", "rollup":1}`}
                  />
                  <HighlightedCpp
                    code={`for entity = query_json = {"proc-type": 6,"attrs":["a", "b", ...], "option" : 1, "skey:"sk", "ekey":"ek", "enty-stream-id":1234}`}
                  />
                  <HighlightedCpp
                    code={`for gpby = query_json = {"attrs":["a", "b", ...], "option" : 1, "skey:"sk", "ekey":"ek", "gpby-val":"x", "gpby-name":"a1_b2_c3", "gpby-attrid":123}`}
                  />
                  <HighlightedCpp
                    code={`for gpby if gpby-attrid is provided then "attrs", "gpby-val", "gpby-name" not required, basically last 3 are to compute "gpby-attrid" only`}
                  />
                  <HighlightedCpp
                    code={`enum BANGDB_STREAM_TYPE {
    BANGDB_STREAM_TYPE_NORMAL = 1, // defined in the schema 
    BANGDB_STREAM_TYPE_FILTER, // defined in the schema 
    BANGDB_STREAM_TYPE_JOINED, // defined in the schema 
    BANGDB_STREAM_TYPE_ENTITY, // defined in the schema 
    BANGDB_STREAM_TYPE_GPBY, // not explicitly defined in the schema 
    BANGDB_STREAM_TYPE_AGGR, // not explicitly defined in the schema 
    BANGDB_STREAM_TYPE_INVALID
};`}
                  />
                  <p>
                    only <code>BANGDB_STREAM_TYPE_ENTITY</code>,{" "}
                    <code>BANGDB_STREAM_TYPE_GPBY</code> and{" "}
                    <code>BANGDB_STREAM_TYPE_AGGR</code> are supported For aggr,
                    we can also define rollup (1 means ON 0 means OFF) It
                    returns ResultSet for success or NULL for error. Please see
                    stream section to get more info on these.
                  </p>
                  <HighlightedCpp
                    code={`long getGpbyName(long schemaid, long streamid, const char *gpby_attr_list, char **out_json);`}
                  />
                  <p>
                    Groupby name is mangled by the stream manager. Therefore to
                    get the actual name, we can call this API. The{" "}
                    <code>gpby_attr_list</code> provides the necessary
                    information for the computation of the name. It looks
                    something like this:
                  </p>
                  <HighlightedCpp
                    code={`gpby_attr_list = {"attrs":["a1", "b2", "c3"], "gpby-val":"x", "gpby-name":"a1_b2_c3", "gpby-attrid":123}`}
                  />
                  <p>
                    If <code>gpby-attrid</code> field is already present, it
                    returns same long value with NULL in <code>out_json</code>.
                    It returns 0 for success and -1 for error. Please see stream
                    section to get more info on these.
                  </p>
                  <HighlightedCpp
                    code={`long count(long schemaid, long streamid);`}
                  />
                  <p>
                    This returns count of events for given schema and stream
                    ids, else -1 for error.
                  </p>
                  <HighlightedCpp
                    code={`long getSchemaid(const char *schema_name, bool check_valid = true);`}
                  />
                  <p>
                    This returns schemaid for the given schema_name. If{" "}
                    <code>check_valid</code> is false then it will return
                    potential name else the actual existing name. For success it
                    returns the id else -1 for error.
                  </p>
                  <HighlightedCpp
                    code={`long getStreamid(const char *schema_name, const char *stream_name, bool check_valid = true);`}
                  />
                  <p>
                    This returns streamid for the given schema_name and
                    stream_name. If check_valid is false then it will return
                    potential name else the actual existing name. For success it
                    returns the id else -1 for error.
                  </p>
                  <HighlightedCpp
                    code={`char *getSchemaStr(const char *schema_name);`}
                  />
                  <p>
                    This returns the entire schema or app json else errcode as
                    -1 with the reason for failure.
                  </p>
                  <HighlightedCpp
                    code={`char *getSchemaFromMetadata(const char *schema_name);`}
                  />
                  <p>
                    This returns the entire schema or app json else errcode as
                    -1 with the reason for failure. Please note this is same as
                    previous API, except it reads from table and then returns
                    whereas previous API will return from the cache.
                  </p>
                  <HighlightedCpp
                    code={`char *getSchemaDepGraph(long schema_id, bool bfs = true);`}
                  />
                  <p>
                    The schema is structured as graph within the stream manager.
                    This api will return the graph for the given schema. The bfs
                    defines breadth first travel if set as true and it will use
                    dfs (depth first). As of now only bfs as true is supported.
                    Upon error it will return json string with errcode as -1
                    with the reasons for failure. Please see stream section to
                    know more on the graph.
                  </p>
                  <HighlightedCpp
                    code={`char *getStreamDepGraph(long schema_id, long stream_id, bool only_dep = false);`}
                  />
                  <p>
                    This API will return the graph for the given stream for a
                    schema.
                    <code>only_dep = true</code> means return the depth part
                    else returns the node information. Upon error it will return
                    json string with errcode as -1 with the reasons for failure.
                    Please see stream section to know more on the graph.
                  </p>
                  <HighlightedCpp
                    code={`void closeBangDBStreamManager(bool force = false);`}
                  />
                  <p>
                    This will close the stream manager. Please note if force is
                    set to be false then it will simply reduce the reference
                    count and if the count is 0 then it will close the stream
                    manager. But if force is set to be as false then it will
                    simply close the stream manager irrespective of how many
                    references are there or not.
                  </p>
                </div>
                <div
                  style={{
                    display: tab === 2 ? "block" : "none",
                  }}
                >
                  <HighlightedJava
                    code={`public BangDBStreamManager(BangDBDatabase bdb)`}
                  />
                  <p>
                    To get instance of bangdb_stream_manager. It takes
                    bangdb_database as parameter.
                  </p>
                  <HighlightedJava
                    code={`public String registerSchema(String schema_json)`}
                  />
                  <p>
                    BangDB stream works on schema of the set of streams or what
                    we call app. We need to pass the app here which is in json
                    format. It returns json string with error code as 0 for
                    success else -1 for error. It also contains reason for
                    failure when it fails. The app / schema details are covered
                    in the stream section.
                  </p>
                  <HighlightedJava
                    code={`public String deregisterSchema(String schema_name)`}
                  />
                  <p>
                    To de-register an app or schema, simply pass the name of the
                    schame and it will return json string with errcode as 0 for
                    success or -1 for error. It also contains reason for failure
                    when it fails. The app / schema details are covered in the
                    stream section.
                  </p>
                  <HighlightedJava
                    code={`public String addStreams(long schemaid, String streams)`}
                  />
                  <p>
                    This is helpful when we wish to add streams in the existing
                    schema or app. The streams input here is json string that
                    contains array of streams to be added. It takes schemaid as
                    input for which the set of streams to be added. It returns
                    json string with errcode as 0 for success or -1 for error.
                    It also contains reason for failure when it fails. . The
                    app/ schema details are covered in the stream section.
                  </p>
                  <HighlightedJava
                    code={`public String deleteStreams(long schemaid, String streams)`}
                  />
                  <p>
                    This deletes the set of streams defined in the streams json
                    containing names of the streams. It takes schemaid as input
                    for which the set of streams to be deleted. It returns json
                    string with errcode as 0 for success or -1 for error. It
                    also contains reason for failure when it fails. The app /
                    schema details are covered in the stream section.
                  </p>
                  <HighlightedJava
                    code={`public int getSchemaDDLState(long schemaid)`}
                  />
                  <p>
                    This returns if the schema is currently ready for taking
                    events. It returns the 1 if it&apos;s not ready and 0 if
                    ready.
                  </p>
                  <HighlightedJava
                    code={`public long getSchemaid(String schema_name, boolean check_valid)`}
                  />
                  <p>
                    This returns schemaid for the given schema_name. If{" "}
                    <code>check_valid</code> is false then it will return
                    potential name else the actual existing name. . For success
                    it returns the id else -1 for error.
                  </p>
                  <HighlightedJava
                    code={`public long getStreamid(String schema_name, String stream_name, boolean check_valid)`}
                  />
                  <p>
                    This returns streamid for the given schema_name and
                    stream_name. If check_valid is false then it will return
                    potential name else the actual existing name. For success it
                    returns the id else -1 for error.
                  </p>
                  <HighlightedJava
                    code={`public String put(long schemaid, long streamid, String doc)`}
                  />
                  <p>
                    To put event into the stream manager, this api is used. The
                    event is the doc (json document) and schemaid, streamid
                    define the stream for which the event should be put. It
                    returns json string with errcode as 0 for success or -1 for
                    error. It also contains reason for failure when it fails.
                    Please see stream section to know more about events.
                  </p>
                  <HighlightedJava
                    code={`public String put(long schemaid, long streamid, long k, String v)`}
                  />
                  <p>
                    This is to simply put the document into any given stream for
                    a give schema. Please note there is no stream or event
                    processing that takes place for this api. This is similar to
                    table API. It returns json string with errcode as 0 for
                    success or -1 for error. It also contains reason for failure
                    when it fails.
                  </p>
                  <HighlightedJava
                    code={`public String get(long schemaid, long streamid, long k)`}
                  />
                  <p>
                    This is to simply get the document from any given stream for
                    a give schema. This is similar to table API. It returns json
                    string with errcode as 0 for success or -1 for error. It
                    also contains reason for failure when it fails.
                  </p>
                  <HighlightedJava
                    code={`public ResultSet scanDoc(
  long schemaid,
  long streamid,
  ResultSet prev_rs,
  long k1,
  long k2,
  String idx_filter_json,
  ScanFilter sf
)`}
                  />
                  <p>
                    This is to scan the stream for given filters. This is very
                    similar to the table API. It just takes additional schemaid
                    and streamid to identify the given stream.
                  </p>
                  <HighlightedJava
                    code={`public ResultSet scanProcDoc(
  long schemaid,
  long streamid,
  String attr_names_json,
  ResultSet prev_rs,
  ScanFilter sf
)`}
                  />
                  <p>
                    This is to scan aggregate, grouby and entity streams. The
                    <code>attr_names_json</code> defines what to do and for whom
                    this API is being called. The structure of the json is as
                    follows:
                  </p>
                  <HighlightedJava
                    code={`for aggr = query_json = {"proc-type": 6,"attrs":["a", "b", ...], "option" : 1, "skey:"sk", "ekey":"ek", "rollup":1}`}
                  />
                  <HighlightedJava
                    code={`for entity = query_json = {"proc-type": 6,"attrs":["a", "b", ...], "option" : 1, "skey:"sk", "ekey":"ek", "enty-stream-id":1234}`}
                  />
                  <HighlightedJava
                    code={`for gpby = query_json = {"attrs":["a", "b", ...], "option" : 1, "skey:"sk", "ekey":"ek", "gpby-val":"x", "gpby-name":"a1_b2_c3", "gpby-attrid":123}`}
                  />
                  <p>
                    for gpby if <code>gpby-attrid</code> is provided then
                    &quot;attrs&quot;, &quot;gpby-val&quot;,
                    &quot;gpby-name&quot; not required, basically last 3 are to
                    compute &quot;gpby-attrid&quot; only.
                  </p>
                  <HighlightedJava
                    code={`enum BANGDB_STREAM_TYPE {
   BANGDB_STREAM_TYPE_NORMAL = 1, // defined in the schema
   BANGDB_STREAM_TYPE_FILTER, // defined in the schema
   BANGDB_STREAM_TYPE_JOINED, // defined in the schema
   BANGDB_STREAM_TYPE_ENTITY, // defined in the schema
   BANGDB_STREAM_TYPE_GPBY, // not explicitly defined in the schema
   BANGDB_STREAM_TYPE_AGGR, // not explicitly defined in the schema
   BANGDB_STREAM_TYPE_INVALID
};`}
                  />

                  <p>
                    Only <code>BANGDB_STREAM_TYPE_ENTITY</code>,{" "}
                    <code>BANGDB_STREAM_TYPE_GPBY</code> and{" "}
                    <code>BANGDB_STREAM_TYPE_AGGR</code> are supported. For
                    aggr, we can also define rollup (1 means ON 0 means OFF) It
                    returns resultset for success or NULL for error.
                  </p>
                  <HighlightedJava
                    code={`public String getGpbyName(long schemaid, long streamid, String gpby_attr_list)`}
                  />
                  <p>
                    Groupby name is mangled by the stream manager. Therefore to
                    get the actual name, we can call this API. The{" "}
                    <code>gpby_attr_list</code> provides the necessary
                    information for the computation of the name. It looks
                    something like this:
                  </p>
                  <HighlightedJava
                    code={`gpby_attr_list = {"attrs":["a1", "b2", "c3"], "gpby-val":"x", "gpby-name":"a1_b2_c3", "gpby-attrid":123}`}
                  />
                  <p>
                    If <code>gpby-attrid field</code> is already present, it
                    returns same long value with NULL in <code>out_json</code>.
                    It returns 0 for success and -1 for error. Please see stream
                    section to get more info on these.
                  </p>
                  <HighlightedJava
                    code={`public long getGpbyId(long schemaid, long streamid, String gpby_attr_list)`}
                  />
                  <p>
                    This API is similar to <code>getGpbyName</code> except that
                    it returns <code>gpbyId</code> or -1 for error.
                  </p>
                  <HighlightedJava
                    code={`public long count(long schemaid, long streamid)`}
                  />
                  <p>
                    This returns count of events for given schema and stream
                    ids, else -1 for error.
                  </p>
                  <HighlightedJava
                    code={`public String addUdfs(long schema_id, String udfs)`}
                  />
                  <p>
                    The stream manager may leverage user defined functions for
                    many computing as defined in the schema. Using this API, one
                    can add udfs for given scheamid. It returns json string with
                    errcode as 0 for success or -1 for error. It also contains
                    reason for failure when it fails. The know more about udf,
                    please see the udf section.
                  </p>
                  <HighlightedJava
                    code={`public String delUdfs(long schema_id, String udfs)`}
                  />
                  <p>
                    This API can delete udfs for given scheamid. It returns json
                    string with errcode as 0 for success or -1 for error. It
                    also contains reason for failure when it fails. The know
                    more about udf, please see the udf section.
                  </p>
                  <HighlightedJava
                    code={`public String getSchemaDepGraph(long schema_id, boolean bfs)`}
                  />
                  <p>
                    The schema is structured as graph within the stream manager.
                    This api will return the graph for the given schema. The bfs
                    defines breadth first travel if set as true and it will use
                    dfs (depth first). As of now only bfs as true is supported.
                    Upon error it will return json string with errcode as -1
                    with the reasons for failure. Please see stream section to
                    know more on the graph.
                  </p>
                  <HighlightedJava
                    code={`public String getStreamDepGraph(long schema_id, long stream_id, boolean only_dep)`}
                  />
                  <p>
                    This API will return the graph for the given stream for a
                    schema. <code>only_dep = true</code> means return the depth
                    part else returns the node information. Upon error it will
                    return json string with errcode as -1 with the reasons for
                    failure. Please see stream section to know more on the
                    graph.
                  </p>
                  <HighlightedJava
                    code={`public void resetMlHelper(BangDBMLHelper bmlh)`}
                  />
                  <p>
                    This to reset the ml helper at run time. This could be used
                    for various reasons but mostly supported for changes in the
                    cluster config for ML.
                  </p>
                  <HighlightedJava
                    code={`public synchronized void closeBangdbStreamManager(boolean force)`}
                  />
                  <p>
                    This will close the Stream manager. Please note if force is
                    set to be false then it will simply reduce the reference
                    count and if the count is 0 then it will close the stream
                    manager. But if force is set to be as false then it will
                    simply close the stream manager irrespective of how many
                    references are there or not.
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
