import React from "react";
import Head from "next/head";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import HighlightedCpp from "../../components/HighlightedCpp";
import HighlightedJava from "../../components/HighlightedJava";

export default function WorkingWithStreams() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Working with Streams - BangDB</title>
        <meta
          name="description"
          content="Overall, following few Stream APIs are most critical and most of the time we will be dealing with these at run time for data processing..."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Working with Streams - BangDB" />
        <meta
          property="og:description"
          content="Overall, following few Stream APIs are most critical and most of the time we will be dealing with these at run time for data processing..."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="Working with Streams - BangDB" />
        <meta
          name="twitter:description"
          content="Overall, following few Stream APIs are most critical and most of the time we will be dealing with these at run time for data processing..."
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
              <Breadcrumb text="Stream in BangDB" url="/stream" />
              <h1 className="article-title">Working with Stream</h1>
              <div className="article-body">
                <h2>Stream API</h2>
                <p>
                  Most Important APIs for stream, Please refer{" "}
                  <Link href={`/bangdb-stream-manager-api`}>
                    Stream Manager
                  </Link>{" "}
                  for list of all Stream APIs, here we will discuss the most
                  important ones when it comes to ingesting and
                  scanning/retrieving the data.
                </p>
                <p>
                  Overall, following few Stream APIs are most critical and most
                  of the time we will be dealing with these at run time for data
                  processing.
                </p>
                <HighlightedCpp
                  code={`public String put(long schemaid, long streamid, String doc)
public ResultSet scanDoc(long schemaid, long streamid, ResultSet prev_rs, long k1, long k2, String idx_filter_json, ScanFilter sf)
public ResultSet scanProcDoc(long schemaid, long streamid, String query_json, ResultSet prev_rs, ScanFilter sf)
public long count(long schemaid, long streamid)
public long getGpbyId(long schemaid, long streamid, String gpby_attr_list)`}
                />
                <p>And few important info are as follows:</p>
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
                <h2>Ingesting data</h2>
                <p>
                  To ingest data into the BangDB, we call <code>put()</code>{" "}
                  function. It is very simple and all processing as defined in
                  the schema is abstracted behind this API. Ingestion always
                  happens for normal stream or the main stream as shown above in
                  the enum.
                </p>
                <p>
                  Therefore, when we call this API, we ensure that every single
                  computations will take place and only then it will return.
                  Typically, for a single event put, there could be on an
                  average several dozens of processing that may happen before
                  the call returns, starting from computing new attributes, to
                  referring to other existing attributes, groupbys, filter,
                  join, entity computation, complex event processing,
                  notification and few other necessary ones. Hence it is highly
                  critical that the API is super efficient and highly
                  performant. Here is how the API is called.
                </p>
                <HighlightedCpp
                  code={`public String put(long schemaid, long streamid, String doc)`}
                />
                <aside className="doc-api-code">
                  <p>
                    <strong>schemaid</strong> : id of the schema to which the
                    stream belongs
                  </p>
                  <p>
                    <strong>streamid</strong> : id of the stream, to which this
                    event(doc) will be sent
                  </p>
                  <p>
                    <strong>doc</strong> : event, a json string
                  </p>
                  <p>
                    <strong>returns</strong> : it returns json string with
                    errcode and also message as required. Errcode 0 is success
                    and -ve is error. It&apos;s a blocking call and returns once
                    done
                  </p>
                </aside>
                <h2>Scanning data from main stream</h2>
                <p>
                  Scanning data means retrieving data from streams. The stream
                  could be normal or other derived ones.
                  BANGDB_STREAM_TYPE_NORMAL enum defines the normal stream and
                  all events/data is ingested into this stream only. But we can
                  scan data from normal and all other derived streams as well.
                </p>
                <p>
                  Also, filter, joined, referral stream, could also be scanned
                  using this method.
                </p>
                <aside className="doc-api-code">
                  <p>
                    Therefore, this scan method can work for following types of
                    the streams
                  </p>
                  <p>
                    BANGDB_STREAM_TYPE_NORMAL = 1,
                    <br />
                    BANGDB_STREAM_TYPE_FILTER,
                    <br />
                    BANGDB_STREAM_TYPE_JOINED,
                  </p>
                  <p>
                    This scan is for getting data from normal or raw stream.
                  </p>
                </aside>
                <HighlightedCpp
                  code={`public ResultSet scanDoc(long schemaid, long streamid, ResultSet prev_rs, long k1, long k2, String idx_filter_json, ScanFilter sf)`}
                />
                <aside className="doc-api-code">
                  <p>
                    <strong>schemaid</strong> : schemaid of the schema to which
                    the stream belongs.
                  </p>
                  <p>
                    <strong>streamid</strong> : stream id of the normal stream
                    from which we wish to take data from.
                  </p>
                  <p>
                    <strong>prev_rs</strong> : all scans in BangDB returns
                    resultset, which is list of key val. The prev_rs is the
                    previously returned resultset for the previous scan call.
                    Scan returns 2MB or whatever is configured, a fixed data or
                    fixed number of rows at a time but since there could be much
                    more data than the configured size hence we need to call
                    scan multiple times to get all the data. Hence all scan is
                    recursive in nature which takes previously returned
                    resultset.
                  </p>
                  <p>
                    <strong>k1</strong> : start primary key, in case of stream
                    it&apos;s always timestamp in microsec. Please note
                    Microsec.
                  </p>
                  <p>
                    <strong>k2</strong> : end time stamp in microsec
                  </p>
                  <p>
                    <strong>idx_filter_join</strong> : filter defined using
                    dataQuery, this is basically filter using secondary keys and
                    text indexes.
                  </p>
                  <p>
                    <strong>sf</strong> : ScanFilter. User may define comparison
                    ops, limit f the data in number of rows and size.
                  </p>
                  <p>
                    <strong>Returns</strong> : resultset, list of ket val.
                  </p>
                </aside>
                <h2>Scanning data from derived streams</h2>
                <p>We have to bother about only 3 stream types here, namely</p>
                <aside className="doc-api-code">
                  <p> entity streams - BANGDB_STREAM_TYPE_ENTITY (4)</p>
                  <p>group by streams - BANGDB_STREAM_TYPE_GPBY (5)</p>
                  <p>
                    aggregate streams - count, unique count and running stats -
                    BANGDB_STREAM_TYPE_AGGR (6)
                  </p>
                </aside>
                <p>To scan data from these streams, we use following API.</p>
                <HighlightedJava
                  code={`public ResultSet scanProcDoc(long schemaid, long streamid, String query_json, ResultSet prev_rs, ScanFilter sf)`}
                />
                <p>
                  <strong>schemaid</strong> : schema id for the schema to which
                  the stream belongs.
                </p>
                <p>
                  <strong>streamid</strong> : This is for the main / normal
                  stream id. Since the aggregate, entity and groupby streams are
                  abstracted hence we use the stream id of the stream to which
                  these belong.
                </p>
                <p>
                  <strong>query_json</strong> : quer_json has following basic
                  structure, but it&apos;s different for different stream types:
                </p>
                <HighlightedCpp
                  code={`{"proc-type": 5, "gpby-attrid": 123, "from_ts":123456, "to_ts": 234567, "skey": "*:a1:b1", "ekey": "*:a1:b7","rollup":0}`}
                />
                <p>
                  proc-type -&gt; indicates what kind of derived stream, 5 means
                  <br />
                  gpby gpby-attrid -&gt; id of the groupby.
                </p>
                <p>User may call following function to get that</p>
                <HighlightedCpp
                  code={`public String getGpbyName(long schemaid, long streamid, String gpby_attr_list)`}
                />
                <p>Here gpby_attr_list has following structure:</p>
                <HighlightedCpp
                  code={`{"attrs":["a1", "b2", "c3"], "gpby-val":"x", "gpby-name":"a1_b2_c3", "gpby-attrid":123}`}
                />
                <p>
                  Here, user may just provide attrs and gpby-val and it will
                  return gpby-attrid OR simply provide the gpby-name if
                  that&apos;s there. Mostly user may call this function with
                  following <strong>gpby_attr_list</strong> to get the
                  gpby-attid.
                </p>
                <HighlightedCpp
                  code={`{"attrs":["a1", "b2", "c3"], "gpby-val":"x"}`}
                />
                <aside className="doc-api-code">
                  <p>
                    from_ts -&gt; it could be 0 or start time in timestamp in
                    microsec.
                  </p>
                  <p>
                    to_ts -&gt; it could be 0 or end time in timestamp in
                    microsec.
                  </p>
                  <p>
                    skey -&gt; the pattern of the key, as required or defined in
                    gpat etc. It can be NULL as well.
                  </p>
                  <p>ekey -&gt; same as skey.</p>
                  <p>rollup -&gt; if we wish to rollup the data eventually.</p>
                </aside>
                <p>for aggregate</p>
                <HighlightedCpp
                  code={`{"proc-type": 6,"attrs":["a"], "from_ts":sk_ts, "to_ts":ek_ts, "rollup":1}`}
                />
                <p>
                  Very similar to the gpby, except that <code>attrs[]</code>{" "}
                  contains the attribute name for which the scan is being done
                  for entity:
                </p>
                <HighlightedCpp
                  code={`{"proc-type": 4, "skey:"sk", "ekey":"ek", "enty-stream-id":1234}`}
                />
                <p>
                  Here there is no from_ts and to_ts as entity stream is not
                  based on timestamp as it&apos;s primary key. It is also not a
                  sliding window based table or stream. The enty-stream-id is
                  nothing but the stream id for the entity stream.
                </p>
              </div>
            </article>
          </div>
        </main>
      </section>
    </React.Fragment>
  );
}
