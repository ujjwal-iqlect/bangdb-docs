import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";
import HighlightedOutput from "../../../components/HighlightedOutput";
import HighlightedJava from "../../../components/HighlightedJava";
import Codebox from "../../../components/Codebox";

export default function SymmAndAsymmKeywords() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Symm and Asymm Keywords - BangDB Graph & Cypher</title>
        <meta
          name="description"
          content="Learn about SYMM and ASYMM keywords. Read the well-written documentation to know more about BangDB 2.0 Graph and Cypher."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Symm and Asymm Keywords - BangDB Graph & Cypher"
        />
        <meta
          property="og:description"
          content="Learn about SYMM and ASYMM keywords. Read the well-written documentation to know more about BangDB 2.0 Graph and Cypher."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="Symm and Asymm Keywords - BangDB Graph & Cypher"
        />
        <meta
          name="twitter:description"
          content="Learn about SYMM and ASYMM keywords. Read the well-written documentation to know more about BangDB 2.0 Graph and Cypher."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">SYMM and ASYMM keywords</h1>
        <div className="article-body">
          <Codebox code={`CREATE GRAPH g1`} />
          <Codebox code={`USE GRAPH g1`} />
          <HighlightedJava
            code={`CREATE (Person:john)-[CALLS]->(Person:mike)

CREATE (Person:mike)-[CALLS]->(Person:john)

CREATE (Person:abbie)-[CALLS]->(Person:polly)

CREATE (Person:polly)-[CALLS]->(Person:john)`}
          />
          <p>
            Here as we see, John calls Mike and then Mike calls John. It will be
            a complicated query to figure out all those who called each other.
            If we simply run following, then it will return results which will
            not be desirable.
          </p>
          <HighlightedJava
            code={`S=>(@p1 Person:*)-[@c CALLS]->(@p2 Person:*)`}
          />
          <HighlightedOutput
            code={`+------------+-----+------------------------+
|sub         |pred | obj                    |
+------------+-----+------------------------+
|Person:john |CALLS| Person:mike            |
+------------+-----+------------------------+
|Person:abbie|CALLS| Person:polly           |
+------------+-----+------------------------+
|Person:polly|CALLS| Person:john            |
+------------+-----+------------------------+
|Person:mike |CALLS| Person:john            |
+------------+-----+------------------------+`}
          />
          <p>As we see, we get all persons calling other.</p>
          <p>
            Let&apos;s modify it to ensure that we have people calling each
            other. But how do we do that?
          </p>
          <p>
            We somehow need to know the Person1 calling Person2, then connect
            Person2 to Person1 with the same &quot;CALLS&quot; relation. This is
            not easy as we wish to know the list for all the persons (note
            Person:*). The query can become really complicated and it may not
            even be feasible with single query.
          </p>
          <p>
            But if we look closely, we are talking about a relationship which
            are symmetrical to each other. Hence it will be good if we can
            somehow tell that in the query.
          </p>
          <p>
            &quot;SYMM&quot; keyword does exactly that. Look at the query and
            how it simplifies things for us.
          </p>
          <HighlightedJava
            code={`S{SYMM}=>(@p1 Person:*)-[@c CALLS]->(@p2 Person:*)`}
          />
          <HighlightedOutput
            code={`+-----------+-----+-----------+
|sub        |pred |obj        |
+-----------+-----+-----------+
|Person:john|CALLS|Person:mike|
+-----------+-----+-----------+
|Person:mike|CALLS|Person:john|
+-----------+-----+-----------+`}
          />
          <p>
            This is quite powerful, and, in many cases, we need this, having
            &quot;SYMM&quot; solves the problem really elegantly.
          </p>
          <p>
            Let&apos;s modify the query a bit, now we wish to know all persons
            who called someone but didn&apos;t receive call from the people who
            the called.
          </p>
          <p>
            This is quite opposite to &quot;SYMM&quot;, which is
            &quot;ASYMM&quot;, so let&apos;s use &quot;ASYMM&quot; here.
          </p>
          <HighlightedJava
            code={`S{ASYMM}=>(@p1 Person:*)-[@c CALLS]->(@p2 Person:*)`}
          />
          <HighlightedOutput
            code={`+------------+-----+------------+
|sub         |pred |obj         |
+------------+-----+------------+
|Person:abbie|CALLS|Person:polly|
+------------+-----+------------+
|Person:polly|CALLS|Person:john |
+------------+-----+------------+`}
          />
          <p>Now add following triple:</p>
          <HighlightedJava
            code={`CREATE (Person:polly)-[CALLS]->(Person:john)`}
          />
          <p>
            Note that this is a repeated triple, it already exists but still a
            valid triple. Now if we run following query, (Polly, John)
            combination appears twice in the list of all the callers, since she
            has made two calls to John.
          </p>
          <HighlightedJava
            code={`s=>(@p1 Person:*)-[@c CALLS]->(@p2 Person:*); RETURN p1.name AS Caller p2.name AS Callee`}
          />
          <HighlightedOutput
            code={`+------+------+
|Caller|Callee|
+------+------+
|john  |mike  |
+------+------+
|abbie |polly |
+------+------+
|polly |john  |
+------+------+
|polly |john  |
+------+------+
|mike  |john  |
+------+------+`}
          />
          <p>
            But that&apos;s not what we wish to see, we want to know all the
            caller and callee set uniquely. How do we enforce uniqueness for
            (sub, obj) pair?
          </p>
          <p>
            We can use &quot;UNIQUE&quot; keyword here for this, it does exactly
            same.
          </p>
          <HighlightedJava
            code={`s{UNIQUE}=>(@p1 Person:*)-[@c CALLS]->(@p2 Person:*); RETURN p1.name AS Caller p2.name AS Callee`}
          />
          <HighlightedOutput
            code={`+------+------+
|Caller|Callee|
+------+------+
|john  |mike  |
+------+------+
|abbie |polly |
+------+------+
|polly |john  |
+------+------+
|mike  |john  |
+------+------+`}
          />
          <p>
            This is good. Now what if we wish to know all unique callers or
            callee, not at the pair level (i.e., uniqueness at (sub,obj)), but
            simply uniqueness based on what we select in the query (or RETURN
            from the query). This uniqueness is very contextual, let&apos;s see
            what this means.
          </p>
          <p>
            Let&apos;s add another triple where polly again calls someone but
            this time a different person, let&apos;s say Travis.
          </p>
          <HighlightedJava
            code={`CREATE (Person:polly)-[CALLS]->(Person:travis)`}
          />
          <p>
            Now if we run the previous query again and let&apos;s observe the
            result.
          </p>
          <HighlightedJava
            code={`s{UNIQUE}=>(@p1 Person:*)-[@c CALLS]->(@p2 Person:*); RETURN p1.name AS Caller p2.name AS Callee`}
          />
          <HighlightedOutput
            code={`+------+------+
|Caller|Callee|
+------+------+
|john  |mike  |
+------+------+
|abbie |polly |
+------+------+
|polly |john  |
+------+------+
|polly |travis|
+------+------+
|mike  |john  |
+------+------+`}
          />
          <p>
            Here, the sets (Polly, John) and (Polly, Travis) shows up as they
            are unique as a pair. But what if we just want to see caller or
            callee. Look at the following query.
          </p>
          <HighlightedJava
            code={`s{UNIQUE}=>(@p1 Person:*)-[@c CALLS]->(@p2 Person:*); RETURN p1.name AS Caller`}
          />
          <HighlightedOutput
            code={`+------+
|Caller|
+------+
|john  |
+------+
|abbie |
+------+
|polly |
+------+
|polly |
+------+
|mike  |
+------+`}
          />
          <p>
            Here we see Polly appearing twice. Although this is correct from the
            point of view that Polly calls two different persons, so these calls
            are unique, but here in this query we just want to see unique
            callers (not the unique calls).
          </p>
          <p>
            Therefore, there is a context here within the query which is the
            uniqueness is needed for the given attribute which is being returned
            from the query. To do this, we will use uniqueness in context, which
            is UNIQUE_IN_CONTEXT
          </p>
          <HighlightedJava
            code={`s{UNIQUE_IN_CONTEXT}=>(@p1 Person:*)-[@c CALLS]->(@p2 Person:*); RETURN p1.name AS Caller`}
          />
          <HighlightedOutput
            code={`+------+
|Caller|
+------+
|john  |
+------+
|abbie |
+------+
|polly |
+------+
|mike  |
+------+`}
          />
          <p>
            Now we get the right result (in the context) what we were looking
            for.
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
