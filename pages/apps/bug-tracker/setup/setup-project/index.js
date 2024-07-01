import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../../../components/Breadcrumb";

export default function Overview() {
  return (
    <React.Fragment>
      <Head>
        <title>Setup Project</title>
        <meta name="description" content="Setup web forms"></meta>
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
              <h1 className="article-title">Setup project</h1>
              <div className="article-body">
                <p>
                  In order to setup a project. Go to the home page and click on
                  the project that you wish to setup.
                </p>

                <img
                  alt="Click on settings - BangDB BugTracker"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/bug-tracker/click-on-project.jpg"
                />

                <p>
                  Now, Go to{" "}
                  <strong>
                    &quot;Settings&quot; -&gt; &quot;Project Settings&quot;
                  </strong>{" "}
                  and click on <strong>&quot;Manage project&quot;</strong> like
                  shown in the image below.
                </p>

                <img
                  alt="Click on settings - BangDB BugTracker"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/bug-tracker/click-on-manage-project.jpg"
                />

                <p>
                  It will open the project settings page. From here, you can
                  edit the project description, manage project users, bug
                  distribution at user level, setup email notifications, bug id
                  prefix etc.
                </p>

                <img
                  alt="Click on crm settings - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/bug-tracker/setup-project-screen.jpg"
                />

                <p>
                  Once you&apos;re done with your changes. Click on{" "}
                  <strong>Save Project (Draft)</strong>.
                </p>

                <p>
                  Changes are now saved locally, in order to save these changes
                  on the app. Click on <strong>Save</strong>.
                </p>

                <img
                  alt="Click on crm settings - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/bug-tracker/Save_btn_btr.png"
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
