import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";
import HighlightedOutput from "../../../components/HighlightedOutput";
import Codebox from "../../../components/Codebox";

export default function InsertAnEventIntoAStream() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Insert an event into a stream - BangDB REST API</title>
        <meta
          name="description"
          content="Learn how to insert an event into a stream using BangDB 2.0 REST API. Read the documentation to know more about BangDB 2.0 REST API."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Insert an event into a stream - BangDB REST API"
        />
        <meta
          property="og:description"
          content="Learn how to insert an event into a stream using BangDB 2.0 REST API. Read the documentation to know more about BangDB 2.0 REST API."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="Insert an event into a stream - BangDB REST API"
        />
        <meta
          name="twitter:description"
          content="Learn how to insert an event into a stream using BangDB 2.0 REST API. Read the documentation to know more about BangDB 2.0 REST API."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">Insert an event into a stream</h1>
        <div className="article-body">
          <p>
            <strong>Method</strong> : POST
          </p>
          <p>
            <strong>URI</strong> :
            /stream/&lt;schema_name&gt;/&lt;stream_name&gt;
          </p>
          <p>
            <strong>Body</strong> : json document of the event
          </p>
          <p>Example</p>
          <Codebox
            code={`curl -H "Content-Type: application/json" -d'{"vid":"v1","prod":"p1","refr":"google","price":123.45,"items":3}' -X POST http://192.168.1.105:18080/stream/ecomm/visitor`}
          />
          <p>Response</p>
          <HighlightedOutput
            code={`{
   "errcode": 0
}`}
          />
          <p>
            As you note, we inserted an event into the stream
            &quot;visitor&quot; of schema &quot;ecomm&quot; that we registered
            earlier.
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
