import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../components/Breadcrumb";

export default function TicketingSystemBangDB() {
  return (
    <React.Fragment>
      <Head>
        <title>Website Ticket Creation</title>
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
              <h1 className="article-title">Website Ticket Creation</h1>
              <div className="article-body">
                <h2>Step 1: Go to BangDB Website</h2>
                <p>
                  Go to the BangDB website by clicking on the link{" "}
                  <a href="https://bangdb.com/">https://bangdb.com/</a>.
                </p>
                <img
                  alt="BangDB Homepage"
                  width={"95%"}
                  height={"auto"}
                  className="mt-5 shadow"
                  src="/assets/ticketing/website_hpme_page.jpg"
                />

                <h2>Step 2: Redirect to BangDB Website</h2>
                <p>
                  After clicking the link, you will be redirected to the BangDB
                  website.
                </p>
                <img
                  alt="BangDB Homepage"
                  width={"95%"}
                  height={"auto"}
                  className="mt-5 shadow"
                  src="/assets/ticketing/website_hpme_page.jpg"
                />

                <h2>Step 3: Go to Footer for Issue Reporting</h2>
                <p>
                  Scroll to the footer of the website, and you will find the
                  link to <strong>Report an Issue</strong>.
                </p>
                <img
                  alt="Footer Report an Issue"
                  width={"95%"}
                  height={"auto"}
                  className="mt-5 shadow"
                  src="/assets/ticketing/click_on_report_issue.jpg"
                />

                <h2>Step 4: Click on Report an Issue</h2>
                <p>
                  Clicking on the <strong>Report an Issue</strong> link will
                  redirect you to the BangDB forum page.
                </p>
                <img
                  alt="Redirect to Forum"
                  width={"95%"}
                  height={"auto"}
                  className="mt-5 shadow"
                  src="/assets/ticketing/forum_page.jpg"
                />

                <h2>Step 5: Sign Up or Log In</h2>
                <p>
                  To create a post, you will need to sign up or log in. You can
                  sign up using your Google or GitHub account.
                </p>
                <img
                  alt="Sign Up or Log In"
                  width={"95%"}
                  height={"auto"}
                  className="mt-5 shadow"
                  src="/assets/ticketing/signup_with_googe_git.jpg"
                />

                <h2>Step 6: Create a New Post or Report an Issue</h2>
                <p>
                  After signing in, select <strong>Create a New Post</strong> or
                  <strong> Report an Issue</strong>, depending on your needs.
                </p>
                <img
                  alt="Select Post or Issue"
                  width={"95%"}
                  height={"auto"}
                  className="mt-5 shadow"
                  src="/assets/ticketing/report_an_issue.jpg"
                />

                <h2>Step 7: Fill Out the Form</h2>
                <p>
                  Fill out the necessary details in the form and click on the{" "}
                  <strong>Post</strong> button.
                </p>
                <img
                  alt="Fill the Form"
                  width={"95%"}
                  height={"auto"}
                  className="mt-5 shadow"
                  src="/assets/ticketing/click_on_post_button.jpg"
                />

                <h2>Step 8: Post Created and Await Review</h2>
                <p>
                  Once the post is created, it will be reviewed by the BangDB
                  team. If relevant, it will be made public.
                </p>
                <img
                  alt="Post Created"
                  width={"95%"}
                  height={"auto"}
                  className="mt-5 shadow"
                  src="/assets/ticketing/post_preview.jpg"
                />

                <h2>Step 9: Email Notification</h2>
                <p>
                  After creating the ticket, you will receive an email with the
                  link to your post and the details of the issue.
                </p>
                <img
                  alt="Email Notification"
                  width={"95%"}
                  height={"auto"}
                  className="mt-5 shadow"
                  src="/assets/ticketing/sample_email.jpg"
                />

                <h2>Step 10: View Your Ticket</h2>
                <p>
                  You can view your ticket by going to your profile in the forum
                  and selecting <strong>My Tickets</strong>.
                </p>
                <img
                  alt="View Profile"
                  width={"95%"}
                  height={"auto"}
                  className="mt-5 shadow"
                  src="/assets/ticketing/Click_on_view_details.jpg"
                />

                <h2>Step 11: Check My Tickets</h2>
                <p>
                  Click on <strong>My Tickets</strong> to view all the posts you
                  have created.
                </p>
                <img
                  alt="My Tickets"
                  width={"95%"}
                  height={"auto"}
                  className="mt-5 shadow"
                  src="/assets/ticketing/click_on_my_tickets.jpg"
                />

                <h2>Step 12: Final Ticket View</h2>
                <p>
                  After the BangDB team reviews your ticket, it will be visible
                  on the public forum at{" "}
                  <a href="https://forum.bangdb.com/">
                    https://forum.bangdb.com/
                  </a>
                  .
                </p>
                <img
                  alt="Ticket on Forum"
                  width={"95%"}
                  height={"auto"}
                  className="mt-5 shadow"
                  src="/assets/ticketing/public_forum_page.jpg"
                />
              </div>
            </article>
          </div>
        </main>
      </section>
    </React.Fragment>
  );
}

export async function getStaticProps(context) {
  return {
    props: { helpGuideSidebar: true },
  };
}
