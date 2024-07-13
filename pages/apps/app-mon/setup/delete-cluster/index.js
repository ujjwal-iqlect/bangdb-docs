import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "../../../../../components/Breadcrumb";

export default function DeleteHost() {
  return (
    <React.Fragment>
      <Head>
        <title>Delete Host</title>
        <meta
          name="description"
          content="Motivation - Why BangDB?. The motivation behind BangDB."
        ></meta>
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Motivation - Why BangDB?" />
        <meta
          property="og:description"
          content="Motivation - Why BangDB?. The motivation behind BangDB."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="Motivation - Why BangDB?" />
        <meta
          name="twitter:description"
          content="Motivation - Why BangDB?. The motivation behind BangDB."
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
              <h1 className="article-title">Delete cluster</h1>
              <div className="article-body">
                <p>
                  In order to delete a cluster, Navigate to the
                  <strong> &quot;Clusters&quot; </strong> page.
                </p>

                <img
                  alt="Click on crm settings - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/app-mon/go-to-clusters-page.jpg"
                />

                <p>
                  Click on <strong>&quot;Delete Cluster&quot;</strong> icon for the
                  cluster you want to delete.
                </p>

                <img
                  alt="Click on manage company - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/app-mon/click-on-delete-cluster.jpg"
                />

                <p>
                  It will open a confirmation modal, click on{" "}
                  <strong>&quot;Yes&quot;</strong>.
                </p>

                <img
                  alt="Click on manage company - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/app-mon/cluster-delete-confirmation.jpg"
                />

                <p>The cluster will get deleted.</p>
              </div>
            </article>
          </div>
        </main>
      </section>
    </React.Fragment>
  );
}

export async function getServerSideProps(context) {
  return {
    props: { app_mon_sidebar: true },
  };
}
