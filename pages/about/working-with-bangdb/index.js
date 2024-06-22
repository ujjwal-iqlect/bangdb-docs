import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "../../../components/Breadcrumb";

export default function WorkingWithBangDB() {
  return (
    <React.Fragment>
      <Head>
        <title>Working with BangDB</title>
        <meta name="description" content="Working with BangDB"></meta>
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Working with BangDB" />
        <meta property="og:description" content="Working with BangDB" />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="Working with BangDB" />
        <meta name="twitter:description" content="Working with BangDB" />
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
              <h1 className="article-title">Working with BangDB</h1>
              <div className="article-body">
                <h2>BangDB as HTTP and TCP server</h2>

                <div className="flex items-center justify-center">
                  <Image
                    alt="BangDB as HTTP and TCP server - BangDB"
                    width={200}
                    height={470}
                    src="/assets/about/27.png"
                  />
                </div>

                <p>
                  BangDB works as both TCP and HTTP server. Which means same
                  BangDB process can take TCP calls on one port (10101) and
                  HTTP(S) calls on other (18080) at the same time. This is quite
                  powerful as there is no other server in between the client and
                  DB, like in other cases, hence data copy is less, data network
                  hops are less, system bloating is much less, performance is
                  high, deployment is much simpler, and scaling is natural.
                </p>

                <h2>BangDB for developer & enterprise</h2>

                <div className="table-container">
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <p>Language</p>
                          <ul>
                            <li>Written in C, C++</li>
                            <li>Clients in C/C++, Java, C#*, Python*</li>
                            <li>CLI in C/C++, on Linux and windows</li>
                          </ul>
                        </td>
                        <td>
                          <p>Version - 2.0</p>
                          <ul>
                            <li>REST API [ openAPI ]</li>
                            <li>BSD for Embedded and Server</li>
                            <li>Custom for Platform</li>
                            <li>SaaS with Ampere</li>
                            <li>Apps on AppStore</li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>Platform</p>
                          <ul>
                            <li>Servers - Linux, Windows*</li>
                            <li>Devices - Raspberry pi</li>
                          </ul>
                        </td>
                        <td>
                          <p>Secure</p>
                          <ul>
                            <li>SSL/TLS - secure channel</li>
                            <li>Data encryption - Binary format</li>
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h2>Native clients</h2>

                <p>
                  Native clients are the highest performance means to work with
                  BangDB. It sends and receives data over TCP with BangDB
                  message header and body protocol where the overhead is minimal
                  as compared with even some of the other methods in the market.
                  The connect pool is managed by the clients, with several
                  configurable parameters for simplifying the process and
                  enhancing the performance. The native clients ensure same
                  interface across different libraries and ways, which makes the
                  user&apos;s code portable.
                </p>

                <p>
                  BangDB server manages the concurrent tens of thousands of TCP
                  connections, therefore, these clients don&apos;t have to worry or
                  manage these things. The network error handling or retrying
                  etc. are all built into these clients. The clients are
                  available in C, C++, Java, C# as of now and we will be adding
                  python in coming months.
                </p>

                <h2>CLI</h2>

                <p>
                  Command line interface is another tool for connecting with the
                  databases. In fact, CLI supports all the functionalities in
                  the BangDB. Which means we can do possibly everything we can
                  do with native clients or Ampere. CLI also offers workflows
                  for certain activities where user inputs in a logical
                  sequential manner would be appreciated, like UI. The CLI also
                  can draw charts within the terminal, which is quite cool
                  feature.
                </p>

                <h2>REST API</h2>

                <p>
                  All actions and features are also supported by the REST API.
                  Since BangDB works as the TCP and REST server at the same
                  time, on two different ports for the same server process,
                  therefore, it&apos;s quite efficient to use REST API and TCP based
                  calls from different clients or interfaces as required. The
                  REST API detail docs on Swagger and Postman is documented here
                  and there is a separate doc on REST API details for reference.
                </p>

                <h2>Ampere</h2>

                <p>
                  Ampere is UI based no-code platform for the BangDB. This is
                  the simplest and most powerful interface for non-tech users to
                  deal with BangDB. Ampere is SaaS platform on cloud built on
                  top of BangDB. More information on Ampere is detailed out
                  here.
                </p>

                <h2>License</h2>

                <p>BangDB community download - BSD III license</p>
                <p>BangDB SaaS - Community, Basic and Enterprise</p>
                <p>BangDB Platform - Enterprise</p>
                <p>Apps - Basic</p>
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
