import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "../../../components/Breadcrumb";

export default function WhatsBangDB() {
  return (
    <React.Fragment>
      <Head>
        <title>BangDB Features - High level</title>
        <meta name="description" content="BangDB Features - High level"></meta>
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="BangDB Features - High level" />
        <meta
          property="og:description"
          content="BangDB Features - High level."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="BangDB Features - High level" />
        <meta
          name="twitter:description"
          content="BangDB Features - High level."
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
              <h1 className="article-title">BangDB Features - High level</h1>
              <div className="article-body">
                <p>
                  Following is the gist of all the features supported by BangDB.
                </p>

                <pre>
                  {`Data Model:	         KV, Doc, binary data, large files, Graph, time-series
Buffer pool: 	     Page cache, manages every single byte of data.
Index:		         Primary, secondary, composite, nested, reversed, geo-index, Vector*
WAL:		         Transaction, durability, crash recovery, availability
IO-Layer:			 SSD as RAM+, high performance IO, predictive IO
Deployment:	         Embedded, Client/Server, p2p distributed, Hybrid, Cloud
Enterprise grade:    Data replication, disaster recovery, business continuity
Security:		 	 End-to-end TLS/SSL based, user service and API key for auth
Stream:		 	     Time-series, ETL, statistics, aggregates, CEP, anomaly, pattern
AI:		             ML, IE, DL, train, prediction on stream, AutoML, version, deploy
Graph:		 	     Graph data platform, Cypher query, Ontology
Cloud platform:	 	 Ampere, an interactive front-end platform on cloud
Performance:	 	 200K+IOPS, 20K+ Events/sec - per commodity machine
Language:	         Database - C/C++, clients - C/C++, Java, C#, Python
Connect:	         Custom clients, CLI, REST API
License:		 	 Free - BSD 3, SaaS, Enterprise - Custom`}
                </pre>

                <h2>Multi modal database</h2>
                <p>
                  BangDB supports many kinds of data types and works with them
                  in interlinked manner as required. Follow table lists some of
                  the different kinds of data supported as of now which allows
                  us to store different data in their native and natural forms
                  within the database.
                </p>

                <pre>
                  {`Key Value 	          - Value as opaque
Document 	          - Json Doc
Timeseries 	          - Real-time events
Graph 		          - Linked data, triple
Model, Video, audio   - Large binary files
ML Models	          - AutoML
`}
                </pre>

                <div className="flex items-center justify-center mt-5">
                  <Image
                    alt="Multi Modal Database - BangDB"
                    width={280}
                    height={450}
                    src="/assets/about/19.png"
                  />
                </div>

                <h2>Stream Processing</h2>

                <p>
                  Most of the data is flowing in streaming manner, these are
                  time-series data that come in real-time, value diminishing
                  with time. Therefore, they should be ingested and processed in
                  real-time as well to extract the intelligence for several
                  actions to improve the ongoing operations. The process also
                  ensure that we find anomalies, patterns and interesting events
                  in a continuous and real-time manner that could be used for
                  several automations.
                </p>

                <p>
                  Stream processing in BangDB is designed and implemented to be
                  hyper real-time. The processing of data and several insights
                  are extracted while data is still not persisted. BangDB
                  operates on every single event to perform several processing
                  to achieve several business goals. BangDB deals with stream as
                  a native construct, and for a use case implementation, it will
                  keep dealing with set of streams to achieve the goal. The
                  stream can refer with other stream to enrich itself or join
                  with other stream to create another stream or filter from the
                  current stream to output into another stream and so on. These
                  can be done recursively and iteratively, therefore, BangDB
                  implements a stream processing engine which is powerful and
                  has many different capabilities naturally available to it when
                  it comes to processing the data.
                </p>

                <ol>
                  <li>
                    ETL - BangDB can transform the data and enrich it during the
                    event ingestion.
                  </li>
                  <li>
                    Refer - One stream can refer another stream to enrich the
                    data or take some action.
                  </li>
                  <li>
                    Running Statistics - BangDB compute statistics as events are
                    ingested, in continuous real-time manner (min, max, count,
                    average, std dev, ex Kurtosis etc…)
                  </li>
                  <li>
                    Group by - We can compute the statistics while grouping the
                    attributes by value.
                  </li>
                  <li>
                    TopK - streaming topk for attributes, which is mem and time
                    bounded processing.
                  </li>
                  <li>Unique count - Using hyper log log.</li>
                  <li>
                    Join - A stream can join with other and produce third
                    stream.
                  </li>
                  <li>
                    CEP - Complex event processing for finding complex patterns,
                    anomalies, and events of interest, for auto actions.
                  </li>
                  <li>
                    Graph processing - Auto update of the graph underneath for
                    various triples (subject, object, and predicate each with
                    properties)
                  </li>
                  <li>
                    1Filter - Use custom logic to filter data and send it to
                    another stream or processing.
                  </li>
                  <li>
                    1Entity - Various attribute long term statistics for
                    decision making.
                  </li>
                  <li>
                    1PRED - use model to predict and enrich the event or act.
                  </li>
                  <li>
                    1Table - Refer to another table, a document or otherwise for
                    enriching data.
                  </li>
                  <li>
                    1Train - use streaming data to train models, use them and
                    retrain as required.
                  </li>
                  <li>
                    1Corelate - predictive or statistical techniques for
                    correlation of attributes or events.
                  </li>
                  <li>
                    1Forward - Simple bundle and forward a set of data to
                    another stream or table.
                  </li>
                  <li>
                    1Work - Send data to CRM, or Work Management Systems in
                    automated manner.
                  </li>
                  <li>1Notifications - Alerts, auto actions, drill down.</li>
                  <li>
                    1Sliding window - This is a continuous sliding window for
                    continuous analysis.
                  </li>
                </ol>

                <p>
                  Some of the highlights of the BangDB stream processing is as
                  follows.
                </p>

                <div className="table-container">
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <ul>
                            <li>
                              Time series data processing for Real-time
                              analytics
                            </li>
                            <li>
                              Sliding window (continuous) for limitless
                              processing
                            </li>
                            <li>
                              Running aggregates and statistics Training,
                              prediction on streaming data
                            </li>
                            <li>
                              Data governance and integrity enforcing can be
                              done using stream schema
                            </li>
                          </ul>
                        </td>
                        <td>
                          <Image
                            alt="Time Series - BangDB"
                            width={493}
                            height={470}
                            src="/assets/about/20.png"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <ul>
                            <li>Complex Event Processing - State based</li>
                            <li>
                              Anomaly & pattern detection in real time,
                              Automated
                            </li>
                            <li>Take actions in automated manner</li>
                          </ul>
                        </td>
                        <td>
                          <Image
                            alt="Time Series - BangDB"
                            width={493}
                            height={470}
                            src="/assets/about/21.png"
                          />
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <p>
                            Continuous ingestion Time series data and event from
                            anywhere, any device or files or systems
                          </p>
                        </td>
                        <td>
                          <p>
                            Agents, JavaScript, SNMP, Kafka, Files, Logs,
                            Applications, Devices, Machines, Vehicles, Sensors,
                            Cameras - Any data from Anywhere
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>
                            Continuous processing of the Time series data and
                            events
                          </p>
                        </td>
                        <td>
                          <p>
                            Auto ETL, Pattern and Anomaly detection, Running
                            statistics, Complex Event Processing
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>Auto action from the stream processing layer</p>
                        </td>
                        <td>
                          <p>
                            Trigger actions in automated manner, Notifications,
                            integrations with Systems.
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>
                            Handle large amount of data using much lesser
                            resources.
                          </p>
                        </td>
                        <td>
                          <p>
                            Sliding window allows us to process enormous amount
                            of data using much lesser resources in continuous
                            and high-performance manner.
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
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
