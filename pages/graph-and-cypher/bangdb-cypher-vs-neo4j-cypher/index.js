import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";
import HighlightedJava from "../../../components/HighlightedJava";

export default function BangdbCypherVSneo4jCypher() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Difference between cypher used by BangDB vs Neo4j</title>
        <meta
          name="description"
          content="Cypher - BangDB vs Neo4j - Learn about basic differences between BangDB and Neo4j from a Cypher point of view."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Difference between cypher used by BangDB vs Neo4j"
        />
        <meta
          property="og:description"
          content="Cypher - BangDB vs Neo4j - Learn about basic differences between BangDB and Neo4j from a Cypher point of view."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="Difference between cypher used by BangDB vs Neo4j"
        />
        <meta
          name="twitter:description"
          content="Cypher - BangDB vs Neo4j - Learn about basic differences between BangDB and Neo4j from a Cypher point of view."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">
          Difference between cypher used by BangDB vs Neo4j
        </h1>
        <div className="article-body">
          <p>Following are basic differences from Cypher point of view:</p>
          <ul>
            <li>
              For all queries (retrieval), the query starts with
              &quot;&lt;token&gt;=&gt;&quot;, instead of &quot;Match&quot;
            </li>
            <li>
              The queries could be nested using the &quot;[]&quot; bracket which
              becomes subject for subsequent nodes. For example, look at
              following two queries.
            </li>
          </ul>
          <HighlightedJava
            code={`S2=>[S1=>(Person:*)-[ACTED_IN]->(Movie:*)]-[LIVES_IN]->(City:Bangalore)`}
          />
          <HighlightedJava
            code={`S1=>(Person:*)-[ACTED_IN]->(Movie:*)-[DIRECTED_BY]->(Person:*)-[LIVES_IN]->(City:SFO)`}
          />
          <p>
            First one will first fetch all the persons who have acted in any
            movies, and who lives in city Bangalore.
          </p>
          <p>
            Second one will fetch all the persons who live in &quot;SFO&quot;
            who have directed movies in which some persons have acted in etc…
          </p>
          <ul>
            <li>
              Specific methods like; #ALL_PATH, #SHORT_PATH, #ALL_NODE is
              supported to find all paths between any two nodes, shortest path
              between two nodes and all nodes in between two nodes.
            </li>
            <li>
              Here we use &quot;label:name&quot; instead of
              &quot;name&quot;:&quot;label&quot; as in Cypher. This is mainly
              because it&apos;s more intuitive to use labels first and then
              name. If we wish to take any name, we can put &apos;*&apos; in
              place of it. In-fact we can put &apos;*&apos; for label or
              relation as well.
            </li>
            <li>
              The variable or alias begins with&apos;@&apos;, like (@p
              Person:Sachin) etc. This is handy for selection of
              attributes/properties from a node or relation
            </li>
            <li>
              All data science or ML related activities can be done using the
              Keywords like &quot;SIMILARITY&quot;, &quot;CLUSTER&quot;,
              &quot;CENTRALITY&quot;, &quot;COMMUNITY_DETECTION&quot;,
              &quot;GROUPS&quot; to leverage inbuilt dedicated ML+Graph
              processing. However, we can bring the entire ML algos to Graph by
              simply using &quot;ML_ALGO&quot; keyword along with the
              model&apos;s name that is trained within BangDB.
            </li>
          </ul>
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
