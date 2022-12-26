import React from "react";
import Head from "next/head";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import HighlightedCpp from "../../components/HighlightedCpp";

export default function StreamProcessing() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Stream Processing - BangDB</title>
        <meta
          name="description"
          content="Learn about single event data, processing details, & examples of schema in BangDB. Read the documentation to know about Stream processing and how it works"
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Stream Processing - BangDB" />
        <meta
          property="og:description"
          content="Learn about single event data, processing details, & examples of schema in BangDB. Read the documentation to know about Stream processing and how it works"
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="Stream Processing - BangDB" />
        <meta
          name="twitter:description"
          content="Learn about single event data, processing details, & examples of schema in BangDB. Read the documentation to know about Stream processing and how it works"
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
              <h1 className="article-title">Stream Processing</h1>
              <div className="article-body">
                <p>
                  Single event data in Stream Processing - As we saw in previous
                  section, all aggregation can be simply enabled using
                  “stat”:1/2/3/4/5 option, nothing else and the db will do this
                  in run time continuous manner. However we need to do lot more
                  than just aggregation. For example:
                </p>
                <aside className="doc-api-code">
                  <p>
                    <strong>&quot;refr&quot;</strong> : refer to other streams
                    and get some attributes using the join condition.
                  </p>
                  <p>
                    <strong>&quot;catr&quot;</strong> : we would need to compute
                    new attributes and their values from existing ones.
                  </p>
                  <p>
                    <strong>&quot;stat&quot;</strong> : statistical
                    computations, mean avg, count, unique count, std dev,
                    kurtosis, etc.
                  </p>
                  <p>
                    <strong>&quot;gpby&quot;</strong> : groupby in running
                    manner.
                  </p>
                  <p>
                    <strong>&quot;join&quot;</strong> : join the stream with
                    other stream to produce data (set of attributes) to send it
                    to other stream.
                  </p>
                  <p>
                    <strong>&quot;fltr&quot;</strong> : filter the stream based
                    on some conditions and send the filtered set of attributes
                    to other stream.
                  </p>
                  <p>
                    <strong>&quot;cepq&quot;</strong> : run cep query to figure
                    out interesting patterns and send the identified pattern to
                    other stream.
                  </p>
                  <p>
                    <strong>&quot;enty&quot;</strong> : keep the long term
                    entity based data computed ready for consumption.
                  </p>
                  <p>
                    <strong>&quot;cvar&quot;</strong> : compute covariance or
                    relation between any two attributes.
                  </p>
                  <p>
                    <strong>&quot;train&quot;</strong> : train a model and
                    deploy for prediction.
                  </p>
                  <p>
                    <strong>&quot;pred&quot;</strong> : predict on stream using
                    a model.
                  </p>
                  <p>
                    <strong>&quot;notif&quot;</strong> : notify in case of
                    filter, join cep or pred output.
                  </p>
                </aside>
                <p>
                  And do all these for every single event data that is ingested
                  into the system, in real time continuous manner. These are
                  very powerful processing for event in real time for every
                  single event, one at a time and not in batch manner. There is
                  another article on why batch processing can&apos;t be true
                  real time processing.
                </p>
                <aside className="doc-note">
                  <strong>Note: </strong>The computations happen in order in
                  which it&apos;s defined above, with the exception that the
                  “pred” is part of “catr” only and “train” is triggered through
                  different workflow.
                </aside>
                <p>Now let’s go into each one of these one by one.</p>
                <h2>Processing Details</h2>
                <p>
                  When event (data) is ingested into the BangDB, it uses the
                  schema to process the event in a particular order. One single
                  event or data could go through several processing, which could
                  be recursive as well, dependent on the schema defined.
                </p>
                <p>Here is the order of processing for the event:</p>
                <HighlightedCpp
                  code={`preprocess();
put();
postprocess();`}
                />
                <p>
                  First, event goes through pre processing of data, then the
                  data is put into the stream and finally post processing
                  happens. All of these could trigger another event which could
                  go through the same chain of processing.
                </p>
                <p>These triggered events could be:</p>
                <aside className="doc-api-code">
                  <p>Put in another stream, due to filter, join etc.</p>
                  <p>
                    a. groupby
                    <br />
                    b. filter
                    <br />
                    c. join
                    <br />
                    d. cep
                    <br />
                    e. entity
                  </p>
                  <p>Put in intermediate buffer, managed by the db</p>
                  <p>Sent for notification</p>
                </aside>
                <aside className="doc-note">
                  <strong>Note: </strong>As you see, put in another stream could
                  trigger again all of the above chain of processing, hence
                  it&apos;s recursive in nature.
                </aside>
                <p>
                  Many of these are sync processing or async, it&apos;s upto db
                  to decide how to arrange these for best optimisation of the
                  efficiencies. For example: notification send process is always
                  async but the internal computations for CEP or join vis a vis
                  maintained data structure are completely up to the db and it
                  decides based some logic for best performance.
                </p>
                <p>
                  Next few sections are devoted to all these individual
                  processes.
                </p>
                <h2>Example of a schema</h2>
                <p>
                  Below schema is for the purpose of conveying the message
                  perspective only.
                </p>
                <HighlightedCpp
                  code={`{
   "schema":"myschema",
   "streams":[
      {
         "name":"mystream",
         "type":1,
         "swsz":86400,
         "inpt":[
            
         ],
         "attr":[
            {
               "name":"a",
               "type":5,
               "kysz":32,
               "sidx":1,
               "ridx":1,
               "stat":1
            },
            {
               "name":"b",
               "type":5,
               "kysz":32,
               "sidx":1,
               "stat":2
            },
            {
               "name":"c",
               "type":5,
               "kysz":24,
               "sidx":1,
               "ridx":1,
               "stat":1
            },
            {
               "name":"d",
               "type":5,
               "kysz":48,
               "sidx":1,
               "stat":1
            },
            {
               "name":"e",
               "type":5,
               "kysz":32,
               "sidx":1,
               "stat":1
            },
            {
               "name":"f",
               "type":5,
               "kysz":32,
               "stat":2
            },
            {
               "name":"g",
               "type":11
            },
            {
               "name":"h",
               "type":11
            }
         ],
         "catr":[
            {
               "name":"m",
               "type":9,
               "opid":3,
               "stat":3,
               "opnm":"myudf1",
               "iatr":[
                  "b",
                  "c",
                  "d"
               ]
            },
            {
               "name":"n",
               "type":11,
               "stat":1,
               "opnm":"comp_int",
               "iatr":[
                  "g",
                  "h"
               ]
            },
            {
               "name":"o",
               "type":5,
               "opnm":"string_add",
               "iatr":[
                  "a",
                  "b"
               ]
            },
            {
               "name":"p",
               "type":5,
               "opid":3,
               "opnm":"myudf3",
               "iatr":[
                  "c",
                  "b"
               ]
            },
            {
               "name":"q",
               "type":9,
               "opid":3,
               "opnm":"myudf3",
               "iatr":[
                  "g",
                  "h"
               ]
            },
            {
               "name":"mexp",
               "type":9,
               "opid":13,
               "iatr":[
                  "((($g+$h)*2)+($g*$h))"
               ]
            }
         ],
         "gpby":[
            {
               "gpat":[
                  "a",
                  "b"
               ],
               "iatr":"c",
               "stat":1,
               "gran":3600,
               "kysz":48
            },
            {
               "gpat":[
                  "a"
               ],
               "iatr":"d",
               "stat":2,
               "gran":86400,
               "kysz":32
            }
         ],
         "refr":[
            {
               "name":"myrefr1",
               "iatr":[
                  "r"
               ],
               "stat":4,
               "rstm":"prod_desc",
               "ratr":[
                  "p1"
               ],
               "jqry":{
                  "cond":[
                     "f"
                  ],
                  "opid":11,
                  "args":[
                     "f"
                  ]
               }
            },
            {
               "name":"myrefr2",
               "iatr":[
                  "s"
               ],
               "stat":2,
               "rstm":"prod_desc",
               "ratr":[
                  "p2"
               ],
               "jqry":{
                  "cond":[
                     "f",
                     "g"
                  ],
                  "opid":12,
                  "args":[
                     "87",
                     "240.9"
                  ]
               }
            }
         ],
         "fltr":[
            {
               "name":"myfilter1",
               "fqry":{
                  "name":"{\"query\":[{\"key\":\"h\", \"cmp_op\":0, \"val\":\"$n\"}],\"qtype\":2}",
                  "type":1
               },
               "fatr":[
                  "a",
                  "b",
                  "c",
                  "g"
               ],
               "catr":[
                  {
                     "name":"f1",
                     "type":11,
                     "opid":3,
                     "iatr":[
                        "b",
                        "c",
                        "a"
                     ]
                  }
               ],
               "ostm":"filter_stream1",
               "notf":1
            },
            {
               "name":"myfilter2",
               "fqry":{
                  "name":"fltr_udf1",
                  "type":2
               },
               "fatr":[
                  "a",
                  "b"
               ],
               "catr":[
                  {
                     "name":"fltr1",
                     "type":5,
                     "opid":1,
                     "iatr":[
                        "fltr1"
                     ]
                  },
                  {
                     "name":"fltr2",
                     "type":11,
                     "opid":13,
                     "iatr":[
                        "($g+$h)"
                     ]
                  }
               ],
               "ostm":"filter_stream2",
               "notf":0
            }
         ],
         "join":[
            {
               "name":"myjoin1",
               "type":1,
               "tloc":30,
               "iatr":[
                  "a",
                  "b",
                  "c",
                  "e"
               ],
               "rstm":"add_to_cart",
               "ratr":[
                  "j1",
                  "j2",
                  "j3"
               ],
               "jqry":{
                  "cond":[
                     "a",
                     "b"
                  ],
                  "opid":11,
                  "opnm":"myrule2",
                  "args":[
                     "a",
                     "b"
                  ]
               },
               "ostm":"joined_stream1"
            }
         ],
         "cepq":[
            
         ],
         "enty":[
            
         ],
         "cvar":[
            {
               
            }
         ]
      },
      {
         "name":"prod_desc",
         "type":1,
         "inpt":[
            
         ],
         "attr":[
            {
               "name":"p1",
               "type":5,
               "kysz":24,
               "sidx":1
            },
            {
               "name":"p2",
               "type":5,
               "kysz":32,
               "sidx":1
            },
            {
               "name":"p3",
               "type":5,
               "kysz":24,
               "sidx":1
            },
            {
               "name":"p4",
               "type":11,
               "stat":3
            },
            {
               "name":"f",
               "type":5,
               "kysz":32,
               "sidx":1
            },
            {
               "name":"g",
               "type":11,
               "stat":3
            }
         ]
      },
      {
         "name":"add_to_cart",
         "type":1,
         "inpt":[
            
         ],
         "attr":[
            {
               "name":"j1",
               "type":5,
               "kysz":32,
               "sidx":1
            },
            {
               "name":"j2",
               "type":5,
               "kysz":32,
               "sidx":1
            },
            {
               "name":"j3",
               "type":5,
               "kysz":32,
               "sidx":1
            },
            {
               "name":"a",
               "type":5,
               "kysz":32,
               "sidx":1
            },
            {
               "name":"b",
               "type":5,
               "kysz":32,
               "sidx":1
            },
            {
               "name":"h",
               "type":11
            }
         ],
         "join":[
            {
               "name":"myjoin1",
               "type":1,
               "tloc":30,
               "ratr":[
                  "a",
                  "b",
                  "c",
                  "e"
               ],
               "rstm":"mystream",
               "iatr":[
                  "j1",
                  "j2",
                  "j3"
               ],
               "jqry":{
                  "cond":[
                     "a",
                     "b"
                  ],
                  "opid":11,
                  "opnm":"myrule2",
                  "args":[
                     "a",
                     "b"
                  ]
               },
               "ostm":"joined_stream1"
            }
         ]
      },
      {
         "name":"joined_stream1",
         "type":3,
         "inpt":[
            "mystream",
            "add_to_cart"
         ],
         "attr":[
            {
               "name":"j1",
               "type":5,
               "kysz":32,
               "sidx":1
            },
            {
               "name":"j2",
               "type":5,
               "kysz":32,
               "sidx":1
            },
            {
               "name":"j3",
               "type":5,
               "kysz":32,
               "sidx":1
            },
            {
               "name":"a",
               "type":5,
               "kysz":32,
               "sidx":1,
               "ridx":1,
               "stat":2
            },
            {
               "name":"b",
               "type":5,
               "kysz":32,
               "sidx":1,
               "stat":1
            },
            {
               "name":"c",
               "type":5,
               "kysz":24,
               "sidx":1,
               "ridx":1,
               "stat":2
            },
            {
               "name":"e",
               "type":5,
               "kysz":32,
               "sidx":1,
               "stat":1
            }
         ]
      },
      {
         "name":"filter_stream1",
         "type":2,
         "inpt":[
            "mystream"
         ],
         "attr":[
            {
               "name":"a",
               "type":5,
               "kysz":32,
               "sidx":1,
               "ridx":1,
               "stat":1
            },
            {
               "name":"b",
               "type":5,
               "kysz":32,
               "sidx":1,
               "stat":1
            },
            {
               "name":"c",
               "type":5,
               "kysz":24,
               "sidx":1,
               "ridx":1,
               "stat":1
            },
            {
               "name":"g",
               "type":11
            },
            {
               "name":"f1",
               "type":11,
               "stat":3
            }
         ]
      },
      {
         "name":"filter_stream2",
         "type":2,
         "inpt":[
            "mystream"
         ],
         "attr":[
            {
               "name":"a",
               "type":5,
               "kysz":32,
               "sidx":1,
               "ridx":1,
               "stat":1
            },
            {
               "name":"b",
               "type":5,
               "kysz":32,
               "sidx":1,
               "stat":1
            },
            {
               "name":"fltr1",
               "type":5,
               "kysz":32,
               "sidx":1,
               "stat":1
            },
            {
               "name":"fltr2",
               "type":11
            }
         ]
      }
   ],
   "udfs":[
      {
         "name":"string_add",
         "type":2,
         "srctype":1,
         "src":"../udf_files"
      },
      {
         "name":"comp_int",
         "type":2,
         "srctype":1,
         "src":"../udf_files"
      },
      {
         "name":"fltr_udf1",
         "type":2,
         "srctype":1,
         "src":"../udf_files"
      }
   ],
   "notifs":[
      {
         "notifid":12345,
         "name":"notif1",
         "msg":"users msg",
         "rule":"notification rule/condition",
         "pri":1,
         "mailto":[
            
         ],
         "endpoints":[
            "http://192.168.1.3:10101/account"
         ],
         "schemaid":1234,
         "notif_streamid":4321,
         "notif_stream_name":"sdf",
         "freq":1,
         "tags":[
            "a"
         ],
         "rel_streams":[
            "s1"
         ]
      }
   ]
}`}
                />
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
