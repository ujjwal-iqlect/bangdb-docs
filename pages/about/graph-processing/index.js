import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "../../../components/Breadcrumb";

export default function GraphProcessingInBangdb() {
  return (
    <React.Fragment>
      <Head>
        <title>Graph Processing - BangDB</title>
        <meta name="description" content="Graph Processing - BangDB"></meta>
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Graph Processing - BangDB" />
        <meta property="og:description" content="Graph Processing - BangDB" />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="Graph Processing - BangDB" />
        <meta name="twitter:description" content="Graph Processing - BangDB" />
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
              <h1 className="article-title">Graph Processing</h1>
              <div className="article-body">
                <h2>Graph Processing</h2>
                <p>
                  Graph processing in BangDB is natively supported. The triple
                  structure is one of the ways to store data in the database
                  along with other structures. BangDB Graph uses novel approach
                  to store the data which increases the graph query performance
                  at scale. BangDB supports property graph and ontology as
                  required. Graph is natively integrated with the stream
                  processing too, so that the graph gets auto updated when event
                  or data arrives in the stream. However, the graph can directly
                  be updated as well.
                </p>

                <p>
                  Data in a graph table for BangDB is defined as triples. A
                  triple contains subject, object and relationship (predicate)
                  between them. All data is stored as triple within the DB.
                  BangDB does clever arrangements and housekeeping to store the
                  data such that various queries can be written and run
                  efficiently. The structure of the query is very similar to
                  “Cypher”. BangDB uses Cypher-like queries to process the data.
                </p>

                <div className="table-container">
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <ul>
                            <li>Natural way to represent data.</li>
                            <li>
                              Very efficient way to define relationships and
                              network.
                            </li>
                            <li>
                              Groups, cliques, segments are available naturally.
                            </li>
                            <li>Makes AI lot more efficient with context.</li>
                            <li>ML embedded in the Cypher directly.</li>
                            <li>Stream updates graph in automated manner</li>
                            <li>Graph as another data model.</li>
                          </ul>
                        </td>
                        <td>
                          <Image
                            alt="Graph processing - BangDB"
                            width={493}
                            height={470}
                            src="/assets/about/22.png"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p>
                  Graph in BangDB is integrated with database, stream processing
                  natively. Which means it can used to link or access data from
                  other part of the database.
                </p>

                <Image
                  alt="Graph Processing 2 - BangDB"
                  width={750}
                  height={470}
                  src="/assets/about/23.png"
                />

                <ul>
                  <li>
                    Graph processing as natively integrated part of the system -
                    Schema Enforcement
                  </li>
                  <li>
                    Cypher/English with explicit/implicit AI for querying data
                    from Graph directly
                  </li>
                  <li>
                    Unique composite index system for storing nodes and
                    relations for high query performance.
                  </li>
                  <li>Property as well as knowledge graph.</li>
                </ul>

                <p>
                  BangDB Graph supports cypher and auto ML & set operations for
                  various queries and run time processing for graph or for
                  stream processing.
                </p>

                <div className="table-container">
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <p>Set operations and running stats within Cypher.</p>
                        </td>
                        <td>
                          <Image
                            alt="Graph processing 3 - BangDB"
                            width={493}
                            height={470}
                            src="/assets/about/24.png"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>Graph native algos.</p>
                        </td>
                        <td>
                          <p>ALL PATH, SHORTEST PATH, MIN CUT, MAX FLOW</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>AI with Cypher - data science within query</p>
                        </td>
                        <td>
                          <p>
                            SIMILARITY, CLUSTER, CENTRALITY, COMMUNITY
                            DETECTION, GROUPS, Any ML Algo integration
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>Complex graph operations at scale</p>
                        </td>
                        <td>
                          <p>
                            CREATE Nodes, Triples, MERGE and DELETE, Scan etc…
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>Functional programming with Graph</p>
                        </td>
                        <td>
                          <p>
                            SYMMETRIC, ASYMMETRIC, DISTINCT, UNIQUE, CONTEXT
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>English language as graph query</p>
                        </td>
                        <td>
                          <p>
                            OpenAI & ChatGPT based language model for ease of
                            use.
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p>
                  The Graph also maintains some level of statistics internally
                  which are quite useful for certain queries type. There are a
                  lot of support here for developers to use and build on it. The
                  major benefit for graph integration with the database is that,
                  this comes naturally and hence eliminates the need for another
                  graph only engine which is required only for some special
                  kinds of need.
                </p>

                <h2>Integrated AI</h2>

                <p>
                  The AI is required for almost all use cases now. There are
                  many reasons we need it but to put it simply, without AI most
                  of the use cases may not be fully done. Therefore, all systems
                  use AI in some form. Since AI can work only if we have trained
                  the model on our data or the contextual data. Therefore, it&apos;s
                  a normal practice to take the data from database or stored in
                  some file system or in data lake etc. and then export the data
                  to an AI layer for training purpose. Once the model is trained
                  and tested and gone through the iterations, it can be imported
                  back to the application which would like to use it for
                  prediction purpose. This is a tedious process; it takes lots
                  of time to complete the cycle. And if we wish to update the
                  model, like for example, retrain the model on updated or newer
                  data, then we will have to repeat the entire steps. This has
                  several shortcomings, and it becomes difficult to automate the
                  ML operations.
                </p>

                <p>
                  Therefore, it may make more sense to bring the AI to the data,
                  rather than taking the data to the AI. Which means, it is lot
                  more efficient if we have the AI right where the data lives,
                  i.e. database. And if we do that then there are tons of
                  benefits that are as by product of the AI native integration
                  with the database.
                </p>

                <ul>
                  <li>
                    BangDB distributes servers for training and predictions for
                    scale and performance purposes.
                  </li>
                  <li>
                    AI is natively integrated with DB, so users may train within
                    database with simple commands or API.
                  </li>
                  <li>
                    Users may bring their own code, models, metadata as well to
                    be used within the database.
                  </li>
                  <li>
                    Automated, repeatable, scalable - train once, set the auto
                    pilot mode ON and DB will keep training and deploying as
                    configured.
                  </li>
                </ul>

                <div className="flex items-center justify-center">
                  <Image
                    alt="Integrated AI - BangDB"
                    width={493}
                    height={470}
                    src="/assets/about/25.png"
                  />
                </div>

                <p>
                  The ML models are kept in memory using LRU list in loaded
                  condition. This allows higher prediction performance at run
                  time. The LRU memory size is configurable and user can
                  allocate as per need.
                </p>

                <p>LRU</p>

                <ul>
                  <li>
                    Abstraction for LRU for any item (template based), models or
                    files.
                  </li>
                  <li>
                    Training and prediction work within allocated memory budget
                  </li>
                  <li>
                    If budget is breached, then expires least used item and
                    loads another one as needed.
                  </li>
                </ul>

                <h2>Document Database</h2>

                <p>
                  BangDB is a document database as well. Which means we can use
                  BangDB for flexible schemas for data, faster inserts, updates,
                  and queries. The APIs for dealing with data is simple and
                  consistent across the layer. There are several types of
                  primary and secondary indexes are supported for efficient
                  storage and access of the data. While we structure graph a bit
                  (in terms of triple), the document is free floating as far as
                  structure is concerned, except that it must be a JSON
                  document.
                </p>
                <p>
                  BangDB provides SQL like query for document database/tables.
                  This is also true for stream tables. Read and write are both
                  concurrent and has high performance in terms of high
                  throughput and low latency. The scan for document table is
                  recursive in nature, even with filters and constraints. This
                  is quite unlike other popular databases in the market, which
                  means range query runs extremely fast with bound on the data
                  size/row returned per call (as defined by the user), leading
                  to high throughput even with lower end machines or vms.
                </p>
                <p>
                  For security and authentication related requirements, BangDB
                  implements its own user service. The user service has many
                  enterprise grade capabilities, and it can independently be
                  used by the users if they want. This is also available as an
                  App on BangDB AppStore. The user service manages accounts,
                  users, hierarchy of users, auth, api-key, dashboards, custom
                  info, payments, provisioning, invoicing, personalization etc.
                  This service is implemented using document tables within
                  BangDB and all running components/servers/applications
                  authenticates using the BangDb user service.
                </p>

                <h2>Key Value Store</h2>

                <p>
                  There are several use cases where we can simplify the data
                  processing and persistence by treating value as opaque data.
                  BangDB resource service is an example of that where we wish to
                  keep object files. Other example could be simple key/value
                  pairs where the interpretation of value is up to the user.
                  Note that in this case the parsing of data is eliminated
                  completely. Which means the performance of such store could be
                  highest in comparison with document, graph, or stream store.
                  BangDB works like key/value store as well.
                </p>

                <h2>Large files and Objects store</h2>

                <p>
                  Since ML/DL deals with large model files, along with several
                  other intermediate or related files which could be text or
                  binary in nature. AI will not be fully integrated unless these
                  files are also available within the database. To achieve this,
                  BangDB implements S3 (AWS) like feature within core database
                  by enabling the support for large binary files. BangDB calls
                  this BRS (BangDB Resource Service). Therefore, the DB manages
                  these files versions, storage, access, and deployment
                  automatically. Users would have to go out of BangDB for such
                  tasks too which are very critical from the operation overhead
                  reduction and automation perspective.
                </p>

                <p>
                  The BRS allows users to create buckets and put files/objects
                  into it. These files and objects are opaques to BRS hence it
                  doesn&apos;t interpret it at all. There is no theoretical size
                  limit for the files or objects. To handle large files, BangDB
                  splits the files into multiple parts, each of 1MB and then
                  stores them in the BRS. Upon request, the database assembles
                  all the parts and return to the user. This method scales well
                  for even very large files.
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
    props: { aboutSidebar: true },
  };
}
