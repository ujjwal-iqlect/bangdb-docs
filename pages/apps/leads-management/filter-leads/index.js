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
              <h1 className="article-title">Filter leads</h1>
              <div className="article-body">
                <div className="article-body">
                  <p>
                    In order to filter leads, Go to the
                    <strong> &quot;Home&quot; </strong> page, and select a
                    company from the <strong>&quot;My companies&quot;</strong>{" "}
                    section.
                  </p>

                  <img
                    alt="Click on crm settings - BangDB"
                    width={"95%"}
                    height={"auto"}
                    src="/assets/apps/leads-management/home_page.jpg"
                  />

                  <p>
                    It will take you to the leads page, where you can see all
                    the leads for the selected company.
                  </p>

                  <img
                    alt="Click on manage company - BangDB"
                    width={"95%"}
                    height={"auto"}
                    src="/assets/apps/leads-management/leads_page.jpg"
                  />

                  <p>Now Click on the filter icon icon</p>

                  <img
                    alt="Click on manage company - BangDB"
                    width={"95%"}
                    height={"auto"}
                    src="/assets/apps/leads-management/click_on_filter_leads.jpg"
                  />

                  <p>
                    It will open the create lead form, Filter slideover. Add
                    which ever filter you want. In this example, we&apos;re
                    adding assignee filter as &quot;sandeepb&quot;. That means
                    it will filter and show only those leads which are assigned
                    to the user &quot;sandeepb&quot;.
                  </p>

                  <p>
                    Once the filter is added, Click on{" "}
                    <strong>&quot;Find All&quot;</strong>.
                  </p>

                  <img
                    alt="Click on create"
                    width={"95%"}
                    height={"auto"}
                    src="/assets/apps/leads-management/apply_assignee_lead_filters.jpg"
                  />

                  <p>
                    Now it will filter and only show the leads which are assigned to the user &quot;sandeepb&quot;.
                  </p>

                  <img
                    alt="Click on create"
                    width={"95%"}
                    height={"auto"}
                    src="/assets/apps/leads-management/filtered_leads.jpg"
                  />
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
