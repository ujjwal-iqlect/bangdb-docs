import React from "react";
import Head from "next/head";
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
              <h1 className="article-title">Setup business hours</h1>
              <div className="article-body">
                <aside className="doc-note">
                  <strong>Note: </strong>
                  You need to be either the CRM admin or a Group admin of the
                  group that you wish to edit, in order to edit the group.
                </aside>

                <p>
                  Open the <strong>&quot;Group Settings&quot;</strong> and click
                  on &quot;Other setup&quot; tab.
                </p>

                <img
                  alt="Group editing - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/leads-management/setup_business_hours.jpg"
                />

                <p>Here, you can configure three settings.</p>

                <ol>
                  <li>Frequency</li>
                  <li>From</li>
                  <li>To</li>
                </ol>

                <p>
                  The first setting is Frequency, where you can select day,
                  week, month, or year. Next, you can define the time range by
                  choosing the from and to times. For example, if you set the
                  frequency to &quot;day&quot; and specify the from day hour as
                  10 and the to day hour as 14, leads will only be
                  received by this group between 10:00 AM and 2:00 PM on a daily
                  basis.
                </p>

                <p>
                  Once you&apos;re done with your changes. Click on{" "}
                  <strong>Save Group (Draft)</strong>.
                </p>

                <p>
                  Changes are now saved locally, in order to save these changes
                  on the app. Click on <strong>Save</strong>.
                </p>

                <img
                  alt="Click on setup crm - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/leads-management/save_group.png"
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
