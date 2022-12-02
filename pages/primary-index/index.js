import React from "react";
import Head from "next/head";
import Breadcrumb from "../../components/Breadcrumb";
import HighlightedCpp from "../../components/HighlightedCpp";

export default function PrimaryKeyIndex() {
  const typesOfPkArrangementCode = String.raw`//types of pk arrangement
    enum bangdb_index_type { 
       HASH, // Not supported anymore 
       EXTHASH,
       BTREE,
       HEAP, // Not supported anymore 
       INVALID_INDEX_TYPE, 
    };`;

  const scanKeysBetweenK1andK2Code = String.raw`resultset *rs = NULL;
    scan_filter sf;
    // To set some simple filter criteria
    while (true) {
        rs = tbl->scan(rs, k1, k2, &sf);
        f(!rs) break;
        while (rs->hasNext())
        {
            // use rs key and val
            rs->moveNext();
        }
    }`;

  return (
    <React.Fragment>
      <Head>
        <title>Primary Key Index - BangDB</title>
        <meta
          name="description"
          content="Every data, value or document has a primary key index associated with it in BangDB, explicitly or implicitly (timestamp)."
        ></meta>
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Primary Key Index - BangDB" />
        <meta
          property="og:description"
          content="Every data, value or document has a primary key index associated with it in BangDB, explicitly or implicitly (timestamp)."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="Primary Key Index - BangDB" />
        <meta
          name="twitter:description"
          content="Every data, value or document has a primary key index associated with it in BangDB, explicitly or implicitly (timestamp)."
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
              <h1 className="article-title">Primary Key Index</h1>
              <div className="article-body">
                <h2>Primary index on the data</h2>
                <p>
                  Every data, value or document has a primary key associated
                  with it in BangDB, explicitly or implicitly (timestamp).
                  Therefore, we will need to store these data in such a manner
                  where <code>get()</code> or <code>scan()</code> works
                  efficiently.
                </p>
                <p>
                  When we wish to store in sorted manner then we should use
                  BTREE as method else EHASH should be used.
                </p>
                <p>
                  To set the method for arranging the primary key, we will have
                  to tell this while creating the table. This can be done by
                  setting up the right parameter in the <code>table_env</code>{" "}
                  object. The parameter that we set for this is idx_type.
                </p>
                <p>
                  By default it is set to BTREE, but still we can set it as per
                  the value defined in enum bangdb_index_type.
                </p>
                <HighlightedCpp code={typesOfPkArrangementCode} />
                <p>
                  As you see there are only two options here, BTREE or EXTHASH.
                </p>
                <aside className="doc-note">
                  <strong>Note: </strong>Once set and table created, we
                  can&apos;t change this for the lifetime of the table
                </aside>
                <h2>Query</h2>
                <p>
                  The index on primary key is implicitly used when we call{" "}
                  <code>get()</code>
                  for a key. When we do <code>scan(k1, k2);</code> then db
                  searches using the index. Let&apos;s see some actual query
                  using this.
                </p>
                <p>
                  Let&apos;s say we have a table “mytable” where the primary key
                  is indexed using BTREE, and we wish to scan the table for all
                  the keys between k1 and k2. If it&apos;s a{" "}
                  <code>NORMAL_TABLE</code>.
                </p>
                <HighlightedCpp code={scanKeysBetweenK1andK2Code} />
              </div>
            </article>
          </div>
        </main>
      </section>
    </React.Fragment>
  );
}
