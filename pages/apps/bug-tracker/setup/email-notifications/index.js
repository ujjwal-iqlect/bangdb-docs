import React from "react";
import Head from "next/head";

import Divider from "@mui/material/Divider";

import Breadcrumb from "../../../../../components/Breadcrumb";

export default function Overview() {
  return (
    <React.Fragment>
      <Head>
        <title>Setup Project</title>
        <meta name="description" content="Setup web forms"></meta>
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
              <h1 className="article-title">Email notifications</h1>
              <div className="article-body">
                <p>
                  Navigate to the home page and select a project that you wish
                  to setup the email notifications for.
                </p>

                <img
                  alt="Click on settings - BangDB BugTracker"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/bug-tracker/click-on-project.jpg"
                />

                <p>
                  Now, Go to{" "}
                  <strong>
                    &quot;Settings&quot; -&gt; &quot;Project Settings&quot;
                  </strong>{" "}
                  and click on <strong>&quot;Manage project&quot;</strong> like
                  shown in the image below.
                </p>

                <img
                  alt="Click on settings - BangDB BugTracker"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/bug-tracker/click-on-manage-project.jpg"
                />

                <p>
                  Click on <strong>&quot;Notification Setup&quot;</strong> tab.
                </p>

                <img
                  alt="Click on crm settings - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/bug-tracker/email-notifications-setup.jpg"
                />

                <h2>
                  Send auto Email Notification when ever there are changes in
                  Bug
                </h2>

                <p>This setting has 2 options.</p>

                <ul>
                  <li>
                    <strong>Send mail to Selected Groups only</strong>
                  </li>

                  <p>
                    By selecting this option, you can provide list of email
                    addresses where it will send notifications related to the
                    project. Additionally, you can also provide a BCC list.
                  </p>

                  <li>
                    <strong>Email to Assignee & Reporter only</strong>{" "}
                  </li>

                  <p>
                    This will only send the notificaitons to the person who has
                    created the bug (reporter) and the to the person who is
                    assigned to that bug (assignee).
                  </p>
                </ul>

                <h2>Send Only New Bug Email Notifications</h2>

                <p>
                  By enabling this option, project users will only receive the
                  notifications when new bug is added. This disables the bug
                  update notifications.
                </p>

                <Divider sx={{ my: 5 }} />

                <p>
                  Once you&apos;re done with your changes. Click on{" "}
                  <strong>Save Project (Draft)</strong>.
                </p>

                <p>
                  Changes are now saved locally, in order to save these changes
                  on the app. Click on <strong>Save</strong>.
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
    props: { bugt_sidebar: true },
  };
}
