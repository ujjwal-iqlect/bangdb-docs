import React, { useState } from "react";
import Head from "next/head";
import Breadcrumb from "../../components/Breadcrumb";
import HighlightedCpp from "../../components/HighlightedCpp";
import HighlightedJava from "../../components/HighlightedJava";
import Link from "next/link";

export default function BangdbTransactionEmbedded() {
  const [tab, setTab] = useState(1);

  return (
    <React.Fragment>
      <Head>
        <title>Transaction (Embedded) - BangDB</title>
        <meta
          name="description"
          content="Learn more about BangDB Transaction (Embedded). Read the documentation to learn to make embedded applications using BangDB."
        ></meta>
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Transaction (Embedded) - BangDB" />
        <meta
          property="og:description"
          content="Learn more about BangDB Transaction (Embedded). Read the documentation to learn to make embedded applications using BangDB."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="Transaction (Embedded) - BangDB" />
        <meta
          name="twitter:description"
          content="Learn more about BangDB Transaction (Embedded). Read the documentation to learn to make embedded applications using BangDB."
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
              <h1 className="article-title">Transaction (Embedded)</h1>
              <div className="article-body">
                <p>
                  BangDB Transaction (Embedded) provides a mechanism to bundle a
                  set of operations in a transaction to ensure atomicity for all
                  the bundled operations. BangDB implements Optimistic
                  Concurrency Control (OCC) to implement the transaction.
                </p>
                <aside className="doc-note">
                  <strong>Note: </strong>We create transaction object of
                  BangDBTransaction type, but we begin, commit or abort using
                  the BangDBDatabase type, see{" "}
                  <Link href={"/bangdb-database-embedded"}>
                    BangDB Database
                  </Link>{" "}
                  for more the details for these APIs.
                </aside>
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
                  <p>To check status of the transaction</p>
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
                  <p>To check status of the transaction</p>
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
