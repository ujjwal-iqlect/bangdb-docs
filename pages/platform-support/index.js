import React from "react";
import Head from "next/head";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export default function PlatformSupport() {
  return (
    <React.Fragment>
      <Head>
        <title>Supported Platforms - BangDB</title>
        <meta
          name="description"
          content="BangDB 2.0 core supported platforms are Windows (7+), MAC (10+) & Linux. However, BangDB Server and distributed can run only on linux"
        ></meta>
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Supported Platforms - BangDB" />
        <meta
          property="og:description"
          content="BangDB 2.0 core supported platforms are Windows (7+), MAC (10+) & Linux. However, BangDB Server and distributed can run only on linux"
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="Supported Platforms - BangDB" />
        <meta
          name="twitter:description"
          content="BangDB 2.0 core supported platforms are Windows (7+), MAC (10+) & Linux. However, BangDB Server and distributed can run only on linux"
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
              <h1 className="article-title">Platform support</h1>
              <div className="article-body">
                <h2>BangDB 2.0 - Supported Platforms</h2>
                <p>BangDB 2.0 core works on following platforms:</p>
                <ul>
                  <li>Linux [ Ubuntu, CentOS, RHEL etc…]</li>
                  <li>Windows [ 7 onwards ]</li>
                  <li>Mac [ 10+ ]</li>
                </ul>
                <p>
                  However, BangDB Server and distributed can run only on linux,
                  as stated above, but the apps or clients can access from
                  Windows and Linux. For embedded (device) it can work on
                  Raspberry Pi or ARM based processor
                </p>
              </div>
            </article>
          </div>
        </main>
      </section>
    </React.Fragment>
  );
}
