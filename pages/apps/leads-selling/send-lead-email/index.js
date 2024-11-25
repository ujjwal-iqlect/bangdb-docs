import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../../components/Breadcrumb";

export default function SendLeadsEmail() {
  return (
    <React.Fragment>
      <Head>
        <title>Send Leads via Email</title>
        <meta name="description" content="Step-by-step guide to send leads to users via email." />
        <meta property="og:site_name" content="Lead Sell App" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Send Leads via Email" />
        <meta property="og:description" content="Learn how to send leads to users via email using this guide." />
        <meta property="og:image" content="/assets/images/send-leads-email.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@LeadSellApp" />
        <meta name="twitter:title" content="Send Leads via Email" />
        <meta name="twitter:description" content="Learn how to send leads to users via email using this guide." />
        <meta name="twitter:image" content="/assets/images/send-leads-email.jpg" />
      </Head>

      <section className="main-container">
        <main className="container">
          <div className="article-content">
            <article className="article">
              <Breadcrumb text="Send Leads via Email" url="/send-leads-email" />
              <h1 className="article-title">Send Leads via Email</h1>
              <div className="article-body">
                <ol>
                  <li>
                    <p>
                      Click on <strong>My Lead Pipeline</strong> from the dashboard.
                    </p>
                    <img
                      alt="My Lead Pipeline"
                      width="95%"
                      height="auto"
                      src="/assets/apps/leads-management/my_lead_pipeline.jpg"
                    />
                  </li>

                  <li>
                    <p>
                      From the pipeline list, select any <strong>pipe</strong> you wish to send the leads.
                    </p>
                    <img
                      alt="Select Pipe"
                      width="95%"
                      height="auto"
                      src="/assets/apps/leads-management/select_pipe.jpg"
                    />
                  </li>

                  <li>
                    <p>
                      After selecting a pipe, you will be redirected to the <strong>Lead Listing</strong> page.
                    </p>
                    <img
                      alt="Lead Listing Page"
                      width="95%"
                      height="auto"
                      src="/assets/apps/leads-management/lead_listing_page.jpg"
                    />
                  </li>

                  <li>
                    <p>
                      Select the leads you want to send by clicking on their respective checkboxes.
                    </p>
                    <img
                      alt="Select Leads"
                      width="95%"
                      height="auto"
                      src="/assets/apps/leads-management/select_leads.jpg"
                    />
                  </li>

                  <li>
                    <p>
                      Click on the <strong>Send Email</strong> button after selecting the leads.
                    </p>
                    <img
                      alt="Send Email Button"
                      width="95%"
                      height="auto"
                      src="/assets/apps/leads-management/send_email_btn.jpg"
                    />
                  </li>

                  <li>
                    <p>
                      In the email options, select <strong>Send Selected Leads to Contact</strong>.
                    </p>
                    <img
                      alt="Send Selected Leads to Contact"
                      width="95%"
                      height="auto"
                      src="/assets/apps/leads-management/send_to_contact_option.jpg"
                    />
                  </li>

                  <li>
                    <p>
                      Fill in the required information:
                    </p>
                    <ul>
                      <li><strong>Subject:</strong> Enter the email subject.</li>
                      <li><strong>Sender Info:</strong> Add sender name and email.</li>
                      <li><strong>Recipients:</strong> Add recipient email addresses.</li>
                      <li><strong>Attachments:</strong> CSV file with selected leads is automatically attached.</li>
                      <li><strong>Email Content:</strong> Add the content/message for the email.</li>
                    </ul>
                    <p>
                      After adding all the details, click on the <strong>Send Email</strong> button to complete the process.
                    </p>
                    <img
                      alt="Email Form"
                      width="95%"
                      height="auto"
                      src="/assets/apps/leads-management/email_form.jpg"
                    />
                  </li>
                </ol>
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
    props: { lead_management_sidebar: true },
  };
}
