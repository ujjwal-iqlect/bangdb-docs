import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";
import HighlightedOutput from "../../../components/HighlightedOutput";
import HighlightedJava from "../../../components/HighlightedJava";

export default function GetStatsOfAGraphTable() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Get stats of a graph table - BangDB REST API</title>
        <meta
          name="description"
          content="Learn how to get stats of a graph table using BangDB 2.0 REST API. Read the docs to know more about BangDB 2.0 REST API."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Get stats of a graph table - BangDB REST API"
        />
        <meta
          property="og:description"
          content="Learn how to get stats of a graph table using BangDB 2.0 REST API. Read the docs to know more about BangDB 2.0 REST API."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="Get stats of a graph table - BangDB REST API"
        />
        <meta
          name="twitter:description"
          content="Learn how to get stats of a graph table using BangDB 2.0 REST API. Read the docs to know more about BangDB 2.0 REST API."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title"></h1>
        <div className="article-body">
          <p>To get the stats of a given graph table:</p>
          <p>
            <strong>Method</strong> : GET
          </p>
          <p>
            <strong>URI</strong> : /graph/stat/&lt;verbose&gt;
          </p>
          <p>
            &lt;verbose&gt; takes 0 or 1 for less or more verbose. default is 0
            when we don&apos;t provide &lt;verbose&gt;.
          </p>
          <p>Example</p>
          <HighlightedJava
            code={`curl -X GET http://192.168.1.105:18080/graph/stat`}
          />
          <p>Response</p>
          <HighlightedOutput
            code={`{
   "graphs":[
      {
         "mygraph":[
            {
               
            },
            {
               
            }
         ],
         "entity":{
            "table":[
               {
                  "name":"mygraph",
                  "issys":0,
                  "num_records":0,
                  "num_index":0,
                  "files":[
                     
                  ],
                  "total_size":49152,
                  "num_files":3
               }
            ]
         },
         "rel":{
            "table":[
               {
                  "name":"mygraph_rel",
                  "issys":0,
                  "num_records":0,
                  "num_index":0,
                  "files":[
                     
                  ],
                  "total_size":49152,
                  "num_files":3
               }
            ]
         }
      },
      {
         "website_graph":[
            {
               
            },
            {
               
            }
         ],
         "entity":{
            "table":[
               {
                  "name":"website_graph",
                  "issys":0,
                  "num_records":0,
                  "num_index":0,
                  "files":[
                     
                  ],
                  "total_size":65536,
                  "num_files":3
               }
            ]
         },
         "rel":{
            "table":[
               {
                  "name":"website_graph_rel",
                  "issys":0,
                  "num_records":1,
                  "num_index":0,
                  "files":[
                     
                  ],
                  "total_size":65761,
                  "num_files":3
               }
            ]
         }
      }
   ],
   "num_graphs":2
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
