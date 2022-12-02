import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import HighlightedCpp from "../../components/HighlightedCpp";
import Breadcrumb from "../../components/Breadcrumb";

export default function ReverseIndex() {
  const createTableCode = String.raw`table_env tenv;
tenv.set_table_type(WIDE_TABLE);
tenv.set_rev_idx(true);
bangdb_table *tbl = bdb->getTable("mywidetable", &tenv);`;

  const addDuringPutCode = String.raw`const char *rev_idx = "{"_rev_idx_all":0, "_rev_idx_key_list":["fav_quote"]}";
//note that _rev_idx_all if set 1 then it will reverse index all the fields in the doc.//Also _rev_idx_key_list is not required in that condition
tbl->put_doc(doc, NULL, rev_idx, INSERT_UNIQUE);`;

  const addReverseIndexConditionCode = String.raw`const char *query = {
    "query":[
       {
          "key":"name",
          "cmp_op":4,
          "val":"sachin"
       },
       {
          "joinop":0
       },
       {
          "key":"address.city",
          "cmp_op":4,
          "val":"Bangalore"
       },
       {
          "joinop":0
       },
       {
          "match_words":"wall, bridge",
          "joinop":0,
          "field":"fav_quote"
       }
    ]
 };
 // now call the scan same way to get the data
 `;

  return (
    <React.Fragment>
      <Head>
        <title>Reverse Index - BangDB</title>
        <meta
          name="description"
          content="It also can be done with WIDE_TABLE type only. Therefore to allow reverse index in the table, we need to create or open table..."
        ></meta>
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Reverse Index - BangDB" />
        <meta
          property="og:description"
          content="It also can be done with WIDE_TABLE type only. Therefore to allow reverse index in the table, we need to create or open table..."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="Reverse Index - BangDB" />
        <meta
          name="twitter:description"
          content="It also can be done with WIDE_TABLE type only. Therefore to allow reverse index in the table, we need to create or open table..."
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
              <h1 className="article-title">Reverse Index</h1>
              <div className="article-body">
                <h2>
                  Search query using reverse index mixed with other indexes
                </h2>
                <p>
                  This also can be done with <code>WIDE_TABLE</code> type only.
                  Therefore to allow reverse index / indexing in the table, we
                  need to create or open table like following:
                </p>
                <HighlightedCpp code={createTableCode} />
                <p>
                  Now taking the same document as above, let&apos;s say we would
                  like to reverse index the content of the field{" "}
                  <code>&quot;fav_quote&quot;</code>.
                </p>
                <p>Then we would like to add following during put</p>
                <HighlightedCpp code={addDuringPutCode} />
                <p>
                  Now to scan for query like above but will add reverse index
                  condition
                </p>
                <HighlightedCpp code={addReverseIndexConditionCode} />
                <aside className="doc-note">
                  <strong>Note: </strong>We could use primary key filter every
                  where by passing the keys during scan.
                </aside>
                <p>
                  We could also put normal text (not JSON doc) and scan using{" "}
                  <code>put_text</code> and <code>scan_text</code>. In case of{" "}
                  <code>put_text()</code>, db will reverse index the input text.
                </p>
                <p>
                  For scan, simply create a list of all the tokens for search in
                  a <code>char*[]</code> and then call <code>scan_text()</code>.
                </p>
              </div>
            </article>
          </div>
        </main>
      </section>
    </React.Fragment>
  );
}
