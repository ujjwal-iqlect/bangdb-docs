import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";
import HighlightedOutput from "../../../components/HighlightedOutput";
import Codebox from "../../../components/Codebox";

export default function GetTheSchemaJsonDocForAGivenSchema() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          Get the schema json doc for a given schema - BangDB REST API
        </title>
        <meta
          name="description"
          content="Learn how to get the schema json document for a given schema using BangDB 2.0 REST API. Read the documentation to know more about BangDB 2.0 REST API."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Get the schema json doc for a given schema - BangDB REST API"
        />
        <meta
          property="og:description"
          content="Learn how to get the schema json document for a given schema using BangDB 2.0 REST API. Read the documentation to know more about BangDB 2.0 REST API."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="Get the schema json doc for a given schema - BangDB REST API"
        />
        <meta
          name="twitter:description"
          content="Learn how to get the schema json document for a given schema using BangDB 2.0 REST API. Read the documentation to know more about BangDB 2.0 REST API."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">
          Get the schema json doc for a given schema
        </h1>
        <div className="article-body">
          <p>To get the schema json doc for a given schema:</p>
          <p>This returns the json doc of the schema.</p>
          <p>
            <strong>Method</strong> : GET
          </p>
          <p>
            <strong>URI</strong> : /stream/&lt;schema_name&gt;/schema
          </p>
          <p>Example</p>
          <Codebox
            code={`curl -X GET http://192.168.1.105:18080/stream/ecomm/schema`}
          />
          <p>Response</p>
          <HighlightedOutput
            code={`{
   "schema":"ecomm",
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
               "type":5
            },
            {
               "name":"prod",
               "type":5,
               "kysz":24
            },
            {
               "name":"refr",
               "type":5,
               "kysz":48
            },
            {
               "name":"price",
               "type":11
            },
            {
               "name":"items",
               "type":9
            }
         ]
      }
   ]
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
