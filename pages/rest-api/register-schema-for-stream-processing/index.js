import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";
import HighlightedOutput from "../../../components/HighlightedOutput";
import Codebox from "../../../components/Codebox";
import Link from "next/link";

export default function RegisterSchemaForStreamProcessing() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Register schema for stream processing - BangDB REST API</title>
        <meta
          name="description"
          content="Learn how to register schema for stream processing using BangDB 2.0 REST API. Read the documentation to know more about BangDB 2.0 REST API."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Register schema for stream processing - BangDB REST API"
        />
        <meta
          property="og:description"
          content="Learn how to register schema for stream processing using BangDB 2.0 REST API. Read the documentation to know more about BangDB 2.0 REST API."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="Register schema for stream processing - BangDB REST API"
        />
        <meta
          name="twitter:description"
          content="Learn how to register schema for stream processing using BangDB 2.0 REST API. Read the documentation to know more about BangDB 2.0 REST API."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">Register schema for stream processing</h1>
        <div className="article-body">
          <p>Stream processing: All stream related API starts with /stream</p>
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
