import React from "react";
import Head from "next/head";
import DocArticle from "../../components/DocArticle";

export default function Benchmark() {
  return (
    <React.Fragment>
      <Head>
        <title>BangDB Benchmark</title>
        <meta
          name="description"
          content="Goal of BangDB benchmark is to find out the throughput of db where we put data and the get them using multiple connections."
        ></meta>
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="BangDB Benchmark" />
        <meta
          property="og:description"
          content="Goal of BangDB benchmark is to find out the throughput of db where we put data and the get them using multiple connections."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="BangDB Benchmark" />
        <meta
          name="twitter:description"
          content="Goal of BangDB benchmark is to find out the throughput of db where we put data and the get them using multiple connections."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <h1 className="article-title">Benchmark</h1>
        <div className="article-body">
          <h2>BangDB Benchmark (simple)</h2>
          <h3>Throughput / IOPS for put and get for 1B records</h3>
          <p>
            BangDB is a high-performance converged NoSQL data platform designed
            to handle fast moving data. It's especially suitable for EdgeAI,
            which requires lot more than just a NoSQL store. For ex, ability to
            ingest data efficiently, then to process and analyze for finding
            interesting patterns or for prediction and finally store in a manner
            which allows powerful queries to be run in optimal manner for
            dashboard or reports are some of the key features as required by
            next generations apps.
          </p>
          <p>
            BangDB can be simply defined as NoSQL + Streaming + AI to highlight
            the convergence of different elements to solve the problem in simple
            yet powerful manner.
          </p>
          <p>
            Although, BangDB is more than traditional NoSQLs as it tends to do
            lot more, however it is also important to have the high performance
            as needed by the use cases.
          </p>
          <p>
            Goal of this benchmark is to find out the throughput of db where we
            put data and the get them using multiple connections with all
            features of the db remain ON. The benchmark is run for BangDB
            server, however, similarly we can run for embedded as well and the
            data would be comparable.
          </p>
          <p>
            Therefore, this section tends to summarise the benchmark of BangDB
            in different scenarios. The benchmark has been divided into
            following two sections:
          </p>
          <ol>
            <li>Custom benchmark - performance numbers for BangDB</li>
            <li>
              YCSB benchmark - compare BangDB performance with few other NoSQLs
            </li>
          </ol>
        </div>
      </DocArticle>
    </React.Fragment>
  );
}
