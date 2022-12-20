import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";
import HighlightedOutput from "../../../components/HighlightedOutput";
import Codebox from "../../../components/Codebox";
import HighlightedJava from "../../../components/HighlightedJava";
import HighlightedCpp from "../../../components/HighlightedCpp";

export default function CreateAGraphTable() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Create graph table</title>
        <meta
          name="description"
          content="Learn how to create a graph table. Read the documentation to know more about BangDB Graph and Cypher."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Create graph table" />
        <meta
          property="og:description"
          content="Learn how to create a graph table. Read the documentation to know more about BangDB Graph and Cypher."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="Create graph table" />
        <meta
          name="twitter:description"
          content="Learn how to create a graph table. Read the documentation to know more about BangDB Graph and Cypher."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">Create graph table</h1>
        <div className="article-body">
          <p>
            We must create and use a graph table before storing and querying
            data. There could be different tables that we can create within a db
            to keep different kinds of network data as we like.
          </p>
          <Codebox code={`USE GRAPH <table_name>`} />
          <p>For example, to create or use table my_graph_table</p>
          <Codebox code={`CREATE GRAPH my_graph_table`} />
        </div>
      </DocArticle>
    </React.Fragment>
  );
}

export async function getServerSideProps(context) {
  return {
    props: { graphSidebar: true },
  };
}
