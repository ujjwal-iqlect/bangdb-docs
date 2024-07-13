import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../../../../../components/Breadcrumb";

export default function Motivation() {
  return (
    <React.Fragment>
      <Head>
        <title>Add / Edit Host</title>
        <meta
          name="description"
          content="Motivation - Why BangDB?. The motivation behind BangDB."
        ></meta>
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
              <h1 className="article-title">
                Add click-stream monitoring service
              </h1>
              <div className="article-body">
                <aside className="doc-note">
                  <strong>NOTE: </strong>
                  Before adding a service, you must add a host.
                </aside>

                <p>
                  In order to add a new click-stream monitoring service,
                  Navigate to the
                  <strong> &quot;Services&quot; </strong> page.
                </p>

                <img
                  alt="Click on crm settings - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/app-mon/go-to-services-page.jpg"
                />

                <p>
                  Click on <strong>&quot;Add Service&quot;</strong> button.
                </p>

                <img
                  alt="Click on manage company - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/app-mon/click-on-add-service.jpg"
                />

                <p>Now enter the service details.</p>

                <ul>
                  <li>
                    <strong>Service ID</strong>
                    <p>
                      ID of the service. [spaces and colon(:) are not allowed]
                    </p>
                  </li>
                  <li>
                    <strong>Service port</strong>
                    <p>Port where the service is running.</p>
                  </li>
                  <li>
                    <strong>Description</strong>
                    <p>Description of the service.</p>
                  </li>
                  <li>
                    <strong>Host ID</strong>
                    <p>
                      Host ID of the service. [ you need choose this from the
                      existing hosts list ]
                    </p>
                  </li>
                  <li>
                    <strong>Website Title</strong>

                    <p>Title of the website.</p>
                  </li>
                  <li>
                    <strong>Website Port</strong>

                    <p>Port of the website. This field is optional.</p>
                  </li>
                  <li>
                    <strong>User ID Location</strong>
                    <p>
                      Location where the user ID will be stored. You can choose
                      from the following 3 options:
                    </p>
                    <ol>
                      <li>Cookies ( selected by default )</li>
                      <li>Session storage</li>
                      <li>Local storage</li>
                    </ol>
                  </li>

                  <li>
                    <strong>User ID</strong>
                    <p>Custom user ID. This field is optional.</p>
                  </li>

                  <li>
                    <strong>User Search Param</strong>
                    <p>URL search parameter. This field is optional.</p>
                  </li>

                  <li>
                    <strong>User Search Category Param</strong>
                    <p>
                      URL search category parameter. This field is optional.
                    </p>
                  </li>

                  <li>
                    <strong>Ping</strong>
                    <p>
                      How frequently you want to monitor the data. Minimum value
                      is 10 seconds.
                    </p>
                  </li>
                  <li>
                    <strong>Website Type</strong>
                    <p>Options are following:</p>

                    <ol>
                      <li>Single page</li>
                      <li>Multi page</li>
                    </ol>
                  </li>
                  <li>
                    <strong>Check health of the service</strong>
                    <p>
                      By checking this input, the app will start checking health
                      &amp; SSL of service.
                    </p>
                  </li>
                </ul>

                <img
                  alt="Click on manage company - BangDB"
                  width={"100%"}
                  height={"auto"}
                  src="/assets/apps/app-mon/add-click-stream-mon-form.jpg"
                />

                <p>
                  Click on <strong>&quot;Add service&quot;</strong>. The service
                  will get added. It will you a javascript script which you need
                  to paste into the <code>{`<head>`}</code> tag of your website.
                  By following this step you can start monitoring the traffic of your website.
                </p>

                <img
                  alt="Click on manage company - BangDB"
                  width={"100%"}
                  height={"auto"}
                  src="/assets/apps/app-mon/click-stream-mon-install-steps.jpg"
                />
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
    props: { app_mon_sidebar: true },
  };
}
