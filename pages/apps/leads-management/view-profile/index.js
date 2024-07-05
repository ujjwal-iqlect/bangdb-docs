import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../../components/Breadcrumb";

export default function Motivation() {
  return (
    <React.Fragment>
      <Head>
        <title>Overview</title>
        <meta
          name="description"
          content="Motivation - Why BangDB?. The motivation behind BangDB."
        ></meta>
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
              <h1 className="article-title">Profile</h1>
              <div className="article-body">
                <div className="article-body">
                  <p>
                    In order to view or edit the profile, click on the mini
                    profile icon on top header.
                  </p>

                  <img
                    alt="Click on crm settings - BangDB"
                    width={"95%"}
                    height={"auto"}
                    src="/assets/apps/leads-management/mini_profile.jpg"
                  />

                  <p>Then click on &quot;Edit profile&quot;.</p>

                  <img
                    alt="Click on manage company - BangDB"
                    width={"95%"}
                    height={"auto"}
                    src="/assets/apps/leads-management/click-on-edit-profile.jpg"
                  />

                  <p>
                    This is the profile page, from here you can edit first name,
                    last name, e-mail address, phone number, profile picture,
                    country , state etc. You can change password and re-generate
                    and in-validate the API key etc.
                  </p>

                  <img
                    alt="Click on manage company - BangDB"
                    width={"95%"}
                    height={"auto"}
                    src="/assets/apps/leads-management/profile.jpg"
                  />

                </div>
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
    props: { leads_management_sidebar: true },
  };
}
