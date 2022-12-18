import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";

export default function GeneralInformation() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>The Document Structure - BangDB REST API</title>
        <meta
          name="description"
          content="Document Structure - This documentation covers the REST APIs for DB, Stream Processing, Machine Learning, Resource Manager, Graph Processing and Notification."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="The Document Structure - BangDB REST API"
        />
        <meta
          property="og:description"
          content="Document Structure - This documentation covers the REST APIs for DB, Stream Processing, Machine Learning, Resource Manager, Graph Processing and Notification."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="The Document Structure - BangDB REST API"
        />
        <meta
          name="twitter:description"
          content="Document Structure - This documentation covers the REST APIs for DB, Stream Processing, Machine Learning, Resource Manager, Graph Processing and Notification."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">The Document Structure</h1>
        <div className="article-body">
          <p>
            The document covers the APIs for Database, Stream Processing,
            Machine Learning, Resource Manager (BRS), Graph Processing and
            Notification. There are other configuration, replication, cluster
            management etc. APIs, but they are not the focus of this document at
            the moment.
          </p>
          <p>
            It first introduces the API, provides the Method, URI and Body (as
            required). Then it provides example(s) that can be tried using REST
            client such as “postman” or terminal based &quot;curl&quot;. It
            provides curl command that could be cut and pasted directly for
            trying out. However, it&apos;s recommended to use
            &quot;postman&quot; or similar tools as they offer more UI based
            features.
          </p>
          <p>
            User can implement their own client using these REST API. Dashboard
            is such an example. We have implement our own dashboard which uses
            these REST API from react framework.
          </p>
        </div>
      </DocArticle>
    </React.Fragment>
  );
}

export async function getServerSideProps(context) {
  return {
    props: { apiSidebar: true },
  };
}
