import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../../../components/Breadcrumb";
import Link from "next/link";

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
              <h1 className="article-title">Review, Accept or Reject posts</h1>
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
                  Click on <strong>&quot;Manage posts&quot;</strong>
                </p>

                <img
                  alt="Click on crm settings - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/forum/click-on-manage-posts.jpg"
                />

                <p>
                  This will take you to BangDB Ampere. Click on &quot;Get
                  started&quot; button.
                </p>

                <img
                  alt="Click on crm settings - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/forum/bdbforum-get-started.jpg"
                />

                <p>
                  It will take you to the page, where you can manage all of your
                  posts.
                </p>

                <img
                  alt="Click on crm settings - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/forum/forum-internal-tickets.jpg"
                />

                <p>
                  In order to change the status of a post, click on the status
                  column in the table.
                </p>

                <img
                  alt="Click on crm settings - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/forum/change-status-of-post.jpg"
                />

                <p>Choose the status and it will get changed.</p>

                <img
                  alt="Click on crm settings - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/forum/status-change-options.jpg"
                />

                <h2>Review</h2>

                <p>
                  By default, when a user creates a post, that gets created in
                  &quot;Review&quot; status and does not show up in the forum
                  until the status is changed to something else by the admin.
                </p>

                <p>
                  Basically until the post is in Review status, it will not
                  appear on the forum.
                </p>

                <h2>Accepted</h2>

                <p>
                  The post has been accepted by the moderator and the task in
                  added in the queue.
                </p>

                <h2>Rejected</h2>

                <p>
                  The post has been rejected by the moderator or the team
                  working on it.
                </p>

                <p>
                  To know more about the status setup, check this{" "}
                  <Link href={`/apps/forum/setup/status`} className="external">
                    document
                  </Link>
                  .
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
