import React from "react";
import Head from "next/head";
import Breadcrumb from "../../components/Breadcrumb";
import HighlightedCpp from "../../components/HighlightedCpp";

export default function SecondaryKeyIndex() {
  const putDocIntoTableCppCode = String.raw`
  const char * doc = "{
  "name": "sachin",
  "org": "bangdb",
  "address": {
     "city": "Bangalore",
     "state": "KA"
  },
  "fav_quote": "We build too many walls and not enough bridges"
  }
  ";`;

  const scanUsingIndexCppCode = String.raw`const char *query = "{"query":[{"key":"name", "cmp_op":4, "val":"sachin"}]}";

  // this query is to find all docs where name = "sachin", 4 is EQ enum value for scan_operator enum.
  // we can also create this using dataQuery as follows;
  /*
  dataQuery dq;
  dq.addFilter("name", EQ, "sachin", JO_INVALID);
  const char *query = dq.getQuery();
  We can keep adding like this to create complex query
  */
  
  resultset *rs = NULL;
  scan_filter sf;
  while(true)
  {
      rs = tbl->scan_doc(rs, NULL, NULL, query, &sf);
      if(!rs)
          break;
      while(rs->hasNext())
      {
          // keys and vals
          rs->moveNext();
      }
  }`;

  return (
    <React.Fragment>
      <Head>
        <title>Secondary Key Index - BangDB</title>
        <meta
          name="description"
          content="Secondary key indexes are created once the table is created or opened. This can only be done for Wide_Table type."
        ></meta>
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Secondary Key Index - BangDB" />
        <meta
          property="og:description"
          content="Secondary key indexes are created once the table is created or opened. This can only be done for Wide_Table type."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="Secondary Key Index - BangDB" />
        <meta
          name="twitter:description"
          content="Secondary key indexes are created once the table is created or opened. This can only be done for Wide_Table type."
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
              <h1 className="article-title">Secondary Key Index</h1>
              <div className="article-body">
                <h2>For JSON data/document</h2>
                <p>
                  Secondary key or indexes are created once the table is created
                  or opened. This can only be done for Wide_Table type. Please
                  see bangdb_table_type for more info. Using{" "}
                  <code>addIndex()</code> method we can do this. Again we use{" "}
                  <code>table_env</code> to set the property of the index.
                </p>
                <p>Here are methods to do the same:</p>
                <HighlightedCpp
                  code={"int addIndex(const char *idxName, table_env *tenv);"}
                />
                <p>
                  The above is the generic method to add index, however for
                  simplicity there are two helper methods are provided to
                  create, one index for string key and other for nominal key. We
                  can use these two assuming all default setting is acceptable
                  or we can use the generic one which gives us more flexibility.
                </p>
                <p>The helper ones are following:</p>
                <p>Always creates index with following property</p>
                <ul>
                  <li>BTREE</li>
                  <li>INMEM_PERSIST</li>
                  <li>QUASI_LEXICOGRAPH</li>
                  <li>SORT_ASCENDING</li>
                  <li>log = off</li>
                </ul>
                <HighlightedCpp
                  code={
                    "int addIndex_str(const char *idxName, int idx_size, bool allowDuplicates);"
                  }
                />
                <HighlightedCpp
                  code={
                    "int addIndex_num(const char *idxName, bool allowDuplicates);"
                  }
                />
                <p>
                  Now, let&apos;s create index for sting as follows on a field
                  &quot;name&quot;
                </p>
                <HighlightedCpp
                  code={String.raw`tbl->addIndex_str("name", 32, true);`}
                />
                <p>
                  We just created an index for field “name”, with max size as 32
                  and allowed duplicate entries for the same. Now, when we put
                  document into the table, db will add index for the name column
                  as well.
                </p>
                <HighlightedCpp code={putDocIntoTableCppCode} />
                <HighlightedCpp code={"tbl->put_doc(doc);"} />
                <p>
                  We should check for error returned by the API put_doc, but
                  ignored for brevity. Here, we did not provide explicit primary
                  key, therefore db will add <code>&quot;pk&quot;</code> field in the doc
                  and use it as primary key. This <code>&quot;pk&quot;</code> is
                  timestamp. Also, we didn&apos;t specify if we wanted reverse
                  index to be created or now, later we will see this as well.
                </p>
                <p>Now let&apos;s scan using the index</p>
                <HighlightedCpp code={scanUsingIndexCppCode} />
              </div>
            </article>
          </div>
        </main>
      </section>
    </React.Fragment>
  );
}
