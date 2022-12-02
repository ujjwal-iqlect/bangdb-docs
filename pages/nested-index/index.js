import React from "react";
import Head from "next/head";
import Breadcrumb from "../../components/Breadcrumb";
import HighlightedCpp from "../../components/HighlightedCpp";

export default function NestedKeyIndex() {
  const scanTableCppCode = String.raw`const char *query = {
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
       }
    ]
 };`;

  return (
    <React.Fragment>
      <Head>
        <title>Nested Key Index - BangDB</title>
        <meta
          name="description"
          content="Let's say We wish to index city as well so that we could search people using city. To do this we will create the nested index like this"
        ></meta>
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Nested Key Index - BangDB" />
        <meta
          property="og:description"
          content="Let's say We wish to index city as well so that we could search people using city. To do this we will create the nested index like this"
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="Nested Key Index - BangDB" />
        <meta
          name="twitter:description"
          content="Let's say We wish to index city as well so that we could search people using city. To do this we will create the nested index like this"
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
              <h1 className="article-title">Nested Key Index</h1>
              <div className="article-body">
                <p>
                  Like in previous section, taking the same document, now
                  let&apos;s say we wish to index city as well so that we could
                  search people using city.
                </p>
                <p>To do this we will create the nested index like this</p>
                <HighlightedCpp
                  code={String.raw`tbl->addIndex("address.city", 40, true);`}
                />
                <p>
                  now we can search using the scan_doc again for both name and
                  city
                </p>
                <aside className="doc-note">
                  <strong>Note: </strong>joinop is 0 which means AND, see the
                  join_operator enum in the enum section. Therefore, the query
                  looks like following.
                </aside>
                <p>Scan the table where name is sachin and city is bangalore</p>
                <HighlightedCpp code={scanTableCppCode} />
                <HighlightedCpp
                  code={String.raw`resultset *rs = NULL; scan_filter sf;
while(true) {
  rs = tbl->scan_doc(rs, NULL, NULL, query, &sf);
  if(!rs) break; while(rs->hasNext()) { 
    // keys and vals 
    rs->moveNext(); 
   } 
} `}
                />
              </div>
            </article>
          </div>
        </main>
      </section>
    </React.Fragment>
  );
}
