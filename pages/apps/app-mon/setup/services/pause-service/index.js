import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../../../../components/Breadcrumb";

export default function ConvertNotificationsToTickets() {
  return (
    <React.Fragment>
      <Head>
        <title>Pause service</title>
        <meta
          name="description"
          content="Motivation - Why BangDB?. The motivation behind BangDB."
        ></meta>
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Pause service in AppMon" />
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
        <meta name="twitter:title" content="Pause service in AppMon" />
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
              <h1 className="article-title">Pause service</h1>
              <div className="article-body">
                <p>
                  In order to pause a service, Navigate to the
                  <strong> &quot;Services&quot; </strong> page.
                </p>

                <img
                  alt="Click on crm settings - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/app-mon/go-to-services-page.jpg"
                />

                <p>
                  Click on the Manually pause the service from the service
                  listing page [ you need to click which service you need to
                  pause ]
                </p>

                <img
                  alt="Click on pause service - AppMon BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/app-mon/click-on-pause-service.jpg"
                />

                <p>
                  Clicking on the Pause button it will ask for some fields to be
                  added [Agent IP , Agent Port, And Collector Name] after
                  filling all the details click on the pause button
                </p>

                <aside className="doc-note">
                  <strong>NOTE: </strong>
                  If your service is accessible on the internet. Enter your
                  agent IP and PORT and click on pause.
                </aside>

                <img
                  alt="Click on manage company - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/app-mon/pause-service-modal.jpg"
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
