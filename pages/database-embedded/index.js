import React, { useState } from "react";
import Head from "next/head";
import HighlightedCpp from "../../components/HighlightedCpp";
import HighlightedJava from "../../components/HighlightedJava";
import Breadcrumb from "../../components/Breadcrumb";

export default function DatabaseEmbedded() {
  const [tab, setTab] = useState(1);

  const createDatabaseCppCode = String.raw`db_param dpm;
  dpm.setTransactionType(DB_TRANSACTION_NONE);
  bangdb_database *bdb = bangdb_database::getInstance("mydb", *dpm);
  if(!bdb)
  {
      printf(""db could not be created, quitting\n");
      //handle the error
  }
  // DBParam sets the db environment, see the section to know more about it`;

  const createDatabaseJavaCode = String.raw`DBParam dp;
  dp.setTransactionType(DB_MULTIOPS_TRANSACTION_NONE);
  BangDBDatabase bdb = new BangDBDatabase("mydb", dp);
  if(bdb == null){
   System.out.println("db could not be created, quitting");
   // handle error, possibly return from here
  }
  // DBParam sets the db environment, see the section to know more about it`;

  return (
    <React.Fragment>
      <Head>
        <title>Database Intro - BangDB</title>
        <meta
          name="description"
          content="Database and Tables are two most important types to work with and most of the time developers will deal with these two types..."
        ></meta>
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Database Intro - BangDB" />
        <meta
          property="og:description"
          content="Database and Tables are two most important types to work with and most of the time developers will deal with these two types..."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="Database Intro - BangDB" />
        <meta
          name="twitter:description"
          content="Database and Tables are two most important types to work with and most of the time developers will deal with these two types..."
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
              <Breadcrumb text="Introduction" url="/bangdb-introduction" />
              <h1 className="article-title">Database Intro</h1>
              <div className="article-body">
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
                    We create database simply as shown. This should be the first
                    thing that we do before doing anything else.
                  </p>
                  <HighlightedCpp code={createDatabaseCppCode} />
                  <aside className="doc-note">
                    <strong>Note: </strong>We must tell db where to find the
                    bangdb.config file. This can be done by either keeping the
                    file in the same dir as your application in case of embedded
                    or in case of server the same dir as server. We can override
                    this by setting the configPath in DBParam before calling
                    getInstance.
                  </aside>
                  <p>
                    DBParam is used to set the db environment. It is described
                    as below.
                  </p>
                </div>
                <div
                  style={{
                    display: tab === 2 ? "block" : "none",
                  }}
                >
                  <p>
                    We create database simply as shown. This should be the first
                    thing that we do before doing anything else.
                  </p>
                  <HighlightedJava code={createDatabaseJavaCode} />
                  <aside className="doc-note">
                    <strong>Note: </strong>We must tell db where to find the
                    bangdb.config file. This can be done by either keeping the
                    file in the same dir as your application in case of embedded
                    or in case of server the same dir as server. We can override
                    this by setting the configPath in DBParam before calling
                    getInstance.
                  </aside>
                  <p>
                    DBParam is used to set the db environment. It is described
                    as below.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </main>
      </section>
    </React.Fragment>
  );
}
