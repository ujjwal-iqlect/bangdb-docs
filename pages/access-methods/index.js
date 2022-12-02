import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "../../components/Breadcrumb";

export default function AccessMethods() {
  return (
    <React.Fragment>
      <Head>
        <title>Access Methods - BangDB</title>
        <meta
          name="description"
          content="BangDB implements two types of data structure methodology to implement indexes for keys, and they are BtreeExt & Hash."
        ></meta>
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Access Methods - BangDB" />
        <meta
          property="og:description"
          content="BangDB implements two types of data structure methodology to implement indexes for keys, and they are BtreeExt & Hash."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="Access Methods - BangDB" />
        <meta
          name="twitter:description"
          content="BangDB implements two types of data structure methodology to implement indexes for keys, and they are BtreeExt & Hash."
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
              <h1 className="article-title">Access Methods</h1>
              <div className="article-body">
                <p>
                  BangDB implements two types of data structure methodology to
                  implement indexes for keys in order to retrieve the data
                  quickly, and they are:
                </p>
                <ul>
                  <li>Btree</li>
                  <li>Ext Hash</li>
                </ul>
                <p>
                  All these types are available as configurable parameters and
                  user can select as appropriate for the table. Note that once a
                  particular method has been selected for a table then for its
                  entire life index method can&apos;t be changed.
                </p>
                <h2>Btree (B+Link*Tree) data structure methodology</h2>
                <p>
                  BangDB actually implements varient of Btree, namely
                  B-link-Tree tree based mostly on Lehman and Yao&apos;s
                  “Efficient Locking for Concurrent Operations on BTrees”.The
                  BangDB&apos;s implementation has worked on the concept defined
                  in the paper and has taken it further to enhance the
                  performance by increasing the concurrency significantly.
                  BangDB also does selective caching of few highly accessed
                  pages and related information to improve the performance.
                </p>
                <p>The main highlight of Btree for BangDB are:</p>
                <ul>
                  <li>
                    Minimal locking for various operations, compared to other
                    dbs which typically tends to lock major or full portion of
                    tree
                  </li>
                  <li>Search and get does no locking</li>
                  <li>
                    Insert or put locks two - three pages, which is less than
                    0.004% of the overall pages in the db (if taking 50,000
                    pages for 5-7 million keys)
                  </li>
                  <li>
                    Multiple threads can work on the same Btree data structure
                    concurrently to get or put keys, which allows the db to
                    leverage multi cores machine very efficiently
                  </li>
                  <li>It&apos;s a deadlock proof design and implementation</li>
                </ul>
                <figure
                  style={{
                    width: "50%",
                    margin: "0 auto",
                  }}
                >
                  <Image
                    alt="Btree (B+Link*Tree) data structure methodology - BangDB"
                    width={493}
                    height={470}
                    src="https://bangdb.com/wp-content/uploads/2020/03/blink_tree.gif"
                  />
                </figure>
                <h3>When to use Btree?</h3>
                <p>
                  Btree should be used for storing data when order is important.
                  For example, to be able to retrieve data using range scan or
                  query, it's very important that keys are sorted and stored in
                  the order such that the range based selection can be done.
                </p>
                <h2>Hash (ExtHash*) data structure methodology</h2>
                <p>
                  BangDB implements the variation of hash, namely extending
                  hashing based mostly on Hsu and Yang&apos;s “Concurrent
                  Operations in Extendible Hashing”. The BangDB&apos;s
                  implementation has worked on the concept defined in the paper
                  and has taken it further to enhance the performance by
                  increasing the concurrency. BangDB also does selective caching
                  of few highly accessed pages and related information to
                  improve the performance.
                </p>
                <p>The main highlight of ExtHash for BangDB are:</p>
                <ul>
                  <li>
                    Algorithm defines the ways for concurrent operations on hash
                    files.
                  </li>
                  <li>
                    Search and selection of a particular page is based on
                    verification rather than locking pages.
                  </li>
                  <li>
                    Insert or put locks two pages most of the time which is
                    again less than 0.004% of the overal pages in the db (if
                    taking 50,000 pages for ~7 million keys).
                  </li>
                  <li>
                    Multiple threads can work on the same Hash data structure
                    concurrently to get or put keys, which allows the db to
                    leverage multi cores machine very efficiently.
                  </li>
                  <li>It's a deadlock proof design and implementation.</li>
                </ul>
                <figure
                  style={{
                    width: "50%",
                    margin: "0 auto",
                  }}
                >
                  <Image
                    alt="Hash (ExtHash*) data structure methodology - BangDB"
                    width={439}
                    height={425}
                    src="https://bangdb.com/wp-content/uploads/2020/03/ext_hash.gif"
                  />
                </figure>
                <h3>When to use Hash?</h3>
                <p>
                  Hash should be used for storing data when order of the keys
                  are not important. Note that the scan API can be used for hash
                  based table as well but the range based scan is not possible.
                  This means that user can use scan to select all the keys and
                  values from the db and iterate over them but they can&apos;t
                  provide any range for scan as it would be meaningless since
                  hash doesn&apos;t maintain any order.
                </p>
              </div>
            </article>
          </div>
        </main>
      </section>
    </React.Fragment>
  );
}
