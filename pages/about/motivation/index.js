import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "../../../components/Breadcrumb";

export default function Motivation() {
  return (
    <React.Fragment>
      <Head>
        <title>Motivation - Why BangDB?</title>
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
              <h1 className="article-title">Motivation - Why BangDB?</h1>
              <div className="article-body">
                <p>
                  The first question is why did we create a database from
                  scratch? Writing database is very hard and it takes many years
                  to have some basic stuff ready. Databases are one of the
                  hardest software products to create, it involves and uses
                  almost all parts of core computer science concepts, and one
                  needs to solve numerous problems for every part of the system.
                  So, it&apos;s obvious to ask the question. To have a proper
                  answer, we would need to look at the current trend and observe
                  it closely.
                </p>

                <div className="pl-8">
                  <h2>The Trend</h2>
                  <p>
                    There is a subtle but rapid change is going on for several
                    years now, when it comes to &quot;how data is generated and
                    how it&apos;s consumed&quot;. Around 7-10 years ago or so,
                    almost 95% or more data used to come from traditional
                    sources, mostly created by humans. These data used to move
                    with defined and predictable relatively slow speed. Majority
                    of the data were text data and largely structured. Use cases
                    required the actions resulting from the data in the form of
                    reports, dashboards or something which were not hyper
                    real-time in nature.
                  </p>

                  <div className="flex flex-col gap-y-8 items-center justify-center py-8">
                    <Image
                      alt="Data comparison - BangDB"
                      width={493}
                      height={470}
                      src="/assets/about/1.png"
                    />

                    <Image
                      alt="Data comparison - BangDB"
                      width={493}
                      height={470}
                      src="/assets/about/2.png"
                    />
                  </div>

                  <p>
                    For the past 5 years or so, we see huge jump in the newer
                    kinds of data coming from non-traditional sources. Machine
                    is creating way more data than humans can create. All sorts
                    of devices, log files, machines etc. are now streaming data
                    from different disparate sources. These data have less
                    defined structure and they come in all sorts of sizes and
                    shapes yet, they are connected in some sense. These are
                    real-time data where value is perishable if not extracted
                    and analyzed in real-time too. The context is important, and
                    we need to link different data to get the right insight.
                    Need to act in real-time was never more emphasized than
                    today. All of these are changing the users&apos; and
                    clients&apos; requirements and even for a traditional humble
                    use case, we need to address these things in proper way to
                    solve the problem in satisfactorily manner.
                  </p>

                  <p>
                    While the trend is disruptive and happening with
                    unprecedented speed and putting lots of pressure on the
                    organizations, users, and developers to meet the
                    requirements for their use cases, on the other hand,
                    majority of the databases and systems in the market were
                    created decades ago. This is creating an ever-increasing
                    impedance mismatch which cannot be addressed using the older
                    or existing traditional approach.
                  </p>

                  <h2>Use Cases</h2>
                  <p className="pl-8">
                    IOT analysis - Edge | devices| servers | sensors | CEP |
                    monitoring
                    <br />
                    Text + video + audio - Hybrid data ingestion, store, find
                    and analyze
                    <br />
                    Realtime streaming data analysis - forecast | predict |
                    anomaly | continuous
                    <br />
                    Consumer Internet - personalization | lead score |
                    conversions | recommendation
                    <br />
                    Fintech - local and distributed fraud analysis, real-time
                    monitoring, recommendations
                    <br />
                    Vehicle sensor - device data analysis for predictive &
                    personalized service
                    <br />
                    Root cause - Semantic, linked, graph, network data
                    <br />
                    Auto ML/AI - learning and processing streaming data | auto
                    train, deploy, manage
                    <br />
                  </p>

                  <h2>Characteristics of the emerging data</h2>
                  <p>
                    It&apos;s largely unstructured data. This is reflected in
                    the growth rate of database which deals with unstructured
                    data.
                  </p>
                  <ul>
                    <li>
                      80-90% of data is unstructured, in all possible shapes,
                      sizes and textures
                    </li>
                    <li>
                      Data is moving with high speed, from all possible
                      directions.
                      <figure className="py-8">
                        <Image
                          alt="Hyper growth of NoSQL - BangDB"
                          width={493}
                          height={470}
                          src="/assets/about/3.png"
                        />
                      </figure>
                      <p>
                        It&apos;s largely real-time data. This is reflected in
                        the growth of real-time systems and databases.
                      </p>
                    </li>
                    <li>
                      Data is largely time-series, value of data is ephemeral.
                    </li>
                    <li>
                      Real-time and continuous access to intelligence is
                      imperative.
                      <figure className="py-8">
                        <Image
                          alt="Shift towards continious and real-time analytics - BangDB"
                          width={493}
                          height={470}
                          src="/assets/about/4.png"
                        />
                      </figure>
                      <p>
                        It&apos;s largely connected data. This is reflected in
                        the tremendous growth of Graph databases in past few
                        years.
                      </p>
                    </li>
                    <li>
                      Data is interconnected, networked, interlinked, related,
                      interdependent.
                    </li>
                    <li>
                      Graph is required for better intelligence - property and
                      semantic.
                      <figure className="py-8">
                        <Image
                          alt="Graph usage is exploding and most likely will be non-linear - BangDB"
                          width={493}
                          height={470}
                          src="/assets/about/5.png"
                        />
                      </figure>
                      <p>It&apos;s largely predictive data.</p>
                    </li>
                    <li>
                      Data is interconnected, networked, interlinked, related,
                      interdependent.
                    </li>
                    <li>
                      Graph is required for better intelligence - property and
                      semantic.
                    </li>
                    <figure className="pt-6">
                      <Image
                        alt="AI will be used for most of the use cases - BangDB"
                        width={450}
                        height={470}
                        className="w-[450px] h-auto"
                        src="/assets/about/6.png"
                      />
                    </figure>
                  </ul>

                  <h2>What&apos;s driving the trend?</h2>

                  <table className="ml-8">
                    <tbody>
                      <tr>
                        <td>
                          <p>
                            Huge bandwidth, lower latency, and high penetration.
                          </p>
                        </td>
                        <td className="px-6 py-4">
                          <Image
                            alt="Huge bandwidth, lower latency, and high penetration - BangDB"
                            width={450}
                            height={470}
                            className="w-[240px] h-auto"
                            src="/assets/about/7.png"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>SSD is getting cheaper and faster and reliable.</p>
                        </td>
                        <td className="px-6 py-4">
                          <Image
                            alt="SSD is getting cheaper and faster and reliable - BangDB"
                            width={450}
                            height={470}
                            className="w-[240px] h-auto"
                            src="/assets/about/8.png"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>
                            IOT sensors cost is decreasing fast - 50% in 5 years
                            average.
                          </p>
                        </td>
                        <td className="px-6 py-4">
                          <Image
                            alt="IOT sensors cost is decreasing fast - 50% in 5 years average - BangDB"
                            width={450}
                            height={470}
                            className="w-[240px] h-auto"
                            src="/assets/about/9.png"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <h2>What&apos;s the major change?</h2>

                  <p className="pl-8">
                    Modern apps require fusion of different systems to process
                    the data even for the traditional use cases. Which means we
                    need to bring is all kinds of tools and tech, stitch them
                    and then solve our problem in some way.
                  </p>

                  <figure className="py-8 pl-8">
                    <Image
                      alt="Major change - BangDB"
                      width={450}
                      height={470}
                      src="/assets/about/10.png"
                      className="w-9/12 h-auto"
                    />
                  </figure>

                  <p className="pl-8">
                    While document database allows us to process unstructured
                    data, but other elements are needed to be brought in as
                    well.
                  </p>

                  <h2>What&apos;s the major challenge?</h2>

                  <p className="pl-8">
                    Due to the need to handle many kinds of data at once to
                    enable use cases, the developers and organizations are
                    feeling compelled to bring in multiple different databases
                    to create a required system.
                  </p>

                  <ul>
                    <li>To complex and hard.</li>
                    <p>
                      As shown in previous sections, we have different tools and
                      systems in different area, but the onus of bringing them
                      together and creating a platform by stitching them
                      together is on the developer or the organizations.
                    </p>
                    <li>
                      Extreme resource intensive, huge cost and never-ending
                      effort.
                    </li>
                    <p>
                      Stitching is such disparate and heterogenous systems is
                      extremely hard which takes tons of high-tech resources and
                      elongated period which results in huge spend upfront.
                      Frankly, this can&apos;t be done by every company or team
                      as this is totally different beast and needed to be done
                      100 percent in correct manner, else it won&apos;t work.
                    </p>
                    <li>
                      Managing and scaling is too complex, takes lots of time.
                    </li>
                    <p>
                      Even if we somehow create such system, we still need to
                      create our solutions on top of it, which may keep
                      demanding more features and support as we move forward.
                      Further, scaling, distributing, deploying in hybrid mode
                      and several other dev-ops items would also need to be
                      considered.
                    </p>

                    <li>
                      System security cross the boundary and developers need to
                      handle part of this.
                    </li>
                    <p>
                      Security of such system in enterprise environment is
                      another big effort as we will need to somehow manage
                      security homogeneity across these heterogenous systems.
                    </p>

                    <li>
                      Heavy and brittle application, shipping time keeps going
                      up to a frustrating level.
                    </li>
                    <p>
                      Finally, it will be up to the application to provide the
                      join, linking and correlation for data sitting in
                      different systems which makes the application so rigid
                      that it becomes almost impossible for organization and
                      team to add new features in time for their clients and
                      customers. Therefore, creating such system is not a
                      prudent idea and hence this creates an opportunity as well
                      for us to come in and fill the space.
                    </p>
                    <p>
                      Let&apos;s look at this bit more in detail and understand
                      the issues that we can get into if we go with the approach
                      of stitching existing different systems to implement the
                      use cases.
                    </p>
                  </ul>

                  <div className="flex pt-8">
                    <ul>
                      <li>Takes too long to stich such a platform.</li>
                      <li>Managing such system is nightmare.</li>
                      <li>Higher latency, lower performance.</li>
                      <li>Higher cost, less automation.</li>
                      <br />
                      <br />
                      <li>
                        Each silo vertical is different scale unit, quite
                        disparate in usage.
                      </li>
                      <li>
                        Poor resource utilization tends to have uneven patches.
                      </li>
                      <li>
                        Adding a server is{" "}
                        <span className="underline">
                          hard, costly, time consuming
                        </span>
                        .
                      </li>
                    </ul>
                    <div className="flex flex-col gap-y-8">
                      <Image
                        alt="Major challenge 1 - BangDB"
                        width={450}
                        height={470}
                        src="/assets/about/11.png"
                      />

                      <Image
                        alt="Major challenge 2 - BangDB"
                        width={450}
                        height={470}
                        src="/assets/about/12.png"
                      />
                    </div>
                  </div>

                  <h2>Options in the market</h2>
                  <p className="pl-8">
                    There are different systems / databases available in the
                    market and there are many leaders in their respective areas
                    as well. For example, Neo4j is leader in the Graph database
                    space, but it can&apos; handle document or time-series data
                    well. Similarly, Mongodb is leader in the document database
                    area, but it&apos;s very hard to bend it and align with the
                    needs for streaming data analysis and deal with graph
                    structure in truly native manner. Basically, we can&apos;t
                    just take different databases and put them together to work
                    like a single combined system. And we also can&apos;t force
                    all data to align with one database structure and pretend to
                    solve the problem which in the first place needed to keep
                    the data structure and context intact.
                  </p>

                  <p className="pl-8">
                    Many of these databases also lack some of the core database
                    support required for dealing with scale and performance.
                    Such as overflow to disk with performance within the
                    reasonable bound. True concurrency to leverage the machine
                    resources well for high performance required for some of the
                    use cases in real-time.
                  </p>

                  <h2>Why document database alone is not sufficient?</h2>

                  <p className="pl-8">
                    We can argue, why a Document database is not sufficient to
                    handle all types of data? Using the same logic, why a Graph
                    database is not enough to deal with different kinds of data?
                    Let&apos;s try and see why they alone are not adequate and,
                    it&apos;s not recommended to force fit.
                  </p>

                  <ol style={{ listStyleType: "upper-alpha", paddingLeft: 60 }}>
                    <li>
                      Document database is not a stream processing engine. Which
                      means if we can in true sense stream time-series data and
                      expect to do event processing and action taking in real
                      time.
                      <div className="table-container">
                        <table>
                          <tbody>
                            <tr>
                              <td width={"70%"} className="border border-black">
                                <ul>
                                  <li>
                                    Need Stream for Real-time ingestion and
                                    analytics
                                  </li>
                                  <li>Continuous data processing and query</li>
                                  <li>
                                    Need to find patterns & anomalies on
                                    streaming data
                                  </li>
                                  <li>
                                    Need to compute Running aggregates and
                                    statistics
                                  </li>
                                  <li>
                                    Need to Train models, predict on streaming
                                    data
                                  </li>
                                  <li>
                                    State based continuous CEP and actions in
                                    real-time
                                  </li>
                                  <li>Map-update instead of Map-reduce</li>
                                </ul>
                              </td>

                              <td className="border border-black">
                                <p>
                                  Just having timestamp as primary key
                                  wouldn&apos;t be enough to treat document
                                  database as stream processing database.
                                </p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </li>

                    <li>
                      Document database is not a Graph processing engine. This
                      seems bit more obvious as how do we force a triple
                      (subject, object, and predicate) to be stored withing
                      document store with structure preserved for efficient
                      queries and future tasks. Further, graph database can use
                      AI well in largely implicit manner due to its natural
                      layout, if properly preserved.
                      <div className="table-container">
                        <table>
                          <tbody>
                            <tr>
                              <td width={"70%"} className="border border-black">
                                <ul>
                                  <li>
                                    Graph native integration with the stream
                                    processing.
                                  </li>
                                  <li>
                                    Storing nodes and triples (subject, object,
                                    and predicate)
                                  </li>
                                  <li>
                                    Graph native algo support requires different
                                    store model.
                                  </li>
                                  <li>
                                    Leveraging the relations for queries over
                                    the network
                                  </li>
                                  <li>
                                    Storing nodes and triples (subject, object,
                                    and predicate)
                                  </li>
                                  <li>
                                    Ontology and property graph requires
                                    traversing links.
                                  </li>
                                  <li>
                                    Avoiding run-time relation-based joins
                                  </li>
                                </ul>
                              </td>

                              <td className="border border-black">
                                <p>
                                  Just having &quot;refid&quot; embedded in the
                                  document, is not enough to treat document
                                  database as Graph processing database.
                                </p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </li>

                    <li>
                      Document database doesn&apos;t have AI right where data
                      is. Which means we need to export data to a AI layer, deal
                      with ML ops, train model and then import the model back
                      into the system or use it at application level. This is
                      clearly not scalable model. Also, it makes several jobs
                      inefficient or time taking, error prone for constant and
                      continual update of ML models.
                      <div className="table-container">
                        <table>
                          <tbody>
                            <tr>
                              <td width={"70%"} className="border border-black">
                                <ul>
                                  <li>
                                    It remains largely manual task to train
                                    models [ even when metadata is largely fixed
                                    ]
                                  </li>
                                  <li>
                                    Versioning, deployment of models remains a
                                    challenge.
                                  </li>
                                  <li>
                                    AutoML - very hard from infra perspective
                                  </li>
                                  <li>
                                    Metadata, data, models all mostly, are not
                                    sync
                                  </li>
                                </ul>
                              </td>

                              <td className="border border-black">
                                <div className="w-full min-h-[150px] flex items-center justify-center">
                                  <Image
                                    alt="C point - BangDB"
                                    width={450}
                                    height={470}
                                    src="/assets/about/13.png"
                                  />
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </li>
                  </ol>
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
