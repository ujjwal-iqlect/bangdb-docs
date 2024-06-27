import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../../../components/Breadcrumb";

export default function Overview() {
  return (
    <React.Fragment>
      <Head>
        <title>Setup Overview</title>
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
              <h1 className="article-title">Import bugs</h1>
              <div className="article-body">
                <p>
                  Go to the
                  <strong> &quot;Get started&quot; </strong> page and clck on
                  &quot;Import bugs&quot;.
                </p>

                <img
                  alt="Click on settings - BangDB Forum"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/bug-tracker/click-on-import-bugs.jpg"
                />

                <h2>Import from Zoho BugTracker</h2>

                <p>
                  It will open bug importing flow, click on{" "}
                  <strong>&quot;Import from ZOHO&quot;</strong>.
                </p>

                <img
                  alt="Post types setup - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/bug-tracker/click-on-import-from-zoho.jpg"
                />

                <p>
                  Then click on <strong>&quot;Authorize with Zoho&quot;</strong>
                  .
                </p>

                <img
                  alt="Post types setup - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/bug-tracker/click-on-zoho-auth.jpg"
                />

                <p>
                  After that, click on <strong>&quot;Accept&quot;</strong>
                </p>

                <img
                  alt="Post types setup - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/bug-tracker/click-on-accept.jpg "
                />

                <p>
                  Select the portal and the project from where you want to
                  import the bugs.
                </p>

                <img
                  alt="Post types setup - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/bug-tracker/choose-project.jpg "
                />

                <p>
                  Map the users to existing users or create new, whatever suits
                  the best. Click on <strong>&quot;Import users&quot;</strong>
                </p>

                <img
                  alt="Post types setup - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/bug-tracker/import-zoho-users.jpg"
                />

                <p>
                  Once the users are imported, click on{" "}
                  <strong>&quot;Import project&quot;</strong> ( Check the
                  &quot;Include attachments&quot; if you want to import the
                  attachments as well, otherwise leave it empty ).
                </p>

                <img
                  alt="Post types setup - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/bug-tracker/click-on-import-project.jpg"
                />

                <p>
                  Once the bugs are imported, Run the tests and click on{" "}
                  <strong>&quot;Done&quot;</strong>.
                </p>

                <img
                  alt="Post types setup - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/bug-tracker/run-tests.jpg"
                />

                <p>The Zoho project will get imported.</p>

                <img
                  alt="Post types setup - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/bug-tracker/zoho-project-imported.jpg"
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
