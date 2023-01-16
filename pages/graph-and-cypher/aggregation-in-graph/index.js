import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";
import HighlightedOutput from "../../../components/HighlightedOutput";
import HighlightedJava from "../../../components/HighlightedJava";
import Codebox from "../../../components/Codebox";

export default function AggregationInGraph() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Aggregation in graph - BangDB Graph & Cypher</title>
        <meta
          name="description"
          content="Learn about aggregation in graph. Read the well-written documentation to know more about BangDB 2.0 Graph and Cypher."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Aggregation in graph - BangDB Graph & Cypher"
        />
        <meta
          property="og:description"
          content="Learn about aggregation ig Graph. Read the well-written documentation to know more about BangDB 2.0 Graph and Cypher."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="Aggregation in graph - BangDB Graph & Cypher"
        />
        <meta
          name="twitter:description"
          content="Learn about aggregation gn Graph. Read the well-written documentation to know more about BangDB 2.0 Graph and Cypher."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">Aggregation in graph</h1>
        <div className="article-body">
          <p>The Graph in BangDB supports following aggregations:</p>
          <div className="table-container">
            <table>
              <tbody>
                <tr>
                  <th>Aggregation</th>
                  <th>Description</th>
                </tr>
                <tr>
                  <td>COUNT</td>
                  <td>
                    counting, this can be used for numerical or
                    categorical/string attributes
                  </td>
                </tr>
                <tr>
                  <td>UCOUNT</td>
                  <td>
                    unique counting, this can be used for numerical or
                    categorical/string attributes
                  </td>
                </tr>
                <tr>
                  <td>AVG</td>
                  <td>average for numerical type</td>
                </tr>
                <tr>
                  <td>MIN</td>
                  <td>minimum for numerical type</td>
                </tr>
                <tr>
                  <td>MAX</td>
                  <td>maxium for numerical type</td>
                </tr>
                <tr>
                  <td>STD</td>
                  <td>standard deviation for numerical type</td>
                </tr>
                <tr>
                  <td>SUM</td>
                  <td>sum/total for numerical type</td>
                </tr>
                <tr>
                  <td>EXKURT</td>
                  <td>kurtosis for numerical type</td>
                </tr>
                <tr>
                  <td>SKEW</td>
                  <td>skewness for numerical type</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            But we often want to aggregate something group by something else.
            For example, average sales per region, max number of products bought
            per category, number of unique visitors per page of a website etc.
            There could also be more than one group by variables, for example,
            total number of phones purchased in a period of time group by model
            and color, etc.
          </p>
          <p>
            The Cypher in BangDB supports these queries in elegant way. We just
            need to tell what aggregation we wish to do on a particular
            attribute and then select another attribute in the same query which
            will be used as group by automatically. Users don&apos;t need to
            specifically define the group by attributes in the query.
          </p>
          <p>
            Also, it&apos;s important to note that we can select as many
            different aggregates as we wish and different set of groupby keys
            (non-aggregate keys in the RETURN statement) as we need. Now
            it&apos;s time to look at few queries Let&apos;s create different
            graph and add few triples.
          </p>
          <Codebox code={`CREATE GRAPH g2`} />
          <Codebox code={`USE GRAPH g2`} />
          <HighlightedJava
            code={`CREATE (person:sachin)-[BUYS {"amount":211.45}]->(product:computer)

CREATE (person:sachin)-[BUYS {"amount":123.75}]->(product:computer)

CREATE (person:manu)-[BUYS {"amount":231.2}]->(product:hardware)

CREATE (person:ramesh)-[BUYS {"amount":345}]->(product:grocery)

CREATE (person:ramesh)-[BUYS {"amount":165.5}]->(product:electronics)`}
          />
          <p>
            Let&apos;s count different persons and number of times they bought
            any product
          </p>
          <HighlightedJava
            code={`S=>(@p person:*)-[@b BUYS]->(@s product:*); RETURN p.name AS buyer, COUNT(s.name) AS NUMT`}
          />
          <HighlightedOutput
            code={`+-------+--------+
|buyer  |NUMT    |
+-------+--------+
|manu   |1       |
+-------+--------+
|ramesh |2       |
+-------+--------+
|sachin |2       |
+-------+--------+`}
          />
          <p>
            As you see, BangDB used buyer as group by attribute and counted the
            number of times they purchased any products.
          </p>
          <p>
            Let&apos;s count different persons and number of times they bought
            different unique products.
          </p>
          <HighlightedJava
            code={`S=>(@p person:*)-[@b BUYS]->(@s product:*); RETURN p.name AS buyer, COUNT(s.name) AS NUMT, UCOUNT(s.name) AS unique_prods`}
          />
          <HighlightedOutput
            code={`+------+----+------------+
|buyer |NUMT|unique_prods|
+------+----+------------+
|manu  |1   | 1          |
+------+----+------------+
|ramesh|2   | 2          |
+------+----+------------+
|sachin|2   | 1          |
+------+----+------------+`}
          />
          <p>Here, we have two aggregates, with single group by.</p>
          <p>
            Let&apos;s now also see average sales values (price) for each person
            along with other values that we are retrieving.
          </p>
          <HighlightedJava
            code={`S=>(@p person:*)-[@b BUYS]->(@s product:*); RETURN p.name AS buyer, COUNT(s.name) AS NUMT, UCOUNT(s.name) AS unique_prods, AVG(b.amount) AS avg_price`}
          />
          <HighlightedOutput
            code={`+------+----+------------+----------+
|buyer |NUMT|unique_prods|avg_price |
+------+----+------------+----------+
|manu  |1   | 1          |231.200000|
+------+----+------------+----------+
|ramesh|2   | 2          |255.250000|
+------+----+------------+----------+
|sachin|2   | 1          |167.600000|
+------+----+------------+----------+`}
          />
          <p>
            Now, let&apos;s sort the result by avg_price and limit it to 2 rows
            only
          </p>
          <HighlightedJava
            code={`S=>(@p person:*)-[@b BUYS]->(@s product:*); RETURN p.name AS buyer, COUNT(s.name) AS NUMT, UCOUNT(s.name) AS unique_prods, AVG(b.amount) AS avg_price SORT_DESC avg_price LIMIT 2`}
          />
          <HighlightedOutput
            code={`+------+----+------------+----------+
|buyer |NUMT|unique_prods|avg_price |
+------+----+------------+----------+
|ramesh|2   |2           |255.250000|
+------+----+------------+----------+
|manu  |1   |1           |231.200000|
+------+----+------------+----------+`}
          />
          <p>
            This is as simple as that. Let&apos;s now see standard deviation,
            min, max and sum as well.
          </p>
          <HighlightedJava
            code={`S=>(@p person:*)-[@b BUYS]->(@s product:*); RETURN p.name AS buyer, COUNT(s.name) AS NUMT, UCOUNT(s.name) AS unique_prods, AVG(b.amount) AS avg_sales, MIN(b.amount) AS MIN_Price MAX(b.amount) AS MAX_PRICE STD(b.amount) AS STD_DEV_AMOUNT SUM(b.amount) AS SUM_TOTAL`}
          />
          <HighlightedOutput
            code={`+------+----+------------+----------+----------+--------------+----------+----------+
|buyer |NUMT|unique_prods|avg_sales |SUM_TOTAL |STD_DEV_AMOUNT|MAX_PRICE |MIN_Price |
+------+----+------------+----------+----------+--------------+----------+----------+
|manu  |1   | 1          |231.200000|231.200000|0             |231.200000|231.200000|
+------+----+------------+----------+----------+--------------+----------+----------+
|ramesh|2   | 2          |255.250000|510.500000|126.925667    |345       |165.500000|
+------+----+------------+----------+----------+--------------+----------+----------+
|sachin|2   | 1          |167.600000|335.200000|62.013265     |211.450000|123.750000|
+------+----+------------+----------+----------+--------------+----------+----------+`}
          />
          <p>
            Now let&apos;s say we wish to see unique results for buyer and
            product he/she bought
          </p>
          <HighlightedJava
            code={`S=>(@p person:*)-[@b BUYS]->(@s product:*); RETURN p.name AS buyer, s.name AS product`}
          />
          <HighlightedOutput
            code={`+-----------+------+
|product    |buyer |
+-----------+------+
|hardware   |manu  |
+-----------+------+
|computer   |sachin|
+-----------+------+
|computer   |sachin|
+-----------+------+
|grocery    |ramesh|
+-----------+------+
|electronics|ramesh|
+-----------+------+`}
          />
          <p>
            Here we see that the pair sachin and computer are repeating, which
            is true since sachin bought computer twice, but we wish to see
            unique pair and for this we will use UNIQUE keyword
          </p>
          <HighlightedJava
            code={`S{UNIQUE}=>(@p person:*)-[@b BUYS]->(@s product:*); RETURN p.name AS buyer, s.name AS product`}
          />
          <HighlightedOutput
            code={`+-----------+------+
|product    |buyer |
+-----------+------+
|hardware   |manu |
+-----------+------+
|computer   |sachin|
+-----------+------+
|grocery    |ramesh|
+-----------+------+
|electronics|ramesh|
+-----------+------+`}
          />
          <p>
            It gives us now the desired results. Now let&apos;s list unique
            buyers.
          </p>
          <HighlightedJava
            code={`S{UNIQUE}=>(@p person:*)-[@b BUYS]->(@s product:*); RETURN p.name AS buyer`}
          />
          <HighlightedOutput
            code={`+------+
|buyer |
+------+
|manu  |
+------+
|sachin|
+------+
|ramesh|
+------+
|ramesh|
+------+`}
          />
          <p>
            Here we were expecting only unique names, but we see
            &quot;ramesh&quot; repeated twice. This is because the
            &quot;UNIQUE&quot; keyword enforces uniqueness of (sub, obj) pair
            and ramesh bought two different products hence they are unique
            together.
          </p>
          <p>
            In order to see unique list based on what we wish to RETURN then we
            should use &quot;UNIQUE_IN_CONTEXT&quot; since we want query to
            simply return unique values based on what we return (or select).
          </p>
          <HighlightedJava
            code={`S{UNIQUE_IN_CONTEXT}=>(@p person:*)-[@b BUYS]->(@s product:*); RETURN p.name AS buyer`}
          />
          <HighlightedOutput
            code={`+------+
|buyer |
+------+
|manu  |
+------+
|sachin|
+------+
|ramesh|
+------+`}
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
