import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "../../../components/Breadcrumb";

export default function WhatsBangDB() {
  return (
    <React.Fragment>
      <Head>
        <title>BangDB vs Other Databases</title>
        <meta name="description" content="BangDB vs Other Databases"></meta>
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="BangDB vs Other Databases" />
        <meta property="og:description" content="BangDB vs Other Databases" />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="BangDB vs Other Databases" />
        <meta name="twitter:description" content="BangDB vs Other Databases" />
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
              <h1 className="article-title">BangDB vs Other Databases</h1>
              <div className="article-body">
                <h2>Feature level comparison</h2>

                <p>
                  Here is a quick comparison with other databases in the market
                  using the feature level dimensions.
                </p>

                <div className="flex items-center justify-center">
                  <Image
                    alt="Feature level comparison - BangDB"
                    width={600}
                    height={450}
                    src="/assets/about/35.png"
                  />
                </div>

                <h2>Feature level comparison</h2>
                <p>
                  The YCSB performance benchmark used to compare the databases.
                  Then other custom frameworks were also used with few other
                  databases to establish the data for varied different goals.
                </p>

                <h3>BangDB vs Mongodb, Couchbase, Redis, Yugabyte</h3>

                <div className="flex items-center justify-center mt-5">
                  <Image
                    alt="Multi Modal Database - BangDB"
                    width={700}
                    height={450}
                    src="/assets/about/36.png"
                  />
                </div>

                <h3>BangDB vs Redis - large data set</h3>

                <div className="flex items-center gap-x-8">
                  <p>
                    BangDB performs much better than Redis even though BangDB is
                    a persistence db and handles much more data than available
                    RAM
                  </p>
                  <Image
                    alt="Multi Modal Database - BangDB"
                    width={400}
                    height={450}
                    src="/assets/about/37.png"
                  />
                </div>

                <div className="flex items-center gap-x-8">
                  <p>
                    Redis test could not be completed as it was almost stalled
                    for 100 M read where data was beyond memory
                  </p>
                  <Image
                    alt="Multi Modal Database - BangDB"
                    width={400}
                    height={450}
                    src="/assets/about/38.png"
                  />
                </div>

                <h3>BangDB vs LevelDB - large data set</h3>

                <div className="flex items-center gap-x-8">
                  <p>
                    LevelDB took 3X more time in writing and 5X more time to
                    read 75M Data for Random ops
                  </p>
                  <Image
                    alt="Multi Modal Database - BangDB"
                    width={400}
                    height={450}
                    src="/assets/about/39.png"
                  />
                </div>

                <div className="flex items-center gap-x-8">
                  <p>
                    Levedb random reads performance was quite poor due to the
                    reading data from disk in chunks for segments
                  </p>
                  <Image
                    alt="Multi Modal Database - BangDB"
                    width={400}
                    height={450}
                    src="/assets/about/40.png"
                  />
                </div>

                <h3>BangDB with Hana - integrated</h3>

                <div className="flex items-center justify-center">
                  <Image
                    alt="Multi Modal Database - BangDB"
                    width={650}
                    height={450}
                    src="/assets/about/41.png"
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

export async function getServerSideProps(context) {
  return {
    props: { aboutSidebar: true },
  };
}
