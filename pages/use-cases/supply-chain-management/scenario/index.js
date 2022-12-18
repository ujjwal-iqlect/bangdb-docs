import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../../components/Breadcrumb";
import DocArticle from "../../../../components/DocArticle";
import Image from "next/image";

export default function SCMscenario() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Scenario - Supply chain management use case</title>
        <meta
          name="description"
          content="Scenario of supply chain management use case - The generic supply chain begins with the sourcing and extraction of raw materials."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Scenario - Supply chain management use case"
        />
        <meta
          property="og:description"
          content="Scenario of supply chain management use case - The generic supply chain begins with the sourcing and extraction of raw materials."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="Scenario - Supply chain management use case"
        />
        <meta
          name="twitter:description"
          content="Scenario of supply chain management use case - The generic supply chain begins with the sourcing and extraction of raw materials."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">Scenario</h1>
        <div className="article-body">
          <p>
            The generic supply chain begins with the sourcing and extraction of
            raw materials. The raw materials are taken by a logistics provider
            to a supplier and then to a manufacturer, or probably to various
            manufacturers that refine and process them into a finished product.
          </p>
          <p>
            Afterward, it goes to a wholesaler as the finished product, which is
            next delivered to a retailer. The retailer sells the product in a
            store to consumers.
          </p>
          <Image
            src="https://bangdb.com/wp-content/uploads/2022/04/word-image.png"
            alt="Supply chain"
            width="741"
            height="93"
          />
          <p>
            <strong>Example</strong> : The Dairy Supply Chain
          </p>
          <Image
            src="https://bangdb.com/wp-content/uploads/2022/04/word-image-1.png"
            alt="Dairy Supply chain"
            width="741"
            height="93"
          />
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
