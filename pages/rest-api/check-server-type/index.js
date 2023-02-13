import React from 'react';
import Head from 'next/head';
import Breadcrumb from '../../../components/Breadcrumb';
import DocArticle from '../../../components/DocArticle';
import HighlightedOutput from '../../../components/HighlightedOutput';
import HighlightedJava from '../../../components/HighlightedJava';

export default function ChangeTheStateOfAnyStream() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Check server type - BangDB REST API</title>
        <meta
          name="description"
          content="Learn how to check the server type using BangDB 2.0 REST API. Read the documentation to know more about BangDB 2.0 REST API."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Check server type - BangDB REST API"
        />
        <meta
          property="og:description"
          content="Learn how to check the server type using BangDB 2.0 REST API. Read the documentation to know more about BangDB 2.0 REST API."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="Check server type - BangDB REST API"
        />
        <meta
          name="twitter:description"
          content="Learn how to check the server type using BangDB 2.0 REST API. Read the documentation to know more about BangDB 2.0 REST API."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">Check server type</h1>
        <div className="article-body">
          <p>To check the server type</p>

          <p>
            <strong>Method</strong> : GET
          </p>
          <p>
            <strong>URI</strong> : /server/type
          </p>
          <p>Example</p>
          <HighlightedJava
            code={`curl -X GET https://<MasterIP:Port>/server/type`}
          />

          <p>Response</p>
          <HighlightedOutput
            code={`{
    "type": "master",
    "num_slaves": 1,
    "slaves": [
        {
            "ip": "testrepl2.bangdb.com",
            "port": "10101",
            "sync_state": "SYNC_IN_PROGRESS"
        }
    ],
    "service_type": "DB_SERVICE"
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
