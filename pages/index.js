import React from "react";
import Head from "next/head";
import styled from "styled-components";
import Box from "../components/Box";
import Searchbar from "../components/Searchbar";

export default function Home() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>BangDB Documentation</title>
        <meta
          name="description"
          content="Welcome to the BangDB Documentation. Find the guides, samples,
          and references you need to use the database and get started."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="BangDB Documentation" />
        <meta
          property="og:description"
          content="Welcome to the BangDB Documentation. Find the guides, samples,
          and references you need to use the database and get started."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="BangDB Documentation" />
        <meta
          name="twitter:description"
          content="Welcome to the BangDB Documentation. Find the guides, samples,
          and references you need to use the database and get started."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>
      {/* <GcWrapper>
        <main style={{ display: "flex", flexGrow: "1" }}> */}
      <MainSection>
        <Inner>
          <Header>
            <HeaderText>
              <MainHeading>Documentation for BangDB</MainHeading>
              <MainDescription>
                <p
                  style={{
                    marginBottom: "2rem 0",
                    textAlign: "center",
                    color: "#fff",
                    fontWeight: "500",
                  }}
                >
                  Welcome to the BangDB Documentation. Find the guides, samples,
                  and references you need to use the database and get started.
                </p>
                <Searchbar
                  placeholder={
                    "Search all documentation and learning resources"
                  }
                />
              </MainDescription>
            </HeaderText>
          </Header>
        </Inner>
      </MainSection>
      <div
        style={{
          maxWidth: "1380px",
          padding: "0 5rem",
          margin: "0 auto",
        }}
      >
        <BoxSection>
          <Box
            headline={"Manual"}
            para={
              "Get started with BangDB NoSQL database and power your application."
            }
            link={"/overview"}
          />
          <Box
            headline={"Use Cases"}
            para={
              "Here are some helpful use cases to help you get started with BangDB NoSQL database."
            }
            link={"/use-cases/iot-vehicle-monitoring/introduction"}
          />
          <Box
            headline={"Help Guides"}
            para={
              "Learn about BangDB algorithms and their hyperparameter, classification, regression, k-means etc."
            }
            link={"/ml-help-guide/bangdb-algorithms-and-their-hyperparameter"}
          />
          <Box
            headline={"Rest API"}
            para={
              "Learn more about BangDB REST API, how it works and it's capabilities & features."
            }
            link={"/rest-api/api-introduction"}
          />
          <Box
            headline={"Graph & Cypher"}
            para={`Learn about graph, introduce yourself to cypher,
            and find useful resources.`}
            link={"/graph-and-cypher"}
          />
          <Box
            headline={"Release Info"}
            para={"Release notes for Ampere and BangDB NoSQL database."}
            link={"/release-info/ampere"}
          />
        </BoxSection>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      noSidebar: true,
    },
  };
}

const MainSection = styled.section`
  padding: 80px 0;
  margin-top: 45px;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
  background: #073042;
  color: #202124;
`;

const Inner = styled.div`
  margin: 0 auto;
  padding: 0 64px;
  max-width: 1380px;
`;

const Header = styled.div`
  display: flex;
  margin: 0 auto;
`;

const HeaderText = styled.div`
  flex: 1 1 auto;
`;

const MainHeading = styled.h2`
  font: 700 40px/48px Raleway;
  text-align: center;
  color: #fff;
`;

const MainDescription = styled.div`
  margin-top: 2rem;
  color: #3c4043;
`;

const BoxSection = styled.section`
  display: grid;
  padding: 60px 0;
  justify-content: center;
  gap: 30px;
  grid-template-columns: repeat(3, 300px);
`;
