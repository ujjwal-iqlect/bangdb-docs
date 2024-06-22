import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "../../../components/Breadcrumb";

export default function TheBangdbStack() {
  return (
    <React.Fragment>
      <Head>
        <title>The BangDB Stack</title>
        <meta name="description" content="The BangDB Stack"></meta>
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="The BangDB Stack" />
        <meta property="og:description" content="The BangDB Stack" />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="The BangDB Stack" />
        <meta name="twitter:description" content="The BangDB Stack" />
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
              <h1 className="article-title">The BangDB Stack</h1>
              <div className="article-body">
                <p>
                  The BangDB stack is as below, some of these will be covered in
                  the subsequent sections. The entire stack is built from ground
                  up. Every layer, component has been designed and implemented
                  from scratch with the same set of goals in mind. If you view
                  it from the bottom one to top one, there are several sets of
                  components seem stacked over others, which may not be
                  completely accurate and most of these are intertwined as well
                  and cuts across several layer. For ex, security is common
                  layer which wraps all other components. Similarly, the data
                  fabric wraps the entire stack for distributing it in p2p
                  manner.
                </p>

                <div className="flex items-center justify-center">
                  <Image
                    alt="The BangDB Stack"
                    width={550}
                    height={470}
                    src="/assets/about/28.png"
                  />
                </div>

                <p>
                  One of the major issues with the other databases in the market
                  is the way they restrict the access to file system for
                  majority of their run time to meet the performance
                  requirement. In-memory only concept is just to enforce the
                  same. Since the data is always in the memory or we deal with
                  only that much of data that can fit in the memory, so we will
                  have to not so much focus on IO part of the process. But the
                  data grows at much higher rate than the availability of RAM
                  for the same cost. Which means cost spirals quite fast to the
                  point that it becomes the central point for the data
                  processing, which is insane.
                </p>

                <div className="table-container">
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <ul>
                            <li>
                              In memory computing is a bug and not a feature
                            </li>
                            <li>
                              Data size is increasingly outpacing available
                              memory.
                            </li>
                            <li>
                              In memory is costly, brittle, doesn&apos;t scale
                              and isn&apos;t feasible anymore.
                            </li>
                          </ul>
                        </td>
                        <td>
                          <Image
                            alt="The BangDB Stack Volume"
                            width={550}
                            height={470}
                            src="/assets/about/29.png"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p>
                  But BangDB is a persistent database which handles data lot
                  more than available memory on the server. Which means it
                  overflows the data from memory to disk and brings in from disk
                  to memory as and when required. This it does while maintaining
                  the performance of the database. This is quite hard, and it
                  requires lots of things to be done for the implementation. But
                  once implemented, then the benefits are also quite impressive.
                </p>

                <ul>
                  <li>
                    This reduces the cost by a huge margin, by reducing amount
                    of memory needed by the database. So, to handle 100GB of
                    data, like other database we won&apos;t need 100GB of RAM, we
                    could handle it with 16 or 32 GB of RAM in high performance
                    manner.
                  </li>
                  <li>
                    The database doesn&apos;t stop accepting more data once the RAM
                    is full like many databases in the market, instead BangDB
                    simply overflows some data to disk in intelligent manner to
                    handle more data at run time.
                  </li>
                  <li>
                    Scaling of the system is quite flexible and supple, instead
                    of being brittle with other databases, which brings the
                    system down until the scaling is handled.
                  </li>
                  <li>
                    BangDB leverages available resources in much better way,
                    this reduces the cost, avoid upfront bloating of resources
                    etc.
                  </li>
                </ul>

                <h2>IO Layer</h2>

                <p>
                  Therefore, BangDB implements its own IO Layer, which is part
                  of BangDB stack and manages the data flow in bi-directional
                  manner. BangDB further innovates and implements a unique
                  approach of treating SSD as extension of virtual memory rather
                  than a replacement of filesystem, logically. This allows us to
                  overflow to from memory to disk in much efficient manner which
                  keeps the performance of the database in an acceptable bound
                  thereby enabling applications to ingest and process data in an
                  unbounded manner.
                </p>

                <div className="table-container">
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <ul>
                            <li>
                              SSD has 0 seek time but it&apos;s still a block
                              device.
                            </li>
                            <li>
                              TPS SSD is close to the TPS of HDD in sequential
                              case.
                            </li>
                            <li>
                              Random writes deteriorate the device, could get
                              slower as well, 3 step process.
                            </li>
                            <li>
                              Best performance gain is in few factors range.
                            </li>
                            <li>
                              Cost may go high significantly to achieve decent
                              performance gain.
                            </li>
                          </ul>
                        </td>
                        <td>
                          <ul>
                            <li>
                              BangDB uses SSD as logical extension of Memory and
                              not as replacement of Filesystem.
                            </li>
                            <li>
                              Software is written for logical fusion of MEM +
                              SSD.
                            </li>
                            <li>
                              Advantage is huge compared to typical usage of
                              SSD.
                            </li>
                            <li>
                              Significant gains in Elasticity, cost, speed,
                              performance
                            </li>
                            <li>
                              Adding SSD could seem partial addition of memory
                              in terms of performance.
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>
                            IO-layer for high performance data processing beyond
                            memory
                          </p>
                          <ul>
                            <li>SSD as logical extension of memory</li>
                            <li>
                              Provides elasticity when it comes to deal with
                              huge volume of data.
                            </li>
                            <li>
                              Makes it cost efficient by reducing pressure on
                              RAM all the time.
                            </li>
                          </ul>
                        </td>
                        <td>
                          <Image
                            alt="The BangDB Stack 2"
                            width={550}
                            height={470}
                            src="/assets/about/30.png"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h2>Buffer Pool and Page Cache</h2>

                <p>
                  But this may not work if we don&apos;t have control on each byte
                  that gets written into and read from the database. Hence
                  BangDB also implements its own Buffer pool and Page cache.
                  These give undue advantages to the database when it comes to
                  data handling in an efficient manner. Like operating system,
                  BangDB implements its own buffer pool to get the full control
                  of the data. This is to avoid delegation of this ownership to
                  operating system which may not have full information about the
                  data that BangDB has, therefore may impact the performance and
                  efficiency of the system.
                </p>

                <div className="flex items-center justify-center">
                  <Image
                    alt="The BangDB Stack 3"
                    width={200}
                    height={470}
                    src="/assets/about/31.png"
                  />
                </div>

                <p>
                  BangDB may be the only database to have implemented IO-Layer
                  with SSD as RAM+ for high performance with Out-of-memory
                  option.
                </p>

                <div className="flex items-center justify-center">
                  <Image
                    alt="The BangDB Stack 3"
                    width={300}
                    height={470}
                    src="/assets/about/32.png"
                  />
                </div>

                <p>Memory Management</p>

                <ul>
                  <li>Buffer pool, page cache</li>
                  <li>Adaptive page prefetch, flush</li>
                  <li>SlabAlloc, memory budget</li>
                  <li>Very few DB has this</li>
                  <li>Total control of the data within db</li>
                </ul>

                <h2>Memory handling - Slab Allocator</h2>
                <p>
                  The other important factor in high performance systems is the
                  ability to handle memory well. It would be best if we don&apos;t
                  have to deal with creating memory on heap and deleting it
                  after the use. Also, it would be amazing if we don&apos;t copy data
                  but copy the reference to the data, etc. For such purposes,
                  BangDB implements its own Slab Allocator for better memory
                  handling at run time.
                </p>

                <h2>WAL, Durability</h2>
                <p>
                  To avoid syncing data all the time to the file system for
                  every read, BangDB implements write ahead logging (WAL).
                  Random read and writes are costly, but sequential is fine as
                  far as HDD is considered. Therefore, instead of writing
                  randomly on filesystem, database writes the operation log into
                  a sequential every increasing file, called write ahead log
                  file. This allows database page cache or buffer pool to simply
                  not bother about the data in-memory to be synced with the disk
                  all the time for every operation.
                </p>

                <p>
                  BangDB write ahead log is based on Aries algorithm, but it
                  extends it to improve the performance and scope. This also
                  allows us to recover from any crash, process, server, or any
                  other kind of crash of the system. The crash recovery in
                  BangDB is automated, DB checks if it needs to recover any data
                  and it simply recovers it as required. Checkpointing further
                  limits the amount of data to be recovered in case of any
                  eventuality.
                </p>

                <h2>Hardware utilization with true concurrency</h2>

                <p>
                  To leverage the machine or vm well, we need to leverage the
                  resources available on the machine well. This is a known case
                  that users and organizations can cut down the expense on the
                  infra cost by over 50% if they have software and systems that
                  leverage the available resource well within the machine,
                  before demanding another server for scale. This for database,
                  comes down to a few simple facts. Is the database concurrent?
                  Is it concurrent for both read and write.
                </p>

                <p>
                  By concurrency, it doesn&apos;t mean if the operations are
                  synchronized or not. It means is the database using all
                  cores/cpus/threads available on the server in concurrent
                  manner. It means is the code written for multiple threads to
                  enter and execute in parallel as much as possible. It means is
                  the algorithm implemented inside database fully capable of
                  running in parallel. It means are the operations running in
                  sequential mode or parallel mode wherever it can. And these
                  are hard questions. Hard because it&apos;s extremely hard to write
                  such code, especially within database at the core level. And
                  that&apos;s why many databases, including very popular ones, don&apos;t
                  do this properly. In fact, a majority of these don&apos;t have
                  writes fully concurrent. This limits the optimal use of the
                  server. It also limits the performance, and it bloats the cost
                  in the end.
                </p>

                <p>
                  BangDB is fully concurrent, for both read and write, for all
                  operations at the core of the database. The entire algorithm
                  and constructs are fully multithreaded and concurrent.
                </p>

                <h2>Transaction</h2>

                <p>
                  BangDB implements database transaction. It uses OCC
                  (Optimistic Concurrency Control) to provide the transaction
                  support. The user can set configuration to switch it On or Off
                  as per their need. Also, the buffer size allocation for the
                  same is configurable too. ACID support for read write is
                  provided with the help of familiar transaction constructs. OCC
                  transaction is known to have better performance and
                  throughputs.
                </p>

                <h2>Index</h2>

                <p>
                  The searchability and quotability of data depends on how the
                  keys are arranged withing the database. There are primary and
                  secondary keys predominantly. And then there are free text
                  search that indexes all the tokens. BangDB supports all.
                </p>

                <p>
                  For primary and secondary keys, we can have two different
                  arrangements, ExtHASH (extensible hash+) and B+linkTree (BTREE
                  with links). Most of the time, BTREE works well as this
                  supports range queries too. But in some cases when we don&apos;t
                  have range query requirements then EHASH is works better.
                  Secondary keys are properties in the document or events or
                  node/relation that we are storing, and we would like to use
                  these properties values for query. These indexes can also be
                  arranged using BTREE or EHASH (default is BTREE). The free
                  text search is enabled using the stemming, tokenization and
                  indexing these tokens. The query using these secondary indexes
                  are all abstracted and DB takes care of these implicitly.
                </p>

                <div className="flex items-center gap-x-12">
                  <div className="flex flex-col">
                    <Image
                      alt="B+LinkTree - BangDB"
                      width={550}
                      height={470}
                      src="/assets/about/33.png"
                    />

                    <p className="text-center">B+LinkTree</p>
                  </div>
                  <div className="flex flex-col">
                    <Image
                      alt="Ext+Hash - BangDB"
                      width={550}
                      height={470}
                      src="/assets/about/34.png"
                    />

                    <p className="text-center">Ext+Hash</p>
                  </div>
                </div>

                <p>
                  Each of these indexes can be simple or composite. Simple index
                  uses just the token as complete index key, whereas for
                  composite index, several tokens come together to form a key.
                  This can be used for enhanced performance in many cases if
                  used properly. In fact, BangDB uses composite indexes
                  extensively for building several features and apps as
                  required.
                </p>

                <div className="table-container">
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <p>Index</p>
                          <pre style={{ background: "transparent" }}>
                            {`Primary & secondary indexes
Simple, composite, nested index
Reverse index, geospatial index
No limit on number of indexes`}
                          </pre>
                        </td>
                        <td>
                          <pre style={{ background: "transparent" }}>
                            {`Primary:      pk
Secondary:    name, place, group, etc…
Composite:    name:group:country
Nested: 	    {players:{cricket:{team:{ …
Reverse: 	    "text that will be rev indexed…"
Geospatial:   {lat:, lon:, distance: }
Vector: 	    [1,0,2,…]`}
                          </pre>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>Scan & search</p>
                          <pre style={{ background: "transparent" }}>
                            {`Scan of data using primary, secondary indexes
Join tables using any indexes, any algebra
Recursive scan - powerful concept, for any index combination scan`}
                          </pre>
                        </td>
                        <td>
                          <pre style={{ background: "transparent" }}>
                            {`•	Scan(pk1, pk2, query);
•	Scan(name:group:*);
•	Arithmetic on resultset [ Add, append, intersect]
•	While(true)
  o	Scan();`}
                          </pre>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p>
                  Further BangDB also implements and support Nested index and
                  Geospatial index. Nested index is for the documents where the
                  key is nested somewhere in the document. The key could be
                  repeated as well, in fact BangDB supports repeated elements
                  within the JSON doc (although the JSON doc doesn&apos;t support
                  this but in real world, we see such data). The geospatial
                  index is for search based on location, boundary, distance in
                  the real world.
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
