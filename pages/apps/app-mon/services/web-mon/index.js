import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../../../components/Breadcrumb";

export default function WebsiteMonitoring() {
  return (
    <React.Fragment>
      <Head>
        <title>Website Monitoring</title>
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
              <h1 className="article-title">Website monitoring</h1>
              <div className="article-body">
                <p>
                  In order to see website data, Navigate to the
                  <strong> &quot;Services&quot; </strong> page.
                </p>

                <img
                  alt="Click on crm settings - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/app-mon/go-to-services-page.jpg"
                />

                <p>
                  Find the website monitoring service and Click on{" "}
                  <strong>&quot;Open Service&quot;</strong> icon for the service
                  you want to see the data for.
                </p>

                <img
                  alt="Click on manage company - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/app-mon/go-to-web-mon.jpg"
                />

                <p>
                  It will take you to the website monitoring page. From there,
                  you can see all the website related information &amp; data.
                </p>

                <h2>Load time, Throughput, Latency, Blocking time etc. charts</h2>

                <img
                  alt="Click on manage company - BangDB"
                  width={"95%"}
                  height={"auto"}
                  className="mt-5 shadow"
                  src="/assets/apps/app-mon/web-mon.png"
                />

                <img
                  alt="Click on manage company - BangDB"
                  width={"95%"}
                  height={"auto"}
                  className="mt-5 shadow"
                  src="/assets/apps/app-mon/web-mon2.png"
                />

                <h2>Metrics</h2>

                <img
                  alt="Click on manage company - BangDB"
                  width={"95%"}
                  className="mt-5 shadow"
                  height={"auto"}
                  src="/assets/apps/app-mon/web-mon3.png"
                />

                <h2>Audits</h2>

                <img
                  alt="Click on manage company - BangDB"
                  width={"95%"}
                  className="mt-5 shadow"
                  height={"auto"}
                  src="/assets/apps/app-mon/web-mon4.png"
                />
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
