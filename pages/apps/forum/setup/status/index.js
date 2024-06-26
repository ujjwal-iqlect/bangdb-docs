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
              <h1 className="article-title">Status</h1>
              <div className="article-body">
                <aside className="doc-note">
                  <strong>Note: </strong>
                  Status list is pre-defined and non-editable.
                </aside>

                <img
                  alt="Setup status - BangDB Forum"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/forum/setup-status.jpg"
                />

                <h2>Pre-defined statuses</h2>

                <ol>
                  <li>
                    <strong>Review</strong>
                  </li>
                  <p>
                    This Means the Post is just opened and is under review by an
                    admin or moderator before it can be visible to public view.
                  </p>

                  <li>
                    <strong>Open</strong>
                  </li>
                  <p>
                    The moderator has decided that its a valid post that can be
                    opened for the community to view and interact with.
                  </p>

                  <li>
                    <strong>Rejected</strong>
                  </li>
                  <p>
                    The post has been rejected by the moderator or the team
                    working on it.
                  </p>

                  <li>
                    <strong>Invalid</strong>
                  </li>
                  <p>
                    The post has been marked invalid as the issue/subject
                    mentioned in the post may have become stale or invalid under
                    any circumstances.
                  </p>

                  <li>
                    <strong>In Progress</strong>
                  </li>
                  <p>
                    The issue is under work by an internal team and may soon be
                    closed or resolved by the individual working on it.
                  </p>

                  <li>
                    <strong>Closed</strong>
                  </li>
                  <p>
                    The issue is closed/resolved and the solution is also
                    provided to the user who opened the post.
                  </p>

                  <li>
                    <strong>Re-open</strong>
                  </li>
                  <p>
                    The user still finds the issue or may argue that it is not
                    yet solved and has reopened the post for the same issue.
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
    props: { forum_sidebar: true },
  };
}
