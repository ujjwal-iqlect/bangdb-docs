import React from "react";
import Head from "next/head";
import Breadcrumb from "../../components/Breadcrumb";

export default function IndexBangdb() {
  return (
    <React.Fragment>
      <Head>
        <title>Index - BangDB</title>
        <meta
          name="description"
          content="Index - BangDB 2.0 supports several indexing methods to be able to query them at run time. It supports primary & secondary indexes."
        ></meta>
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Index - BangDB" />
        <meta
          property="og:description"
          content="Index - BangDB 2.0 supports several indexing methods to be able to query them at run time. It supports primary & secondary indexes."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="Index - BangDB" />
        <meta
          name="twitter:description"
          content="Index - BangDB 2.0 supports several indexing methods to be able to query them at run time. It supports primary & secondary indexes."
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
              <h1 className="article-title">Index</h1>
              <div className="article-body">
                <p>
                  BangDB 2.0 supports several indexing methods to be able to
                  query them efficiently at run time BangDB supports primary and
                  secondary index on the data which may be structured (JSON
                  data) or unstructured (string or opaque). The primary index is
                  always created when data is stored using put. The way primary
                  index (or key) is stored is determined by how the index type
                  was defined while creating the table.
                </p>
                <p>There are two ways of defining the primary index type:</p>
                <ul>
                  <li>BTREE (B + TREE)</li>
                  <li>HASH (ExtHash)</li>
                </ul>
                <p>
                  The index type can be defined explicitly by using TableEnv
                  type or by default it reads the default value from the
                  bangdb.config file for param BANGDB_INDEX_TYPE. However,
                  BangDB also supports many kinds of other indexes and user can
                  create or drop as required using the simple APIs.
                </p>
                <p>
                  The secondary indexes can be created on both opaque or json
                  data, but since BangDB can&apos;t look inside the opaque data
                  hence user has to specify the indexes name and value
                  explicitly during put. With structured data, user can create
                  as many indexes as required and there is no theoretical limit
                  to it. Once created user may then just simply put data and the
                  db would add all necessary indexes apart from storing the
                  data.
                </p>
                <p>
                  The user doesn&apos;t need to define the indexes explicitly
                  during put here as db can look into the json data. There are
                  separate APIs for dealing with unstructured and structured
                  data for indexes for simplicity and user should use
                  appropriate API based on data type. Scan can be used to
                  retrieve the data based on index values. Scan returns result
                  set which can further be used for combining results from many
                  different scans.
                </p>
                <p>
                  Following indexing techniques could be used depending upon the
                  use cases:
                </p>
                <ul>
                  <li>Primary key Index</li>
                  <li>Secondary key Index</li>
                  <li>Nested key Index</li>
                  <li>Composite key Index</li>
                  <li>Geospatial key Index</li>
                  <li>Reversed key Index</li>
                </ul>
                <p>
                  Let&apos;s discuss all these in detail different subsections.
                </p>
              </div>
            </article>
          </div>
        </main>
      </section>
    </React.Fragment>
  );
}
