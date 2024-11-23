import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../../components/Breadcrumb";

export default function SetupLeadSearch() {
  return (
    <React.Fragment>
      <Head>
        <title>Set Up Lead Search</title>
        <meta name="description" content="Set up a lead search in the application"></meta>
        <meta property="og:site_name" content="Lead Sell App" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Set Up Lead Search" />
        <meta property="og:description" content="Learn how to set up a lead search step by step." />
        <meta property="og:image" content="/assets/images/setup-lead-search.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@LeadSellApp" />
        <meta name="twitter:title" content="Set Up Lead Search" />
        <meta name="twitter:description" content="Learn how to set up a lead search step by step." />
        <meta name="twitter:image" content="/assets/images/setup-lead-search.jpg" />
      </Head>

      <section className="main-container">
        <main className="container">
          <div className="article-content">
            <article className="article">
              <Breadcrumb text="Setup Lead Search" url="/setup-lead-search" />
              <h1 className="article-title">Set Up Lead Search</h1>
              <div className="article-body">
                <ol>
                  <li>
                    <p>
                      Click on the <strong>settings</strong> icon from the top navigation bar.
                    </p>
                    <img
                      alt="Settings Icon"
                      width={"95%"}
                      height={"auto"}
                      src="/assets/apps/leads-management/click_setting_icon.jpg"
                    />
                  </li>

                  <li>
                    <p>
                      From the settings dropdown, select <strong>Set up lead search</strong>.
                    </p>
                    <img
                      alt="Select Setup Lead Search"
                      width={"95%"}
                      height={"auto"}
                      src="/assets/apps/leads-management/setup_lead_search.jpg"
                    />
                  </li>

                  <li>
                    <p>
                      Clicking on it redirects you to the <strong>Set up Lead Search</strong> page.
                    </p>
                    <img
                      alt="Lead Setup Page"
                      width={"95%"}
                      height={"auto"}
                      src="/assets/apps/leads-management/lead_setup_page.jpg"
                    />
                  </li>

                  <li>
                    <p>
                      Select a category from the dropdown labeled 
                      <strong> "Select a category to show on your lead search"</strong>.
                    </p>
                    <img
                      alt="Select Category"
                      width={"95%"}
                      height={"auto"}
                      src="/assets/apps/leads-management/select_category.jpg"
                    />
                  </li>

                  <li>
                    <p>
                      After selecting a category, the CRM name and Group name 
                      will populate automatically based on the category details.
                    </p>
                    <img
                      alt="Select the catgeroy page"
                      width={"95%"}
                      height={"auto"}
                      src="/assets/apps/leads-management/select_category_page.jpg"
                    />
                  </li>

                  <li>
                    <p>
                      Select the company from the list.
                    </p>
                    <img
                      alt="Select Company"
                      width={"95%"}
                      height={"auto"}
                      src="/assets/apps/leads-management/select_company.jpg"
                    />
                  </li>

                  <li>
                    <p>
                      Select up to 5 attributes from the list that you want to show on the lead search page.
                    </p>
                    <img
                      alt="Select Attributes"
                      width={"95%"}
                      height={"auto"}
                      src="/assets/apps/leads-management/select_attributes.jpg"
                    />
                  </li>

                  <li>
                    <p>
                      For each selected attribute, add options to display on the lead search page. 
                      You can:
                      <ol>
                        <li>Type options separated by commas (e.g., engine, transmission).</li>
                        <li>Add options line by line (e.g., engine<br />transmission).</li>
                      </ol>
                    </p>
                    <img
                      alt="Add Options"
                      width={"95%"}
                      height={"auto"}
                      src="/assets/apps/leads-management/add_options.jpg"
                    />
                  </li>

                  <li>
                    <p>
                      Click on <strong>Save Draft</strong> to save your configurations.
                    </p>
                    <img
                      alt="Save Draft"
                      width={"95%"}
                      height={"auto"}
                      src="/assets/apps/leads-management/save_draft.jpg"
                    />
                  </li>

                  <li>
                    <p>
                      Click on <strong>Preview Draft</strong> to see how your lead search page looks.
                    </p>
                    <img
                      alt="Preview Draft"
                      width={"95%"}
                      height={"auto"}
                      src="/assets/apps/leads-management/preview_draft.jpg"
                    />
                  </li>

                  <li>
                    <p>
                      Test the filters by selecting options and clicking <strong>Apply Filter</strong>.
                    </p>
                    <img
                      alt="Apply Filters"
                      width={"95%"}
                      height={"auto"}
                      src="/assets/apps/leads-management/apply_filter.jpg"
                    />
                  </li>

                  <li>
                    <p>
                      Once satisfied, click <strong>Publish</strong> to make the lead search page live.
                    </p>
                    <img
                      alt="Publish Lead Search"
                      width={"95%"}
                      height={"auto"}
                      src="/assets/apps/leads-management/publish.jpg"
                    />
                  </li>

                  <li>
                    <p>
                      To disable public access, unpublish the lead search page.
                    </p>
                    <img
                      alt="Un-Publish Lead Search"
                      width={"95%"}
                      height={"auto"}
                      src="/assets/apps/leads-management/un_publish.jpg"
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
