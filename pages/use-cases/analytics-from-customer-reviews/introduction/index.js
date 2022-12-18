import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../../components/Breadcrumb";
import DocArticle from "../../../../components/DocArticle";
import Link from "next/link";

export default function AFCRintro() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Introduction to Customer reviews analytics use case</title>
        <meta
          name="description"
          content="Introduction to Customer reviews analytics use case - Checkout the detailed demo video or read the documentation to know about scenarios & solutions of this use case."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Introduction to Customer reviews analytics use case"
        />
        <meta
          property="og:description"
          content="Introduction to Customer reviews analytics use case - Checkout the detailed demo video or read the documentation to know about scenarios & solutions of this use case."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="Introduction to Customer reviews analytics use case"
        />
        <meta
          name="twitter:description"
          content="Introduction to Customer reviews analytics use case - Checkout the detailed demo video or read the documentation to know about scenarios & solutions of this use case."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">Introduction</h1>
        <div className="article-body">
          <p>
            Find the detailed steps to run this use case on your machine{" "}
            <Link
              target={"_blank"}
              href={`https://bangdb.com/blog/customer-message-analysis-predictive-streaming-manner`}
            >
              here
            </Link>
            .
          </p>
          <p>
            Please find the video of this demo/use case{" "}
            <Link
              className="external"
              target={"_blank"}
              href={`https://youtu.be/Z4Maz0y_rNk`}
            >
              here
            </Link>
            .
          </p>
          <p>
            Check out the detailed documentation of this use case on{" "}
            <Link
              className="external"
              target={"_blank"}
              href={`https://github.com/sachin-sinha/BangDB/tree/master/usecases/customer_reviews`}
            >
              Github
            </Link>
            .
          </p>
        </div>
      </DocArticle>
    </React.Fragment>
  );
}

export async function getServerSideProps(context) {
  return {
    props: { useCasesSidebar: true },
  };
}
