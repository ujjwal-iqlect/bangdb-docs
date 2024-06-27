import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../../../components/Breadcrumb";
import Divider from "@mui/material/Divider";

export default function Overview() {
  return (
    <React.Fragment>
      <Head>
        <title>Filter posts in forum</title>
        <meta name="description" content="Setup web forms"></meta>
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Filter posts in BangDB Forum" />
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
        <meta property="twitter:title" content="Filter posts in BangDB Forum" />
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
              <h1 className="article-title">Filter Posts</h1>
              <div className="article-body">
                <p>In order to filter the posts, there are 2 ways.</p>

                <ol>
                  <li>Quick Filters</li>
                  <li>Advanced Filters</li>
                </ol>

                <h2>Quick Filters</h2>

                <p>
                  In order to use the quick filters, visit the home page of the
                  forum and in the right-sideabr the &quot;quick filter&quot;
                  options are provided.
                </p>

                <img
                  alt="Click on settings - BangDB Forum"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/forum/easy-sidebar-filters.jpg"
                />

                <p>
                  In order to apply the filter, just check the checkbox and the
                  posts will get filtered.
                </p>

                <img
                  alt="Click on settings - BangDB Forum"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/forum/filtered-results2.jpg"
                />

                <h2>Advanced Filters</h2>

                <p>
                  In order to use the advanced filters, visit the home page of
                  the forum and click on the &quot;filter&quot; icon.
                </p>

                <img
                  alt="Click on settings - BangDB Forum"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/forum/click-on-filter.jpg"
                />

                <p>
                  You will see a filter slide-over where you can apply various
                  filters to suit your needs. In Advanced filters, You can use
                  different types of filters and run queries, such as filtering
                  out posts where the status is not{" "}
                  <strong>&quot;In Progress&quot;</strong> or finding posts
                  where the status is <strong>&quot;Open&quot;</strong> and the
                  post type is not
                  <strong>&quot;X&quot;</strong>.
                </p>

                <p>
                  In this example, we are filtering all posts with the status{" "}
                  <strong>&quot;In Progress&quot;</strong>.
                </p>

                <p>
                  Once you have added the filters, click on{" "}
                  <strong>&quot;Find All&quot;</strong>.
                </p>

                <img
                  alt="Click on settings - BangDB Forum"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/forum/click-on-find-all.jpg"
                />

                <p>
                  Now it will only show the posts where status is{" "}
                  <strong>&quot;In Progress&quot;</strong>.
                </p>

                <img
                  alt="Search results - BangDB Forum"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/forum/filtered-results.jpg"
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
