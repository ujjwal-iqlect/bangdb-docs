import React from "react";
import Head from "next/head";

import Breadcrumb from "../../../../components/Breadcrumb";

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
              <h1 className="article-title">Edit an event</h1>
              <div className="article-body">
                <aside className="doc-note">
                  <strong>Note: </strong>
                  You need to authenticate with your google account in order to
                  use this feature.
                </aside>

                <p>
                  Open any lead, scroll to events section and click on{" "}
                  <strong>&quot;Edit icon</strong> for the event that you want
                  to edit.
                </p>

                <img
                  alt="Click on crm settings - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/leads-management/click-on-edit-event.jpg"
                />

                <p>
                  It will open the modal shown below. Edit the event related
                  details and click on &quot;Update event&quot; button.
                </p>

                <img
                  alt="Click on crm settings - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/leads-management/edit-event-form.jpg"
                />

                <p>The event will get edited.</p>

                <img
                  alt="Click on crm settings - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/leads-management/edited-event.png"
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
    props: { leads_management_sidebar: true },
  };
}
