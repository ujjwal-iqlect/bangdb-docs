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
              <h1 className="article-title">Introduction</h1>

              <aside className="doc-note">
                <strong>Note: </strong>
                You need to be CRM admin in order to access the CRM level
                settings.
              </aside>

              <div className="article-body">
                <p>
                  In order to access the CRM settings, Click on the &quot;CRM
                  Settings&quot; link thats given in the top header section.
                </p>

                <img
                  alt="Click on crm settings - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/leads-management/click_on_crm_settings.jpg"
                />

                <p>Click on &quot;More CRM Settings&quot;</p>

                <img
                  alt="Click on setup crm - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/leads-management/click_on_more_crm_settings.jpg"
                />

                <p>
                  Go to the &quot;Lead Update Template&quot; and select a group.
                  ( These fields are defined at the group level )
                </p>

                <img
                  alt="Crm editing - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/leads-management/select_group_lut.jpg"
                />

                <p>
                  Once the group is selected. Click on{" "}
                  <strong>Start Adding</strong>.
                </p>

                <img
                  alt="Crm editing - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/leads-management/click_on_start_adding.jpg"
                />

                <p>Add the fields</p>

                <img
                  alt="Crm editing - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/leads-management/lut_filled.jpg"
                />

                <p>
                  Once the changes are done. Click on <strong>Save</strong>.
                </p>

                <p>
                  The fields you add here, will appear inside each leads ( for
                  the companies which are inside this group ) and users will be
                  able to edit those fields for each lead.
                </p>

                <img
                  alt="Crm editing - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/leads-management/user_form.jpg"
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
