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
              <h1 className="article-title">Notification setup in company</h1>
              <div className="article-body">
                <aside className="doc-note">
                  <strong>Note: </strong>
                  You need to be either the CRM admin or a Group admin or a
                  Company admin of the company that you wish to edit, in order
                  to edit the company.
                </aside>

                <p>
                  Click on the <strong>&quot;Notification setup&quot;</strong>{" "}
                  tab
                </p>

                <img
                  alt="Company editing (notificaiton setup) - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/leads-management/company_notification_setup.jpg"
                />

                <h2>
                  Send auto Email Notification when ever there are changes in
                  Lead
                </h2>

                <p>This setting has 2 options.</p>

                <ul>
                  <li>
                    <strong>Send mail to Selected Groups only</strong>
                  </li>

                  <p>
                    By selecting this option, you can provide list of email
                    addresses where it will send notifications related to the
                    company. Additionally, you can also provide a BCC list.
                  </p>

                  <li>
                    <strong>Email to Assignee & Reporter only</strong>{" "}
                  </li>

                  <p>
                    This will only send the notificaitons to the person who has
                    created the lead (if created manually) and the to the person
                    who is assigned to that lead.
                  </p>
                </ul>

                <h2>Send Only New Job Email Notifications</h2>

                <p>
                  By enabling this option, company users will only receive the
                  notifications when new lead arrives. This disables the lead
                  update notifications.
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
    props: { leads_management_sidebar: true },
  };
}
