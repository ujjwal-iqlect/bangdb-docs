import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../../components/Breadcrumb";

export default function SendLeadsWhatsApp() {
  return (
    <React.Fragment>
      <Head>
        <title>Send Leads via WhatsApp</title>
        <meta name="description" content="Step-by-step guide to send leads to users via WhatsApp." />
        <meta property="og:site_name" content="Lead Sell App" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Send Leads via WhatsApp" />
        <meta property="og:description" content="Learn how to send leads to users via WhatsApp using this guide." />
        <meta property="og:image" content="/assets/images/send-leads-whatsapp.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@LeadSellApp" />
        <meta name="twitter:title" content="Send Leads via WhatsApp" />
        <meta name="twitter:description" content="Learn how to send leads to users via WhatsApp using this guide." />
        <meta name="twitter:image" content="/assets/images/send-leads-whatsapp.jpg" />
      </Head>

      <section className="main-container">
        <main className="container">
          <div className="article-content">
            <article className="article">
              <Breadcrumb text="Send Leads via WhatsApp" url="/send-leads-whatsapp" />
              <h1 className="article-title">Send Leads via WhatsApp</h1>
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
                      Click on the <strong>WhatsApp</strong> icon after selecting the leads.
                    </p>
                    <img
                      alt="WhatsApp Icon"
                      width="95%"
                      height="auto"
                      src="/assets/apps/leads-management/whatsapp_icon.jpg"
                    />
                  </li>

                  <li>
                    <p>
                      After clicking the WhatsApp icon, a sidebar will appear where you can:
                    </p>
                    <ul>
                      <li>Manually enter a phone number.</li>
                      <li>Select numbers from the dropdown (populated with numbers from the selected leads).</li>
                    </ul>
                    <p>
                      After selecting or entering the phone numbers, click <strong>Send</strong>. The selected leads will be sent to the user via WhatsApp.
                    </p>
                    <img
                      alt="WhatsApp Sidebar"
                      width="95%"
                      height="auto"
                      src="/assets/apps/leads-management/whatsapp_sidebar.jpg"
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
    props: { leads_management_sidebar: true },
  };
}
