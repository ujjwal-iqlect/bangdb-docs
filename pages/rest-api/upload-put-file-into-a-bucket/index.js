import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";
import HighlightedOutput from "../../../components/HighlightedOutput";
import HighlightedJava from "../../../components/HighlightedJava";

export default function UploadPutFileIntoABucket() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Upload/Put file into a bucket - BangDB REST API</title>
        <meta
          name="description"
          content="Learn how to upload/put file into a bucket using BangDB 2.0 REST API. Read the docs to know more about BangDB 2.0 REST API."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Upload/Put file into a bucket - BangDB REST API"
        />
        <meta
          property="og:description"
          content="Learn how to upload/put file into a bucket using BangDB 2.0 REST API. Read the docs to know more about BangDB 2.0 REST API."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="Upload/Put file into a bucket - BangDB REST API"
        />
        <meta
          name="twitter:description"
          content="Learn how to upload/put file into a bucket using BangDB 2.0 REST API. Read the docs to know more about BangDB 2.0 REST API."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">Upload/Put file into a bucket</h1>
        <div className="article-body">
          <p>
            BRS supports large files or objects, hence we can upload or put
            files of any type and any size (within practical limits of the
            machine). Therefore, this is a suitable place for ML related files
            as they may run in several MBs or GBs.
          </p>
          <p>
            For efficiency purposes, BangDB stores files by breaking it into
            several chunks (1MB chunk) and when user requests the file it sends
            all the necessary chunks to the user, combining which the desired
            file becomes available. If you wish to use this API then you will
            need to ensure certain things and follow the workflow. If you use
            CLI or dashboard, then they handle the workflow for you implicitly.
          </p>
          <p>Let&apos;s see how it works.</p>
          <h2>For uploading files</h2>
          <p>
            <strong>Method</strong> : POST
          </p>
          <p>
            <strong>URI</strong> : /brs/&lt;bucket_name&gt;/putfile
            <br />
            /brs/&lt;bucket_name&gt;/putfile?key=&lt;key&gt;&amp;nslice=n
          </p>
          <p>
            <strong>Body</strong> : encoded data (base64 encoding)
          </p>
          <p>
            Workflow to upload a file name &quot;aloi&quot; which is ~17MB in
            size, into a bucket &quot;mybucket&quot;.
          </p>
          <h3>Step 1</h3>
          <p>
            Input a file, read the size of the file and form the json request
            below
          </p>
          <HighlightedJava
            code={`{
   "access_key": "brs_access_key",
   "secret_key": "brs_secret_key",
   "fsize": 17254154,
   "bucket_name": "mybucket",
   "key": "aloi"
}`}
          />
          <p>
            Call the POST API /brs/mybucket/putfile with above json as body.
          </p>
          <p>It will send following response</p>
          <p>Response</p>
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
            It says that db will store the file in 17 slices
            (&quot;nslice&quot;) and each slice&apos;s size would be 1MB
            (&quot;chunk_size&quot;). It also tells the next key that should be
            used for the 1MB chunk of the file.
          </p>
          <h3>Step 2</h3>
          <p>Repeat &quot;nslice&quot; times</p>
          <ul>
            <li>
              Read chunk of 1MB (or remaining bytes) of the file from the offset
              (beg = 0 (initial set)).
            </li>
            <li>Encode the read chunk with base64.</li>
            <li>
              Call the API
              /brs/mybucket/putfile?key=&lt;next_key&gt;&amp;nslice=&lt;nslice&gt;
              with body as chunk.
            </li>
            <li>Read response.</li>
            <HighlightedOutput
              code={`{
   "next_key": "aloi:1",
   "next_id": 1
}`}
            />
            <p>
              As you see, it sends the nex_key again and we should use this for
              next loop.
            </p>
            <ul>
              <li>If error - then quit.</li>
              <li>
                If next_key is not available in the response then it&apos;s
                done.
              </li>
              <li>Set beg = beg + 1MB.</li>
            </ul>
          </ul>
          <p>End</p>
          <aside className="doc-note">
            <strong>Note: </strong>Since we upload encoded text as chunks hence
            we must set the right Content-type in the request header. The
            Content-type should be plain/text [ &quot;Content-type
            :plain/text&quot; ].
          </aside>{" "}
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
