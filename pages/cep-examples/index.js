import React from "react";
import Head from "next/head";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import HighlightedCpp from "../../components/HighlightedCpp";
import HighlightedOutput from "../../components/HighlightedOutput";

export default function CepExamples() {
  return (
    <React.Fragment>
      <Head>
        <title>CEP Examples - BangDB</title>
        <meta
          name="description"
          content="CEP is all about finding interesting events based on logic, pattern, which could be beyond simple comparison. Let's look at some CEP Examples."
        ></meta>
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="CEP Examples - BangDB" />
        <meta
          property="og:description"
          content="CEP is all about finding interesting events based on logic, pattern, which could be beyond simple comparison. Let's look at some CEP Examples."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="CEP Examples - BangDB" />
        <meta
          name="twitter:description"
          content="CEP is all about finding interesting events based on logic, pattern, which could be beyond simple comparison. Let's look at some CEP Examples."
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
              <Breadcrumb
                text="Complex Event Processing"
                url="/complex-event-processing"
              />
              <h1 className="article-title">CEP Examples</h1>
              <div className="article-body">
                <p>
                  Complex Event Processing (CEP) is all about finding
                  interesting events based on some logic, some pattern, which
                  could be beyond just simple point based comparison. Most of
                  the use cases where we need to maintain state for some period
                  of time and look for pattern in continuous manner with every
                  single new event, we will have to do more than simple query
                  and it becomes very hard most of the time to do it on the
                  streaming data.
                </p>
                <p>
                  Complex event processing comes to help us with these kinds of
                  advanced use cases. Whenever it becomes really hard and time
                  consuming then the best option could be machine learning.
                  While with machine learning we may find the pattern with
                  certain confidence and probability, with CEP it&apos;s always
                  absolute and with 100% confidence and probability. However,
                  there are many use cases suitable for ML and many for CEP
                </p>
                <p>
                  This is how CEP query (CEPQ) is defined in the BangDB. You may
                  check it out for quick reference. Now, before we go and show
                  how to write queries, let&apos;s appreciate the cep use cases
                  and why it&apos;s difficult to do it with &quot;filter&quot;
                  and &quot;join/jqry&quot;.
                </p>
                <h2>Scenario 1</h2>
                <h3>Use case 1</h3>
                <p>
                  Bank transaction where we have following stream structure.
                  Basically each event has name of the user, location from where
                  the transaction was initiated, transaction id, amount for the
                  transaction and current balance.
                </p>
                <HighlightedCpp
                  code={`{
   "schema":"myschema",
   "streams":[
      {
         "name":"account",
         "type":1,
         "swsz":86400,
         "inpt":[
            
         ],
         "attr":[
            {
               "name":"name",
               "type":5,
               "kysz":32,
               "sidx":1,
               "stat":2
            },
            {
               "name":"loc",
               "type":5,
               "kysz":32,
               "sidx":1,
               "stat":2
            },
            {
               "name":"txnid",
               "type":9,
               "stat":1
            },
            {
               "name":"amount",
               "type":11,
               "stat":3
            },
            {
               "name":"balance",
               "type":11,
               "stat":3
            }
         ]
      }
   ]
}`}
                />
                <p>
                  But it will always send the filtered data to some other
                  stream, whereas we won&apos;t have to necessarily send data to
                  other stream in case of CEP, it may directly send
                  notification.
                </p>
                <h3>Use case 2</h3>
                <p>
                  Find all events where amount is more than x anytime, x is a
                  balance in the current event data.
                </p>
                <p>x = the balance in the current event data</p>
                <HighlightedCpp
                  code={`"cepq":[
   {
      "name":"amount_exceed_var",
      "type":6,
      "tloc":86400,
      "fqry":{
         "name":"{\"query\":[{\"key\":\"amount\", \"cmp_op\":0, \"val\":\"$balance\"}], \"qtype\":2}",
         "type":1
      },
      "notf":12345
   }
]`}
                />
                <p>
                  &quot;qtype&quot;: 2 suggest that $balance is not a number or
                  value in itself, but the field value in the current data.
                </p>
                <h3>Use case 3</h3>
                <p>
                  Find all events where amount is more than avg(amount) at any
                  given time.
                </p>
                <HighlightedCpp
                  code={`"cepq":[
   {
      "name":"amount_exceed_avg",
      "type":6,
      "tloc":86400,
      "fqry":{
         "name":"{\"query\":[{\"key\":\"amount\", \"cmp_op\":0, \"val\":\"avg(account.amount, h_1, more_10)\"}],\"qtype\":3}",
         "type":1
      },
      "notf":12345
   }
]`}
                />
                <p>
                  &quot;qtype&quot;: 3 means we need to compute the value using
                  the function. avg(account.amount, h_1, more_10) means we need
                  to take average of amount for 1 hour (h_1 or hour_1) from
                  stream account. more_10 indicates, 10% more than the average
                  value. General structure for this function is following:
                </p>
                <HighlightedCpp
                  code={`func(stream.attribute, GRAN_NUM, MARGIN_NUM)
func names are = {"AVG", "SUM", "STD", "MIN", "MAX", "COUNT"};
gran names are = {"MINUTE", "HOUR", "DAY", "WEEK", "MONTH", "YEAR"};
margin names are = {"MORE", "LESS", "ABSMORE", "ABSLESS"};`}
                />
                <p>
                  We can write partial or full names for all these, therefore
                  h_1 is HOUR_1, 1 hour. MORE or LESS is with percentage, i.e.
                  NUM associated is percentage, whereas ABSMORE or ABSLESS is
                  for absolute numbers.
                </p>
                <h3>Use case 4</h3>
                <p>Find all events where avg(amount) is more than fix num X.</p>
                <HighlightedCpp
                  code={`"cepq":{
   "name":"amount_exceed_avg_fixed",
   "type":6,
   "tloc":86400,
   "fqry":{
      "name":"{\"query\":[{\"key\":\"avg(account.amount, h_1, more_10)\", \"cmp_op\":0, \"val\":1010}],\"qtype\":3}",
      "type":1
   },
   "notf":54321
}
]`}
                />
                <h3>Use case 5</h3>
                <p>Find all events where avg(amount) is more than avg(due).</p>
                <HighlightedCpp
                  code={`"cepq":{
   "name":"amount_exceed_avg_avg",
   "type":6,
   "tloc":86400,
   "fqry":{
      "name":"{\"query\":[{\"key\":\"avg(account.amount, h_1, more_10)\", \"cmp_op\":0, \"val\":\"avg(account.balance, h_1, more_10)\"}],\"qtype\":3}",
      "type":1
   },
   "notf":989898
}
]`}
                />
                <h3>Use case 6</h3>
                <p>
                  Find all transaction which has same txnid within 100 sec for
                  two different locations.
                </p>
                <HighlightedCpp
                  code={`"cepq":{
   "name":"txn_fraud_case",
   "type":1,
   "tloc":1000,
   "ratr":[
      "txnid",
      "loc"
   ],
   "rstm":"account",
   "iatr":[
      "name",
      "balance",
      "txnid",
      "loc"
   ],
   "jqry":{
      "cond":[
         "txnid",
         "loc"
      ],
      "opid":11,
      "args":[
         "txnid",
         "loc"
      ],
      "cmp":[
         "EQ",
         "NE"
      ]
   },
   "cond":[
      {
         "name":"NUMT",
         "val":1,
         "opid":1
      },
      {
         "name":"DUR",
         "val":100,
         "opid":0
      }
   ],
   "ostm":"txn_fraud",
   "notf":250975
}
]`}
                />
                <p>
                  cepq.type is join_type, 1 means simple join, as defined in
                  details <Link href={"/join"}>here</Link>.
                </p>
                <h3>Use case 7</h3>
                <p>
                  Now, let&apos;s go back to IOT case. Let&apos;s say we wish to
                  find a pattern where n readings of temperature is consistently
                  increasing and higher than a threshold Th… Let&apos;s define a
                  stream here.
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
               "type":11
            },
            {
               "name":"point",
               "type":5,
               "kysz":32
            }
         ],
         "cepq":[
            {
               "name":"temp_inc_pat_join",
               "type":1,
               "tloc":3000,
               "ratr":[
                  "temp",
                  "point"
               ],
               "rstm":"temp_stream",
               "iatr":[
                  "temp"
               ],
               "jqry":{
                  "cond":[
                     "point",
                     "temp"
                  ],
                  "opid":11,
                  "args":[
                     "point",
                     "temp"
                  ],
                  "cmp":[
                     "EQ",
                     "LT"
                  ]
               },
               "fqry":{
                  "name":"{\"query\":[{\"key\":\"temp\", \"cmp_op\":0, \"val\":70.5}]}",
                  "type":1
               },
               "cond":[
                  {
                     "name":"NUMT",
                     "val":3,
                     "opid":1
                  },
                  {
                     "name":"DUR",
                     "val":1000,
                     "opid":0
                  }
               ],
               "ostm":"temp_inc_stream",
               "notf":1
            }
         ]
      },
      {
         "name":"temp_inc_stream",
         "type":3,
         "inpt":[
            "temp_stream"
         ],
         "attr":[
            {
               "name":"point",
               "type":5,
               "kysz":32
            },
            {
               "name":"temp",
               "type":11
            }
         ]
      }
   ]
}`}
                />
                <p>
                  As you see the &quot;cepq&quot; definition here. cepq.type=1
                  means join_type is 1 (simple type), it applies fqry to filter
                  events which has temp &gt; 70.5 and then it applies jqry where
                  it checks point is same and then earlier temp is less than
                  this temp and then condition that it happens 3 times within
                  1000 sec of duration.
                </p>
                <p>Here is the example:</p>
                <HighlightedCpp
                  code={`put [ temp_stream ] : {"temp":70.1, "point":"1"}
