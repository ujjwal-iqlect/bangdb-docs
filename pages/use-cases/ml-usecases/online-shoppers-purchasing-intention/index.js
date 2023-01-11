import React from "react";
import Head from "next/head";
import Link from "next/link";
import Breadcrumb from "../../../../components/Breadcrumb";
import DocArticle from "../../../../components/DocArticle";
import Codebox from "../../../../components/Codebox";

export default function MLUConlineShoppersPurchasingIntention() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Online Shoppers Purchasing Intention - ML use cases</title>
        <meta
          name="description"
          content="Online Shoppers Purchasing Intention ML use case - This case requires developing a customer segmentation to define marketing strategy."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Online Shoppers Purchasing Intention - ML use cases"
        />
        <meta
          property="og:description"
          content="Online Shoppers Purchasing Intention ML use case - This case requires developing a customer segmentation to define marketing strategy."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="Online Shoppers Purchasing Intention - ML use cases"
        />
        <meta
          name="twitter:description"
          content="Online Shoppers Purchasing Intention ML use case - This case requires developing a customer segmentation to define marketing strategy."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">
          Online shopper&apos;s purchasing analysis
        </h1>
        <div className="article-body">
          <p>
            Training sentiment model using BangDB IE (Information Extraction)
            module.
          </p>
          <h2>Problem Statement</h2>
          <p>
            We have to categorize opinions expressed in feedback forums. This
            can be utilized for a feedback management system. We classify
            individual comments/reviews.and we also determine overall rating
            based on individual comments/reviews.
          </p>
          <p>
            So that company can get a complete idea on feedback provided by
            customers and can take care of those particular fields. This makes
            more loyal Customers to the company, increase in business, fame,
            brand value, profits.
          </p>
          <p>
            This is taken from Kaggle, here is the{" "}
            <Link
              className="external"
              target={`_blank`}
              href={`https://www.kaggle.com/datasets/bittlingmayer/amazonreviews`}
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
            code={`wget https://bangdb.com/downloads/AmazonSentimentAnalysis.zip`}
          />
          <h2>Objective</h2>
          <p>
            The task is to build a model that will determine the class (level_1
            or level_2) of the text.
          </p>
          <h2>Data description</h2>
          <p>
            This dataset consists of Amazon customer reviews (input text) and
            star ratings (output labels). The training file is in CSV format. We
            have to convert the training file from CSV to JSON for training.
            Converting data from : __label__2 Great necklace: I love the color
            of the stone and how it hangs on my neck.
          </p>
          <p>
            It&apos;s a great necklace for the price. To :{" "}
            {`{"label":"2","text": "Great necklace: I love the color of the stone and how it hangs on my neck. It's a great necklace for the price."}`}
            .
          </p>
          <h2>Algorithm</h2>
          <p>
            We are going to use the algorithm IE_sent which is in build.
            It&apos;s ready to use algorithm only for sentiment analysis. User
            have to provide data in json format and provide labels.
          </p>
          <h2>Approach</h2>
          <p>
            The requirements are : a training file in json format and data type
            is categorical with only two attributes one is label and other is
            text.
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
    props: { mlSidebar: true },
  };
}
