import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../../components/Breadcrumb";
import DocArticle from "../../../../components/DocArticle";

export default function FDconclusion() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Conclusion of Supply chain management use case</title>
        <meta
          name="description"
          content="Conclusion of supply chain management use case - The biggest challenge in supply chain is the inherent complexity of modern supply chains."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Conclusion of Supply chain management use case"
        />
        <meta
          property="og:description"
          content="Conclusion of supply chain management use case - The biggest challenge in supply chain is the inherent complexity of modern supply chains."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="Conclusion of Supply chain management use case"
        />
        <meta
          name="twitter:description"
          content="Conclusion of supply chain management use case - The biggest challenge in supply chain is the inherent complexity of modern supply chains."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">Conclusion</h1>
        <div className="article-body">
          <p>
            The biggest challenge in supply chain management is the inherent
            complexity of modern supply chains. Therefore, none of these
            examples is sufficient enough for decision-making. There are many
            additional questions to answer, which are beyond the scope of this
            scenario.
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
