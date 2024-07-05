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
              <h1 className="article-title">Home / landing page</h1>
              <div className="article-body">
                <div className="article-body">
                  <p>Home page has 4 sub-sections. They are defined below :</p>

                  <ol>
                    <li>
                      <strong>My Companies</strong>
                    </li>
                    <li>
                      <strong>Call logs</strong>
                    </li>
                    <li>
                      <strong>Notifications</strong>
                    </li>
                    <li>
                      <strong>Today&apos;s events</strong>
                    </li>
                  </ol>

                  <img
                    alt="Click on crm settings - BangDB"
                    width={"95%"}
                    height={"auto"}
                    src="/assets/apps/leads-management/home_page.jpg"
                  />

                  <h2>My Companies</h2>

                  <p>
                    This section lists all the companies the current user is
                    assigned to.
                  </p>

                  <h3>Search company using ID</h3>
                  <p>
                    There is also a search field provided here using which the
                    users can search the company list ( using company ID ).
                  </p>

                  <img
                    alt="Click on manage company - BangDB"
                    width={"95%"}
                    height={"auto"}
                    src="/assets/apps/leads-management/my-companies-search.jpg"
                  />

                  <h3>Default company selection</h3>

                  <p>
                    There is a check-box provided in front of each company. By
                    selecting a company as default, it means that if you
                    navigate to the leads listing page without selecting a pipe
                    from home page. You will see leads of the default selected
                    company.
                  </p>

                  <img
                    alt="Click on manage company - BangDB"
                    width={"95%"}
                    height={"auto"}
                    src="/assets/apps/leads-management/default-pipe-selection.jpg"
                  />

                  <h2>Call logs</h2>

                  <p>
                    This section l  ists all the calls logs for the user ( from
                    Twillio ).
                  </p>

                  <h2>Notifications</h2>

                  <p>
                    This section lists all the notifications for the user from
                    all the companies. Users can also select and see the
                    notifications for only one company using the given dropdown.
                  </p>

                  <img
                    alt="Click on manage company - BangDB"
                    width={"95%"}
                    height={"auto"}
                    src="/assets/apps/leads-management/home-notifications.jpg"
                  />

                  <h2>Today&apos;s events</h2>

                  <p>
                    In this section, you&apos;ll see all the events scheduled in
                    the leads that are assigned to you.
                  </p>


                  <img
                    alt="Click on manage company - BangDB"
                    width={"95%"}
                    height={"auto"}
                    src="/assets/apps/leads-management/today-events.jpg"
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
