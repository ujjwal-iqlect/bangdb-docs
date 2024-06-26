import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../../../components/Breadcrumb";
import Divider from "@mui/material/Divider";

export default function Overview() {
  return (
    <React.Fragment>
      <Head>
        <title>Create new post in forum</title>
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
              <h1 className="article-title">Create new post</h1>
              <div className="article-body">
                <p>
                  Click on <strong>&quot;Create Post&quot;</strong> from the
                  header.
                </p>

                <img
                  alt="Click on settings - BangDB Forum"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/forum/click-on-create-post.jpg"
                />

                <p>Enter the post details, and click on &quot;Post&quot;.</p>

                <img
                  alt="Click on settings - BangDB Forum"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/forum/click-on-post-button.jpg"
                />

                <p>The post will be created.</p>

                <img
                  alt="Click on settings - BangDB Forum"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/forum/post-created.jpg"
                />

                <aside className="doc-note">
                  <strong>Note: </strong>
                  For the post to appear on the forum, it must first be reviewed
                  and approved by the admins. After receiving approval, the post
                  will be published and visible to all users.
                </aside>

                {/* <p>
                  For the post to appear on the forum, it must first be reviewed
                  and approved by the admins. After receiving approval, the post
                  will be published and visible to all users.
                </p> */}
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
