import React from "react";
import Head from "next/head";
import Divider from "@mui/material/Divider";
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
              <h1 className="article-title">Category and Tags</h1>
              <div className="article-body">
                <h2>Category</h2>

                <p>
                  To define post in a better way for faster and contextual
                  resolution, user should to assign categories and tags if
                  necessary. For example, if a post belongs to marketing then
                  &quot;Marketing&quot; could be a catgeory, or for technology
                  we can define &quot;Technology&quot; and so on.
                </p>

                <p>
                  Few useful categories could be like &quot;Backend&quot;,
                  &quot;Frontend&quot;, &quot;Sales&quot;,
                  &quot;Marketing&quot;, &quot;Backend&quot;,
                  &quot;Frontend&quot;, &quot;Operations&quot;,
                  &quot;Database&quot;, &quot;Order&quot; etc. Define these as
                  relevant to you.
                </p>

                <h2>Tags</h2>

                <p>
                  Tags are tiny labels which can further narrow down the sub
                  category or area for better management. You may define max 10
                  categories and each category can have max 10 tags.
                </p>

                <Divider sx={{ my: 5 }} />

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
                  From the settings page, click on{" "}
                  <strong>&quot;Category and Tags&quot;</strong>.
                </p>

                <p>
                  In order to create a new category, Click on &quot;Create new
                  category&quot; box.
                </p>

                <img
                  alt="Click on crm settings - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/forum/click-on-create-category.jpg"
                />

                <p>Fill the category details and click on save.</p>

                <img
                  alt="Click on crm settings - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/forum/add-category-form.jpg"
                />

                <p>
                  Once you have added the categories as per your requirement,
                  Click on <strong>&quot;Save&quot;</strong>.
                </p>

                <img
                  alt="Click on crm settings - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/forum/click-on-category-save.jpg"
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
