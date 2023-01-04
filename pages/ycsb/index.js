import React from "react";
import Head from "next/head";
import Link from "next/link";
import DocArticle from "../../components/DocArticle";
import Codebox from "../../components/Codebox";
import Breadcrumb from "../../components/Breadcrumb";

export default function Ycsb() {
  return (
    <React.Fragment>
      <Head>
        <title>YCSB Benchmark test for BangDB</title>
        <meta
          name="description"
          content="We'll go through how to set up the YCSB test bench on your machine and then run the YCSB benchmark test for BangDB"
        ></meta>
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="YCSB Benchmark test for BangDB" />
        <meta
          property="og:description"
          content="We'll go through how to set up the YCSB test bench on your machine and then run the YCSB benchmark test for BangDB"
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="YCSB Benchmark test for BangDB" />
        <meta
          name="twitter:description"
          content="We'll go through how to set up the YCSB test bench on your machine and then run the YCSB benchmark test for BangDB"
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Getting Started" url="/server-getting-started" />
        <h1 className="article-title">YCSB Benchmark for BangDB</h1>
        <div className="article-body">
          <p>
            The Yahoo! Cloud Serving Benchmark (YCSB) is an open-source
            specification and program suite for evaluating retrieval and
            maintenance capabilities of computer programs. It is often used to
            compare relative performance of NoSQL database management systems.
          </p>
          <p>
            YCSB provides a framework along with several workloads that could be
            run to evaluate the performance and throughput of the database in
            respective different scenarios. See{" "}
            <Link
              className="external"
              target="_blank"
              href="https://github.com/brianfrankcooper/YCSB/wiki/Core-Workloads"
            >
              here
            </Link>{" "}
            to learn and know more about the workloads.
          </p>
          <p>Each of these workload test runs in two steps:</p>
          <ol>
            <li>Load and</li>
            <li>Run</li>
          </ol>
          <p>
            Load stage is to load the data and then run stage is where we run
            the test.
          </p>
          <p>
            This section, we will go through how to set up the YCSB test bench
            on your machine and then look into the results of the test as
            compared with other databases like (MongoDB, Couchbase, YugabyteDB
            and Redis) vis a vis BangDB.
          </p>
          <h2>How to set up and run YCSB benchmark test for BangDB</h2>
          <h3>Step 1</h3>
          <p>Take BangDB 2.0 and run the server</p>
          <Codebox
            code="wget https://bangdb.com/downloads/bangdb_2.0_ubuntu18.tar.gz"
            copy="wget https://bangdb.com/downloads/bangdb_2.0_ubuntu18.tar.gz"
          />
          <Codebox
            code="tar -xzvf bangdb_2.0_ubuntu18.tar.gz"
            copy="tar -xzvf bangdb_2.0_ubuntu18.tar.gz"
          />
          <Codebox
            code="cd bangdb_2.0_ubuntu18"
            copy="cd bangdb_2.0_ubuntu18"
          />
          <Codebox code="bash install.sh" copy="bash install.sh" />
          <Codebox code="cd bin" copy="cd bin" />
          <Codebox
            code="./bangdb-server-2.0 -d ycsb -b yes"
            copy="./bangdb-server-2.0 -d ycsb -b yes"
          />
          <h2>
            Checkout getting started section or github to install the BangDB
          </h2>
          <h3>Step 2</h3>
          <p>
            Checkout YCSB code from{" "}
            <Link
              className="external"
              href={"https://github.com/sachin-sinha/YCSB/tree/db_bangdb"}
            >
              Github
            </Link>
          </p>
          <Codebox
            code="git clone https://github.com/sachin-sinha/YCSB"
            copy="git clone https://github.com/sachin-sinha/YCSB"
          />
          <Codebox code="cd YCSB" copy="cd YCSB" />
          <Codebox
            code="git checkout db_bangdb"
            copy="git checkout db_bangdb"
          />
          <Codebox
            code="mvn -pl site.ycsb:bangdb-binding -am clean package"
            copy="mvn -pl site.ycsb:bangdb-binding -am clean package"
          />
          <p>That's it. Now we are ready to run the tests.</p>
          <p>Load the data</p>
          <Codebox
            code="./bin/ycsb load bangdb -threads 128 -s -P workloads/workloada"
            copy="./bin/ycsb load bangdb -threads 128 -s -P workloads/workloada"
          />
          <p>Run the workload</p>
          <Codebox
            code="./bin/ycsb run bangdb -threads 128 -s -P workloads/workloada"
            copy="./bin/ycsb run bangdb -threads 128 -s -P workloads/workloada"
          />
          <p>
            See the{" "}
            <Link
              target={"_blank"}
              className="external"
              href={
                "https://github.com/sachin-sinha/YCSB/blob/db_bangdb/bangdb/README.md"
              }
            >
              README file
            </Link>{" "}
            under bangdb folder to see more details.
          </p>
        </div>
      </DocArticle>
    </React.Fragment>
  );
}
