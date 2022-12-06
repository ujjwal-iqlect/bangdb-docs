import React from "react";
import Head from "next/head";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import HighlightedCpp from "../../components/HighlightedCpp";

export default function Refer() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Refer (REFR) - BangDB</title>
        <meta
          name="description"
          content="REFR is used when we refer other stream to get some of the attributes based on some condition. Therefore for example, if we keep quasi..."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Refer (REFR) - BangDB" />
        <meta
          property="og:description"
          content="REFR is used when we refer other stream to get some of the attributes based on some condition. Therefore for example, if we keep quasi..."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="Refer (REFR) - BangDB" />
        <meta
          name="twitter:description"
          content="REFR is used when we refer other stream to get some of the attributes based on some condition. Therefore for example, if we keep quasi..."
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
              <h1 className="article-title">Refer (REFR)</h1>
              <div className="article-body">
                <p>
                  This is used when we refer other stream to get some of the
                  attributes based on some condition. Therefore for example, if
                  we keep quasi static data or reference data in another stream
                  and refer that stream at run time to read some attribute
                  values on some condition then this is useful. It has more
                  usage than simply just referring as you explore.
                </p>
                <p>
                  We can use it to refer attributes in other stream at run time,
                </p>
                <p>OR</p>
                <p>
                  Refer the same stream for some useful computations [ we will
                  see this in detail ]
                </p>
                <HighlightedCpp
                  code={`"refr":[
   {
      "name":"myrefr1",
      "iatr":[
         "r"
      ],
      "stat":1,
      "rstm":"s2",
      "ratr":[
         "p1"
      ],
      "jqry":{
         "cond":[
            "f"
         ],
         "opnm":"ATTR",
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
      "rstm":"s2",
      "ratr":[
         "p2"
      ],
      "jqry":{
         "cond":[
            "f",
            "g"
         ],
         "opnm":"FIXED",
         "args":[
            "87",
            "240.9"
         ],
         "cmp":[
            "EQ",
            "LT"
         ]
      }
   }
]`}
                />
                <p>Let&apos;s look at each one now at a time</p>
                <HighlightedCpp
                  code={`{
   "name":"myrefr1",
   "iatr":[
      "r"
   ],
   "stat":1,
   "rstm":"s2",
   "ratr":[
      "p1"
   ],
   "jqry":{
      "cond":[
         "f"
      ],
      "opnm":"ATTR",
      "args":[
         "f"
      ]
   }
}`}
                />
                <p>
                  This tells that the stream (for which it&apos;s defined, we
                  will see that in a moment), should refer the other stream “s2”
                  and join on the given condition (explained right below), and
                  then pick p1 and name it r and store it in the current stream.
                </p>
                <p>So in simple sense:</p>
                <ol style={{ listStyle: "lower-alpha" }}>
                  <li>
                    join this stream with &quot;rstm&quot; stream , using jqry
                    s1.f = s2.f
                  </li>
                  <li>if successful, read &quot;ratr&quot; &quot;p1&quot;</li>
                  <li>
                    store &quot;p1&quot; value in this stream with attribute
                    name &quot;r&quot;, i.e. rename &quot;p1&quot; as
                    &quot;r1&quot; in this stream.
                  </li>
                </ol>
                <p>
                  Now, before we go to the other details of the topic
                  &quot;refr&quot;, review the &quot;jqry&quot; part here; jqry:
                  jqry (join query) defines condition to join two streams. The
                  structure for jqry is as follows:
                </p>
                <HighlightedCpp
                  code={`"jqry":{
    "cond":[
        "f",
        "g"
    ],
    "opnm":"FIXED",
    "args":[
        "87",
        "240.9"
    ]
}
"jqry":{
    "cond":[
        "f",
        "g"
    ],
    "opnm":"ATTR",
    "args":[
        "f",
        "g"
    ]
}
"jqry":{
    "cond":[
        "f",
        "g"
    ],
    "opnm":"ATTR",
    "args":[
        "f",
        "g"
    ],
    "cmp":[
        "EQ",
        "NE"
    ]
}
"jqry":{
    "cond":[
        "a",
        "b"
    ],
    "opnm":"myrule2",
    "args":[
        "a",
        "b"
    ]
}`}
                />
                <p>
                  It joins two streams equating the values of one stream with
                  the other, or the values of one stream with fixed ones. Here
                  the &quot;args&quot; is either value from this stream or fixed
                  value, which get compared with joining stream. The
                  &quot;rstm&quot; stream defines which is the joining stream in
                  the &quot;join&quot;. The last one also provides the how to
                  compare the values, here it says s2.f = s1.f and s2.g != s1.g.
                  We could also have GT, GTE, LT, LTE, NE. Please look at{" "}
                  <Link href={"/join"}>join</Link>
                  for more information.
                </p>
                <p>
                  The &quot;opnm&quot; or &quot;opid&quot; here tells where the
                  argument is attribute value or a fixed value itself.
                </p>
                <aside className="doc-api-code">
                  <p>
                    &quot;opnm&quot; has following options:
                    <br />
                    a. ATTR (opid = 11)
                    <br />
                    b. FIXED (opid = 12)
                  </p>
                  <p>Other values are not supported at the moment</p>
                </aside>
                <p>Let&apos;s look at the other item</p>
                <HighlightedCpp
                  code={`{
    "name":"myrefr2",
    "iatr":[
        "s"
    ],
    "stat":2,
    "rstm":"s2",
    "ratr":[
        "p2"
    ],
    "jqry":{
        "cond":[
            "f",
            "g"
        ],
        "opnm":"FIXED",
        "args":[
            "87",
            "240.9"
        ],
        "cmp":[
            "EQ",
            "LT"
        ]
    }
}`}
                />
                <p>
                  Here, join happens with the fixed values, i.e. other stream
                  attributes (f, g) comapred with 87 and 240.9
                </p>
                <ol>
                  <li>join. s2.f = 87 and s2.g &lt; 240.9</li>
                  <li>
                    select &quot;p2&quot; val and store that in the key
                    &quot;s&quot; in this stream etc…
                  </li>
                </ol>
                <p>
                  While refr (referring) is generally done for two normal
                  streams (input stream, filter stream or joined stream), but in
                  some cases we would like to also refer a entity stream, which
                  contains long term statistics for a given attribute. To do so,
                  we would have a minor change in the syntax.
                </p>
                <p>
                  So, let&apos;s say I have a visitor stream, which is adding
                  statistics for page view in entity stream. And from
                  &apos;order&apos; stream, I would like to refer to the
                  &apos;count&apos; of page views for a given visitor. Here is
                  how we would define the refer.
                </p>
                <HighlightedCpp
                  code={`{
   "name":"myrefr2",
   "iatr":[
      "npage_view",
      "nsales_avg",
      "nsales_stdd"
   ],
   "rstm":"page_view_stream",
   "ratr":[
      "pageviews.cnt",
      "sales.avg",
      "sales.stdd"
   ],
   "jqry":{
      "cond":[
         "visitorid"
      ],
      "opnm":"ATTR",
      "args":[
         "visitorid"
      ]
   }
}`}
                />
                <p>
                  We are referring to page_views.cnt = count of page_views
                  statistics.
                </p>
              </div>
            </article>
          </div>
        </main>
      </section>
    </React.Fragment>
  );
}
