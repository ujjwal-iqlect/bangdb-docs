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
              <h1 className="article-title">
                Most popular, Most commented, Most liked etc.
              </h1>
              <div className="article-body">
                <p>
                  When you visit the home page of the forum, you will see 4
                  primary tabs.
                </p>

                <ol>
                  <li>Latest Posts</li>
                  <li>Most Popular</li>
                  <li>Most Liked</li>
                  <li>Most Commented</li>
                </ol>

                <p>
                  But, if you are signed-in, you&apos;ll also see one more tab
                  called <strong>&quot;My Followed Posts&quot;</strong>.
                </p>

                <img
                  alt="Click on settings - BangDB Forum"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/forum/home-posts-tabs.jpg"
                />

                <p>
                  Although the names are pretty descriptive themselves,
                  here&apos;s a detailed explanation of each.
                </p>

                <h2>Latest Posts</h2>
                <p>
                  This tab displays all the latest posts in the forum. As soon
                  as a new post is published, it appears here.
                </p>

                <h2>Most Followed</h2>
                <p>
                  This tab is exclusive to signed-in users. It lists all the
                  posts you have chosen to follow, allowing you to easily keep
                  track of topics that interest you.
                </p>

                <h2>Most Popular</h2>
                <p>
                  This tab showcases the posts with the highest number of views.
                  Only posts with more than 1 view will be featured here,
                  highlighting the most-read content in the forum.
                </p>

                <h2>Most Liked</h2>
                <p>
                  In this tab, you'll find posts that have received the most
                  likes from the community. To qualify for this tab, posts must
                  have more than 1 like.
                </p>

                <h2>Most Commented</h2>
                <p>
                  This tab lists the most commented meaning the posts with most
                  comments. The number of comments should be more than 1 in
                  order for the post to appear in this tab.
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
