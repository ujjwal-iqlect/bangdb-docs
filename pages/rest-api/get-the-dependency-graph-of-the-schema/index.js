import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";
import HighlightedOutput from "../../../components/HighlightedOutput";
import Codebox from "../../../components/Codebox";

export default function GetTheDependencyGraphOfTheSchema() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Get the dependency graph of the schema - BangDB REST API</title>
        <meta
          name="description"
          content="Learn how to get the dependency graph of the schema using BangDB 2.0 REST API. Read the documentation to know more about BangDB 2.0 REST API."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Get the dependency graph of the schema - BangDB REST API"
        />
        <meta
          property="og:description"
          content="Learn how to get the dependency graph of the schema using BangDB 2.0 REST API. Read the documentation to know more about BangDB 2.0 REST API."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="Get the dependency graph of the schema - BangDB REST API"
        />
        <meta
          name="twitter:description"
          content="Learn how to get the dependency graph of the schema using BangDB 2.0 REST API. Read the documentation to know more about BangDB 2.0 REST API."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">
          Get the dependency graph of the schema
        </h1>
        <div className="article-body">
          <p>To get the dependency graph of the schema:</p>
          <p>
            In a schema there could be many streams, with several different
            kinds of relationships among them. It would be good to get the
            dependency doc review. On dashboard, we can visualise the graph for
            better understanding
          </p>
          <p>
            <strong>Method</strong> : GET
          </p>
          <p>
            <strong>URI</strong> : /stream/&lt;schema_name&gt;/depgraph
          </p>
          <p>Example</p>
          <Codebox
            code={`curl -X GET http://192.168.1.105:18080/stream/ecomm/depgraph`}
          />
          <p>Response</p>
          <HighlightedOutput
            code={`{
   "node_info":[
      {
         "node":"dummy_head",
         "type":0,
         "parent":[
            
         ],
         "children":[
            "ecomm__visitor"
         ],
         "refr-to":[
            
         ],
         "refr-by":[
            
         ],
         "refr":[
            
         ],
         "fltr":[
            
         ],
         "joins":[
            
         ],
         "cepq":[
            
         ],
         "gpby":[
            
         ],
         "enty":[
            
         ]
      },
      {
         "node":"ecomm__visitor",
         "type":1,
         "parent":[
            "dummy_head"
         ],
         "children":[
            
         ],
         "refr-to":[
            
         ],
         "refr-by":[
            
         ],
         "refr":[
            
         ],
         "fltr":[
            
         ],
         "joins":[
            
         ],
         "cepq":[
            
         ],
         "gpby":[
            
         ],
         "enty":[
            
         ]
      }
   ],
   "schema":"ecomm",
   "schemaid":1600908251909619608
}`}
          />
          <p>
            There is a &quot;dummy_node&quot;, which is parent (super parent) of
            all the nodes, kind of starting or seed node/stream from where all
            other streams are linked. The relationships among streams could be
            hierarchical (parent-child) or peer-to-peer (reference, join etc.)
          </p>
          <p>
            To get the depgraph for a stream, we can call the API with URI
            /stream/&lt;schema_name&gt;/&lt;stream_name&gt;/depgraph with GET
            method.
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
