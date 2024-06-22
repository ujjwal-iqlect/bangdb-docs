import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Codebox from "../../components/Codebox";
import Breadcrumb from "../../components/Breadcrumb";
import DocArticle from "../../components/DocArticle";

export default function Throughput() {
  const variousOptions = String.raw`usage: bangdb_bench
kv/doc/stream
num_threads;
num_items
put/get/scan/all/overlap
[factor(optional define only with overlap)]
factor 1;
the factor defines how much read and write 1/factor part write and rest read. ex;
factor = 3, 33 percent write and 67 percent read
Running the default test with 16 threads (connections), put and get 1000000 items etc...`;
  return (
    <React.Fragment>
      <Head>
        <title>Throughput for 1B operations - BangDB</title>
        <meta
          name="description"
          content="Throughput for 1B operations - We notice that the average throughput of the server was around 250K ops/sec."
        ></meta>
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Throughput for 1B operations - BangDB"
        />
        <meta
          property="og:description"
          content="Throughput for 1B operations - We notice that the average throughput of the server was around 250K ops/sec."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="Throughput for 1B operations - BangDB"
        />
        <meta
          name="twitter:description"
          content="Throughput for 1B operations - We notice that the average throughput of the server was around 250K ops/sec."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Getting Started" url="/server-getting-started" />
        <h1 className="article-title">Throughput-1B-Records</h1>
        <div className="article-body">
          <h2>BangDB Throughput for 1B operations [ put and get ]</h2>
          <p>
            Throughput-1B-Records - Goal of this benchmark is to find out the
            throughput of db where we put data and then get them using multiple
            connections with all features of the db remain ON. The benchmark is
            run for BangDB server, however, similarly we can run for embedded as
            well and the data would be comparable.
          </p>
          <aside className="doc-note">
            <strong>Note: </strong>
            <p>Following are the details of the operation.</p>
            <p>
              Num of records: 1 Billion <br />
              Operations: put and get Type: Key/Value <br />
              Data size: 100GB+ <br />
              Log size (WAL): 400GB+
            </p>
            <p>Following are the machine details.</p>
            <p>
              OS: Ubuntu 20.04 <br />
              RAM: 64GB <br />
              Cores: 32 <br />
              Disk: SATA, 1 TB <br />
              Processor: Intel(R) Xeon(R) CPU E5-2667 v4 @ 3.20GHz <br />
              DB configuration Buffer Pool: 48GB <br />
              Number of connections from client: 200
            </p>
            <p>
              (for server case) Server and client on same machine DB with all
              other default settings (see{" "}
              <Link href={"/bangdb-config"}>bangdb config</Link>
              for details)
            </p>
          </aside>
          <p>Here are several charts, depicting the runs for BangDB Server.</p>
          <h3>1B Put</h3>
          <Image
            src="https://bangdb.com/wp-content/uploads/2020/11/server_1B_put.png"
            alt="1B Put"
            width={640}
            height={384}
          />
          <p>
            We notice that the average throughput of the server was around 250K
            ops/sec. It started with above 300K mark but soon it goes down to a
            stable 250K mark. This is because after filling buffer pool for some
            limit, db starts flushing the data to disk based on the set
            configuration. Note that the behavior can be changed by tweaking the
            configurations based on need. The DB at the same time was also
            flushing WAL logs and checkpointing as well. Unlike many other
            NoSQLs, BangDB keeps checking and flushing the data in continuous
            manner as much as possible.
          </p>
          <h3>1B Get</h3>
          <Image
            src="https://bangdb.com/wp-content/uploads/2020/11/server_1B_get.png"
            alt="1B Get"
            width={640}
            height={384}
          />
          <p>
            With get, we note that the variability for the ops/sec is much less
            than when compared to put and it makes sense as with put, we have
            lots of flushing/write activities also going on. With read too, db
            does some writing (checkpointing, unflushed logs, or simply log
            reclaim etc.). The avg throughput is close to 315K ops/sec for get
          </p>
          <h2>Put and Get comparison [ race to 100 percent ]</h2>
          <Image
            src="https://bangdb.com/wp-content/uploads/2020/11/server_1B_ops_complete.png"
            alt="Put and Get Comparison"
            width={640}
            height={384}
          />
          <p>
            While get is almost a straight line, indicating consistent
            throughput for 1B records, put bends slowly due to increasing writes
            to the disk
          </p>
          <h3>How to run</h3>
          <p>
            This is simple benchmark and can be run easily on a commodity or
            other servers. Minimum requirement to run BangDB is 4GB RAM with
            2CPU, however it will be good to get better machine to run
            throughput 1B benchmark. Also, user may run the benchmark with
            different number completely, for example, we can run it for 10M
            records with 32 connections/threads.
          </p>
          <p>
            The entire code for the benchmark is available{" "}
            <Link
              href={
                "https://github.com/sachin-sinha/BangDB/tree/master/v2.0/bangdb_2.0_ubuntu18/bench"
              }
            >
              here.{" "}
            </Link>
            The same benchmark can be run for embedded db as well, the code for
            both server and embd is available at github.
          </p>
          <p>
            Also note that, there is C++ test app and Java test app available,
            and you may run from either of these. The build script is there to
            help It&apos;s very simple to run the benchmark, simply take the BangDB,
            take the bench, follow the instruction given in the README and
            that&apos;s it. Below is the details for running benchmark for Server
            using java test app Here are the steps to run the bench First, let&apos;s
            build the bench
          </p>
          <Codebox code="bash build.sh" copy="bash build.sh" />
          <p>If successful, now you may run tests</p>
          <Codebox code="bash exapp.sh" copy="bash exapp.sh" />
          <p>Or, to put 1M key and val using 16 threads</p>
          <Codebox
            code="bash exapp 16 1000000 put"
            copy="bash exapp 16 1000000 put"
          />
          <p>Or, to get 1M key and val using 16 threads</p>
          <Codebox
            code="bash exapp 16 1000000 get"
            copy="bash exapp 16 1000000 get"
          />
          <p>Various options are:</p>
          <Codebox code={variousOptions} copy={variousOptions} />
          <aside className="doc-note">
            <strong>Note: </strong>If you run directly using bench exe, then you
            may need to set LD_LIBRARY_PATH for the lib
          </aside>
        </div>
      </DocArticle>
    </React.Fragment>
  );
}
