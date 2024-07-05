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
              <h1 className="article-title">Customize columns</h1>
              <div className="article-body">
                <div className="article-body">
                  <p>
                    In order to customize the lead table columns, Go to the
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

                  <p>Now click on the customize columns icon.</p>

                  <img
                    alt="Click on manage company - BangDB"
                    width={"95%"}
                    height={"auto"}
                    src="/assets/apps/leads-management/click-on-customize-columns.jpg"
                  />

                  <p>
                    It will open a popover, where you can enable / disable the
                    columns as per your requirement. Additionally, you will see
                    two tabs :
                  </p>

                  <ol>
                    <li>
                      <strong>For you</strong> : whichever columns you edit
                      here, will affect only your table view.
                    </li>
                    <li>
                      <strong>For everyone</strong> : whichever columns you edit
                      here, will affect everyone&apos;s table view.
                    </li>
                  </ol>

                  <img
                    alt="Click on create"
                    width={"95%"}
                    height={"auto"}
                    src="/assets/apps/leads-management/customize-columns-popover.jpg"
                  />

                  <p>
                    Enable / Disable the columns using the switch buttons, and
                    the changes will automatically be applied.
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
