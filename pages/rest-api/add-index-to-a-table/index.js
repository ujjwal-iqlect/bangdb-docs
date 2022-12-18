import React from "react";
import Head from "next/head";
import Link from "next/link";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";
import HighlightedOutput from "../../../components/HighlightedOutput";
import HighlightedCpp from "../../../components/HighlightedCpp";
import HighlightedJava from "../../../components/HighlightedJava";
import Codebox from "../../../components/Codebox";

export default function AddIndexToATable() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Add index to a table - BangDB REST API</title>
        <meta
          name="description"
          content="Learn how to add index to a table using BangDB 2.0 REST API. Read the documentation to know more about BangDB 2.0 REST API."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Add index to a table - BangDB REST API"
        />
        <meta
          property="og:description"
          content="Learn how to add index to a table using BangDB 2.0 REST API. Read the documentation to know more about BangDB 2.0 REST API."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="Add index to a table - BangDB REST API"
        />
        <meta
          name="twitter:description"
          content="Learn how to add index to a table using BangDB 2.0 REST API. Read the documentation to know more about BangDB 2.0 REST API."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">Add index to a table</h1>
        <div className="article-body">
          <p>To add an index to a table</p>
          <p>
            <strong>Method</strong> : POST
          </p>
          <p>
            <strong>URI</strong> : /db/&lt;dbname&gt;/&lt;table_name&gt;/index
          </p>
          <p>Body</p>
          <HighlightedCpp
            code={`{
  "index_name": <index_name>,
  "key_type": <key_type>,
  "key_size": <key size in bytes>,
  "allow_duplicate": <0 or 1>
}`}
          />
          <p>
            The body is very similar to that of create table. There are many
            more attributes here that we could use to set the index in a
            particular manner.
          </p>
          <p>
            See the details <Link href={`/table-env-api`}>here</Link>.
          </p>
          <p>Example</p>
          <HighlightedJava
            code={`curl -H "Content-Type: application/json" -d '{"index_name":"org","key_type":1,"key_size":32}' -X POST http://192.168.1.105:18080/db/mydb/my_table_test/index`}
          />
          <p>Response</p>
          <HighlightedOutput
            code={`{
  "msg": "successfully created the index"
}`}
          />
          <h2>Stream processing</h2>
          <h3>Register schema for stream processing</h3>
          <p>
            <strong>Method</strong> : POST
          </p>
          <p>
            <strong>URI</strong> : /stream
          </p>
          <p>Body:</p>
          <Codebox code={`{ schema doc }`} />
          <p>
            Schema is a json doc which contains information about stream
            processing. Please see the details for the json doc here.
          </p>
          <p>Example</p>
          <HighlightedOutput
            code={`curl -H "Content-Type: application/json" -d '{"schema": "ecomm","streams":
[{"name":"visitor", "type":1, "swsz":86400,"inpt":[],"attr":
[{"name":"vid","type":5,"kysz":24},{"name":"prod","type":5,"kysz":24},
{"name":"refr","type":5,"kysz":48},{"name":"price","type":11},
{"name":"items","type":9}]}]}' -X POST http://192.168.1.105:18080/stream`}
          />
          <aside className="doc-note">
            <strong>Note: </strong>The schema doc is typically much bigger than
            what we are using here in example. Here we have extremely simplistic
            schema document. Please check out the{" "}
            <Link href={`/stream`}>stream section</Link> of the document for
            details. Also, it&apos;s rather easy to create schema for stream
            processing using CLI or dashboard.
          </aside>
          <p>Response</p>
          <HighlightedOutput
            code={`{
   "errcode": 0
}`}
          />
          <p>
            Here is errcode is 0 then the operation is successful, we may get
            some messages but as long as errcode is 0, it means the registration
            was successful.
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
