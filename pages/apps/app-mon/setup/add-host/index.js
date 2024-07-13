import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "../../../../../components/Breadcrumb";

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
              <h1 className="article-title">Add / Edit host</h1>
              <div className="article-body">
                <h2>Add Host</h2>

                <aside className="doc-note">
                  <strong>NOTE: </strong>
                  Before adding a host, you must add a cluster.
                </aside>

                <p>
                  In order to add a new host, Navigate to the
                  <strong> &quot;Hosts&quot; </strong> page.
                </p>

                <img
                  alt="Click on crm settings - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/app-mon/go-to-hosts-page.jpg"
                />

                <p>
                  Click on <strong>&quot;Add Host&quot;</strong> button.
                </p>

                <img
                  alt="Click on manage company - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/app-mon/click-on-add-host.jpg"
                />

                <p>
                  Now Enter the Host details and click on{" "}
                  <strong>&quot;Add host&quot;</strong>.
                </p>

                <ul>
                  <li>
                    <strong>Host ID</strong>
                    <p>ID of the host. [spaces and colon(:) are not allowed]</p>
                  </li>
                  <li>
                    <strong>Host Description</strong>
                    <p>Description of the host.</p>
                  </li>
                  <li>
                    <strong>IP</strong>
                    <p>IP address of the host.</p>
                  </li>
                  <li>
                    <strong>Type</strong>
                    <p>
                      As of now, we support 3 types of host. They are following:
                    </p>
                    <ol>
                      <li>LINUX</li>
                      <li>WEBSITE</li>
                      <li>WINDOWS</li>
                    </ol>
                  </li>
                  <li>
                    <strong>Cluster ID</strong>
                    <p>
                      Cluster ID of the host. [ you need choose this from the
                      existing cluster list ]
                    </p>
                  </li>
                  <li>
                    <strong>Check health of the host</strong>
                    <p>
                      By checking this input, the app will start checking health
                      of host &amp; SSL.
                    </p>
                  </li>
                </ul>

                <img
                  alt="Click on manage company - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/app-mon/add-host-form.jpg"
                />

                <p>The host will get added.</p>

                <h2>Edit Host</h2>

                <p>
                  In order to edit an existing host, Navigate to the
                  <strong> &quot;Hosts&quot; </strong> page.
                </p>

                <img
                  alt="Click on crm settings - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/app-mon/go-to-hosts-page.jpg"
                />

                <p>
                  Click on <strong>&quot;Edit Host&quot;</strong> icon for the
                  host you want to edit.
                </p>

                <img
                  alt="Click on manage company - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/app-mon/click-on-edit-host.jpg"
                />

                <aside className="doc-note">
                  <strong>Note: </strong>
                  Host ID can not be edited.
                </aside>

                <p>
                  Now edit the host details as per your requirement and click on{" "}
                  <strong>&quot;Update host&quot;</strong>.
                </p>

                <img
                  alt="Click on manage company - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/app-mon/edit-host-form.jpg"
                />

                <p>The host will get edited.</p>
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
