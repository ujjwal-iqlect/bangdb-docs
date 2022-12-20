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
        <title>Query for no direct relation - BangDB Graph & Cypher</title>
        <meta
          name="description"
          content="Learn about query for no direct relation. Read the well-written documentation to know more about BangDB 2.0 Graph and Cypher."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Query for no direct relation - BangDB Graph & Cypher"
        />
        <meta
          property="og:description"
          content="Learn about query for no direct relation. Read the well-written documentation to know more about BangDB 2.0 Graph and Cypher."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="Query for no direct relation - BangDB Graph & Cypher"
        />
        <meta
          name="twitter:description"
          content="Learn about query for no direct relation. Read the well-written documentation to know more about BangDB 2.0 Graph and Cypher."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">Query for no direct relation</h1>
        <div className="article-body">
          <p>First create a graph table</p>
          <Codebox code={`CREATE GRAPH g`} />
          <Codebox code={`USE GRAPH g`} />
          <p>Let&apos;s create following nodes and triples</p>
          <HighlightedJava
            code={`CREATE (Person:john {"firstname":"John"})

CREATE (Person:joe {"firstname":"Joe"})

CREATE (Person:steve {"firstname":"Steve"})

CREATE (Person:sara {"firstname":"Sara"})

CREATE (Person:maria {"firstname":"Maria"})

CREATE (Person:john)-[FRIEND]->(Person:joe)-[FRIEND]->(Person:steve)

CREATE (Person:john)-[FRIEND]->(Person:sara)-[FRIEND]->(Person:maria)`}
          />
          <p>
            Query which finds a user called &apos;John&apos; and
            &apos;John&apos;s&apos; friends (though not his direct friends)
            before returning both &apos;John&apos; and any friends-of-friends
            that are found.
          </p>
          <HighlightedJava
            code={`S=>(@p Person:john)-[@f FRIEND]->(@p2 Person:*)-[@f2 FRIEND]->(@p3 Person:*); RETURN p.name AS self, p3.name AS fof`}
          />
          <HighlightedOutput
            code={`+------+--------+
| self | fof    |
+------+--------+
| john | steve  |
+------+--------+
| john | maria  |
+------+--------+`}
          />
          <h2>Query with pattern in the value/field</h2>
          <p>Next up we will add filtering to set more parts in motion:</p>
          <p>
            We take a list of user names and find all nodes with names from this
            list, match their friends and return only those followed users who
            have a &apos;name&apos; property starting with &apos;S&apos;.
          </p>
          <HighlightedJava
            code={`S=>(@p Person:*)-[@f1 FRIEND]->(@p2 Person:* {name = "s$%"}); RETURN p.name, p2.name`}
          />
          <HighlightedOutput
            code={`+--------+--------+
| name   | name   |
+--------+--------+
| steve  | steve  |
+--------+--------+
| sara   | sara   |
+--------+--------+`}
          />
          <aside className="doc-note">
            <strong>Note: </strong>Adding &apos;$%&apos; at the end of pattern
            will query for all such data where the pattern is satisfied.
          </aside>
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
