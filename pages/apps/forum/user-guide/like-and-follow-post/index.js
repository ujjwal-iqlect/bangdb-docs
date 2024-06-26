import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../../../components/Breadcrumb";
import Divider from "@mui/material/Divider";

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
              <h1 className="article-title">Add reply in post</h1>
              <div className="article-body">
                <p>Open any post</p>

                <img
                  alt="Click on settings - BangDB Forum"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/forum/click-on-post.jpg"
                />

                <h2>Like the post</h2>

                <p>
                  In order to like a post, click on like icon as show below.
                </p>

                <img
                  alt="Click on settings - BangDB Forum"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/forum/like-post.jpg"
                />

                <h2>Follow the post</h2>

                <p>
                  Following a post means that you will start to receive all the
                  notifications related to the post.
                </p>

                <p>
                  In order to follow a post, click on follow button as show
                  below. You can unfollow any time from the same place.
                </p>

                <img
                  alt="Click on crm settings - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/forum/follow-post.jpg"
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
    props: { forum_sidebar: true },
  };
}
