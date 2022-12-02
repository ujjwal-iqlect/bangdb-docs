import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "../../components/Breadcrumb";

export default function DevelopingWithBangdbEmbedded() {
  return (
    <React.Fragment>
      <Head>
        <title>Development with BangDB</title>
        <meta
          name="description"
          content="Introduction to BangDB Manual 2.0 . BangDB 2.0 is more than just a NoSQL database, it's a predictive real-time NoSql data analytics platform"
        ></meta>
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Development with BangDB" />
        <meta
          property="og:description"
          content="Introduction to BangDB Manual 2.0 . BangDB 2.0 is more than just a NoSQL database, it's a predictive real-time NoSql data analytics platform"
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="Development with BangDB" />
        <meta
          name="twitter:description"
          content="Introduction to BangDB Manual 2.0 . BangDB 2.0 is more than just a NoSQL database, it's a predictive real-time NoSql data analytics platform"
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
              <h1 className="article-title">Development with BangDB</h1>
              <div className="article-body">
                <h2>Embedded</h2>
                <p>
                  To get started with BangDB, we need to create database and
                  tables at the minimum. Basic operations, while developing with
                  BangDB are around tables since we do all data modification,
                  retrieval using table only. Therefore database and tables are
                  two most important types to work with and most of the time
                  developers will deal with these two types.
                </p>
                <aside className="doc-note">
                  <strong>Note: </strong>The client code or the user code is to
                  large extent (~95% of code) is same across all different
                  modes/flavours of BangDB.
                  <p>
                    For example: if we write our app in C++ for embedded, then
                    we can run the same code for server or for distributed
                    BangDB with less than 5% of code changes. The changes are
                    only limited to the way we get database instance and close
                    the instance. Everything else, more or less remains constant
                    across different BangDB flavours.
                  </p>
                </aside>
                <p>
                  This is very convenient and simplifies the development
                  process. Since it&apos;s very easy to develop, test, debug
                  with embedded BangDB, it is always faster and easier to do so
                  at the development level. Once it&apos;s build and tested, we
                  can simply take the code and run it for server or distributed
                  BangDB.
                </p>
                <p>
                  Another important thing would be to get familiar with
                  following enums and types as they are used most of the places:
                </p>
                <h2>Types</h2>
                <ul>
                  <li>BangDBDatabase</li>
                  <li>BangDBTable</li>
                  <li>BangDBMLHelper</li>
                  <li>BangDBStreamManager</li>
                  <li>BangDBNotificationManager</li>
                  <li>DBParam</li>
                  <li>Table</li>
                  <li>Env</li>
                  <li>ScanFilter</li>
                  <li>DataQuery</li>
                </ul>
                <h2>Enums</h2>
                <ul>
                  <li>OpenType</li>
                  <li>CloseType</li>
                  <li>TableType</li>
                  <li>KeyType</li>
                  <li>ScanOperator</li>
                  <li>JoinOperator</li>
                </ul>
                <p>
                  Please see the{" "}
                  <Link href={"/helper-types-embedded/"}>
                    useful types & enums
                  </Link>{" "}
                  for more info on this.
                </p>
                <p>
                  Then BangDB Stream Manager is another type which abstracts all
                  details and provide simple way to work with streaming data for
                  time-series analysis. User will be working with this when it
                  comes to the streaming use cases. There is no table concept
                  here but with very few APIs, most of the task could be
                  achieved in simple manner.
                </p>
                <p>
                  To work with ML and IE, user may use BangDBMLHelper. This
                  again hides all complexity and provides very few simple API to
                  do all the job.
                </p>
                <p>
                  To deal with deep learning, BangDB has BangDB DL Helper. Here
                  as well it provides simple APIs to deal with to do complex
                  stuff in the area of deep learning. BangDB Notification
                  Manager can be used as well, explicitly or implicitly. When we
                  deal with streaming and notifications for interesting
                  patterns, we use notification manager implicitly (through
                  stream manager).
                </p>
              </div>
            </article>
          </div>
        </main>
      </section>
    </React.Fragment>
  );
}
