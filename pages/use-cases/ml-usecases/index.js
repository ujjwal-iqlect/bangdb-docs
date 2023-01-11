import React from "react";
import Head from "next/head";
import Link from "next/link";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";

export default function MLUC() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>ML use cases - BangDB</title>
        <meta
          name="description"
          content="BangDB natively integrated ML (and DL) capabilities, which means we don't need to have separate ML architecture or management.."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="ML use cases - BangDB" />
        <meta
          property="og:description"
          content="BangDB natively integrated ML (and DL) capabilities, which means we don't need to have separate ML architecture or management.."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="ML use cases - BangDB" />
        <meta
          name="twitter:description"
          content="BangDB natively integrated ML (and DL) capabilities, which means we don't need to have separate ML architecture or management.."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">ML Use Cases</h1>
        <div className="article-body">
          <h2>Solve ML related problems on BangDB using CLI in a simple way</h2>
          <p>
            BangDB natively integrated ML (and DL) capabilities, which means we
            don&apos;t need to have separate ML architecture or management
            framework in place. Also it avoids movement of data from DB to ML
            System and model back to the DB for use. Further since data and ML
            are at the same place therefore lots of steps could be simply
            automated.
          </p>
          <p>
            While training models, we go through several steps and quickly we
            realise that training a model requires lot more than just a simple
            train command. We need to ingest data, process (preprocess / post
            process) it, clean, enrich, add/edit, normalise, deal with missing
            values etc. Moreover, training a model is often involves large files
            (train or test), metadata, model artifact etc. therefore we must
            store these in an efficient and accessible manner, version models,
            deploy them and so on.
          </p>
          <p>
            BangDB has built lots of things in this regard to simply the
            procedures and also allow automation as much as possible. For
            example, the if data in ingested in the streams then we can do lots
            of pre and post processing, we can compute new attributes, aggregate
            and use them, apply complex rules to filter data etc. Further, data
            summarization can be done with a single command, which allows users
            to see some stats and correlations etc. to take appropriate action
            when it comes to selecting attributes. Some of the jobs like
            timeseries and forecast work are provided via simple abstraction
            which makes the entire process very easy and efficient.
          </p>
          <p>
            While there are several inbuilt algos within BangDB, in many cases
            we would like to use external frameworks like Tensorflow, Keras,
            PyTorch, Scikit-learn etc. BangDB can leverage these without making
            any changes (except training metadata where we specify this). Users
            can upload training and test files (python) to train and predict
            etc. We will see some of these in following examples too.
          </p>
          <p>
            To deal with large files and objects, BangDB implements BRS (BangDB
            Resource Server) where ML system stores all the data. This mimics S3
            like APIs to make it super simple for user to deal with such
            data/files.
          </p>
          <p>
            This section is to help users to try out some the decent size
            problems (all taken from Kaggle) on BangDB using CLI. Please note,
            we can write application and also do the same, however for this
            section we will stick with CLI.
          </p>
          <p>
            Kindly download the respective helper doc and data to walk you
            through the examples :
          </p>
          <ol>
            <li>
              Credit Risk Analysis (Classification) - It uses BangDB native ML
              components.
            </li>
            <p>
              Kaggle link:{" "}
              <Link
                className="external"
                target={`_blank`}
                href={`https://www.kaggle.com/datasets/sonujha090/xyzcorp-lendingdata`}
              >
                https://www.kaggle.com/datasets/sonujha090/xyzcorp-lendingdata
              </Link>
            </p>
            <p>
              <Link href={`/use-cases/ml-use-cases/credit-risk-analysis`}>
                Get Started
              </Link>
            </p>
            <li>
              Forecasting Product Demand (Regression) - It uses BangDB native ML
              components
            </li>
            <p>
              Kaggle link:{" "}
              <Link
                className="external"
                target={`_blank`}
                href={`https://www.kaggle.com/c/grupo-bimbo-inventory-demand/data`}
              >
                https://www.kaggle.com/c/grupo-bimbo-inventory-demand/data
              </Link>
            </p>
            <p>
              <Link href={`/use-cases/ml-use-cases/forecast-product-demand`}>
                Get Started
              </Link>
            </p>
            <li>
              Credit Card Data Clustering Analysis (Kmeans) - It uses BangDB
              native ML components.
            </li>
            <p>
              Kaggle link:{" "}
              <Link
                className="external"
                target={`_blank`}
                href={`https://www.kaggle.com/arjunbhasin2013/ccdata`}
              >
                https://www.kaggle.com/arjunbhasin2013/ccdata
              </Link>
            </p>
            <p>
              <Link href={`/use-cases/ml-use-cases/data-clustering-analysis`}>
                Get Started
              </Link>
            </p>
            <li>
              Online Shoppers Purchasing Intention (custom external) - DMLC
              xgboost, Sklearn.
            </li>
            <p>
              Data link:{" "}
              <Link
                className="external"
                target={`_blank`}
                href={`https://archive.ics.uci.edu/ml/datasets/Online+Shoppers+Purchasing+Intention+Dataset`}
              >
                https://archive.ics.uci.edu/ml/datasets/Online+Shoppers+Purchasing+Intention+Dataset
              </Link>
            </p>
            <p>
              <Link
                href={`/use-cases/ml-use-cases/online-shoppers-purchasing-intention`}
              >
                Get Started
              </Link>
            </p>
            <li>
              Amazon Sentiment Analysis (IE) - It uses BangDB native ML
              components.
            </li>
            <p>
              Kaggle link:{" "}
              <Link
                className="external"
                target={`_blank`}
                href={`https://www.kaggle.com/bittlingmayer/amazonreviews`}
              >
                https://www.kaggle.com/bittlingmayer/amazonreviews
              </Link>
            </p>
            <p>
              <Link href={`/use-cases/ml-use-cases/amazon-sentiment-analysis`}>
                Get Started
              </Link>
            </p>
            <li>RainFall prediction (custom external) - Tensorflow, Keras.</li>
            <p>
              Kaggle link:{" "}
              <Link
                className="external"
                target={`_blank`}
                href={`https://www.kaggle.com/jsphyg/weather-dataset-rattle-package/`}
              >
                https://www.kaggle.com/jsphyg/weather-dataset-rattle-package
              </Link>
            </p>
            <p>
              <Link href={`/use-cases/ml-use-cases/rainfall-prediction`}>
                Get Started
              </Link>
            </p>
          </ol>
          <aside className="doc-note">
            <strong>Note: </strong>Just take the Data and helper doc as
            mentioned and try it out. No need to download data from Kaggle for
            this, Links are provided so you can see the problem description and
            data.
          </aside>
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
