import React, { useState } from "react";
import Head from "next/head";
import Breadcrumb from "../../components/Breadcrumb";
import HighlightedCpp from "../../components/HighlightedCpp";

export default function DBParamEmbedded() {
  return (
    <React.Fragment>
      <Head>
        <title>DBParam (Embedded) - BangDB</title>
        <meta
          name="description"
          content="Learn more about BangDB DBParam (Embedded). Read the documentation to learn to make embedded applications using BangDB."
        ></meta>
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="DBParam (Embedded) - BangDB" />
        <meta
          property="og:description"
          content="Learn more about BangDB DBParam (Embedded). Read the documentation to learn to make embedded applications using BangDB."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="DBParam (Embedded) - BangDB" />
        <meta
          name="twitter:description"
          content="Learn more about BangDB DBParam (Embedded). Read the documentation to learn to make embedded applications using BangDB."
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
              <Breadcrumb text="Embedded API" url="/bangdb-api" />
              <h1 className="article-title">DBParam (Embedded)</h1>
              <div className="article-body">
                <p>
                  DBParam (Embedded) is used to set the several parameters to
                  get the BangDB Environment. Some of the parameters are host
                  ip, port, ssl/non-ssl, transaction type etc. Client connecting
                  with each different databases will have separate DBParams.
                </p>

                <p>
                  DBParam is used to set the db environment. It is described as
                  below:
                </p>
                <ul>
                  <li>
                    DB related data, right now we send following to db
                    TransactionType _tranType
                  </li>
                  <li>
                    If db should be opened in transactional or non-transactional
                    mode.
                  </li>
                  <li>
                    Please note, db could be stopped and started in different
                    way as needed.
                  </li>
                  <li>
                    As far as transaction mode is concerned const char
                    *_configPath;
                  </li>
                  <li>
                    Path to bangdb.config file, optional - default is local
                    current dir const char *_dbPath;
                  </li>
                  <li>
                    Path where db files will be kept, optional - default is data
                    dir in current dir const char *_dbLogPath;
                  </li>
                  <li>
                    Path where log files will be kept, optional - default is
                    logdir dir in current dir const char *_dbArchivePath;
                  </li>
                  <li>
                    Path where archive files will be kept, optional - default is
                    archive dir in current dir const char *_host;
                  </li>
                  <li>
                    IP address or name of the host server const char *_port;
                  </li>
                  <li>Port of the server</li>
                </ul>
              </div>
            </article>
          </div>
        </main>
      </section>
    </React.Fragment>
  );
}
