import React from "react";
import Head from "next/head";
import Link from "next/link";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";
import HighlightedOutput from "../../../components/HighlightedOutput";
import HighlightedCpp from "../../../components/HighlightedCpp";
import HighlightedJava from "../../../components/HighlightedJava";
import Codebox from "../../../components/Codebox";

export default function QueryStreamsToRetrieveData() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Query streams to retrieve data - BangDB REST API</title>
        <meta
          name="description"
          content="Learn how to add document/data into a table using BangDB 2.0 REST API. Read the documentation to know more about BangDB 2.0 REST API."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Query streams to retrieve data - BangDB REST API"
        />
        <meta
          property="og:description"
          content="Learn how to add document/data into a table using BangDB 2.0 REST API. Read the documentation to know more about BangDB 2.0 REST API."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="Query streams to retrieve data - BangDB REST API"
        />
        <meta
          name="twitter:description"
          content="Learn how to add document/data into a table using BangDB 2.0 REST API. Read the documentation to know more about BangDB 2.0 REST API."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">Query streams to retrieve data</h1>
        <div className="article-body">
          <p>To query streams to retrieve data:</p>
          <p>
            <strong>Method</strong> : POST
          </p>
          <p>
            <strong>URI</strong> : /db/&lt;dbname&gt;/query
          </p>
          <p>Body</p>
          <HighlightedCpp code={`{"sql":"sql query..."}`} />
          <p>We can use the same API [ please see API # 7 ].</p>
          <p>
            However the sql query will have some specific changes for streams.
            Some of the examples are here.
          </p>
          <ol
            style={{
              listStyle: "upper-alpha",
            }}
          >
            <li>
              To get few rows from a stream [there are different kinds of
              streams, input, filter, join, entity] the SQL query structure
              looks like, note where condition, limit etc are optional.
            </li>
            <HighlightedCpp
              code={`select * from <schema_name>.<stream_name> where <conditions> <limit> <limit_number>`}
            />

            <li>
              To get few rows from running statistics/aggregated streams for a
              particular attributethe sql query structure looks like.
            </li>
            <HighlightedCpp
              code={`select aggr(attribute_name) from <schema_name>.<stream_name> where <conditions> <limit> <limit_number>`}
            />
            <li>
              To get few rows from running statistics/aggregated for groupby
              attributes.
            </li>
            <p>The SQL query structure looks like:</p>
            <HighlightedCpp
              code={`select aggr(attribute_name) from <schema_name>.<stream_name> where <conditions> groupby <limit> <limit_number>`}
            />
          </ol>
          <p>
            For example, let&apos;s register another schema which does little
            more than previous one. Below is the schema:
          </p>
          <HighlightedCpp
            code={`{
   "schema":"website",
   "streams":[
      {
         "name":"visitor",
         "type":1,
         "swsz":86400,
         "inpt":[
            
         ],
         "attr":[
            {
               "name":"vid",
               "type":5,
               "sidx":1,
               "stat":"UCOUNT"
            },
            {
               "name":"prod",
               "type":5,
               "kysz":24
            },
            {
               "name":"catid",
               "type":5,
               "kysz":24,
               "stat":"COUNT"
            },
            {
               "name":"pgid",
               "type":5,
               "kysz":48,
               "sidx":1,
               "gran":300,
               "stat":"UCOUNT"
            },
            {
               "name":"price",
               "type":11,
               "stat":"RSTAT"
            },
            {
               "name":"items",
               "type":9,
               "stat":"RSTAT"
            }
         ],
         "catr":[
            {
               "name":"pred_sales",
               "type":11,
               "opnm":"PRED",
               "algo":"SVM",
               "attr_type":"HYB",
               "model":"sales_model",
               "iatr":[
                  "vid",
                  "pgid",
                  "catid",
                  "pgid",
                  "items",
                  "price"
               ]
            }
         ],
         "gpby":[
            {
               "gpat":[
                  "catid",
                  "pgid"
               ],
               "iatr":"vid",
               "stat":"COUNT",
               "gran":300,
               "kysz":64
            },
            {
               "gpat":[
                  "catid"
               ],
               "iatr":"vid",
               "stat":"UCOUNT",
               "gran":300,
               "kysz":64
            },
            {
               "gpat":[
                  "catid"
               ],
               "iatr":"price",
               "stat":"RSTAT",
               "gran":300,
               "kysz":64
            }
         ],
         "enty":[
            {
               "name":"prod_details_entity1",
               "opid":1,
               "ratr":[
                  "nview"
               ],
               "iatr":[
                  "vid"
               ],
               "pkatr":[
                  {
                     "name":"pk1",
                     "type":5,
                     "kysz":24,
                     "opid":1,
                     "iatr":[
                        "prod"
                     ]
                  }
               ],
               "rstm":"prod_details",
               "doc_buf_factor":50,
               "sync_ts":60
            },
            {
               "name":"prod_details_entity2",
               "opid":2,
               "ratr":[
                  "uvisit"
               ],
               "iatr":[
                  "vid"
               ],
               "pkatr":[
                  {
                     "name":"pk1",
                     "opid":1,
                     "type":5,
                     "iatr":[
                        "prod"
                     ]
                  }
               ],
               "rstm":"prod_details",
               "doc_buf_factor":50,
               "sync_ts":60
            },
            {
               "name":"prod_details_entity3",
               "opid":3,
               "ratr":[
                  "sales"
               ],
               "iatr":[
                  "price"
               ],
               "pkatr":[
                  {
                     "name":"pk1",
                     "opid":1,
                     "type":5,
                     "iatr":[
                        "prod"
                     ]
                  }
               ],
               "rstm":"prod_details",
               "doc_buf_factor":50,
               "sync_ts":60
            },
            {
               "name":"prod_details_entity4",
               "opid":3,
               "ratr":[
                  "total_items"
               ],
               "iatr":[
                  "items"
               ],
               "pkatr":[
                  {
                     "name":"pk1",
                     "opid":1,
                     "type":5,
                     "iatr":[
                        "prod"
                     ]
                  }
               ],
               "rstm":"prod_details",
               "doc_buf_factor":50,
               "sync_ts":60
            }
         ],
         "rels":[
            {
               "sub":"vid",
               "obj":"prod",
               "rel":"BUYS",
               "sub_props":[
                  "catid"
               ],
               "obj_props":[
                  "items"
               ],
               "rel_props":[
                  "price"
               ]
            }
         ]
      },
      {
         "name":"prod_details",
         "type":4,
         "inpt":[
            "visitor"
         ],
         "attr":[
            {
               "name":"pk1",
               "type":5,
               "kysz":24,
               "pk":1
            },
            {
               "name":"nview",
               "type":9,
               "stat":"COUNT"
            },
            {
               "name":"uvisit",
               "type":9,
               "stat":"COUNT"
            },
            {
               "name":"sales",
               "type":11,
               "stat":"RSTAT"
            },
            {
               "name":"total_items",
               "type":9,
               "stat":"RSTAT"
            }
         ]
      }
   ]
}`}
          />
          <p>Explanation of the schema:</p>
          <ol>
            <li>
              We have a website and we wish to capture few data points for some
              analysis.
            </li>
            <li>
              We are capturing vid (visitor id), pgid (page id that the user is
              on), prod (product id), catid (category of the page/product),
              price (total cost) and items (num of items).
            </li>
            <li>
              We wish to compute running statistics of unique visitor count,
              category count etc… (see the &quot;stat&quot; attribute).
            </li>
            <li>
              We further wish to compute running groupby aggregations, for ex;
              unique count of visitors group by catid (category) and pgid
              (page).
            </li>
            <li>
              We also wish to predict the total sales using “catr” (computed
              attribute) using “sales_model”, which is trained using SVM algo
              with set of attributes /fields (vid, pgid, catid, items).
            </li>
            <li>
              It&apos;s often very common to query for total items sold so far
              since beginning, total sales since beginning etc.. Although common
              but these are pretty compute intensive jobs and takes so much time
              that we end up running it once in a day or so. Within BangDB we
              can “enty” (entity) which maintains such values always ready. More
              so, we can do running statistics also on this. Here we wish to
              keep several such entities like, total number of views so far,
              total sales so far etc.
            </li>
            <li>
              We also have graph triple defined in “rels” such that as data in
              inserted into the stream, the graph.
            </li>
          </ol>
          <p>
            Let&apos;s register the schema using the API as defined above [ POST
            /stream ]
          </p>
          <p>
            Now, let&apos;s insert some events into the stream using the API.
          </p>
          <HighlightedJava
            code={`curl -H "Content-Type: application/json" -d'{"vid":"v1","prod":"p1","catid":"c1","pgid":"pg1","price":123.45,"items":3}' -X POST http://192.168.1.105:18080/stream/website/visitor

curl -H "Content-Type: application/json" -d'{"vid":"v2","prod":"p1","catid":"c1","pgid":"pg1","price":43.27,"items":2}' -X POST http://192.168.1.105:18080/stream/website/visitor

curl -H "Content-Type: application/json" -d'{"vid":"v3","prod":"p2","catid":"c1","pgid":"pg2","price":67.98,"items":2}' -X POST http://192.168.1.105:18080/stream/website/visitor

curl -H "Content-Type: application/json" -d'{"vid":"v3","prod":"p1","catid":"c1","pgid":"pg1","price":27.98,"items":1}' -X POST http://192.168.1.105:18080/stream/website/visitor

curl -H "Content-Type: application/json" -d'{"vid":"v3","prod":"p3","catid":"c2","pgid":"pg3","price":71.65,"items":2}' -X POST http://192.168.1.105:18080/stream/website/visitor

curl -H "Content-Type: application/json" -d'{"vid":"v2","prod":"p3","catid":"c2","pgid":"pg3","price":41.65,"items":1}' -X POST http://192.168.1.105:18080/stream/website/visitor

curl -H "Content-Type: application/json" -d'{"vid":"v1","prod":"p3","catid":"c2","pgid":"pg3","price":42.65,"items":1}' -X POST http://192.168.1.105:18080/stream/website/visitor

curl -H "Content-Type: application/json" -d'{"vid":"v1","prod":"p2","catid":"c1","pgid":"pg2","price":47.05,"items":1}' -X POST http://192.168.1.105:18080/stream/website/visitor

curl -H "Content-Type: application/json" -d'{"vid":"v1","prod":"p1","catid":"c1","pgid":"pg1","price":54.75,"items":2}' -X POST http://192.168.1.105:18080/stream/website/visitor

curl -H "Content-Type: application/json" -d'{"vid":"v1","prod":"p2","catid":"c2","pgid":"pg2","price":51.50,"items":1}' -X POST http://192.168.1.105:18080/stream/website/visitor`}
          />
          <p>
            Now we have inserted 10 events for visitor v1,v2 and v3. Let&apos;s
            now run the query.
          </p>
          <h2>To get few rows from a stream</h2>
          <p>
            There are different kinds of streams, input, filter, join, entity.
          </p>
          <ol style={{ listStyle: "roman" }}>
            <li>Select all the events from the stream</li>
            <HighlightedJava
              code={`curl -H "Content-Type: application/json" -d'{"sql":"select * from website.visitor"}' -X POST http://192.168.1.105:18080/db/mydb/query`}
            />
            <p>Response</p>
            <HighlightedOutput
              code={`{
   "rows":[
      {
         "k":1648485283906300,
         "v":"{\"vid\":\"v1\",\"prod\":\"p2\",\"catid\":\"c2\",\"pgid\":\"pg2\",\"price\":51.5,\"items\":1,\"_pk\":1648485283906300,\"_v\":1}"
      },
      {
         "k":1648485230554236,
         "v":"{\"vid\":\"v1\",\"prod\":\"p1\",\"catid\":\"c1\",\"pgid\":\"pg1\",\"price\":54.75,\"items\":2,\"_pk\":1648485230554236,\"_v\":1}"
      },
      {
         "k":1648485192696760,
         "v":"{\"vid\":\"v1\",\"prod\":\"p2\",\"catid\":\"c1\",\"pgid\":\"pg2\",\"price\":47.05,\"items\":1,\"_pk\":1648485192696760,\"_v\":1}"
      },
      {
         "k":1648485151719474,
         "v":"{\"vid\":\"v1\",\"prod\":\"p3\",\"catid\":\"c2\",\"pgid\":\"pg3\",\"price\":42.65,\"items\":1,\"_pk\":1648485151719474,\"_v\":1}"
      },
      {
         "k":1648485133970000,
         "v":"{\"vid\":\"v2\",\"prod\":\"p3\",\"catid\":\"c2\",\"pgid\":\"pg3\",\"price\":41.65,\"items\":1,\"_pk\":1648485133970000,\"_v\":1}"
      },
      {
         "k":1648485109020973,
         "v":"{\"vid\":\"v3\",\"prod\":\"p3\",\"catid\":\"c2\",\"pgid\":\"pg3\",\"price\":71.65000000000001,\"items\":2,\"_pk\":1648485109020973,\"_v\":1}"
      },
      {
         "k":1648484176864142,
         "v":"{\"vid\":\"v3\",\"prod\":\"p1\",\"catid\":\"c1\",\"pgid\":\"pg1\",\"price\":27.98,\"items\":1,\"_pk\":1648484176864142,\"_v\":1}"
      },
      {
         "k":1648484143576439,
         "v":"{\"vid\":\"v3\",\"prod\":\"p2\",\"catid\":\"c1\",\"pgid\":\"pg2\",\"price\":67.98,\"items\":2,\"_pk\":1648484143576439,\"_v\":1}"
      },
      {
         "k":1648484107856603,
         "v":"{\"vid\":\"v2\",\"prod\":\"p1\",\"catid\":\"c1\",\"pgid\":\"pg1\",\"price\":43.27,\"items\":2,\"_pk\":1648484107856603,\"_v\":1}"
      },
      {
         "k":1648484074927522,
         "v":"{\"vid\":\"v1\",\"prod\":\"p1\",\"catid\":\"c1\",\"pgid\":\"pg1\",\"price\":123.45,\"items\":3,\"_pk\":1648484074927522,\"_v\":1}"
      }
   ],
   "num_items":10,
   "more_data_to_come":0,
   "switch_done":1
}`}
            />
            <li>To count number of rows in the stream</li>
            <HighlightedJava
              code={`curl -H "Content-Type: application/json" -d'{"sql":"select count(*) from website.visitor"}' -X POST http://192.168.1.105:18080/db/mydb/quer`}
            />
            <p>Response</p>
            <HighlightedOutput
              code={`{
   "retval": 10
}`}
            />
            <p>Total count is 10.</p>
            <li>Select only 2 events</li>
            <HighlightedJava
              code={`curl -H "Content-Type: application/json" -d'{"sql":"select * from website.visitor limit 2"}' -X POST http://192.168.1.105:18080/db/mydb/query`}
            />
            <p>Response</p>
            <HighlightedOutput
              code={`{
   "rows":[
      {
         "k":1648485283906300,
         "v":"{\"vid\":\"v1\",\"prod\":\"p2\",\"catid\":\"c2\",\"pgid\":\"pg2\",\"price\":51.5,\"items\":1,\"_pk\":1648485283906300,\"_v\":1}"
      },
      {
         "k":1648485230554236,
         "v":"{\"vid\":\"v1\",\"prod\":\"p1\",\"catid\":\"c1\",\"pgid\":\"pg1\",\"price\":54.75,\"items\":2,\"_pk\":1648485230554236,\"_v\":1}"
      }
   ],
   "levk":1648485230554236,
   "num_items":2,
   "more_data_to_come":1,
   "switch_done":1
}`}
            />
            <aside className="doc-note">
              <strong>Note: </strong>If you see, &quot;more_data_to_come&quot;
              is set to 1, since there are more events in the system.
            </aside>
            <li>
              Select events where visitor is &quot;v2&quot; and page id is
              &quot;pg1&quot;.
            </li>
            <HighlightedJava
              code={`curl -H "Content-Type: application/json" -d'{"sql":"select * from website.visitor where vid = \"v2\" and pgid = \"pg1\""}' -X POST http://192.168.1.105:18080/db/mydb/query`}
            />
            <HighlightedOutput
              code={`{
   "rows":[
      {
         "k":1648484107856603,
         "v":"{\"vid\":\"v2\",\"prod\":\"p1\",\"catid\":\"c1\",\"pgid\":\"pg1\",\"price\":43.27,\"items\":2,\"_pk\":1648484107856603,\"_v\":1}"
      }
   ],
   "sec_buf":"EgAAAF9iYW5nZGJfZHJpdmVyX3NpXwAwBAAAAHBnaWQAAAAAAAAAAAA=",
   "num_items":1,
   "more_data_to_come":0,
   "switch_done":1
}`}
            />
            <li>Select events where price items are 3 or more</li>
            <HighlightedJava
              code={`curl -H "Content-Type: application/json" -d'{"sql":"select * from website.visitor where items >= 3"}' -X POST http://192.168.1.105:18080/db/mydb/query`}
            />
            <HighlightedOutput
              code={`{
   "rows":[
      {
         "k":1648484074927522,
         "v":"{\"vid\":\"v1\",\"prod\":\"p1\",\"catid\":\"c1\",\"pgid\":\"pg1\",\"price\":123.45,\"items\":3,\"_pk\":1648484074927522,\"_v\":1}"
      }
   ],
   "num_items":1,
   "more_data_to_come":0,
   "switch_done":1
}`}
            />
            <p>And so on...</p>
            <li>To select data from entity stream</li>
            <HighlightedJava
              code={`curl -H "Content-Type: application/json" -d' {"sql":"select * from website.prod_details"}' -X POST http://192.168.1.105:18080/db/mydb/query`}
            />
            <HighlightedOutput
              code={`{
   "rows":[
      {
         "k":"p1",
         "v":"{\"nview\":{\"cnt\":4},\"total_items\":{\"cnt\":4,\"sum\":8,\"min\":1,\"max\":3,\"avg\":2,\"stdd\":0.816496580927726,\"skew\":0,\"kurt\":1441.5},\"uvisit\":{\"cnt\":3},\"sales\":{\"cnt\":4,\"sum\":249.45,\"min\":27.98,\"max\":123.45,\"avg\":62.3625,\"stdd\":42.17547737331098,\"skew\":1.598788206225121,\"kurt\":2.786407659857769}}"
      },
      {
         "k":"p2",
         "v":"{\"nview\":{\"cnt\":3},\"total_items\":{\"cnt\":3,\"sum\":4,\"min\":1,\"max\":2,\"avg\":1.333333333333333,\"stdd\":0.5773502691896258,\"skew\":1.73205080756887,\"kurt\":0},\"uvisit\":{\"cnt\":2},\"sales\":{\"cnt\":3,\"sum\":166.53,\"min\":47.05,\"max\":67.98,\"avg\":55.51,\"stdd\":11.02616433761082,\"skew\":1.420104552713263,\"kurt\":0}}"
      },
      {
         "k":"p3",
         "v":"{\"nview\":{\"cnt\":3},\"total_items\":{\"cnt\":3,\"sum\":4,\"min\":1,\"max\":2,\"avg\":1.333333333333333,\"stdd\":0.5773502691896258,\"skew\":1.73205080756887,\"kurt\":0},\"uvisit\":{\"cnt\":3},\"sales\":{\"cnt\":3,\"sum\":155.95,\"min\":41.65,\"max\":71.65000000000001,\"avg\":51.98333333333334,\"stdd\":17.03917055884273,\"skew\":1.725341767699333,\"kurt\":0}}"
      }
   ],
   "num_items":3,
   "more_data_to_come":0,
   "switch_done":0
}`}
            />
            <p>
              As you see, we get for each product (prod), various entities&apos;
              values since beginning (count or running stats).
            </p>
            <HighlightedOutput
              code={`"total_items" = 3 //for p3,
"uvisit" (unique visit) = 3 //for p3,
"sales" (running stats for sales) = {\"cnt\":3,\"sum\":155.95,\"min\":41.65,\"max\":71.65000000000001,\"avg\":51.98333333333334,\"stdd\":17.03917055884273,\"skew\":1.725341767699333,\"kurt\":0}`}
            />
            <li>To count total items / rows in the entity prod_details</li>
            <HighlightedJava
              code={`curl -H "Content-Type: application/json" -d' {"sql":"select count(*) from website.prod_details"}' -X POST http://192.168.1.105:18080/db/mydb/query`}
            />
            <p>Response</p>
            <HighlightedOutput
              code={`{
   "retval": 3
}`}
            />
            <p>
              The count is 3 Now, let&apos;s select some aggregated data. We
              have running statistics set on various attributes like
              &apos;vid&apos;, &apos;catid&apos;, &apos;price&apos;
              &apos;items&apos; etc… (wherever “stat” is set).
            </p>
          </ol>
          <h2>
            To get few rows from running statistics/aggregated streams for a
            particular attribute
          </h2>
          <HighlightedJava
            code={`curl -H "Content-Type: application/json" -d'{"sql":"select aggr(vid) from website.visitor where st >= 1 and et <= 2648490388199000"}' -X POST http://192.168.1.105:18080/db/mydb/query`}
          />
          <p>
            The &quot;st&quot; and &quot;et&quot; are start time and end time in
            microsec.
          </p>
          <HighlightedOutput
            code={`{
   "rows":[
      {
         "k":1648490220000000,
         "v":0
      },
      {
         "k":1648490160000000,
         "v":0
      },
      {
         "k":1648490100000000,
         "v":0
      },
      {
         "k":1648490040000000,
         "v":0
      },
      {
         "k":1648489980000000,
         "v":2
      },
      {
         "k":1648489920000000,
         "v":3
      }
   ],
   "num_items":6,
   "more_data_to_come":0,
   "switch_done":0
}`}
          />
          <p>
            As we see there are row for every single min as the running
            statistics happen with 60 sec gran. Hence one row for every single
            minute. But we can roll it for as many minute as required. For
            example, let&apos;s rollup completely, since beginning.
          </p>
          <HighlightedJava
            code={`curl -H "Content-Type: application/json" -d'{"sql":"select aggr(vid) from website.visitor where st >= 1 and et <= 2648490388199000 rollup 1"}' -X POST http://192.168.1.105:18080/db/mydb/query`}
          />
          <p>Response</p>
          <HighlightedOutput
            code={`{
   "rows":[
      {
         "k":1648490875815366,
         "v":"{\"fromts\":1,\"tots\":2648490388199000,\"aggr_val\":{\"cnt\":3}}"
      }
   ],
   "num_items":1,
   "more_data_to_come":0,
   "switch_done":0
}`}
          />
          <p>
            This tells that there are 3 unique vid (visitors), since we are
            doing UCOUNT on vid therefore it&apos;s correct.
          </p>
          <p>
            We can rollup now every 5 min by using &quot;rollup 5&quot; (since
            lowest granularity is single minute, hence 5 times of minute would
            give us 5 minute).
          </p>
          <HighlightedJava
            code={`curl -H "Content-Type: application/json" -d'{"sql":"select aggr(vid) from website.visitor where st >= 1 and et <= 2648490388199000 rollup 5"}' -X POST http://192.168.1.105:18080/db/mydb/query`}
          />
          <p>Response</p>
          <HighlightedOutput
            code={`{
   "rows":[
      {
         "k":1648490460000000,
         "v":0
      },
      {
         "k":1648490160000000,
         "v":0
      },
      {
         "k":1648491060000000,
         "v":3
      }
   ],
   "num_items":3,
   "more_data_to_come":0,
   "switch_done":0
}`}
          />
          <p>
            If you see we have all 3 unique visitors in first 5 min, as we
            inserted all data at a time.
          </p>
          <h2>
            To get few rows from running statistics/aggregated for groupby
            attributes
          </h2>
          <HighlightedJava
            code={`curl -H "Content-Type: application/json" -d' {"sql":"select aggr(vid) from website.visitor groupby catid:pgid"}' -X POST http://192.168.1.105:18080/db/mydb/query`}
          />
          <p>Response</p>
          <HighlightedOutput
            code={`{
   "rows":[
      {
         "k":"c1:pg2",
         "v":2
      },
      {
         "k":"c1:pg1",
         "v":4
      },
      {
         "k":"c2:pg3",
         "v":3
      },
      {
         "k":"c2:pg2",
         "v":1
      }
   ],
   "num_items":4,
   "more_data_to_come":0,
   "switch_done":0
}`}
          />
          <p>Here you get COUNT for each catid and pgid group.</p>
          <p>
            We can add filter here, for example querying only for group catid c1
            and pgid pg1.
          </p>
          <HighlightedJava
            code={`curl -H "Content-Type: application/json" -d' {"sql":"select aggr(vid) from website.visitor where skey = \"c1:pg1\" groupby catid:pgid"}' -X POST http://192.168.1.105:18080/db/mydb/query`}
          />
          <p>Response</p>
          <HighlightedOutput
            code={`{
   "rows":[
      {
         "k":"c1:pg1",
         "v":4
      }
   ],
   "num_items":1,
   "more_data_to_come":0,
   "switch_done":0
}`}
          />
          <p>
            We can also use rollup here, similar to what we did in previous
            section. If you see the schema, granularity for groupby aggregation
            is 300 sec (5 min), hence each row individually will come for 5 min.
            If we rollup 1 then we will get aggregated values for each group
            since beginning (one row for each group). If we aggregate with
            rollup 5 then we will get one row for every 5*5 = 25 min [ since
            granularity is 5 min ].
          </p>
        </div>
      </DocArticle>
    </React.Fragment>
  );
}

export async function getServerSideProps(context) {
  return {
    props: { apiSidebar: true },
  };
}
