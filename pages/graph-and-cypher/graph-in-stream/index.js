import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";
import HighlightedJava from "../../../components/HighlightedJava";

export default function GraphInStream() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Graph in stream - BangDB Graph & Cypher</title>
        <meta
          name="description"
          content="Learn about graph in stream. Read the well-written documentation to know more about BangDB 2.0 Graph and Cypher."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Graph in stream - BangDB Graph & Cypher"
        />
        <meta
          property="og:description"
          content="Learn about graph in stream. Read the well-written documentation to know more about BangDB 2.0 Graph and Cypher."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="Graph in stream - BangDB Graph & Cypher"
        />
        <meta
          name="twitter:description"
          content="Learn about graph in stream. Read the well-written documentation to know more about BangDB 2.0 Graph and Cypher."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">Graph in stream</h1>
        <div className="article-body">
          <p>
            BangDB streams can also use Graph for the events which are
            time-series data. To use Graph in the stream, we may simply edit the
            schema and add set of relations as needed.
          </p>
          <p>Example</p>
          <p>
            Let&apos;s say we have a schema where we receive purchase events for
            e-commerce and we would like to link user and the product he/she
            purchases, then we would simply add following:
          </p>
          <HighlightedJava
            code={`"rels":[{"sub":"user","obj":"product","rel":"BUYS"}]`}
          />
          <p>Here is the short schema definition for example:</p>
          <HighlightedJava
            code={`{
   "schema":"grpahschema",
   "streams":[
      {
         "name":"order",
         "type":1,
         "swsz":86400,
         "inpt":[
            
         ],
         "attr":[
            {
               "name":"product",
               "type":"STRING",
               "sidx":1,
               "kysz":32,
               "stat":"UCOUNT"
            },
            {
               "name":"user",
               "type":"STRING",
               "sidx":1,
               "stat":"UCOUNT"
            }
         ],
         "rels":[
            {
               "sub":"user",
               "obj":"product",
               "rel":"BUYS"
            }
         ]
      }
   ]
}`}
          />
          <p>
            That&apos;s it, where the &quot;user&quot; and &quot;product&quot;
            are attributes in the Order stream. Once defined, db would simply
            keep creating the relations (and creating nodes as required).
          </p>
          <p>
            To query, we can use Cypher as described above using usual methods.
          </p>
          <p>
            Now, let&apos;s look at some of the topics in detail and in advance
            sense, also we will introduce SYMM, ASYMM, AGGREGATION in detail,
            Filtering in detail, SHORT_PATH and ALL_PATH in more complex
            situations and SIMILARITY.
          </p>
        </div>
      </DocArticle>
    </React.Fragment>
  );
}

export async function getServerSideProps(context) {
  return {
    props: { graphSidebar: true },
  };
}
