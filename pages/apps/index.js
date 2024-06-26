import React from "react";
import Head from "next/head";
import styled from "styled-components";
import Box from "../../components/Box";
// import Box from "../components/Box";
// import Searchbar from "../components/Searchbar";

export default function Apps() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>BangDB Apps Documentation</title>
        <meta
          name="description"
          content="Welcome to the BangDB Apps Documentation. Find the guides, samples,
          and references you need to use to get started with BangDB applications."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="BangDB Apps Documentation" />
        <meta
          property="og:description"
          content="Welcome to the BangDB Apps Documentation. Find the guides, samples,
          and references you need to use to get started with BangDB applications."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="BangDB Apps Documentation" />
        <meta
          name="twitter:description"
          content="Welcome to the BangDB Apps Documentation. Find the guides, samples,
          and references you need to use to get started with BangDB applications."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      {/* <GcWrapper>
        <main style={{ display: "flex", flexGrow: "1" }}> */}

      <div className="flex items-center mt-10 min-h-[80vh]">
        <BoxSectionWrapper>
          <BoxSection>
            {/* <Box
              headline={"Bug Tracker"}
              para={
                "Get started with BangDB Leads Management database and power your application."
              }
              link={"/apps/leads-management"}
            /> */}
            <Box
              headline={"Leads Management"}
              para={
                "Get started with BangDB Leads Management database and power your application."
              }
              link={"/apps/leads-management/crm-editing/overview"}
            />
            <Box
              headline={"Leads Selling"}
              para={
                "Get started with BangDB Leads Selling database and power your application."
              }
              link={"/apps/leads-selling/create-crm?app=leads_selling"}
            />
            <Box
              headline={"Forum"}
              para={
                "Get started with BangDB Forum app and start your online community."
              }
              link={"/apps/forum"}
            />

            {/* 
            <Box
              headline={"Click Stream"}
              para={
                "Get started with BangDB Leads Management database and power your application."
              }
              link={"/apps/leads-management"}
            />
            <Box
              headline={"Forum"}
              para={
                "Get started with BangDB Leads Management database and power your application."
              }
              link={"/apps/leads-management"}
            />
            <Box
              headline={"ShopIQ"}
              para={
                "Get started with BangDB Leads Management database and power your application."
              }
              link={"/apps/leads-management"}
            /> */}
          </BoxSection>
        </BoxSectionWrapper>
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
  gap: 1.875rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  @media screen and (min-width: 1024px) {
    justify-content: center;
    gap: 30px;
  }
  @media screen and (max-width: 500px) {
    padding: 30px 0;
  }
`;

// grid-template-columns: repeat(3, 300px);
