import React from "react";
import Head from "next/head";
import styled from "styled-components";
import Box from "../components/Box";

export default function Home() {
  return (
    <>
      <Head>
        <title>BangDB Documentation</title>
        <meta
          name="description"
          content="Best NoSQL database in the industry"
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
                    fontWeight: "500",
                  }}
                >
                  Welcome to the BangDB Documentation. Find the guides, samples,
                  and references you need to use the database and get started.
                </p>
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
            para={"Start using BangDB NoSQL Database."}
            link={"/overview"}
          />
          <Box
            headline={"Use Cases"}
            para={"Start using BangDB NoSQL Database."}
            link={"/use-cases/iot-vehicle-monitoring/introduction"}
          />
          <Box
            headline={"Help Guides"}
            para={"Start using BangDB NoSQL Database."}
            link={"/ml-help-guide/bangdb-algorithms-and-their-hyperparameter"}
          />
          <Box
            headline={"Rest API"}
            para={"Start using BangDB NoSQL Database."}
            link={"/rest-api/api-introduction"}
          />
          <Box
            headline={"Graph & Cypher"}
            para={"Start using BangDB NoSQL Database."}
            link={"/graph-and-cypher"}
          />
          <Box
            headline={"Release Info"}
            para={"Start using BangDB NoSQL Database."}
            link={"/release-info/ampere"}
          />
        </BoxSection>
      </div>
    </>
  );
}

export async function getStaticProps(context) {
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
  background: #f8f9fa;
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
  color: #000;
`;

const MainDescription = styled.div`
  margin-top: 2rem;
  color: #3c4043;
`;

const BoxSection = styled.section`
  display: grid;
  padding: 60px 0;
  gap: 50px;
  grid-template-columns: repeat(3, 380px);
`;
