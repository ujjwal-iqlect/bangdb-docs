import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";
import HighlightedOutput from "../../../components/HighlightedOutput";
import HighlightedJava from "../../../components/HighlightedJava";
import HighlightedCpp from "../../../components/HighlightedCpp";

export default function CreateAGraphTable() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Create data - BangDB Graph & Cypher</title>
        <meta
          name="description"
          content="Learn how to create data. Read the well-written documentation to know more about BangDB 2.0 Graph and Cypher."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Create data - BangDB Graph & Cypher"
        />
        <meta
          property="og:description"
          content="Learn how to create data. Read the well-written documentation to know more about BangDB 2.0 Graph and Cypher."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="Create data - BangDB Graph & Cypher"
        />
        <meta
          name="twitter:description"
          content="Learn how to create data. Read the well-written documentation to know more about BangDB 2.0 Graph and Cypher."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">Create data</h1>
        <div className="article-body">
          <p>&apos;CREATE&apos; keyword should be used to create data.</p>
          <p>
            Let&apos;s create movie Matrix (single node).
            <HighlightedJava
              code={`CREATE (Movie:Matrix { "title":"The Matrix","released":1997 })`}
            />
            <HighlightedOutput
              code={`{
   "msg" : [
      "success"
   ],
   "errcode" : 0
}`}
            />
            <p>
              Let&apos;s create triple here, Tom Hanks and Forrest Gump nodes
              with relation ACTED_IN as predicate.
            </p>
            <HighlightedJava
              code={`CREATE (Person:"Tom Hanks" { "born":1956 })-[ACTED_IN { "roles": ["Forrest"]}]->(Movie:"Forrest Gump" { "released":1994 })`}
            />
            <HighlightedOutput
              code={`{
   "msg" : [
      "success"
   ],
   "errcode" : 0
}`}
            />
            <HighlightedJava
              code={`CREATE ("Person:Robert Zemeckis" { "born":1951 })-[DIRECTED]->("Movie:Forrest Gump")`}
            />
            <HighlightedOutput
              code={`{
   "msg" : [
      "success"
   ],
   "errcode" : 0
}`}
            />
          </p>
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
