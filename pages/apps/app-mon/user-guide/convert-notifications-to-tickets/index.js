import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../../../components/Breadcrumb";

export default function ConvertNotificationsToTickets() {
  return (
    <React.Fragment>
      <Head>
        <title>Convert notifications to tickets</title>
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
                Convert notifications to tickets
              </h1>
              <div className="article-body">
                <p>
                  Go to Notification section by clicking on
                  <strong> &quot;Notification&quot; </strong>icon.
                </p>

                <img
                  alt="Click on crm settings - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/app-mon/click-on-notification-icon.jpg"
                />

                <p>
                  Once you click on the notification icon you'll land on the
                  notification page with all the notifications listed there on
                  time based selection
                </p>

                <img
                  alt="Click on manage company - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/app-mon/notification-listing-page.jpg"
                />

                <p>
                  You can move these notification as the tickets by clicking on
                  the move to ticket manager button
                </p>

                <img
                  alt="Click on manage company - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/app-mon/move-to-ticket-manager.jpg"
                />

                <p>
                  After clicking on that it will open the ticket creation
                  sidebar with title and description already filled u can edit
                  the title ot u can add the description in more details also
                  both are possible you can modify following these below.
                </p>

                <ol style={{ listStyleType: "upper-alpha" }}>
                  <li>
                    You can assign a ticket by clicking on assignee dropdown{" "}
                  </li>
                  <li>You can add a severity for the ticket </li>
                  <li>You can add classification for the ticket </li>
                  <li>You can add due date for the ticket</li>
                  <li>You can add a attachments also</li>
                </ol>

                <img
                  alt="Click on manage company - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/app-mon/ticket-creation-page.jpg"
                />

                <p>
                  After filling all the details and click on create the ticket
                  is get created
                </p>

                <img
                  alt="Click on manage company - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/app-mon/click-on-create-ticket.jpg"
                />

                <h2>See moved notifications to tickets</h2>

                <p>
                  After moving the notification to the ticket management
                  successfully u can access the moved notification by clicking
                  on the tickets tab from the header.
                </p>

                <img
                  alt="Click on manage company - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/app-mon/go-to-tickets.jpg"
                />

                <p>
                  After clicking on the tickets from the header then u can
                  access all the moved notifications tickets from there
                </p>

                <img
                  alt="Click on manage company - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/app-mon/ticket-listing.jpg"
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
