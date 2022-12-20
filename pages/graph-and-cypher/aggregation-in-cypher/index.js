import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";
import HighlightedOutput from "../../../components/HighlightedOutput";
import HighlightedJava from "../../../components/HighlightedJava";
import HighlightedCpp from "../../../components/HighlightedCpp";

export default function AggregationInCypher() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Aggregation in cypher - BangDB Graph & Cypher</title>
        <meta name="description" content="" />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Aggregation in cypher - BangDB Graph & Cypher"
        />
        <meta property="og:description" content="" />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="Aggregation in cypher - BangDB Graph & Cypher"
        />
        <meta name="twitter:description" content="" />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">Aggregation in cypher</h1>
        <div className="article-body">
          <p>
            Aggregation in Cypher (for BangDB) just works. Users select
            aggregate columns along with non-aggregated columns. The
            non-aggregated columns become groupby keys.
          </p>
          <p>
            To find out how often an actor and director worked together, run the
            following:
          </p>
          <HighlightedJava
            code={`S=>(@p Person:*)-[@d DIRECTED]->(@m Movie:*)<-[@a ACTED_IN]-(@p2 Person:*); RETURN p2.name AS actor, p.name AS director, COUNT(*) AS collabs`}
          />
          <HighlightedOutput
            code={`+-------+-----------+---------+
| actor | director  | collabs |
+-------+-----------+---------+
| tom   | robert    | 1       |
+-------+-----------+---------+`}
          />
          <p>To find how many times actors have had appearances</p>
          <HighlightedJava
            code={`S=>(@p Person:*)-[@a ACTED_IN]->(@m Movie:*); RETURN p.fullname AS actor, COUNT(*) AS appearances`}
          />
          <HighlightedOutput
            code={`+---------------+------------------+
| actor         | appearances      |
+---------------+------------------+
| Tom Hanks     | 2                |
+---------------+------------------+`}
          />
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
