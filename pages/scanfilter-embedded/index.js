import React, { useState } from "react";
import Head from "next/head";
import Breadcrumb from "../../components/Breadcrumb";
import HighlightedCpp from "../../components/HighlightedCpp";
import HighlightedJava from "../../components/HighlightedJava";
import Link from "next/link";

export default function ScanFilterEmbedded() {
  const [tab, setTab] = useState(1);

  return (
    <React.Fragment>
      <Head>
        <title>Scan Filter (Embedded) - BangDB</title>
        <meta
          name="description"
          content="Learn more about BangDB Scan Filter (Embedded). Read the documentation to learn to make embedded applications using BangDB."
        ></meta>
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Scan Filter (Embedded) - BangDB" />
        <meta
          property="og:description"
          content="Learn more about BangDB Scan Filter (Embedded). Read the documentation to learn to make embedded applications using BangDB."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="Scan Filter (Embedded) - BangDB" />
        <meta
          name="twitter:description"
          content="Learn more about BangDB Scan Filter (Embedded). Read the documentation to learn to make embedded applications using BangDB."
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
              <h1 className="article-title">Scan Filter (Embedded)</h1>
              <div className="article-body">
                <p>
                  Scan Filter (Embedded) is used to set a few elements for scan.
                  Note this is mainly used for the primary keys. For example if
                  we wish to scan data like following:
                </p>
                <aside className="doc-api-code">
                  <p>
                    <strong>Range</strong> : Key &quot;abc&quot; and key
                    &quot;bcde&quot; (using skey_op and ekey_op of ScanFilter
                    respectively).
                  </p>
                  <p>
                    <strong>Limit</strong> : 100 (Limit By defines what)
                  </p>
                  <p>
                    <strong>Limit By</strong> : data size | number of rows Only
                    Key : true (only keys), false (both key and value)
                  </p>
                  <p>
                    <strong>Reserved</strong> : There is reserved variable, used
                    for certain cases
                  </p>
                </aside>
                <p>See below for API details.</p>
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
                  <p>To create scanFilter object</p>
                  <HighlightedCpp code={`ScanFilter();`} />
                  <p>To set ScanOperator for skey</p>
                  <HighlightedCpp
                    code={`void set_skey_op(ScanOperator skey_op);`}
                  />
                  <aside className="doc-api-code">
                    <p>ScanOperator is an enum with values:</p>
                    <p>
                      GT,
                      <br />
                      GTE,
                      <br />
                      LT,
                      <br />
                      LTE,
                      <br />
                      EQ,
                      <br />
                      NE
                    </p>
                    <p>
                      Please see more on this at{" "}
                      <Link href={"/bangdb-client-common"}>bangdb common</Link>
                    </p>
                  </aside>
                  <p>To get ScanOperator for skey</p>
                  <HighlightedCpp code={`ScanOperator get_skey_op();`} />
                  <p>To set ScanOperator for ekey</p>
                  <HighlightedCpp
                    code={`void set_ekey_op(ScanOperator ekey_op);`}
                  />
                  <p>To get ScanOperator for ekey</p>
                  <HighlightedCpp code={`ScanOperator get_ekey_op();`} />
                  <p>To set ScanLimitBy</p>
                  <HighlightedCpp
                    code={`void set_limit_by(ScanLimitBy limitby);`}
                  />
                  <aside className="doc-api-code">
                    <p>ScanLimitBy is an enum with values:</p>
                    <p>
                      LIMIT_INVALID = -1
                      <br />
                      LIMIT_RESULT_SIZE,
                      <br />
                      LIMIT_RESULT_ROW
                    </p>
                    <p>
                      Please see more on this at{" "}
                      <Link href={"/bangdb-client-common"}>bangdb common</Link>
                    </p>
                  </aside>
                  <p>To get the set ScanLimitBy value</p>
                  <HighlightedCpp code={`ScanLimitBy get_limit_by();`} />
                  <p>To set limit</p>
                  <HighlightedCpp code={`void set_limit(int limit);`} />
                  <p>To get the set limit value</p>
                  <HighlightedCpp code={`int get_limit();`} />
                  <p>To set key flag</p>
                  <HighlightedCpp code={`void set_only_key(short flag);`} />
                  <p>To get status of set key</p>
                  <HighlightedCpp code={`short get_only_key();`} />
                  <p>To set reserved value</p>
                  <HighlightedCpp code={`void set_reserved(int reserved);`} />
                  <p>To get the value of reserved set</p>
                  <HighlightedCpp code={`int get_reserved();`} />
                  <p>To delete ScanFilter object</p>
                  <HighlightedCpp code={`virtual ~ScanFilter();`} />
                </div>
                <div
                  style={{
                    display: tab === 2 ? "block" : "none",
                  }}
                >
                  <p>To create scanFilter object</p>
                  <HighlightedJava code={`public ScanOperator skeyOp;`} />
                  <p>To set ScanOperator for skey</p>
                  <HighlightedJava code={`public ScanOperator ekeyOp;`} />
                  <aside className="doc-api-code">
                    <p>ScanOperator is an enum with values:</p>
                    <p>
                      GT,
                      <br />
                      GTE,
                      <br />
                      LT,
                      <br />
                      LTE,
                      <br />
                      EQ,
                      <br />
                      NE
                    </p>
                    <p>
                      Please see more on this at{" "}
                      <Link href={"/bangdb-client-common"}>bangdb common</Link>
                    </p>
                  </aside>
                  <p>To set ScanLimitBy</p>
                  <HighlightedJava code={`public ScanLimitBy limitBy;`} />
                  <aside className="doc-api-code">
                    <p>ScanLimitBy is an enum with values:</p>
                    <p>
                      LIMIT_INVALID = -1
                      <br />
                      LIMIT_RESULT_SIZE,
                      <br />
                      LIMIT_RESULT_ROW
                    </p>
                    <p>
                      Please see more on this at{" "}
                      <Link href={"/bangdb-client-common"}>bangdb common</Link>
                    </p>
                  </aside>
                  <p>To set to limit</p>
                  <HighlightedJava code={`public int limit;`} />
                  <p>To set to skip count</p>
                  <HighlightedJava code={`public int skipCount;`} />
                  <p>To set key flag</p>
                  <HighlightedJava code={`public int onlyKey;`} />
                  <p>To get filter Query</p>
                  <HighlightedJava code={`public ScanFilter()`} />
                  <p>To set filter</p>
                  <HighlightedJava code={`public void setFilter()`} />
                  <p>To close ScanFilter</p>
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
