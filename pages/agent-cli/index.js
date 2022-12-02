import React from "react";
import Head from "next/head";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import HighlightedCpp from "../../components/HighlightedCpp";
import HighlightedOutput from "../../components/HighlightedOutput";

export default function AgentCommandsCli() {
  return (
    <React.Fragment>
      <Head>
        <title>Agent Commands CLI - BangDB</title>
        <meta
          name="description"
          content="Agent Commands - Agent is used for streaming data into BangDB. It runs as a service on the server from where data is supposed to be streamed."
        ></meta>
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Agent Commands CLI - BangDB" />
        <meta
          property="og:description"
          content="Agent Commands - Agent is used for streaming data into BangDB. It runs as a service on the server from where data is supposed to be streamed."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="Agent Commands CLI - BangDB" />
        <meta
          name="twitter:description"
          content="Agent Commands - Agent is used for streaming data into BangDB. It runs as a service on the server from where data is supposed to be streamed."
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
              <h1 className="article-title">Agent Commands</h1>
              <div className="article-body">
                <p>
                  Agent is used for streaming data into BangDB. It runs as a
                  service on the server from where data is supposed to be
                  streamed. Data could be streamed in continuous basis or in
                  batch manner. The agent can also parse and structure data
                  before sending to BangDB if configured. It can parse csv,
                  key-val data and structure them into json or it can also use
                  regex if supplied to structure the data.
                </p>
                <p>
                  Further, it also uses inbuilt default logic to parse and
                  structure known data entities. And finally, we can also use IE
                  (information extraction) to do NER (name entity recognition)
                  to structure the data in probabilistic manner. However, the
                  goal is to send data to BangDB structured or otherwise.
                </p>
                <p>
                  Agent could read data from a log file in continuous manner. Or
                  it can read from other services using API or otherwise. It can
                  also read using protocol like SMTP etc. Idea is to
                  continuously keep reading data, in an eventing manner.
                </p>
                <p>
                  Agent can be queried or instructed remotely using cli.
                  Following are the basic things that can be done by the agent.
                </p>
                <HighlightedOutput
                  code={`agent related commands
register collector /home/sachin/collector.conf where server = IP:PORT
activate agent collector_name where server = IP:PORT
pause agent collector_name where server = IP:PORT
describe agent all where server = IP:PORT
describe agent collector_name where server = IP:PORT
stats agent all where server = IP:PORT
stats agent collector_name where server = IP:PORT`}
                />
                <p>
                  Register a new collector with the agent on a remote server (
                  Let&apos;s say that agent is running on a server and we wish
                  to instruct it to start collecting data from new file or
                  source with a given configuration. We can do this by calling
                  <code>register</code> command).
                </p>
                <HighlightedCpp
                  code={`register collector /home/sachin/collector.conf where server = 192.168.1.25:10102`}
                />
                <p>Activate the collection from agent for given collector</p>
                <HighlightedCpp
                  code={`activate agent collector_name where server = 192.168.1.25:10102`}
                />
                <p>Pause the collection from agent for given collector</p>
                <HighlightedCpp
                  code={`pause agent collector_name where server = 192.168.1.25:10102`}
                />
                <p>
                  To see the details of any agent, including what all collectors
                  are registered, activated, paused etc.
                </p>
                <HighlightedCpp
                  code={`describe agent all where server = 192.168.1.25:10102`}
                />
                <p>To describe just a given collector</p>
                <HighlightedCpp
                  code={`describe agent collector_name where server = 192.168.1.25:10102`}
                />
                <p>To see the stats of the data collection so far</p>
                <HighlightedCpp
                  code={`stats agent all where server = 192.168.1.25:10102`}
                />
                <p>
                  To see the stats of the data collection for a given collector
                  so far
                </p>
                <HighlightedCpp
                  code={`stats agent collector_name where server = 192.168.1.25:10102`}
                />
              </div>
            </article>
          </div>
        </main>
      </section>
    </React.Fragment>
  );
}
