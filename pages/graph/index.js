import React from "react";
import Head from "next/head";
import Breadcrumb from "../../components/Breadcrumb";
import DocArticle from "../../components/DocArticle";

export default function Graph() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Join Example 3 - BangDB</title>
        <meta
          name="description"
          content="Join Example 3 - Temperature, Pressure and Vibration streams, Joining in active-passive mode. Let's look at an example of IOT scenario."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Join Example 3 - BangDB" />
        <meta
          property="og:description"
          content="Join Example 3 - Temperature, Pressure and Vibration streams, Joining in active-passive mode. Let's look at an example of IOT scenario."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="Join Example 3 - BangDB" />
        <meta
          name="twitter:description"
          content="Join Example 3 - Temperature, Pressure and Vibration streams, Joining in active-passive mode. Let's look at an example of IOT scenario."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle pageTitle={`Graph Processing`}>
        <Breadcrumb text="Getting Started" url="/server-getting-started" />
        <h1 className="article-title">Graph Processing</h1>
        <div className="article-body"></div>
      </DocArticle>
    </React.Fragment>
  );
}

export async function getStaticProps(context) {
  return {
    props: { graph: true },
  };
}
