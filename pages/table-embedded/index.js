import React, { useState } from "react";
import Head from "next/head";
import HighlightedCpp from "../../components/HighlightedCpp";
import HighlightedJava from "../../components/HighlightedJava";
import Breadcrumb from "../../components/Breadcrumb";

export default function TableEmbedded() {
  const [tab, setTab] = useState(1);

  const differentTablesCppCode = String.raw`enum TableType {
    NORMAL_TABLE,
    WIDE_TABLE,
    INDEX_TABLE,
    //opaque(void*) as key, datlen is of actual value in the data file store in main table
    PRIMITIVE_TABLE_INT,
    //int as key and int as val, stored in index file only, no data file 
    PRIMITIVE_TABLE_LONG,
    //long as key and long as val, stored in index file only, no data file 
    PRIMITIVE_TABLE_STRING,
    //opaque(void*) as key and data stored in the index only, no data file
    Fixed Table LARGE_TABLE,
    BANGDB_TABLE_INVALID
};`;

  const differentTablesJavaCode = String.raw`public enum TableType { 
    NORMAL_TABLE,
    WIDE_TABLE,
    INDEX_TABLE,
    //opaque(void*) as key, datlen is of actual value in the data file store in main table
    PRIMITIVE_TABLE_INT,
    //int as key and int as val, stored in index file only, no data file
    PRIMITIVE_TABLE_LONG,
    //long as key and long as val, stored in index file only, no data file 
    PRIMITIVE_TABLE_STRING,
    //opaque(void*) as key and data stored in the index only, no data file Fixed table
    LARGE_TABLE,
    BANGDB_TABLE_INVALID
};`;

  return (
    <React.Fragment>
      <Head>
        <title>Table Intro - BangDB</title>
        <meta
          name="description"
          content="Database and Tables are two most important types to work with and most of the time developers will deal with these two types..."
        ></meta>
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Table Intro - BangDB" />
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
        <meta name="twitter:title" content="Table Intro - BangDB" />
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
              <h1 className="article-title">Table Intro</h1>
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

                <p>
                  As we deal with different kinds of data within BangDB, we need
                  different methods which we use for these respective data
                  types. Therefore there are multiple types of tables that we
                  can create and use. These types are defined by enum TableType.
                </p>
                <p>Following are different kinds of tables:</p>
                <div
                  style={{
                    display: tab === 1 ? "block" : "none",
                  }}
                >
                  <HighlightedCpp code={differentTablesCppCode} />
                </div>
                <div
                  style={{
                    display: tab === 2 ? "block" : "none",
                  }}
                >
                  <HighlightedJava code={differentTablesJavaCode} />
                </div>
                <p>
                  Each of these table and their operations are explained in
                  subsequent sections.
                </p>
                <aside className="doc-note">
                  <strong>Note: </strong>In majority of scenarios, we will be
                  working with WIDE_TABLE. When in doubt, we used simply select
                  WIDE_TABLE as it provides richest set of operations. The
                  document support is enabled only by WIDE_TABLE. Also,
                  LARGE_TABLE should be used when we want to store files, or
                  large objects
                </aside>
                <p>Let&apos;s discuss now in detail. When to use what?</p>
                <h3>NORMAL_TABLE</h3>
                <p>
                  When we wish to store key value, where value could be any text
                  or opaque data (not of large size, i.e. beyond few MBs or so),
                  then we can select this table.
                </p>
                <aside className="doc-note">
                  <strong>Note: </strong>This table does not support secondary,
                  reverse etc. indexes. It can only store data with primary
                  index.
                </aside>
                <p>You may think of this table as key-val NoSQL DB</p>
                <h3>WIDE_TABLE</h3>
                <p>
                  When we wish to store all kinds of data, including document
                  data, and we also wish to create indexes then we should select
                  this table type.
                </p>
                <h3>INDEX_TABLE</h3>
                <p>
                  This is mostly used by db itself in many cases for
                  optimisation and performance, therefore if not sure, pls
                  don&apos;t use this table type. We will discuss when and how
                  to use this in advanced section.
                </p>
                <h3>
                  PRIMITIVE_TABLE_INT, PRIMITIVE_TABLE_LONG,
                  PRIMITIVE_TABLE_STRING
                </h3>
                <p>
                  All of these tables are more like single column table where
                  the value is always fixed type. int, long, double etc. The key
                  could be of int, long and string type, and hence the last part
                  of the name reflects that. These tables are super efficient
                  from size in the memory or on the disk is concerned.
                  Performance wise also it scales best. There are other
                  optimisation done to benefit from the use case scenario.
                </p>
                <h3>LARGE_TABLE</h3>
                <p>
                  This is suitable for storing large files and objects. The size
                  could run in several tens or hundreds of MBs or more. This is
                  internally used by the db for AI related files, models etc,
                  storage.
                </p>
                <aside className="doc-note">
                  <strong>Note: </strong>This table is part of BRS (BangDB
                  Resource Server, which is kind of S3 in aws. It exposes
                  similar apis and also serve similar purpose without
                  necessarily going over to cloud. Moreover, being a table
                  allows us to do other things that are done for tables.
                </aside>
              </div>
            </article>
          </div>
        </main>
      </section>
    </React.Fragment>
  );
}
