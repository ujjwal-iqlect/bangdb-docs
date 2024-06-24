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
              <h1 className="article-title">Setup tags</h1>

              <aside className="doc-note">
                <strong>Note: </strong>
                You need to be CRM admin in order to access the CRM level
                settings.
              </aside>

              <div className="article-body">
                {/* <p>
                  In order to access the CRM settings, Click on the &quot;CRM
                  Settings&quot; link thats given in the top header section.
                </p>

                <img
                  alt="Click on crm settings - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/leads-management/click_on_crm_settings.jpg"
                /> */}

                <p>
                  Go to the <strong>&quot;CRM settings&quot;</strong>
                </p>

                <p>
                  Click on <strong>&quot;More CRM Settings&quot;</strong>
                </p>

                <img
                  alt="Click on setup crm - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/leads-management/click_on_more_crm_settings.jpg"
                />

                <p>
                  Go to <strong>&quot;Tags&quot;</strong>
                </p>

                <img
                  alt="Crm editing - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/leads-management/setup_tags.jpg"
                />

                <p>From here you can modify / change the tag list for the leads.</p>

                <p>
                  Once you&apos;re done with the changes, Click on{" "}
                  <strong>Save</strong>.
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
