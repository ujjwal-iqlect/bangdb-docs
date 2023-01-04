import React from "react";
import Head from "next/head";
import Link from "next/link";
import DocArticle from "../../components/DocArticle";
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
      <DocArticle>
        <h1 className="article-title">Cloud Pak for data</h1>
        <div className="article-body">
          <h2>BangDB on CPD / Openshift</h2>
          <p>
            BangDB on CPD (Cloud Pak for Data) IBM under the “Data Sources”
            segment of the platform. Users can get started with this on any
            cloud of their choice BangDB is integrated with{" "}
            <Link
              className="external"
              href={
                "https://community.ibm.com/community/user/cloudpakfordata/partners-catalog"
              }
            >
              CPD platform of IBM as co-sell partner
            </Link>
          </p>
          <h2>Deploy, Install and Run BangDB on CPD / OpenShift Platform</h2>
          <p>
            This document is a walk-through of the steps involved in deploying
            'BangDB' database on OpenShift. Users can go to the section on CPD
            and find the BangDB on Cloud Pak for Data IBM, click the link to get
            started.
          </p>
          <p>There are two ways to deploy BangDB on OS:</p>
          <ul>
            <li>
              <strong>METHOD 1</strong> - Deploying BangDB on openshift using OC
              command line tool
            </li>
            <li>
              <strong>METHOD 2</strong> - Deploying BangDB on openshift using
              the helm chart.
            </li>
          </ul>
          <p>Details of each of these methods are given below.</p>
          <h3>Installation Requirements</h3>
          <p>To run a 'BangDB' database on OpenShift you need to:</p>
          <ol>
            <li>
              Create an OpenShift cluster. (openshift version 4 and above is
              supported)
            </li>
            <li>
              Configure command line tool 'OC' on the bastion node. [ METHOD 1 ]
            </li>
            <li>
              Configure 'helm' (version 3.0+) and 'git' on the bastion node.
              (Required if you are deploying BangDB instance using helm [ METHOD
              2 ]
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
            You can deploy the 'BangDB' instance on a namespace of your choice.
            To create a namespace run the below command from bastion node.
          </p>
          <aside className="doc-note">
            <strong>Note: </strong>Most probably you may have the namespace
            created, in that case just switch to namespace
          </aside>
          <Codebox
            code="oc create ns <namespace>"
            copy="oc create ns <namespace>"
          />
          <p>
            To switch to the new namespace/project, run the command below. This
            way you can select the new namespace to be used with subsequent
            commands.
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
    </React.Fragment>
  );
}
