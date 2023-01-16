import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";
import HighlightedOutput from "../../../components/HighlightedOutput";
import HighlightedJava from "../../../components/HighlightedJava";

export default function UploadStreamDataToBrs() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Upload stream data to BRS - BangDB REST API</title>
        <meta
          name="description"
          content="Learn how to upload stream data to BRS using BangDB 2.0 REST API. Read the docs to know more about BangDB 2.0 REST API."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Upload stream data to BRS - BangDB REST API"
        />
        <meta
          property="og:description"
          content="Learn how to upload stream data to BRS using BangDB 2.0 REST API. Read the docs to know more about BangDB 2.0 REST API."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="Upload stream data to BRS - BangDB REST API"
        />
        <meta
          name="twitter:description"
          content="Learn how to upload stream data to BRS using BangDB 2.0 REST API. Read the docs to know more about BangDB 2.0 REST API."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">Upload stream data to BRS</h1>
        <div className="article-body">
          <p>
            <strong>Method</strong> : POST
          </p>
          <p>
            <strong>URI</strong> : /stream/upload_data
          </p>
          <p>
            <strong>Body</strong> : JSON doc with details for uploading the data
          </p>
          <p>
            Let&apos;s say we wish to upload data from stream visitor to BRS,
            name the file visitor_upload.txt, then here is how the body will
            look like:
          </p>
          <HighlightedJava
            code={`{
   "schema-name":"website",
   "stream-name":"visitor",
   "model_name":"sales_model",
   "duration_sec":86400,
   "file_name":"visitor_upload.txt"
}`}
          />
          <p>Response</p>
          <HighlightedOutput
            code={`{
   "msg":"stream data uploaded to BRS successfully",
   "num_lines":10,
   "file_size_bytes":1062
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
