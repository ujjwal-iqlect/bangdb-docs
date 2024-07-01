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
              <h1 className="article-title">Share companies between groups</h1>
              <div className="article-body">
                <aside className="doc-note">
                  <strong>Note: </strong>
                  You need to be either the CRM admin or a Group admin or a
                  Company admin of the company that you wish to edit.
                </aside>

                <p>
                  In order to add group in the CRM, Go to the
                  <strong> &quot;CRM Settings&quot; </strong>
                </p>

                <img
                  alt="Click on crm settings - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/leads-management/click_on_crm_settings.jpg"
                />
                <p>
                  Click on <strong>&quot;Company Settings&quot;</strong>
                </p>
                <img
                  alt="Click on manage company - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/leads-management/click_on_company_settings.jpg"
                />

                <p>
                  Here, you will see list of all the companies you have access
                  to.
                </p>

                <aside className="doc-note">
                  <strong>Note: </strong>
                  In order to use this feature, you must at-least have 2 or more
                  groups.
                </aside>

                <p>
                  There is a share icon provided right next to all the listed
                  companies. Click on that icon of the company you wish to move
                </p>
                <img
                  alt="Click on manage group - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/leads-management/click_on_share_company.jpg"
                />

                <p>
                  In order to share it with &quot;Group2&quot;, Select Group2
                  from the dropdown and click on Save. The company will be get
                  shared with &quot;Group2&quot;.
                </p>

                <p>
                  Sharing the company with different groups means that the
                  company will receive leads from each of those groups it is
                  shared with.
                </p>

                <img
                  alt="Company editing - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/leads-management/share-company-form.jpg"
                />
                <p>
                  Once you&apos;re done with your changes. Click on{" "}
                  <strong>Save</strong>.
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
