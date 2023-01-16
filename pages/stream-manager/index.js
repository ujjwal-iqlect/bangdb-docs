import React from "react";
import Head from "next/head";
import Breadcrumb from "../../components/Breadcrumb";
import HighlightedCpp from "../../components/HighlightedCpp";

export default function StreamManager() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Stream Manager - BangDB</title>
        <meta
          name="description"
          content="BangDB Stream Manager - Stream is defined as set of attributes that together form a particular stream event and then operations."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Stream Manager - BangDB" />
        <meta
          property="og:description"
          content="BangDB Stream Manager - Stream is defined as set of attributes that together form a particular stream event and then operations."
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
          content="BangDB Stream Manager - Stream is defined as set of attributes that together form a particular stream event and then operations."
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
              <h1 className="article-title">Stream Manager</h1>
              <div className="article-body">
                <p>
                  Stream Manager - Before we go and describe the stream and how
                  do define things and process, let&apos;s just look at the APIs
                  that&apos;s required to do most of the stuff. Now let&apos;s
                  get into the concept of BangDB Stream Manager.
                </p>
                <p>
                  Stream Manager is defined as set of attributes that together
                  form a particular stream event and then operations that can be
                  done on these events. Let&apos;s take an example of very
                  simple case where we have few attributes are coming from
                  different streams. For ex; temp, pressure data stream, etc.
                  for any IOT case. Then we can define the stream as following:
                </p>
                <HighlightedCpp
                  code={`{
   "schema":"myschema",
   "streams":[
      {
         "name":"temp_stream",
         "type":1,
         "swsz":81600,
         "inpt":[
            
         ],
         "attr":[
            {
               "name":"temp",
               "type":11,
               "stat":3
            },
            {
               "name":"point",
               "type":9
            },
            {
               "name":"sensor_name",
               "type":5,
               "kysz":18,
               "sidx":1,
               "stat":2
            }
         ]
      },
      {
         "name":"pressure_stream",
         "type":1,
         "inpt":[
            
         ],
         "attr":[
            {
               "name":"pressure",
               "type":11,
               "stat":3
            },
            {
               "name":"point",
               "type":9
            },
            {
               "name":"sensor_name",
               "type":5,
               "kysz":18,
               "sidx":1,
               "stat":2
            }
         ]
      }
   ]
}`}
                />
                <p>
                  This is basic structure to define the streams. Let&apos;s
                  discuss more on this.
                </p>
                <h2>Schema</h2>
                <p>
                  Since for any real use case, we will have to deal with more
                  than single stream. Then we need to define the operations that
                  would be done on these streams. Hence we will need to put all
                  these streams and the operations on the stream data in some
                  wrapper.
                </p>
                <p>
                  We use &quot;schema&quot; as a container for the streams and
                  operations on them. This also allows us to isolate two
                  different schemas within the system. You could also think of
                  schema to segregate based on the different solutions or apps
                  or users within the system, thereby kind of namespace which
                  will ensure sanity across different structures
                </p>
                <h2>Stream</h2>
                <p>
                  This is a collection of attributes for a particular data
                  source. For ex: temperature sensor, payment transaction
                  events, telecom cdr data, pizza order-delivery data etc. This
                  is how we will define a stream in simple way:
                </p>
                <aside className="doc-api-code">
                  <p>
                    <strong>&quot;name&quot;</strong> : stream name, give a name
                    of the stream. DB does name mangling using schema name,
                    hence user doesn&apos;t have to bother about it as long as
                    the stream name is unique within schema.
                  </p>
                </aside>
                <aside className="doc-api-code">
                  <p>
                    <strong>&quot;type&quot;</strong> : type of the stream. Even
                    though we ingest data in a stream, due to various processing
                    of data, we would end up creating many other streams as
                    well. There are following types of streams here, denoted by
                    number.
                  </p>
                  <p>
                    <code>type = 1</code> means normal direct or raw stream, the
                    one for which we ingest data. This streams gets the data
                    ingested from outside, through agents or any other means.
                    Application simply sends data to this stream.
                  </p>
                  <p>
                    <code>type = 2</code> means filter stream, the stream which
                    gets data based on filter defined in the normal or other
                    stream. Once data is ingested in the raw stream, there we
                    may filter the data based on some condition and send data to
                    this filter stream.
                  </p>
                  <p>
                    <code>type = 3</code> means joined stream, the stream which
                    gets data based on two or more joins of streams. Any two
                    streams can join on some condition and output could be sent
                    to this joined stream.
                  </p>
                  <p>
                    <code>type = 4</code> means entity stream, the stream which
                    gets data from various streams as long term profile data for
                    the entity for long period of time (or forever). More on
                    this later.
                  </p>
                </aside>
                <aside className="doc-api-code">
                  <p>
                    <strong>&quot;swsz&quot;</strong> : Size of sliding window.
                    Each of these streams could also reside in a sliding window.
                    This is not tumbling window but a continuous window, which
                    is more appropriate for stream analytics. Tumbling window is
                    restriction and BangDB doesn&apos;t deal with it. The swsz
                    is number of seconds for the sliding window.
                  </p>
                  <p>
                    We can have as low as 1 sec to as large as many years.
                    However, it&apos;s important to set this properly and not go
                    below a day or hour. For use cases where we wish to analyse
                    in 1 sec or 5 sec or 60 sec or min or hour, we can do that
                    using the processing definition which we will discuss later.
                    This swsz size is for the raw stream data and how long would
                    user like to persist it.
                  </p>
                  <p>
                    Once it slides, data could be archived or simply discarded
                    or sent to other integrated system. We will have more
                    discussion on this later. Default value for the size is
                    86400 i.e. one day.
                  </p>
                </aside>
                <aside className="doc-api-code">
                  <p>
                    <strong>&quot;attr&quot;</strong> : list of attributes for
                    the event. It also takes other info which dictates how to
                    treat, store the attribute and what aggregations should be
                    done in continuous basis. Following are important metadata
                    that could be associated with the attribute.
                  </p>
                </aside>
                <aside className="doc-api-code">
                  <p>
                    <strong>&quot;name&quot;</strong> : name of the attribute,
                    this will be in the stream of data identifying the
                    attribute.
                  </p>
                </aside>
                <aside className="doc-api-code">
                  <p>
                    <strong>&quot;type&quot;</strong> : type of the attribute.
                    There are following types supported as of now:
                  </p>
                  <p>
                    5 = string
                    <br />
                    9 = long
                    <br />
                    11 = double
                  </p>
                </aside>
                <aside className="doc-api-code">
                  <p>
                    <strong>&quot;sidx&quot;</strong> : Whether we should have
                    secondary index for the attribute or not. 1 for yes and
                    0(default) for no. This can only be done for string(5) and
                    long(9) types of attribute. This control to the user is good
                    since secondary index will improve query performance but add
                    to resources.
                  </p>
                  <p>
                    Hence, if query is not going to happen on this then we
                    should ingore it. Note that db in any way if necessary will
                    override and create indexes as required for different
                    scenarios.
                  </p>
                </aside>
                <aside className="doc-api-code">
                  <p>
                    <strong>&quot;ridx&quot;</strong> : If you wish to enable
                    reverse index as well for searching purposes.
                  </p>
                </aside>
                <aside className="doc-api-code">
                  <p>
                    <strong>&quot;kysz&quot;</strong> : key size, this is only
                    for type = 5, string type. It specifies the max size of the
                    key. It&apos;s only important when “sidx” is enabled, i.e.
                    secondary index is enabled as it will be used for indexing,
                    hence need to have upper boundary for the size.
                  </p>
                </aside>
                <aside className="doc-api-code">
                  <p>
                    <strong>&quot;stat&quot;</strong> : This will enable the
                    statistics / aggregation for the attribute. There are
                    following options as defined by enum{" "}
                    <code>bangdb_stat_type</code>:
                  </p>
                  <p>
                    1: count
                    <br />
                    2: unique count, uses hyperloglog. Should be used for
                    string(5) type attribute
                    <br />
                    3: running stats. For ex; count, min, max, avg, stddev,
                    covar, skewness, ex_kurtosis
                    <br />
                    4: two-val stats. For ex; mean_x, mean_y, std_x, std_y, covr
                    etc. As of now it&apos;s not enabled in this version.
                    It&apos;s coming soon
                    <br />
                    5: top-k
                    <br />
                    99: invalid.
                  </p>
                </aside>
                <aside className="doc-note">
                  <strong>Note: </strong>For attributes, we can leave every
                  setting for default too, but two info are mandatory namely -
                  &quot;name&quot; and &quot;type&quot;. By defining such
                  schema, we are ready to start ingesting the data and we will
                  be able to do the various processing as defined so far. But
                  these are very limited processing and we would like to do much
                  more.
                </aside>
              </div>
            </article>
          </div>
        </main>
      </section>
    </React.Fragment>
  );
}

export async function getServerSideProps(context) {
  return {
    props: { streamSidebar: true },
  };
}
