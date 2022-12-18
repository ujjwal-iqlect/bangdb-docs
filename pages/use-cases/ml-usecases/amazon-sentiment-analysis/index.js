import React from "react";
import Head from "next/head";
import Link from "next/link";
import Breadcrumb from "../../../../components/Breadcrumb";
import DocArticle from "../../../../components/DocArticle";
import Codebox from "../../../../components/Codebox";

export default function MLUCamazonSentimentAnalysis() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Amazon sentiment analysis - ML use cases</title>
        <meta
          name="description"
          content="Amazon Sentiment Analysis ML use case - We've to categorize opinions expressed in feedback forums. This can be utilized for a feedback management system..."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Amazon sentiment analysis - ML use cases"
        />
        <meta
          property="og:description"
          content="Amazon Sentiment Analysis ML use case - We've to categorize opinions expressed in feedback forums. This can be utilized for a feedback management system..."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="Amazon sentiment analysis - ML use cases"
        />
        <meta
          name="twitter:description"
          content="Amazon Sentiment Analysis ML use case - We've to categorize opinions expressed in feedback forums. This can be utilized for a feedback management system..."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">Data clustering analysis</h1>
        <div className="article-body">
          <p>Credit Card Data Clustering Analysis using Kmeans on BangDB</p>
          <h2>Problem Statement</h2>
          <p>
            This case requires developing a customer segmentation to define
            marketing strategy. The Dataset summarizes the usage behavior of
            about 14360 active credit card holders during the last 6 months. The
            file is at a customer level with 18 behavioural variables.
          </p>
          <p>
            This is taken from Kaggle, here is the{" "}
            <Link
              className="external"
              target={`_blank`}
              href={`https://www.kaggle.com/datasets/arjunbhasin2013/ccdata`}
            >
              problem statement in detail
            </Link>
            .
          </p>
          <h2>Objective</h2>
          <p>Build a model to perform customer segmentation.</p>
          <h2>Get help doc</h2>
          <p>Download the file and follow the help doc to complete the task.</p>
          <Codebox
            code={`wget https://bangdb.com/downloads/CrediCardClustering.zip`}
          />
          <h2>Data description</h2>
          <p>
            The dataset contains 14360 events and 18 attributes. The dataset
            consists of both continuous as well as categorical attributes.
          </p>
          <aside className="doc-api-code">
            <p>The columns are:</p>
            <p>
              CUSTID,
              <br />
              BALANCE,
              <br />
              BALANCEFREQUENCY,
              <br />
              PURCHASES,
              <br />
              ONEOFFPURCHASES,
              <br />
              INSTALLMENTSPURCHASES,
              <br />
              CASHADVANCE,
              <br />
              PURCHASESFREQUENCY,
              <br />
              ONEOFFPURCHASESFREQUENCY,
              <br />
              ONEOFFPURCHASESFREQUENCY,
              <br />
              CASHADVANCE,
              <br />
              PURCHASESFREQUENCY,
              <br />
              ONEOFFPURCHASESFREQUENCY,
              <br />
              PURCHASESINSTALLMENTSFREQUENCY,
              <br />
              CASHADVANCEFREQUENCY,
              <br />
              CASHADVANCETR,
              <br />
              PURCHASESTRX,
              <br />
              CREDITLIMIT,
              <br />
              PAYMENTS,
              <br />
              MINIMUM_PAYMENTS,
              <br />
              PRCFULLPAYMENT,
              <br />
              TENURE.
            </p>
          </aside>
          <h2>Algorithm</h2>
          <p>
            We have to do customer segmentation for the given problem. To do
            this we are selecting the kernel k-means algorithm (KKmeans). In
            kernel k-means before clustering, points are mapped to a
            higher-dimensional feature space using a nonlinear function, and
            then kernel k-means partitions the points by linear separators in
            the new space.
          </p>
          <h2>Approach</h2>
          <p>
            There are three ways to train a model on bangdb. One is to directly
            register the meta_data for training ( we call it json request which
            contains all the details about the model ), the second is to create
            mage_data for training by following the workflow on CLI and the
            third is by using APIs.
          </p>
          <p>
            Here we will be training the model using all methods. On bangdb, we
            have the option of training a model from a file (file format can be
            CSV or JSON) containing training data or from streaming data. Here
            we are training the model from a CSV file.
          </p>
          <h2>Method</h2>
          <p>Using CLI workflow.</p>
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
