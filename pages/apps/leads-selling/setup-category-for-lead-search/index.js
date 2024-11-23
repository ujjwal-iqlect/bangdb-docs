import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../../components/Breadcrumb";

export default function SetupLeadSearch() {
  return (
    <React.Fragment>
      <Head>
        <title>Set Up Lead Search</title>
        <meta name="description" content="Set up a category for lead search in the application." />
        <meta property="og:site_name" content="Lead Sell App" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Set Up Lead Search" />
        <meta property="og:description" content="Learn how to set up a category for lead search step by step." />
        <meta property="og:image" content="/assets/images/setup-lead-search.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@LeadSellApp" />
        <meta name="twitter:title" content="Set Up Lead Search" />
        <meta name="twitter:description" content="Learn how to set up a category for lead search step by step." />
        <meta name="twitter:image" content="/assets/images/setup-lead-search.jpg" />
      </Head>

      <section className="main-container">
        <main className="container">
          <div className="article-content">
            <article className="article">
              <Breadcrumb text="Set Up Lead Search" url="/setup-category-for-lead-search" />
              <h1 className="article-title">Set Up a Category for Lead Search</h1>
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
                      From the settings dropdown, select <strong>Manage Lead Category</strong>.
                    </p>
                    <img
                      alt="Manage Lead Category"
                      width={"95%"}
                      height={"auto"}
                      src="/assets/apps/leads-management/manage_lead_category.jpg"
                    />
                  </li>

                  <li>
                    <p>
                      After clicking on <strong>Manage Lead Category</strong>, it redirects to the 
                      <strong> Manage Lead Category</strong> page. If the category is already present, 
                      it will be listed. If not, you need to add it. 
                      <a href="/add-category">Click here to see how to add the category</a>.
                    </p>
                    <img
                      alt="Manage Lead Category Page"
                      width={"95%"}
                      height={"auto"}
                      src="/assets/apps/leads-management/manage_category_page.jpg"
                    />
                  </li>

                  <li>
                    <p>
                      If the category is already present and you want to set it for lead search, 
                      click the <strong>Edit</strong> button for the respective category.
                    </p>
                    <img
                      alt="Edit Category"
                      width={"95%"}
                      height={"auto"}
                      src="/assets/apps/leads-management/edit_category_button.jpg"
                    />
                  </li>

                  <li>
                    <p>
                      After clicking <strong>Edit</strong>, fill in the following details:
                    </p>
                    <ul>
                      <li><strong>Category Name:</strong> John</li>
                      <li><strong>Category Description:</strong> Test select</li>
                      <li><strong>CRM:</strong> Test CRM</li>
                      <li><strong>Group:</strong> Test group</li>
                      <li><strong>Pipe:</strong> Test pipe</li>
                      <li>
                        <strong>Currency for Invoicing:</strong> Select between 
                        <em> INR</em> and <em>USD</em>.
                      </li>
                      <li>
                        <strong>Unit Price for a Single Lead:</strong> Add the price value.
                      </li>
                      <li>
                        <strong>Fields for the Search Page:</strong> Select the fields to display.
                      </li>
                    </ul>
                    <img
                      alt="Edit Details"
                      width={"95%"}
                      height={"auto"}
                      src="/assets/apps/leads-management/edit_catgeroy_details.jpg"
                    />
                  </li>

                  <li>
                    <p>
                      After completing the setup, click on <strong>Save Draft</strong> from the 
                      <strong> Manage Category</strong> page.
                    </p>
                    <img
                      alt="Save Draft"
                      width={"95%"}
                      height={"auto"}
                      src="/assets/apps/leads-management/save_draft_catgeroy_page.jpg"
                    />
                  </li>

                  <li>
                    <p>
                      Once saved as a draft, you also need to click <strong>Save</strong> on the 
                      category page to finalize the setup.
                    </p>
                    <img
                      alt="Save Category"
                      width={"95%"}
                      height={"auto"}
                      src="/assets/apps/leads-management/final_save_category.jpg"
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