put [ temp_stream ] : {"temp":71.6, "point":"1"}
put [ temp_stream ] : {"temp":72.1, "point":"1"} 
put [ temp_stream ] : {"temp":72.2, "point":"1"} 
put [ temp_stream ] : {"temp":72.4, "point":"1"} 
put [ temp_stream ] : {"temp":72.7, "point":"1"} 
put [ temp_stream ] : {"temp":73.1, "point":"1"}`}
                />
                <p>Output is</p>
                <HighlightedOutput
                  code={`-[ temp_inc_stream ] event = {"temp":72.40000000000001,"_pk":1585078131443321,"temp":72.2,"point":"1","_jpk1":1585078131431913,"_v":1} 
-[ temp_inc_stream ] event = {"temp":72.7,"_pk":1585078131454858,"temp":72.40000000000001,"point":"1","_jpk1":1585078131443321,"_v":1}
-[ temp_inc_stream ] event = {"temp":73.10000000000001,"_pk":1585078131466322,"temp":72.7,"point":"1","_jpk1":1585078131454858,"_v":1}`}
                />
                <aside className="doc-note">
                  <strong>Note: </strong>First event is not considered as it
                  couldn&apos;t get filtered due to temp = 70.1 is less than
                  70.5, rest are all filtered and those are selected for output
                  or notification where temp increased continuously for 3 times
                  within 1000 sec of duration.
                </aside>
                <h3>Use case 8</h3>
                <p>
                  Join two streams, temp and pressure, such that the pressure is
                  more than 11.3 at least 2 consecutive times within 1000 sec
                  duration for any given point. Let&apos;s look at the stream
                  definition along with &quot;cepq&quot; query.
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
               "type":11
            },
            {
               "name":"point",
               "type":9
            }
         ],
         "cepq":[
            {
               "name":"temp_pressure_join",
               "type":3,
               "tloc":3000,
               "iatr":[
                  "temp",
                  "point"
               ],
               "rstm":"pressure_stream",
               "ratr":[
                  "pressure"
               ],
               "jqry":{
                  "cond":[
                     "point"
                  ],
                  "opid":11,
                  "args":[
                     "point"
                  ]
               },
               "ostm":"temp_pressure_stream"
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
               "type":11
            },
            {
               "name":"point",
               "type":9
            }
         ],
         "cepq":[
            {
               "name":"temp_pressure_join",
               "type":5,
               "tloc":3000,
               "ratr":[
                  "temp",
                  "point"
               ],
               "rstm":"temp_stream",
               "iatr":[
                  "pressure"
               ],
               "jqry":{
                  "cond":[
                     "point"
                  ],
                  "opid":11,
                  "args":[
                     "point"
                  ]
               },
               "fqry":{
                  "name":"{\"query\":[{\"key\":\"pressure\", \"cmp_op\":0, \"val\":11.3}]}",
                  "type":1
               },
               "cond":[
                  {
                     "name":"NUMT",
                     "val":2,
                     "opid":1
                  },
                  {
                     "name":"DUR",
                     "val":1000,
                     "opid":0
                  }
               ],
               "ostm":"temp_pressure_stream",
               "notf":1
            }
         ]
      },
      {
         "name":"temp_pressure_stream",
         "type":3,
         "inpt":[
            "temp_stream",
            "pressure_stream"
         ],
         "attr":[
            {
               "name":"point",
               "type":9
            },
            {
               "name":"temp",
               "type":11
            },
            {
               "name":"pressure",
               "type":11
            }
         ]
      }
   ]
}`}
                />
                <p>
                  Here is how the output may be for given events streaming in.
                </p>
                <HighlightedCpp
                  code={`put [ temp_stream ] : {"temp":70.1, "point":1}
put [ pressure_stream ] : {"pressure":10.2, "point":2}
put [ pressure_stream ] : {"pressure":11.1, "point":1}
put [ pressure_stream ] : {"pressure":11.5, "point":1} 
put [ pressure_stream ] : {"pressure":11.8, "point":1} 
put [ temp_stream ] : {"temp":71.1, "point":2}
put [ pressure_stream ] : {"pressure":11.9, "point":1} 
put [ pressure_stream ] : {"pressure":12.1, "point":2} 
put [ temp_stream ] : {"temp":71.2, "point":1} 
put [ pressure_stream ] : {"pressure":12.5, "point":1} 
put [ pressure_stream ] : {"pressure":12.65, "point":2} 
put [ pressure_stream ] : {"pressure":12.75, "point":1}`}
                />
                <p>The joined stream</p>
                <HighlightedOutput
                  code={`-[ temp_pressure_stream ] event = {"pressure":11.8,"_pk":1585079098998843,"temp":70.10000000000001,"point":1,"_jpk1":1585079098950997,"_v":1} 
-[ temp_pressure_stream ] event = {"pressure":11.9,"_pk":1585079099051050,"temp":70.10000000000001,"point":1,"_jpk1":1585079098950997,"_v":1} 
-[ temp_pressure_stream ] event = {"pressure":12.65,"_pk":1585079099137108,"temp":71.10000000000001,"point":2,"_jpk1":1585079099029910,"_v":1} 
-[ temp_pressure_stream ] event = {"pressure":12.75,"_pk":1585079099150755,"temp":71.2,"point":1,"_jpk1":1585079099093652,"_v":1}`}
                />
                <p>
                  As you see, tuple (11.8, 70.1) is selected as 11.8 exceeds
                  11.3 (fqry) and two times consecutively increasing (11.5,
                  11.8) for point 1 same with tuple(11.9, 70.1). Then since temp
                  (71.2, 1) came in, therefore it counted 2 times again to
                  output (12.75, 71.2) for point 1, meanwhile (12.65, 71.1) also
                  satisfied for point 2.
                </p>
                <p>
                  We may also put a point num (ex: 1) in the query to only
                  output for that point; i.e.
                </p>
                <HighlightedCpp
                  code={`"cepq":[
   {
      "name":"temp_pressure_join",
      "type":5,
      "tloc":3000,
      "ratr":[
         "temp",
         "point"
      ],
      "rstm":"temp_stream",
      "iatr":[
         "pressure"
      ],
      "jqry":{
         "cond":[
            "point"
         ],
         "opid":12,
         "args":[
            "1"
         ]
      },
      "fqry":{
         "name":"{\"query\":[{\"key\":\"pressure\", \"cmp_op\":0, \"val\":11.3}]}",
         "type":1
      },
      "cond":[
         {
            "name":"NUMT",
            "val":2,
            "opid":1
         },
         {
            "name":"DUR",
            "val":1000,
            "opid":0
         }
      ],
      "ostm":"temp_pressure_stream",
      "notf":1
   }
]`}
                />
                <aside className="doc-note">
                  <strong>Note: </strong>When we changed &quot;point&quot; with
                  &quot;1&quot;, then we also made &quot;opid&quot;:12 (changed
                  from 11).
                </aside>
                <h2>Scenario 2</h2>
                <h3>Use case 9</h3>
                <p>
                  Pizza delivery. Let&apos;s say we wish to get notified or
                  store all the events when status of pizza delivery changes,
                  from received order to delivered and all intermediate
                  statuses. Let&apos;s look at the first one, where we wish to
                  be notified for all the events where status changed and then
                  if we wish to know only when it was delivered.
                </p>
                <HighlightedCpp
                  code={`{
   "schema":"myschema",
   "streams":[
      {
         "name":"pizza_stream",
         "type":1,
         "swsz":81600,
         "inpt":[
            
         ],
         "attr":[
            {
               "name":"oid",
               "type":9
            },
            {
               "name":"status",
               "type":5
            },
            {
               "name":"custid",
               "type":9
            }
         ],
         "cepq":[
            {
               "name":"pizza_delivery_tracker",
               "type":1,
               "tloc":3000,
               "ratr":[
                  "oid",
                  "custid",
                  "status"
               ],
               "rstm":"pizza_stream",
               "iatr":[
                  "oid",
                  "custid",
                  "status"
               ],
               "jqry":{
                  "cond":[
                     "oid",
                     "custid",
                     "status"
                  ],
                  "opid":11,
                  "args":[
                     "oid",
                     "custid",
                     "status"
                  ],
                  "cmp":[
                     "EQ",
                     "EQ",
                     "NE"
                  ]
               },
               "cond":[
                  {
                     "name":"NUMT",
                     "val":1,
                     "opid":1
                  },
                  {
                     "name":"DUR",
                     "val":1000,
                     "opid":0
                  }
               ],
               "ostm":"pizza_delivery_tracker_stream",
               "notf":1
            }
         ]
      },
      {
         "name":"pizza_delivery_tracker_stream",
         "type":3,
         "inpt":[
            "pizza_stream"
         ],
         "attr":[
            {
               "name":"oid",
               "type":9
            },
            {
               "name":"status",
               "type":5
            },
            {
               "name":"custid",
               "type":9
            }
         ]
      }
   ]
}`}
                />
                <p>
                  The pizza_stream has orderid (oid), status and custid. This is
                  joining with self using cepq.type = 1, which is simple join.
                  It runs jqry, which does following join:
                </p>
                <p>
                  <code>
                    prev.oid = cur.oid AND prev.custid = cur.custid AND
                    prev.status != cur.status
                  </code>{" "}
                  and when this is satisfied, for 1 time (NUMT = 1) within
                  duration of 1000 sec (DUR = 1000), then it notifies and also
                  sends data to output stream
                  <code>pizza_delivery_tracker_stream</code>.
                </p>
                <p>Here is the output for sample event data:</p>
                <HighlightedCpp
                  code={`put [ pizza_stream ] : {"oid":1, "status":"1", "custid":11}
put [ pizza_stream ] : {"oid":2, "status":"1", "custid":12}
put [ pizza_stream ] : {"oid":3, "status":"1", "custid":13} 
put [ pizza_stream ] : {"oid":2, "status":"2", "custid":12} 
put [ pizza_stream ] : {"oid":2, "status":"2", "custid":12} 
put [ pizza_stream ] : {"oid":4, "status":"1", "custid":14} 
put [ pizza_stream ] : {"oid":2, "status":"3", "custid":12} 
put [ pizza_stream ] : {"oid":3, "status":"2", "custid":13} 
put [ pizza_stream ] : {"oid":1, "status":"2", "custid":11} 
put [ pizza_stream ] : {"oid":3, "status":"3", "custid":13} `}
                />
                <HighlightedOutput
                  code={`-[ pizza_delivery_tracker_stream ] event = {"oid":2,"custid":12,"status":"2","_pk":1585141967098022,"oid":2,"custid":12,"status":"1","_jpk1":1585141967076688,"_v":1}
-[ pizza_delivery_tracker_stream ] event = {"oid":2,"custid":12,"status":"3","_pk":1585141967130940,"oid":2,"custid":12,"status":"2","_jpk1":1585141967098022,"_v":1} 
-[ pizza_delivery_tracker_stream ] event = {"oid":3,"custid":13,"status":"2","_pk":1585141967142349,"oid":3,"custid":13,"status":"1","_jpk1":1585141967087023,"_v":1}
-[ pizza_delivery_tracker_stream ] event = {"oid":1,"custid":11,"status":"2","_pk":1585141967153537,"oid":1,"custid":11,"status":"1","_jpk1":1585141967066211,"_v":1} 
-[ pizza_delivery_tracker_stream ] event = {"oid":3,"custid":13,"status":"3","_pk":1585141967165227,"oid":3,"custid":13,"status":"2","_jpk1":1585141967142349,"_v":1}`}
                />
                <h3>Use case 10</h3>
                <p>Let&apos;s get notified only when the pizza is delivered.</p>
                <HighlightedCpp
                  code={`{
   "schema":"myschema",
   "streams":[
      {
         "name":"pizza_stream",
         "type":1,
         "swsz":81600,
         "inpt":[
            
         ],
         "attr":[
            {
               "name":"oid",
               "type":9
            },
            {
               "name":"status",
               "type":5
            },
            {
               "name":"custid",
               "type":9
            }
         ],
         "cepq":[
            {
               "name":"pizza_delivery_tracker",
               "type":1,
               "tloc":3000,
               "ratr":[
                  "oid",
                  "custid",
                  "status"
               ],
               "rstm":"pizza_stream",
               "iatr":[
                  "oid",
                  "custid",
                  "status"
               ],
               "jqry":{
                  "cond":[
                     "oid",
                     "custid",
                     "status"
                  ],
                  "opid":11,
                  "args":[
                     "oid",
                     "custid",
                     "status"
                  ],
                  "cmp":[
                     "EQ",
                     "EQ",
                     "NE"
                  ]
               },
               "cond":[
                  {
                     "name":"NUMT",
                     "val":1,
                     "opid":1
                  },
                  {
                     "name":"DUR",
                     "val":1000,
                     "opid":0
                  },
                  {
                     "name":"cqry",
                     "fqry":{
                        "name":"{\"query\":[{\"key\":\"status\", \"cmp_op\":4, \"val\":\"3\"}], \"qtype\":1}",
                        "type":1
                     }
                  }
               ],
               "ostm":"pizza_delivery_tracker_stream",
               "notf":1
            }
         ]
      },
      {
         "name":"pizza_delivery_tracker_stream",
         "type":3,
         "inpt":[
            "pizza_stream"
         ],
         "attr":[
            {
               "name":"oid",
               "type":9
            },
            {
               "name":"status",
               "type":5
            },
            {
               "name":"custid",
               "type":9
            }
         ]
      }
   ]
}`}
                />
                <p>
                  Here we also add fqry (filter) where it only considers if
                  status = 3.
                </p>
                <p>The sample output is:</p>
                <HighlightedCpp
                  code={`put [ pizza_stream ] passed : {"oid":1, "status":"1", "custid":11}
put [ pizza_stream ] passed : {"oid":2, "status":"1", "custid":12}
put [ pizza_stream ] passed : {"oid":3, "status":"1", "custid":13}
put [ pizza_stream ] passed : {"oid":2, "status":"2", "custid":12}
put [ pizza_stream ] passed : {"oid":2, "status":"2", "custid":12}
put [ pizza_stream ] passed : {"oid":4, "status":"1", "custid":14}
put [ pizza_stream ] passed : {"oid":2, "status":"3", "custid":12}
put [ pizza_stream ] passed : {"oid":3, "status":"2", "custid":13}
put [ pizza_stream ] passed : {"oid":1, "status":"2", "custid":11}
put [ pizza_stream ] passed : {"oid":3, "status":"3", "custid":13}`}
                />
                <HighlightedOutput
                  code={`-[ pizza_delivery_tracker_stream ] event = {"oid":3,"custid":13,"status":"3","_pk":1585143131803123,"oid":3,"custid":13,"status":"2","_jpk1":1585143131780487,"_v":1}
-[ pizza_delivery_tracker_stream ] event = {"oid":2,"custid":12,"status":"3","_pk":1585143131769569,"oid":2,"custid":12,"status":"2","_jpk1":1585143131736568,"_v":1}`}
                />
              </div>
            </article>
          </div>
        </main>
      </section>
    </React.Fragment>
  );
}
