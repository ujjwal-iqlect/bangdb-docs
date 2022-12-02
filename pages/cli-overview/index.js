import React from "react";
import Head from "next/head";
import Image from "next/image";
import Breadcrumb from "../../components/Breadcrumb";
import Codebox from "../../components/Codebox";

export default function CliOverview() {
  return (
    <React.Fragment>
      <Head>
        <title>CLI Overview - BangDB</title>
        <meta
          name="description"
          content="BangDB CLI (Command Line Interface) allows user to interact with BangDB easily and efficiently. User may perform almost all task using CLI."
        ></meta>
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="CLI Overview - BangDB" />
        <meta
          property="og:description"
          content="BangDB CLI (Command Line Interface) allows user to interact with BangDB easily and efficiently. User may perform almost all task using CLI."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="CLI Overview - BangDB" />
        <meta
          name="twitter:description"
          content="BangDB CLI (Command Line Interface) allows user to interact with BangDB easily and efficiently. User may perform almost all task using CLI."
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
              <h1 className="article-title">CLI Overview</h1>
              <div className="article-body">
                <h2>Command Line Interface for BangDB</h2>
                <p>
                  BangDB Command Line Interface (CLI) allows user to interact
                  with the BangDB in easy and efficient manner. User may perform
                  almost all task using the CLI. The CLI could be used to do
                  several different things in different areas as shown below.
                </p>
                <h3>Database</h3>
                <p>
                  DB related activities, create table, index, put, get scan data
                  etc…
                </p>
                <h3>Stream</h3>
                <p>
                  Stream related, create stream, add CEP, filters, join, draw
                  charts etc…
                </p>
                <h3>ML</h3>
                <p>Train model, test, deploy etc…</p>
                <h3>BRS</h3>
                <p>Create bucket, add files, models, etc…</p>
                <h3>Replication</h3>
                <p>Add slaves, manage master/ slave, etc…</p>
                <h3>Agent</h3>
                <p>Manage agents, add monitoring of resources etc…</p>
                <p>
                  Let&apos;s go into the details and see how to go about it. But
                  before that few important points:
                </p>
                <ul>
                  <li>
                    The command reads one line at a time; hence we must complete
                    the command in single line. When we press enter, that&apos;s
                    when CLI interprets the command.
                  </li>
                  <li>
                    The line may not end with &quot;;&quot; (semicolon),
                    &quot;enter&quot; is good enough.
                  </li>
                  <li>
                    When data is json and we wish to show them in pretty format,
                    just add &quot;pretty&quot; at the end of the command.
                  </li>
                  <li>
                    When we are scanning a table or stream (range query), then
                    we may limit the number of items to be shown by adding
                    “limit n”, where n is the number of rows/events we wish to
                    see at a time. Default value for n is 10.
                  </li>
                  <li>
                    <code>&quot;_pk&quot;</code> is used for primary keys in the
                    queries.
                  </li>
                  <li>
                    <code>&quot;st&quot;</code> and <code>&quot;et&quot;</code>{" "}
                    are used for start time and end time in stream queries
                    respectively.
                  </li>
                  <li>
                    The usual SQL like command is in lower case only, CLI
                    doesn&apos;t need upper case for such reserved
                    names/commands.
                  </li>
                  <li>
                    {" "}
                    There are several commands which creates workflow to
                    complete the process, such as create table, create schema,
                    add index, train model etc…
                  </li>
                </ul>
                <h2>Run CLI</h2>
                <p>
                  To run CLI, cd to the directory where the bangdb-cli-2.0 is
                  placed and
                </p>
                <Codebox code={`./bangdb-cli-2.0`} copy={`./bangdb-cli-2.0`} />
                <aside className="doc-note">
                  <strong>Note: </strong>We must keep bangdb.config in the same
                  dir as cli, this is a requirement right now, will get relaxed
                  in some time in next release.
                </aside>
                <p>We get something like following:</p>
                <Image
                  alt="BangDB CLI Welcome"
                  width={1476}
                  height={636}
                  src="https://bangdb.com/wp-content/uploads/2021/01/cli-welcome.png"
                />
                <p>
                  Now we are ready to interact with the db. We can seek help as
                  we need, you make tell which area help is needed. So for
                  example if help is needed for db, we may type.
                </p>
                <Codebox code={`help db`} copy={`help db`} />
                <Image
                  alt="BangDB CLI Help"
                  width={1600}
                  height={1043}
                  src="https://bangdb.com/wp-content/uploads/2021/01/cli-help.png"
                />
                <p>
                  Although the CLI offers simple interface and workflow for most
                  of the commands, however there are several commands which may
                  require bit of discussions and they are covered here in
                  detail.
                </p>
              </div>
            </article>
          </div>
        </main>
      </section>
    </React.Fragment>
  );
}
