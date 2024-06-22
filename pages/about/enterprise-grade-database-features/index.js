import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "../../../components/Breadcrumb";

export default function EnterpriseGradeDatabaseFeatures() {
  return (
    <React.Fragment>
      <Head>
        <title>Enterprise grade database features - BangDB</title>
        <meta
          name="description"
          content="Enterprise grade database features - BangDB"
        ></meta>
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Enterprise grade database features - BangDB"
        />
        <meta
          property="og:description"
          content="Enterprise grade database features - BangDB"
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="Enterprise grade database features - BangDB"
        />
        <meta
          name="twitter:description"
          content="Enterprise grade database features - BangDB"
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
                Enterprise grade database features
              </h1>
              <div className="article-body">
                <p>
                  BangDB is enterprise grade database both from implementation
                  and architectural perspective. It is written and created for
                  enterprise level use cases, requirements and need. BangDB is
                  designed with the security, data governance, business
                  continuity, scale, performance, cloud readiness etc. at the
                  center of the goals.
                </p>

                <p>
                  Business Continuity, High Availability, Disaster Recovery, and
                  Data Resiliency
                </p>

                <p>
                  BangDB is a robust database but at the same time simple at the
                  core level, which allows it to offer several must have
                  enterprise grade features without any compromise or overhead.
                  Following points highlights the key areas in this regard for
                  BangDB.
                </p>

                <div className="flex items-center justify-center">
                  <Image
                    alt="Enterprise Grade Database Features - BangDB"
                    width={493}
                    height={470}
                    src="/assets/about/26.png"
                  />
                </div>

                <ul>
                  <li>
                    BangDB Cluster may start with 3 and then scale horizontally
                    by adding more machines/vms.
                  </li>
                  <li>
                    The database is replicated [ could be across DC/ Cloud]
                  </li>
                  <li>
                    We can have 1 to 3 replica per node, each could be for
                    configured for read/write.
                  </li>
                  <li>
                    BangDB works with auto failover, which maintains operation
                    continuity without business disruption.
                  </li>
                  <li>
                    Load balance - within and across, using default or user
                    defined method.
                  </li>
                  <li>Scale horizontally, Shard logically/ physically.</li>
                  <li>
                    High availability - four 9&apos;s using HA model is in
                    default mode.
                  </li>
                </ul>

                <h2>Data Quality, Governance</h2>

                <p>
                  Maintaining the data integrity and quality when we perform so
                  many different actions on the data, should not be left to the
                  users and their applications. The database should provide
                  enough constructs and means to ensure this in automated
                  manner, without any intervention from the user. But at the
                  same time, users should also have means to configure things to
                  ensure these are aligned per their need. Following are key
                  points that BangDB ensures for ensuring the data governance.
                </p>

                <ul>
                  <li>
                    ETL, Data cleaning/filtering during ingestion process - as
                    defined by user or by default.
                  </li>
                  <li>
                    Profiling and summarizing data for enhancement and policies
                  </li>
                  <li>
                    Schema enforcing for data integrity and standardization.
                  </li>
                  <li>
                    Pattern and anomaly detection using running statistics and
                    AI on data.
                  </li>
                  <li>Searchability across data in different layers</li>
                  <li>
                    Continuous monitoring and traceability using ops logs.
                    Alerts, notifications.
                  </li>
                  <li>
                    Rule based filter or verifications at many different places
                    to ensure conformity.
                  </li>
                </ul>

                <h2>Security</h2>

                <p>
                  BangDB is implements enterprise grade security with BangDB. In
                  fact, security is not an afterthought for BangDB but one of
                  the basic initial goals of the system. Therefore, it runs
                  continuously and natively within BangDB.
                </p>

                <ul>
                  <li>
                    All access need to be authenticated by the user service
                    using API Key
                  </li>
                  <li>User access is protected using id/pwd for login.</li>
                  <li>
                    Short lived tokens (apart from API key) are used to further
                    add to the security for admin jobs
                  </li>
                  <li>
                    SSL/TLS based data transport and communication, for
                    encryption of data over wire.
                  </li>
                  <li>
                    Data is stored in binary format within BangDB. Which means
                    these files can&apos;t be read.
                  </li>
                  <li>
                    Data/ fields could be obfuscated based on input map by the
                    user.
                  </li>
                  <li>Co-location of servers and databases as needed.</li>
                  <li>
                    DB verifies the request, queries for SQL injection or
                    related activities.
                  </li>
                  <li>
                    DB continuously writes and maintains users&apos; activities log
                    for every action.
                  </li>
                  <li>
                    DB core logs are also written for all the operations,
                    success, or failures.
                  </li>
                  <li>
                    The servers are hardened for any random attack over the
                    network.
                  </li>
                </ul>

                <h2>Moving to Production at Scale</h2>

                <p>
                  The convergence and deep tech deployment model allows
                  Enterprises to take BangDB with all necessary features and
                  support to Production in just few days compared to many weeks
                  and months with most of the other databases. Following are the
                  required steps to be followed to get to production as quickly
                  as possible.
                </p>

                <ul>
                  <li>
                    Define the deployment model based on your requirements.
                  </li>
                  <li>
                    Configure the clustering for high availability, read/write
                    throughput, data size, instance size.
                  </li>
                  <li>
                    Backup, DR plans, SSL certificates, configurations in place
                  </li>
                  <li>Test, Staging and Prod environment set up.</li>
                  <li>
                    Define scope and implement the features of the application.
                  </li>
                  <li>
                    Set up metadata driven approach for augmentations or
                    changes.
                  </li>
                  <li>
                    Set up CI environment, processes, tools for agile
                    development model.
                  </li>
                  <li>
                    Cloud, bare metal, Containers, OpenShift serverless - many
                    ways to deploy as required.
                  </li>
                  <li>
                    Monitor cluster, instances and health using Ampere (UI).
                  </li>
                  <li>
                    Alerts, notifications configuration for automation and
                    action.
                  </li>
                </ul>

                <h2>Compliance</h2>
                <p>
                  BangDB complies with the extensive enterprise requirements and
                  maintains, shares the files/data as required. The entire
                  compliance docs could be downloaded for reference.
                </p>

                <ul>
                  <li>Approach Cyber Conformance</li>
                  <li>Change Management Policy</li>
                  <li>High Availability and DR Overview</li>
                  <li>Pentest report for security</li>
                  <li>Information Security Incident Management Policy</li>
                  <li>Network Security Assess Management Policy</li>
                  <li>Network Security Policy</li>
                  <li>Password Policy Document</li>
                  <li>Policy and Compliance Risk Management</li>
                  <li>Risk Management Plan</li>
                  <li>Software Development policy</li>
                  <li>Threat Model for BangDB</li>
                  <li>Network Diagram of BangDB</li>
                  <li>BangDB Dependent Libraries</li>
                  <li>DAST Test Report</li>
                  <li>Employee Background Verification</li>
                </ul>
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
    props: { aboutSidebar: true },
  };
}
