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
              <h1 className="article-title">Unassigned leads</h1>
              <div className="article-body">
                <div className="article-body">
                  <p>Click on the unassigned leads icon from the top header.</p>

                  <img
                    alt="Click on crm settings - BangDB"
                    width={"95%"}
                    height={"auto"}
                    src="/assets/apps/leads-management/click-on-unassigned-leads.jpg"
                  />

                  <p>
                    In this section, you will see all the un-assigned leads for
                    today.
                  </p>

                  <h2>Setup</h2>

                  <p>In order to setup this, click on the arrow down icon.</p>

                  <img
                    alt="Click on manage company - BangDB"
                    width={"95%"}
                    height={"auto"}
                    src="/assets/apps/leads-management/unassigned-leads.jpg"
                  />

                  <p>It will open the setup section.</p>

                  <img
                    alt="Click on manage company - BangDB"
                    width={"95%"}
                    height={"auto"}
                    src="/assets/apps/leads-management/unassigned-leads-setup.jpg"
                  />

                  <h3>Watch all my pipes</h3>

                  <p>
                    By selecting this , you will see the unassigned leads for
                    all the companies.
                  </p>

                  <h3>Desktop notification</h3>

                  <p>
                    By enabling this, you will start receiving the notifications
                    on your desktop as soon as a new unassigned lead is arrived
                    in selected company.
                  </p>

                  <img
                    alt="Click on manage company - BangDB"
                    width={"50%"}
                    height={"auto"}
                    src="/assets/apps/leads-management/desktop-notification.jpg"
                  />

                  <h3>Watch pipes</h3>

                  <p>
                    This is a dropdown from where you can selected companies and
                    you will receive the unassigned notifications for only the
                    companies that you select here.
                  </p>
                </div>
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
