import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../../components/Breadcrumb";

export default function OnboardCompany() {
  return (
    <React.Fragment>
      <Head>
        <title>Onboard a Company</title>
        <meta name="description" content="Onboard a company in the application step by step." />
        <meta property="og:site_name" content="Lead Sell App" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Onboard a Company" />
        <meta property="og:description" content="Learn how to onboard a company with this step-by-step guide." />
        <meta property="og:image" content="/assets/images/onboard-company.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@LeadSellApp" />
        <meta name="twitter:title" content="Onboard a Company" />
        <meta name="twitter:description" content="Learn how to onboard a company with this step-by-step guide." />
        <meta name="twitter:image" content="/assets/images/onboard-company.jpg" />
      </Head>

      <section className="main-container">
        <main className="container">
          <div className="article-content">
            <article className="article">
              <Breadcrumb text="Onboard a Company" url="/onboard-company" />
              <h1 className="article-title">How to Onboard a Company</h1>
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
                      Select <strong>Onboard Company</strong> from the settings dropdown.
                    </p>
                    <img
                      alt="Select Onboard Company"
                      width="95%"
                      height="auto"
                      src="/assets/apps/leads-management/onboard_company.jpg"
                    />
                  </li>

                  <li>
                    <p>
                      Clicking on it redirects to the <strong>Company Onboard</strong> page.
                    </p>
                    <img
                      alt="Company Onboard Page"
                      width="95%"
                      height="auto"
                      src="/assets/apps/leads-management/onboard_page.jpg"
                    />
                  </li>

                  <li>
                    <p>
                      On the Company Onboard page, select a user to associate with the company 
                      from the dropdown. This only works if users are already present in the CRM. 
                      If no users are available, you need to create one using the 
                      <strong>Create New User</strong> option.
                    </p>
                    <img
                      alt="Select User"
                      width="95%"
                      height="auto"
                      src="/assets/apps/leads-management/create_user_button.jpg"
                    />
                  </li>

                  <li>
                    <p>
                      To create a new user, provide the following details:
                    </p>
                    <ul>
                      <li><strong>User ID:</strong> Test</li>
                      <li><strong>User Email:</strong> test@gmail.com</li>
                      <li><strong>Password:</strong> Test@123</li>
                      <li><strong>First Name:</strong> Test</li>
                      <li><strong>Last Name:</strong> User</li>
                      <li>
                        <strong>User Type:</strong> Select between Power or Normal 
                        (click <a href="/user-access-info">here</a> for more details).
                      </li>
                      <li><strong>License Type:</strong> Default is Worker.</li>
                      <li><strong>Phone:</strong> 9999999999</li>
                    </ul>
                    <p>
                      <strong>Note:</strong> Ensure the email ID is valid, as the User ID and password 
                      will be sent to the provided email.
                    </p>
                    <img
                      alt="Create User"
                      width="95%"
                      height="auto"
                      src="/assets/apps/leads-management/click_create_user.jpg"
                    />
                  </li>

                  <li>
                    <p>
                      After creating the user, provide the company details:
                    </p>
                    <ul>
                      <li><strong>Company ID:</strong> Unique identifier</li>
                      <li><strong>Company Description:</strong> Add relevant information</li>
                    </ul>
                    <p>
                      <strong>Note:</strong> Once added, the company details cannot be changed.
                    </p>
                    <img
                      alt="Add Company Details"
                      width="95%"
                      height="auto"
                      src="/assets/apps/leads-management/click_on_next_button.jpg"
                    />
                  </li>

                  <li>
                    <p>
                      Next, select the <strong>Group</strong> to associate with the company.
                    </p>
                    <img
                      alt="Select Group"
                      width="95%"
                      height="auto"
                      src="/assets/apps/leads-management/select_group.jpg"
                    />
                  </li>

                  <li>
                    <p>
                      If the group policy is set to <strong>FILTER</strong>, define conditions 
                      for leads to flow to the company. Example:
                    </p>
                    <p>
                      On your website, you have a field <strong>Part</strong> with options 
                      <em>engine</em> and <em>transmission</em>. 
                      If you want leads with &quot;Part = engine&quot; to flow to this company, 
                      set the filter accordingly. Use operations like equals, not equals, etc., 
                      and specify the value.
                    </p>
                    <p>
                      <strong>Note:</strong> If the group policy is <strong>ALL</strong>, 
                      <strong>RR</strong>, or <strong>RROBIN</strong>, filters are not required.
                    </p>
                    <img
                      alt="Set Filters"
                      width="95%"
                      height="auto"
                      src="/assets/apps/leads-management/set_filters.jpg"
                    />
                  </li>

                  <li>
                    <p>
                      After selecting the group and adding filters (if applicable), click on the <strong>Next</strong> button.
                    </p>
                    <img
                      alt="Next Button"
                      width="95%"
                      height="auto"
                      src="/assets/apps/leads-management/click_on_next_button_after_filter.jpg"
                    />
                  </li>

                  <li>
                    <p>
                      Click <strong>Next</strong> to proceed to the quota settings page.
                    </p>
                    <img
                      alt="Quota Settings"
                      width="95%"
                      height="auto"
                      src="/assets/apps/leads-management/click_on_next_button_after_filter.jpg"
                    />
                  </li>

                  <li>
                    <p>
                      On the quota settings page (optional), you can:
                    </p>
                    <ul>
                      <li>Set company lead quotas.</li>
                      <li>Add daily limits and business hours.</li>
                      <li>Define quota validity.</li>
                    </ul>
                    <p>Click <strong>Submit</strong> to proceed.</p>
                    <img
                      alt="Quota Page"
                      width="95%"
                      height="auto"
                      src="/assets/apps/leads-management/quota_page.jpg"
                    />
                  </li>

                  <li>
                    <p>
                      After submission, you can:
                    </p>
                    <ul>
                      <li>Send an invoice to the company.</li>
                      <li>Send a confirmation email.</li>
                      <li>Visit the company page using the <strong>Visit Company</strong> option.</li>
                    </ul>
                    <img
                      alt="Company Options"
                      width="95%"
                      height="auto"
                      src="/assets/apps/leads-management/company_options.jpg"
                    />
                  </li>

                  <li>
                    <p>
                      If sending an invoice, a popup will prompt you to:
                    </p>
                    <ul>
                      <li>Enter the amount to invoice.</li>
                      <li>Select the currency (e.g., USD, INR).</li>
                      <li>Define cost per lead if a quota was set, or use a fixed price.</li>
                    </ul>
                    <img
                      alt="Send Invoice"
                      width="95%"
                      height="auto"
                      src="/assets/apps/leads-management/send_invoice.jpg"
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
