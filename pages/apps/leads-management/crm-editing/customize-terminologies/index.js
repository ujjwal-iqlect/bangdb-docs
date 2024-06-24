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
              <h1 className="article-title">Customize terminologies</h1>

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
                  Go to <strong>&quot;Advanced Settings&quot;</strong>
                </p>

                <img
                  alt="Crm editing - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/leads-management/customize_terminologies.jpg"
                />

                <h2>Terminologies options</h2>

                <p>
                  As of now, you can change the naming convention for Work,
                  Group, Pipe, Classification, &amp; Created.
                </p>

                <ol>
                  <li>
                    <strong>Work</strong>
                  </li>
                  <p>
                    By default it is &quot;LeadCRM&quot;. However, if you prefer
                    to call it something else, you can change it by editing it
                    from here.
                  </p>

                  <li>
                    <strong>Pipe</strong>
                  </li>
                  <p>
                    By default it is &quot;Company&quot;. However, if you prefer
                    to call it something else, you can change it by editing it
                    from here.
                  </p>

                  <li>
                    <strong>Job</strong>
                  </li>
                  <p>
                    By default it is &quot;Lead&quot;. However, if you prefer to
                    call it something else, you can change it by editing it from
                    here.
                  </p>

                  <li>
                    <strong>Classification</strong>
                  </li>
                  <p>
                    By default it is &quot;Classification&quot;. However, if you
                    prefer to call it something else, you can change it by
                    editing it from here.
                  </p>

                  <li>
                    <strong>Created</strong> (affects lead creation time column
                    in the lead listing page)
                  </li>
                  <p>
                    By default it is &quot;Created&quot;. However, if you prefer
                    to call it something else, you can change it by editing it
                    from here.
                  </p>
                </ol>
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
