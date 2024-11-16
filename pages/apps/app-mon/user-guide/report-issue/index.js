import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../../../components/Breadcrumb";

export default function ConvertNotificationsToTickets() {
  return (
    <React.Fragment>
      <Head>
        <title>Report issue &amp; open ticket for BangDB</title>
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
              <h1 className="article-title">
                Report issue &amp; open ticket for BangDB
              </h1>
              <div className="article-body">
                <p>
                  In the header navbar you can see the
                  <strong> (?) </strong>
                  symbol click on that
                </p>

                <img
                  alt="Click on crm settings - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/app-mon/need-help.jpg"
                />

                <p>
                  It will open the help popup - select the issue type, title
                  &amp; description of the issue and add attachments if you
                  have. You can add them after filling in all the details you
                  need to click on the submit button then the ticket is get
                  created. The BangDB team will see the issue and they will
                  reach out through email.
                </p>

                <img
                  alt="Create a ticket - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/app-mon/create-a-ticket.jpg"
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
