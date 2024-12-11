import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";

export default function BangDB20ReleaseInfo() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>BangDB 2.0 Release Info</title>
        <meta
          name="description"
          content="BangDB 2.0 Release Info. Read the well-written documentation to know more about BangDB 2.0 features and capabilities."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="BangDB 2.0 Release Info" />
        <meta
          property="og:description"
          content="BangDB 2.0 Release Info. Read the well-written documentation to know more about BangDB 2.0 features and capabilities."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="BangDB 2.0 Release Info" />
        <meta
          name="twitter:description"
          content="BangDB 2.0 Release Info. Read the well-written documentation to know more about BangDB 2.0 features and capabilities."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">BangDB 2.0 Release Info</h1>
        <div className="article-body">
          <h2>Recently Added Features</h2>
          <h4>Release Date</h4>
          <p>
            <em>11th Dec 2024</em>
          </p>
          <p>
            <em>Version - 2.0.01</em>
          </p>
          <p>
            <em>Major - 2</em>
          </p>
          <p>
            <em>Minor - 01</em>
          </p>
          <p>
            <strong>Backward compatibility with 2.0</strong> : Complete
          </p>
          <p>
            <strong>Install mechanism</strong> : simply copy the binaries or run install.sh
          </p>
          <p>
            <strong>Features:</strong>
          </p>
          <ol>
            <li>
              BangDB Workflow Engine
              <ul>
                <li>Work, Groups and pipes structuring for auto workflow of elements</li>
                <li>Run-time stats for work, and pipelines</li>
              </ul>
            </li>
            <li>User service for BangDB – entire user management</li>
            <li>APIs update across all layers of BangDB</li>
            <li>AppStore for BangDB
              <ul>
                <li>
                  Subscription model for BangDB apps
                </li>
                <li>
                  Build apps, upload to Appstore
                </li>
              </ul>
            </li>
            <li>Apps
              <ul>
                <li>
                  AppMon – Infra monitoring app, logs, server, vms etc.
                </li>
                <li>
                  BugTracker – bug management system
                </li>
                <li>
                  LeadMgmt – generate and manage leads
                </li>
                <li>
                  LeadMart – generate and sell leads
                </li>
                <li>
                  Forum – Online forum for community
                </li>
                <li>
                  VisitorInsights – visitor analysis and insights
                </li>
              </ul>
            </li>
            <li>Bug Fixes</li>
          </ol>
          <h2>Previous Major releases</h2>
          <div className="release">
            <h4>Release date</h4>
            <p>
              <em>25th Sep 2022</em>
            </p>
            <p>
              <em>
                Version: 1.9.00
              </em>
            </p>
            <p>
              <em>Major: 2.0</em>
            </p>
            <p>
              <em>Minor: 00</em>
            </p>
            <p>
              <strong>Install mechanism</strong> : simply copy the binaries or run install.sh
            </p>
            <p>
              <strong>Added Features:</strong>
            </p>
            <ol>
              <li>
                Graph support in BangDB
              </li>
              <li>
                Cypher query language for BangDB
              </li>
              <li>
                More default UDFs
              </li>
              <li>
                More help docs
              </li>
              <li>
                Bug Fixes
              </li>
            </ol>
          </div>
          <div className="release">
            <h4>Release date</h4>
            <p>
              <em>7th Aug 2021</em>
            </p>
            <p>
              <em>Version - 1.8.00</em>
            </p>
            <p>
              <em>
                Major: 2.0
              </em>
            </p>
            <p>
              <em>Minor: 00</em>
            </p>
            <p>
              <strong>Install mechanism</strong> : simply copy the binaries or
              run install.sh
            </p>
            <p>
              <strong>Features:</strong>
            </p>
            <ol>
              <li>Geospatial Index</li>
              <li>Abstraction for data summary - statistical</li>
              <li>Feature selection help - for training model</li>
              <li>Data format conversion abstractions</li>
              <li>Time-series forecast as an abstraction</li>
              <li>More default UDFs</li>
              <li>More help docs</li>
              <li>Example code and docs for DB, ML and Stream</li>
              <li>Bug fixes</li>
              <li><a href="https://docs.bangdb.com/release-info/ampere" rel="noreferrer" target="_blank" className="text-blue-500 font-semibold">Ampere</a></li>
              <li><a href="https://docs.bangdb.com/release-info/bangdb-2.0" rel="noreferrer" target="_blank" className="text-blue-500 font-semibold">BangDB 2.0</a></li>
            </ol>
          </div>
        </div>
      </DocArticle>
    </React.Fragment>
  );
}

export async function getServerSideProps(context) {
  return {
    props: { releaseSidebar: true },
  };
}
