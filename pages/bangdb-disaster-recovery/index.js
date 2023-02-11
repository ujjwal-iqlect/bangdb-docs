import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Breadcrumb from '../../components/Breadcrumb';
import DocArticle from '../../components/DocArticle';
import HighlightedCpp from '../../components/HighlightedCpp';

export default function BangdbDisasterRecovery() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>BangDB Disaster Recovery (DR)</title>
        <meta
          name="description"
          content="BangDB Disaster Recovery plan is composed of sections that document resources and procedures to be used in the event that a disaster occurs."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="BangDB Disaster Recovery (DR)" />
        <meta
          property="og:description"
          content="BangDB Disaster Recovery plan is composed of sections that document resources and procedures to be used in the event that a disaster occurs."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="BangDB Disaster Recovery (DR)" />
        <meta
          name="twitter:description"
          content="BangDB Disaster Recovery plan is composed of sections that document resources and procedures to be used in the event that a disaster occurs."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">BangDB Disaster Recovery</h1>
        <div className="article-body">
          <h2>Introduction</h2>
          <p>
            The Disaster Recovery plan is composed of a number of sections that
            document resources and procedures to be used in the event that a
            disaster occurs. Each supported computing platform has a section
            containing specific recovery procedures. There are also sections
            that document the personnel that will be needed to perform the
            recovery tasks and an organizational structure for the recovery
            process.
          </p>
          <h2>Goal of the plan</h2>
          <ul>
            <li>To minimize interruptions to the normal operations.</li>
            <li>To limit the extent of disruption and damage.</li>
            <li>To minimize the economic impact of the interruption.</li>
            <li>To establish alternative means of operation in advance.</li>
            <li>To train personnel with emergency procedures.</li>
            <li>To provide for smooth and rapid restoration of service.</li>
          </ul>
          <h2>Overview of the BangDB Platform and System</h2>
          <p>
            BangDB is a converged database to align with the emerging data
            trends and meeting challenges due to this to help users build modern
            application in time accelerated manner. BangDB combines following
            from very high level.
          </p>
          <ul>
            <li>Multi-model database</li>
            <li>Stream and Time-series data processing</li>
            <li>Graph Processing</li>
            <li>AI</li>
          </ul>
          <p>
            Most of the use cases today are demanding some or all of the above
            features. We have different tools and systems in different area and
            it&apos;s up to the developer or users or organizations to take
            those different pieces and stitch them together before building the
            business application on top of it. It takes lots of resources, time
            and money to build such platform. Further, application building and
            then maintaining such system is hard. Finally having different silos
            for different areas makes it hard to scale and perform at the same
            time.
          </p>
          <p>
            Therefore, there is a need for a converged platform, which natively
            supports these different high-level functionalities and allows users
            to focus on building the application. The platform acts like
            off-the-shelf no-code platform for users to build applications.
            BangDB is currently being offered in following different manner:
          </p>
          <ol>
            <li>Community Edition</li>
            <li>SaaS</li>
            <li>Enterprise</li>
          </ol>
          <h2>Here is the list of features of BangDB</h2>
          <Image
            width="1517"
            height="630"
            src="https://bangdb.com/wp-content/uploads/2022/09/Main-Constructs-BangDB-NoSQL-Database.svg"
            alt="Features of BangDB NoSQL Database"
          />
          <h2>BangDB Stack</h2>
          <Image
            width="1093"
            height="772"
            src="https://bangdb.com/wp-content/uploads/2022/09/High-Level-BangDB-Stack.svg"
            alt="BangDB Stack"
          />
          <h2>Intended Audience</h2>
          <p>
            This document is intended for Developer, SysAdmin, DevOps, CIOs and
            other group of people who are managing the BangDB deployment. The
            document provides a blueprint for managing BangDB deployment and
            ensuring that the Business operation and data is resilient to any
            unforeseen and untoward issues/incidents. Data, application is
            secure from any disruptions and data is never lost in any case.
          </p>
          <h2>Purpose of Disaster Recovery plan</h2>
          <p>
            Data is at the core of any application and business. It is
            imperative and critical that data is never lost in any case or
            scenario. Data loss may take place in real world for many different
            reasons, and we can put them in following categories.
          </p>
          <ol>
            <li>Catastrophic failure of system, infrastructure</li>
            <li>Calamities and natural disaster</li>
            <li>Human error</li>
          </ol>
          <p>
            All the above are disaster can happen and our plan should be ready
            to tackle that. The document has details and steps for concerned
            people to ensure that data is always secure, persisted and recovered
            in any scenario.
          </p>
          <p>
            A backup and disaster recovery plan and strategy is necessary to
            protect the mission critical data against these types of attacks and
            incidents. With the strategy in place, business and concerned people
            will be at peace as far as data protection is concerned as they will
            have a plan in case of such disasters.
          </p>
          <p>
            Database systems are the most important and critical piece in the
            applications. It&apos;s of paramount importance for organizations to
            ensure the safeguard of the data and plan in place to recover the
            data in any condition. However, it&apos;s also not straight forward
            to create the plan as it can get from simple to complex depending
            upon the criteria, context and requirement. Therefore, a lot of
            inherent support is sought from the database itself.
          </p>
          <p>
            BangDB has worked hard and continuously working to simplify the
            process yet provide absolute guarantee for data recovery and
            persistence.
          </p>
          <h2>Backup considerations</h2>
          <p>
            Backup systems takes the snapshot of data at any point in time and
            secures it for future recovery. When we need to recover data, we
            simply use the snapshot to take us to the point at which the backup
            was taken. However, there are many factors which may be important to
            consider defining the best strategy for the organization. It is also
            important to take the various configurations and db strategy also
            into account. Most of the time the database configuration may have
            influence on the backup strategy and at the same time the backup
            considerations may require database configurations to be set in a
            particular manner.
          </p>
          <p>
            There are two important point for organization to consider for
            setting up the disaster recovery plan in place.
          </p>
          <ol>
            <li>Recovery point objective</li>
            <li>Recovery time objective</li>
            <li>Cost & Budget</li>
          </ol>
          <p>
            BangDB had both above as its design goals. BangDB has several
            elements in place to configure things in a way to be able to align
            with the needs of the organization using simple configuration. But
            the setup of these configurations is important hence defining the
            above two goals are important before deciding the backup strategy.
          </p>
          <p>
            There are tradeoff and the application owner, or the organization
            has to work with. BangDB allows the flexibility and means to deal
            with the requirements as required.
          </p>
          <p>
            The other important aspect is the maintenance, resource cost for
            managing the backups. These need to be evaluated in the entire
            application or organization context.
          </p>
          <div className="table-container">
            <table>
              <tbody>
                <tr>
                  <th>Point of consideration</th>
                  <th>Description</th>
                </tr>
                <tr>
                  <td>Recovery point objective</td>
                  <td>
                    How much data loss is the organization is willing to
                    tolerate in the event of an incident
                  </td>
                </tr>
                <tr>
                  <td>Recovery time objective</td>
                  <td>
                    How quickly the data should be recovered in case of an
                    incident. This includes the time to copy the data back to
                    the servers, recover the data by replaying logs if set up or
                    designed the configuration that way
                  </td>
                </tr>
                <tr>
                  <td>Isolation</td>
                  <td>
                    Backups are to be separated from the physical production
                    system, ideally in multiple places
                  </td>
                </tr>
                <tr>
                  <td>Backup types</td>
                  <td>
                    Backup entire db files
                    <br /> Backup only WAL files
                    <br /> Backup both db and WAL file
                    <br />
                  </td>
                </tr>
                <tr>
                  <td>Restore process</td>
                  <td>
                    This is very important part of the strategy and BangDB
                    offers several choices and options here.
                    <br /> Backup can be done using the inbuilt auto-recovery
                    process or by restoring the entire db files
                  </td>
                </tr>
                <tr>
                  <td>System state during backup</td>
                  <td>
                    In case of distributed deployment and shards, it is
                    important to remain consistent from the data and application
                    point of view
                  </td>
                </tr>
                <tr>
                  <td>Backup mechanism</td>
                  <td>
                    Copy of files, db and/or WAL files
                    <br /> Block/disk sync, snapshots, datadump
                  </td>
                </tr>
                <tr>
                  <td>Replication</td>
                  <td>Replication of data also provides natural backup</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h2>BangDB backup strategies</h2>
          <ol style={{ listStyle: 'upper-alpha' }}>
            <li>
              <strong>Data dump strategy</strong>
            </li>
            <p>
              BangDB has datadump functionality which dumps the entire database
              (or selected tables) on the disk. This dump file can then be
              copied to secure location for future need.
            </p>
            <p>
              Database doesn&apos;t need to be stopped, it is done like any
              other operation.
            </p>
            <p>
              <strong>Steps to take backup</strong>
            </p>
            <ol>
              <li>
                Call <code>datadump()</code> from client or CLI
              </li>
              <li>
                Copy the dump file to network storage or cloud or elsewhere
              </li>
            </ol>
            <p>
              <strong>Steps to recover</strong>
            </p>
            <ol>
              <li>Copy the dump file to the data folder</li>
              <li>Start the database</li>
            </ol>
            <p>
              <strong>Pros:</strong>
            </p>
            <ol>
              <li>Simple to take the dump</li>
              <li>
                It takes the database files only, log (WAL) files dump is not
                required
              </li>
              <li>
                Recovery isn&apos;t required as db files are in proper state
                when dumped, hence BangDB starts without getting into recovery
                mode
              </li>
              <li>
                Good for small size database, with less load and operations
              </li>
            </ol>
            <p>
              <strong>Cons:</strong>
            </p>
            <ol>
              <li>
                Takes the full db dump all the time, hence heavy operation, not
                suitable for frequent dumps
              </li>
              <li>
                Entire db files need to be copied all the time to network
                location for securing
              </li>
              <li>
                Not suitable for busy and mid to large size database for
                frequent backups
              </li>
            </ol>
            <li>
              <strong>Copy the DB and log files</strong>
            </li>
            <p>
              BangDB will keep copying the underlying db and log files to some
              secure location. Typically, a daemon or some other service is run
              by the users to keep taking backups of the db and log files. This
              doesn&apos;t disturb database at all. This is totally dependent on
              network bandwidth. Ideally there should be a dedicated network
              line for these copying so that normal connections are not used for
              this copy as the size of the files could be large. We can also set
              up block level copy or syncing, further many other efficient tools
              and techniques can be used to keep the mounted disk in sync with
              other network disk. Filesystems snapshots, filesystem copy tools,
              or other enterprise tools can be used to just keep these two
              folders synced with the backup folders.
            </p>
            <p>
              Database doesn&apos;t need to be stopped, and it can be done
              anytime as required or configured.
            </p>
            <p>
              <strong>Steps to take backup</strong>
            </p>
            <ol>
              <li>
                Copy the db files (all the files under /data forlder) and the
                WAL files (all the files under /logdir folder) to secure
                location
              </li>
            </ol>
            <p>
              <strong>Steps to recover</strong>
            </p>
            <ol>
              <li>Copy the backup files into the /data and /logdir folder</li>
              <li>Start the server, Server does auto recovery</li>
            </ol>
            <p>
              <strong>Pros:</strong>
            </p>
            <ol>
              <li>Very simple operation</li>
              <li>
                Recovery is simple and automated, nothing extra is required from
                users&apos; side
              </li>
              <li>
                Crash, machine breakdown or any other case, DB will always auto
                recover
              </li>
              <li>
                It is based on Write Ahead Log (WAL) mechanism coupled with
                checkpointed db data, hence it recovers very fast (average
                50MB/sec). If checkpointing is frequent, then few seconds are
                good to recover the data (as it will only recover from last
                checkpoint mark)
              </li>
            </ol>
            <p>
              <strong>Cons:</strong>
            </p>
            <ol>
              <li>
                Need to copy both /data and /logdir folder. Better sync the
                mounted FS
              </li>
            </ol>
            <p>
              The recovery time depends on database checkpointing configuration.
              Default checkpointing frequency is very aggressive for BangDB
              hence this works for most of the heavy load scenarios as well.
              However, we can tweak this as per the requirement to balance the
              RPO and RTO tradeoffs.
            </p>
          </ol>
          <p>
            <strong>To set this param correctly, use following:</strong>
          </p>
          <HighlightedCpp
            code={`// by default, it's 1
CHKPNT_ENABLED = 1`}
          />
          <HighlightedCpp
            code={`// default value is 933700 micro sec [ almost 1 sec]
CHKPNT_FREQ = 933700`}
          />
          <h2>Notes on checkpointing</h2>
          <p>
            If checkpoint is ON, then BangDB keeps syncing the data from the
            buffer pool (page cache) to this disk. This means that it checks its
            internal stats and figures out if data needs to be written to the
            disk or not. Since WAL is in place for BangDB, therefore,
            checkpointing is not mandatory. WAL itself guarantees the data
            durability and when required, DB can recover the data from WAL files
            using auto recovery mode. The WAL recovers with around 50MB /sec
            speed. Therefore, the time taken for recovery depends on how much
            data is to be recovered.
          </p>
          <p>
            When checkpointing is ON, then db recovers the data from the last
            checkpointed mark. Which means all the data that has not been
            written to the db files. Hence the amount of data to be recovered
            can be reduced to great extent. Size of db also doesn&apos;t matter.
            Depending upon the checkpointing setting, and the number of
            operations happening on database, if on an average 1 GB of data is
            not checkpointed, then recovery would take ~1000/50 = ~20 seconds.
            At this point the data is recovered and db is in consistent state.
            Post this, DB may do more operations as well to get few stats ready.
          </p>
          <p>
            Therefore, it&apos;s important to set the checkpoint appropriately.
            More frequent checkpointing will cause db to do more of data sync
            work and less would cause higher recovery time. Please note that,
            checkpoint frequency doesn&apos;t force db to checkpoint every time,
            it&apos;s up to the db to take the call and it uses several
            parameters to decide whether to write data or not.
          </p>
          <h2>BangDB backup strategies comparison</h2>
          <div className="table-container">
            <table>
              <tbody>
                <tr>
                  <th></th>
                  <th colSpan="2">File System Snapshots</th>
                  <th>Datadump</th>
                </tr>
                <tr>
                  <td>Recovery Point Objective</td>
                  <td>
                    Default snapshot frequency along with checkpoint frequency.
                    Data and logdir. Works good for mid to large database with
                    above average number of all sorts of operations. Around 1
                    sec for checkpoint frequency and 1 to 6 hours of backup
                    frequency (It could be continuous as well using other tools)
                  </td>
                  <td>
                    Customized configuration setting based on requirements. For
                    extreme high performance and less frequent snapshots.
                    Checkpoint setting could be in few seconds and every 6 hours
                    to 24 hours of backups frequency. Only data file could also
                    be copied (without log files), however it will be then ask
                    for RPO tolerance
                  </td>
                  <td>
                    Every day once is good but suitable for small database with
                    less operations
                  </td>
                </tr>
                <tr>
                  <td>Recovery Time Objective</td>
                  <td>
                    It depends on many things outside database as well, for
                    example, where is data backup on network, latency, size etc.
                    But from DB perspective, this works fast. More frequent
                    snapshots, faster recovery time
                  </td>
                  <td>
                    If customized, then it depends on frequency of checkpoint
                    and backup. If only DB files are copied then recovery time
                    is fastest, however RPO needs to be adjusted accordingly
                  </td>
                  <td>
                    No loss of time from DB perspective for recovery, only
                    network latency and size of dump file is important
                  </td>
                </tr>
                <tr>
                  <td>Isolation</td>
                  <td>
                    It depends on how far the snapshots are kept and the latency
                    to get the data copied from remote server to the db server
                  </td>
                  <td>
                    It depends on how far the snapshots are kept and the latency
                    to get the data copied from remote server to the db server
                  </td>
                  <td>
                    It depends on how far the snapshots are kept and the latency
                    to get the data copied from remote server to the db server
                  </td>
                </tr>
                <tr>
                  <td>Performance Impact</td>
                  <td>
                    Default setting is optimal for high performance of DB, RPO
                    and RTO. Therefore, most of the time settings should be good
                    for mid to large size database. But the copying of data back
                    and forth would take time, syncing at disk level could be
                    efficient but cost need to be considered
                  </td>
                  <td>
                    We can customize the parameters and set them according to
                    our need. High performance at run time would mean longer
                    recover time due to less checkpoint hence longer recovery
                    time
                  </td>
                  <td>
                    Recovery time is highest in this case but the run time
                    performance is lowest. <br />
                    <br /> It depends on how far the snapshots are kept and the
                    latency to get the data copied from remote server to the db
                    server
                  </td>
                </tr>
                <tr>
                  <td>Restore process</td>
                  <td>
                    BangDB auto recovers the data, no other steps are needed
                  </td>
                  <td>
                    BangDB auto recovers the data, no other steps are needed
                  </td>
                  <td>Recovery is not needed</td>
                </tr>
                <tr>
                  <td>Deployment complexity</td>
                  <td>Low</td>
                  <td>Low</td>
                  <td>Low</td>
                </tr>
                <tr>
                  <td>Flexibility</td>
                  <td>High</td>
                  <td>High</td>
                  <td>Low</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h2>Details of BangDB backup mechanism</h2>
          <h3>High level of BangDB checkpoint and backup operations</h3>
          <p>
            This describes how BangDB checkpoints the data and several steps for
            the files and data backup.
          </p>
          <Image
            width="1074"
            height="1011"
            src="https://bangdb.com/wp-content/uploads/2022/11/DR-2-1.svg"
            alt="Disaster Recovery 2"
          />
          <h2>Disaster Recovery with different availability zones</h2>
          <p>
            BangDB can be deployed in multiple availability zones and the files
            and data backed up accordingly. This also ensures higher
            availability.
          </p>
          <Image
            width="2035"
            height="814"
            src="https://bangdb.com/wp-content/uploads/2022/11/DR-1.svg"
            alt="Disaster Recovery 1"
          />
          <h2>Critical Timeframe, System Impacts and Statements</h2>
          <ul>
            <li>Findings, what happened, when did it occur</li>
            <li>Stake holders reported about the incidence</li>
            <li>
              Team and clients reported that they are somewhat vulnerable to an
              outage (in case the availability is not set up or the entire
              availability is at risk)
            </li>
            <li>Time assessment for data recovery</li>
            <li>Start the Recovery process and update stake holders</li>
            <li>
              Collect the evidence of the incidents. Core dump if any, dblogs,
              syslogs, binaris. Forward it for investigations to concerned team.
              Take the backup of the db and log files if possible
            </li>
            <li>
              Escalate as per plan and if necessary for possible outages and if
              outages have occurred
            </li>
          </ul>
        </div>
      </DocArticle>
    </React.Fragment>
  );
}
