import React from "react";
import Head from "next/head";
import Link from "next/link";
import Breadcrumb from "../../../../components/Breadcrumb";
import DocArticle from "../../../../components/DocArticle";
import Codebox from "../../../../components/Codebox";

export default function MLUCrainfallPrediction() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Rainfall prediction - ML use cases</title>
        <meta
          name="description"
          content="Rainfall Prediction ML Use case - Predict whether or not it'll rain tomorrow by training a binary classification model."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Rainfall prediction - ML use cases"
        />
        <meta
          property="og:description"
          content="Rainfall Prediction ML Use case - Predict whether or not it'll rain tomorrow by training a binary classification model."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="Rainfall prediction - ML use cases"
        />
        <meta
          name="twitter:description"
          content="Rainfall Prediction ML Use case - Predict whether or not it'll rain tomorrow by training a binary classification model."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">Raninfall Prediction</h1>
        <div className="article-body">
          <p>
            RainFall prediction for Commonwealth games Australia on BangDB using
            Tensorflow (Keras).
          </p>
          <h2>Problem Statement</h2>
          <p>
            RainFall Prediction - whether or not it will rain tomorrow by
            training a binary classification model on target RainTomorrow.
          </p>
          <p>
            This is taken from Kaggle, here is the{" "}
            <Link
              className="external"
              target={`_blank`}
              href={`https://www.kaggle.com/datasets/jsphyg/weather-dataset-rattle-package`}
            >
              problem statement in detail
            </Link>
            .
          </p>
          <h2>Get help doc</h2>
          <p>
            Download the help doc and follow the instructions to complete the
            task.
          </p>
          <Codebox
            code={`wget https://bangdb.com/downloads/RainFallPrediction.zip`}
          />
          <h2>Data description</h2>
          <p>
            This dataset contains daily weather observations from numerous
            Australian weather stations. The target variable RainTomorrow means:
            Did it rain the next day? Yes or No. We excluded the variable
            Risk-MM when training a binary classification model. Not excluding
            it will leak the answers to your model and reduce its
            predictability.RISK_MM is the amount of rainfall in millimeters for
            the next day.
          </p>
          <p>
            It includes all forms of precipitation that reach the ground, such
            as rain, drizzle, hail and snow. And it was the column that was used
            to actually determine whether or not it rained to create the binary
            target. For example, if RISK_MM was greater than 0, then the
            RainTomorrow target variable is equal to Yes.
          </p>
          <p>
            Since it contains information about the future, and since it
            contains information directly about the target variable, including
            it would leak the future information to your model. Using it as a
            predictor to build a model and then testing on this dataset would
            give the false appearance of a high accuracy.
          </p>
          <p>
            Observations were drawn from numerous weather stations. The daily
            observations are available from{" "}
            <Link
              className="external"
              target="_blank"
              href="http://www.bom.gov.au/climate/data"
            >
              http://www.bom.gov.au/climate/data
            </Link>
            . Copyright Commonwealth of Australia 2010, Bureau of Meteorology.
          </p>
          <h2>Algorithm</h2>
          <p>
            This is a classification problem and we are going to solve this
            problem by using the Custom External algorithm that is by uploading
            external python code.In this example we will use Keras / Tensorflow.
          </p>
          <h2>Approach</h2>
          <p>
            We can train model using algorithm which are not in built by
            uploading training and prediction python code it has to follow some
            basic protocol.
          </p>
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
