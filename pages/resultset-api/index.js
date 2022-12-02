import React, { useState } from "react";
import Head from "next/head";
import Breadcrumb from "../../components/Breadcrumb";
import HighlightedCpp from "../../components/HighlightedCpp";
import HighlightedJava from "../../components/HighlightedJava";
import Link from "next/link";

export default function ResultSetApi() {
  const [tab, setTab] = useState(1);

  return (
    <React.Fragment>
      <Head>
        <title>Result Set - BangDB</title>
        <meta
          name="description"
          content="Learn about BangDB Result Set & server APIs. Read the documentation to know more about BangDB Server APIs."
        ></meta>
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Result Set - BangDB" />
        <meta
          property="og:description"
          content="Learn about BangDB Result Set & server APIs. Read the documentation to know more about BangDB Server APIs."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="Scan Filter - BangDB" />
        <meta
          name="twitter:description"
          content="Learn about BangDB Result Set & server APIs. Read the documentation to know more about BangDB Server APIs."
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
              <h1 className="article-title">Result Set</h1>
              <div className="article-body">
                <p>
                  BangDB returns set of data for query using Result Set. Result
                  Set allows iteration over keys and values.
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
                  <p>To create ResultSet object</p>
                  <HighlightedCpp code={`ResultSet();`} />
                  <p>To set ResultSet value</p>
                  <HighlightedCpp code={`ResultSet(long rs);`} />
                  <p>To check data status</p>
                  <HighlightedCpp code={`bool moreDataToCome();`} />
                  <p>To count the events</p>
                  <HighlightedCpp code={`int count();`} />
                  <p>Checking for beginning</p>
                  <HighlightedCpp code={`void begin();`} />
                  <p>To check for next event</p>
                  <HighlightedCpp code={`bool hasNext();`} />
                  <p>To move to next event</p>
                  <HighlightedCpp code={`void moveNext();`} />
                  <p>To get next key</p>
                  <HighlightedCpp code={`FDT *getNextKey();`} />
                  <p>
                    User should not free the returned FDT* here, it gets cleared
                    with ResultSet object itself.
                    <br />
                    To get next value
                  </p>
                  <HighlightedCpp code={`FDT *getNextVal();`} />
                  <p>
                    User should not free the returned FDT* here, it gets cleared
                    with ResultSet object itself.
                    <br />
                    To get next stream key
                  </p>
                  <HighlightedCpp code={`char *getNextKeyStr();`} />
                  <p>
                    User should not free the returned char* here, it gets
                    cleared with ResultSet object itself.
                    <br />
                    To get length of next stream key
                  </p>
                  <HighlightedCpp code={`int getNextKeyLen();`} />
                  <p>To get next stream val</p>
                  <HighlightedCpp code={`char *getNextValStr();`} />
                  <p>
                    User should not free the returned char* here, it gets
                    cleared with ResultSet object itself.
                    <br />
                    To get next stream val length
                  </p>
                  <HighlightedCpp code={`int getNextValLen();`} />
                  <p>To get size of next long key</p>
                  <HighlightedCpp code={`long getNextKeyLong();`} />
                  <p>To get size of next long val</p>
                  <HighlightedCpp code={`long getNextValLong();`} />
                  <p>To check if key is string type</p>
                  <HighlightedCpp code={`bool isKeyString();`} />
                  <p>To check if the value is string type</p>
                  <HighlightedCpp code={`bool isValString();`} />
                  <p>To delete ResultSet object</p>
                  <HighlightedCpp code={`virtual ~ResultSet();`} />
                </div>
                <div
                  style={{
                    display: tab === 2 ? "block" : "none",
                  }}
                >
                  <p>To create ResultSet object</p>
                  <HighlightedJava code={`public ResultSet(long rs)`} />
                  <p>To add document</p>
                  <HighlightedJava
                    code={`public void addDoc(ResultSet rs, String orderBy)`}
                  />
                  <p>To add ResultSet object</p>
                  <HighlightedJava
                    code={`public void add(ResultSet rs, boolean byval)`}
                  />
                  <p>To append a document</p>
                  <HighlightedJava
                    code={`public void appendDoc(ResultSet rs, String orderBy)`}
                  />
                  <p>To append ResultSet object</p>
                  <HighlightedJava code={`public void append(ResultSet rs)`} />
                  <p>To insert a document</p>
                  <HighlightedJava
                    code={`public void insertDoc(ResultSet rs, String orderBy)`}
                  />
                  <p>To get next event key</p>
                  <HighlightedJava code={`public String getNextKeyStr()`} />
                  <p>To get next event value if string</p>
                  <HighlightedJava code={`public String getNextValStr()`} />
                  <p>To reverse</p>
                  <HighlightedJava code={`public void beginReverse()`} />
                  <p>To get next event&apos;s key if long</p>
                  <HighlightedJava code={`public long getNextKeyLong()`} />
                  <p>To get next val if it&apos;s long</p>
                  <HighlightedJava code={`public long getNextValLong()`} />
                  <p>To check for next event</p>
                  <HighlightedJava code={`public boolean hasNext()`} />
                  <p>To move to next event</p>
                  <HighlightedJava code={`public void moveNext()`} />
                  <p>To count events</p>
                  <HighlightedJava code={`public int count()`} />
                  <p>To check is val string</p>
                  <HighlightedJava code={`public boolean isValStr()`} />
                  <p>To check if more data is inserted</p>
                  <HighlightedJava code={`public boolean moreDataToCome()`} />
                  <p>To search for a key</p>
                  <HighlightedJava
                    code={`public byte[] searchValue(byte[] key)`}
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
