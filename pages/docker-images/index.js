import React, { useState, forwardRef } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import Codebox from "../../components/Codebox";

export default function DockerImages() {
  const runDockerContainerCodeNonSSL = String.raw`docker run -it --name bangdb --volume=data:/bin/data --volume=logdir:/bin/logdir -p 18080:18080 -p 10101:10101 --ulimit nofile=300000:300000 --ulimit nproc=100000:100000 --ulimit core=-1 --memory="4g" --memory-swap="4g" --cpus="4" -d bangdb/bangdb-server`;

  const runDockerContainerCodeSSL = String.raw`docker run -it --name bangdb-ssl --volume=data:/bin/data --volume=logdir:/bin/logdir -p 18080:18080 -p 10101:10101 --ulimit nofile=300000:300000 --ulimit nproc=100000:100000 --ulimit core=-1 --memory="4g" --memory-swap="4g" --cpus="4" -d bangdb-server-ssl/2.0`;

  const codeStyle = {
    punctuation: {
      color: "#37474f",
      fontFamily: "Roboto Mono",
    },
    comment: {
      color: "#b80672",
      fontFamily: "Roboto Mono",
    },
    string: {
      color: "#188038",
      fontFamily: "Roboto Mono",
    },
    number: {
      color: "#188038",
      fontFamily: "Roboto Mono",
    },
    token: {
      fontFamily: "Roboto Mono",
    },
    property: {
      color: "#188038",
      fontFamily: "Roboto Mono",
    },
  };

  return (
    <React.Fragment>
      <Head>
        <title>Docker Images - BangDB</title>
        <meta
          name="description"
          content="The docker images are available publicly for use. it's available at docker hub. There are two ways in which images are created."
        ></meta>
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Docker Images - BangDB" />
        <meta
          property="og:description"
          content="The docker images are available publicly for use. it's available at docker hub. There are two ways in which images are created."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="Docker Images - BangDB" />
        <meta
          name="twitter:description"
          content="The docker images are available publicly for use. it's available at docker hub. There are two ways in which images are created."
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
              <DocTitle>Docker Image</DocTitle>
              <div className="article-body">
                <p>
                  The docker images are available publicly for use. it's
                  available at the{" "}
                  <Link
                    className="external"
                    href={"https://hub.docker.com/r/bangdb/bangdb-server"}
                  >
                    Docker hub
                  </Link>
                  <br />
                  The docker file is available at{" "}
                  <Link
                    className="external"
                    href={"https://github.com/sachin-sinha/BangDB"}
                  >
                    Github
                  </Link>{" "}
                  as well.
                </p>
                <ul>
                  <li>
                    <Link
                      className="external"
                      href={
                        "https://github.com/sachin-sinha/bangdb_helm/tree/master/non-ssl"
                      }
                    >
                      Non-SSL BangDB Docker file
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="external"
                      href={
                        "https://github.com/sachin-sinha/bangdb_helm/tree/master/ssl"
                      }
                    >
                      SSL BangDB Docker file
                    </Link>
                  </li>
                </ul>
                <h3>Steps to run BangDB using the docker image (Non-SSL)</h3>
                <p>Pull the docker image</p>
                <Codebox
                  code="docker pull bangdb/bangdb-server"
                  copy="docker pull bangdb/bangdb-server"
                />
                <p>Run the docker image</p>
                <Codebox
                  code={runDockerContainerCodeNonSSL}
                  copy={runDockerContainerCodeNonSSL}
                />
                <p>Check the running container</p>
                <Codebox code="docker ps" copy="docker ps" />
                <p>
                  Get inside the container and run cli (command line interface)
                </p>
                <Codebox
                  code="docker exec -it <container_id> bash"
                  copy="docker exec -it <container_id> bash"
                />
                <p>Or</p>
                <Codebox
                  code="docker exec -it bangdb bash"
                  copy="docker exec -it bangdb bash"
                />
                <p>Go to cli folder</p>
                <Codebox code="cd cli" copy="cd cli" />
                <p>Run the cli</p>
                <Codebox code="./bangdb-cli-2.0" copy="./bangdb-cli-2.0" />
                <p>The cli will display a banner like this</p>
                <Image
                  src={
                    "https://bangdb.com/wp-content/uploads/2022/09/bangdb-cli.png"
                  }
                  alt="Install and run BangDB server 2.0"
                  width={1532}
                  height={580}
                />
                <h3>Steps to run BangDB using the docker image (SSL)</h3>
                <p>
                  Since BangDB requires ssl certificate (cert.pem and key.pem)
                  files, and these are provided by the user, therefore we must
                  build the image by supplying these files.
                </p>
                <p>To do this, first get the Dockerfile from the Github</p>
                <Codebox
                  code="wget https://raw.githubusercontent.com/sachin-sinha/bangdb_helm/master/ssl/Dockerfile"
                  copy="wget https://raw.githubusercontent.com/sachin-sinha/bangdb_helm/master/ssl/Dockerfile"
                />
                <p>
                  Now, create a folder (in the same dir where Dockerfile is
                  kept) names “certificate”
                </p>
                <Codebox code="mkdir certificate" copy="mkdir certificate" />
                <p>
                  Copy cert.pem and key.pem files in the “certificate” folder.
                  Please note, the names need to be exactly as stated
                </p>
                <p>
                  Finally, build the docker image of BangDB in ssl mode using
                  your own certificate files
                </p>
                <Codebox
                  code="docker build -t bangdb-server-ssl/2.0"
                  copy="docker build -t bangdb-server-ssl/2.0"
                />
                <p>You can check the image using following command</p>
                <Codebox code="docker images" copy="docker images" />
                <p>In the end, run BangDB</p>
                <Codebox
                  code={runDockerContainerCodeSSL}
                  copy={runDockerContainerCodeSSL}
                />
                <p>You can run the cli by getting inside the container</p>
                <Codebox
                  code="docker exec -it bangdb-ssl bash"
                  copy="docker exec -it bangdb-ssl bash"
                />
                <Codebox code="cd cli" copy="cd cli" />
                <Codebox code="./bangdb-cli_s-2.0" copy="./bangdb-cli_s-2.0" />
                <p>
                  To run using yaml chart or on openshift, please see{" "}
                  <Link href={"/cloud-pak-for-data"}>Cloud pak for data</Link>
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
