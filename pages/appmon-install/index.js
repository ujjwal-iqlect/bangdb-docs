import React from "react";
import Head from "next/head";
import Breadcrumb from "../../components/Breadcrumb";

export default function AppMonInstall() {
  return (
    <React.Fragment>
      <Head>
        <title>AppMon Install</title>
        <meta
          name="description"
          content="Step-by-step guide for installing AppMon from BangDB Appstore."
        ></meta>
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="AppMon Install" />
        <meta
          property="og:description"
          content="Step-by-step guide for installing AppMon from BangDB Appstore."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="AppMon Install" />
        <meta
          name="twitter:description"
          content="Step-by-step guide for installing AppMon from BangDB Appstore."
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
              <h1 className="article-title">AppMon Install</h1>
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
                  or paste the URL in your browser <strong>https://appstore.bangdb.com/</strong>.
                </p>
                <img
                  alt="BangDB Appstore Home"
                  width={"95%"}
                  height={"auto"}
                  className="mt-5 shadow"
                  src="/assets/apps/app-mon/appstore_page.jpg"
                />

                <h2>Step 2: Search for AppMon</h2>
                <p>
                  Once on the BangDB Appstore page, use the search functionality
                  to find the <strong>AppMon</strong> application.
                </p>
                <img
                  alt="Search for AppMon App"
                  width={"95%"}
                  height={"auto"}
                  className="mt-5 shadow"
                  src="/assets/apps/app-mon/appmon_app.jpg"
                />

                <h2>Step 3: Open App Details</h2>
                <p>
                  After finding AppMon, click on its app card or the{" "}
                  <strong>View Details</strong> button.
                </p>
                <img
                  alt="View AppMon Details"
                  width={"95%"}
                  height={"auto"}
                  className="mt-5 shadow"
                  src="/assets/apps/app-mon/click_on_view_details.jpg"
                />

                <h2>Step 4: Select Free Trial or Purchase</h2>
                <p>
                  BangDB offers a <strong>7-day free trial</strong> for AppMon
                  or a direct purchase option. Enable the checkbox for a free
                  trial and click <strong>Install</strong>. If you don’t want a
                  trial, leave the checkbox unchecked and click{" "}
                  <strong>Install</strong>.
                </p>
                <img
                  alt="Free Trial or Purchase"
                  width={"95%"}
                  height={"auto"}
                  className="mt-5 shadow"
                  src="/assets/apps/app-mon/check_box_free_trial.jpg"
                />

                <h2>Step 5: Click Install</h2>
                <p>Click the <strong>Install</strong> button to proceed.</p>
                <img
                  alt="Install Button"
                  width={"95%"}
                  height={"auto"}
                  className="mt-5 shadow"
                  src="/assets/apps/app-mon/click_on_install.jpg"
                />

                <h2>Step 6: Signup Popup</h2>
                <p>
                  After clicking on install button then it will redirects to the signup popup
                </p>
                <img
                  alt="Signup Popup"
                  width={"95%"}
                  height={"auto"}
                  className="mt-5 shadow"
                  src="/assets/apps/app-mon/signu_up_popup.jpg"
                />

                <h2>Step 7:  Fill Required Details in the Signup Popup</h2>
                <p>
                  Fill the details which is asked in the signup popup and click on <strong>Signup Button.</strong>
                </p>
                <img
                  alt="Signup Popup"
                  width={"95%"}
                  height={"auto"}
                  className="mt-5 shadow"
                  src="/assets/apps/app-mon/signup_button_click.jpg"
                />


                <h2>Step 8: Payment Method Selection</h2>
                <p>
                  A popup will appear asking you to select a payment method:
                  <strong> manual</strong> or <strong>subscription</strong>.
                </p>
                <img
                  alt="Payment Method Selection"
                  width={"95%"}
                  height={"auto"}
                  className="mt-5 shadow"
                  src="/assets/apps/app-mon/payment_sub_manual_popup.jpg"
                />

                <h2>Step 9: Payment Amount and Quantity</h2>
                <p>
                  Select the quantity and payment mode. Toggle between USD and
                  INR to view pricing.
                </p>
                <img
                  alt="Select Quantity and Payment"
                  width={"95%"}
                  height={"auto"}
                  className="mt-5 shadow"
                  src="/assets/apps/app-mon/quantity_popup.jpg"
                />

                <h2>Step 10: Confirm Purchase</h2>
                <p>
                  After selecting the payment options, click{" "}
                  <strong>Get Started</strong> to proceed.
                </p>
                <img
                  alt="Confirm Purchase"
                  width={"95%"}
                  height={"auto"}
                  className="mt-5 shadow"
                  src="/assets/apps/app-mon/get_started_button.jpg"
                />

                <h2>Step 11: Razorpay Payment</h2>
                <p>
                  Complete the payment via the Razorpay popup that appears.
                </p>
                <img
                  alt="Razorpay Payment"
                  width={"95%"}
                  height={"auto"}
                  className="mt-5 shadow"
                  src="/assets/apps/app-mon/razorpay_popup.jpg"
                />

                <h2>Step 12: Payment Success</h2>
                <p>
                  After successful payment, a message will confirm your
                  transaction.
                </p>
                <img
                  alt="Payment Success Message"
                  width={"95%"}
                  height={"auto"}
                  className="mt-5 shadow"
                  src="/assets/apps/app-mon/paymemt_conformed_popup.jpg"
                />

                <h2>Step 13: Installation Progress</h2>
                <p>
                  The installation process begins, showing a progress bar and
                  estimated time for completion.
                </p>
                <img
                  alt="Installation Progress"
                  width={"95%"}
                  height={"auto"}
                  className="mt-5 shadow"
                  src="/assets/apps/app-mon/app_installation progress.jpg"
                />

                <h2>Step 14: Installation Success</h2>
                <p>
                  After completion, a success message and Ampere link will be
                  displayed to log into your purchased app.
                </p>
                <img
                  alt="Installation Success Message"
                  width={"95%"}
                  height={"auto"}
                  className="mt-5 shadow"
                  src="/assets/apps/app-mon/steps_completion_ampere_link.jpg"
                />

                <h2>Step 15: Credentials and Invoice</h2>
                <p>
                  Your login credentials (User ID and Password) and invoice will
                  be sent to the email provided during signup.
                </p>
                <img
                  alt="Credentials and Invoice Email"
                  width={"95%"}
                  height={"auto"}
                  className="mt-5 shadow"
                  src="/assets/apps/app-mon/sample_email.jpg"
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
