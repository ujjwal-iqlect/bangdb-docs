import React from "react";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

export default function ServerGettingStarted() {
  const binariesCode = String.raw`bangdb_2.0_centos7.tar.gz

bangdb_2.0_centos8.tar.gz

bangdb_2.0_rhel8.tar.gz

bangdb_2.0_ubuntu16.tar.gz

bangdb_2.0_ubuntu18.tar.gz

bangdb_2.0_ubuntu20.tar.gz
`;

  const dirStructureCode = String.raw`agent          [ folder which contains agent to help stream data into the db ]
bangdb-server  [ script file to start | stop | status the server ]
bangdb_udf     [ folder that contains headers to write UDF that can be deployed at run time ]
bench          [ bench folder to run simple benchmark for BangDB ]
bin            [ folder that contains the bangdb-server-2.0 and bangdb.config file ]
cli            [ folder that contains bangdb-cli-2.0, a command line tool for the server ]
helpers        [ some of the helper files for the BangDB, esp related to IE/ML ]
install.sh     [ during install, this script should be run to set up various libs and links ]
jars           [ various jar files needed at runtime, esp for IE ]
lib            [ dlib and mitie libs needed by the server, for IE ]
README         [ some basic info and instructions ]
`;

  return (
    <React.Fragment>
      <Head>
        <title>BangDB Server - Documentation</title>
        <meta
          name="description"
          content="Get started with BangDB Server - Get the BangDB2.0 from github or download page If you take from GitHub then it downloads all the packages."
        ></meta>
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="BangDB Server - Documentation" />
        <meta
          property="og:description"
          content="Get started with BangDB Server - Get the BangDB2.0 from github or download page If you take from GitHub then it downloads all the packages."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="BangDB Server - Documentation" />
        <meta
          name="twitter:description"
          content="Get started with BangDB Server - Get the BangDB2.0 from github or download page If you take from GitHub then it downloads all the packages."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <MainWrapper>
        <Main>
          <DocContent>
            <DocArticle>
              <DocBreadCrumb>
                <DocBreadCrumbList>
                  <DocBreadCrumbItem>
                    <DocBreadCrumbLink
                      href={"https://bangdb.com/"}
                      target={"_blank"}
                    >
                      BangDB
                    </DocBreadCrumbLink>
                  </DocBreadCrumbItem>
                  <DocBreadCrumbItem>
                    <div style={{ margin: "0 4px" }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="18px"
                        viewBox="0 0 24 24"
                        width="18px"
                        fill="#5f6368"
                      >
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
                      </svg>
                    </div>
                    <DocBreadCrumbLink href={"/"}>Docs</DocBreadCrumbLink>
                  </DocBreadCrumbItem>
                  <DocBreadCrumbItem>
                    <div style={{ margin: "0 4px" }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="18px"
                        viewBox="0 0 24 24"
                        width="18px"
                        fill="#5f6368"
                      >
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
                      </svg>
                    </div>
                    <DocBreadCrumbLink href={"/server-getting-started"}>
                      Getting Started
                    </DocBreadCrumbLink>
                  </DocBreadCrumbItem>
                </DocBreadCrumbList>
              </DocBreadCrumb>
              <DocTitle>Server</DocTitle>
              <div className="article-body">
                <h2>Get Started with BangDB Server</h2>
                <p>BangDB 2.0 Server is available for following:</p>
                <ol>
                  <li>
                    <strong>Arch</strong> - x86_64
                  </li>
                  <li>
                    <strong>OS</strong> - Ubuntu16, Ubuntu18, Ubuntu20, Centos7,
                    Centos8, Rhel8
                  </li>
                  <li>
                    <strong>Language</strong> - 3.1 Server : C++ 3.2 Client :
                    C++, Java, Python [ upcoming ]
                  </li>
                  <li>
                    <strong>License</strong> - 4.1 Community : BSD 3 4.2
                    Enterprise : Custom
                  </li>
                </ol>
                <p>
                  Get the BangDB2.0 from{" "}
                  <Link
                    className="external"
                    href={"https://github.com/sachin-sinha/BangDB"}
                    target={"_blank"}
                  >
                    Github Repository
                  </Link>{" "}
                  or BangDB{" "}
                  <Link href={"https://bangdb.com/download"} target={"_blank"}>
                    download page
                  </Link>{" "}
                  If you take from GitHub then it downloads all the packages and
                  files which my not be necessary for you, hence it’s preferable
                  to download it from the website if you just want specific
                  binary. Go to download page and select Network, client server
                  model tab. Then pick the appropriate binary based on your OS
                  (ubuntu16, ubuntu18 or Centos7) Name of these server
                  packages/binaries are:
                </p>

                <div className="doc-code">
                  <pre className="doc-terminal-output">{binariesCode}</pre>
                </div>
                <p>
                  If you extract these files, you will following dir structure
                </p>
                <div className="doc-code">
                  <pre className="doc-terminal-output">{dirStructureCode}</pre>
                </div>
                <p>Let’s see some of the important things here.</p>
                <h3>install.sh</h3>
                <p>
                  User should run this to get necessary libraries on the server
                  and also to set the links to the libraries present in the lib
                  folder. User should run this file without sudo but as and when
                  sudo access is needed, it will ask for the same
                </p>
                <h3>bangdb-server</h3>
                <p>
                  This is the script file for running BangDB server. This allows
                  user to start | status | stop the server. It runs the server
                  in the background. bangdb-server script runs the BangDB in the
                  background. It also doesn’t take any command line arguments.
                </p>
                <p>
                  See the command line args or the config important to run the
                  server at bangdb.config page. You may see some logs being
                  flushed to the terminal even when you run the server using
                  this script in the background. To stop this you should change
                  the config file as described in the bangdb.config page
                </p>
                <h3>bin</h3>
                <p>
                  bin folder is where the bangdb-server-2.0 binary is present.
                  BangDB needs bangdb.config to run, therefore the default
                  config is also present there.
                </p>
                <aside className="doc-note">
                  <strong>Note: </strong>
                  Default location of bangdb.config is the location of
                  bangdb-server-2.0. If you place bangdb.config somewhere else,
                  then you need to tell BangDB using DBParam type, the location
                  of the config file
                </aside>
                <h3>lib</h3>
                <p>
                  lib folder is where two libraries, namely dlib and mitie are
                  placed. These are important due to IE (Information Extraction)
                  features supported by BangDB. We can have BanGDB compiled for
                  non IE feature support as well and in that case these libs are
                  not required.
                </p>
                <h3>jars</h3>
                <p>
                  jars folder contains the gson, reverb and bangdb-reverb jar
                  files. There are also required for IE only
                </p>
                <h3>helpers</h3>
                <p>
                  This folder contains helper files for IE. It has bangdb-reverb
                  exe which is used by BangDB during Information extraction. It
                  also has wordrep exe to generate knowledge-base needed for IE.
                  Finally it contains several python files during the IE
                  processes required by the BangDB
                </p>
                <h3>cli</h3>
                <p>
                  cli is a command line tool for BangDB server. This allows
                  users to interact to BangDB for DB, Stream, AI related
                  features. It also allows server configurations, agent setting,
                  configuration and maintenance remotely. It supports SQL like
                  query for db interactions. It also allows users to draw charts
                  in the terminal itself or save the graphs/charts as images on
                  FS
                </p>
                <h3>bangdb_udf</h3>
                <p>
                  This folder contains headers for writing user defined
                  functions that could be ingested and installed/used by the
                  server at run time or otherwise.
                </p>
                <h3>bench</h3>
                <p>
                  This folder contains bench files that could be compiled and
                  run by the user. See the server bench page for more details.
                </p>
                <h3>agent</h3>
                <p>
                  This folder contains agent exe that could be used to
                  send/stream data into BangDB. Agent can monitor set of files
                  and as and when data is written to the file, it will send the
                  data to the db. While sending, user can also set the
                  configuration to parse and structure the data. The agent can
                  be used to read data from log files, connect to other end to
                  pull data and send [ ex; RDBMS, Services etc. ] and many other
                  different ways to pull data
                </p>
              </div>
            </DocArticle>
          </DocContent>
        </Main>
      </MainWrapper>
    </React.Fragment>
  );
}

const MainWrapper = styled.section`
  display: flex;
  flex: 1 0;
  flex-direction: column;
  margin-top: 156.979px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
`;

const Main = styled.main`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: minmax(269px, 1fr) minmax(752px, 936px) minmax(
      160px,
      1fr
    );
  grid-template-rows: 1fr;
  position: relative;
  width: 100%;
`;

const DocContent = styled.div`
  align-self: start;
  grid-column: 2;
  display: block;
  position: relative;
  grid-row: 1;
  margin: 24px 0;
  max-width: 936px;
  min-width: 0;
`;

const DocArticle = styled.article`
  border: 1px solid #dadce0;
  background: #fff;
  border-radius: 8px;
  padding: 40px;
`;

const DocBreadCrumb = styled.div`
  display: grid;
  grid-gap: 0 16px;
  grid-template-areas: "breadcrumbs ratings";
  margin: 0 0 36px;
  grid-template-columns: 1fr auto;
`;

const DocBreadCrumbList = styled.ul`
  display: flex;
  align-items: center;
  white-space: nowrap;
  -webkit-box-flex: 1;
  flex-wrap: wrap;
  flex: 1;
  font-size: 13px;
  font-family: "Roboto", sans-serif;
`;

const DocBreadCrumbItem = styled.li`
  display: flex;
  align-items: center;
`;

const DocBreadCrumbLink = styled(Link)`
  display: flex;
  align-items: center;
  color: #5f6368;
`;

const DocTitle = styled.h1`
  display: inline;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 40px;
  font-weight: 600;
  font-family: "Roboto", sans-serif;
  color: #000;
  letter-spacing: -0.5px;
  margin-inline-end: 83px;
  vertical-align: middle;
`;
