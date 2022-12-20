import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";
import HighlightedOutput from "../../../components/HighlightedOutput";
import HighlightedJava from "../../../components/HighlightedJava";

export default function CreateAGraphTable() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Filter results - BangDB Graph & Cypher</title>
        <meta
          name="description"
          content="Learn how to filter results. Read the well-written documentation to know more about BangDB 2.0 Graph and Cypher."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Filter results - BangDB Graph & Cypher"
        />
        <meta
          property="og:description"
          content="Learn how to filter results. Read the well-written documentation to know more about BangDB 2.0 Graph and Cypher."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="Filter results - BangDB Graph & Cypher"
        />
        <meta
          name="twitter:description"
          content="Learn how to filter results. Read the well-written documentation to know more about BangDB 2.0 Graph and Cypher."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">Filter results</h1>
        <div className="article-body">
          <p>Select all the people/persons</p>
          <HighlightedJava
            code={`S=>(@p Person:*); RETURN p.name AS name, p.fullname AS FullName`}
          />
          <HighlightedOutput
            code={`+----------+-----------------------+
|name      | FullName              |
+----------+-----------------------+
|tom       | Tom Hanks             |
+----------+-----------------------+
|keanu     | Keanu Reeves          |
+----------+-----------------------+
|robert    | Robert Zemeckis       |
+----------+-----------------------+`}
          />
          <HighlightedJava
            code={`S=>(@p Person:*); RETURN COUNT(*) AS People`}
          />
          <HighlightedOutput
            code={`{
   "count" : 3
}`}
          />
          <p>Select movie title &quot;The Matrix&quot;</p>
          <HighlightedJava code={`S=>(Movie:* {title="The Matrix"})`} />
          <HighlightedOutput
            code={`{
   "num_items" : 1,
   "nodes" : [
      "{\"title\":\"The Matrix\",\"released\":1997,\"label\":\"Movie\",\"name\":\"matrix\",\"_pk\":\"889565392:7007891359330926487\",\"_v\":1}
   ]
}`}
          />
          <p>
            BangDB allows conditions to be also defined for filtering data, such
            that movie released &gt; 2000
          </p>
          <HighlightedJava
            code={`S=>(@p Person:*)-[@r ACTED_IN]->(@m Movie:* {released> 2000}); RETURN p.fullname AS FullName, r.roles AS Roles, m.title AS Title`}
          />
          <HighlightedOutput
            code={`+-------------+----------------+----------------+
| FullName    |  Roles         |   Title        |
+-------------+----------------+----------------+
| Tom Hanks   | ["Zachry"]     |   Cloud Atlas  |
+-------------+----------------+----------------+`}
          />
          <p>Or in JSON</p>
          <HighlightedOutput
            code={`{
   "rows" : [
       {
         "Title" : "Cloud Atlas",
         "Roles" : "[\"Zachry\"]",
         "FullName" : "Tom Hanks"
      }
   ]
}`}
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
