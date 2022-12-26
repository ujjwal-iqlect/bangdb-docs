import React from "react";
import Head from "next/head";
import Breadcrumb from "../../components/Breadcrumb";
import HighlightedCpp from "../../components/HighlightedCpp";

export default function Entity() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Entity (ENTY) - BangDB</title>
        <meta
          name="description"
          content="ENTY - There are use cases where we need data for long term, these data are not just raw events but the aggregated data, or computed data."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Entity (ENTY) - BangDB" />
        <meta
          property="og:description"
          content="ENTY - There are use cases where we need data for long term, these data are not just raw events but the aggregated data, or computed data."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="Entity (ENTY) - BangDB" />
        <meta
          name="twitter:description"
          content="ENTY - There are use cases where we need data for long term, these data are not just raw events but the aggregated data, or computed data."
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
              <h1 className="article-title">Entity (ENTY)</h1>
              <div className="article-body">
                <p>
                  There are use cases where we need data for long term, these
                  data are not just raw events but the aggregated data, or
                  computed data. Entity table is created for such use cases. In
                  this table, we can keep aggregated fields for longer period of
                  time (or forever) and hence could be useful to get the views
                  of such aggregation ready for run time reviews. Also this
                  could be used for some rules using cepq or otherwise.
                </p>
                <p>
                  These queries are present in stream definition as follows:
                </p>
                <HighlightedCpp
                  code={`"enty":[
   {
      "name":"e1",
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
      "name":"e2",
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
      "name":"e3",
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
      "name":"e4",
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
]
                  `}
                />
                <p>
                  Here e1 entity tells for the input attribute “vid” (visitor
                  id), compute “nview” (num of views, count) using
                  &quot;opid&quot;: 1 (&quot;stat&quot;: 1) and then put it in
                  the column (&quot;nview&quot;) of stream &quot;rstm&quot;
                  (prod_details).
                </p>
                <p>
                  This is equivalent to keeping the stats for the attributes for
                  lifetime in an efficient manner.
                </p>
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
