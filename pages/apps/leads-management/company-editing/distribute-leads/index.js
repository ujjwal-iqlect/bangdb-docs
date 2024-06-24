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
              <h1 className="article-title">Distribute leads</h1>
              <div className="article-body">
                <aside className="doc-note">
                  <strong>Note: </strong>
                  You need to be either the CRM admin or a Group admin or a
                  Company admin of the company that you wish to edit, in order
                  to edit the group.
                </aside>

                <p>
                  Open the company settings and click on
                  <strong> &quot;Distribute lead among users&quot; </strong>
                </p>

                <img
                  alt="Company editing - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/leads-management/setup_leads_distribution.jpg"
                />

                <h2>Rule options</h2>

                <p>Here, you&apos;ll have four rule options to choose from</p>

                <ol>
                  <li>
                    <strong>RR</strong> : Assign leads in a round-robin manner.
                  </li>
                  <li>
                    <strong>RROBIN</strong> : Assign leads in a 1-1 round-robin
                    manner.
                  </li>
                  <li>
                    <strong>FILTER</strong> : Filter leads based on attributes.
                  </li>
                  <li>
                    <strong>FILTER_ONCE</strong> : Filter leads for only one
                    user.
                  </li>
                </ol>

                <h2>Add Rules</h2>

                <p>
                  If you select FILTER or FILTER_ONCE, you can define lead
                  assignment rules for each user. For instance, if the country
                  field is India, you can assign those leads to the user
                  &quot;sandeepb&quot;.
                </p>

                <p>
                  To add lead assignment rule for a user. Click on{" "}
                  <strong>&quot;Add/Edit Rule&quot;</strong>
                  button{" "}
                </p>

                <img
                  alt="Company editing - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/leads-management/add_edit_rule_btn.jpg"
                />

                <p>It will open a dialog, where you can define the rules.</p>

                <img
                  alt="Company editing - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/leads-management/rule_form.jpg"
                />

                <p>
                  Once you&apos;re done with your changes. Click on{" "}
                  <strong>Save Company (Draft)</strong>.
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
