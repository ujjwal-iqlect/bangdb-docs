import React from "react";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import Codebox from "../../components/Codebox";

export default function CloudPakForData() {
  return (
    <React.Fragment>
      <Head>
        <title>BangDB on CPD IBM</title>
        <meta
          name="description"
          content="BangDB on CPD (cloud pak for data) IBM is integrated as co-sell partner under the Data Sources segment on the platform"
        ></meta>
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="BangDB on CPD IBM" />
        <meta
          property="og:description"
          content="BangDB on CPD (cloud pak for data) IBM is integrated as co-sell partner under the Data Sources segment on the platform"
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="BangDB on CPD IBM" />
        <meta
          name="twitter:description"
          content="BangDB on CPD (cloud pak for data) IBM is integrated as co-sell partner under the Data Sources segment on the platform"
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
              <DocTitle>Cloud Pak for data</DocTitle>
              <div className="article-body">
                <h2>BangDB on CPD / Openshift</h2>
                <p>
                  BangDB on CPD (Cloud Pak for Data) IBM under the “Data
                  Sources” segment of the platform. Users can get started with
                  this on any cloud of their choice BangDB is integrated with{" "}
                  <Link
                    className="external"
                    href={
                      "https://community.ibm.com/community/user/cloudpakfordata/partners-catalog"
                    }
                  >
                    CPD platform of IBM as co-sell partner
                  </Link>
                </p>
                <h2>
                  Deploy, Install and Run BangDB on CPD / OpenShift Platform
                </h2>
                <p>
                  This document is a walk-through of the steps involved in
                  deploying 'BangDB' database on OpenShift. Users can go to the
                  section on CPD and find the BangDB on Cloud Pak for Data IBM,
                  click the link to get started.
                </p>
                <p>There are two ways to deploy BangDB on OS:</p>
                <ul>
                  <li>
                    <strong>METHOD 1</strong> - Deploying BangDB on openshift
                    using OC command line tool
                  </li>
                  <li>
                    <strong>METHOD 2</strong> - Deploying BangDB on openshift
                    using the helm chart.
                  </li>
                </ul>
                <p>Details of each of these methods are given below.</p>
                <h3>Installation Requirements</h3>
                <p>To run a 'BangDB' database on OpenShift you need to:</p>
                <ol>
                  <li>
                    Create an OpenShift cluster. (openshift version 4 and above
                    is supported)
                  </li>
                  <li>
                    Configure command line tool 'OC' on the bastion node. [
                    METHOD 1 ]
                  </li>
                  <li>
                    Configure 'helm' (version 3.0+) and 'git' on the bastion
                    node. (Required if you are deploying BangDB instance using
                    helm [ METHOD 2 ]
                  </li>
                </ol>
                <aside className="doc-note">
                  <strong>Note: </strong>Bastion node is the node from which you
                  provision your OpenShift cluster
                </aside>
                <p>
                  'BangDB' instance can be installed on an OpenShift cluster in
                  several ways:
                </p>
                <ol>
                  <li>Using oc command line tool [ METHOD 1 ]</li>
                  <li>Using helm [ METHOD 2 ]</li>
                </ol>
                <h3>Create a namespace</h3>
                <p>
                  You can deploy the 'BangDB' instance on a namespace of your
                  choice. To create a namespace run the below command from
                  bastion node.
                </p>
                <aside className="doc-note">
                  <strong>Note: </strong>Most probably you may have the
                  namespace created, in that case just switch to namespace
                </aside>
                <Codebox
                  code="oc create ns <namespace>"
                  copy="oc create ns <namespace>"
                />
                <p>
                  To switch to the new namespace/project, run the command below.
                  This way you can select the new namespace to be used with
                  subsequent commands.
                </p>
                <Codebox
                  code="oc project <namespace>"
                  copy="oc project <namespace>"
                />
                <p>
                  Let's go to next next pages for{" "}
                  <Link href={"/deploy-bangdb-oc-tool"}>METHOD1</Link> or{" "}
                  <Link href={"/deploy-bangdb-helm-chart"}>METHOD2</Link> for
                  deploying BangDB
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
