import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
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
              <h1 className="article-title">Make calls</h1>
              <div className="article-body">
                <h2>Setup call feature for users</h2>

                <p>
                  Open the company settings and click on
                  <strong> &quot;Manage users&quot; </strong>tab.
                </p>

                <p>
                  Expand the user for whom you want to enable the calling
                  feature.
                </p>

                <img
                  alt="Company editing - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/leads-management/company_user_expanded.jpg"
                />

                <p>
                  Once you&apos;re done with your changes. Click on{" "}
                  <strong>Save Company (Draft)</strong>.
                </p>

                <p>
                  Changes are now saved locally, in order to save these changes
                  on the app. Click on <strong>Save</strong>.
                </p>

                <h2>Setup for RingCentral</h2>

                <ol>
                  <li>Go to ringcentral.com.</li>
                  <li>Click Get started, it&apos;s free.</li>
                  <li>
                    Verify your age. You must be at least 16 years old to create
                    an account.
                  </li>
                  <li>Enter your email address.</li>
                  <li>
                    Accept the Terms of Service, Privacy Notice, and Acceptable
                    Use Policy.
                  </li>
                  <li>
                    Click Next. An email will be sent to the account you
                    provided. Check your junk/spam folder if you cannot find the
                    email.
                  </li>
                  <li>
                    Open the email and click Activate account or copy and paste
                    the URL into your browser.
                  </li>

                  <ul>
                    <li>Set up your account.Enter your first and last name.</li>
                    <li>Enter your company name (optional).</li>
                    <li>Create a password.</li>
                    <li>
                      Accept the Terms of Service, Privacy Notice, and
                      Acceptable Use Policy.
                    </li>
                  </ul>
                  <li>Click Create your free account.</li>
                  <li>
                    Once your account is created you can login to your BangDB
                    account and go to the ringcentral tab while making a call
                    and login to the ringcentral account.
                  </li>
                </ol>

                <h2>Setup Twilio</h2>

                <ol>
                  <li>
                    Visit the twilio console and look for &quot;Buy a
                    number&quot;
                  </li>
                  <li>
                    Select all the criteria you are looking for in a number and
                    purchase it.
                  </li>
                  <li>
                    Visit the Company Settings and look for the user you want to
                    assign this number to.
                  </li>
                  <li>
                    Add this number in the &quot;To make phone calls&quot;
                    field.
                  </li>
                </ol>

                <h2>Use calling feature</h2>

                <p>
                  Before using this feature, make sure that your setup is done
                  correctly.
                </p>

                <p>
                  Open any lead, scroll down to Calls section &amp; click on
                  &quot;Call&quot; button.
                </p>

                <img
                  alt="Click on crm settings - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/leads-management/click_on_call.jpg"
                />

                <p>
                  A modal will appear as shown below. Choose an operator
                  (currently, we support Twilio and RingCentral). Enter the
                  number you want to call and click the call button.
                </p>

                <img
                  alt="Click on crm settings - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/leads-management/call_modal.jpg"
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
    props: { leads_management_sidebar: true },
  };
}
