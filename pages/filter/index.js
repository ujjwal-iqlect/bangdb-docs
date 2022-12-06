import React from "react";
import Head from "next/head";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import HighlightedCpp from "../../components/HighlightedCpp";

export default function Filter() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Filter (FLTR) - BangDB</title>
        <meta
          name="description"
          content="Filter (FLTR) is used to filter the incoming stream on some condition and then send the filtered data to other stream and/or notify."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Filter (FLTR) - BangDB" />
        <meta
          property="og:description"
          content="Filter (FLTR) is used to filter the incoming stream on some condition and then send the filtered data to other stream and/or notify."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="Filter (FLTR) - BangDB" />
        <meta
          name="twitter:description"
          content="Filter (FLTR) is used to filter the incoming stream on some condition and then send the filtered data to other stream and/or notify."
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
              <h1 className="article-title">Filter (FLTR)</h1>
              <div className="article-body">
                <p>
                  Filter is used to filter the incoming stream on some condition
                  and then send the filtered data to other stream and/or notify
                  as required. Here is how it looks:
                </p>
                <HighlightedCpp
                  code={`"fltr":[{"name":"f1", "fqry":{"name":"{\"query\":[{\"key\":\"h\", \"cmp_op\":0, \"val\":\"$n\"}],\"qtype\":2}", "type":1},
"fatr":["a", "b", "c", "g"],
"catr":[{"name":"f1", "type":11, "opid":3, "iatr":["b", "c"]]}], "ostm":"s2", "notf":1}, {"name":"f2", "fqry":{"name":"fltr_udf1", "type":2},
"fatr":["a", "b"], "catr":[{"name":"fltr1", "type":5, "opid":1", "iatr":["b"]]}]`}
                />
                <p>Now let&apos;s look at the first one</p>
                <HighlightedCpp
                  code={`{
   "name":"f1",
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
            "c"
         ]
      }
   ],
   "ostm":"s2",
   "notf":123
}`}
                />
                <p>
                  It creates a filter name f1, which filters based on fqry. As
                  you see fqry is based on dataQuery (type which is also used to
                  create query for db), for more discussion on this, please see{" "}
                  <Link href={"/dataquery"}>dataQuery</Link> for more details.
                </p>
                <p>
                  In this example, fqry tells to filter all events where value
                  of attr “h” is GT the attr value &quot;n&quot;, both h and n
                  are in same event stream. Once filtered (the fqry condition is
                  satisfied), then it will send the data (filtered event) to
                  other stream &quot;s2&quot; Before sending, it will select
                  &quot;fatr&quot; set of attributes from this event
                  (&quot;a&quot;, &quot;b&quot;, &quot;c&quot;, &quot;g&quot;)
                  to send to other stream &quot;s2&quot;
                </p>
                <p>
                  &quot;catr&quot; is optional, if you wish to compute another
                  attribute which will be part of the set of attributes sent to
                  the other stream (&quot;s2&quot;), then we can define
                  &quot;catr&quot;. Here it computes attr &quot;f1&quot; of type
                  &quot;double&quot; (11) by multiplying (&quot;opid&quot; = 3)
                  &quot;b and &quot;c&quot;.
                </p>
                <p>
                  &quot;fatr&quot; is set of attributes that we send to filtered
                  stream &quot;s2&quot;, also on the fly we compute attribute f1
                  using &quot;catr&quot; which would be added to fatr set and
                  sent to the output stream s2. See catr for more info on how to
                  compute attribute.
                </p>
              </div>
            </article>
          </div>
        </main>
      </section>
    </React.Fragment>
  );
}
