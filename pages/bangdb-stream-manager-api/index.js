import React, { useState } from "react";
import Head from "next/head";
import Breadcrumb from "../../components/Breadcrumb";
import HighlightedCpp from "../../components/HighlightedCpp";
import HighlightedJava from "../../components/HighlightedJava";
import Link from "next/link";

export default function BangdbStreamManagerApi() {
  const [tab, setTab] = useState(1);

  return (
    <React.Fragment>
      <Head>
        <title>Stream Manager - BangDB</title>
        <meta
          name="description"
          content="Learn about BangDB Stream Manager & server APIs. Read the documentation to know more about BangDB Server APIs."
        ></meta>
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Stream Manager - BangDB" />
        <meta
          property="og:description"
          content="Learn about BangDB Stream Manager & server APIs. Read the documentation to know more about BangDB Server APIs."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="Stream Manager - BangDB" />
        <meta
          name="twitter:description"
          content="Learn about BangDB Stream Manager & server APIs. Read the documentation to know more about BangDB Server APIs."
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
              <h1 className="article-title">Stream Manager</h1>
              <div className="article-body">
                <p>
                  BangDB Stream Manager provides ways to create necessary
                  constructs to deal with streams in timeseries manner. It
                  allows users to create stream, ingest data, define processing
                  logic so that continuous ingestion and analysis can go on in
                  automated manner.
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
                    To get the instance of BangDB Stream Manager, call the
                    constructor. It takes{" "}
                    <Link href={"/bangdb-environment-api"}>BangDB Env</Link>{" "}
                    object reference, see BangDBEnv for more details.
                  </p>
                  <HighlightedCpp
                    code={`BangDB Stream Manager (BangDBEnv *env);`}
                  />
                  <p>
                    BangDB Stream works on a schema which user must define and
                    register with the Stream manager in order to be able to
                    receive data in the stream and also process the events as
                    defined in the schema. See{" "}
                    <Link href={"/stream"}>BangDB Stream</Link> for more
                    information.
                  </p>
                  <p>To register a schema</p>
                  <HighlightedCpp
                    code={`char *registerSchema(const char *schema_json);`}
                  />
                  <p>
                    The schema/ app is in JSON format and contains details of
                    stream operation. It returns NULL for serious error or json
                    doc with errcode less than 0 with information on why the
                    registration failed. If successful then errcode is set to 0
                    in the returned doc. Users should call <code>delete[]</code>{" "}
                    to free the memory.
                  </p>
                  <p>To de-register / delete a existing schema</p>
                  <HighlightedCpp
                    code={`char *deregisterSchema(const char *schema_name, bool cleanclose = true);`}
                  />
                  <p>
                    <code>schema_name</code> is the name given to the schema by
                    the user. If successful then errcode is set to 0 in the
                    returned doc. Else for error it could return NULL or errcode
                    set to -1. Users should call <code>delete[]</code> to free
                    the memory.
                  </p>
                  <p>To add streams to an existing schema</p>
                  <HighlightedCpp
                    code={`char *addStreams(long schemaid, const char *streams);`}
                  />
                  <p>
                    The streams input here is a json string that contains an
                    array of streams to be added. It takes schemaid as input for
                    which the set of streams to be added. schemaid is a unique
                    id associated with a particular schema. If successful then
                    errcode is set to 0 in the returned doc. Else for error it
                    could return NULL or errcode set to -1. Users should call{" "}
                    <code>delete[]</code> to free the memory.
                  </p>
                  <p>To delete streams from an existing schema</p>
                  <HighlightedCpp
                    code={`char *deleteStreams(long schemaid, const char *streams);`}
                  />
                  <p>
                    If successful then errcode is set to 0 in the returned doc.
                    Else for error it could return NULL or errcode set to -1.
                    Users should call <code>delete[]</code> to free the memory.
                  </p>
                  <p>To set stream state</p>
                  <HighlightedCpp
                    code={`char *setStreamState(const char *schema, const char *stream, short st);`}
                  />
                  <p>
                    If successful then errcode is set to 0 in the returned doc.
                    Else for error it could return NULL or errcode set to -1.
                    Users should call <code>delete[]</code> to free the memory.
                  </p>
                  <p>To get stream state</p>
                  <HighlightedCpp
                    code={`int getStreamState(const char *schema, const char *stream);`}
                  />
                  <p>
                    The state of stream could be ON or OFF, hence it returns 1
                    or 0 respectively. For error it returns -1.
                  </p>
                  <p>
                    To add user defined functions for computing in the schemas
                  </p>
                  <HighlightedCpp
                    code={`char *addUdfs(long schema_id, const char *udfs);`}
                  />
                  <p>
                    If successful then errcode is set to 0 in the returned doc.
                    Else for error it could return NULL or errcode set to -1.
                    Users should call <code>delete[]</code> to free the memory.
                  </p>
                  <p>
                    To delete udf from a given schema using udf name and schema
                    id
                  </p>
                  <HighlightedCpp
                    code={`char *delUdfs(long schema_id, const char *udfs);`}
                  />
                  <p>
                    If successful then errcode is set to 0 in the returned doc.
                    Else for error it could return NULL or errcode set to -1.
                    Users should call <code>delete[]</code> to free the memory.
                  </p>
                  <p>
                    This list all the user defined functions present in the
                    database
                  </p>
                  <HighlightedCpp code={`char *getUdfList();`} />
                  <p>
                    If successful then it returns the list else NULL. Users
                    should call <code>delete[]</code> to free the memory. To get
                    the list all Registered notifications. These are
                    notification templates to send the event notifications.
                    These are not actual notifications. Please see{" "}
                    <Link href={"/notification"}>Notification</Link> to know
                    more about notification template and also dealing with it.
                  </p>
                  <aside className="doc-note">
                    <strong>Note: </strong>This is very similar to scanDoc
                    present in the table. Infact it&apos;s exactly same as that.
                    It takes the query filter as one of the arguments
                    <code>(idx_filter_json)</code>.
                  </aside>
                  <p>
                    To see more information on how to scan the table, see{" "}
                    <Link href={"/dataquery"}>DataQuery</Link> section
                  </p>
                  <HighlightedCpp
                    code={`ResultSet * scanRegisteredNotif(
  ResultSet * prev_rs,
  FDT * pk_skey = NULL,
  FDT * pk_ekey = NULL,
  const char * idx_filter_json = NULL,
  ScanFilter * sf = NULL
);`}
                  />
                  <p>
                    If successful, it returns resultset reference which could be
                    iterated to read key and value. It returns NULL for error To
                    get the list of generated notifications, users may scan in
                    the usual way. Note that the query filter can still be used
                    for the scan. See <Link href={"/dataquery"}>DataQuery</Link>{" "}
                    to know more about scan.
                  </p>
                  <HighlightedCpp
                    code={`ResultSet * scanNotification(
   ResultSet * prev_rs,
   FDT * pk_skey = NULL,
   FDT * pk_ekey = NULL,
   const char * idx_filter_json = NULL,
   ScanFilter * sf = NULL
);`}
                  />
                  <p>
                    If successful, it returns resultset reference which could be
                    iterated to read key and value. It returns NULL for error.
                  </p>
                  <p>
                    To insert events into the stream. The event is the doc (json
                    document)
                  </p>
                  <HighlightedCpp
                    code={`char *put(long schemaid, long streamid, const char *doc);`}
                  />
                  <p>
                    streamid is a unique numerical id associated with a
                    particular stream. It returns json with errcode set to -1
                    for error else 0 for success. User should check for NULL as
                    well User should delete the memory of returned data by
                    calling <code>delete[]</code>.
                  </p>
                  <p>
                    To get the events from any given stream from a given schema
                  </p>
                  <HighlightedCpp
                    code={`char *put(long schemaid, long streamid, long k, const char *v);`}
                  />
                  <p>
                    It returns json with errcode set to -1 for error else 0 for
                    success. User should check for NULL as well User should
                    delete the memory of returned data by calling{" "}
                    <code>delete[]</code>. To scan the stream for a given filter
                    condition. Users may scan the stream in the usual way. Note
                    that the query filter <code>(idx_filter_json)</code> can
                    still be used for the scan. See{" "}
                    <Link href={"/dataquery"}>DataQuery</Link> to know more
                    about scan.
                  </p>
                  <HighlightedCpp
                    code={`ResultSet * scanDoc(
   long schemaid,
   long streamid,
   ResultSet * prev_rs,
   FDT * pk_skey = NULL,
   FDT * pk_ekey = NULL,
   const char * idx_filter_json = NULL,
   ScanFilter * sf = NULL
);`}
                  />
                  <p>
                    To scan aggregate, groupby and entity streams users should
                    call this API. This takes a special argument
                    <code>attr_names_json</code>, which defines what kind of
                    data is being scanned. This again is a recursive scan and is
                    used similar to other scans (db). See{" "}
                    <Link href={"/dataquery"}>DataQuery</Link> to know more
                    about how to use scan effectively.
                  </p>
                  <HighlightedCpp
                    code={`ResultSet * scanProcDoc(
   long schemaid,
   long streamid,
   const char * attr_names_json,
   ResultSet * prev_rs,
   ScanFilter * sf = NULL
);`}
                  />
                  <p>
                    The <code>attr_names_json</code> defines what to do and for
                    whom this is being called. The structure of the json is
                  </p>
                  <HighlightedCpp
                    code={`-for aggr = query_json = {
"proc-type": 6,
"attrs":["a", "b", ...], 
"option" : 1, "skey:"sk",
"ekey":"ek", 
"rollup":1
}

-for entity = query_json = {
"proc-type": 6,
"attrs":["a", "b", ...],
"option" : 1, 
"skey:"sk", 
"ekey":"ek", 
"enty-stream-id":1234
}

-for gpby = query_json = {
"attrs":["a", "b", ...], 
"option" : 1, 
"skey:"sk", 
"ekey":"ek", 
"gpby-val":"x", 
"gpby-name":"a1_b2_c3", 
"gpby-attrid":123
}`}
                  />
                  <p>
                    It returns ResultSet, which could be iterated to go over the
                    events. Else it returns NULL for error.
                  </p>
                  <p>
                    To count the number of events for a given filter condition
                  </p>
                  <HighlightedCpp
                    code={`long countProc(long schemaid, long streamid, const char *attr_names_json, ScanFilter *sf = NULL);`}
                  />
                  <p>It returns -1 for error.</p>
                  <p>
                    To get groupby operation name. Check out more about it in
                    <Link href={"/stream"}>stream</Link>
                  </p>
                  <HighlightedCpp
                    code={`long getGpbyName(long schemaid, long streamid, const char *gpby_attr_list, char **out_json);`}
                  />
                  <p>
                    To get the GpbyName is the mangled name given by the stream
                    manager to a particular groupby operation. The{" "}
                    <code>gpby_tatr_list</code> provides the necessary
                    information for the computation of the name.
                  </p>
                  <HighlightedCpp
                    code={`gpby_attr_list = {"attrs":["a1", "b2", "c3"], "gpby-val":"x", "gpby-name":"a1_b2_c3", "gpby-attrid":123}`}
                  />
                  <p>
                    It returns -1 for error else 0 for success. The{" "}
                    <code>out_json</code>
                    contains the name of the groupby.
                  </p>
                  <p>
                    To count total number of events present in the given stream
                  </p>
                  <HighlightedCpp
                    code={`long count(long schemaid, long streamid);`}
                  />
                  <p>It returns -1 for error else the count.</p>
                  <p>
                    To get number of events present for a given condition or
                    filter query <code>(idx_filter_json)</code>
                  </p>
                  <HighlightedCpp
                    code={`long count(long schemaid, long streamid, FDT *pk_skey, FDT *pk_ekey, const char *idx_filter_json = NULL, ScanFilter *sf = NULL);`}
                  />
                  <p>It returns -1 for error else the count.</p>
                  <p>To get count of event pushed into the raw streams</p>
                  <HighlightedCpp
                    code={`ResultSet * scanUsage(
   ResultSet * prev_rs,
   long fromts,
   long tots,
   int rollup,
   ScanFilter * sf = NULL
);`}
                  />
                  <p>It returns Resultset for success or NULL for error.</p>
                  <p>To get the schema id for an existing schema</p>
                  <HighlightedCpp
                    code={`long getSchemaid(const char *schema_name, bool check_valid = true);`}
                  />
                  <p>It returns -1 for error else the schemaid.</p>
                  <p>To get the stream id for a stream in an existing schema</p>
                  <HighlightedCpp
                    code={`long getStreamid(const char *schema_name, const char *stream_name, bool check_valid = true);`}
                  />
                  <p>It returns -1 for error or streamid.</p>
                  <p>
                    To get the entire schema (json structure). This API returns
                    from the Stream memory and not from the stored metadata.
                  </p>
                  <HighlightedCpp
                    code={`char *getSchemaStr(const char *schema_name);`}
                  />
                  <p>
                    It returns NULL for error or json with errocde non-zero for
                    other errors. For success it returns the schema. User should
                    delete the memory of returned data by calling{" "}
                    <code>delete[]</code>. To get the entire schema (json
                    structure) from metadata. Usually both this and previous
                    schema would be the same, but in some cases they could be
                    different.
                  </p>
                  <HighlightedCpp
                    code={`char *getSchemaFromMetadata(const char *schema_name);`}
                  />
                  <p>
                    User should delete the memory of returned data by calling{" "}
                    <code>delete[]</code>.
                  </p>
                  <p>
                    To get a dependency graph for a given schema, users may call
                    this API. This returns json doc defining the entire
                    dependency graph for the scehma.
                  </p>
                  <HighlightedCpp
                    code={`char *getSchemaDepGraph(long schema_id, bool bfs = true);`}
                  />
                  <p>
                    The schema is structured as a graph within the stream
                    manager. This api will return the graph for the given
                    schema. It returns NULL for error. User should delete the
                    memory of returned data by calling <code>delete[]</code>.
                  </p>
                  <p>To get dependency graph for a given stream</p>
                  <HighlightedCpp
                    code={`char *getStreamDepGraph(long schema_id, long stream_id, bool only_dep = false);`}
                  />
                  <p>
                    This API will return the graph for the given stream for a
                    schema. Please see stream section to know more on the graph.
                    It returns NULL for error. User should delete the memory of
                    returned data by calling <code>delete[]</code>.
                  </p>
                  <p>To get list of all schemas present in the database</p>
                  <HighlightedCpp code={`char *getSchemaList();`} />
                  <p>
                    This returns json doc with the list of all the schema or
                    NULL for error. It may set errcode as -1 as well for some
                    errors. User should delete the memory of returned data by
                    calling <code>delete[]</code>.
                  </p>
                  <p>To close the stream manager in the end</p>
                  <HighlightedCpp
                    code={`void closeBangDB Stream Manager (CloseType ctype = DEFAULT_AT_CLIENT);`}
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
                </div>
                <div
                  style={{
                    display: tab === 2 ? "block" : "none",
                  }}
                >
                  <p>
                    To get the instance of BangDB Stream Manager, call the
                    constructor. It takes{" "}
                    <Link href={"/bangdb-environment-api"}>BangDB Env</Link>{" "}
                    object reference, see BangDBEnv for more details.
                  </p>
                  <HighlightedJava
                    code={`public BangDBStreamManager(BangDBEnv bdbenv)`}
                  />
                  <p>
                    BangDB Stream works on a schema which user must define and
                    register with the Stream manager in order to be able to
                    receive data in the stream and also process the events as
                    defined in the schema. See{" "}
                    <Link href={"/stream"}>BangDB Stream</Link> for more
                    information.
                  </p>
                  <p>To register a schema</p>
                  <HighlightedJava
                    code={`public String registerSchema(String schema_json)`}
                  />
                  <p>
                    The schema/ app is in JSON format and contains details of
                    stream operation. It returns NULL for serious error or json
                    doc with errcode less than 0 with information on why the
                    registration failed. If successful then errcode is set to 0
                    in the returned doc.
                  </p>
                  <p>To de-register / delete a existing schema</p>
                  <HighlightedJava
                    code={`public String deregisterSchema(String schema_name)`}
                  />
                  <p>
                    To de-register an app or schema, simply pass the name of the
                    scheme. If successful then errcode is set to 0 in the
                    returned doc else for error. It could return NULL or errcode
                    set to -1.
                  </p>
                  <p>To drop or delete a existing schema</p>
                  <HighlightedJava
                    code={`public String deregisterSchema(String schema_name, boolean cleanclose)`}
                  />
                  <p>To add streams to an existing schema</p>
                  <HighlightedJava
                    code={`public String addStreams(long schemaid, String streams)`}
                  />
                  <p>
                    The DB assigns a unique id to every registered schema which
                    is represented by schemaid and the streams input here is a
                    json string that contains an array of streams to be added.
                    If successful then errcode is set to 0 in the returned doc.
                    Else for error it could return NULL or errcode set to -1.
                  </p>
                  <p>To delete streams from an existing schema</p>
                  <HighlightedJava
                    code={`public String deleteStreams(long schemaid, String streams)`}
                  />
                  <p>
                    This deletes the set of streams defined in the streams json
                    containing names of the streams. It takes schemaid as input
                    for which the set of streams to be deleted. If successful
                    then errcode is set to 0 in the returned doc else for error
                    it could return NULL or errcode set to -1.
                  </p>
                  <p>
                    To check if the schema is currently ready for taking events
                  </p>
                  <HighlightedJava
                    code={`public int getSchemaDDLState(long schemaid)`}
                  />
                  <p>
                    This returns if the schema is currently ready for taking
                    events. It returns the 1 if it&apos;s not ready and 0 if
                    ready.
                  </p>
                  <p>To get schemaid for the given schema_name</p>
                  <HighlightedJava
                    code={`public long getSchemaid(String schema_name, boolean check_valid)`}
                  />
                  <p>
                    This returns schemaid for the given schema_name. If{" "}
                    <code>check_valid</code> is false then it will return a
                    potential name else the actual existing name. For success it
                    returns the id else -1 for error.
                  </p>
                  <p>
                    To get stream id for a given schema_name and stream_name
                  </p>
                  <HighlightedJava
                    code={`public long getStreamid(String schema_name, String stream_name, boolean check_valid)`}
                  />
                  <p>
                    This returns streamid for the given schema_name and
                    stream_name. If <code>check_valid</code> is false then it
                    will return a potential name else the actual existing name.
                    For success it returns the id else -1 for error.
                  </p>
                  <p>To get status of a stream</p>
                  <HighlightedJava
                    code={`public int getStreamState(String schema_name, String stream_name)`}
                  />
                  <p>
                    The state of the stream could be ON or OFF, hence it returns
                    1 or 0 respectively. For error it returns -1.
                  </p>
                  <p>To put events into the stream</p>
                  <HighlightedJava
                    code={`public String put(long schemaid, long streamid, String doc)`}
                  />
                  <p>
                    The event is the doc (json document) and schemaid, streamid
                    define the stream for which the event should be put. It
                    returns json string with errcode as 0 for success or -1 for
                    error. It also contains reasons for failure when it fails.
                  </p>
                  <p>To put events into any given stream for a given schema</p>
                  <HighlightedJava
                    code={`public String put(long schemaid, long streamid, long k, String v)`}
                  />
                  <p>
                    This is to simply put the document into any given stream for
                    a given schema. Please note there is no stream or event
                    processing that takes place for this api. This is similar to
                    table API. It returns a json string with errcode as 0 for
                    success or -1 for error. It also contains the reason for
                    failure when it fails.
                  </p>
                  <p>To scan a stream for a given filter</p>
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
                  <p>To scan aggregate, groupby and entity stream</p>
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
                    The <code>attr_names_json</code> defines what to do and for
                    whom this API is being called. The structure of the JSON is
                    as follows:
                  </p>
                  <HighlightedJava
                    code={`for aggr = query_json = {
"proc-type": 6,
"attrs":["a", "b", ...], 
"option" : 1, 
"skey:"sk", 
"ekey":"ek", 
"rollup":1
}

for entity = query_json = {
"proc-type": 6,
"attrs":["a", "b", ...], 
"option" : 1, "skey:"sk",
"ekey":"ek", 
"enty-stream-id":1234
}

for gpby = query_json = {
"attrs":["a", "b", ...], 
"option" : 1, 
"skey:"sk", 
"ekey":"ek", 
"gpby-val":"x", 
"gpby-name":"a1_b2_c3", 
"gpby-attrid":123
}`}
                  />
                  <p>
                    In gpby if <code>gpby-attrid</code> is provided then{" "}
                    <code>&quot;attrs&quot;</code>,{" "}
                    <code>&quot;gpby-val&quot;</code>,{" "}
                    <code>&quot;gpby-name&quot;</code> not required, basically
                    last 3 are to compute <code>gpby-attrid</code> only. To get
                    the list all Registered notifications. These are
                    notification templates to send the event notifications.
                    These are not actual notifications. Please see{" "}
                    <Link href={"/notification"}>notification</Link>
                    to know more about notification template and also dealing
                    with it.
                  </p>
                  <aside className="doc-note">
                    <strong>Note: </strong>This is very similar to scanDoc
                    present in the table. Infact it&apos;s exactly same as that.
                    It takes the query filter as one of the arguments{" "}
                    <code>(idx_filter_json)</code>. To see more information on
                    how to scan the table, see{" "}
                    <Link href={"/dataquery"}>DataQuery</Link> section.
                  </aside>
                  <HighlightedJava
                    code={`public ResultSet scanRegisteredNotif(
   ResultSet prev_rs,
   long k1, 
   long k2, 
   String idx_filter_json, 
   ScanFilter sf
)`}
                  />
                  <p>
                    If successful, it returns resultset reference which could be
                    iterated to read key and value. It returns NULL for error.
                  </p>
                  <p>To get count of events in the raw streams</p>
                  <HighlightedJava
                    code={`public ResultSet scanUsage(
   ResultSet prev_rs,
   long fromts,
   long tots,
   int rollup,
   ScanFilter sf
)`}
                  />
                  <p>It returns Resultset for success and NULL for error.</p>
                  <p>To get count of events in given stream</p>
                  <HighlightedJava
                    code={`public long countProc(long schemaid, long streamid, String attr_names_json, ScanFilter sf)`}
                  />
                  <p>
                    This returns count of events for given schema and stream
                    ids, else -1 for error.
                  </p>
                  <p>
                    To get the name of a groupby operation. Check out more about
                    it in <Link href={"/stream"}>stream</Link>.
                  </p>
                  <HighlightedJava
                    code={`public String getGpbyName(long schemaid, long streamid, String gpby_attr_list)
public long getGpbyId(long schemaid, long streamid, String gpby_attr_list)`}
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
                    It returns -1 for error else 0 for success. The{" "}
                    <code>out_json</code> contains the name of the groupby.
                  </p>
                  <p>To get count of events for a given schema and stream</p>
                  <HighlightedJava
                    code={`public long count(long schemaid, long streamid)`}
                  />
                  <p>It returns -1 for error else the count.</p>
                  <p>
                    To get count of events based on filter condition for a given
                    schema and stream
                  </p>
                  <HighlightedJava
                    code={`public long count(long schemaid, long streamid, long psk, long pek, String filter_json, ScanFilter sf)`}
                  />
                  <p>It returns -1 for error else the count.</p>
                  <p>Adding UDF to perform computations on stream</p>
                  <HighlightedJava
                    code={`public String addUdfs(long schema_id, String udfs)`}
                  />
                  <p>
                    The stream manager may leverage user defined functions for
                    many computing as defined in the schema. Using this API, one
                    can add udfs for a given scheamid. It returns a json string
                    with errcode as 0 for success or -1 for error. It also
                    contains the reason for failure when it fails.
                  </p>
                  <p>To delete an UDF</p>
                  <HighlightedJava
                    code={`public String delUdfs(long schema_id, String udfs)`}
                  />
                  <p>
                    This API can delete udfs for a given scheamid. It returns a
                    json string with errcode as 0 for success or -1 for error.
                    It also contains the reason for failure when it fails.
                  </p>
                  <p>To compile a UDF</p>
                  <HighlightedJava
                    code={`public String compileUdf(String code)`}
                  />
                  <p>To get the list all UDF present</p>
                  <HighlightedJava code={`public String getUDFList()`} />
                  <p>
                    It returns -1 for error else 0 for success. The result is a
                    json containing list of udfs.
                  </p>
                  <p>To get the list of all registered schemas</p>
                  <HighlightedJava code={`public String getSchemaList()`} />
                  <p>
                    This returns json doc with the list of all the schema or
                    NULL for error. It may set errcode as -1 as well for some
                    errors.
                  </p>
                  <p>
                    To get a dependency graph for a given schema, users may call
                    this API. This returns json doc defining the entire
                    dependency graph for the schema.
                  </p>
                  <HighlightedJava
                    code={`public String getSchemaDepGraph(long schema_id, boolean bfs)`}
                  />
                  <p>
                    The schema is structured as a graph within the stream
                    manager. This api will return the graph for the given
                    schema. The bfs defines breadth first travel if set as true
                    and it will use dfs (depth first). It returns NULL for
                    error.
                  </p>
                  <p>
                    To get the entire schema (json structure) from metadata.
                    Usually both this and previous schema would be the same, but
                    in some cases they could be different.
                  </p>
                  <HighlightedJava
                    code={`public String getSchemaStr(String schemaName, short from_meta)`}
                  />
                  <p>
                    Here, from_meta = 0 means from memory, else 1 means, get
                    from the meta store.
                  </p>
                  <p>To get graphical structure for a given stream</p>
                  <HighlightedJava
                    code={`public String getStreamDepGraph(long schema_id, long stream_id, boolean only_dep)`}
                  />
                  <p>
                    This api will return the graph for the given stream for a
                    schema. Please see <Link href={"/stream"}>stream</Link>{" "}
                    section to know more on the graph. It returns NULL for
                    error.
                  </p>
                  <p>To reset the ml helper atr run time</p>
                  <HighlightedJava
                    code={`public void resetMlHelper(BangDBMLHelper bmlh)`}
                  />
                  <p>To close the stream manager</p>
                  <HighlightedJava
                    code={`public synchronized void closeBangdbStreamManager(CloseType closetype)`}
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
                </div>
              </div>
            </article>
          </div>
        </main>
      </section>
    </React.Fragment>
  );
}
