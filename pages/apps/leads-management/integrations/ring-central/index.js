import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../../../components/Breadcrumb";

export default function RingCentralIntegration() {
  return (
    <React.Fragment>
      <Head>
        <title>Ring Central</title>
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
              <h1 className="article-title">Ring Central</h1>
              <div className="article-body">
                <div className="article-body">
                  <p>
                    From the top right settings drop down select
                    <strong> &quot;Manage Extensions&quot; </strong>
                    and click on Ring Central.
                  </p>

                  <img
                    alt="Click on crm settings - BangDB"
                    width={"95%"}
                    height={"auto"}
                    src="/assets/apps/leads-management/go-to-manage-extensions.jpg"
                  />

                  <p>
                    Click on the link for{" "}
                    <strong>RingCentral Developer Console</strong>.
                  </p>

                  <img
                    alt="Click on manage company - BangDB"
                    width={"95%"}
                    height={"auto"}
                    src="/assets/apps/leads-management/twilio-dev-console.jpg"
                  />

                  <p>
                    After being redirected you can either login to your existing
                    Ringcentral account or sign up for free.
                  </p>

                  <img
                    alt="Click on manage company - BangDB"
                    width={"95%"}
                    height={"auto"}
                    src="/assets/apps/leads-management/ring-central-developers.jpg"
                  />

                  <p>
                    Once logged in you can click on &quot;App&quot; from the
                    sidebar.
                  </p>

                  <img
                    alt="Click on create"
                    width={"95%"}
                    height={"auto"}
                    src="/assets/apps/leads-management/ring-central-apps.jpg"
                  />

                  <p>Click on the &quot;Register App&quot; button.</p>

                  <img
                    alt="Click on create"
                    width={"95%"}
                    height={"auto"}
                    src="/assets/apps/leads-management/click-on-register-app.jpg"
                  />

                  <p>
                    Select &quot;REST API App&quot; as the type of your app.
                  </p>

                  <img
                    alt="Click on create"
                    width={"95%"}
                    height={"auto"}
                    src="/assets/apps/leads-management/rc-rest-api-app.jpg"
                  />

                  <p>Click on &quot;Next&quot;</p>

                  <img
                    alt="Click on create"
                    width={"95%"}
                    height={"auto"}
                    src="/assets/apps/leads-management/rc-rest-api-next.jpg"
                  />

                  <p>
                    Fill your app name and description. For other settings you
                    can refer to your Ampere&apos;s page where these configs
                    will be mentioned.
                  </p>

                  <img
                    alt="Click on create"
                    width={"95%"}
                    height={"auto"}
                    src="/assets/apps/leads-management/rc-setup-app.jpg"
                  />

                  <ol>
                    <li>Select 3-legged OAuth flow for Authentication.</li>
                    <li>Client-side web App as the app type.</li>
                    <li>
                      The OAuth Redirect URI can be taken from the extensions
                      tab in Ampere.
                    </li>
                    <li>
                      The scopes can also be taken from the extensions tab in
                      Ampere.
                    </li>
                  </ol>

                  <p>
                    Once all things are filled up you can click on the
                    &quot;Create&quot; button, after that it will give you the
                    &quot;Client ID&quot; and the &quot;Client Secret&quot;,
                    which you can copy and paste in the Ampere&apos;s extensions
                    tab.
                  </p>

                  <img
                    alt="Click on create"
                    width={"95%"}
                    height={"auto"}
                    src="/assets/apps/leads-management/rc-app-dashboard.jpg"
                  />

                  <p>
                    Once you have pasted these in Ampere. It will show you the
                    option to login, where you can login using the same account
                    you have created with RingCentral. And once the
                    authentication is completed, you will be able to send
                    receive calls and messages straight from Ampere.
                  </p>
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
