import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../../components/Breadcrumb";

export default function BrandingDNSSetup() {
  return (
    <React.Fragment>
      <Head>
        <title>Branding - DNS Setup</title>
        <meta name="description" content="Step-by-step guide to set up DNS for branding in the application." />
        <meta property="og:site_name" content="Lead Sell App" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Branding - DNS Setup" />
        <meta property="og:description" content="Learn how to set up DNS for branding in the application with this guide." />
        <meta property="og:image" content="/assets/images/dns-setup.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@LeadSellApp" />
        <meta name="twitter:title" content="Branding - DNS Setup" />
        <meta name="twitter:description" content="Learn how to set up DNS for branding in the application with this guide." />
        <meta name="twitter:image" content="/assets/images/dns-setup.jpg" />
      </Head>

      <section className="main-container">
        <main className="container">
          <div className="article-content">
            <article className="article">
              <Breadcrumb text="Branding - DNS Setup" url="/branding-dns-setup" />
              <h1 className="article-title">Branding - DNS Setup</h1>
              <div className="article-body">
                <ol>
                  <li>
                    <p>
                      Click on the <strong>settings</strong> icon from the top navigation bar.
                    </p>
                    <img
                      alt="Settings Icon"
                      width="95%"
                      height="auto"
                      src="/assets/apps/leads-management/click_setting_icon.jpg"
                    />
                  </li>

                  <li>
                    <p>
                      From the settings dropdown, select <strong>Manage Lead</strong> category.
                    </p>
                    <img
                      alt="Select Manage Lead Category"
                      width="95%"
                      height="auto"
                      src="/assets/apps/leads-management/manage_lead_category.jpg"
                    />
                  </li>

                  <li>
                    <p>
                      Click on the <strong>DNS Setup</strong> tab from the Manage Lead category page.
                    </p>
                    <img
                      alt="DNS Setup Tab"
                      width="95%"
                      height="auto"
                      src="/assets/apps/leads-management/dns_setup_tab.jpg"
                    />
                  </li>

                  <li>
                    <p>
                      After clicking on <strong>DNS Setup</strong>, you need to provide:
                    </p>
                    <img
                      alt="DNS Setup Tab"
                      width="95%"
                      height="auto"
                      src="/assets/apps/leads-management/dns_setup_tab.jpg"
                    />
                    <ul>
                      <li>
                        <strong>Subdomain Name:</strong> Optional field if you want to create a subdomain.
                      </li>
                      <li>
                        <strong>DNS List:</strong> Provide the DNS records you wish to set up.
                      </li>
                    </ul>
                    <p>
                      After filling in the details, click on the <strong>Submit</strong> button. 
                      This will create a support ticket, and our team will work on the request. 
                      Updates will be sent to you once the setup is complete.
                    </p>
                    <img
                      alt="Submit DNS Details"
                      width="95%"
                      height="auto"
                      src="/assets/apps/leads-management/submit_dns_details.jpg"
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
