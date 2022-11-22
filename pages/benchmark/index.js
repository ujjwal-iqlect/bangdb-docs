import React from "react";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

export default function Benchmark() {
  return (
    <React.Fragment>
      <Head>
        <title>BangDB Benchmark</title>
        <meta
          name="description"
          content="Goal of BangDB benchmark is to find out the throughput of db where we put data and the get them using multiple connections."
        ></meta>
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="BangDB Benchmark" />
        <meta
          property="og:description"
          content="Goal of BangDB benchmark is to find out the throughput of db where we put data and the get them using multiple connections."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="BangDB Benchmark" />
        <meta
          name="twitter:description"
          content="Goal of BangDB benchmark is to find out the throughput of db where we put data and the get them using multiple connections."
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
              <DocTitle>Benchmark</DocTitle>
              <div className="article-body">
                <h2>BangDB Benchmark (simple)</h2>
                <h3>Throughput / IOPS for put and get for 1B records</h3>
                <p>
                  BangDB is a high-performance converged NoSQL data platform
                  designed to handle fast moving data. It's especially suitable
                  for EdgeAI, which requires lot more than just a NoSQL store.
                  For ex, ability to ingest data efficiently, then to process
                  and analyze for finding interesting patterns or for prediction
                  and finally store in a manner which allows powerful queries to
                  be run in optimal manner for dashboard or reports are some of
                  the key features as required by next generations apps.
                </p>
                <p>
                  BangDB can be simply defined as NoSQL + Streaming + AI to
                  highlight the convergence of different elements to solve the
                  problem in simple yet powerful manner.
                </p>
                <p>
                  Although, BangDB is more than traditional NoSQLs as it tends
                  to do lot more, however it is also important to have the high
                  performance as needed by the use cases.
                </p>
                <p>
                  Goal of this benchmark is to find out the throughput of db
                  where we put data and the get them using multiple connections
                  with all features of the db remain ON. The benchmark is run
                  for BangDB server, however, similarly we can run for embedded
                  as well and the data would be comparable.
                </p>
                <p>
                  Therefore, this section tends to summarise the benchmark of
                  BangDB in different scenarios. The benchmark has been divided
                  into following two sections:
                </p>
                <ol>
                  <li>Custom benchmark - performance numbers for BangDB</li>
                  <li>
                    YCSB benchmark - compare BangDB performance with few other
                    NoSQLs
                  </li>
                </ol>
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
