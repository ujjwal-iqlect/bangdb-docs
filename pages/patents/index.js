import React from "react";
import Head from "next/head";
import Breadcrumb from "../../components/Breadcrumb";

export default function Patents() {
  return (
    <React.Fragment>
      <Head>
        <title>Patents - BangDB</title>
        <meta
          name="description"
          content="BangDB patent list - Here you will find the list of all the patents owned by BangDB or it's parent company."
        ></meta>
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Patents - BangDB" />
        <meta
          property="og:description"
          content="BangDB patent list - Here you will find the list of all the patents owned by BangDB or it's parent company."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="Patents - BangDB" />
        <meta
          name="twitter:description"
          content="BangDB patent list - Here you will find the list of all the patents owned by BangDB or it's parent company."
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
              <h1 className="article-title">Patents</h1>
              <div className="article-body">
                <ul>
                  <li>
                    Method and system for providing concurrent buffer pool and
                    page cache - US 14/829,496
                  </li>
                  <li>
                    Method and system for scalable complex event processing of
                    event streams - US 15/785,225
                  </li>
                  <li>
                    Method and system for adaptive pre-fetching of pages into a
                    buffer pool - US 14/829,504
                  </li>
                  <li>
                    Method and system for deploying solid state drive as
                    extension of random access memory - US 16/168,673
                  </li>
                  <li>
                    Method and system for providing data analytic solutions to
                    third party vendors - US 16/437,789
                  </li>
                  <li>
                    Method and System for Adaptive Asynchronous Pre-Fetching of
                    Pages into a Buffer Pool - 201642028558
                  </li>
                  <li>
                    Method and System for Adaptive Synchronous Pre-Fetching of
                    Pages into a Buffer Pool - 201642028559
                  </li>
                  <li>
                    Method and System for Providing Faster Crash Recovery in
                    Data Base Management Systems Technical&amp;nbsp;Field -
                    201642028053
                  </li>
                  <li>
                    System and Method for Buffer Pool and Page Cache -
                    4053/CHE/2014
                  </li>
                  <li>
                    System and Method for High Performance Write-Ahead Logging -
                    4052/CHE/2014
                  </li>
                  <li>
                    System and Method for High Performance Asynchronous Server
                    and Framework - 4054/CHE/2014
                  </li>
                  <li>
                    Method and System for Performing Polling for New User
                    Connections - 201642028560
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </main>
      </section>
    </React.Fragment>
  );
}
