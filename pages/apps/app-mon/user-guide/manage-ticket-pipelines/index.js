import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../../../components/Breadcrumb";

export default function ManageTicketPipelines() {
  return (
    <React.Fragment>
      <Head>
        <title>Manage ticket pipelines</title>
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
              <h1 className="article-title">Manage ticket pipelines</h1>
              <div className="article-body">
                <p>
                  Click on &quot;Manage Ticket Pipelines&quot; from the top nav
                  bar.
                </p>

                <img
                  alt="Click on crm settings - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/app-mon/go-to-manage-ticket-pipelines.jpg"
                />

                <p>
                  After clicking on the manage ticket pipelines, you can see the
                  the ticket pipeline which is associated to the your AppMon app
                </p>

                <img
                  alt="Click on manage company - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/app-mon/pipelines-listing.jpg"
                />

                <p>
                  Click on <strong>&quot;Manage Ticket Pipeline&quot;</strong>
                </p>

                <img
                  alt="Click on manage company - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/app-mon/click-on-manage-ticket-pipelines.jpg"
                />

                <p>There you can do the following setting :-</p>

                <img
                  alt="Click on manage company - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/app-mon/manage-ticket-pipelines-details.jpg"
                />

                <ol style={{ listStyleType: "upper-alpha" }}>
                  <li>Edit the description of the ticket pipeline</li>

                  <img
                    alt="Click on manage company - BangDB"
                    width={"95%"}
                    height={"auto"}
                    src="/assets/apps/app-mon/ticket-pipeline-description.jpg"
                  />

                  <li>
                    You can add the existing user by clicking on the add
                    existing user dropdown
                  </li>

                  <img
                    alt="Click on manage company - BangDB"
                    width={"95%"}
                    height={"auto"}
                    src="/assets/apps/app-mon/add-existing-user.jpg"
                  />

                  <li>
                    You can create a new user and you can add to that pipeline
                  </li>

                  <img
                    alt="Click on manage company - BangDB"
                    width={"95%"}
                    height={"auto"}
                    src="/assets/apps/app-mon/create-new-user-modal.jpg"
                  />

                  <li>
                    You can make the users admin and non-admin from the toggle
                    button
                  </li>

                  <img
                    alt="Click on manage company - BangDB"
                    width={"95%"}
                    height={"auto"}
                    src="/assets/apps/app-mon/admin-toggle.jpg"
                  />

                  <li>You can make the user status off or on by toggling</li>

                  <img
                    alt="Click on manage company - BangDB"
                    width={"95%"}
                    height={"auto"}
                    src="/assets/apps/app-mon/status-toggle.jpg"
                  />

                  <li>
                    You can set the rule for sending the tickets between the
                    users by clicking on the Distribute ticket among the users
                  </li>
                  <img
                    alt="Click on manage company - BangDB"
                    width={"95%"}
                    height={"auto"}
                    src="/assets/apps/app-mon/assign-ticket-rule.jpg"
                  />

                  <li>
                    You can set up email notifications also by clicking on the
                    notification tab
                  </li>

                  <img
                    alt="Click on manage company - BangDB"
                    width={"95%"}
                    height={"auto"}
                    src="/assets/apps/app-mon/notification-setup.jpg"
                  />
                </ol>

                <h2>Other setup</h2>

                <h3>Scan delay</h3>

                <p>
                  It will take the inputs in seconds if u give 60 as scan delay
                  then when we move the tickets from notification it will be
                  visible after 60 seconds in the tickets
                </p>

                <img
                  alt="Click on manage company - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/app-mon/scan-delay.jpg"
                />

                <h3>ID prefix type</h3>

                <p>
                  For every ticket one id is getting assigned if u want your ID
                  in the format of YYMMDD then u can choose this or u can choose
                  default also
                </p>

                <img
                  alt="Click on manage company - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/app-mon/id-prefix-type.jpg"
                />

                <h3>Auto assign users</h3>

                <p>
                  Here if you toggle on then the tickets will automatically get
                  assigned
                </p>

                <img
                  alt="Click on manage company - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/app-mon/auto-assign-users.jpg"
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
