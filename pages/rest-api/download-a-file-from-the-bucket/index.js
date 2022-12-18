import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";
import HighlightedOutput from "../../../components/HighlightedOutput";
import HighlightedJava from "../../../components/HighlightedJava";

export default function DownloadAFileFromTheBucket() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Download a file from the bucket - BangDB REST API</title>
        <meta
          name="description"
          content="Learn how to download a file from the bucket using BangDB 2.0 REST API. Read the docs to know more about BangDB 2.0 REST API."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Download a file from the bucket - BangDB REST API"
        />
        <meta
          property="og:description"
          content="Learn how to download a file from the bucket using BangDB 2.0 REST API. Read the docs to know more about BangDB 2.0 REST API."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="Download a file from the bucket - BangDB REST API"
        />
        <meta
          name="twitter:description"
          content="Learn how to download a file from the bucket using BangDB 2.0 REST API. Read the docs to know more about BangDB 2.0 REST API."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">Download a file from the bucket</h1>
        <div className="article-body">
          <p>
            <strong>Method</strong> : POST
          </p>
          <p>
            <strong>URI</strong> : /brs/&lt;bucket_name&gt;/getfile
            <br />
            /brs/&lt;bucket_name&gt;/getfile?key=&lt;key&gt;&amp;nslice=&lt;nslice&gt;
          </p>
          <p>
            <strong>Body</strong> : JSON doc
          </p>
          <p>
            Workflow to download a file name &quot;aloi&quot; which is present
            in the bucket &quot;mybucket&quot;.
          </p>
          <h2>Step 1</h2>
          <p>
            Send a request that you are intending to download the file named
            &quot;aloi&quot;.
          </p>
          <HighlightedJava
            code={`POST /brs/mybucket/getfile
{
  "access_key": "brs_access_key",
  "secret_key": "brs_secret_key",
  "bucket_name": "mybucket",
  "key": "aloi"
}`}
          />
          <p>The DB will send the following response:</p>
          <HighlightedOutput
            code={`{
  "next_key": "aloi:0:17:17254154:1641803297543410",
  "nslice": 17,
  "chunk_size": 1048576,
  "file_size": 17254154,
  "next_id": 0
}`}
          />
          <p>
            This tells that file &quot;aloi&quot; is present in the bucket and
            its size is ~17MB, stored in 17 slices where each slice has chunk
            size of 1MB. Now we need to start a loop to get all the content, DB
            will keep helping with the next_key that should be used.
          </p>
          <h3>Step 2</h3>
          <p>
            First request will be POST request
            /brs/mybucket/getfile?key=&lt;next_key&gt;&nslice=&lt;nslice&gt;.
          </p>
          <p>
            The body dummy, &quot;dummy&quot; for example
            /brs/mybucket/getfile?key=aloi:0:17:17254154:1641803297543410&amp;nslice=17
          </p>
          <h3>Step 3</h3>
          <p>Repeat nslice times</p>
          <ul>
            <li>Set counter i = 1</li>
            <li>
              POST request /brs/mybucket/getfile?key=aloi:i&nslice=17 . The body
              dummy, &quot;dummy&quot;
            </li>
            <li>
              The server will send response which is base64 encoded chunk of 1MB
              size
            </li>
            <li>
              Decode the data and write to the end of the file (download file)
            </li>
            <li>If error occurs - quit</li>
            <li>Set i = i+1 and goto beginning of Step 2</li>
          </ul>
          <aside className="doc-note">
            <strong>Note: </strong>Since we download encoded text as chunks
            hence we must set the right Content-type in the request header. The
            Content-type should be plain/text [ &quot;Content-type
            :plain/text&quot; ].
          </aside>
          <p>
            Again if you use BangDB CLI or dashboard, these steps are abstracted
            and you simply run the download or upload command.
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
