import React, { useState, forwardRef } from "react";
import Head from "next/head";
import Link from "next/link";
import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import Image from "next/image";
import styled from "styled-components";
import CopyToClipboard from "react-copy-to-clipboard";
import Codebox from "../../components/Codebox";
import DocArticle from "../../components/DocArticle";
import CodeboxOutput from "../../components/CodeboxOutput";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function ServerInstall() {
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
        <title>Install and run BangDB Server</title>
        <meta
          name="description"
          content="Proper step by step guide to install and run bangdb server. You will find README here, which has the steps to install and run the server..."
        ></meta>
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Install and run BangDB Server" />
        <meta
          property="og:description"
          content="Proper step by step guide to install and run bangdb server. You will find README here, which has the steps to install and run the server..."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="Install and run BangDB Server" />
        <meta
          name="twitter:description"
          content="Proper step by step guide to install and run bangdb server. You will find README here, which has the steps to install and run the server..."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>
      <DocArticle>
        <h1 className="article-title">Install and run BangDB server</h1>
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
              <Link target="_blank" href="https://bangdb.com/download/">
                download page
              </Link>
            </li>
            <li>
              Clone the BangDB public{" "}
              <Link
                className="external"
                target="_blank"
                href="https://github.com/sachin-sinha/BangDB"
              >
                Github repo
              </Link>
            </li>
            <li>
              Simply use <strong>wget</strong>.
              <Codebox code={wgetOSCode} copy={wgetOSCode} />
            </li>
            <li>
              Or, use the <Link href={"/docker-images"}>Docker Image</Link>
            </li>
          </ol>
          <h4>Option A, B & C</h4>
          <p>
            Eventually all these three options gives you a tar file and we can
            install using it.
            <br />
            Following are the names of the binary, you may directly download
            using <strong>wget</strong>
          </p>
          <h4>Ubuntu 16</h4>
          <Codebox
            code="wget https://bangdb.com/downloads/bangdb_2.0_ubuntu16.tar.gz"
            copy="wget https://bangdb.com/downloads/bangdb_2.0_ubuntu16.tar.gz"
          />
          <h4>Ubuntu 18</h4>
          <Codebox
            code="wget https://bangdb.com/downloads/bangdb_2.0_ubuntu18.tar.gz"
            copy="wget https://bangdb.com/downloads/bangdb_2.0_ubuntu18.tar.gz"
          />
          <h4>Ubuntu 20</h4>
          <Codebox
            code="wget https://bangdb.com/downloads/bangdb_2.0_ubuntu20.tar.gz"
            copy="wget https://bangdb.com/downloads/bangdb_2.0_ubuntu20.tar.gz"
          />
          <h4>CentOS 7</h4>
          <Codebox
            code="wget https://bangdb.com/downloads/bangdb_2.0_centos7.tar.gz"
            copy="wget https://bangdb.com/downloads/bangdb_2.0_centos7.tar.gz"
          />
          <h4>CentOS 8</h4>
          <Codebox
            code="wget https://bangdb.com/downloads/bangdb_2.0_centos8.tar.gz"
            copy="wget https://bangdb.com/downloads/bangdb_2.0_centos8.tar.gz"
          />
          <h4>RHEL 8</h4>
          <Codebox
            code="wget https://bangdb.com/downloads/bangdb_2.0_rhel8.tar.gz"
            copy="wget wget https://bangdb.com/downloads/bangdb_2.0_rhel8.tar.gz"
          />
          <p>
            The downloaded tar file will be like this (for Ubuntu 18
            bangdb_2.0_ubuntu18.tar.gz)
            <br /> Untar this file
          </p>
          <Codebox
            code="tar -xzvf bangdb_2.0_ubuntu18.tar.gz"
            copy="tar -xzvf bangdb_2.0_ubuntu18.tar.gz"
          />
          <h3>Step 2</h3>
          <Codebox
            code="cd bangdb_2.0_ubuntu18"
            copy="cd bangdb_2.0_ubuntu18"
          />
          <p>
            You will find README here, which has the steps to install and run
            the BangDB server, must follow the steps provided in the README.
          </p>
          <p>
            Run the install.sh file (May run for few min and finally everything
            should be set up)
          </p>
          <Codebox code="bash install.sh" copy="bash install.sh" />
          <h3>Step 3</h3>
          <p>
            Run the server There are two ways to run the server, using the
            server binary directly OR using the helper script
          </p>
          <p>Let&apos;s use helper script</p>
          <Codebox code="./bangdb-server start" copy="./bangdb-server start" />
          <p>
            This will run the server in background You may check the status of
            BangDB server using
          </p>
          <Codebox
            code="./bangdb-server status"
            copy="./bangdb-server status"
          />
          <CodeboxOutput code="Status 'bangdb-server-2.0' : Running" />
          <p>And you may stop the server by</p>
          <Codebox code="./bangdb-server stop" copy="./bangdb-server stop" />
          <p>That&apos;s it.</p>
          <p>
            You can also directly run bangdb-server using the binary, it will
            allow you to provide command line argument as well. This allows user
            to have more control on how server may run by using command line
            arguments.
          </p>
          <p>
            However, all of these arguments could be configured by editing the
            bangdb.config file and use above mentioned helper script. Hence if
            you use script then these should be set in bangdb.config. See{" "}
            <Link href={"/bangdb-config"}>bangdb.config</Link> for more details.
          </p>
          <p>
            It is super important to learn this if you wish to have more control
            on how server is run To run the server using this option, you need
            to go to bin folder and run the server that&apos;s it.
          </p>
          <Codebox code="cd bin" copy="cd bin" />
          <Codebox code="./bangdb-server-2.0" copy="./bangdb-server-2.0" />
          <p>use {"-help"} command line arg to see all the options</p>
          <Codebox
            code="./bangdb-server-2.0 -help"
            copy="./bangdb-server-2.0 -help"
          />
          <p>
            There are few parameters that should be set and please see
            <Link href={"/bangdb-config"}> bangdb config page</Link> to learn
            more.
          </p>
          <p>
            This is default mode of running the server and kindly see
            <Link href={"/bangdb-config"}> bangdb config page</Link> to learn
            various configurations and also running servers with added features.
            Next you should run cli and the test benchmark and check all is
            fine. Use the cli
          </p>
          <Codebox code="cd cli" copy="cd cli" />
          <Codebox code="./bangdb-cli-2.0" copy="./bangdb-cli-2.0" />
          <p>To see the tables</p>
          <Codebox code="show tables" copy="show tables" />
          <p>To see BangDB servertype</p>
          <Codebox code="show servertype" copy="show servertype" />
          <p>To see BangDB help</p>
          <Codebox code="help" copy="help" />
          <p>To see help for BangDB Stream</p>
          <div className="doc-code">
            <div className="doc-code-buttons-container">
              <CopyToClipboard text={"help stream"}>
                <button className="copy-button" onClick={handleClick}></button>
              </CopyToClipboard>
            </div>
            <pre className="doc-terminal">
              help stream <br />
              <span
                style={{
                  color: "#b80672",
                }}
              >
                {String.raw`//so on...`}
              </span>
            </pre>
          </div>
          <p>
            BangDB cli is quite comprehensive and supports all activities that
            we can perform on BangDB, from DDL to DML to some admin tasks. See
            the bangdb <Link href={"/cli-overview"}>cli page</Link> for lot more
            details.
          </p>
          <p>
            Run test benchmark and test. Run bench to see all is good and also
            typical throughput for the server. Please note this gives bare
            minimum throughput data as single client runs, to check actual IOPS,
            pls see <Link href={"/benchmark"}>benchmark </Link>
            Make sure server is running or{" "}
          </p>
          <p>Run the server</p>
          <Codebox code="./bangdb-server start" copy="./bangdb-server start" />
          <p>Go to bench folder, let&apos;s go to cpp folder for now</p>
          <Codebox code="cd bench/server_cpp" copy="cd bench/server_cpp" />
          <p>Build the test</p>
          <Codebox code="bash build.sh" copy="bash build.sh" />
          <p>This will build a bench file, now run the bench</p>
          <Codebox code="./bench" copy="./bench" />
          <p>
            It will run simple put, get and scan and it&apos;s throughput Now
            run the java test, from main folder
          </p>
          <Codebox code="cd bench/server_java" copy="cd bench/server_java" />
          <p>Compile</p>
          <Codebox code="bash make-app.sh" copy="bash make-app.sh" />
          <p>Run</p>

          <div className="doc-code">
            <div className="doc-code-buttons-container">
              <CopyToClipboard text={"bash exapp.sh"}>
                <button className="copy-button" onClick={handleClick}></button>
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
                {String.raw`//so on...`}
              </span>
            </pre>
          </div>
          <p>
            To do proper benchmark, we need to set up the config properly and
            also use a server which has minimum of 8GB RAM and 4 Cores. YCSB
            benchmark can also be set up and run. This would allow user to
            compare the number vis-a-vis other dbs.
          </p>
          <p>
            You may use bangdb clients to write powerful application to enable
            some of the use cases. BangDB clients allows you to write highly
            efficient, high performance and scalable apps due to its own
            messaging framework, servers architecture and ability to handle high
            volume with speed at ease from tens of thousands of connections.
          </p>
        </div>
      </DocArticle>
    </React.Fragment>
  );
}
