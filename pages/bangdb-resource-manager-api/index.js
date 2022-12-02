import React, { useState } from "react";
import Head from "next/head";
import Breadcrumb from "../../components/Breadcrumb";
import HighlightedCpp from "../../components/HighlightedCpp";
import Link from "next/link";

export default function BangdbResourceManagerApi() {
  const [tab, setTab] = useState(1);

  return (
    <React.Fragment>
      <Head>
        <title>Resource Manager - BangDB</title>
        <meta
          name="description"
          content="Learn about BangDB NotificatioResource Manager & server APIs. Read the documentation to know more about BangDB Server APIs."
        ></meta>
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Resource Manager - BangDB" />
        <meta
          property="og:description"
          content="Learn about BangDB Resource Manager & server APIs. Read the documentation to know more about BangDB Server APIs."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="Resource Manager - BangDB" />
        <meta
          name="twitter:description"
          content="Learn about BangDB Resource Manager & server APIs. Read the documentation to know more about BangDB Server APIs."
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
              <Breadcrumb text="Server API" url="/api-server" />
              <h1 className="article-title">Resource Manager</h1>
              <div className="article-body">
                <div className="tab-shifter">
                  <div className="tab-wrapper">
                    <div className="tab" onClick={() => setTab(1)}>
                      <span className={tab !== 1 ? null : "active"}>C++</span>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: tab === 1 ? "block" : "none",
                  }}
                >
                  <p>To get instance of BangDB Resource Manager</p>
                  <HighlightedCpp
                    code={`BangDB Resource Manager (BangDBEnv *bdb);`}
                  />
                  <p>To initialize the BRS</p>
                  <HighlightedCpp code={`int init_brs_meta();`} />
                  <p>To create a bucket</p>
                  <HighlightedCpp
                    code={`int create_bucket(const char *bucket_info);`}
                  />
                  <p>
                    <code>bucket_info</code> is the name of the bucket to be
                    created. It returns -1 for error.
                  </p>
                  <p>To get list of buckets present in BRS</p>
                  <HighlightedCpp
                    code={`char *list_all_buckets(const char *user_info);`}
                  />
                  <p>
                    It returns NULL for error else the list of the buckets.
                    Users should use <code>delete[]</code> the returned string.
                  </p>
                  <p>To count the number of buckets present in the BRS</p>
                  <HighlightedCpp code={`long count_buckets();`} />
                  <p>It returns -1 for error else the count.</p>
                  <p>To delete a bucket</p>
                  <HighlightedCpp
                    code={`int delete_bucket(const char *bucket_info);`}
                  />
                  <p>It returns -1 for error else 0 or more than 0.</p>
                  <p>To upload an object into a bucket</p>
                  <HighlightedCpp
                    code={`long put_object(const char *bucket_info, const char *key, const char *data, long datlen, bool force = false);`}
                  />
                  <p>
                    Here, <code>bucket_info</code> is the bucket name and key is
                    the unique name given by the user to the object to be
                    uploaded. It returns -1 for error else 0 or more than 0.
                  </p>
                  <p>To download an object from a bucket in BRS</p>
                  <HighlightedCpp
                    code={`long get_object(const char *bucket_info, const char *key, char **data, long *datlen);`}
                  />
                  <p>
                    It returns -1 for error else 0 or more than 0. Users should
                    delete or free the returned data using <code>delete[]</code>
                    .
                  </p>
                  <p>To upload a file into a bucket</p>
                  <HighlightedCpp
                    code={`long put_file(const char *bucket_info, const char *key, const char *fpath, InsertOptions iop, bool force = false);`}
                  />
                  <aside className="doc-api-code">
                    <p>InsertOptions is an enum with following values:</p>
                    <p>
                      INSERT_UNIQUE, // if non-existing then insert else return
                      <br />
                      UPDATE_EXISTING, // if existing then update else return
                      <br />
                      INSERT_UPDATE, // insert if non-existing else update
                      <br />
                      DELETE_EXISTING, // delete if existing
                      <br />
                      UPDATE_EXISTING_INPLACE, // only for inplace update
                      <br />
                      INSERT_UPDATE_INPLACE, // only for inplace update
                    </p>
                    <p>
                      Please see more on this at{" "}
                      <Link href={"/bangdb-client-common"}>bangdb common</Link>
                    </p>
                  </aside>
                  <p>It returns -1 for error else 0 or more than 0.</p>
                  <p>To download a file from a bucket to local system</p>
                  <HighlightedCpp
                    code={`long get_file(const char *bucket_info, const char *key, const char *fname, const char *fpath);`}
                  />
                  <p>
                    Key is the unique name/id provided by user or bangdb to
                    refre that file and fpath is the location where the file
                    will be downloaded with fname as file name. It returns -1
                    for error else 0 or more than 0.
                  </p>
                  <p>To delete an object in a bucket</p>
                  <HighlightedCpp
                    code={`int del_object(const char *bucket_info, const char *key);`}
                  />
                  <p>It returns -1 for error else 0 or more than 0.</p>
                  <p>
                    To count the number of large objects present in a bucket
                  </p>
                  <HighlightedCpp
                    code={`int count_slices(const char *bucket_info, const char *key);`}
                  />
                  <p>It returns -1 for error else the slice count.</p>
                  <p>To count current number of objects for the bucket</p>
                  <HighlightedCpp
                    code={`long count_objects(const char *bucket_info);`}
                  />
                  <p>It returns -1 for error else the slice count.</p>
                  <p>To list all object present</p>
                  <HighlightedCpp
                    code={`char *list_objects(const char *bucket_info, const char *skey, int list_size_mb);`}
                  />
                  <p>
                    It returns NULL for error or the list of objects. Users
                    should free the returned data using <code>delete[]</code>.
                  </p>
                  <p>To closed a bucket</p>
                  <HighlightedCpp
                    code={`int close_bucket(const char *bucket_info);`}
                  />
                  <p>It returns -1 for error else 0 or positive number.</p>
                  <p>To closed resource manager</p>
                  <HighlightedCpp
                    code={`int close_resource_manager(CloseType closetype = DEFAULT_AT_CLIENT, bool force = false);`}
                  />

                  <p>It returns -1 for error or 0 or positive number.</p>
                  <aside className="doc-api-code">
                    <p>ClosedType is an enum with following values:</p>
                    <p>
                      DEFAULT_AT_CLIENT,
                      <br />
                      CONSERVATIVE_AT_SERVER,
                      <br />
                      OPTIMISTIC_AT_SERVER,
                      <br />
                      CLEANCLOSE_AT_SERVER,
                      <br />
                      SIMPLECLOSE_AT_SERVER,
                      <br />
                      DEFAULT_AT_SERVER
                    </p>
                    <p>
                      Please see more on this at{" "}
                      <Link href={"/bangdb-client-common"}>bangdb common</Link>
                    </p>
                  </aside>
                </div>
              </div>
            </article>
          </div>
        </main>
      </section>
    </React.Fragment>
  );
}
