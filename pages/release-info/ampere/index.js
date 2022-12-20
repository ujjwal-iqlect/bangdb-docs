import React from "react";
import Head from "next/head";
import Link from "next/link";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";

export default function AmpereReleaseInfo() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Ampere Release Info - BangDB</title>
        <meta
          name="description"
          content="Ampere Release Info - Ampere is BangDB stack on cloud. Goal of Ampere is to be no-code platform for building applications or solutions"
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Ampere Release Info - BangDB" />
        <meta
          property="og:description"
          content="Ampere Release Info - Ampere is BangDB stack on cloud. Goal of Ampere is to be no-code platform for building applications or solutions"
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="Ampere Release Info - BangDB" />
        <meta
          name="twitter:description"
          content="Ampere Release Info - Ampere is BangDB stack on cloud. Goal of Ampere is to be no-code platform for building applications or solutions"
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">Ampere Release Info</h1>
        <div className="article-body">
          <p>
            Ampere is BangDB stack on cloud. Goal of Ampere Release is to be
            no-code platform for building applications or solutions for
            different domains and uses cases. With convergence in place, Ampere
            provides following features on the cloud:
          </p>
          <ul>
            <li>NoSQL Database</li>
            <li>Stream Processing</li>
            <li>Machine Learning</li>
            <li>Graph Processing</li>
          </ul>
          <p>
            Users can subscribe to Ampere and get the resources provisioned on
            cloud as SaaS. The dashboard offers a simple and consistent UI to
            enable users to create solutions following simple workflows. It also
            provides users the capabilities to take actions from the platform in
            automated manner. Further, charts can be created for real-time
            continuous monitoring of the data.
          </p>
          <p>Some of the benefits of using the platform are following</p>
          <ul>
            <li>Accelerated time to market</li>
            <li>Continuous and real-time intelligence</li>
            <li>No stitching of different silos, get started immediately</li>
            <li>AI integration allows autoML</li>
            <li>Native Graph provides lot more efficient models</li>
            <li>Stream processing to find anomalies, patterns</li>
            <li>Huge cost advantage</li>
            <li>Highest performance for IOPS - fastest in the market</li>
            <li>Build modern apps, without any coding</li>
          </ul>
          <p>
            User can subscribe get started free and later can upgrade based on
            their requirements Please see the pricing details{" "}
            <Link target="_blank" href={`https://bangdb.com/pricing`}>
              here
            </Link>
          </p>
        </div>
      </DocArticle>
    </React.Fragment>
  );
}

export async function getServerSideProps(context) {
  return {
    props: { releasSidebar: true },
  };
}
