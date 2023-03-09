import React from 'react';
import Head from 'next/head';
import Breadcrumb from '../../../components/Breadcrumb';
import DocArticle from '../../../components/DocArticle';
import HighlightedOutput from '../../../components/HighlightedOutput';
import Codebox from '../../../components/Codebox';

export default function GetTheTablesCount() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Get the tables count - BangDB REST API</title>
        <meta
          name="description"
          content="Learn how to get the tables count in the database using BangDB 2.0 REST API. Read the documentation to know more about BangDB 2.0 REST API."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Get the tables count - BangDB REST API"
        />
        <meta
          property="og:description"
          content="Learn how to get the tables count in the database using BangDB 2.0 REST API. Read the documentation to know more about BangDB 2.0 REST API."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="Get the tables count - BangDB REST API"
        />
        <meta
          name="twitter:description"
          content="Learn how to get the tables count in the database using BangDB 2.0 REST API. Read the documentation to know more about BangDB 2.0 REST API."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">Get the tables count</h1>
        <div className="article-body">
          <p>To get tables count:</p>
          <p>
            <strong>Method</strong> : GET
          </p>
          <p>
            <strong>URI</strong> : /db/&lt;dbname&gt;/count
          </p>
          <p>Example</p>
          <Codebox
            code={`curl -X GET http://192.168.1.105:18080/db/mydb/count`}
          />
          <p>Response</p>
          <HighlightedOutput
            code={String.raw`{
   "count": 32
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
