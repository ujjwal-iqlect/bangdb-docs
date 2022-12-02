import React from "react";
import Head from "next/head";
import Breadcrumb from "../../components/Breadcrumb";
import HighlightedCpp from "../../components/HighlightedCpp";
import HighlightedOutput from "../../components/HighlightedOutput";

export default function BrsCommandsCli() {
  return (
    <React.Fragment>
      <Head>
        <title>BRS Commands CLI - BangDB</title>
        <meta
          name="description"
          content="BRS Commands - BRS stands for BangDB Resource Server. BRS is for dealing with large files or objects, where the file / object size."
        ></meta>
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="BRS Commands CLI - BangDB" />
        <meta
          property="og:description"
          content="BRS Commands - BRS stands for BangDB Resource Server. BRS is for dealing with large files or objects, where the file / object size."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="BRS Commands CLI - BangDB" />
        <meta
          name="twitter:description"
          content="BRS Commands - BRS stands for BangDB Resource Server. BRS is for dealing with large files or objects, where the file / object size."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <section className="main-container">
        <main className="container">
          <div className="article-content">
            <article className="article">
              <Breadcrumb text="Command Line Interface" url="/cli-overview" />
              <h1 className="article-title">BRS Commands</h1>
              <div className="article-body">
                <p>
                  BRS stands for BangDB Resource Server. BRS is for dealing with
                  large files or objects, where the file / object size could go
                  from few KBs to several GBs. BRS allows users to create
                  buckets and then put the files or objects in these buckets.
                </p>
                <p>
                  There are two default buckets that BangDB creates when it
                  creates a db, namely <code>&quot;ml_bucket_info&quot;</code>{" "}
                  and
                  <code>&quot;udf_bucket_info&quot;</code>. These are for
                  storing ML related files and user defined functions
                  respectively.
                </p>
                <p>
                  We can interact with BRS using the commands from CLI as
                  follows.
                </p>
                <p>Create buckets</p>
                <HighlightedCpp
                  code={`create bucket mybucket bucket [ mybucket ]`}
                />
                <HighlightedOutput code={`created`} />
                <p>To see the buckets in the db</p>
                <HighlightedCpp code={`show buckets`} />
                <HighlightedOutput
                  code={`+-----------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|key                          |val                                                                                                                                                                                                         | 
+-----------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|mybucket                     |{"bucket_name":"mybucket","access_key":"brs_access_key","secret_key":"secret_key", | | |"num_objects":" 0","create_time":1611991680677004,"ttl":0,"_pk":"mybucket","_v":1}                                  | 
+-----------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|ml_bucket_info               |{"bucket_name":"ml_bucket_info","access_key":"brs_access_key","secret_key":"brs_secret_key", | | |"ttl":604800,"num_objects":" 0","create_time":1611919352456474,"_pk":"ml_bucket_info","_v":1}             | 
+-----------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|bangdb_udf_bucket            |{"bucket_name":"bangdb_udf_bucket","access_key":"brs_access_key","secret_key": | | |"brs_secret_key","ttl":604800,"num_objects":" 0","create_time":1611919352512129,"_pk":"bangdb_udf_bucket","_v":1}       | 
+-----------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+`}
                />
                <p>
                  To put file in the buckets (Let&apos;s say we wish to upload a
                  file name abc.txt, present at /home/sachin/Documents. Size of
                  the file is around 17MB)
                </p>
                <HighlightedCpp
                  code={`putfile /home/sachin/Documents/abc.txt into mybucket where filekey = "abc_file_key"`}
                />
                <HighlightedOutput code={`successfully put the file`} />
                <p>Show the files in the bucket</p>
                <HighlightedCpp
                  code={`show from mybucket { 
  "total_keys" : 1, 
  "key_list" : [ { "key" : "abc_file_key:0:17:17254154:1612102871582854" } ] 
}`}
                />
                <HighlightedOutput code={`success`} />
                <aside className="doc-note">
                  <strong>Note: </strong>The file is stored in BRS in slices and
                  if we read the key returned by the command “show from
                  mybucket”, we will see that the file has been sliced into 17
                  parts and stored in the db. When we retrieve the file, db
                  combines all these slices and returns the entire file.
                </aside>
                <p>
                  To get the file from the BRS (Here we call the getfile command
                  for the given file key and store the retrieved file at
                  &quot;/home/sachin/Document/xyz.txt&quot;)
                </p>
                <HighlightedCpp
                  code={`getfile /home/sachin/Documents/xyz.txt from mybucket where filekey = "abc_file_key"`}
                />
                <HighlightedOutput code={`success in getting the file`} />
                <p>To count the number of items in the bucket</p>
                <HighlightedCpp
                  code={`count from mybucket total num of files = 1`}
                />
                <p>To delete the file</p>
                <HighlightedCpp
                  code={`delfile from mybucket where filekey = "abc_file_key"`}
                />
                <HighlightedOutput code={`file deleted successfully`} />
                <p>To drop the bucket</p>
                <HighlightedCpp code={`drop bucket mybucket`} />
                <HighlightedOutput
                  code={`do you wish to delete the bucket and all its files? [ yes | no ]: yes 
bucket [ mybucket ] successfully dropped`}
                />
              </div>
            </article>
          </div>
        </main>
      </section>
    </React.Fragment>
  );
}
