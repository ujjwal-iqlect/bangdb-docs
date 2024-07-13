import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../../../components/Breadcrumb";

export default function Motivation() {
  return (
    <React.Fragment>
      <Head>
        <title>Edit Service</title>
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
              <h1 className="article-title">Log monitoring</h1>
              <div className="article-body">
                <aside className="doc-note">
                  <strong>NOTE: </strong>
                  This applies to both linux and generic log services.
                </aside>
                <p>
                  In order to see log data, Navigate to the
                  <strong> &quot;Services&quot; </strong> page.
                </p>

                <img
                  alt="Click on crm settings - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/app-mon/go-to-services-page.jpg"
                />

                <p>
                  Find the log service and Click on{" "}
                  <strong>&quot;Open Service&quot;</strong> icon for the service
                  you want to see the data for.
                </p>

                <img
                  alt="Click on manage company - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/app-mon/go-to-log-mon.jpg"
                />

                <p>
                  It will take you to the logs page, where you will see all the
                  logs inside the selected service.
                </p>

                <h2>Tail</h2>

                <h3>Tail -f</h3>

                <p>
                  By default it is set to 10. This is particularly useful for
                  monitoring log files where you want to see the most recent
                  entries (if you set it to 100, then initially it fetch last
                  100 entries) and continue to watch for new entries as they
                  happen.
                </p>

                <h3>Tail log</h3>

                <p>In order to tail a log, click on &quot;Tail&quot;.</p>

                <img
                  alt="Click on manage company - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/app-mon/click-on-tail.jpg"
                />

                <p>Log tailing in full screen :</p>

                <img
                  alt="Click on manage company - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/app-mon/tail-full-screen.jpg"
                />

                <p>
                  You can search for specific query in the logs using the search
                  bar.
                </p>

                <h3>Tail Frequency</h3>

                <p>
                  Tail Frequency refers to how often you fetch the logs. By
                  default, it is set to 3 seconds, with a minimum value of 1
                  second.
                </p>
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
