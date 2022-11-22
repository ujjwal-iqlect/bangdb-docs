import React from "react";
import Head from "next/head";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export default function BangdbIntroduction() {
  return (
    <React.Fragment>
      <Head>
        <title>Introduction to BangDB</title>
        <meta
          name="description"
          content="Introduction to BangDB Manual 2.0 . BangDB 2.0 is more than just a NoSQL database, it's a predictive real-time NoSql data analytics platform"
        ></meta>
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Introduction to BangDB" />
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
        <meta name="twitter:title" content="Introduction to BangDB" />
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
              <h1 className="article-title">Introduction to BangDB 2.0</h1>
              <div className="article-body">
                <p>
                  BangDB 2.0 is more than just a NoSql database, it's a
                  predictive real-time NoSQL data analytics platform. It's
                  designed to align with the future and enable the developers /
                  users to build use cases, solutions with ease and in simple
                  manner.
                </p>
                <h2>The goals of the manual</h2>
                <ul>
                  <li>
                    Introduction to BangDB as a converged NoSql database and
                    platform
                  </li>
                  <li>
                    Explain the concept behind the design and implementation
                  </li>
                  <li>
                    Showcase sample application code using BangDB for various
                    use cases
                  </li>
                  <li>
                    Describe the API, query method and other operations using
                    BangDB
                  </li>
                  <li>
                    Explain the various configuration parameters and tuning
                    methods for best results
                  </li>
                  <li>Discuss the administrative aspect of the database</li>
                  <li>
                    Be the thorough reference guide for development using BangDB
                    BangDB offers both community and enterprise versions.
                  </li>
                </ul>
                <p>
                  The community version is free to download and use as per BSD 3
                  license. The basic difference between community and enterprise
                  is level of support, dashboard, data connectors, few modules
                  for ex: Deep Learning package etc. Please check out the
                  detailed info in the <Link href={"/license"}>license</Link>{" "}
                  section
                </p>
                <h3>Some of the useful pointer to get started</h3>
                <ul>
                  <li>
                    <Link href={"/server-getting-started"}>
                      Getting Started with BangDB
                    </Link>
                  </li>
                  <li>
                    <Link href={"/api-server"}>BangDB API</Link>
                  </li>
                  <li>
                    <Link href={"/bangdb-api"}>BangDB API Usage</Link>
                  </li>
                  <li>
                    <Link href={"/bangdb-config"}>BangDB Configuration</Link>
                  </li>
                </ul>
                <h3>Important Resources</h3>
                <ul>
                  <li>
                    <Link
                      target={"_blank"}
                      className="external"
                      href={"https://github.com/sachin-sinha/BangDB"}
                    >
                      Github Repository
                    </Link>
                  </li>
                  <li>
                    <Link
                      target={"_blank"}
                      className="external"
                      href={"https://bangdb.com/blog"}
                    >
                      Blogs
                    </Link>
                  </li>
                  <li>
                    <Link
                      target={"_blank"}
                      className="external"
                      href={"/sample-client-application"}
                    >
                      Sample Application
                    </Link>
                  </li>
                  <li>
                    <Link
                      target={"_blank"}
                      className="external"
                      href={"https://bangdb.com/resources"}
                    >
                      "How To" Videos
                    </Link>
                  </li>
                  <li>
                    <Link
                      target={"_blank"}
                      className="external"
                      href={"https://twitter.com/iqlect"}
                    >
                      Twitter
                    </Link>
                  </li>
                </ul>
                <p>
                  For anything as needed, please fill the contact form{" "}
                  <Link
                    target={"_blank"}
                    className="external"
                    href={"https://bangdb.com/contact-us"}
                  >
                    here
                  </Link>{" "}
                  or feel free to directly send us mail on -{" "}
                  <Link href={"mailto:info@iqlect.com"}>info@iqlect.com</Link>{" "}
                  or{" "}
                  <Link href={"mailto:sachin@bangdb.com"}>
                    sachin@bangdb.com
                  </Link>
                </p>
              </div>
            </article>
          </div>
        </main>
      </section>
    </React.Fragment>
  );
}
