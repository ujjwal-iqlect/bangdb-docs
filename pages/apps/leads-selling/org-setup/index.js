import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../../components/Breadcrumb";

export default function OrganizationSetup() {
  return (
    <React.Fragment>
      <Head>
        <title>Organization Setup</title>
        <meta name="description" content="Setup your organization step by step." />
        <meta property="og:site_name" content="Lead Sell App" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Organization Setup" />
        <meta property="og:description" content="Learn how to set up your organization with this step-by-step guide." />
        <meta property="og:image" content="/assets/images/organization-setup.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@LeadSellApp" />
        <meta name="twitter:title" content="Organization Setup" />
        <meta name="twitter:description" content="Learn how to set up your organization with this step-by-step guide." />
        <meta name="twitter:image" content="/assets/images/organization-setup.jpg" />
      </Head>

      <section className="main-container">
        <main className="container">
          <div className="article-content">
            <article className="article">
              <Breadcrumb text="Organization Setup" url="/organization-setup" />
              <h1 className="article-title">How to Set Up Your Organization</h1>
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
                      From the settings dropdown, select <strong>Manage Lead Category</strong>.
                    </p>
                    <img
                      alt="Manage Lead Category"
                      width="95%"
                      height="auto"
                      src="/assets/apps/leads-management/manage_lead_category.jpg"
                    />
                  </li>

                  <li>
                    <p>
                      Click on the <strong>Organization Setup</strong> tab.
                    </p>
                    <img
                      alt="Organization Setup Tab"
                      width="95%"
                      height="auto"
                      src="/assets/apps/leads-management/organization_setup_tab.jpg"
                    />
                  </li>

                  <li>
                    <p>
                      Fill in all the required details in the <strong>Organization Setup</strong> tab and 
                      click <strong>Save</strong>. Your organization setup is complete.
                    </p>
                    <img
                      alt="Fill Organization Details"
                      width="95%"
                      height="auto"
                      src="/assets/apps/leads-management/fill_organization_details.jpg"
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
