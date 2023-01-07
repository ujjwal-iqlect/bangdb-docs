import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import HighlightedCpp from "../../components/HighlightedCpp";

export default function BangDBResourceManagerEmbedded() {
  return (
    <React.Fragment>
      <Head>
        <title>Resource Manager (Embedded) - BangDB</title>
        <meta
          name="description"
          content="Learn more about BangDB Resource Manager (Embedded). Read the documentation to learn to make embedded applications using BangDB."
        ></meta>
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Resource Manager (Embedded) - BangDB"
        />
        <meta
          property="og:description"
          content="Learn more about BangDB Resource Manager (Embedded). Read the documentation to learn to make embedded applications using BangDB."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="Resource Manager (Embedded) - BangDB"
        />
        <meta
          name="twitter:description"
          content="Learn more about BangDB Resource Manager (Embedded). Read the documentation to learn to make embedded applications using BangDB."
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
              <Breadcrumb text="Embedded API" url="/bangdb-api" />
              <h1 className="article-title">Resource Manager (Embedded)</h1>
              <div className="article-body">
                <div className="tab-shifter">
                  <div className="tab-wrapper">
                    <div className="tab">
                      <span className="active">C++</span>
                    </div>
                  </div>
                </div>
                <p>
                  BangDB Resource Manager (Embedded) is a type to allow users to
                  deal with large files and objects. Users can create buckets
                  and store large files in the buckets and fetch as needed.
                </p>
                <p>To get instance of BangDBResourceManager</p>
                <HighlightedCpp
                  code={`BangDBResourceManager(BangDBDatabase *bdb);`}
                />
                <p>To initialize the BRS</p>
                <HighlightedCpp code={`int init_brs_meta();`} />
                <p>To create a bucket</p>
                <HighlightedCpp
                  code={`int create_bucket(char *bucket_info);`}
                />
                <p>
                  This creates a bucket as defined by the{" "}
                  <code>bucket_info</code> which looks like following:
                </p>
                <HighlightedCpp
                  code={`{access_key:, secret_key:, bucket_name:}`}
                />
                <p>
                  It returns -1 for error To get list of buckets present in BRS
                  for a user
                </p>
                <HighlightedCpp code={`char *list_buckets(char *user_info);`} />
                <p>
                  It returns NULL for error else the list of the buckets. Users
                  should use delete[] the returned string. To get list of
                  buckets present in BRS
                </p>
                <HighlightedCpp
                  code={`char *list_all_buckets(char *user_info);`}
                />
                <p>
                  It returns NULL for error else the list of the buckets. Users
                  should use delete[] the returned string.
                </p>
                <p>To count the number of buckets present in the BRS</p>
                <HighlightedCpp code={`long count_buckets();`} />
                <p>
                  It returns -1 for error else the count. To delete a bucket
                </p>
                <HighlightedCpp
                  code={`int delete_bucket(char *bucket_info);`}
                />
                <p>
                  It returns -1 for error else 0 or more than 0. To upload an
                  object into a bucket
                </p>
                <HighlightedCpp
                  code={`long put_object(char *bucket_info, char *key, char *data, long datlen, bool force = false);`}
                />
                <p>
                  Here, <code>bucket_info</code> is the bucket name and key is
                  the unique name given by the user to the object to be
                  uploaded. It returns -1 for error else 0 or more than 0 To
                  download an object from a bucket in BRS.
                </p>
                <HighlightedCpp
                  code={`long get_object(char *bucket_info, char *key, char **data, long *datlen);`}
                />
                <p>
                  Returns the current number of objects for the bucket if
                  successful else -1. To upload a file into a bucket
                </p>
                <HighlightedCpp
                  code={`long put_file(char *bucket_info, char *key, char *fpath, InsertOptions iop, bool force = false);`}
                />
                <div className="doc-api-code">
                  <p>InsertOptions is an enum with following values:</p>
                  <p>
                    INSERT_UNIQUE, //if non-existing then insert else return
                    <br />
                    UPDATE_EXISTING, //if existing then update else return
                    <br />
                    INSERT_UPDATE, //insert if non-existing else update
                    <br />
                    DELETE_EXISTING, //delete if existing
                    <br />
                    UPDATE_EXISTING_INPLACE, //only for inplace update
                    <br />
                    INSERT_UPDATE_INPLACE, //only for inplace update
                    <br />
                  </p>
                  <p>
                    Please see more on this at{" "}
                    <Link href="/bangdb-client-common">bangdb common</Link>.
                  </p>
                </div>
                <p>
                  It returns -1 for error else 0 or more than 0 To download a
                  file from a bucket to local system.
                </p>
                <HighlightedCpp
                  code={`long get_file(char *bucket_info, char *key, char *fname, char *fpath);`}
                />
                <p>
                  Key is the unique name/id provided by user or bangdb to refer
                  that file and fpath is the location where the file will be
                  downloaded with fname as file name. It returns -1 for error
                  else 0 or more than 0. To delete an object in a bucket.
                </p>
                <HighlightedCpp
                  code={`int del_object(char *bucket_info, char *key);`}
                />
                <p>
                  It returns -1 for error else 0 or more than 0. To count the
                  number of slices of an objects present in a bucket
                </p>
                <HighlightedCpp
                  code={`int count_slices(char *bucket_info, char *key);`}
                />
                <p>
                  It returns -1 for error else the slice count. To count current
                  number of objects for the bucket
                </p>
                <HighlightedCpp
                  code={`long count_objects(char *bucket_info);`}
                />
                <p>
                  It returns -1 for error else the slice count. To list all
                  object present
                </p>
                <HighlightedCpp
                  code={`char *list_objects(char *bucket_info);`}
                />
                <p>
                  It returns NULL for error or the list of objects. Users should
                  free the returned data using delete[].
                </p>
                <p>To close a bucket</p>
                <HighlightedCpp code={`int close_bucket(char *bucket_info);`} />
                <p>
                  It returns -1 for error else 0 or positive number. To close
                  resource manager
                </p>
                <HighlightedCpp
                  code={`int close_resource_manager(CloseType closetype = DEFAULT, bool force = false);`}
                />
                <div className="doc-api-code">
                  <p>ClosedType is enum with following values:</p>
                  <p>
                    DEFAULT_AT_CLIENT
                    <br />
                    CONSERVATIVE_AT_SERVER
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
                    <Link href="/bangdb-client-common">bangdb common</Link>.
                  </p>
                </div>
                <p>It returns -1 for error or 0 or positive number.</p>
              </div>
            </article>
          </div>
        </main>
      </section>
    </React.Fragment>
  );
}
