import React from "react";
import Head from "next/head";
import Link from "next/link";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";
import HighlightedOutput from "../../../components/HighlightedOutput";
import HighlightedJava from "../../../components/HighlightedJava";
import Codebox from "../../../components/Codebox";

export default function Similarity() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>SIMILARITY - BangDB Grpah & Cypher</title>
        <meta
          name="description"
          content="Learn about SIMILARITY. Read the well-written documentation to know more about BangDB 2.0 Graph and Cypher."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="SIMILARITY - BangDB Grpah & Cypher"
        />
        <meta
          property="og:description"
          content="Learn about SIMILARITY. Read the well-written documentation to know more about BangDB 2.0 Graph and Cypher."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="SIMILARITY - BangDB Grpah & Cypher"
        />
        <meta
          name="twitter:description"
          content="Learn about SIMILARITY. Read the well-written documentation to know more about BangDB 2.0 Graph and Cypher."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">SIMILARITY</h1>
        <div className="article-body">
          <p>
            One of the major reasons for have graph structure in place is to be
            able to find the context and also entities & their relationships. If
            we have such arrangement in place, then based on the relationships
            we should be able to find the similarities between the entities. And
            if we know how close or far a given set of pair of entities are,
            certain actions could be taken for achieving some goals.
          </p>
          <p>
            For example, if we are able to find two persons&apos; degree of
            similarities then based on this, we could offer products to one or
            the other person with higher likelihood of conversion.
            Recommendations, serving ads, offering deals and discounts,
            personalization etc. As we see there are many use cases that could
            be enabled with this concept if we are able to do this efficiently.
          </p>
          <p>
            Let&apos;s compute the similarities of persons based on their buying
            pattern here in this example:
          </p>
          <Codebox code={`CREATE GRAPH g3`} />
          <Codebox code={`USE GRAPH g3`} />
          <HighlightedJava
            code={`CREATE (person:dan)-[BUYS {"amount": 1.2}]->(product:cookies)

CREATE (person:dan)-[BUYS {"amount": 3.2}]->( product:milk)

CREATE (person:dan)-[BUYS {"amount": 2.2}]->( product:chocolate)

CREATE (person:annie)-[BUYS {"amount": 1.2}]->( product:cucumber)

CREATE (person:annie)-[BUYS {"amount": 3.2}]->( product:milk)

CREATE (person:annie)-[BUYS {"amount": 3.2}]->( product:tomatoes)

CREATE (person:matt)-[BUYS {"amount": 3}]->( product:tomatoes)

CREATE (person:matt)-[BUYS {"amount": 2}]->( product:kale)

CREATE (person:matt)-[BUYS {"amount": 1}]->( product:cucumber)

CREATE (person:jeff)-[BUYS {"amount": 3}]->( product:cookies)

CREATE (person:jeff)-[BUYS {"amount": 2}]->( product:milk)

CREATE (person:brie)-[BUYS {"amount": 1}]->( product:tomatoes)

CREATE (person:brie)-[BUYS {"amount": 2}]->( product:milk)

CREATE (person:brie)-[BUYS {"amount": 2}]->( product:kale)

CREATE (person:brie)-[BUYS {"amount": 3}]->( product:cucumber)

CREATE (person:brie)-[BUYS {"amount": 0.3}]->( product:celery)

CREATE (person:elsa)-[BUYS {"amount": 3}]->( product:chocolate)

CREATE (person:elsa)-[BUYS {"amount": 3}]->( product:milk)

CREATE (person:john)-[BUYS {"amount": 5}]->( product:kale)

CREATE (person:john)-[BUYS {"amount": 2}]->( product:peanut)

CREATE (person:steve)-[BUYS {"amount": 7}]->( product:orange)

CREATE (person:steve)-[BUYS {"amount": 3}]->( product:mango)`}
          />
          <p>Let&apos;s run the query for computations of similarity</p>
          <aside className="doc-note">
            <strong>Note: </strong>The constraint for running this query is that
            you must RETURN the label, for which you wish to compute the
            similarity in the query, having exactly the same name.
          </aside>
          <p>
            In the example below, we return p.name AS person, note that label is
            also &quot;person&quot;.(We must select &apos;person&apos; here. The
            &quot;p.name AS person&quot; is required and the alias has to be
            same as the label, in this case &apos;person&apos;)
          </p>
          <HighlightedJava
            code={`S{SIMILARITY}=>(@p person:*)-[@b BUYS]->(@c product:*); RETURN p.name AS person, b.amount AS amount, c.name AS product`}
          />
          <HighlightedOutput
            code={`{
   "errcode" : 0,
   "msg" : [
      "Successfully computed the similarity and updated the relations (use '_SIMILAR_' relation to retrieve the number)"
   ]
}`}
          />
          <p>
            The above query used the graph data and implicitly trained KMEANS
            model to figure out several centroids. We can define how many such
            centroids to train for by providing the number along with SIMILARITY
            key. For example, to train for 10 centroids we may use following
            query.
          </p>
          <HighlightedJava
            code={`S{SIMILARITY, 10}=>(@p person:*)-[@b BUYS]->(@c product:*); RETURN p.name AS person, b.amount AS amount, c.name AS product`}
          />
          <p>
            The query also updates the graph by adding a relationship _SIMILAR_
            (by default) or by the name as provided in the query. We can provide
            the name of the relationship as follows.
          </p>
          <HighlightedJava code={`S{SIMILARITY(any_rel_name), 10}`} />
          <p>
            Now, we can query and see the result using the relation&apos;s name
            that we provided or default (_SIMILAR_) if we didn&apos;t provide.
            In this case we didn&apos;t provide the similarity relation name
            hence we will use _SIMILAR_
          </p>
          <HighlightedJava
            code={`S=>(@p person:*)-[@b _SIMILAR_]->(@c person:*); RETURN p.name AS person1, c.name AS person2, b.similarity AS similarity`}
          />
          <HighlightedOutput
            code={`+-------+----------+-------+
|person2|similarity|person1|
+-------+----------+-------+
|brie   |0.921595  | annie |
+-------+----------+-------+
|annie  |0.913827  | jeff  |
+-------+----------+-------+
|brie   |0.893442  | jeff  |
+-------+----------+-------+
|annie  |0.905641  | dan   |
+-------+----------+-------+
|brie   |0.905918  | dan   |
+-------+----------+-------+
|jeff   |0.987327  | dan   |
+-------+----------+-------+
|matt   |0.923687  | dan   |
+-------+----------+-------+
|elsa   |0.935471  | dan   |
+-------+----------+-------+
|annie  |0.991040  | matt  |
+-------+----------+-------+
|brie   |0.935316  | matt  |
+-------+----------+-------+
|jeff   |0.928872  | matt  |
+-------+----------+-------+
|annie  |0.957425  | elsa  |
+-------+----------+-------+
|brie   |0.872248  | elsa  |
+-------+----------+-------+
|jeff   |0.942420  | elsa  |
+-------+----------+-------+
|matt   |0.961484  | elsa  |
+-------+----------+-------+`}
          />
          <p>Or, to view only the results where score is greater than 0.95</p>
          <HighlightedJava
            code={`S=>(@p person:*)-[@b _SIMILAR_]->(@c person:*); RETURN p.name AS person1, c.name AS person2, b.similarity AS similarity WHERE similarity > 0.95`}
          />
          <HighlightedOutput
            code={`+-------+----------+-------+
|person2|similarity|person1|
+-------+----------+-------+
|jeff   |0.987327  | dan   |
+-------+----------+-------+
|annie  |0.991040  | matt  |
+-------+----------+-------+
|annie  |0.957425  | elsa  |
+-------+----------+-------+
|matt   |0.961484  | elsa  |
+-------+----------+-------+`}
          />
          <aside className="doc-note">
            <strong>Note: </strong>If you don&apos;t wish to update the graph by
            adding _SIMILAR_ relationships between the nodes with similarity
            score then you can use the keyword &quot;SIMILARITY_TEST&quot;. And
            in this case BangDB won&apos;t update the graphs instead it will
            compute the scores and return to the user in a structured manner.
          </aside>
          <HighlightedJava
            code={`S{SIMILARITY_TEST}=>(@p person:*)-[@b BUYS]->(@c product:*); RETURN p.name AS person, b.amount AS amount, c.name AS product`}
          />
          <HighlightedOutput
            code={`{
   "pairs":[
      {
         "similarity":0.93547131724717,
         "A":"dan",
         "B":"elsa"
      },
      {
         "A":"dan",
         "B":"matt",
         "similarity":0.923687462697141
      },
      {
         "B":"jeff",
         "A":"dan",
         "similarity":0.98732715961013
      },
      {
         "similarity":0.905641110794971,
         "A":"dan",
         "B":"annie"
      },
      {
         "similarity":0.905918283036807,
         "A":"dan",
         "B":"brie"
      },
      {
         "similarity":0.961483504509432,
         "A":"elsa",
         "B":"matt"
      },
      {
         "A":"elsa",
         "B":"jeff",
         "similarity":0.942420408659908
      },
      {
         "similarity":0.957425185618457,
         "B":"annie",
         "A":"elsa"
      },
      {
         "B":"brie",
         "A":"elsa",
         "similarity":0.872247612472379
      },
      {
         "similarity":0.928872132753044,
         "A":"matt",
         "B":"jeff"
      },
      {
         "similarity":0.991039526450287,
         "A":"matt",
         "B":"annie"
      },
      {
         "B":"brie",
         "A":"matt",
         "similarity":0.935316150022884
      },
      {
         "A":"jeff",
         "B":"annie",
         "similarity":0.913827151108844
      },
      {
         "similarity":0.89344184143706,
         "B":"brie",
         "A":"jeff"
      },
      {
         "similarity":0.921594885722905,
         "A":"annie",
         "B":"brie"
      }
   ],
   "label":"person"
}`}
          />
          <p>
            This concludes short introduction for the Graph in BangDB, however,
            please go to <Link href={`/`}>https://bangdb.com/developer</Link>{" "}
            for detail discussion and examples for the same.
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
