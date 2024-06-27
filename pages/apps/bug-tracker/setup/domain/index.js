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
              <h1 className="article-title">Custom domain</h1>
              <div className="article-body">
                <p>
                  Go to the
                  <strong> &quot;Settings&quot; </strong> page from the top
                  header.
                </p>

                <img
                  alt="Click on settings - BangDB Forum"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/forum/click-on-settings.jpg"
                />

                <p>
                  Click on <strong>&quot;DNS Setup&quot;</strong>
                </p>

                <p>
                  There are 2 ways to configure custom domain for your forum.
                </p>

                <ol>
                  <li>
                    Use your custom name with open forum domain - (fastest)
                  </li>
                  <li>
                    Use your custom name and custom domain - (takes few days)
                  </li>
                </ol>

                <h2>Use your custom name with open forum domain - (fastest)</h2>

                <p>
                  No cost, simple and fast. Define the first part of the URL.
                </p>

                <img
                  alt="Click on settings - BangDB Forum"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/forum/open-forum-subdomain.jpg"
                />

                <p>
                  Enter the preferred subdomain and click on &quot;Submit&quot;.
                  Generally it takes affect in 30-45 minutes.
                </p>

                <h2>
                  Use your custom name and custom domain - (takes few days)
                </h2>

                <p>
                  Cost as applicable. Provide us with few options for the name
                  and we will get back to you.
                </p>

                <img
                  alt="Click on settings - BangDB Forum"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/forum/domain-list-submit.jpg"
                />

                <p>
                  Enter the preferred domains and click on &quot;Submit&quot;.
                  It takes a few days.
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
    props: { forum_sidebar: true },
  };
}
