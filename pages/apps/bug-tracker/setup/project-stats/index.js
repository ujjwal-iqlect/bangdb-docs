import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../../../components/Breadcrumb";

export default function Overview() {
  return (
    <React.Fragment>
      <Head>
        <title>Project reports &amp; stats</title>
        <meta name="description" content="Setup web forms"></meta>
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Project reports & stats" />
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
        <meta name="twitter:title" content="Project reports & stats" />
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
              <h1 className="article-title">Project reports &amp; stats</h1>
              <div className="article-body">
                <p>
                  Go to the
                  <strong> &quot;Home&quot; </strong> page and choose a project.
                </p>

                <img
                  alt="Click on settings - BangDB Forum"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/bug-tracker/click-on-project.jpg"
                />

                <p>
                  Once you select the project, you can now see new item added to
                  the header as <strong>&quot;CRM Stats&quot;</strong>. Click on
                  it.
                </p>

                <p>
                  Here, you can see all the Project level, Group level &
                  BugTracker level statistics &amp; reports.
                </p>

                <img
                  alt="Project reports & statistics - BangDB BugTracker"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/bug-tracker/project-stats.jpg"
                />

                <img
                  alt="Project reports & statistics - BangDB BugTracker"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/bug-tracker/Project_Stats.png"
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
    props: { bugt_sidebar: true },
  };
}
