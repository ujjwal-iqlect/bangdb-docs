import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
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
              <h1 className="article-title">Add company in group</h1>
              <div className="article-body">
                <aside className="doc-note">
                  <strong>Note: </strong>
                  You need to be CRM admin OR Group Admin in order to access
                  this setting.
                </aside>

                <p>
                  In order to add company in a group, Go to the
                  <strong> &quot;CRM Settings&quot; </strong>
                </p>

                <img
                  alt="Click on crm settings - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/leads-management/click_on_crm_settings.jpg"
                />

                <p>
                  Click on
                  <strong> &quot;Group settings&quot;</strong>
                </p>

                <img
                  alt="Click on crm settings - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/leads-management/click_on_group_settings.jpg"
                />

                <p>
                  Click on the settings icon next to the group where you want to
                  add a company.
                </p>

                <img
                  alt="Click on manage company - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/leads-management/click_on_manage_company.jpg"
                />

                <p>Click on the &quot;Distribute Lead to Company&quot; tab</p>

                <p>
                  Enter the company name and description, then click{" "}
                  <strong>Add</strong>.
                </p>

                <img
                  alt="Add company - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/leads-management/add_company.jpg"
                />

                <p>
                  Once you&apos;re done with your changes. Click on{" "}
                  <strong>Save Group (Draft)</strong>.
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
    props: { leads_management_sidebar: true },
  };
}
