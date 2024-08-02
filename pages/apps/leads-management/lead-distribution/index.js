import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../../components/Breadcrumb";
import Link from "next/link";
import { useRouter } from "next/router";

export default function LeadsDistribution() {
  const router = useRouter();

  const get_params = () => {
    let temp = {};

    if (router.query.app) {
      temp.app = router.query.app;
    }

    return temp;
  };

  return (
    <React.Fragment>
      <Head>
        <title>Leads Distribution</title>
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
              <h1 className="article-title">See leads distribution</h1>
              <div className="article-body">
                <div className="article-body">
                  <p>
                    In order to see leads distribution, Go to the
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
                    Naviagate to the &quot;Distribution logs&quot; page from the
                    header. It will take you to the leads distribution page,
                    where you can see all the leads and how they are
                    distributed.
                  </p>

                  <img
                    alt="Click on manage company - BangDB"
                    width={"95%"}
                    height={"auto"}
                    src="/assets/apps/leads-management/distribution-logs.jpg"
                  />

                  <p>
                    Now in order to see distribution for a specific lead, click
                    on the lead for which you want to see the distribution.
                  </p>

                  <img
                    alt="Click on manage company - BangDB"
                    width={"95%"}
                    height={"auto"}
                    src="/assets/apps/leads-management/lead-distribution.jpg"
                  />

                  <p>
                    It will show via the graph that how the selected lead is
                    distributed among different groups, companies &amp; users.
                  </p>

                  <p>
                    Additionally you can open the lead, by clicking on the table
                    row and it will take you to the lead details page. Know more
                    about the{" "}
                    <Link
                      href={{
                        pathname: "/apps/leads-management/edit-lead",
                        query: get_params(),
                      }}
                    >
                      leads details page
                    </Link>
                    .
                  </p>

                  <img
                    alt="Click on create"
                    width={"95%"}
                    height={"auto"}
                    src="/assets/apps/leads-management/lead-details-from-distribution.jpg"
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
