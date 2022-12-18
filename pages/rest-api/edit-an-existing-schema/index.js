import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";
import HighlightedCpp from "../../../components/HighlightedCpp";
import HighlightedOutput from "../../../components/HighlightedOutput";
import HighlightedJava from "../../../components/HighlightedJava";

export default function EditAnExistingSchema() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Edit an existing schema - BangDB REST API</title>
        <meta
          name="description"
          content="Learn how to edit an existing schema using BangDB 2.0 REST API. Read the docs to know more about BangDB 2.0 REST API."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Edit an existing schema - BangDB REST API"
        />
        <meta
          property="og:description"
          content="Learn how to edit an existing schema using BangDB 2.0 REST API. Read the docs to know more about BangDB 2.0 REST API."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="Edit an existing schema - BangDB REST API"
        />
        <meta
          name="twitter:description"
          content="Learn how to edit an existing schema using BangDB 2.0 REST API. Read the docs to know more about BangDB 2.0 REST API."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">Edit an existing schema</h1>
        <div className="article-body">
          <p>
            <strong>Method</strong> : PUT
          </p>
          <p>
            <strong>URI</strong> : /stream
          </p>
          <p>
            <strong>Body</strong> :
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
               "stat":"UCOUNT",
               "kysz":24
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
      },
      {
         "name":"prod_details_1",
         "type":1,
         "inpt":[
            
         ],
         "attr":[
            {
               "name":"product",
               "type":5,
               "kysz":24
            },
            {
               "name":"price",
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
          <p>Response</p>
          <HighlightedOutput
            code={`{
    "errcode": 0
}`}
          />
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
