import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";

export default function ApiIntroduction() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Introduction - BangDB REST API</title>
        <meta
          name="description"
          content="Introduction to BangDB REST API - While CLI and Client libraries use TCP based communication model, Dashboard uses REST API completely."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Introduction - BangDB REST API" />
        <meta
          property="og:description"
          content="Introduction to BangDB REST API - While CLI and Client libraries use TCP based communication model, Dashboard uses REST API completely."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="Introduction - BangDB REST API" />
        <meta
          name="twitter:description"
          content="Introduction to BangDB REST API - While CLI and Client libraries use TCP based communication model, Dashboard uses REST API completely."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">Introduction</h1>
        <div className="article-body">
          <p>
            BangDB supports different ways to connect to the database for the
            operations in all different areas. Some of the supported methods are
            following:
          </p>

          <ol>
            <li>CLI (Command Line Interface)</li>
            <li>REST API</li>
            <li>Dashboard</li>
            <li>Client libraries [ C, C++, Java ]</li>
          </ol>

          <p>
            While CLI and Client libraries use TCP based communication model,
            Dashboard uses REST API completely. Important point to note is that
            in order to support TCP and HTTP(S), we don&apos;t need to run two
            instances of BangDB (one in TCP and another in HTTP mode), but
            single instance can act as both TCP and HTTP server, at the same
            time. This makes the BangDB instance lot more flexible and powerful
            from the connectivity point of view.
          </p>
          <p>
            Running the instance of BangDB in two modes is possible because
            BangDB implements the HTTP layer as well. BangDB is a HTTP server
            too (apart from being a TCP server). All the high performance server
            management design and structure is extended to HTTP layer as well.
            The details on this subject is not the core part of this document,
            but the aim is to introduce various REST APIs that are needed for
            basic set of operations in BangDB.
          </p>
        </div>
      </DocArticle>
    </React.Fragment>
  );
}

export async function getServerSideProps(context) {
  return {
    props: { apiSidebar: true },
  };
}
