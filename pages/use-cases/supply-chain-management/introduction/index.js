import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../../components/Breadcrumb";
import DocArticle from "../../../../components/DocArticle";

export default function SCMintro() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Introduction - Supply chain management use case</title>
        <meta
          name="description"
          content="Supply chain management use case introduction - Supply chain is an entire system of producing and delivering a product or service, from the very beginning stage of sourcing..."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Introduction - Supply chain management use case"
        />
        <meta
          property="og:description"
          content="Supply chain management use case introduction - Supply chain is an entire system of producing and delivering a product or service, from the very beginning stage of sourcing..."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="Introduction - Supply chain management use case"
        />
        <meta
          name="twitter:description"
          content="Supply chain management use case introduction - Supply chain is an entire system of producing and delivering a product or service, from the very beginning stage of sourcing..."
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
            A supply chain is an entire system of producing and delivering a
            product or service, from the very beginning stage of sourcing the
            raw materials to the final delivery of the product or service to
            end-users. The supply chain lays out all aspects of the production
            process, including the activities involved at each stage,
            information that is being communicated, natural resources that are
            transformed into useful materials, human resources, and other
            components that go into the finished product or service.
          </p>
          <p>
            Mapping out a supply chain is one of the critical steps in
            performing an external analysis in a strategic planning process. The
            importance of clearly laying out the supply chain is that it helps a
            company define its own market and decide where it wants to be in the
            future. In developing corporate-level strategies, a company often
            needs to make decisions on whether to operate a single line of
            business or enter into other related or unrelated industries.
          </p>
          <p>
            Each stage of a supply chain is essentially a different industry,
            for example, raw material extraction and manufacturing. The supply
            chain enables a company to understand others that are involved in
            each of the stages, and thereby provides some insights on the
            attractiveness or competitiveness in industries the company might
            want to enter in the future.
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
