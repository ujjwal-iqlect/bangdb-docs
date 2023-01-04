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
              <MainHeading>BangDB Documentation</MainHeading>
              <MainDescription>
                <p
                  style={{
                    marginBottom: "2rem",
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
      <BoxSectionWrapper>
        <BoxSection>
          <Box
            headline={"Manual"}
            para={
              "Get started with BangDB NoSQL database and power your application."
            }
            link={"/overview"}
          />
          <Box
            headline={"Rest API"}
            para={
              "Learn more about BangDB REST API, how it works and it's capabilities & features."
            }
            link={"/rest-api/api-introduction"}
          />
          <Box
            headline={"Stream"}
            para={`Learn about stream concepts, how stream processing happens,
                and how to work with it.`}
            link={"/stream"}
          />
          <Box
            headline={"Graph & Cypher"}
            para={`Learn about graph, introduce yourself to cypher,
              and find useful resources.`}
            link={"/graph-and-cypher"}
          />
          <Box
            headline={"Complex Event Processing"}
            para={`Learn about Complex Event Processing, it's use-cases and examples.`}
            link={"/complex-event-processing"}
          />
          <Box
            headline={"Help Guides"}
            para={
              "Learn about BangDB algorithms and their hyperparameter, classification, regression, k-means etc."
            }
            link={"/ml-help-guide/bangdb-algorithms-and-their-hyperparameter"}
          />
          <Box
            headline={"Use Cases"}
            para={
              "Here are some helpful use cases to help you get started with BangDB NoSQL database."
            }
            link={"/use-cases/iot-vehicle-monitoring/introduction"}
          />
          <Box
            headline={"Release Info"}
            para={
              "Release info & feature notes for Ampere and BangDB NoSQL database."
            }
            link={"/release-info/ampere"}
          />
        </BoxSection>
      </BoxSectionWrapper>
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
  background: #1769e0;
  color: #202124;
`;

const Inner = styled.div`
  margin: 0 auto;
  padding: 0 64px;
  max-width: 1380px;
  @media screen and (max-width: 580px) {
    padding: 0 30px;
  }
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
  @media screen and (max-width: 670px) {
    font-size: 30px;
  }

  @media screen and (max-width: 380px) {
    font-size: 25px;
  }
`;

const MainDescription = styled.div`
  margin-top: 1rem;
  color: #3c4043;
  & p {
    @media screen and (max-width: 670px) {
      font-size: 14px;
    }
    @media screen and (max-width: 490px) {
      line-height: 1.5;
    }
    @media screen and (max-width: 405px) {
      font-size: 12px;
    }
  }
`;

const BoxSectionWrapper = styled.div`
  max-width: 1380px;
  padding: 0 5rem;
  margin: 0 auto;
  @media screen and (max-width: 1024px) {
    padding: 0 1rem;
  }
`;

const BoxSection = styled.section`
  display: grid;
  padding: 60px 0;
  gap: 0.8rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  @media screen and (min-width: 1024px) {
    justify-content: center;
    gap: 30px;
    grid-template-columns: repeat(3, 300px);
  }
  @media screen and (max-width: 500px) {
    padding: 30px 0;
  }
`;
