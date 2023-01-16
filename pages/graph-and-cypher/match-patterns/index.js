import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";
import HighlightedOutput from "../../../components/HighlightedOutput";
import HighlightedJava from "../../../components/HighlightedJava";
import Codebox from "../../../components/Codebox";

export default function CreateAGraphTable() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Match patterns (querying data) - BangDB Graph & Cypher</title>
        <meta name="description" content="" />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Match patterns (querying data) - BangDB Graph & Cypher"
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
          content="Match patterns (querying data) - BangDB Graph & Cypher"
        />
        <meta name="twitter:description" content="" />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">Match patterns (querying data)</h1>
        <div className="article-body">
          <p>
            Match patterns (querying data) In BangDB we follow a similar to
            Cypher format for matching data or preferably querying data.
            However, BangDB doesn&apos;t use &apos;MATCH&apos; keyword/clause
            for the same instead it uses something like &lt;var_name&gt;=&gt;
            before the query.
          </p>
          <p>For ex: S=&gt;</p>
          <p>
            To find the data we&apos;ve created so far, we can start looking for
            all nodes labelled with the <em>Movie</em> label.
          </p>
          <HighlightedJava code={`S=>(Movie:*)`} />
          <HighlightedOutput
            code={`{
   "num_items":2,
   "nodes":[
      "{\"released\":1994,\"label\":\"Movie\",\"name\":\"Forrest Gump\",\"_pk\":\"889565392:607499282203478465\",\"_v\":1}",
      "{\"title\":\"The Matrix\",\"released\":1997,\"label\":\"Movie\",\"name\":\"Matrix\",\"_pk\":\"889565392:7731255011213178614\",\"_v\":1}"
   ]
}`}
          />
          <aside className="doc-note">
            <strong>Note: </strong>The _pk and _v is added by the db for its
            housekeeping reasons.
          </aside>
          <p>
            We can also look for a specific Movie, like &quot;Forrest Gump&quot;
          </p>
          <HighlightedJava
            code={`S=>(@p "Person:Tom Hanks")-[@r ACTED_IN]->(@m Movie:*); RETURN m.name AS Title, r.roles AS Role`}
          />
          <HighlightedOutput
            code={`+---------------+-----------------------+
|  Role         |      Title            |
+---------------+-----------------------+
| ["Forrest"]   |      Forrest Gump     |
+---------------+-----------------------+`}
          />
          <p>We could also see in json format by setting output as JSON</p>
          <HighlightedOutput
            code={`{
   "rows":[
      {
         "Title":"Forrest Gump",
         "Role":"[\"Forrest\"]"
      }
   ]
}`}
          />
          <p>
            Let&apos;s add another film where Tom Hanks acted in. Since, Tom
            Hanks already exists hence, we may just use the name.
          </p>
          <HighlightedJava
            code={`CREATE (Person:"Tom Hanks")-[ACTED_IN {"roles":["Zachry"]}]->(Movie:"Cloud Atlas" {"released":2012})`}
          />
          <HighlightedOutput
            code={`{
   "errcode":0,
   "msg":[
      "success"
   ]
}`}
          />
          <p>
            Now it&apos;s a good time to create another graph and do following:
          </p>
          <Codebox code={`CREATE GRAPH ex_graph`} />
          <Codebox code={`USE GRAPH ex_graph`} />
          <HighlightedJava
            code={`CREATE (Movie:matrix {"title":"The Matrix", "released":1997})

CREATE (Movie:cloudAtlas {"title":"Cloud Atlas", "released":2012})

CREATE (Movie:forrestGump {"title":"Forrest Gump", "released":1994})

CREATE (Person:keanu {"fullname":"Keanu Reeves", "born":1964})

CREATE (Person:robert {"fullname":"Robert Zemeckis", "born":1951})

CREATE (Person:tom {"fullname":"Tom Hanks", "born":1956})

CREATE (Person:tom)-[ACTED_IN {"roles":["Forrest"]}]->(Movie:forrestGump)

CREATE (Person:tom)-[ACTED_IN {"roles":["Zachry"]}]->(Movie:cloudAtlas)

CREATE (Person:robert)-[DIRECTED]->(Movie:forrestGump)`}
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
