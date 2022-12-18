import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";
import HighlightedCpp from "../../../components/HighlightedCpp";
import HighlightedOutput from "../../../components/HighlightedOutput";
import HighlightedJava from "../../../components/HighlightedJava";

export default function AddAnotherStreamIntoAnExistingSchema() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          Add another stream into an existing schema - BangDB REST API
        </title>
        <meta
          name="description"
          content="Learn how to add another stream into an exisitng schema using BangDB 2.0 REST API. Read the docs to know more about BangDB 2.0 REST API."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Add another stream into an existing schema - BangDB REST API"
        />
        <meta
          property="og:description"
          content="Learn how to add another stream into an exisitng schema using BangDB 2.0 REST API. Read the docs to know more about BangDB 2.0 REST API."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="Add another stream into an existing schema - BangDB REST API"
        />
        <meta
          name="twitter:description"
          content="Learn how to add another stream into an exisitng schema using BangDB 2.0 REST API. Read the docs to know more about BangDB 2.0 REST API."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">
          Add another stream into an existing schema
        </h1>
        <div className="article-body">
          <p>
            <strong>Method</strong> : PUT
          </p>
          <p>
            <strong>URI</strong> : /stream/&lt;schema_name&gt;
          </p>
          <p>
            <strong>Body</strong> :
          </p>
          <HighlightedCpp
            code={`{
   "schema":"website",
   "streams":[
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
   "errcode":0
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
