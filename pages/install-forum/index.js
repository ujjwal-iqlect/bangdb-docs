import React from "react";
import Head from "next/head";
import Breadcrumb from "../../components/Breadcrumb";

export default function BangDBForumInstall() {
  return (
    <React.Fragment>
      <Head>
        <title>BangDB Forum Install</title>
        <meta
          name="description"
          content="Step-by-step guide for installing BangDB Forum from BangDB Appstore."
        ></meta>
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="BangDB Forum Install" />
        <meta
          property="og:description"
          content="Step-by-step guide for installing BangDB Forum from BangDB Appstore."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="BangDB Forum Install" />
        <meta
          name="twitter:description"
          content="Step-by-step guide for installing BangDB Forum from BangDB Appstore."
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
              <h1 className="article-title">BangDB Forum Install</h1>
              <div className="article-body">
                <h2>Step 1: Visit BangDB Appstore</h2>
                <p>
                  Go to the BangDB Appstore by clicking on this{" "}
                  <a
                    href="https://appstore.bangdb.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    link
                  </a>{" "}
                  or paste the URL in your browser.
                </p>
                <img
                  alt="BangDB Appstore Home"
                  width={"95%"}
                  height={"auto"}
                  className="mt-5 shadow"
                  src="/assets/apps/forum/appstore_page.jpg"
                />

                <h2>Step 2: Search for BangDB Forum</h2>
                <p>
                  Use the search bar on the BangDB Appstore page to search for{" "}
                  <strong>BangDB Forum</strong>.
                </p>
                <img
                  alt="Search for BangDB Forum"
                  width={"95%"}
                  height={"auto"}
                  className="mt-5 shadow"
                  src="/assets/apps/forum/forum_select.jpg"
                />

                <h2>Step 3: Open App Details</h2>
                <p>
                  Once you find BangDB Forum, click on its app card or the{" "}
                  <strong>View Details</strong> button.
                </p>
                <img
                  alt="View BangDB Forum Details"
                  width={"95%"}
                  height={"auto"}
                  className="mt-5 shadow"
                  src="/assets/apps/forum/forum_view_details.jpg"
                />

                <h2>Step 4: Choose Free Trial or Purchase</h2>
                <p>
                  You can opt for a <strong>7-day free trial</strong> or directly
                  purchase the app. For a free trial, enable the checkbox and
                  click <strong>Install</strong>. To purchase, leave the checkbox
                  unchecked and click <strong>Install</strong>.
                </p>
                <img
                  alt="Free Trial or Purchase"
                  width={"95%"}
                  height={"auto"}
                  className="mt-5 shadow"
                  src="/assets/apps/forum/forum_free_trial.jpg"
                />

                <h2>Step 5: Click Install</h2>
                <p>Click the <strong>Install</strong> button to proceed.</p>
                <img
                  alt="Install Button"
                  width={"95%"}
                  height={"auto"}
                  className="mt-5 shadow"
                  src="/assets/apps/forum/forum_install_btn.jpg"
                />

                <h2>Step 6: Signup Popup</h2>
                <p>
                  After clicking Install, a signup popup will appear. Fill in the
                  required details.
                </p>
                <img
                  alt="Signup Popup"
                  width={"95%"}
                  height={"auto"}
                  className="mt-5 shadow"
                  src="/assets/apps/forum/signu_up_popup.jpg"
                />

                <h2>Step 7: Submit Signup Details</h2>
                <p>Click the <strong>Sign Up</strong> button after entering your details.</p>
                <img
                  alt="Submit Signup"
                  width={"95%"}
                  height={"auto"}
                  className="mt-5 shadow"
                  src="/assets/apps/forum/signup_button_click.jpg"
                />

                <h2>Step 8: Select Payment Method</h2>
                <p>
                  Choose a payment method: <strong>manual</strong> or{" "}
                  <strong>subscription</strong>.
                </p>
                <img
                  alt="Select Payment Method"
                  width={"95%"}
                  height={"auto"}
                  className="mt-5 shadow"
                  src="/assets/apps/forum/select_payment_manual.jpg"
                />

                <h2>Step 9: Payment Amount and Quantity</h2>
                <p>
                  Select the quantity and toggle between USD and INR to see the
                  respective prices.
                </p>
                <img
                  alt="Payment Details"
                  width={"95%"}
                  height={"auto"}
                  className="mt-5 shadow"
                  src="/assets/apps/forum/forum_qnty_popup.jpg"
                />

                <h2>Step 10: Confirm Purchase</h2>
                <p>Click on <strong>Get Started</strong> to proceed.</p>
                <img
                  alt="Confirm Purchase"
                  width={"95%"}
                  height={"auto"}
                  className="mt-5 shadow"
                  src="/assets/apps/forum/forum_get_started_btn.jpg"
                />

                <h2>Step 11: Razorpay Popup</h2>
                <p>
                  The Razorpay popup will open. Complete your payment by entering
                  the required details.
                </p>
                <img
                  alt="Razorpay Payment"
                  width={"95%"}
                  height={"auto"}
                  className="mt-5 shadow"
                  src="/assets/apps/forum/razorpay_popup.jpg"
                />

                <h2>Step 12: Payment Success</h2>
                <p>
                  After the payment, a success message will confirm your
                  transaction.
                </p>
                <img
                  alt="Payment Success"
                  width={"95%"}
                  height={"auto"}
                  className="mt-5 shadow"
                  src="/assets/apps/forum/paymemt_conformed_popup.jpg"
                />

                <h2>Step 13: Installation Progress</h2>
                <p>
                  The installation process begins, showing a progress bar with
                  estimated time and steps.
                </p>
                <img
                  alt="Installation Progress"
                  width={"95%"}
                  height={"auto"}
                  className="mt-5 shadow"
                  src="/assets/apps/forum/app_installation progress.jpg"
                />

                <h2>Step 14: Installation Success</h2>
                <p>
                  A success message will appear along with the Ampere link for
                  accessing your purchased app.
                </p>
                <img
                  alt="Installation Success"
                  width={"95%"}
                  height={"auto"}
                  className="mt-5 shadow"
                  src="/assets/apps/forum/steps_completion_ampere_link.jpg"
                />

                <h2>Step 15: Credentials and Invoice</h2>
                <p>
                  Your login credentials (User ID and Password) and invoice will
                  be sent to the email you provided during signup.
                </p>
                <img
                  alt="Credentials and Invoice"
                  width={"95%"}
                  height={"auto"}
                  className="mt-5 shadow"
                  src="/assets/apps/forum/sample_email.jpg"
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
