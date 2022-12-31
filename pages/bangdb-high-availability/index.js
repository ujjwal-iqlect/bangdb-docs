import React from "react";
import Head from "next/head";
import Image from "next/image";
import Breadcrumb from "../../components/Breadcrumb";
import DocArticle from "../../components/DocArticle";

export default function BangdbHighAvailability() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>BangDB High Availability (HA)</title>
        <meta
          name="description"
          content="High availability not only protects business from losing data but also provides mechanism for protecting the data and other critical aspect of the business."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="BangDB High Availability (HA)" />
        <meta
          property="og:description"
          content="High availability not only protects business from losing data but also provides mechanism for protecting the data and other critical aspect of the business."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="BangDB High Availability (HA)" />
        <meta
          name="twitter:description"
          content="High availability not only protects business from losing data but also provides mechanism for protecting the data and other critical aspect of the business."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">BangDB High Availability</h1>
        <div className="article-body">
          <h2>Introduction</h2>
          <p>
            Business continuity requires services to remain available 99.99 to
            99.999% of time. This requires resilience for disruptions and any
            unknown incidents which may affect the business continuity.
            Businesses need to have plan and capabilities to withstand outages
            due to any reasons (application, machines, natural disaster, network
            issues etc.). Therefore, in order achieve 99.999% of uptime, we need
            to have mechanism for backup and recovery, failovers, load balancing
            for zero or near zero disruptions from the user point of view.
          </p>
          <h2>Benefits of High Availability (HA)</h2>
          <p>
            High availability not only protects business from losing data but
            also provides mechanism for protecting the data and other critical
            aspect of the business. The availability problems could be
            categorized in following different buckets:
          </p>
          <ol
            style={{
              listStyle: "upper-alpha",
            }}
          >
            <li>
              <strong>Planned outages</strong>
            </li>
            <p>
              These are planned maintenance work where the application, servers,
              machines could be updated for various reasons such as upgrade,
              security patches, dependent libraries update etc. Therefore, to do
              this without affecting end users, we can switch the production
              environment to another standby environment, do the upgrade/update
              on the primary environment and then switch back. The same could be
              then repeated for other environments as well. Data backup should
              be done before starting the process.
            </p>
            <li>
              <strong>Unplanned outages</strong>
            </li>
            <p>
              This may happen due to many different reasons, known or unknown.
              However, the plan should be in place to recover from the outage
              and go back to the consistent point for business operation.
            </p>
            <p>
              Human error, Software issues, Hardware failures, Environment
              problems, natural disasters etc. are various possible reasons for
              such outages.
            </p>
            <p>
              A replicated environment for the application along with data
              backup and recovery strategy are important to address this.
            </p>
            <li>
              <strong>Disaster Recovery</strong>
            </li>
            <p>
              Disaster recovery strategy defines the plan to copy the data and
              other important data and recovers the application state using the
              same remotely. It is important to set up the procedure and
              leverage the BangDB inbuilt features to achieve this smoothly. The
              important points to consider here, which has direct implications
              on the plan and strategy definitions, are following.
            </p>
            <ul>
              <li>
                Recovery point objective (RPO) - affects the tolerance of data
                loss
              </li>
              <li>
                Recovery time objective (RTO) - affects the time to recover
              </li>
              <li>Frequency of backup - affects the bandwidth</li>
              <li>Analysis of application, load, size of data etc.</li>
            </ul>
            <li>
              <strong>Efficient backups</strong>
            </li>
            <p>
              Backups are at the center of disaster recovery. Therefore, a clear
              path should be defined based on the needs. This has cost,
              performance, recovery time and other implications, hence should be
              defined clearly in consultations with the business owner for their
              requirements.
            </p>
            <p>
              The important question here is to find out the RPO and RTO, the
              associated cost and budget, performance of application, data size
              etc. We must analyze these to come up with the best possible
              strategy for the backups.
            </p>
            <li>
              <strong>Load balancing</strong>
            </li>
            <p>
              Load balancing not only provides an abstraction for the entire
              application but also allows us to manage the workload and balance
              that accordingly. We can use one or more of following techniques
              to achieve this.
            </p>
            <ul>
              <li>Front End load balance for routing the requests</li>
              <li>Request distribution using servers</li>
              <li>Distributed application and database</li>
            </ul>
          </ol>
          <h2>High availability criteria</h2>
          <ol style={{ listStyle: "upper-alpha" }}>
            <li>
              <strong>Up time requirement</strong>
            </li>
            <p>
              Typically, we must have 99.999% uptime requirement, but it depends
              on the application and business operations. Here is general views
              for different uptime and their downtime.
            </p>
            <ul>
              <li>
                99% uptime means 87 hours of downtime per year (7 hours per
                month)
              </li>
              <li>
                99.9% uptime means around 9 hours of downtime per year (42
                minutes per month)
              </li>
              <li>
                99.99% uptime means around 1 hour of downtime per year (4
                minutes per month)
              </li>
              <li>99.999% uptime means around 5 min of downtime per year</li>
            </ul>
            <p>
              Based on the requirement for uptime, HA plan may be created. It
              also has direct impact on the associated cost and budget.
            </p>
            <li>
              <strong>Recovery Point Objective</strong>
            </li>
            <p>
              How much data loss is the organization is willing to tolerate in
              the event of an incident. Therefore, it defines the frequency with
              which data backup should be taken. Data files and checkpointed
              data replication along with write ahead log. Disk level or block
              level syncing and replication.
            </p>
            <li>
              <strong>Recovery Time Objective</strong>
            </li>
            <p>
              How quickly the data should be recovered in case of an incident.
              This includes the time to copy the data back to the servers,
              recover the data by replaying logs if set up or designed the
              configuration that way.
            </p>
            <li>
              <strong>Resilience Requirement</strong>
            </li>
            <p>
              What&apos;s the level of resilience that application requires.
            </p>
            <ul>
              <li>
                Persist everything, application state, data, log, communications
              </li>
              <li>Persist application state, data, log</li>
              <li>Persist application state, data</li>
              <li>Application state</li>
              <li>Nothing</li>
            </ul>
            <li>
              <strong>Automated failover and switchover</strong>
            </li>
            <p>
              BangDB has ability to automatically switch to standby. This needs
              to setup and once deployed, the cluster can switch to the standby
              in autonomous manner or manually as well if needed.
            </p>
            <li>
              <strong>System performance</strong>
            </li>
            <p>
              High availability has performance implications. This is due to
              replication mechanism, number of slaves, write and read
              distribution, backup data size, frequency of backups, size of data
              etc. Therefore, it is imperative to incorporate the performance
              need of the application in the entire plan to define the strategy
              points.
            </p>
          </ol>
          <h2>System overview for various HA plan</h2>
          <p>
            BangDB can be deployed with replica in place with the entire system
            behind the load balancer. The replica could be Active-Active or
            Active-Passive with replication in continuous sync manner or in
            batch mode. The replication of operations can happen in sync manner
            or with the file-based sync up or batch mode. Below diagram describe
            the deployment from high level.
          </p>
          <Image
            width="566"
            height="382"
            src="https://bangdb.com/wp-content/uploads/2022/11/HA-1.svg"
            alt="High Availability 1"
          />
          <p>
            We can also set up read and write for different servers, for example
            write for master and read for slave.
          </p>
          <p>
            For higher availability, we may set up multiple masters or we can
            shard the data for scale and then define the replicas for these
            masters as shown in the image below.
          </p>
          <Image
            width="981"
            height="648"
            src="https://bangdb.com/wp-content/uploads/2022/11/HA-2.svg"
            alt="High Availability 2"
          />
          <p>
            Auto failover can be achieved using the built-in mechanism to find
            the dead master and then converting self to master and remaining to
            its slave.
          </p>
          <Image
            width="705"
            height="793"
            src="https://bangdb.com/wp-content/uploads/2022/11/DR-3.svg"
            alt="Auto Failover"
          />
          <p>
            The entire system can then be deployed in multiple availability
            zones for higher availability.
          </p>
          <Image
            width="2035"
            height="814"
            src="https://bangdb.com/wp-content/uploads/2022/11/DR-1.svg"
            alt="Disaster Recovery 1"
          />
        </div>
      </DocArticle>
    </React.Fragment>
  );
}
