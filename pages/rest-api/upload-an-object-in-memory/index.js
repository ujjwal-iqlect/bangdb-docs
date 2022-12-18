import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";
import HighlightedOutput from "../../../components/HighlightedOutput";
import HighlightedJava from "../../../components/HighlightedJava";

export default function UploadAnObjectInMemory() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Upload an object (in-memory) - BangDB REST API</title>
        <meta
          name="description"
          content="Learn how to upload an object (in-memory) using BangDB 2.0 REST API. Read the docs to know more about BangDB 2.0 REST API."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Upload an object (in-memory) - BangDB REST API"
        />
        <meta
          property="og:description"
          content="Learn how to upload an object (in-memory) using BangDB 2.0 REST API. Read the docs to know more about BangDB 2.0 REST API."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="Upload an object (in-memory) - BangDB REST API"
        />
        <meta
          name="twitter:description"
          content="Learn how to upload an object (in-memory) using BangDB 2.0 REST API. Read the docs to know more about BangDB 2.0 REST API."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">Upload an object (in-memory)</h1>
        <div className="article-body">
          <p>To upload an object (in-memory):</p>
          <p>
            Similar to file, we can upload any arbitrary object into the bucket
            as well. Further to simplify the process we can use.
          </p>
          <p>
            <strong>Method</strong> : POST
          </p>
          <p>
            <strong>URI</strong> : /brs/object/put
          </p>
          <p>
            <strong>Body</strong> : {`{doc}`}
          </p>
          <p>Example</p>
          <aside className="doc-warning">
            <strong>Warning: </strong> // deprecated, use{" "}
            <strong>
              <i>putfile</i>
            </strong>{" "}
            for this as well.
          </aside>
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
