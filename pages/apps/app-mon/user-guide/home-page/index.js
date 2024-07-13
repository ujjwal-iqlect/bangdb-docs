import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../../../components/Breadcrumb";

export default function SnmpMonitoring() {
  return (
    <React.Fragment>
      <Head>
        <title>AppMon Home</title>
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
              <h1 className="article-title">AppMon Home</h1>
              <div className="article-body">
                <img
                  alt="Click on crm settings - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/app-mon/home-page.jpg"
                />

                <p>Home page has following sections:</p>

                <ol>
                  <li>Host status summary</li>
                  <li>Service status summary</li>
                  <li>Cluster status summary</li>
                  <li>Notifications &amp; Tickets</li>
                  <li>Overview</li>
                </ol>

                <h2>Home status summary</h2>
                <p>
                  This sections shows overview of hosts, it&apos;s stats &amp;
                  counts based on status etc.
                </p>

                <h2>Service status summary</h2>

                <p>
                  This sections shows overview of services, it&apos;s stats
                  &amp; counts based on status etc.
                </p>

                <h2>Cluster status summary</h2>

                <p>
                  This sections shows list of clusters, and their hosts &amp;
                  services &amp; stats.
                </p>

                <h2>Notifications &amp; Tickets </h2>

                <p>
                  In this section, all the top &amp; latest notifications will
                  show up. Integrated ticketing system is also there. You can
                  see all the tickets in the system or the tickets which are
                  specifically assigned to you.
                </p>

                <h2>Overview</h2>

                <img
                  alt="Click on manage company - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/app-mon/home-page2.jpg"
                />

                <p>
                  This section will show you all the clusters. If you click a
                  cluster, it will expand and show all the hosts &amp; services
                  inside it.
                </p>

                <img
                  alt="Click on manage company - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/app-mon/cluster-expanded.jpg"
                />

                <p>
                  If you click any of the graph node, you can see the details
                  about it.
                </p>

                <img
                  alt="Click on manage company - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/app-mon/node-info.png"
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
