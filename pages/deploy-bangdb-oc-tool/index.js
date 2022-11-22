import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import Codebox from "../../components/Codebox";

export default function UsingOcCommandTool() {
  const bangdbYaml = String.raw` selector:
  matchLabels:
    deployment: bangdb
template:
  metadata:
    creationTimestamp: null
    labels:
      deployment: bangdb
  spec:
    containers:
      - name: bangdb
        image: >-
          bangdb/bangdb-server
        ports:
          - name: tcp
            protocol: TCP
            containerPort: 10101
            targetPort: 10101
          - name: http
            protocol: TCP
            containerPort: 18080
            targetPort: 18080
        imagePullPolicy: Always
        securityContext:
            fsGroupChangePolicy: OnRootMismatch
            runAsNonRoot: true
            supplementalGroups: [bangdb,1000]
            allowPrivilegeEscalation: false
            seccompProfile:
                type: RuntimeDefault
            capabilities:
                drop: ["ALL"]
    volumeMounts:
       - name: data
         mountPath: /bin/data
       - name: logdir
         mountPath: /bin/logdir
    volumes:
       - name: data
       - name: logdir`;

  return (
    <React.Fragment>
      <Head>
        <title>Using OC Command line tool - BangDB</title>
        <meta
          name="description"
          content="There are 2 methods to deploy BangDB on openshift - Learn more about deploying BangDB on an Openshift using the OC command line tool."
        ></meta>
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Using OC Command line tool - BangDB"
        />
        <meta
          property="og:description"
          content="There are 2 methods to deploy BangDB on openshift - Learn more about deploying BangDB on an Openshift using the OC command line tool."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="Using OC Command line tool - BangDB"
        />
        <meta
          name="twitter:description"
          content="There are 2 methods to deploy BangDB on openshift - Learn more about deploying BangDB on an Openshift using the OC command line tool."
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
              <DocTitle>Using OC command tool</DocTitle>
              <div className="article-body">
                <h2>Deploy BangDB on OpenShift</h2>
                <h3>
                  METHOD 1 - Deploying BangDB on openshift using OC command line
                  tool
                </h3>
                <p>
                  To Deploy BangDB on an openshift using OC command line tool -
                  Let's create a 'BangDB' instance as a Kubernetes deployment
                  object. Here is the yaml file, bangdb.yaml for deployment
                  object. Please don't forget to change the value of namespace
                  in the yaml file below.
                </p>
                <Codebox code={bangdbYaml} copy={bangdbYaml} />
                <p>
                  Now you can run the following command from the Bastion node.
                </p>
                <Codebox
                  code="oc apply -f bangdb.yaml"
                  copy="oc apply -f bangdb.yaml"
                />
                <p>
                  This deployment creates a single pod running 'BangDB'. To
                  verify the deployment you can check the logs of the pod
                  created. The logs should appear as shown below saying 'BangDB'
                  service is up and running.
                </p>
                <Image
                  src={
                    "https://bangdb.com/wp-content/uploads/2021/08/bangdb_openshift_startup_log.png"
                  }
                  alt="Deploy BangDB on OpenShift"
                  width={1600}
                  height={601}
                />
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
