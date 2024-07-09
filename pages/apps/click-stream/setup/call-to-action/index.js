import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../../../components/Breadcrumb";

export default function SetupWebForms() {
  return (
    <React.Fragment>
      <Head>
        <title>Setup web forms</title>
        <meta name="description" content="Setup web forms"></meta>
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Motivation - Why BangDB?" />
        <meta
          property="og:description"
          content="Motivation - Why BangDB?. The motivation behind BangDB."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="Motivation - Why BangDB?" />
        <meta
          name="twitter:description"
          content="Motivation - Why BangDB?. The motivation behind BangDB."
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
              <h1 className="article-title">Setup call to action</h1>
              <div className="article-body">
                <p>
                  Go to the
                  <strong> &quot;Get started&quot; </strong> page from the top
                  header.
                </p>

                <p>
                  Click on
                  <strong> &quot;Setup a lead source&quot;</strong>
                </p>

                <img
                  alt="Click on crm settings - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/leads-management/setup_lead_source.jpg"
                />

                <p>
                  Select any one source. ( For this example - we&apos;re
                  choosing &quot;Website&quot; )
                </p>

                <img
                  alt="Click on manage company - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/leads-management/select_any_source.jpg"
                />

                <p>
                  Click on &quot;Collectors&quot; button for the website where
                  you want to setup the &quot;Call to action&quot;.
                </p>

                <img
                  alt="Click on manage company - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/leads-management/click_on_collectors.jpg"
                />

                <p>Now choose &quot;Call to action&quot;.</p>

                <img
                  alt="Click on manage company - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/leads-management/choose_form_templates.jpg"
                />

                <p>Select the call to action element and add its unique ID.</p>

                <p>
                  Once you&apos;re done, Click on &quot;Save Call To
                  Actions&quot;.
                </p>

                <img
                  alt="Click on manage company - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/click-stream/add-cta.jpg"
                />

                <h2>Publish form</h2>

                <p>
                  Once the form is created, Click on{" "}
                  <strong>&quot;Publish&quot;</strong>.
                </p>

                <img
                  alt="Click on manage company - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/leads-management/click_on_publish_form.jpg"
                />

                <p>
                  The form changes will get published. Changes may take 30-45
                  mins to reflect.
                </p>
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
    props: { click_stream_sidebar: true },
  };
}
