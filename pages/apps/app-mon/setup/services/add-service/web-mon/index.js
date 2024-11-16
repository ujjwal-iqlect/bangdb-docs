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
              <h1 className="article-title">Add web monitoring service</h1>
              <div className="article-body">
                <aside className="doc-note">
                  <strong>NOTE: </strong>
                  Before adding a service, you must add a host.
                </aside>

                <p>
                  In order to add a new web monitoring service, Navigate to the
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
                    <strong>Monitoring method</strong>
                    <ol>
                      <li>Use Agent (Recommended)</li>
                      <p>
                        This option is selected by default. Choosing this option
                        means that you have to install agent on the host and you
                        will have more control over the data.
                      </p>
                      <li>
                        Agentless
                        <p>
                          If you choose this method, then you just need to add
                          the service. The App will handle the rest.{" "}
                        </p>
                      </li>
                    </ol>
                  </li>
                  <li>
                    <strong>Monitoring Frequency</strong>
                    <p>
                      How frequently you want to monitor the data. Minimum value
                      is 10 seconds.
                    </p>
                  </li>
                  <li>
                    <strong>Websites</strong>
                    <p>
                      Add the websites and their port that you want to monitor.
                    </p>
                  </li>
                  <li>
                    <strong>Check health of the service</strong>
                    <p>
                      By checking this input, the app will start checking health
                      &amp; SSL of service.
                    </p>
                  </li>
                </ul>

                <h2>Using Agent</h2>

                <img
                  alt="Click on manage company - BangDB"
                  width={"100%"}
                  height={"auto"}
                  src="/assets/apps/app-mon/add-web-mon-form.jpg"
                />

                <p>
                  Click on <strong>&quot;Add service&quot;</strong>. The service
                  will get added. It will you some installation steps, by
                  following those steps you can start monitoring the service.
                </p>

                <img
                  alt="Click on manage company - BangDB"
                  width={"100%"}
                  height={"auto"}
                  src="/assets/apps/app-mon/web-mon-install-steps.jpg"
                />

                <h2>Agentless</h2>

                <p>
                  Select agentless from the radio button and click on add
                  service. The service will get added.
                </p>

                <aside className="doc-note">
                  <strong>NOTE: </strong>
                  As of now agentless option is available for only website
                  monitoring and Linux SNMP.
                </aside>

                <img
                  alt="Click on manage company - BangDB"
                  width={"100%"}
                  height={"auto"}
                  src="/assets/apps/app-mon/agent-less-web-mon.jpg"
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
