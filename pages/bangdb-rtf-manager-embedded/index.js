import React, { useState } from "react";
import Head from "next/head";
import Breadcrumb from "../../components/Breadcrumb";
import HighlightedCpp from "../../components/HighlightedCpp";

export default function BangdbRtfManagerEmbedded() {
  const [tab, setTab] = useState(1);

  return (
    <React.Fragment>
      <Head>
        <title>RTF Manager - BangDB</title>
        <meta
          name="description"
          content="Learn more about BangDB RTF Manager (Embedded). Read the documentation to learn to make embedded applications using BangDB."
        ></meta>
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="RTF Manager (Embedded) - BangDB" />
        <meta
          property="og:description"
          content="Learn more about BangDB RTF Manager (Embedded). Read the documentation to learn to make embedded applications using BangDB."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="RTF Manager (Embedded) - BangDB" />
        <meta
          name="twitter:description"
          content="Learn more about BangDB RTF Manager (Embedded). Read the documentation to learn to make embedded applications using BangDB."
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
              <h1 className="article-title">RTF Manager (Embedded)</h1>
              <div className="article-body">
                <p>
                  BangDB returns set of data for query using Result Set
                  (Embedded). Result Set (Embedded) allows iteration over keys
                  and values.
                </p>
                <div className="tab-shifter">
                  <div className="tab-wrapper">
                    <div className="tab" onClick={() => setTab(1)}>
                      <span className={tab !== 1 ? null : "active"}>C++</span>
                    </div>
                  </div>
                </div>
                <p>To create BangDBRTF manager object</p>
                <HighlightedCpp
                  code={`BangDBRTFManager(BangDBMLHelper *_bmlh = NULL, BangDBResourceManager *_brs = NULL);`}
                />
                <p>To add UDF</p>
                <HighlightedCpp code={`char *add_udf(const char *udf_req);`} />
                <p>
                  It returns NULL for error. The memory should be released using{" "}
                  <code>delete[]</code>.<br />
                  To delete UDF
                </p>
                <HighlightedCpp
                  code={`char *remove_udf(const char *lib_name);`}
                />
                <p>
                  It returns NULL for error. The memory should be released using{" "}
                  <code>delete[]</code>.<br />
                  To add code
                </p>
                <HighlightedCpp
                  code={`int add_code(const char *code, const char *lib_name, const char *baseclass = "bangdb_rtf_base.h", const char *create_func = "maker");`}
                />
                <p>To load library to execute a code</p>
                <HighlightedCpp
                  code={`int load_lib(const char *base_path, const char *lib_name, const char *create_func = "maker");`}
                />
                <p>To execute the code</p>
                <HighlightedCpp
                  code={`int exec_rtf(const char *lib_name, int argc, void *arg[], void **ret);`}
                />
                <p>To get UDF list</p>
                <HighlightedCpp code={`char *get_udf_list();`} />
                <p>
                  It returns NULL for error. The memory should be released using{" "}
                  <code>delete[]</code>.<br />
                  To close RTFmanager object
                </p>
                <HighlightedCpp
                  code={`void close_rtf_manager(bool force = false);`}
                />
                <p>To delete BangDBRTFManager object</p>
                <HighlightedCpp code={`virtual ~BangDBRTFManager();`} />
              </div>
            </article>
          </div>
        </main>
      </section>
    </React.Fragment>
  );
}
