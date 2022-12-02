import React from "react";
import Head from "next/head";
import Breadcrumb from "../../components/Breadcrumb";

export default function BangdbApi() {
  return (
    <React.Fragment>
      <Head>
        <title>Embedded API - BangDB</title>
        <meta
          name="description"
          content="Learn more about BangDB embedded API for all database. BangDB has mainly following types defined using which most of the activities are done."
        ></meta>
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Embedded API - BangDB" />
        <meta
          property="og:description"
          content="Learn more about BangDB embedded API for all database. BangDB has mainly following types defined using which most of the activities are done."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="Embedded API - BangDB" />
        <meta
          name="twitter:description"
          content="Learn more about BangDB embedded API for all database. BangDB has mainly following types defined using which most of the activities are done."
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
              <h1 className="article-title">Embedded API</h1>
              <div className="article-body">
                <p>
                  BangDB has mainly following types defined using which most of
                  the activities are done.
                </p>
                <p>
                  For all database related work, we will mostly use following:
                </p>
                <ul>
                  <li>BangDBDatabase</li>
                  <li>BangDBTable</li>
                </ul>
                <p>
                  For stream related activities, we will mostly use following:
                </p>
                <ul>
                  <li>BangDBStreamManager</li>
                  <li>BangDBNotificationManager</li>
                </ul>
                <p>
                  For ML & IE related activities, we will mostly use following:
                </p>
                <ul>
                  <li>BangDBMLHelper</li>
                </ul>
                <p>For DL releated activities, we will use following:</p>
                <ul>
                  <li>BangDBDLHelper</li>
                </ul>
                <p>Few helper types for database are:</p>
                <ul>
                  <li>DBParam</li>
                  <li>TableEnv</li>
                  <li>DataQuery</li>
                </ul>
              </div>
            </article>
          </div>
        </main>
      </section>
    </React.Fragment>
  );
}
