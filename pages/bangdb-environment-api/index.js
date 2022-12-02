import React, { useState } from "react";
import Head from "next/head";
import Breadcrumb from "../../components/Breadcrumb";
import HighlightedCpp from "../../components/HighlightedCpp";
import HighlightedJava from "../../components/HighlightedJava";
import Link from "next/link";

export default function BangdbEnvironmentApi() {
  const [tab, setTab] = useState(1);

  return (
    <React.Fragment>
      <Head>
        <title>Environment API - BangDB</title>
        <meta
          name="description"
          content="Learn about BangDB Server Environment APIs. Read the documentation to know more about BangDB Server APIs."
        ></meta>
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Environment API - BangDB" />
        <meta
          property="og:description"
          content="Learn about BangDB Server Environment APIs. Read the documentation to know more about BangDB Server APIs."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="Environment API - BangDB" />
        <meta
          name="twitter:description"
          content="Learn about BangDB Server Environment APIs. Read the documentation to know more about BangDB Server APIs."
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
              <h1 className="article-title">Environment API</h1>
              <div className="article-body">
                <p>
                  To get started with BangDB Server, we need to create the
                  environment for the BangDB.
                </p>
                <div className="tab-shifter">
                  <div className="tab-wrapper">
                    <div className="tab" onClick={() => setTab(1)}>
                      <span className={tab !== 1 ? null : "active"}>C++</span>
                    </div>
                    <div className="tab" onClick={() => setTab(2)}>
                      <span className={tab !== 2 ? null : "active"}>Java</span>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: tab === 1 ? "block" : "none",
                  }}
                >
                  <p>
                    Create the BangDB Env object by calling the constructor
                    which takes DBParam as argument
                  </p>
                  <HighlightedCpp code={`BangDBEnv(DBParam dbp);`} />
                  <p>
                    The DBParam is structure which defines the parameters for
                    database. You may leave it NULL for defualt to be used or
                    initialise it for overriding the param values. To verify the
                    database
                  </p>
                  <HighlightedCpp
                    code={`DBParam *verifyDatabase(const char *dbname);`}
                  />
                  <p>
                    It returns DBParam for the database{" "}
                    <code>&quot;dbname&quot;</code>, user should delete the
                    reference as required to get the host ip and port
                  </p>
                  <HighlightedCpp
                    code={`char *getHost();
char *getPort();`}
                  />
                  <p>
                    To close the database (this can be done by just deleting the
                    database object as well)
                  </p>
                  <HighlightedCpp
                    code={`void closeDatabase(BangDBDatabase *bdb, CloseType dbclose = DEFAULT_AT_CLIENT);`}
                  />
                  <p>Finally to delete the env object</p>
                  <HighlightedCpp code={`virtual ~BangDBEnv();`} />
                </div>
                <div
                  style={{
                    display: tab === 2 ? "block" : "none",
                  }}
                >
                  <p>
                    Create the BangDB Env object by calling the constructor
                    which takes DBParam as argument
                  </p>
                  <HighlightedJava code={`public BangDBEnv(DBParam dbp)`} />
                  <p>
                    The DBParam is structure which defines the parameters for
                    database. You may leave it NULL for defualt to be used or
                    initialise it for overriding the param values. To verify the
                    database
                  </p>
                  <HighlightedJava
                    code={`public DBParam verifyDatabase(String dbName)`}
                  />
                  <p>
                    It returns DBParam for the database{" "}
                    <code>&quot;dbname&quot;</code>. To close the database
                  </p>
                  <HighlightedJava
                    code={`public synchronized void closeDatabase(CloseType dbclose)`}
                  />
                  <p>To get host IP and PORT</p>
                  <HighlightedJava
                    code={`public String getHost() public String getPort()`}
                  />
                  <p>To Open Database</p>
                  <HighlightedJava
                    code={`public synchronized BangDBDatabase openDatabase(String dbName, DBParam dbparam)`}
                  />
                </div>
              </div>
            </article>
          </div>
        </main>
      </section>
    </React.Fragment>
  );
}
