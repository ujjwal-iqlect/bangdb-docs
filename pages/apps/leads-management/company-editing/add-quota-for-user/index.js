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
              <h1 className="article-title">Add quota for user</h1>
              <div className="article-body">
                <aside className="doc-note">
                  <strong>Note: </strong>
                  You need to be either the CRM admin or a Group admin or a
                  Company admin of the company that you wish to edit, in order
                  to edit the company.
                </aside>

                <p>
                  Open the <strong>&quot;Company Settings&quot;</strong> and
                  expand the user that you want to setup the quota for.
                </p>

                <img
                  alt="Company editing (notificaiton setup) - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/leads-management/click-on-add-quota.jpg"
                />

                <p>
                  Add the quota, start date &amp; end date and click on
                  &quot;Complete&quot;.
                </p>

                <img
                  alt="Company editing (notificaiton setup) - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/leads-management/add-quota-form.jpg"
                />

                <p>The quota will be added for the user.</p>

                <img
                  alt="Company editing (notificaiton setup) - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/leads-management/quota-added.jpg"
                />

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
    props: { leads_management_sidebar: true },
  };
}
