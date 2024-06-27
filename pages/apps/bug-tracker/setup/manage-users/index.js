import React from "react";
import Head from "next/head";
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
              <h1 className="article-title">Manage users</h1>
              <div className="article-body">
                <p>
                  Go to <strong>&quot;Manage Account Users&quot;</strong> from
                  the header .
                </p>

                <h2>Add new user</h2>

                <p>
                  Click on the <strong>&quot;Create New User&quot;</strong>{" "}
                  button.
                </p>

                <img
                  alt="Go to manage account users - BangDB BugTracker"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/bug-tracker/click-on-create-new-user.jpg"
                />

                <p>
                  Enter all the required details for the new user and click on{" "}
                  <strong>&quot;Create&quot;</strong>
                </p>

                <img
                  alt="Go to manage account users - BangDB BugTracker"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/bug-tracker/create-user-form.jpg"
                />

                <p>The user will get created.</p>

                <h2>Delete a user</h2>

                <p>
                  Click on the delete icon for the user that you wish to delete.
                </p>

                <img
                  alt="Go to manage account users - BangDB BugTracker"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/bug-tracker/click-on-delete-user.jpg"
                  />

                <p>Click on &quot;Yes&quot;, when asked for confirmation.</p>

                <img
                  alt="Go to manage account users - BangDB BugTracker"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/bug-tracker/delete-user-confirmation-modal.jpg"
                  />

                  <p>The user will get deleted.</p>

                <h2>Activate, Suspend, Terminate &amp; Expire password</h2>

                <p>
                  Click on the edit icon for the user that you wish to change
                  the status for.
                </p>

                <img
                  alt="Go to manage account users - BangDB BugTracker"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/bug-tracker/click-on-edit-user.jpg"
                />

                <p>
                  It will open the status change page. We have 4 status options.
                  They are defined in details below :
                </p>

                <ol>
                  <li>
                    <strong>Activate</strong>
                  </li>

                  <p>
                    If user was suspended earlier then we can un-suspend
                    (activate) using this.
                  </p>
                  <li>
                    <strong>Suspend</strong>

                    <p>
                      De-activate user, which will disable access to the
                      platform and data completely, until re-activated.
                    </p>
                  </li>
                  <li>
                    <strong className="text-red-700">Terminate</strong>
                  </li>
                  <p>
                    Permanent suspension, where we will not be able to bring the
                    user back again. This is asking to user deletion.
                  </p>

                  <aside className="doc-warning">
                    <strong>Warning: </strong>
                    This action can&apos;t be undone, You can not un-terminate
                    the user.
                    <p>
                      Alternatively, you can delete the user &amp; re-create it.
                    </p>
                  </aside>

                  <li>
                    <strong>Expire Password</strong>
                    <p>
                      Forcefully expire the password for the user. User will be
                      required to reset it.
                    </p>
                  </li>
                </ol>

                <img
                  alt="Click on crm settings - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/bug-tracker/change-status.jpg"
                />

                <p>
                  Select one of the option, and click on{" "}
                  <strong>&quot;Update Status&quot;</strong>.
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
