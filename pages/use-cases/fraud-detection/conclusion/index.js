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
        <title>Conclusion of Fraud detection use case</title>
        <meta
          name="description"
          content="Conclusion of fraud detection - The data we have used here is fake. Furthermore, fraudsters could use advanced techniques to avoid detection."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Conclusion of Fraud detection use case"
        />
        <meta
          property="og:description"
          content="Conclusion of fraud detection - The data we have used here is fake. Furthermore, fraudsters could use advanced techniques to avoid detection."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="Conclusion of Fraud detection use case"
        />
        <meta
          name="twitter:description"
          content="Conclusion of fraud detection - The data we have used here is fake. Furthermore, fraudsters could use advanced techniques to avoid detection."
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
            The data we have used here is fake. Furthermore, the fraudsters
            could use more advanced techniques to avoid detection. Nevertheless,
            improving the approach of identifying fraudulent patterns and
            looking for them can be used successfully to fight against fraud.
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
