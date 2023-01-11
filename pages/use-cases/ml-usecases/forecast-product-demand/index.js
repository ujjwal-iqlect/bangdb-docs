import React from "react";
import Head from "next/head";
import Link from "next/link";
import Breadcrumb from "../../../../components/Breadcrumb";
import DocArticle from "../../../../components/DocArticle";
import Codebox from "../../../../components/Codebox";

export default function MLUCforecastProductDemand() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Forecast Product Demand - ML use cases</title>
        <meta
          name="description"
          content="In this project we'll forecast product demand for a week, at a store. The dataset you're given consists of 9 weeks of sales transactions in Mexico."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Forecast Product Demand - ML use cases"
        />
        <meta
          property="og:description"
          content="In this project we'll forecast product demand for a week, at a store. The dataset you're given consists of 9 weeks of sales transactions in Mexico."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="Forecast Product Demand - ML use cases"
        />
        <meta
          name="twitter:description"
          content="In this project we'll forecast product demand for a week, at a store. The dataset you're given consists of 9 weeks of sales transactions in Mexico."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">Credit risk analysis</h1>
        <div className="article-body">
          <p>
            Training model for forecasting product demand on BangDB using CLI
          </p>
          <h2>Problem Statement</h2>
          <p>
            In this competition, you will forecast the demand of a product for a
            given week, at a particular store. The dataset you are given
            consists of 9 weeks of sales transactions in Mexico. Every week,
            there are delivery trucks that deliver products to the vendors.
          </p>
          <p>
            Each transaction consists of sales and returns. Returns are the
            products that are unsold and expired. The demand for a product in a
            certain week is defined as the sales this week subtracted by the
            return next week.
          </p>
          <p>
            This is taken from Kaggle, here is the{" "}
            <Link
              className="external"
              target={`_blank`}
              href={`https://www.kaggle.com/c/grupo-bimbo-inventory-demand/data`}
            >
              problem statement in detail
            </Link>
            .
          </p>
          <h2>Objective</h2>
          <p>To build a model which predicts the demand of a product.</p>
          <h2>Get help doc</h2>
          <p>Simply download and follow the doc to complete the task.</p>
          <Codebox
            code={`wget https://bangdb.com/downloads/DemandForecast_Regression.zip`}
          />
          <h2>Data description</h2>
          <p>
            The dataset contains 180000 events and 11 attributes. All attributes
            are numerical. The attribute Demanda_uni_equil is the target value
            that we are trying to predict.
          </p>
          <h2>Algorithm</h2>
          <p>
            The given problem is a regression problem. To solve it, we will be
            using the Support Vector Regression algorithm (SVR). The advantage
            of SVR over linear regression is that SVR gives us the flexibility
            to define how much error is acceptable in our model and will find an
            appropriate line (or hyperplane in higher dimensions) to fit the
            data.
          </p>
          <h2>Approach</h2>
          <p>
            There are three ways to train a model on bangdb. One is to directly
            register the meta_data for training (we call it json request which
            contains all the details about the model), the second is to create
            mage_data for training by following the workflow on CLI and the
            third is by using APIs. Here we will be training the model using
            CLI.
          </p>
          <h2>Method</h2>
          <p>Training model by following workflow on CLI.</p>
        </div>
      </DocArticle>
    </React.Fragment>
  );
}

export async function getServerSideProps(context) {
  return {
    props: { mlSidebar: true },
  };
}
