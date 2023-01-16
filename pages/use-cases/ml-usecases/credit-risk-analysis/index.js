import React from "react";
import Head from "next/head";
import Link from "next/link";
import Breadcrumb from "../../../../components/Breadcrumb";
import DocArticle from "../../../../components/DocArticle";
import Codebox from "../../../../components/Codebox";

export default function MLUCcreditRiskAnalysis() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Credit risk analysis - ML use cases</title>
        <meta
          name="description"
          content="In this project, we have to manage credit risk by using the past data and deciding whom to give the loan in the future."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Credit risk analysis - ML use cases"
        />
        <meta
          property="og:description"
          content="In this project, we have to manage credit risk by using the past data and deciding whom to give the loan in the future."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="Credit risk analysis - ML use cases"
        />
        <meta
          name="twitter:description"
          content="In this project, we have to manage credit risk by using the past data and deciding whom to give the loan in the future."
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
          <h2>Problem Statement</h2>
          <p>
            In this project, we have to manage credit risk by using the past
            data and deciding whom to give the loan in the future. The data file
            contains complete loan data for all loans issued between 2007-2015.
            The data contains the indicator of default, payment information,
            credit history, etc. This is taken from Kaggle,{" "}
            <Link
              href="https://www.kaggle.com/datasets/sonujha090/xyzcorp-lendingdata"
              className="external"
              target="_blank"
            >
              here
            </Link>{" "}
            is the problem statement in detail.
          </p>
          <p>
            The data is divided into training and test data. We have used the
            training data to build a model and finally applied it to test data
            to measure the performance and robustness of the models.
          </p>
          <h2>Objective</h2>
          <p>To build a machine learning model to detect load defaulters.</p>
          <h2>Links</h2>
          <p>
            Take the zip file and follow the instruction to complete the task.
          </p>
          <Codebox code={`wget https://bangdb.com/downloads/CreditRisk.zip`} />
          <h2>Data description</h2>
          <p>
            The dataset contains 855969 events with 73 attributes ( containing
            both categorical and numerical data). Total number of defaulters are
            46467 out of 855969 which is approx 6% of the total. This clearly is
            a case of an imbalanced class problem where the value of class is
            far less than the other.
          </p>
          <p>
            Data processing: The percentage of missing data in many columns are
            more than 75%. So, we&apos;ll have to remove columns having data
            less than 75%. 2 attributes have only 1 unique value and 7
            attributes are highly correlated to each other. We are also dropping
            columns like id, member_id , zip, title etc as they play no role in
            model training. In the final dataset we have 29 attributes.
          </p>
          <h2>Algorithm</h2>
          <p>
            The given problem is a classification problem. To solve it and
            reduce the credit risk, we will be using the Support Vector
            Classifier algorithm (SVC) with weights to deal with class
            imbalance. Why SVM, because SVM is more effective in high
            dimensional spaces and SVM is relatively memory efficient.
          </p>
          <h2>Approach</h2>
          <p>
            There are three ways to train a model on bangdb. One is to directly
            register the meta_data for training (we call it json request which
            contains all the details about the model), second is to create
            mage_data for training by following the workflow on CLI and the last
            one is to train using APIs. Here we will be training the model using
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
