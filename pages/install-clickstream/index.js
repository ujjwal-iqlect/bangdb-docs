import React from "react";
import Head from "next/head";
import Breadcrumb from "../../components/Breadcrumb";

export default function ClickStreamAppInstall() {
  return (
    <React.Fragment>
      <Head>
        <title>ClickStream App Install</title>
        <meta
          name="description"
          content="Step-by-step guide for installing ClickStream App from BangDB Appstore."
        ></meta>
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="ClickStream App Install" />
        <meta
          property="og:description"
          content="Step-by-step guide for installing ClickStream App from BangDB Appstore."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="ClickStream App Install" />
        <meta
          name="twitter:description"
          content="Step-by-step guide for installing ClickStream App from BangDB Appstore."
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
              <h1 className="article-title">ClickStream App Install</h1>
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
                  src="/assets/apps/click-stream/appstore_page.jpg"
                />

                <h2>Step 2: Search for ClickStream</h2>
                <p>
                  Use the search functionality on the BangDB Appstore page to
                  find the <strong>ClickStream</strong> application.
                </p>
                <img
                  alt="Search for ClickStream App"
                  width={"95%"}
                  height={"auto"}
                  className="mt-5 shadow"
                  src="/assets/apps/click-stream/click_stream_app.jpg"
                />

                <h2>Step 3: Open App Details</h2>
                <p>
                  After finding ClickStream, click on its app card or the{" "}
                  <strong>View Details</strong> button.
                </p>
                <img
                  alt="View ClickStream Details"
                  width={"95%"}
                  height={"auto"}
                  className="mt-5 shadow"
                  src="/assets/apps/click-stream/view_details_click_stream.jpg"
                />

                <h2>Step 4: Choose Free Trial or Purchase</h2>
                <p>
                  BangDB offers a <strong>7-day free trial</strong> for
                  ClickStream or a direct purchase option. For a free trial,
                  enable the checkbox and click <strong>Install</strong>. To
                  purchase, leave the checkbox unchecked and click{" "}
                  <strong>Install</strong>.
                </p>
                <img
                  alt="Free Trial or Purchase"
                  width={"95%"}
                  height={"auto"}
                  className="mt-5 shadow"
                  src="/assets/apps/click-stream/cs_app_free_trial.jpg"
                />

                <h2>Step 5: Click Install</h2>
                <p>Click the <strong>Install</strong> button to proceed.</p>
                <img
                  alt="Install Button"
                  width={"95%"}
                  height={"auto"}
                  className="mt-5 shadow"
                  src="/assets/apps/click-stream/Install_btn.jpg"
                />

                <h2>Step 6: Signup Popup</h2>
                <p>
                  After clicking Install, a signup popup will appear. Fill in
                  the required details to create your account.
                </p>
                <img
                  alt="Signup Popup"
                  width={"95%"}
                  height={"auto"}
                  className="mt-5 shadow"
                  src="/assets/apps/click-stream/signu_up_popup.jpg"
                />

                <h2>Step 7: Submit Signup Details</h2>
                <p>
                  Click the <strong>Sign Up</strong> button after providing the
                  necessary details.
                </p>
                <img
                  alt="Submit Signup Details"
                  width={"95%"}
                  height={"auto"}
                  className="mt-5 shadow"
                  src="/assets/apps/click-stream/signup_button_click.jpg"
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
                  src="/assets/apps/click-stream/payment_mth_sub_manual.jpg"
                />

                <h2>Step 9: Payment Details</h2>
                <p>
                  Select the quantity and toggle between USD and INR to see the
                  respective prices.
                </p>
                <img
                  alt="Payment Details"
                  width={"95%"}
                  height={"auto"}
                  className="mt-5 shadow"
                  src="/assets/apps/click-stream/qnty_unit_cs.jpg"
                />

                <h2>Step 10: Confirm Purchase</h2>
                <p>Click on <strong>Get Started</strong> to proceed.</p>
                <img
                  alt="Confirm Purchase"
                  width={"95%"}
                  height={"auto"}
                  className="mt-5 shadow"
                  src="/assets/apps/click-stream/get_started_btn.jpg"
                />

                <h2>Step 11: Razorpay Payment</h2>
                <p>
                  The Razorpay popup will open. Complete your payment by entering
                  the required details.
                </p>
                <img
                  alt="Razorpay Payment"
                  width={"95%"}
                  height={"auto"}
                  className="mt-5 shadow"
                  src="/assets/apps/click-stream/razorpay_popup.jpg"
                />

                <h2>Step 12: Payment Success</h2>
                <p>
                  After the payment is successful, a message will confirm your
                  transaction.
                </p>
                <img
                  alt="Payment Success"
                  width={"95%"}
                  height={"auto"}
                  className="mt-5 shadow"
                  src="/assets/apps/click-stream/paymemt_conformed_popup.jpg"
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
                  src="/assets/apps/click-stream/app_installation progress.jpg"
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
                  src="/assets/apps/click-stream/steps_completion_ampere_link.jpg"
                />

                <h2>Step 15: Credentials and Invoice</h2>
                <p>
                  Your login credentials (User ID and Password) and invoice will
                  be sent to the email you provided during signup.
                </p>
                <img
                  alt="Credentials and Invoice Email"
                  width={"95%"}
                  height={"auto"}
                  className="mt-5 shadow"
                  src="/assets/apps/click-stream/sample_email.jpg"
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
    props: { click_stream_sidebar: true },
  };
}
