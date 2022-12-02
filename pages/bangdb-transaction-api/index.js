import React, { useState } from "react";
import Head from "next/head";
import Breadcrumb from "../../components/Breadcrumb";
import HighlightedCpp from "../../components/HighlightedCpp";
import HighlightedJava from "../../components/HighlightedJava";

export default function BangdbTransactionApi() {
  const [tab, setTab] = useState(1);

  return (
    <React.Fragment>
      <Head>
        <title>Transaction - BangDB</title>
        <meta
          name="description"
          content="Learn about BangDB Transaction & server APIs. Read the documentation to know more about BangDB Server APIs."
        ></meta>
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Transaction - BangDB" />
        <meta
          property="og:description"
          content="Learn about BangDB Transaction & server APIs. Read the documentation to know more about BangDB Server APIs."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="Transaction - BangDB" />
        <meta
          name="twitter:description"
          content="Learn about BangDB Transaction & server APIs. Read the documentation to know more about BangDB Server APIs."
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
              <h1 className="article-title">Transaction</h1>
              <div className="article-body">
                <p>
                  BangDB Transaction provides a mechanism to bundle a set of
                  operations in a transaction to ensure atomicity for all the
                  bundled operations. BangDB implements Optimistic Concurrency
                  Control (OCC) to implement the transaction.
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
                  <p>To create transaction object</p>
                  <HighlightedCpp code={`Transaction();`} />
                  <p>To check status of transaction</p>
                  <HighlightedCpp code={`bool isActive();`} />
                  <p>To delete transaction object</p>
                  <HighlightedCpp code={`virtual ~Transaction();`} />
                </div>
                <div
                  style={{
                    display: tab === 2 ? "block" : "none",
                  }}
                >
                  <p>To create transaction object</p>
                  <HighlightedJava code={`public Transaction()`} />
                  <p>To check status of transaction</p>
                  <HighlightedJava code={`public boolean isActive()`} />
                  <p>To close transaction</p>
                  <HighlightedJava code={`public synchronized void close()`} />
                </div>
              </div>
            </article>
          </div>
        </main>
      </section>
    </React.Fragment>
  );
}
