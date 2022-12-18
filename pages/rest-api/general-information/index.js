import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";
import HighlightedOutput from "../../../components/HighlightedOutput";

export default function GeneralInformation() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>General Information - BangDB REST API</title>
        <meta
          name="description"
          content="Some general information about BangDB 2.0 REST API. Learn more about BangDB 2.0 REST APIs and it's features by reading the BangDB documentation."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="General Information - BangDB REST API"
        />
        <meta
          property="og:description"
          content="Some general information about BangDB 2.0 REST API. Learn more about BangDB 2.0 REST APIs and it's features by reading the BangDB documentation."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="General Information - BangDB REST API"
        />
        <meta
          name="twitter:description"
          content="Some general information about BangDB 2.0 REST API. Learn more about BangDB 2.0 REST APIs and it's features by reading the BangDB documentation."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">General Information</h1>
        <div className="article-body">
          <p>BangDB supports HTTP 1.1 (default) and 2.0 protocol.</p>
          <p>
            BangDB APIs typically use only following methods, others are
            available only for very few cases.
          </p>
          <ul>
            <li>HEAD, GET, POST, PUT, DELETE</li>
          </ul>
          <p>Supported headers:</p>
          <HighlightedOutput
            code={`Content-Type: application/json
Content-Type: text/plain
Connection: keep-alive
Access-Control-Allow-Origin: * 
Access-Control-Allow-Methods: *
Access-Control-Allow-Headers: * 
Vary: * 
Access-Control-Max-Age: 3600`}
          />
          <p>
            Binary data or object should be passed with base64 encoding using
            Content-Type: text/plain.
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
