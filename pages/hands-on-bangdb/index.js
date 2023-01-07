import React from "react";
import Head from "next/head";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import Codebox from "../../components/Codebox";

export default function HandsOnBangdb() {
  return (
    <React.Fragment>
      <Head>
        <title>Tryout Different Operations - BangDB</title>
        <meta name="description" content=""></meta>
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Tryout Different Operations - BangDB"
        />
        <meta property="og:description" content="" />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="Tryout Different Operations - BangDB"
        />
        <meta name="twitter:description" content="" />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <section className="main-container">
        <main className="container">
          <div className="article-content">
            <article className="article">
              <Breadcrumb text="Example for Tryouts" url="/hands-on-bangdb" />
              <h1 className="article-title">Hands on BangDB</h1>
              <div className="article-body">
                <p>Tryout different operations and play with the DB</p>
                <h2>Download and Install BangDB</h2>
                <p>
                  You may download BangDB in many different ways. Here are four
                  ways in which BangDB binaries could be downloaded:
                </p>
                <ol>
                  <li>
                    Download the tar file from the{" "}
                    <Link href={"https://bangdb.com/download/"}>
                      download page
                    </Link>
                  </li>
                  <li>
                    Clone the github binary{" "}
                    <Link
                      className="external"
                      target={`_blank`}
                      href={"https://github.com/sachin-sinha/BangDB"}
                    >
                      repository
                    </Link>
                    .
                  </li>
                  <li>
                    Simply use wget
                    <Codebox
                      code={`wget https://bangdb.com/downloads/bangdb_2.0_ubuntu18.tar.gz`}
                    />
                  </li>
                  <li>
                    Use Docker image from{" "}
                    <Link
                      target={`_blank`}
                      className="external"
                      href={"https://hub.docker.com/r/bangdb/bangdb"}
                    >
                      here.
                    </Link>
                  </li>
                </ol>
                <p>
                  Check out the instructions at{" "}
                  <Link href={"/server-install"}>server install</Link> for
                  detail info.
                </p>
                <h2>Tryout & play with the DB</h2>
                <p>Download the PDF document and follow the instruction</p>
                <Codebox
                  code={`wget https://bangdb.com/downloads/BangDB_using_CLI.pdf`}
                />
                <p>
                  The doc covers many different use cases from DB to Stream to
                  ML etc. You may get fairly good idea about the coverage.
                  However, to dig deeper, you may need to leverage other
                  features as well.
                </p>
                <h2>ML Use cases</h2>
                <p>
                  Few real world use cases are taken from Kaggle that can be
                  easily solved on BangDB using CLI is attached as well. Go to{" "}
                  <Link href={"/bangdb-ml-examples"}>ML Usecase section</Link>{" "}
                  to check it out.
                </p>
                <h2>YCSB Benchmark</h2>
                <p>
                  YCSB benchmark can be run and you may compare BangDB with
                  other databases as well. Please see{" "}
                  <Link href={"/ycsb"}>BangDB YCSB benchmark</Link> for more
                  information. Please also use and refer{" "}
                  <Link href={"https://bangdb.com/developer"}>
                    https://bangdb.com/developer/
                  </Link>{" "}
                  if you need more information on any front.
                </p>
              </div>
            </article>
          </div>
        </main>
      </section>
    </React.Fragment>
  );
}
