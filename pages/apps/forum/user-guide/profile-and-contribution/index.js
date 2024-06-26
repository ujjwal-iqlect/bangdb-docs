import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../../../components/Breadcrumb";
// import Divider from "@mui/material/Divider";

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
              <h1 className="article-title">Profile and Contribution</h1>
              <div className="article-body">
                <p>
                  In order to see your profile, click on the profile icon on the
                  header and the click on &quot;View Profile&quot;.
                </p>

                <img
                  alt="Click on settings - BangDB Forum"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/forum/click-on-view-profile.jpg"
                />

                <h2>Dashboard</h2>

                <p>
                  This section provides a comprehensive overview of your
                  activity and contributions within the community. You&apos;ll find
                  detailed statistics along with visual charts, making it easy
                  to track your engagement and impact over time.
                </p>

                <img
                  alt="Click on crm settings - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/forum/dashboard.jpg"
                />

                <h2>My Latest Posts</h2>

                <p>
                  In order to see the posts that are creted by you. Click on
                  &quot;My Latest Posts&quot;. In this section, you will see the
                  list of all the posts created by you. You can also apply time
                  based filter and category based filter on the posts by using
                  the dropdowns above.
                </p>

                <img
                  alt="Click on crm settings - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/forum/my-latest-posts.jpg"
                />

                <h2>Activity</h2>

                <p>
                  In order to see all your activity across the forum. Click on
                  &quot;Activity&quot;. In this section, you will see the list
                  of all the activities done by you. You can also activity type
                  filter.
                </p>

                <p>In this section you can access the following :</p>

                <ol>
                  <li>All the posts liked by you</li>
                  <li>All the posts followed by you</li>
                  <li>All the posts viewed by you</li>
                  <li>All the comments done by you</li>
                  <li>All the comments liked by you</li>
                  <li>All the comments dis-liked by you</li>
                </ol>

                <img
                  alt="Click on crm settings - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/forum/activity.jpg"
                />

                <h2>Manage Profile</h2>

                <p>
                  From this section, you can edit your first name, last name,
                  email address, phone number, country &amp; state.
                </p>

                <p>
                  Once you&apos;re done with the changes, Click on{" "}
                  <strong>&quot;Save Details&quot;</strong>.
                </p>

                <img
                  alt="Click on crm settings - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/forum/manage-profile.jpg"
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
