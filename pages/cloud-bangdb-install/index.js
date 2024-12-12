import React from "react";
import Head from "next/head";
import Breadcrumb from "../../components/Breadcrumb";

export default function CloudBangDBInstall() {
  return (
    <React.Fragment>
      <Head>
        <title>Cloud BangDB Install</title>
        <meta
          name="description"
          content="Step-by-step guide for installing Cloud BangDB."
        ></meta>
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Cloud BangDB Install" />
        <meta
          property="og:description"
          content="Step-by-step guide for installing Cloud BangDB."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="Cloud BangDB Install" />
        <meta
          name="twitter:description"
          content="Step-by-step guide for installing Cloud BangDB."
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
              <h1 className="article-title">Cloud BangDB Install</h1>
              <div className="article-body">
                <h2>Step 1: Visit BangDB Website</h2>
                <p>
                  Go to the BangDB website by clicking on this{" "}
                  <a
                    href="https://bangdb.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    link
                  </a>{" "}
                  or paste the URL in your browser.
                </p>
                <img
                  alt="BangDB Website Home"
                  width={"95%"}
                  height={"auto"}
                  className="mt-5 shadow"
                  src="/assets/cloud-bangdb-install/website_page.jpg"
                />

                <h2>Step 2: Click "Get Started on BangDB Cloud"</h2>
                <p>
                  On the BangDB website, locate and click on the{" "}
                  <strong>Get Started</strong> button for BangDB Cloud.
                </p>
                <img
                  alt="Get Started Button"
                  width={"95%"}
                  height={"auto"}
                  className="mt-5 shadow"
                  src="/assets/cloud-bangdb-install/click_on_get_started_page.jpg"
                />

                <h2>Step 3: Redirect to BangDB Cloud Install Page</h2>
                <p>
                  You will be redirected to the BangDB Cloud install page with
                  pricing details.
                </p>
                <img
                  alt="BangDB Cloud Install Page"
                  width={"95%"}
                  height={"auto"}
                  className="mt-5 shadow"
                  src="/assets/cloud-bangdb-install/price_page.jpg"
                />

                <h2>Step 4: Explore Pricing Options</h2>
                <p>
                  On the pricing page, you can view both <strong>monthly</strong>{" "}
                  and <strong>yearly</strong> pricing. Toggle between USD and
                  INR currencies to see changes.
                </p>
                <img
                  alt="Pricing Options"
                  width={"95%"}
                  height={"auto"}
                  className="mt-5 shadow"
                  src="/assets/cloud-bangdb-install/mothly_yearly.jpg"
                />

                <h2>Step 5: Select a Subscription</h2>
                <p>
                  From this page, choose one of the three options:{" "}
                  <strong>Community, Base, or Pro</strong>. Select any
                  subscription based on your preference.
                </p>
                <img
                  alt="Subscription Options"
                  width={"95%"}
                  height={"auto"}
                  className="mt-5 shadow"
                  src="/assets/cloud-bangdb-install/price_page.jpg"
                />

                <h2>Step 6: Option for Free Trial</h2>
                <p>
                  To use the free version or trial, select the{" "}
                  <strong>Community</strong> version and click on the{" "}
                  <strong>Get Started</strong> button.
                </p>
                <img
                  alt="Free Trial Selection"
                  width={"95%"}
                  height={"auto"}
                  className="mt-5 shadow"
                  src="/assets/cloud-bangdb-install/get_started_price_page.jpg"
                />

                <h2>Step 7: Sign Up</h2>
                <p>
                  After clicking the Get Started button, a signup popup will
                  appear. Fill in the basic details required to sign up.
                </p>
                <img
                  alt="Signup Popup"
                  width={"95%"}
                  height={"auto"}
                  className="mt-5 shadow"
                  src="/assets/cloud-bangdb-install/signup_page.jpg"
                />

                <h2>Step 8: Complete Signup</h2>
                <p>
                  Once you have provided the required details, click the{" "}
                  <strong>Sign Up</strong> button.
                </p>
                <img
                  alt="Complete Signup"
                  width={"95%"}
                  height={"auto"}
                  className="mt-5 shadow"
                  src="/assets/cloud-bangdb-install/signuup_button.jpg"
                />

                <h2>Step 9: Installation Process</h2>
                <p>
                  Once signup is completed, the BangDB Cloud installation
                  process will start. The progress bar will display the steps
                  and their estimated completion time.
                </p>
                <img
                  alt="Installation Progress"
                  width={"95%"}
                  height={"auto"}
                  className="mt-5 shadow"
                  src="/assets/cloud-bangdb-install/installation_page.jpg"
                />
                <h2>Step 10: Installation Confirmation</h2>
                <p>
                  Once all the steps are completed, the same page will display an
                  <strong>installation confirmation</strong>. You will also receive the
                  <strong>Ampere link</strong> in the same popup. Use the link to visit your
                  configured instance.
                </p>
                <img
                  alt="Installation Confirmation Popup"
                  width={"95%"}
                  height={"auto"}
                  className="mt-5 shadow"
                  src="/assets/cloud-bangdb-install/steps_completion.jpg"
                />


                <h2>Step 11: Completion</h2>
                <p>
                  The steps will be processed sequentially. Completed steps will
                  show a green check mark.
                </p>
                <img
                  alt="Completion with Green Checkmarks"
                  width={"95%"}
                  height={"auto"}
                  className="mt-5 shadow"
                  src="/assets/cloud-bangdb-install/visit_ampere.jpg"
                />

                <h2>Step 11: Receive Credentials</h2>
                <p>
                  After all steps are completed, your User ID, Password, and
                  Ampere Link will be sent to the email ID you provided during
                  signup.
                </p>
                <img
                  alt="Credentials Email"
                  width={"95%"}
                  height={"auto"}
                  className="mt-5 shadow"
                  src="/assets/cloud-bangdb-install/email_sample.jpg"
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
    props: { app_mon_sidebar: true },
  };
}
