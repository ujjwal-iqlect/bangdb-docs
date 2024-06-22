import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "../../../../../components/Breadcrumb";

export default function Motivation() {
  return (
    <React.Fragment>
      <Head>
        <title>Overview</title>
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
              <h1 className="article-title">Change user status</h1>
              <div className="article-body">
                <aside className="doc-note">
                  <strong>Note: </strong>
                  You need to be CRM admin in order to access manage account
                  users settings.
                </aside>

                <p>
                  Go to the
                  <strong> &quot;Manage Account Users&quot; </strong> page from
                  the top header.
                </p>

                <p>
                  Find the user you want to change the status for, and click on
                  <strong> &quot;Edit User&quot;</strong>
                </p>

                <img
                  alt="Click on crm settings - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/leads-management/click_on_edit_user.jpg"
                />

                <p>
                  It will open the edit user page. Where you'll see the
                  following status change options:
                </p>

                <img
                  alt="Click on crm settings - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/leads-management/edit_user_screen.jpg"
                />

                <p>
                  We have 4 status options. They are defined in details below :
                </p>

                <ul style={{ listStyleType: "numeric" }}>
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
                    user.
                    <p>Alternatively, you can delete the user &amp; re-create it.</p>
                  </aside>

                  <li>
                    <strong>Expire Password</strong>
                    <p>
                      Forcefully expire the password for the user. User will be
                      required to reset it.
                    </p>
                  </li>
                </ul>
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
    props: { leads_management_sidebar: true },
  };
}
