import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../../components/Breadcrumb";

export default function PurchaseLeads() {
  return (
    <React.Fragment>
      <Head>
        <title>Purchase Leads</title>
        <meta name="description" content="Step-by-step guide for users to purchase leads in the application." />
        <meta property="og:site_name" content="Lead Sell App" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Purchase Leads" />
        <meta property="og:description" content="Learn how users can purchase leads with this comprehensive guide." />
        <meta property="og:image" content="/assets/images/purchase-leads.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@LeadSellApp" />
        <meta name="twitter:title" content="Purchase Leads" />
        <meta name="twitter:description" content="Learn how users can purchase leads with this comprehensive guide." />
        <meta name="twitter:image" content="/assets/images/purchase-leads.jpg" />
      </Head>

      <section className="main-container">
        <main className="container">
          <div className="article-content">
            <article className="article">
              <Breadcrumb text="Purchase Leads" url="/purchase-leads" />
              <h1 className="article-title">How Users Can Purchase Leads</h1>
              <div className="article-body">
                <ol>
                  <li>
                    <p>
                      Go to the public URL (e.g.,{" "}
                      <a href="https://testamp.bangdb.com/buyLeads/I8D6QNUVM82U" target="_blank" rel="noopener noreferrer">
                        example URL
                      </a>
                      ). It will open a page like below.
                    </p>
                    <img
                      alt="Public URL Page"
                      width="95%"
                      height="auto"
                      src="/assets/apps/leads-management/public_url_page.jpg"
                    />
                  </li>

                  <li>
                    <p>
                      Search for any category in which you want to buy the leads. After selecting the filter, click on{" "}
                      <strong>Apply Filter</strong>. It will show results based on the category and attributes.
                    </p>
                    <img
                      alt="Apply Filter"
                      width="95%"
                      height="auto"
                      src="/assets/apps/leads-management/apply_filter_page.jpg"
                    />
                  </li>

                  <li>
                    <p>
                      Click on <strong>Buy Leads</strong> after searching for leads.
                    </p>
                    <img
                      alt="Buy Leads"
                      width="95%"
                      height="auto"
                      src="/assets/apps/leads-management/buy_leads.jpg"
                    />
                  </li>

                  <li>
                    <p>
                      If you already have an account, enter your user ID and password in the popup and click <strong>Login</strong>.
                    </p>
                    <img
                      alt="Login Popup"
                      width="95%"
                      height="auto"
                      src="/assets/apps/leads-management/login_popup_account.jpg"
                    />
                  </li>

                  <li>
                    <p>
                      If you don't have an account, click on <strong>Don't have an account</strong>.
                    </p>
                    <img
                      alt="Create Account Option"
                      width="95%"
                      height="auto"
                      src="/assets/apps/leads-management/dont_have_account.jpg"
                    />
                  </li>

                  <li>
                    <p>
                      Enter your details: <strong>Email ID, First Name, Last Name,</strong> and <strong>Phone Number</strong>. 
                      <strong>Note:</strong> The email ID should be correct as the password will be sent to it.
                    </p>
                    <img
                      alt="Enter Account Details"
                      width="95%"
                      height="auto"
                      src="/assets/apps/leads-management/enter_account_details.jpg"
                    />
                  </li>

                  <li>
                    <p>
                      Use the user ID and password sent to your email to log in.
                    </p>
                    <img
                      alt="User ID and Password Email"
                      width="95%"
                      height="auto"
                      src="/assets/apps/leads-management/user_id_password_email.jpg"
                    />
                  </li>

                  <li>
                    <p>
                      After login, enter your <strong>Company Name</strong> and <strong>Company Description</strong> 
                      in the popup. <strong>Note:</strong> The company name cannot be changed after adding.
                    </p>
                    <img
                      alt="Company Details Popup"
                      width="95%"
                      height="auto"
                      src="/assets/apps/leads-management/company_details_popup.jpg"
                    />
                  </li>

                  <li>
                    <p>
                      Click <strong>Next</strong> to specify lead purchase details. You can:
                    </p>
                    <ul>
                      <li>Choose between a one-time purchase or “Get Fresh Leads Daily.”</li>
                      <li>Set lead quotas, validity dates, daily limits, business hours, and time zone.</li>
                    </ul>
                    <img
                      alt="Lead Purchase Options"
                      width="95%"
                      height="auto"
                      src="/assets/apps/leads-management/lead_purchase_options.jpg"
                    />
                  </li>

                  <li>
                    <p>
                      Click <strong>Next</strong> to proceed to the payment page and complete the payment based on lead prices.
                    </p>
                    <img
                      alt="Payment Page"
                      width="95%"
                      height="auto"
                      src="/assets/apps/leads-management/payment_page.jpg"
                    />
                  </li>

                  <li>
                    <p>
                      After payment, an invoice is sent to your email, along with a payment confirmation.
                    </p>
                    <img
                      alt="Payment Confirmation"
                      width="95%"
                      height="auto"
                      src="/assets/apps/leads-management/payment_confirmation.jpg"
                    />
                  </li>

                  <li>
                    <p>
                      After payment, you are redirected to a page with two options:
                    </p>
                    <ul>
                      <li>
                        <strong>Continue Shopping:</strong> Repeat the flow to purchase more leads.
                      </li>
                      <li>
                        <strong>Visit Company:</strong> Redirects to the company listing page where you can manage purchased leads.
                      </li>
                    </ul>
                    <img
                      alt="Post Payment Options"
                      width="95%"
                      height="auto"
                      src="/assets/apps/leads-management/post_payment_options.jpg"
                    />
                  </li>
                  <li>
                    <p>
                      After clicking on <strong>Visit Company</strong>, you will be redirected to the company page. 
                      Here, you can manage your purchased leads.
                    </p>
                    <img
                      alt="Manage Leads Page"
                      width="95%"
                      height="auto"
                      src="/assets/apps/leads-management/manage_leads_page.jpg"
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
    props: { company_management_sidebar: true },
  };
}
