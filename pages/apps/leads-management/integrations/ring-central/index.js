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
                    src="/assets/apps/leads-management/twilio-login.jpg"
                  />

                  <p>
                    After successfully logging in, on the Twilio Admin Console
                    Page you can find the following credentials which need to be
                    pasted in &quot;Manage Extensions&quot; tab in ampere.
                  </p>

                  <ul>
                    <li>Account SID</li>
                    <li>Auth Token</li>
                  </ul>

                  <img
                    alt="Click on create"
                    width={"95%"}
                    height={"auto"}
                    src="/assets/apps/leads-management/twilio-develop-dashboard.jpg"
                  />

                  <p>
                    To receive and make calls using Twilio you will also need a
                    phone number from Twilio. If you already have this then you
                    can use the same one. Else you can buy a new one or get one
                    for trial.
                  </p>

                  <img
                    alt="Click on create"
                    width={"95%"}
                    height={"auto"}
                    src="/assets/apps/leads-management/click-on-get-a-trial-phone-number.jpg"
                  />

                  <p>
                    This number will also have to be linked with a TWIML app. To
                    do that :
                  </p>

                  <ol>
                    <li>select the TwiML apps option from the sidebar</li>

                    <img
                      alt="Click on create"
                      width={"95%"}
                      height={"auto"}
                      src="/assets/apps/leads-management/twiml-apps.jpg"
                    />

                    <li>Click on &quot;Create New App&quot;</li>

                    <img
                      alt="Click on create"
                      width={"95%"}
                      height={"auto"}
                      src="/assets/apps/leads-management/create-new-twiml-app.jpg"
                    />

                    <li>
                      Paste the URL provided on your extensions panel in ampere
                      as the Voice Configuration URL and messaging URL
                    </li>
                  </ol>

                  <p>
                    After successfully registering the App you can take the
                    TwiML App SID and paste it in Ampere&apos;s extensions tab.
                  </p>

                  <img
                    alt="Click on create"
                    width={"95%"}
                    height={"auto"}
                    src="/assets/apps/leads-management/twiml-app-sid.jpg"
                  />

                  <p>
                    You will also need to link the number you have to the TwiML
                    app. To do that you can - Click on &quot;Active
                    Numbers&quot; from the sidebar
                  </p>

                  <img
                    alt="Click on create"
                    width={"95%"}
                    height={"auto"}
                    src="/assets/apps/leads-management/twilio-active-numbers.jpg"
                  />

                  <p>Select the just created number</p>

                  <img
                    alt="Click on create"
                    width={"95%"}
                    height={"auto"}
                    src="/assets/apps/leads-management/select-twilio-number.jpg"
                  />

                  <p>
                    After clicking it will give you an option to &quot;configure
                    with&quot; in which you can select the &quot;TwiML App&quot;
                    that you have setup to work with Ampere.
                  </p>

                  <img
                    alt="Click on create"
                    width={"95%"}
                    height={"auto"}
                    src="/assets/apps/leads-management/select-twiml-app.jpg"
                  />

                  <p>
                    After the Twiml app set up is done As a last step you need
                    to create an APIKEY and API Secret. To do this simply click
                    on the &quot;Go to API keys&quot; button on the Admin Panel
                  </p>

                  <img
                    alt="Click on create"
                    width={"95%"}
                    height={"auto"}
                    src="/assets/apps/leads-management/go-to-twilio-api-keys.jpg"
                  />

                  <p>
                    From this page now you can create your API key and secret to
                    paste it in the Ampere&apos;s extension tab.
                  </p>

                  <img
                    alt="Click on create"
                    width={"95%"}
                    height={"auto"}
                    src="/assets/apps/leads-management/twilio-secret.jpg"
                  />

                  <p>
                    Once you have successfully generated and submitted the
                    following credentials in ampere. Your Twilio extension will
                    get validated and if its successful you will be able to make
                    and receive calls directly from your Ampere.
                  </p>

                  <ul>
                    <li>AccountSid</li>
                    <li>AuthToken</li>
                    <li>Application SID</li>
                    <li>API KEY</li>
                    <li>API SECRET </li>
                  </ul>
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
