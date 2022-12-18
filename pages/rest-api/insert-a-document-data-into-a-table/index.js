import React from "react";
import Head from "next/head";
import Link from "next/link";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";
import HighlightedOutput from "../../../components/HighlightedOutput";
import HighlightedCpp from "../../../components/HighlightedCpp";
import HighlightedJava from "../../../components/HighlightedJava";
import Codebox from "../../../components/Codebox";

export default function InsertADocumentIntoATable() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Insert document/data into a table - BangDB REST API</title>
        <meta
          name="description"
          content="Learn how to add document/data into a table using BangDB 2.0 REST API. Read the documentation to know more about BangDB 2.0 REST API."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Insert document/data into a table - BangDB REST API"
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
          content="Insert document/data into a table - BangDB REST API"
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
        <h1 className="article-title">Insert document/data into a table</h1>
        <div className="article-body">
          <p>To insert a document/data into a table:</p>
          <p>
            <strong>Method</strong> : POST
          </p>
          <p>
            <strong>URI</strong> : /db/mydb/my_table_test/doc
          </p>
          <p>Body</p>
          <HighlightedCpp
            code={`{
   "_pk": // primary key here, if key_type is Long then put long type else String
   "doc": // json doc
}`}
          />
          <p>Example</p>
          <p>To put data into WIDE_TABLE (table_type = 1)</p>
          <p>Example</p>
          <HighlightedJava
            code={`curl -H "Content-Type: application/json" -d '{"_pk":"user3","doc":{"name":"Arjun","org":"Google","likes":["books","basketball","food"]}}' -X POST http://192.168.1.105:18080/db/mydb/my_table_test/doc`}
          />
          <p>Response</p>
          <HighlightedOutput
            code={`{
   "msg": "success"
}`}
          />
          <p>
            To update the doc, we can the API with PUT method, that&apos;s it.
          </p>
          <p>
            To put data (opaque data), in NORMAL_TABLE (table_type = 0) , we can
            same API, and in the &quot;val&quot; instead of json doc we can pass
            plain text or base64 data.
          </p>
          <p>Example</p>
          <HighlightedJava
            code={`curl -H "Content-Type: application/json" -d '{"_pk":"k1","doc":"This is plain text or opaque data"}' -X POST http://192.168.1.105:18080/db/mydb/normal_table/doc`}
          />
          <p>Response</p>
          <HighlightedOutput
            code={`{
   "msg": "success"
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
