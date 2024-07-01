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
              <h1 className="article-title">
                Setup lead ID prefix
              </h1>
              <div className="article-body">
                <aside className="doc-note">
                  <strong>Note: </strong>
                  You need to be either the CRM admin or a Group admin or a
                  Company admin of the company that you wish to edit, in order
                  to edit the group.
                </aside>

                <p>
                  Open the company settings and click on
                  <strong> &quot;Other setup&quot; </strong>tab.
                </p>

                <img
                  alt="Company editing - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/leads-management/setup_id_prefix.jpg"
                />

                <p>You can either select default or YYMMDD. Default will generate random IDs, However if you select &quot;YYMMDD&quot; - it will create lead ID based on year, month & date.</p>

                <p>
                  Once you&apos;re done with your changes. Click on{" "}
                  <strong>Save Company (Draft)</strong>.
                </p>

                <p>
                  Changes are now saved locally, in order to save these changes
                  on the app. Click on <strong>Save</strong>.
                </p>

                <img
                  alt="Company editing - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/leads-management/Save_btn_company.png"
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
