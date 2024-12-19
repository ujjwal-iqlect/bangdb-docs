import React from "react";
import Head from "next/head";
import Breadcrumb from "../../components/Breadcrumb"

export default function TicketingSystemBangDB() {
  return (
    <React.Fragment>
      <Head>
        <title>Ticketing System within BangDB</title>
        <meta
          name="description"
          content="Step-by-step guide for using the Ticketing System within BangDB."
        ></meta>
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Ticketing System within BangDB" />
        <meta
          property="og:description"
          content="Step-by-step guide for using the Ticketing System within BangDB."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="Ticketing System within BangDB" />
        <meta
          name="twitter:description"
          content="Step-by-step guide for using the Ticketing System within BangDB."
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
              <h1 className="article-title">Ticketing System within BangDB</h1>
              <div className="article-body">
                <h2>From All the Apps</h2>
                <p>
                  You can access the <strong>Ticketing System</strong> from any
                  BangDB app that supports the feature. Navigate to the{" "}
                  <strong>Help</strong> or <strong>Support</strong> section
                  within the app and follow the instructions to raise a ticket.
                </p>

                <h2>From Website</h2>
                <p>
                  Visit the BangDB website and navigate to the{" "}
                  <strong>Support</strong> or <strong>Help Center</strong>.
                  Locate the <strong>Raise a Ticket</strong> option and click on
                  it. Follow the prompts to create a ticket and provide the
                  required details.
                </p>
                <h2>From Leads Management App</h2>
                <h3>Step 1: Open the Leads Management App</h3>
                <p>
                  Open the Leads Management App. This will take you to the
                  <strong> Review Page</strong>.
                </p>
                <img
                  alt="Leads Management App Review Page"
                  width={"95%"}
                  height={"auto"}
                  className="mt-5 shadow"
                  src="/assets/ticketing/home_page.jpg"
                />

                <h3>Step 2: Click on Need Help Button</h3>
                <p>
                  Click the <strong>Need Help</strong> button in the app to
                  proceed.
                </p>
                <img
                  alt="Need Help Button"
                  width={"95%"}
                  height={"auto"}
                  className="mt-5 shadow"
                  src="/assets/ticketing/click_on_need_help_btn.jpg"
                />

                <h3>Step 3: Open the Issue Creation Popup</h3>
                <p>
                  A small popup will open to allow you to create an issue.
                </p>
                <img
                  alt="Issue Creation Popup"
                  width={"95%"}
                  height={"auto"}
                  className="mt-5 shadow"
                  src="/assets/ticketing/after_click_opens_ticket_creation_page.jpg"
                />

                <h3>Step 4: Fill in Issue Details</h3>
                <p>
                  In the popup, select the <strong>Issue Type</strong> from the
                  dropdown. The options available are:
                </p>
                <ul>
                  <li>A. Refund</li>
                  <li>B. Issue</li>
                  <li>C. Discussion</li>
                  <li>D. Feature Request</li>
                </ul>
                <p>
                  Add a <strong>Title</strong> and a <strong>Description</strong>
                  . If required, attach any files to support your ticket.
                </p>
                <img
                  alt="Fill Issue Details"
                  width={"95%"}
                  height={"auto"}
                  className="mt-5 shadow"
                  src="/assets/ticketing/fill_required_details.jpg"
                />

                <h3>Step 5: Submit the Ticket</h3>
                <p>
                  After filling in the required details, click on the{" "}
                  <strong>Submit</strong> button.
                </p>
                <img
                  alt="Submit Ticket"
                  width={"95%"}
                  height={"auto"}
                  className="mt-5 shadow"
                  src="/assets/ticketing/click_on_submit.jpg"
                />

                <h3>Step 6: Confirmation and Email Notification</h3>
                <p>
                  After submitting, you will receive a confirmation of the ticket
                  creation along with an email to track the ticket. Below is a
                  sample image of the email you will receive.
                </p>
                <img
                  alt="Email Notification for Ticket"
                  width={"95%"}
                  height={"auto"}
                  className="mt-5 shadow"
                  src="/assets/ticketing/sample_email.jpg"
                />

                <h3>Step 7: View Ticket from Email</h3>
                <p>
                  Click on the <strong>View Post</strong> button in the email to
                  redirect to the BangDB Forum page.
                </p>
                <img
                  alt="View Post Button in Email"
                  width={"95%"}
                  height={"auto"}
                  className="mt-5 shadow"
                  src="/assets/ticketing/view_post_btn.jpg"
                />

                <h3>Step 8: Login or Signup on Forum</h3>
                <p>
                  If you already have a BangDB Forum account, use your user ID
                  and password to log in. If you don’t have an account, sign up
                  using the same email ID you used for the Ampere account. You
                  can sign up using:
                </p>
                <ul>
                  <li>Google</li>
                  <li>GitHub</li>
                </ul>
                <img
                  alt="Forum Login or Signup"
                  width={"95%"}
                  height={"auto"}
                  className="mt-5 shadow"
                  src="/assets/ticketing/use_any_option_google_github.jpg"
                />

                <h3>Step 9: View Ticket on Forum</h3>
                <p>
                  Once logged in, you can see the ticket you created in the
                  forum. If the post is reviewed and made public by the BangDB
                  team, you can view it without logging in by clicking on the{" "}
                  <strong>View Post</strong> button in the email.
                </p>
                <img
                  alt="View Ticket on Forum"
                  width={"95%"}
                  height={"auto"}
                  className="mt-5 shadow"
                  src="/assets/ticketing/created_ticket_detail_info.jpg"
                />
                <p>
                  <strong>Note:</strong> You can view the created post without
                  logging in only if it is reviewed and made public by the <strong>BangDB
                  team.</strong>
                </p>
              </div>
            </article>
          </div>
        </main>
      </section>
    </React.Fragment>
  );
}

