import React, { useState } from "react";
import Head from "next/head";
import Breadcrumb from "../../components/Breadcrumb";

export default function ApiServer() {
  return (
    <React.Fragment>
      <Head>
        <title>Basic Types - BangDB</title>
        <meta
          name="description"
          content="Learn more about BangDB Basic Types. Read the documentation to learn more about Server APIs."
        ></meta>
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Basic Types - BangDB" />
        <meta
          property="og:description"
          content="Learn more about BangDB Basic Types. Read the documentation to learn more about Server APIs."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="Basic Types - BangDB" />
        <meta
          name="twitter:description"
          content="Learn more about BangDB Basic Types. Read the documentation to learn more about Server APIs."
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
              <Breadcrumb text="Server API" url="/api-server" />
              <h1 className="article-title">Basic Types</h1>
              <div className="article-body">
                <p>
                  BangDB has mainly following types defined using which most of
                  the activities are done.
                </p>
                <p>
                  For all database related work, we will mostly use following.
                  Client libraries (C++, Java, etc.) or CLI exposes these APIs
                  for user to build or interact with the server in efficient
                  way. User is free to implement their own client or program as
                  needed. Very soon we will also add REST API for the Server
                  functions.
                </p>
                <p>
                  For all database related work, we will mostly use following:
                </p>
                <ul>
                  <li>BangDBEnv</li>
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
                <p>For DL related activities, we will mostly use following:</p>
                <ul>
                  <li>BangDBDLHelper</li>
                </ul>
                <p>Few helper types for database are:</p>
                <ul>
                  <li>DBParam</li>
                  <li>TableEnv</li>
                  <li>DataQuery</li>
                </ul>
                <p>Let&apos;s go into details of each of these types.</p>
              </div>
            </article>
            :
          </div>
        </main>
      </section>
    </React.Fragment>
  );
}
