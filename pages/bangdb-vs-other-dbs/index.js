import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Codebox from "../../components/Codebox";
import Breadcrumb from "../../components/Breadcrumb";
import ImageGrid from "../../components/ImageGrid";

export default function BangdbVsOtherDbs() {
  return (
    <React.Fragment>
      <Head>
        <title>BangDB vs MongoDB vs Redis YCSB Benchmark</title>
        <meta
          name="description"
          content="This article is to report the YCSB test results in detail for five NoSQL dbs namely BangDB vs MongoDB vs Redis etc. and compare the result."
        ></meta>
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="BangDB vs MongoDB vs Redis YCSB Benchmark"
        />
        <meta
          property="og:description"
          content="This article is to report the YCSB test results in detail for five NoSQL dbs namely BangDB vs MongoDB vs Redis etc. and compare the result."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="BangDB vs MongoDB vs Redis YCSB Benchmark"
        />
        <meta
          name="twitter:description"
          content="This article is to report the YCSB test results in detail for five NoSQL dbs namely BangDB vs MongoDB vs Redis etc. and compare the result."
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
              <Breadcrumb
                text="Getting Started"
                url="/server-getting-started"
              />
              <h1 className="article-title">YCSB - BangDB vs Others</h1>
              <div className="article-body">
                <p>
                  This article is to simply report the YCSB bench test results
                  in detail for five NoSQL databases namely Redis vs BangDB vs
                  MongoDB vs Couchbase vs and Yugabyte and compare the result
                  side by side. I have used latest versions for each NoSQL
                  Database and have followed the recommendations to run all the
                  databases in optimized conditions. I have also used the
                  default six test scenarios as defined by the YCSB framework. I
                  have restricted it to 10M records for each test. However, user
                  can run the bench for as many numbers as they practically find
                  suitable.
                </p>
                <h2>About YCSB</h2>
                <p>
                  The Yahoo! Cloud Serving Benchmark (YCSB) is an open-source
                  specification and program suite for evaluating retrieval and
                  maintenance capabilities of computer programs. It is often
                  used to compare relative performance of NoSQL database
                  management systems.
                </p>
                <h2>Configuration</h2>
                <p>
                  Following configurations were used for the evaluation purpose:
                </p>
                <ul>
                  <li>Redis Server: 5.07, x86/64</li>
                  <li>YugabyteDB:2.5.0, x86_64</li>
                  <li>Couchbase2: 7.0 Beta, x86_64</li>
                  <li>BangDB server: 2.0.0, x86_64</li>
                  <li>Number of records: 10M</li>
                  <li>RAM: 32GB, Cores: 16</li>
                  <li>
                    YCSB workloads: see{" "}
                    <Link
                      target={"_blank"}
                      className="external"
                      href={
                        "https://github.com/brianfrankcooper/YCSB/wiki/Core-Workloads"
                      }
                    >
                      Workloads
                    </Link>
                  </li>
                </ul>
                <p>
                  Each of these workload test runs in two steps, 1. Load and 2.
                  Run. Load stage is to load the data and then run stage we run
                  the test. I have run each test with clean database to reflect
                  the numbers in fair manner
                </p>
                <h2>Summary</h2>
                <p>
                  To summarize the test, here is the high-level report of the
                  tests, load and run both.
                </p>
                <ImageGrid
                  alt="YCSB Load"
                  width={605}
                  height={340}
                  src="https://bangdb.com/wp-content/uploads/2022/02/image1.png"
                  alt2="YCSB Run"
                  width2={605}
                  height2={340}
                  src2="https://bangdb.com/wp-content/uploads/2022/02/image2.png"
                />
                <p>
                  Load is consistent for all dbs for all tests as expected as
                  this phase is to load the data. Run phase is where each db is
                  tested for different test conditions.
                </p>
                <h3>Workload A: Update heavy workload</h3>
                <p>
                  This workload has a mix of 50/50 reads and writes. An
                  application example is a session store recording recent
                  actions.
                </p>
                <ImageGrid
                  alt="Workload A ops/sec (throughput)"
                  width={640}
                  height={384}
                  src="https://bangdb.com/wp-content/uploads/2022/02/image3.png"
                  alt2="Workload A : how quickly the test was completed by dbs"
                  width2={640}
                  height2={384}
                  src2="https://bangdb.com/wp-content/uploads/2022/02/image4.png"
                />
                <p>
                  The first graph shows the ops/sec (throughput) for the 10M
                  records. However the second chart shows how quickly the test
                  was completed by DBs.
                </p>
                <div className="table-container">
                  <table>
                    <tbody>
                      <tr>
                        <th>DB</th>
                        <th colspan="2">Update Latency [us]</th>
                        <th colspan="2">Read Latency [us]</th>
                      </tr>
                      <tr>
                        <td>&nbsp;</td>
                        <td>Avg</td>
                        <td>99th perc</td>
                        <td>Avg</td>
                        <td>99th perc</td>
                      </tr>
                      <tr>
                        <td>MongoDB</td>
                        <td>53</td>
                        <td>352</td>
                        <td>11851</td>
                        <td>110719</td>
                      </tr>
                      <tr>
                        <td>Redis</td>
                        <td>3315</td>
                        <td>6591</td>
                        <td>3319</td>
                        <td>6587</td>
                      </tr>
                      <tr>
                        <td>Couchbase2</td>
                        <td>2285</td>
                        <td>5107</td>
                        <td>2253</td>
                        <td>4799</td>
                      </tr>
                      <tr>
                        <td>Yugabyte</td>
                        <td>12071</td>
                        <td>335615</td>
                        <td>2214</td>
                        <td>6407</td>
                      </tr>
                      <tr>
                        <td>BangDB</td>
                        <td>769</td>
                        <td>3099</td>
                        <td>693</td>
                        <td>3053</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <aside className="doc-note">
                  <strong>Note: </strong>Time is in microseconds, us = micro
                  seconds
                </aside>
                <h3>Workload C: Read only</h3>
                <p>
                  This workload is 100% read. Application example: user profile
                  cache, where profiles are constructed elsewhere (e.g.,
                  Hadoop).
                </p>
                <ImageGrid
                  alt="Workload C : Read Only"
                  width={640}
                  height={384}
                  src="https://bangdb.com/wp-content/uploads/2022/02/image7.png"
                  alt2="Workload C : Read Only"
                  width2={640}
                  height2={384}
                  src2="https://bangdb.com/wp-content/uploads/2022/02/image8.png"
                />
                <p>
                  The latency table is following for test C and since it was
                  read only test hence there is no update latency figure here.
                  Again Yugabyte latency is quite high
                </p>
                <div className="table-container">
                  <table>
                    <tbody>
                      <tr>
                        <th>DB</th>
                        <th colspan="2">Update Latency [us]</th>
                        <th colspan="2">Read Latency [us]</th>
                      </tr>
                      <tr>
                        <td>&nbsp;</td>
                        <td>Avg</td>
                        <td>99th perc</td>
                        <td>Avg</td>
                        <td>99th perc</td>
                      </tr>
                      <tr>
                        <td>MongoDB</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>2787</td>
                        <td>5171</td>
                      </tr>
                      <tr>
                        <td>Redis</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>2276</td>
                        <td>4855</td>
                      </tr>
                      <tr>
                        <td>Couchbase2</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>1308</td>
                        <td>4231</td>
                      </tr>
                      <tr>
                        <td>Yugabyte</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>6825</td>
                        <td>23471</td>
                      </tr>
                      <tr>
                        <td>BangDB</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>1217</td>
                        <td>4143</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <aside className="doc-note">
                  <strong>Note: </strong>Time is in microseconds, us = micro
                  seconds
                </aside>
                <h3>Workload D: Read latest workload</h3>
                <p>
                  In this workload, new records are inserted, and the most
                  recently inserted records are the most popular. Application
                  example: user status updates; people want to read the latest.
                </p>
                <ImageGrid
                  alt="Workload D : Insert"
                  width={640}
                  height={384}
                  src="https://bangdb.com/wp-content/uploads/2022/02/image9.png"
                  alt2="Workload D : Read"
                  width2={640}
                  height2={384}
                  src2="https://bangdb.com/wp-content/uploads/2022/02/image10.png"
                />
                <p>
                  The latency table for test D is as below. Here Redis and
                  Yugabyte have higher latencies, Yugabyte performs bad for both
                  Insert and Read for the test
                </p>
                <div className="table-container">
                  <table>
                    <tbody>
                      <tr>
                        <th>DB</th>
                        <th colspan="2">Update Latency [us]</th>
                        <th colspan="2">Read Latency [us]</th>
                      </tr>
                      <tr c>
                        <td>&nbsp;</td>
                        <td>Avg</td>
                        <td>99th perc</td>
                        <td>Avg</td>
                        <td>99th perc</td>
                      </tr>
                      <tr>
                        <td>MongoDB</td>
                        <td>87</td>
                        <td>1147</td>
                        <td>4951</td>
                        <td>9495</td>
                      </tr>
                      <tr>
                        <td>Redis</td>
                        <td>6387</td>
                        <td>11807</td>
                        <td>3178</td>
                        <td>6499</td>
                      </tr>
                      <tr>
                        <td>Couchbase2</td>
                        <td>2265</td>
                        <td>4999</td>
                        <td>2167</td>
                        <td>4487</td>
                      </tr>
                      <tr>
                        <td>Yugabyte</td>
                        <td>6874</td>
                        <td>21055</td>
                        <td>6365</td>
                        <td>21551</td>
                      </tr>
                      <tr>
                        <td>BangDB</td>
                        <td>1696</td>
                        <td>4539</td>
                        <td>1598</td>
                        <td>4423</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <aside className="doc-note">
                  <strong>Note: </strong>Time is in microseconds, us = micro
                  seconds
                </aside>
                <h3>Workload E: Short ranges</h3>
                <p>
                  In this workload, short ranges of records are queried, instead
                  of individual records. Application example: threaded
                  conversations, where each scan is for the posts in a given
                  thread (assumed to be clustered by thread id).
                </p>
                <ImageGrid
                  alt="Workload E"
                  width={640}
                  height={384}
                  src="https://bangdb.com/wp-content/uploads/2022/02/image11.png"
                  alt2="Workload E"
                  width2={640}
                  height2={384}
                  src2="https://bangdb.com/wp-content/uploads/2022/02/image12.png"
                />
                <p>
                  This requires a lots of scans, hence the throughput decreases
                  for all dbs, however Redis is slowest, understandably so as it
                  is also reflected in the latency table below. Yugabyte
                  performs really good in this test
                </p>
                <div className="table-container">
                  <table>
                    <tbody>
                      <tr>
                        <th>DB</th>
                        <th colspan="2">Update Latency [us]</th>
                        <th colspan="2">Read Latency [us]</th>
                      </tr>
                      <tr>
                        <td>&nbsp;</td>
                        <td>Avg</td>
                        <td>99th perc</td>
                        <td>Avg</td>
                        <td>99th perc</td>
                      </tr>
                      <tr>
                        <td>MongoDB</td>
                        <td>58</td>
                        <td>107</td>
                        <td>23043</td>
                        <td>33599</td>
                      </tr>
                      <tr>
                        <td>Redis</td>
                        <td>6353</td>
                        <td>12463</td>
                        <td>161738</td>
                        <td>345599</td>
                      </tr>
                      <tr>
                        <td>Couchbase2</td>
                        <td>19275</td>
                        <td>56063</td>
                        <td>87289</td>
                        <td>159743</td>
                      </tr>
                      <tr>
                        <td>Yugabyte</td>
                        <td>14705</td>
                        <td>61663</td>
                        <td>23156</td>
                        <td>85951</td>
                      </tr>
                      <tr>
                        <td>BangDB</td>
                        <td>17010</td>
                        <td>19791</td>
                        <td>19530</td>
                        <td>24287</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <aside className="doc-note">
                  <strong>Note: </strong>Time is in microseconds, us = micro
                  seconds
                </aside>
                <h3>Workload F: Read-modify-write</h3>
                <p>
                  In this workload, the client will read a record, modify it,
                  and write back the changes. Application example: user
                  database, where user records are read and modified by the user
                  or to record user activity.
                </p>
                <ImageGrid
                  alt="Workload F: Read-modify-write"
                  width={640}
                  height={384}
                  src="https://bangdb.com/wp-content/uploads/2022/02/image13.png"
                  alt2="Workload F: Read-modify-write"
                  width2={640}
                  height2={384}
                  src2="https://bangdb.com/wp-content/uploads/2022/02/image14.png"
                />
                <p>
                  Here Yugabyte has high latency esp for 99th percentile for
                  Update and Read-modify-write. However, Very high Read latency
                  for MonoDB makes it the last db to finish the task
                </p>
                <div className="table-container">
                  <table>
                    <tbody>
                      <tr>
                        <th>DB</th>
                        <th colspan="2">Update Latency [us]</th>
                        <th colspan="2">Read-Modify-write Latency [us] [us]</th>
                        <th colspan="2">Read Latency [us]</th>
                      </tr>
                      <tr>
                        <td>&nbsp;</td>
                        <td>Avg</td>
                        <td>99th perc</td>
                        <td>Avg</td>
                        <td>99th perc</td>
                        <td>Avg</td>
                        <td>99th perc</td>
                      </tr>
                      <tr>
                        <td>MongoDB</td>
                        <td>72</td>
                        <td>619</td>
                        <td>8825</td>
                        <td>69759</td>
                        <td>8743</td>
                        <td>68927</td>
                      </tr>
                      <tr>
                        <td>Redis</td>
                        <td>2682</td>
                        <td>5275</td>
                        <td>5376</td>
                        <td>10447</td>
                        <td>2690</td>
                        <td>5275</td>
                      </tr>
                      <tr>
                        <td>Couchbase2</td>
                        <td>2290</td>
                        <td>5395</td>
                        <td>4549</td>
                        <td>10159</td>
                        <td>2255</td>
                        <td>5191</td>
                      </tr>
                      <tr>
                        <td>Yugabyte</td>
                        <td>15166</td>
                        <td>417279</td>
                        <td>18357</td>
                        <td>425215</td>
                        <td>3184</td>
                        <td>10559</td>
                      </tr>
                      <tr>
                        <td>BangDB</td>
                        <td>832</td>
                        <td>3499</td>
                        <td>1617</td>
                        <td>6707</td>
                        <td>779</td>
                        <td>3485</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <aside className="doc-note">
                  <strong>Note: </strong>Time is in microseconds, us = micro
                  seconds
                </aside>
                <h2>Conclusion</h2>
                <p>
                  While each database has been designed for different goals and
                  use cases, YCSB test provides somewhat a common ground for the
                  benchmark, therefore the numbers shown in this document can be
                  used by developers or users to help select the db suitable for
                  their requirement.
                </p>
                <p>
                  All of these dbs are available free of cost for download /
                  install and it will be fairly straightforward to run these
                  tests in your environment for further analysis. The tests can
                  be modified or added in order to cover a set of specific
                  scenarios as needed.
                </p>
                <h2>Details of each test</h2>
                <div className="table-container">
                  <table>
                    <tbody>
                      <tr>
                        <th>Workload</th>
                        <th>BangDB</th>
                        <th>MongoDB</th>
                        <th>Redis</th>
                        <th>Couchbase2</th>
                        <th>YugabyteDB</th>
                      </tr>
                      <tr>
                        <td>A</td>
                        <td>
                          [OVERALL], RunTime(ms), 33704{" "}
                          <strong>
                            [OVERALL], Throughput(ops/sec), 296700.68834559695
                          </strong>{" "}
                          [TOTAL_GCS_PS_Scavenge], Count, 112
                          [TOTAL_GC_TIME_PS_Scavenge], Time(ms), 141
                          [TOTAL_GC_TIME_%_PS_Scavenge], Time(%),
                          0.4183479705672917 [TOTAL_GCS_PS_MarkSweep], Count, 0
                          [TOTAL_GC_TIME_PS_MarkSweep], Time(ms), 0
                          [TOTAL_GC_TIME_%_PS_MarkSweep], Time(%), 0.0
                          [TOTAL_GCs], Count, 112 [TOTAL_GC_TIME], Time(ms), 141
                          [TOTAL_GC_TIME_%], Time(%), 0.4183479705672917 [READ],
                          Operations, 4999480 [READ], AverageLatency(us),
                          693.8522734364374 [READ], MinLatency(us), 47 [READ],
                          MaxLatency(us), 287231 [READ],
                          95thPercentileLatency(us), 866 [READ],
                          99thPercentileLatency(us), 3053 [READ], Return=OK,
                          4999480 [CLEANUP], Operations, 220 [CLEANUP],
                          AverageLatency(us), 0.16363636363636364 [CLEANUP],
                          MinLatency(us), 0 [CLEANUP], MaxLatency(us), 16
                          [CLEANUP], 95thPercentileLatency(us), 1 [CLEANUP],
                          99thPercentileLatency(us), 2 [UPDATE], Operations,
                          5000520 [UPDATE], AverageLatency(us),
                          769.2442769951925 [UPDATE], MinLatency(us), 53
                          [UPDATE], MaxLatency(us), 287487 [UPDATE],
                          95thPercentileLatency(us), 1134 [UPDATE],
                          99thPercentileLatency(us), 3099 [UPDATE], Return=OK,
                          5000520
                        </td>
                        <td>
                          [OVERALL], RunTime(ms), 298964 [
                          <strong>
                            OVERALL], Throughput(ops/sec), 33448.843338997336
                          </strong>{" "}
                          [TOTAL_GCS_PS_Scavenge], Count, 91
                          [TOTAL_GC_TIME_PS_Scavenge], Time(ms), 338
                          [TOTAL_GC_TIME_%_PS_Scavenge], Time(%),
                          0.11305709048581102 [TOTAL_GCS_PS_MarkSweep], Count, 0
                          [TOTAL_GC_TIME_PS_MarkSweep], Time(ms), 0
                          [TOTAL_GC_TIME_%_PS_MarkSweep], Time(%), 0.0
                          [TOTAL_GCs], Count, 91 [TOTAL_GC_TIME], Time(ms), 338
                          [TOTAL_GC_TIME_%], Time(%), 0.11305709048581102
                          [READ], Operations, 4999863 [READ],
                          AverageLatency(us), 11851.110180818954 [READ],
                          MinLatency(us), 75 [READ], MaxLatency(us), 419327
                          [READ], 95thPercentileLatency(us), 12407 [READ],
                          99thPercentileLatency(us), 110719 [READ], Return=OK,
                          4999863 [CLEANUP], Operations, 200 [CLEANUP],
                          AverageLatency(us), 25.395 [CLEANUP], MinLatency(us),
                          0 [CLEANUP], MaxLatency(us), 4795 [CLEANUP],
                          95thPercentileLatency(us), 3 [CLEANUP],
                          99thPercentileLatency(us), 4 [UPDATE], Operations,
                          5000137 [UPDATE], AverageLatency(us),
                          53.228953926662406 [UPDATE], MinLatency(us), 2
                          [UPDATE], MaxLatency(us), 63647 [UPDATE],
                          95thPercentileLatency(us), 96 [UPDATE],
                          99thPercentileLatency(us), 352 [UPDATE], Return=OK,
                          5000137
                        </td>
                        <td>
                          [OVERALL], RunTime(ms), 151605{" "}
                          <strong>
                            [OVERALL], Throughput(ops/sec), 65960.88519507932
                          </strong>{" "}
                          [TOTAL_GCS_PS_Scavenge], Count, 110
                          [TOTAL_GC_TIME_PS_Scavenge], Time(ms), 469
                          [TOTAL_GC_TIME_%_PS_Scavenge], Time(%),
                          0.309356551564922 [TOTAL_GCS_PS_MarkSweep], Count, 0
                          [TOTAL_GC_TIME_PS_MarkSweep], Time(ms), 0
                          [TOTAL_GC_TIME_%_PS_MarkSweep], Time(%), 0.0
                          [TOTAL_GCs], Count, 110 [TOTAL_GC_TIME], Time(ms), 469
                          [TOTAL_GC_TIME_%], Time(%), 0.309356551564922 [READ],
                          Operations, 4998342 [READ], AverageLatency(us),
                          3319.165850395991 [READ], MinLatency(us), 30 [READ],
                          MaxLatency(us), 28815 [READ],
                          95thPercentileLatency(us), 4011 [READ],
                          99thPercentileLatency(us), 6587 [READ], Return=OK,
                          4998342 [CLEANUP], Operations, 220 [CLEANUP],
                          AverageLatency(us), 61.25909090909091 [CLEANUP],
                          MinLatency(us), 21 [CLEANUP], MaxLatency(us), 3929
                          [CLEANUP], 95thPercentileLatency(us), 59 [CLEANUP],
                          99thPercentileLatency(us), 78 [UPDATE], Operations,
                          5001658 [UPDATE], AverageLatency(us),
                          3315.679250560514 [UPDATE], MinLatency(us), 26
                          [UPDATE], MaxLatency(us), 28239 [UPDATE],
                          95thPercentileLatency(us), 4099 [UPDATE],
                          99thPercentileLatency(us), 6591 [UPDATE], Return=OK,
                          5001658
                        </td>
                        <td>
                          [OVERALL], RunTime(ms), 92498{" "}
                          <strong>
                            [OVERALL], Throughput(ops/sec), 108110.4456312569
                          </strong>{" "}
                          [TOTAL_GCS_PS_Scavenge], Count, 23
                          [TOTAL_GC_TIME_PS_Scavenge], Time(ms), 388
                          [TOTAL_GC_TIME_%_PS_Scavenge], Time(%),
                          0.41946852904927673 [TOTAL_GCS_PS_MarkSweep], Count, 0
                          [TOTAL_GC_TIME_PS_MarkSweep], Time(ms), 0
                          [TOTAL_GC_TIME_%_PS_MarkSweep], Time(%), 0.0
                          [TOTAL_GCs], Count, 23 [TOTAL_GC_TIME], Time(ms), 388
                          [TOTAL_GC_TIME_%], Time(%), 0.41946852904927673
                          [READ], Operations, 4998011 [READ],
                          AverageLatency(us), 2253.740166438209 [READ],
                          MinLatency(us), 59 [READ], MaxLatency(us), 205055
                          [READ], 95thPercentileLatency(us), 3421 [READ],
                          99thPercentileLatency(us), 4799 [READ], Return=OK,
                          4998011 [CLEANUP], Operations, 256 [CLEANUP],
                          AverageLatency(us), 0.703125 [CLEANUP],
                          MinLatency(us), 0 [CLEANUP], MaxLatency(us), 12
                          [CLEANUP], 95thPercentileLatency(us), 2 [CLEANUP],
                          99thPercentileLatency(us), 6 [UPDATE], Operations,
                          5001989 [UPDATE], AverageLatency(us),
                          2285.630476196569 [UPDATE], MinLatency(us), 70
                          [UPDATE], MaxLatency(us), 205055 [UPDATE],
                          95thPercentileLatency(us), 3595 [UPDATE],
                          99thPercentileLatency(us), 5107 [UPDATE], Return=OK,
                          5001989 &nbsp;
                        </td>
                        <td>
                          [OVERALL], RunTime(ms), 287651 [
                          <strong>
                            OVERALL], Throughput(ops/sec), 34764.349854511194
                          </strong>{" "}
                          [TOTAL_GCS_PS_Scavenge], Count, 34
                          [TOTAL_GC_TIME_PS_Scavenge], Time(ms), 206
                          [TOTAL_GC_TIME_%_PS_Scavenge], Time(%),
                          0.07161456070029307 [TOTAL_GCS_PS_MarkSweep], Count, 0
                          [TOTAL_GC_TIME_PS_MarkSweep], Time(ms), 0
                          [TOTAL_GC_TIME_%_PS_MarkSweep], Time(%), 0.0
                          [TOTAL_GCs], Count, 34 [TOTAL_GC_TIME], Time(ms), 206
                          [TOTAL_GC_TIME_%], Time(%), 0.07161456070029307
                          [READ], Operations, 4997184 [READ],
                          AverageLatency(us), 2214.697778588901 [READ],
                          MinLatency(us), 372 [READ], MaxLatency(us), 2009087
                          [READ], 95thPercentileLatency(us), 4483 [READ],
                          99thPercentileLatency(us), 6407 [READ], Return=OK,
                          4997184 [CLEANUP], Operations, 256 [CLEANUP],
                          AverageLatency(us), 118.65234375 [CLEANUP],
                          MinLatency(us), 49 [CLEANUP], MaxLatency(us), 2853
                          [CLEANUP], 95thPercentileLatency(us), 143 [CLEANUP],
                          99thPercentileLatency(us), 252 [UPDATE], Operations,
                          5002816 [UPDATE], AverageLatency(us),
                          12071.258204179407 [UPDATE], MinLatency(us), 540
                          [UPDATE], MaxLatency(us), 3084287 [UPDATE],
                          95thPercentileLatency(us), 6883 [UPDATE],
                          99thPercentileLatency(us), 335615 [UPDATE], Return=OK,
                          5002816 &nbsp;
                        </td>
                      </tr>
                      <tr>
                        <td>B</td>
                        <td>
                          [OVERALL], RunTime(ms), 48150{" "}
                          <strong>
                            [OVERALL], Throughput(ops/sec), 207684.31983385255
                          </strong>{" "}
                          [TOTAL_GCS_PS_Scavenge], Count, 220
                          [TOTAL_GC_TIME_PS_Scavenge], Time(ms), 318
                          [TOTAL_GC_TIME_%_PS_Scavenge], Time(%),
                          0.660436137071651 [TOTAL_GCS_PS_MarkSweep], Count, 0
                          [TOTAL_GC_TIME_PS_MarkSweep], Time(ms), 0
                          [TOTAL_GC_TIME_%_PS_MarkSweep], Time(%), 0.0
                          [TOTAL_GCs], Count, 220 [TOTAL_GC_TIME], Time(ms), 318
                          [TOTAL_GC_TIME_%], Time(%), 0.660436137071651 [READ],
                          Operations, 9499895 [READ], AverageLatency(us),
                          1217.6813672151113 [READ], MinLatency(us), 52 [READ],
                          MaxLatency(us), 156927 [READ],
                          95thPercentileLatency(us), 3503 [READ],
                          99thPercentileLatency(us), 4143 [READ], Return=OK,
                          9499895 [CLEANUP], Operations, 256 [CLEANUP],
                          AverageLatency(us), 19.81640625 [CLEANUP],
                          MinLatency(us), 1 [CLEANUP], MaxLatency(us), 4699
                          [CLEANUP], 95thPercentileLatency(us), 2 [CLEANUP],
                          99thPercentileLatency(us), 5 [UPDATE], Operations,
                          500105 [UPDATE], AverageLatency(us),
                          1260.5195568930524 [UPDATE], MinLatency(us), 77
                          [UPDATE], MaxLatency(us), 72255 [UPDATE],
                          95thPercentileLatency(us), 3509 [UPDATE],
                          99thPercentileLatency(us), 4151 [UPDATE], Return=OK,
                          500105 &nbsp; &nbsp;
                        </td>
                        <td>
                          [OVERALL], RunTime(ms), 234157 [
                          <strong>
                            OVERALL], Throughput(ops/sec), 42706.389302903604
                          </strong>{" "}
                          [TOTAL_GCS_PS_Scavenge], Count, 164
                          [TOTAL_GC_TIME_PS_Scavenge], Time(ms), 657
                          [TOTAL_GC_TIME_%_PS_Scavenge], Time(%),
                          0.28058097772007673 [TOTAL_GCS_PS_MarkSweep], Count, 0
                          [TOTAL_GC_TIME_PS_MarkSweep], Time(ms), 0
                          [TOTAL_GC_TIME_%_PS_MarkSweep], Time(%), 0.0
                          [TOTAL_GCs], Count, 164 [TOTAL_GC_TIME], Time(ms), 657
                          [TOTAL_GC_TIME_%], Time(%), 0.28058097772007673
                          [READ], Operations, 9499974 [READ],
                          AverageLatency(us), 5409.77283885198 [READ],
                          MinLatency(us), 76 [READ], MaxLatency(us), 904191
                          [READ], 95thPercentileLatency(us), 6175 [READ],
                          99thPercentileLatency(us), 8607 [READ], Return=OK,
                          9499974 [CLEANUP], Operations, 220 [CLEANUP],
                          AverageLatency(us), 12.577272727272728 [CLEANUP],
                          MinLatency(us), 0 [CLEANUP], MaxLatency(us), 2529
                          [CLEANUP], 95thPercentileLatency(us), 2 [CLEANUP],
                          99thPercentileLatency(us), 3 [UPDATE], Operations,
                          500026 [UPDATE], AverageLatency(us), 68.57062032774296
                          [UPDATE], MinLatency(us), 4 [UPDATE], MaxLatency(us),
                          128959 [UPDATE], 95thPercentileLatency(us), 90
                          [UPDATE], 99thPercentileLatency(us), 623 [UPDATE],
                          Return=OK, 500026 ]
                        </td>
                        <td>
                          [OVERALL], RunTime(ms), 165004 [
                          <strong>
                            OVERALL], Throughput(ops/sec), 60604.59140384475
                          </strong>{" "}
                          [TOTAL_GCS_PS_Scavenge], Count, 190
                          [TOTAL_GC_TIME_PS_Scavenge], Time(ms), 730
                          [TOTAL_GC_TIME_%_PS_Scavenge], Time(%),
                          0.4424135172480667 [TOTAL_GCS_PS_MarkSweep], Count, 0
                          [TOTAL_GC_TIME_PS_MarkSweep], Time(ms), 0
                          [TOTAL_GC_TIME_%_PS_MarkSweep], Time(%), 0.0
                          [TOTAL_GCs], Count, 190 [TOTAL_GC_TIME], Time(ms), 730
                          [TOTAL_GC_TIME_%], Time(%), 0.4424135172480667 [READ],
                          Operations, 9499420 [READ], AverageLatency(us),
                          3613.231345597942 [READ], MinLatency(us), 25 [READ],
                          MaxLatency(us), 25135 [READ],
                          95thPercentileLatency(us), 5243 [READ],
                          99thPercentileLatency(us), 7163 [READ], Return=OK,
                          9499420 [CLEANUP], Operations, 220 [CLEANUP],
                          AverageLatency(us), 63.263636363636365 [CLEANUP],
                          MinLatency(us), 22 [CLEANUP], MaxLatency(us), 3859
                          [CLEANUP], 95thPercentileLatency(us), 63 [CLEANUP],
                          99thPercentileLatency(us), 88 [UPDATE], Operations,
                          500580 [UPDATE], AverageLatency(us), 3610.429859363139
                          [UPDATE], MinLatency(us), 32 [UPDATE], MaxLatency(us),
                          20559 [UPDATE], 95thPercentileLatency(us), 5319
                          [UPDATE], 99thPercentileLatency(us), 7179 [UPDATE],
                          Return=OK, 500580
                        </td>
                        <td>
                          [OVERALL], RunTime(ms), 88874 [
                          <strong>
                            OVERALL], Throughput(ops/sec), 112518.8469068569
                          </strong>{" "}
                          [TOTAL_GCS_PS_Scavenge], Count, 19
                          [TOTAL_GC_TIME_PS_Scavenge], Time(ms), 363
                          [TOTAL_GC_TIME_%_PS_Scavenge], Time(%),
                          0.40844341427189057 [TOTAL_GCS_PS_MarkSweep], Count, 0
                          [TOTAL_GC_TIME_PS_MarkSweep], Time(ms), 0
                          [TOTAL_GC_TIME_%_PS_MarkSweep], Time(%), 0.0
                          [TOTAL_GCs], Count, 19 [TOTAL_GC_TIME], Time(ms), 363
                          [TOTAL_GC_TIME_%], Time(%), 0.40844341427189057
                          [READ], Operations, 9500099 [READ],
                          AverageLatency(us), 2150.907557068616 [READ],
                          MinLatency(us), 54 [READ], MaxLatency(us), 221439
                          [READ], 95thPercentileLatency(us), 3415 [READ],
                          99thPercentileLatency(us), 4587 [READ], Return=OK,
                          9500099 [CLEANUP], Operations, 256 [CLEANUP],
                          AverageLatency(us), 0.70703125 [CLEANUP],
                          MinLatency(us), 0 [CLEANUP], MaxLatency(us), 10
                          [CLEANUP], 95thPercentileLatency(us), 2 [CLEANUP],
                          99thPercentileLatency(us), 2 [UPDATE], Operations,
                          499901 [UPDATE], AverageLatency(us), 2200.451029303802
                          [UPDATE], MinLatency(us), 72 [UPDATE], MaxLatency(us),
                          216831 [UPDATE], 95thPercentileLatency(us), 3835
                          [UPDATE], 99thPercentileLatency(us), 4915 [UPDATE],
                          Return=OK, 499901
                        </td>
                        <td>
                          [OVERALL], RunTime(ms), 271072 [
                          <strong>
                            OVERALL], Throughput(ops/sec), 36890.56781961988
                          </strong>{" "}
                          [TOTAL_GCS_PS_Scavenge], Count, 34
                          [TOTAL_GC_TIME_PS_Scavenge], Time(ms), 220
                          [TOTAL_GC_TIME_%_PS_Scavenge], Time(%),
                          0.08115924920316372 [TOTAL_GCS_PS_MarkSweep], Count, 0
                          [TOTAL_GC_TIME_PS_MarkSweep], Time(ms), 0
                          [TOTAL_GC_TIME_%_PS_MarkSweep], Time(%), 0.0
                          [TOTAL_GCs], Count, 34 [TOTAL_GC_TIME], Time(ms), 220
                          [TOTAL_GC_TIME_%], Time(%), 0.08115924920316372
                          [READ], Operations, 9500906 [READ],
                          AverageLatency(us), 6825.618682260408 [READ],
                          MinLatency(us), 387 [READ], MaxLatency(us), 1919999
                          [READ], 95thPercentileLatency(us), 16671 [READ],
                          99thPercentileLatency(us), 23471 [READ], Return=OK,
                          9500906 [CLEANUP], Operations, 256 [CLEANUP],
                          AverageLatency(us), 107.2109375 [CLEANUP],
                          MinLatency(us), 44 [CLEANUP], MaxLatency(us), 1170
                          [CLEANUP], 95thPercentileLatency(us), 152 [CLEANUP],
                          99thPercentileLatency(us), 270 [UPDATE], Operations,
                          499094 [UPDATE], AverageLatency(us), 6875.324185423989
                          [UPDATE], MinLatency(us), 591 [UPDATE],
                          MaxLatency(us), 1630207 [UPDATE],
                          95thPercentileLatency(us), 15615 [UPDATE],
                          99thPercentileLatency(us), 21327 [UPDATE], Return=OK,
                          499094 &nbsp;
                        </td>
                      </tr>
                      <tr>
                        <td>C</td>
                        <td>
                          [OVERALL], RunTime(ms), 51763{" "}
                          <strong>
                            [OVERALL], Throughput(ops/sec), 193188.18461062922
                          </strong>{" "}
                          [TOTAL_GCS_PS_Scavenge], Count, 172
                          [TOTAL_GC_TIME_PS_Scavenge], Time(ms), 282
                          [TOTAL_GC_TIME_%_PS_Scavenge], Time(%),
                          0.5447906806019743 [TOTAL_GCS_PS_MarkSweep], Count, 0
                          [TOTAL_GC_TIME_PS_MarkSweep], Time(ms), 0
                          [TOTAL_GC_TIME_%_PS_MarkSweep], Time(%), 0.0
                          [TOTAL_GCs], Count, 172 [TOTAL_GC_TIME], Time(ms), 282
                          [TOTAL_GC_TIME_%], Time(%), 0.5447906806019743 [READ],
                          Operations, 10000000 [READ], AverageLatency(us),
                          1308.501497 [READ], MinLatency(us), 59 [READ],
                          MaxLatency(us), 135679 [READ],
                          95thPercentileLatency(us), 3651 [READ],
                          99thPercentileLatency(us), 4231 [READ], Return=OK,
                          10000000 [CLEANUP], Operations, 256 [CLEANUP],
                          AverageLatency(us), 21.390625 [CLEANUP],
                          MinLatency(us), 0 [CLEANUP], MaxLatency(us), 5067
                          [CLEANUP], 95thPercentileLatency(us), 4 [CLEANUP],
                          99thPercentileLatency(us), 10 &nbsp;
                        </td>
                        <td>
                          [OVERALL], RunTime(ms), 218202 [
                          <strong>
                            OVERALL], Throughput(ops/sec), 45829.094142125185
                          </strong>{" "}
                          [TOTAL_GCS_PS_Scavenge], Count, 160
                          [TOTAL_GC_TIME_PS_Scavenge], Time(ms), 770
                          [TOTAL_GC_TIME_%_PS_Scavenge], Time(%),
                          0.35288402489436393 [TOTAL_GCS_PS_MarkSweep], Count, 0
                          [TOTAL_GC_TIME_PS_MarkSweep], Time(ms), 0
                          [TOTAL_GC_TIME_%_PS_MarkSweep], Time(%), 0.0
                          [TOTAL_GCs], Count, 160 [TOTAL_GC_TIME], Time(ms), 770
                          [TOTAL_GC_TIME_%], Time(%), 0.35288402489436393
                          [READ], Operations, 10000000 [READ],
                          AverageLatency(us), 2787.7575598 [READ],
                          MinLatency(us), 75 [READ], MaxLatency(us), 97983
                          [READ], 95thPercentileLatency(us), 3275 [READ],
                          99thPercentileLatency(us), 5171 [READ], Return=OK,
                          10000000 [CLEANUP], Operations, 128 [CLEANUP],
                          AverageLatency(us), 31.53125 [CLEANUP],
                          MinLatency(us), 0 [CLEANUP], MaxLatency(us), 3883
                          [CLEANUP], 95thPercentileLatency(us), 1 [CLEANUP],
                          99thPercentileLatency(us), 31
                        </td>
                        <td>
                          [OVERALL], RunTime(ms), 154965 [
                          <strong>
                            OVERALL], Throughput(ops/sec), 64530.700480753716
                          </strong>{" "}
                          [TOTAL_GCS_PS_Scavenge], Count, 220
                          [TOTAL_GC_TIME_PS_Scavenge], Time(ms), 717
                          [TOTAL_GC_TIME_%_PS_Scavenge], Time(%),
                          0.4626851224470042 [TOTAL_GCS_PS_MarkSweep], Count, 0
                          [TOTAL_GC_TIME_PS_MarkSweep], Time(ms), 0
                          [TOTAL_GC_TIME_%_PS_MarkSweep], Time(%), 0.0
                          [TOTAL_GCs], Count, 220 [TOTAL_GC_TIME], Time(ms), 717
                          [TOTAL_GC_TIME_%], Time(%), 0.4626851224470042 [READ],
                          Operations, 10000000 [READ], AverageLatency(us),
                          1978.3465095 [READ], MinLatency(us), 36 [READ],
                          MaxLatency(us), 20911 [READ],
                          95thPercentileLatency(us), 2125 [READ],
                          99thPercentileLatency(us), 4001 [READ], Return=OK,
                          10000000 [CLEANUP], Operations, 128 [CLEANUP],
                          AverageLatency(us), 65.1328125 [CLEANUP],
                          MinLatency(us), 23 [CLEANUP], MaxLatency(us), 2583
                          [CLEANUP], 95thPercentileLatency(us), 62 [CLEANUP],
                          99thPercentileLatency(us), 180
                        </td>
                        <td>
                          [OVERALL], RunTime(ms), 93644{" "}
                          <strong>
                            [OVERALL], Throughput(ops/sec), 106787.4076288924
                          </strong>{" "}
                          [TOTAL_GCS_PS_Scavenge], Count, 19
                          [TOTAL_GC_TIME_PS_Scavenge], Time(ms), 431
                          [TOTAL_GC_TIME_%_PS_Scavenge], Time(%),
                          0.46025372688052624 [TOTAL_GCS_PS_MarkSweep], Count, 0
                          [TOTAL_GC_TIME_PS_MarkSweep], Time(ms), 0
                          [TOTAL_GC_TIME_%_PS_MarkSweep], Time(%), 0.0
                          [TOTAL_GCs], Count, 19 [TOTAL_GC_TIME], Time(ms), 431
                          [TOTAL_GC_TIME_%], Time(%), 0.46025372688052624
                          [READ], Operations, 10000000 [READ],
                          AverageLatency(us), 2276.2908959 [READ],
                          MinLatency(us), 65 [READ], MaxLatency(us), 172159
                          [READ], 95thPercentileLatency(us), 3801 [READ],
                          99thPercentileLatency(us), 4855 [READ], Return=OK,
                          10000000 [CLEANUP], Operations, 256 [CLEANUP],
                          AverageLatency(us), 0.71875 [CLEANUP], MinLatency(us),
                          0 [CLEANUP], MaxLatency(us), 11 [CLEANUP],
                          95thPercentileLatency(us), 2 [CLEANUP],
                          99thPercentileLatency(us), 2
                        </td>
                        <td>
                          [OVERALL], RunTime(ms), 249711{" "}
                          <strong>
                            [OVERALL], Throughput(ops/sec), 40046.29351530369
                          </strong>{" "}
                          [TOTAL_GCS_PS_Scavenge], Count, 33
                          [TOTAL_GC_TIME_PS_Scavenge], Time(ms), 167
                          [TOTAL_GC_TIME_%_PS_Scavenge], Time(%),
                          0.06687731017055716 [TOTAL_GCS_PS_MarkSweep], Count, 0
                          [TOTAL_GC_TIME_PS_MarkSweep], Time(ms), 0
                          [TOTAL_GC_TIME_%_PS_MarkSweep], Time(%), 0.0
                          [TOTAL_GCs], Count, 33 [TOTAL_GC_TIME], Time(ms), 167
                          [TOTAL_GC_TIME_%], Time(%), 0.06687731017055716
                          [READ], Operations, 10000000 [READ],
                          AverageLatency(us), 6268.5227355 [READ],
                          MinLatency(us), 365 [READ], MaxLatency(us), 1821695
                          [READ], 95thPercentileLatency(us), 16079 [READ],
                          99thPercentileLatency(us), 22543 [READ], Return=OK,
                          10000000 [CLEANUP], Operations, 256 [CLEANUP],
                          AverageLatency(us), 136.01171875 [CLEANUP],
                          MinLatency(us), 49 [CLEANUP], MaxLatency(us), 4039
                          [CLEANUP], 95thPercentileLatency(us), 154 [CLEANUP],
                          99thPercentileLatency(us), 591 &nbsp;
                        </td>
                      </tr>
                      <tr>
                        <td>D</td>
                        <td>
                          [OVERALL], RunTime(ms), 63301{" "}
                          <strong>
                            [OVERALL], Throughput(ops/sec), 157975.3874346377
                          </strong>{" "}
                          [TOTAL_GCS_PS_Scavenge], Count, 299
                          [TOTAL_GC_TIME_PS_Scavenge], Time(ms), 477
                          [TOTAL_GC_TIME_%_PS_Scavenge], Time(%),
                          0.7535425980632218 [TOTAL_GCS_PS_MarkSweep], Count, 0
                          [TOTAL_GC_TIME_PS_MarkSweep], Time(ms), 0
                          [TOTAL_GC_TIME_%_PS_MarkSweep], Time(%), 0.0
                          [TOTAL_GCs], Count, 299 [TOTAL_GC_TIME], Time(ms), 477
                          [TOTAL_GC_TIME_%], Time(%), 0.7535425980632218 [READ],
                          Operations, 9499775 [READ], AverageLatency(us),
                          1598.689052951254 [READ], MinLatency(us), 62 [READ],
                          MaxLatency(us), 149247 [READ],
                          95thPercentileLatency(us), 3819 [READ],
                          99thPercentileLatency(us), 4423 [READ], Return=OK,
                          9499775 [CLEANUP], Operations, 256 [CLEANUP],
                          AverageLatency(us), 18.9921875 [CLEANUP],
                          MinLatency(us), 1 [CLEANUP], MaxLatency(us), 4447
                          [CLEANUP], 95thPercentileLatency(us), 4 [CLEANUP],
                          99thPercentileLatency(us), 9 [INSERT], Operations,
                          500225 [INSERT], AverageLatency(us),
                          1696.5265030736168 [INSERT], MinLatency(us), 97
                          [INSERT], MaxLatency(us), 152831 [INSERT],
                          95thPercentileLatency(us), 3869 [INSERT],
                          99thPercentileLatency(us), 4539 [INSERT], Return=OK,
                          500225 &nbsp;
                        </td>
                        <td>
                          [OVERALL], RunTime(ms), 214161{" "}
                          <strong>
                            [OVERALL], Throughput(ops/sec), 46693.84248299177
                          </strong>{" "}
                          [TOTAL_GCS_PS_Scavenge], Count, 263
                          [TOTAL_GC_TIME_PS_Scavenge], Time(ms), 1242
                          [TOTAL_GC_TIME_%_PS_Scavenge], Time(%),
                          0.5799375236387577 [TOTAL_GCS_PS_MarkSweep], Count, 0
                          [TOTAL_GC_TIME_PS_MarkSweep], Time(ms), 0
                          [TOTAL_GC_TIME_%_PS_MarkSweep], Time(%), 0.0
                          [TOTAL_GCs], Count, 263 [TOTAL_GC_TIME], Time(ms),
                          1242 [TOTAL_GC_TIME_%], Time(%), 0.5799375236387577
                          [READ], Operations, 9361595 [READ],
                          AverageLatency(us), 4951.64995793986 [READ],
                          MinLatency(us), 71 [READ], MaxLatency(us), 302591
                          [READ], 95thPercentileLatency(us), 5995 [READ],
                          99thPercentileLatency(us), 9495 [READ], Return=OK,
                          9361595 [READ], Return=NOT_FOUND, 138994 [CLEANUP],
                          Operations, 220 [CLEANUP], AverageLatency(us),
                          13.031818181818181 [CLEANUP], MinLatency(us), 0
                          [CLEANUP], MaxLatency(us), 2615 [CLEANUP],
                          95thPercentileLatency(us), 2 [CLEANUP],
                          99thPercentileLatency(us), 7 [INSERT], Operations,
                          499411 [INSERT], AverageLatency(us), 87.55353806784392
                          [INSERT], MinLatency(us), 7 [INSERT], MaxLatency(us),
                          113407 [INSERT], 95thPercentileLatency(us), 108
                          [INSERT], 99thPercentileLatency(us), 1147 [INSERT],
                          Return=OK, 499411 [READ-FAILED], Operations, 138994
                          [READ-FAILED], AverageLatency(us), 4493.026598270429
                          [READ-FAILED], MinLatency(us), 65 [READ-FAILED],
                          MaxLatency(us), 253567 [READ-FAILED],
                          95thPercentileLatency(us), 4991 [READ-FAILED],
                          99thPercentileLatency(us), 6115
                        </td>
                        <td>
                          [OVERALL], RunTime(ms), 167472 [
                          <strong>
                            OVERALL], Throughput(ops/sec), 59711.474156873985
                          </strong>{" "}
                          [TOTAL_GCS_PS_Scavenge], Count, 289
                          [TOTAL_GC_TIME_PS_Scavenge], Time(ms), 1036
                          [TOTAL_GC_TIME_%_PS_Scavenge], Time(%),
                          0.6186108722652145 [TOTAL_GCS_PS_MarkSweep], Count, 0
                          [TOTAL_GC_TIME_PS_MarkSweep], Time(ms), 0
                          [TOTAL_GC_TIME_%_PS_MarkSweep], Time(%), 0.0
                          [TOTAL_GCs], Count, 289 [TOTAL_GC_TIME], Time(ms),
                          1036 [TOTAL_GC_TIME_%], Time(%), 0.6186108722652145
                          [READ], Operations, 9498135 [READ],
                          AverageLatency(us), 3178.1501514771057 [READ],
                          MinLatency(us), 35 [READ], MaxLatency(us), 465151
                          [READ], 95thPercentileLatency(us), 4511 [READ],
                          99thPercentileLatency(us), 6499 [READ], Return=OK,
                          9498135 [CLEANUP], Operations, 200 [CLEANUP],
                          AverageLatency(us), 66.75 [CLEANUP], MinLatency(us),
                          22 [CLEANUP], MaxLatency(us), 4403 [CLEANUP],
                          95thPercentileLatency(us), 66 [CLEANUP],
                          99thPercentileLatency(us), 129 [INSERT], Operations,
                          501865 [INSERT], AverageLatency(us), 6387.696777021709
                          [INSERT], MinLatency(us), 99 [INSERT], MaxLatency(us),
                          464895 [INSERT], 95thPercentileLatency(us), 8879
                          [INSERT], 99thPercentileLatency(us), 11807 [INSERT],
                          Return=OK, 501865
                        </td>
                        <td>
                          [OVERALL], RunTime(ms), 90394{" "}
                          <strong>
                            [OVERALL], Throughput(ops/sec), 110626.81151403855
                          </strong>{" "}
                          [TOTAL_GCS_PS_Scavenge], Count, 36
                          [TOTAL_GC_TIME_PS_Scavenge], Time(ms), 388
                          [TOTAL_GC_TIME_%_PS_Scavenge], Time(%),
                          0.4292320286744695 [TOTAL_GCS_PS_MarkSweep], Count, 0
                          [TOTAL_GC_TIME_PS_MarkSweep], Time(ms), 0
                          [TOTAL_GC_TIME_%_PS_MarkSweep], Time(%), 0.0
                          [TOTAL_GCs], Count, 36 [TOTAL_GC_TIME], Time(ms), 388
                          [TOTAL_GC_TIME_%], Time(%), 0.4292320286744695 [READ],
                          Operations, 9499648 [READ], AverageLatency(us),
                          2167.8260606077192 [READ], MinLatency(us), 65 [READ],
                          MaxLatency(us), 234751 [READ],
                          95thPercentileLatency(us), 3559 [READ],
                          99thPercentileLatency(us), 4487 [READ], Return=OK,
                          9499648 [CLEANUP], Operations, 256 [CLEANUP],
                          AverageLatency(us), 0.61328125 [CLEANUP],
                          MinLatency(us), 0 [CLEANUP], MaxLatency(us), 11
                          [CLEANUP], 95thPercentileLatency(us), 2 [CLEANUP],
                          99thPercentileLatency(us), 2 [INSERT], Operations,
                          500352 [INSERT], AverageLatency(us),
                          2265.0228898855207 [INSERT], MinLatency(us), 93
                          [INSERT], MaxLatency(us), 231295 [INSERT],
                          95thPercentileLatency(us), 3961 [INSERT],
                          99thPercentileLatency(us), 4999 [INSERT], Return=OK,
                          500352
                        </td>
                        <td>
                          [OVERALL], RunTime(ms), 253048{" "}
                          <strong>
                            [OVERALL], Throughput(ops/sec), 39518.1941765989
                          </strong>{" "}
                          [TOTAL_GCS_PS_Scavenge], Count, 141
                          [TOTAL_GC_TIME_PS_Scavenge], Time(ms), 655
                          [TOTAL_GC_TIME_%_PS_Scavenge], Time(%),
                          0.2588441718567228 [TOTAL_GCS_PS_MarkSweep], Count, 0
                          [TOTAL_GC_TIME_PS_MarkSweep], Time(ms), 0
                          [TOTAL_GC_TIME_%_PS_MarkSweep], Time(%), 0.0
                          [TOTAL_GCs], Count, 141 [TOTAL_GC_TIME], Time(ms), 655
                          [TOTAL_GC_TIME_%], Time(%), 0.2588441718567228 [READ],
                          Operations, 9500972 [READ], AverageLatency(us),
                          6365.878565266796 [READ], MinLatency(us), 376 [READ],
                          MaxLatency(us), 1861631 [READ],
                          95thPercentileLatency(us), 15551 [READ],
                          99thPercentileLatency(us), 21551 [READ], Return=OK,
                          9500972 [CLEANUP], Operations, 256 [CLEANUP],
                          AverageLatency(us), 106.23046875 [CLEANUP],
                          MinLatency(us), 50 [CLEANUP], MaxLatency(us), 687
                          [CLEANUP], 95thPercentileLatency(us), 157 [CLEANUP],
                          99thPercentileLatency(us), 261 [INSERT], Operations,
                          499028 [INSERT], AverageLatency(us), 6874.517305642168
                          [INSERT], MinLatency(us), 593 [INSERT],
                          MaxLatency(us), 433663 [INSERT],
                          95thPercentileLatency(us), 15399 [INSERT],
                          99thPercentileLatency(us), 21055 [INSERT], Return=OK,
                          499028 &nbsp;
                        </td>
                      </tr>
                      <tr>
                        <td>E</td>
                        <td>
                          [OVERALL], RunTime(ms), 794681 [
                          <strong>
                            OVERALL], Throughput(ops/sec), 12583.665646970294
                          </strong>{" "}
                          [TOTAL_GCS_PS_Scavenge], Count, 2970
                          [TOTAL_GC_TIME_PS_Scavenge], Time(ms), 6468
                          [TOTAL_GC_TIME_%_PS_Scavenge], Time(%),
                          0.8139114940460386 [TOTAL_GCS_PS_MarkSweep], Count, 0
                          [TOTAL_GC_TIME_PS_MarkSweep], Time(ms), 0
                          [TOTAL_GC_TIME_%_PS_MarkSweep], Time(%), 0.0
                          [TOTAL_GCs], Count, 2970 [TOTAL_GC_TIME], Time(ms),
                          6468 [TOTAL_GC_TIME_%], Time(%), 0.8139114940460386
                          [CLEANUP], Operations, 256 [CLEANUP],
                          AverageLatency(us), 35.96484375 [CLEANUP],
                          MinLatency(us), 0 [CLEANUP], MaxLatency(us), 8575
                          [CLEANUP], 95thPercentileLatency(us), 5 [CLEANUP],
                          99thPercentileLatency(us), 18 [INSERT], Operations,
                          500313 [INSERT], AverageLatency(us),
                          17010.495267962255 [INSERT], MinLatency(us), 112
                          [INSERT], MaxLatency(us), 66943 [INSERT],
                          95thPercentileLatency(us), 18863 [INSERT],
                          99thPercentileLatency(us), 19791 [INSERT], Return=OK,
                          500313 [SCAN], Operations, 9499687 [SCAN],
                          AverageLatency(us), 19530.358274962113 [SCAN],
                          MinLatency(us), 91 [SCAN], MaxLatency(us), 82047
                          [SCAN], 95thPercentileLatency(us), 22943 [SCAN],
                          99thPercentileLatency(us), 24287 [SCAN], Return=OK,
                          9499687 &nbsp;
                        </td>
                        <td>
                          [OVERALL], RunTime(ms), 1095612{" "}
                          <strong>
                            [OVERALL], Throughput(ops/sec), 9127.318795339956
                          </strong>{" "}
                          [TOTAL_GCS_PS_Scavenge], Count, 1360
                          [TOTAL_GC_TIME_PS_Scavenge], Time(ms), 7894
                          [TOTAL_GC_TIME_%_PS_Scavenge], Time(%),
                          0.7205105457041361 [TOTAL_GCS_PS_MarkSweep], Count, 0
                          [TOTAL_GC_TIME_PS_MarkSweep], Time(ms), 0
                          [TOTAL_GC_TIME_%_PS_MarkSweep], Time(%), 0.0
                          [TOTAL_GCs], Count, 1360 [TOTAL_GC_TIME], Time(ms),
                          7894 [TOTAL_GC_TIME_%], Time(%), 0.7205105457041361
                          [CLEANUP], Operations, 200 [CLEANUP],
                          AverageLatency(us), 17.28 [CLEANUP], MinLatency(us), 0
                          [CLEANUP], MaxLatency(us), 3107 [CLEANUP],
                          95thPercentileLatency(us), 3 [CLEANUP],
                          99thPercentileLatency(us), 4 [INSERT], Operations,
                          501097 [INSERT], AverageLatency(us), 58.6719916503192
                          [INSERT], MinLatency(us), 6 [INSERT], MaxLatency(us),
                          119807 [INSERT], 95thPercentileLatency(us), 84
                          [INSERT], 99thPercentileLatency(us), 107 [INSERT],
                          Return=OK, 501097 [SCAN], Operations, 9498903 [SCAN],
                          AverageLatency(us), 23043.890135418795 [SCAN],
                          MinLatency(us), 188 [SCAN], MaxLatency(us), 216959
                          [SCAN], 95thPercentileLatency(us), 27967 [SCAN],
                          99thPercentileLatency(us), 33599 [SCAN], Return=OK,
                          9498903
                        </td>
                        <td>
                          [OVERALL], RunTime(ms), 7710233 [
                          <strong>
                            OVERALL], Throughput(ops/sec), 1296.9776659148952
                          </strong>{" "}
                          [TOTAL_GCS_PS_Scavenge], Count, 7417
                          [TOTAL_GC_TIME_PS_Scavenge], Time(ms), 70015
                          [TOTAL_GC_TIME_%_PS_Scavenge], Time(%),
                          0.9080789127903138 [TOTAL_GCS_PS_MarkSweep], Count, 82
                          [TOTAL_GC_TIME_PS_MarkSweep], Time(ms), 1984
                          [TOTAL_GC_TIME_%_PS_MarkSweep], Time(%),
                          0.02573203689175152 [TOTAL_GCs], Count, 7499
                          [TOTAL_GC_TIME], Time(ms), 71999 [TOTAL_GC_TIME_%],
                          Time(%), 0.9338109496820653 [CLEANUP], Operations, 200
                          [CLEANUP], AverageLatency(us), 81.93 [CLEANUP],
                          MinLatency(us), 27 [CLEANUP], MaxLatency(us), 1648
                          [CLEANUP], 95thPercentileLatency(us), 105 [CLEANUP],
                          99thPercentileLatency(us), 191 [INSERT], Operations,
                          500881 [INSERT], AverageLatency(us), 6353.796087294188
                          [INSERT], MinLatency(us), 120 [INSERT],
                          MaxLatency(us), 616447 [INSERT],
                          95thPercentileLatency(us), 8391 [INSERT],
                          99thPercentileLatency(us), 12463 [INSERT], Return=OK,
                          500881 [SCAN], Operations, 9499119 [SCAN],
                          AverageLatency(us), 161738.31230538327 [SCAN],
                          MinLatency(us), 68 [SCAN], MaxLatency(us), 1277951
                          [SCAN], 95thPercentileLatency(us), 302847 [SCAN],
                          99thPercentileLatency(us), 345599 [SCAN], Return=OK,
                          9499119
                        </td>
                        <td>
                          [OVERALL], RunTime(ms), 4141804{" "}
                          <strong>
                            [OVERALL], Throughput(ops/sec), 2414.4068623237604
                          </strong>{" "}
                          [TOTAL_GCS_PS_Scavenge], Count, 2613
                          [TOTAL_GC_TIME_PS_Scavenge], Time(ms), 33839
                          [TOTAL_GC_TIME_%_PS_Scavenge], Time(%),
                          0.8170111381417372 [TOTAL_GCS_PS_MarkSweep], Count, 34
                          [TOTAL_GC_TIME_PS_MarkSweep], Time(ms), 5754
                          [TOTAL_GC_TIME_%_PS_MarkSweep], Time(%),
                          0.13892497085810918 [TOTAL_GCs], Count, 2647
                          [TOTAL_GC_TIME], Time(ms), 39593 [TOTAL_GC_TIME_%],
                          Time(%), 0.9559361089998464 [CLEANUP], Operations, 256
                          [CLEANUP], AverageLatency(us), 1.1796875 [CLEANUP],
                          MinLatency(us), 0 [CLEANUP], MaxLatency(us), 14
                          [CLEANUP], 95thPercentileLatency(us), 2 [CLEANUP],
                          99thPercentileLatency(us), 5 [INSERT], Operations,
                          499237 [INSERT], AverageLatency(us), 19275.03775361201
                          [INSERT], MinLatency(us), 111 [INSERT],
                          MaxLatency(us), 926719 [INSERT],
                          95thPercentileLatency(us), 43199 [INSERT],
                          99thPercentileLatency(us), 56063 [INSERT], Return=OK,
                          499237 [SCAN], Operations, 9500763 [SCAN],
                          AverageLatency(us), 87289.91825867038 [SCAN],
                          MinLatency(us), 1056 [SCAN], MaxLatency(us), 1036799
                          [SCAN], 95thPercentileLatency(us), 141823 [SCAN],
                          99thPercentileLatency(us), 159743 [SCAN], Return=OK,
                          9500763
                        </td>
                        <td>
                          [OVERALL], RunTime(ms), 180163{" "}
                          <strong>
                            [OVERALL], Throughput(ops/sec), 11143.203654468454
                          </strong>{" "}
                          [TOTAL_GCS_PS_Scavenge], Count, 125
                          [TOTAL_GC_TIME_PS_Scavenge], Time(ms), 1508
                          [TOTAL_GC_TIME_%_PS_Scavenge], Time(%),
                          0.8370198098388681 [TOTAL_GCS_PS_MarkSweep], Count, 0
                          [TOTAL_GC_TIME_PS_MarkSweep], Time(ms), 0
                          [TOTAL_GC_TIME_%_PS_MarkSweep], Time(%), 0.0
                          [TOTAL_GCs], Count, 125 [TOTAL_GC_TIME], Time(ms),
                          1508 [TOTAL_GC_TIME_%], Time(%), 0.8370198098388681
                          [CLEANUP], Operations, 256 [CLEANUP],
                          AverageLatency(us), 3264.69140625 [CLEANUP],
                          MinLatency(us), 36 [CLEANUP], MaxLatency(us), 92415
                          [CLEANUP], 95thPercentileLatency(us), 9607 [CLEANUP],
                          99thPercentileLatency(us), 91839 [INSERT], Operations,
                          100722 [INSERT], AverageLatency(us),
                          14705.268729771053 [INSERT], MinLatency(us), 683
                          [INSERT], MaxLatency(us), 550911 [INSERT],
                          95thPercentileLatency(us), 40671 [INSERT],
                          99thPercentileLatency(us), 61663 [INSERT], Return=OK,
                          100722 [SCAN], Operations, 1906871 [SCAN],
                          AverageLatency(us), 23156.780577710815 [SCAN],
                          MinLatency(us), 485 [SCAN], MaxLatency(us), 2018303
                          [SCAN], 95thPercentileLatency(us), 59231 [SCAN],
                          99thPercentileLatency(us), 85951 [SCAN], Return=OK,
                          1906871 &nbsp;
                        </td>
                      </tr>
                      <tr>
                        <td>F</td>
                        <td>
                          [OVERALL], RunTime(ms), 47448{" "}
                          <strong>
                            [OVERALL], Throughput(ops/sec), 210757.0392851121
                          </strong>{" "}
                          [TOTAL_GCS_PS_Scavenge], Count, 302
                          [TOTAL_GC_TIME_PS_Scavenge], Time(ms), 344
                          [TOTAL_GC_TIME_%_PS_Scavenge], Time(%),
                          0.7250042151407856 [TOTAL_GCS_PS_MarkSweep], Count, 0
                          [TOTAL_GC_TIME_PS_MarkSweep], Time(ms), 0
                          [TOTAL_GC_TIME_%_PS_MarkSweep], Time(%), 0.0
                          [TOTAL_GCs], Count, 302 [TOTAL_GC_TIME], Time(ms), 344
                          [TOTAL_GC_TIME_%], Time(%), 0.7250042151407856 [READ],
                          Operations, 10000000 [READ], AverageLatency(us),
                          779.8875411 [READ], MinLatency(us), 45 [READ],
                          MaxLatency(us), 169983 [READ],
                          95thPercentileLatency(us), 1108 [READ],
                          99thPercentileLatency(us), 3485 [READ], Return=OK,
                          10000000 [READ-MODIFY-WRITE], Operations, 4998212
                          [READ-MODIFY-WRITE], AverageLatency(us),
                          1617.1176476708072 [READ-MODIFY-WRITE],
                          MinLatency(us), 125 [READ-MODIFY-WRITE],
                          MaxLatency(us), 219775 [READ-MODIFY-WRITE],
                          95thPercentileLatency(us), 2469 [READ-MODIFY-WRITE],
                          99thPercentileLatency(us), 6707 [CLEANUP], Operations,
                          256 [CLEANUP], AverageLatency(us), 21.37109375
                          [CLEANUP], MinLatency(us), 0 [CLEANUP],
                          MaxLatency(us), 5071 [CLEANUP],
                          95thPercentileLatency(us), 4 [CLEANUP],
                          99thPercentileLatency(us), 9 [UPDATE], Operations,
                          4998212 [UPDATE], AverageLatency(us),
                          832.4762587101147 [UPDATE], MinLatency(us), 55
                          [UPDATE], MaxLatency(us), 156159 [UPDATE],
                          95thPercentileLatency(us), 1377 [UPDATE],
                          99thPercentileLatency(us), 3499 [UPDATE], Return=OK,
                          4998212 &nbsp;
                        </td>
                        <td>
                          [OVERALL], RunTime(ms), 440455{" "}
                          <strong>
                            [OVERALL], Throughput(ops/sec), 22703.794939324107
                          </strong>{" "}
                          [TOTAL_GCS_PS_Scavenge], Count, 287
                          [TOTAL_GC_TIME_PS_Scavenge], Time(ms), 1454
                          [TOTAL_GC_TIME_%_PS_Scavenge], Time(%),
                          0.33011317841777255 [TOTAL_GCS_PS_MarkSweep], Count, 0
                          [TOTAL_GC_TIME_PS_MarkSweep], Time(ms), 0
                          [TOTAL_GC_TIME_%_PS_MarkSweep], Time(%), 0.0
                          [TOTAL_GCs], Count, 287 [TOTAL_GC_TIME], Time(ms),
                          1454 [TOTAL_GC_TIME_%], Time(%), 0.33011317841777255
                          [READ], Operations, 10000000 [READ],
                          AverageLatency(us), 8743.3432055 [READ],
                          MinLatency(us), 74 [READ], MaxLatency(us), 1012735
                          [READ], 95thPercentileLatency(us), 8935 [READ],
                          99thPercentileLatency(us), 68927 [READ], Return=OK,
                          10000000 [READ-MODIFY-WRITE], Operations, 5002005
                          [READ-MODIFY-WRITE], AverageLatency(us),
                          8825.756244346017 [READ-MODIFY-WRITE], MinLatency(us),
                          93 [READ-MODIFY-WRITE], MaxLatency(us), 1012735
                          [READ-MODIFY-WRITE], 95thPercentileLatency(us), 9047
                          [READ-MODIFY-WRITE], 99thPercentileLatency(us), 69759
                          [CLEANUP], Operations, 200 [CLEANUP],
                          AverageLatency(us), 15.69 [CLEANUP], MinLatency(us), 0
                          [CLEANUP], MaxLatency(us), 2859 [CLEANUP],
                          95thPercentileLatency(us), 3 [CLEANUP],
                          99thPercentileLatency(us), 4 [UPDATE], Operations,
                          5002005 [UPDATE], AverageLatency(us), 72.7271746029842
                          [UPDATE], MinLatency(us), 3 [UPDATE], MaxLatency(us),
                          193407 [UPDATE], 95thPercentileLatency(us), 93
                          [UPDATE], 99thPercentileLatency(us), 619 [UPDATE],
                          Return=OK, 5002005
                        </td>
                        <td>
                          [OVERALL], RunTime(ms), 202415{" "}
                          <strong>
                            [OVERALL], Throughput(ops/sec), 49403.453301385765
                          </strong>{" "}
                          [TOTAL_GCS_PS_Scavenge], Count, 219
                          [TOTAL_GC_TIME_PS_Scavenge], Time(ms), 1039
                          [TOTAL_GC_TIME_%_PS_Scavenge], Time(%),
                          0.5133018798013981 [TOTAL_GCS_PS_MarkSweep], Count, 0
                          [TOTAL_GC_TIME_PS_MarkSweep], Time(ms), 0
                          [TOTAL_GC_TIME_%_PS_MarkSweep], Time(%), 0.0
                          [TOTAL_GCs], Count, 219 [TOTAL_GC_TIME], Time(ms),
                          1039 [TOTAL_GC_TIME_%], Time(%), 0.5133018798013981
                          [READ], Operations, 10000000 [READ],
                          AverageLatency(us), 2690.8890712 [READ],
                          MinLatency(us), 30 [READ], MaxLatency(us), 269055
                          [READ], 95thPercentileLatency(us), 2813 [READ],
                          99thPercentileLatency(us), 5275 [READ], Return=OK,
                          10000000 [READ-MODIFY-WRITE], Operations, 5000917
                          [READ-MODIFY-WRITE], AverageLatency(us),
                          5376.082192125964 [READ-MODIFY-WRITE], MinLatency(us),
                          58 [READ-MODIFY-WRITE], MaxLatency(us), 279039
                          [READ-MODIFY-WRITE], 95thPercentileLatency(us), 5663
                          [READ-MODIFY-WRITE], 99thPercentileLatency(us), 10447
                          [CLEANUP], Operations, 200 [CLEANUP],
                          AverageLatency(us), 65.325 [CLEANUP], MinLatency(us),
                          23 [CLEANUP], MaxLatency(us), 4311 [CLEANUP],
                          95thPercentileLatency(us), 65 [CLEANUP],
                          99thPercentileLatency(us), 79 [UPDATE], Operations,
                          5000917 [UPDATE], AverageLatency(us),
                          2682.2985254504324 [UPDATE], MinLatency(us), 27
                          [UPDATE], MaxLatency(us), 269055 [UPDATE],
                          95thPercentileLatency(us), 2807 [UPDATE],
                          99thPercentileLatency(us), 5275 [UPDATE], Return=OK,
                          5000917
                        </td>
                        <td>
                          [OVERALL], RunTime(ms), 142059{" "}
                          <strong>
                            [OVERALL], Throughput(ops/sec), 70393.28729612344
                          </strong>{" "}
                          [TOTAL_GCS_PS_Scavenge], Count, 30
                          [TOTAL_GC_TIME_PS_Scavenge], Time(ms), 448
                          [TOTAL_GC_TIME_%_PS_Scavenge], Time(%),
                          0.315361927086633 [TOTAL_GCS_PS_MarkSweep], Count, 0
                          [TOTAL_GC_TIME_PS_MarkSweep], Time(ms), 0
                          [TOTAL_GC_TIME_%_PS_MarkSweep], Time(%), 0.0
                          [TOTAL_GCs], Count, 30 [TOTAL_GC_TIME], Time(ms), 448
                          [TOTAL_GC_TIME_%], Time(%), 0.315361927086633 [READ],
                          Operations, 10000000 [READ], AverageLatency(us),
                          2255.612546 [READ], MinLatency(us), 54 [READ],
                          MaxLatency(us), 168575 [READ],
                          95thPercentileLatency(us), 3965 [READ],
                          99thPercentileLatency(us), 5191 [READ], Return=OK,
                          10000000 [READ-MODIFY-WRITE], Operations, 4999160
                          [READ-MODIFY-WRITE], AverageLatency(us),
                          4549.138567479336 [READ-MODIFY-WRITE], MinLatency(us),
                          142 [READ-MODIFY-WRITE], MaxLatency(us), 239999
                          [READ-MODIFY-WRITE], 95thPercentileLatency(us), 7807
                          [READ-MODIFY-WRITE], 99thPercentileLatency(us), 10159
                          [CLEANUP], Operations, 256 [CLEANUP],
                          AverageLatency(us), 0.93359375 [CLEANUP],
                          MinLatency(us), 0 [CLEANUP], MaxLatency(us), 13
                          [CLEANUP], 95thPercentileLatency(us), 2 [CLEANUP],
                          99thPercentileLatency(us), 5 [UPDATE], Operations,
                          4999160 [UPDATE], AverageLatency(us),
                          2290.7278500788134 [UPDATE], MinLatency(us), 70
                          [UPDATE], MaxLatency(us), 167423 [UPDATE],
                          95thPercentileLatency(us), 4093 [UPDATE],
                          99thPercentileLatency(us), 5395 [UPDATE], Return=OK,
                          4999160 &nbsp;
                        </td>
                        <td>
                          [OVERALL], RunTime(ms), 180188{" "}
                          <strong>
                            [OVERALL], Throughput(ops/sec), 23523.26459031678
                          </strong>{" "}
                          [TOTAL_GCS_PS_Scavenge], Count, 38
                          [TOTAL_GC_TIME_PS_Scavenge], Time(ms), 184
                          [TOTAL_GC_TIME_%_PS_Scavenge], Time(%),
                          0.10211556818434081 [TOTAL_GCS_PS_MarkSweep], Count, 0
                          [TOTAL_GC_TIME_PS_MarkSweep], Time(ms), 0
                          [TOTAL_GC_TIME_%_PS_MarkSweep], Time(%), 0.0
                          [TOTAL_GCs], Count, 38 [TOTAL_GC_TIME], Time(ms), 184
                          [TOTAL_GC_TIME_%], Time(%), 0.10211556818434081
                          [READ], Operations, 4238610 [READ],
                          AverageLatency(us), 3184.4737060026755 [READ],
                          MinLatency(us), 429 [READ], MaxLatency(us), 1780735
                          [READ], 95thPercentileLatency(us), 7155 [READ],
                          99thPercentileLatency(us), 10559 [READ], Return=OK,
                          4238610 [READ-MODIFY-WRITE], Operations, 2118201
                          [READ-MODIFY-WRITE], AverageLatency(us),
                          18357.578561241357 [READ-MODIFY-WRITE],
                          MinLatency(us), 1070 [READ-MODIFY-WRITE],
                          MaxLatency(us), 4067327 [READ-MODIFY-WRITE],
                          95thPercentileLatency(us), 16063 [READ-MODIFY-WRITE],
                          99thPercentileLatency(us), 425215 [CLEANUP],
                          Operations, 256 [CLEANUP], AverageLatency(us),
                          4199.5234375 [CLEANUP], MinLatency(us), 37 [CLEANUP],
                          MaxLatency(us), 40351 [CLEANUP],
                          95thPercentileLatency(us), 13671 [CLEANUP],
                          99thPercentileLatency(us), 19119 [UPDATE], Operations,
                          2118201 [UPDATE], AverageLatency(us),
                          15166.035100540506 [UPDATE], MinLatency(us), 522
                          [UPDATE], MaxLatency(us), 4063231 [UPDATE],
                          95thPercentileLatency(us), 10087 [UPDATE],
                          99thPercentileLatency(us), 417279 [UPDATE], Return=OK,
                          2118201 &nbsp;
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
