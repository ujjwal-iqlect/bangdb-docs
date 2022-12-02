import React from "react";
import Head from "next/head";
import Breadcrumb from "../../components/Breadcrumb";
import HighlightedCpp from "../../components/HighlightedCpp";

export default function ReplicationCommandsCli() {
  return (
    <React.Fragment>
      <Head>
        <title>REPL Commands CLI - BangDB</title>
        <meta
          name="description"
          content="REPL Commands - Replication to the slaves happen in sync /async fashion based on setting and the replica (slaves) can be added at run time."
        ></meta>
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="REPL Commands CLI - BangDB" />
        <meta
          property="og:description"
          content="REPL Commands - Replication to the slaves happen in sync /async fashion based on setting and the replica (slaves) can be added at run time."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="REPL Commands CLI - BangDB" />
        <meta
          name="twitter:description"
          content="REPL Commands - Replication to the slaves happen in sync /async fashion based on setting and the replica (slaves) can be added at run time."
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
              <Breadcrumb text="Command Line Interface" url="/cli-overview" />
              <h1 className="article-title">REPL Commands</h1>
              <div className="article-body">
                <p>BangDB works in three different ways:</p>
                <ol>
                  <li>
                    <strong>Embedded</strong> - BangDB is part of application
                    process. On server or device
                  </li>
                  <li>
                    <strong>Server</strong> - BangDB runs as a service and
                    clients connect to it. User applications use client libs.
                    This is Master - Slave model
                  </li>
                  <li>
                    <strong>Distributed</strong> - BangDB runs as a p2p based
                    cluster. There is no master or slave, and entire cluster is
                    part of virtual network overlay Replication in this context
                    is for option 2, when server runs in master slave model.
                  </li>
                </ol>
                <p>
                  There is always a single master and there could be one or more
                  slaves attached to it. All the writes (from clients) will
                  happen on master and it will sync data with slaves.
                </p>
                <p>
                  Replication to the slaves happen in sync /async fashion based
                  on setting and the replica (slaves) can be added at run time
                  without bringing the master to halt and all operations on the
                  server can continue while initial sync and replication is in
                  progress.
                  <br />
                  Below are the list of all supported commands for replication
                  on CLI
                </p>
                <HighlightedCpp
                  code={`server repl state change command register master where server = ip:port
register slave where server = ip:port and master = ip:port
show servertype
show servertype where server = ip:port`}
                />
                <p>Make a server running at ip:port as master</p>
                <HighlightedCpp
                  code={`register master where server = 192.168.1.25:10101`}
                />
                <p>
                  Make a server running at ip:port as slave to a master running
                  at some other ip:port
                </p>
                <HighlightedCpp
                  code={`register slave where server = 192.168.1.26:10101 and master = 192.168.1.25:10101`}
                />
                <p>See the type of the server [ Master or Salve ]</p>
                <HighlightedCpp code={`show servertype`} />
                <p>Or</p>
                <HighlightedCpp
                  code={`show servertype where server = 192.168.1.25:10101`}
                />
              </div>
            </article>
          </div>
        </main>
      </section>
    </React.Fragment>
  );
}
