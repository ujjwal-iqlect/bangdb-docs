import React, { useState, forwardRef } from "react";
import Head from "next/head";
import Link from "next/link";
import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import Image from "next/image";
import styled from "styled-components";
import CopyToClipboard from "react-copy-to-clipboard";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function serverInstall() {
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(true);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const wgetOSCode = String.raw`wget https://bangdb.com/downloads/bangdb_2.0_<"os_name_version">.tar.gz`;

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
              <DocTitle>Install and run BangDB server</DocTitle>
              <div className="article-body">
                <Image
                  src={
                    "https://bangdb.com/wp-content/uploads/2020/08/BangDB-Logo.png"
                  }
                  style={{
                    marginBottom: "-100px",
                  }}
                  alt="Install and run BangDB server 2.0"
                  width={740}
                  height={404}
                />
                <h2>Install</h2>
                <h3>Step 1</h3>
                <p>You may get the BangDB using of one of these four ways:</p>
                <ol
                  style={{
                    listStyle: "lower-alpha",
                  }}
                >
                  <li>
                    Pick and take the tar file from the{" "}
                    <Link href={"https://bangdb.com/download/"}>
                      download page
                    </Link>
                  </li>
                  <li>
                    Clone the BangDB public{" "}
                    <Link
                      className="external"
                      href={"https://github.com/sachin-sinha/BangDB"}
                    >
                      Github repo
                    </Link>
                  </li>
                  <li>
                    Simply use <strong>wget</strong>.
                    <div className="doc-code">
                      <div className="doc-code-buttons-container">
                        <CopyToClipboard text={wgetOSCode}>
                          <button
                            className="copy-button"
                            onClick={handleClick}
                          ></button>
                        </CopyToClipboard>
                      </div>
                      <pre className="doc-terminal">{wgetOSCode}</pre>
                      <Snackbar
                        open={open}
                        autoHideDuration={6000}
                        onClose={handleClose}
                      >
                        <Alert
                          onClose={handleClose}
                          severity="success"
                          sx={{ width: "100%" }}
                        >
                          Copied to clipboard!
                        </Alert>
                      </Snackbar>
                    </div>
                  </li>
                  <li>
                    Or, use the{" "}
                    <Link href={"/docker-images"}>Docker Image</Link>
                  </li>
                </ol>
                <h4>Option A, B & C</h4>
                <p>
                  Eventually all these three options gives you a tar file and we
                  can install using it.
                  <br />
                  Following are the names of the binary, you may directly
                  download using <strong>wget</strong>
                </p>
                <h4>Ubuntu 16</h4>
                <div className="doc-code">
                  <div className="doc-code-buttons-container">
                    <CopyToClipboard
                      text={
                        "wget https://bangdb.com/downloads/bangdb_2.0_ubuntu16.tar.gz"
                      }
                    >
                      <button
                        className="copy-button"
                        onClick={handleClick}
                      ></button>
                    </CopyToClipboard>
                  </div>
                  <pre className="doc-terminal">
                    wget https://bangdb.com/downloads/bangdb_2.0_ubuntu16.tar.gz
                  </pre>
                </div>
                <h4>Ubuntu 18</h4>
                <div className="doc-code">
                  <div className="doc-code-buttons-container">
                    <CopyToClipboard
                      text={
                        "wget https://bangdb.com/downloads/bangdb_2.0_ubuntu18.tar.gz"
                      }
                    >
                      <button
                        className="copy-button"
                        onClick={handleClick}
                      ></button>
                    </CopyToClipboard>
                  </div>
                  <pre className="doc-terminal">
                    wget https://bangdb.com/downloads/bangdb_2.0_ubuntu18.tar.gz
                  </pre>
                </div>
                <h4>Ubuntu 20</h4>
                <div className="doc-code">
                  <div className="doc-code-buttons-container">
                    <CopyToClipboard
                      text={
                        "wget https://bangdb.com/downloads/bangdb_2.0_ubuntu20.tar.gz"
                      }
                    >
                      <button
                        className="copy-button"
                        onClick={handleClick}
                      ></button>
                    </CopyToClipboard>
                  </div>
                  <pre className="doc-terminal">
                    wget https://bangdb.com/downloads/bangdb_2.0_ubuntu20.tar.gz
                  </pre>
                </div>
                <h4>CentOS 7</h4>
                <div className="doc-code">
                  <div className="doc-code-buttons-container">
                    <CopyToClipboard
                      text={
                        "wget https://bangdb.com/downloads/bangdb_2.0_centos7.tar.gz"
                      }
                    >
                      <button
                        className="copy-button"
                        onClick={handleClick}
                      ></button>
                    </CopyToClipboard>
                  </div>
                  <pre className="doc-terminal">
                    wget https://bangdb.com/downloads/bangdb_2.0_centos7.tar.gz
                  </pre>
                </div>
                <h4>CentOS 8</h4>
                <div className="doc-code">
                  <div className="doc-code-buttons-container">
                    <CopyToClipboard
                      text={
                        "wget https://bangdb.com/downloads/bangdb_2.0_centos8.tar.gz"
                      }
                    >
                      <button
                        className="copy-button"
                        onClick={handleClick}
                      ></button>
                    </CopyToClipboard>
                  </div>
                  <pre className="doc-terminal">
                    wget https://bangdb.com/downloads/bangdb_2.0_centos8.tar.gz
                  </pre>
                </div>
                <h4>RHEL 8</h4>
                <div className="doc-code">
                  <div className="doc-code-buttons-container">
                    <CopyToClipboard
                      text={
                        "wget wget https://bangdb.com/downloads/bangdb_2.0_rhel8.tar.gz"
                      }
                    >
                      <button
                        className="copy-button"
                        onClick={handleClick}
                      ></button>
                    </CopyToClipboard>
                  </div>
                  <pre className="doc-terminal">
                    wget https://bangdb.com/downloads/bangdb_2.0_rhel8.tar.gz
                  </pre>
                </div>
                <p>
                  The downloaded tar file will be like this (for Ubuntu 18
                  bangdb_2.0_ubuntu18.tar.gz)
                  <br /> Untar this file
                </p>
                <div className="doc-code">
                  <div className="doc-code-buttons-container">
                    <CopyToClipboard
                      text={"tar -xzvf bangdb_2.0_ubuntu18.tar.gz "}
                    >
                      <button
                        className="copy-button"
                        onClick={handleClick}
                      ></button>
                    </CopyToClipboard>
                  </div>
                  <pre className="doc-terminal">
                    tar -xzvf bangdb_2.0_ubuntu18.tar.gz
                  </pre>
                </div>
                <h3>Step 2</h3>
                <div className="doc-code">
                  <div className="doc-code-buttons-container">
                    <CopyToClipboard text={"cd bangdb_2.0_ubuntu18"}>
                      <button
                        className="copy-button"
                        onClick={handleClick}
                      ></button>
                    </CopyToClipboard>
                  </div>
                  <pre className="doc-terminal">cd bangdb_2.0_ubuntu18</pre>
                </div>
                <p>
                  You will find README here, which has the steps to install and
                  run the BangDB server, must follow the steps provided in the
                  README.
                </p>
                <p>
                  Run the install.sh file (May run for few min and finally
                  everything should be set up)
                </p>
                <div className="doc-code">
                  <div className="doc-code-buttons-container">
                    <CopyToClipboard text={"bash install.sh"}>
                      <button
                        className="copy-button"
                        onClick={handleClick}
                      ></button>
                    </CopyToClipboard>
                  </div>
                  <pre className="doc-terminal">bash install.sh</pre>
                </div>

                <h3>Step 3</h3>
                <p>
                  Run the server There are two ways to run the server, using the
                  server binary directly OR using the helper script
                </p>
                <p>Let's use helper script</p>
                <div className="doc-code">
                  <div className="doc-code-buttons-container">
                    <CopyToClipboard text={"./bangdb-server start"}>
                      <button
                        className="copy-button"
                        onClick={handleClick}
                      ></button>
                    </CopyToClipboard>
                  </div>
                  <pre className="doc-terminal">./bangdb-server start</pre>
                </div>

                <p>
                  This will run the server in background You may check the
                  status of BangDB server using
                </p>

                <div className="doc-code">
                  <div className="doc-code-buttons-container">
                    <CopyToClipboard text={"./bangdb-server status"}>
                      <button
                        className="copy-button"
                        onClick={handleClick}
                      ></button>
                    </CopyToClipboard>
                  </div>
                  <pre className="doc-terminal">./bangdb-server status</pre>
                </div>

                <div className="doc-code">
                  <pre className="doc-terminal-output">
                    Status 'bangdb-server-2.0' : Running
                  </pre>
                </div>
                <p>And you may stop the server by</p>
                <div className="doc-code">
                  <div className="doc-code-buttons-container">
                    <CopyToClipboard text={"./bangdb-server stop"}>
                      <button
                        className="copy-button"
                        onClick={handleClick}
                      ></button>
                    </CopyToClipboard>
                  </div>
                  <pre className="doc-terminal">./bangdb-server stop</pre>
                </div>
                <p>That's it.</p>
                <p>
                  You can also directly run bangdb-server using the binary, it
                  will allow you to provide command line argument as well. This
                  allows user to have more control on how server may run by
                  using command line arguments.
                </p>
                <p>
                  However, all of these arguments could be configured by editing
                  the bangdb.config file and use above mentioned helper script.
                  Hence if you use script then these should be set in
                  bangdb.config. See{" "}
                  <Link href={"/bangdb-config"}>bangdb.config</Link> for more
                  details.
                </p>
                <p>
                  It is super important to learn this if you wish to have more
                  control on how server is run To run the server using this
                  option, you need to go to bin folder and run the server that's
                  it.
                </p>
                <div className="doc-code">
                  <div className="doc-code-buttons-container">
                    <CopyToClipboard text={"cd bin"}>
                      <button
                        className="copy-button"
                        onClick={handleClick}
                      ></button>
                    </CopyToClipboard>
                  </div>
                  <pre className="doc-terminal">cd bin</pre>
                </div>
                <div className="doc-code">
                  <div className="doc-code-buttons-container">
                    <CopyToClipboard text={"./bangdb-server-2.0"}>
                      <button
                        className="copy-button"
                        onClick={handleClick}
                      ></button>
                    </CopyToClipboard>
                  </div>
                  <pre className="doc-terminal">./bangdb-server-2.0</pre>
                </div>
                <p>use {"-help"} command line arg to see all the options</p>
                <div className="doc-code">
                  <div className="doc-code-buttons-container">
                    <CopyToClipboard text={"./bangdb-server-2.0 -help"}>
                      <button
                        className="copy-button"
                        onClick={handleClick}
                      ></button>
                    </CopyToClipboard>
                  </div>
                  <pre className="doc-terminal">./bangdb-server-2.0 -help</pre>
                </div>
                <p>
                  There are few parameters that should be set and please see
                  <Link href={"/bangdb-config"}> bangdb config page</Link> to
                  learn more.
                </p>
                <p>
                  This is default mode of running the server and kindly see
                  <Link href={"/bangdb-config"}> bangdb config page</Link> to
                  learn various configurations and also running servers with
                  added features. Next you should run cli and the test benchmark
                  and check all is fine. Use the cli
                </p>

                <div className="doc-code">
                  <div className="doc-code-buttons-container">
                    <CopyToClipboard text={"cd cli"}>
                      <button
                        className="copy-button"
                        onClick={handleClick}
                      ></button>
                    </CopyToClipboard>
                  </div>
                  <pre className="doc-terminal">cd cli</pre>
                </div>

                <div className="doc-code">
                  <div className="doc-code-buttons-container">
                    <CopyToClipboard text={"./bangdb-cli-2.0"}>
                      <button
                        className="copy-button"
                        onClick={handleClick}
                      ></button>
                    </CopyToClipboard>
                  </div>
                  <pre className="doc-terminal">./bangdb-cli-2.0</pre>
                </div>
                <p>To see the tables</p>
                <div className="doc-code">
                  <div className="doc-code-buttons-container">
                    <CopyToClipboard text={"show tables"}>
                      <button
                        className="copy-button"
                        onClick={handleClick}
                      ></button>
                    </CopyToClipboard>
                  </div>
                  <pre className="doc-terminal">show tables</pre>
                </div>
                <p>To see BangDB servertype</p>
                <div className="doc-code">
                  <div className="doc-code-buttons-container">
                    <CopyToClipboard text={"show servertype"}>
                      <button
                        className="copy-button"
                        onClick={handleClick}
                      ></button>
                    </CopyToClipboard>
                  </div>
                  <pre className="doc-terminal">show servertype</pre>
                </div>
                <p>To see BangDB help</p>
                <div className="doc-code">
                  <div className="doc-code-buttons-container">
                    <CopyToClipboard text={"help"}>
                      <button
                        className="copy-button"
                        onClick={handleClick}
                      ></button>
                    </CopyToClipboard>
                  </div>
                  <pre className="doc-terminal">help</pre>
                </div>
                <p>To see help for BangDB Stream</p>
                <div className="doc-code">
                  <div className="doc-code-buttons-container">
                    <CopyToClipboard text={"help stream"}>
                      <button
                        className="copy-button"
                        onClick={handleClick}
                      ></button>
                    </CopyToClipboard>
                  </div>
                  <pre className="doc-terminal">
                    help stream <br />
                    <span
                      style={{
                        color: "#b80672",
                      }}
                    >
                      //so on...
                    </span>
                  </pre>
                </div>

                <p>
                  BangDB cli is quite comprehensive and supports all activities
                  that we can perform on BangDB, from DDL to DML to some admin
                  tasks. See the bangdb{" "}
                  <Link href={"/cli-overview"}>cli page</Link> for lot more
                  details.
                </p>
                <p>
                  Run test benchmark and test. Run bench to see all is good and
                  also typical throughput for the server. Please note this gives
                  bare minimum throughput data as single client runs, to check
                  actual IOPS, pls see{" "}
                  <Link href={"/benchmark"}>benchmark </Link>
                  Make sure server is running or{" "}
                </p>
                <p>Run the server</p>
                <div className="doc-code">
                  <div className="doc-code-buttons-container">
                    <CopyToClipboard text={"./bangdb-server start"}>
                      <button
                        className="copy-button"
                        onClick={handleClick}
                      ></button>
                    </CopyToClipboard>
                  </div>
                  <pre className="doc-terminal">./bangdb-server start</pre>
                </div>
                <p>Go to bench folder, let's go to cpp folder for now</p>
                <div className="doc-code">
                  <div className="doc-code-buttons-container">
                    <CopyToClipboard text={"cd bench/server_cpp"}>
                      <button
                        className="copy-button"
                        onClick={handleClick}
                      ></button>
                    </CopyToClipboard>
                  </div>
                  <pre className="doc-terminal">cd bench/server_cpp</pre>
                </div>
                <p>Build the test</p>
                <div className="doc-code">
                  <div className="doc-code-buttons-container">
                    <CopyToClipboard text={"bash build.sh"}>
                      <button
                        className="copy-button"
                        onClick={handleClick}
                      ></button>
                    </CopyToClipboard>
                  </div>
                  <pre className="doc-terminal">bash build.sh</pre>
                </div>
                <p>This will build a bench file, now run the bench</p>
                <div className="doc-code">
                  <div className="doc-code-buttons-container">
                    <CopyToClipboard text={"./bench"}>
                      <button
                        className="copy-button"
                        onClick={handleClick}
                      ></button>
                    </CopyToClipboard>
                  </div>
                  <pre className="doc-terminal">./bench</pre>
                </div>
                <p>
                  It will run simple put, get and scan and it's throughput Now
                  run the java test, from main folder
                </p>
                <div className="doc-code">
                  <div className="doc-code-buttons-container">
                    <CopyToClipboard text={"cd bench/server_java"}>
                      <button
                        className="copy-button"
                        onClick={handleClick}
                      ></button>
                    </CopyToClipboard>
                  </div>
                  <pre className="doc-terminal">cd bench/server_java</pre>
                </div>
                <p>Compile</p>
                <div className="doc-code">
                  <div className="doc-code-buttons-container">
                    <CopyToClipboard text={"bash make-app.sh"}>
                      <button
                        className="copy-button"
                        onClick={handleClick}
                      ></button>
                    </CopyToClipboard>
                  </div>
                  <pre className="doc-terminal">bash make-app.sh</pre>
                </div>
                <p>Run</p>
                <div className="doc-code">
                  <div className="doc-code-buttons-container">
                    <CopyToClipboard text={"bash exapp.sh"}>
                      <button
                        className="copy-button"
                        onClick={handleClick}
                      ></button>
                    </CopyToClipboard>
                  </div>
                  <pre className="doc-terminal">
                    bash exapp.sh
                    <br />
                    <span
                      style={{
                        color: "#b80672",
                      }}
                    >
                      //so on...
                    </span>
                  </pre>
                </div>
                <p>
                  To do proper benchmark, we need to set up the config properly
                  and also use a server which has minimum of 8GB RAM and 4
                  Cores. YCSB benchmark can also be set up and run. This would
                  allow user to compare the number vis-a-vis other dbs.
                </p>
                <p>
                  You may use bangdb clients to write powerful application to
                  enable some of the use cases. BangDB clients allows you to
                  write highly efficient, high performance and scalable apps due
                  to its own messaging framework, servers architecture and
                  ability to handle high volume with speed at ease from tens of
                  thousands of connections.
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
