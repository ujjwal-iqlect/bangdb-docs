import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";
import Link from "next/link";

export default function DifferenceBetweenBangDBandNeo4j() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Difference between BangDB and Neo4j</title>
        <meta
          name="description"
          content="Difference between BangDB and Neo4j - BangDB covers the core internal features which makes BangDB better than Neo4j."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Difference between BangDB and Neo4j"
        />
        <meta
          property="og:description"
          content="Difference between BangDB and Neo4j - BangDB covers the core internal features which makes BangDB better than Neo4j."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="Difference between BangDB and Neo4j"
        />
        <meta
          name="twitter:description"
          content="Difference between BangDB and Neo4j - BangDB covers the core internal features which makes BangDB better than Neo4j."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">Difference between BangDB and Neo4j</h1>
        <div className="article-body">
          <p>
            Following are basic difference between BangDB and Neo4j from DB
            point of view:
          </p>
          <ul>
            <li>
              BangDB is multi-model database which can deal with most of the
              data types that we come across in real world scenario. This means
              we can store different data as it should be rather than forcing it
              to a particular structure or the other.
            </li>
            <li>
              BangDB has natively integrated Graph with streaming component in
              the DB, this makes it very easy for users to create graph as data
              streams into the system. Further, it allows users to apply CEP on
              the data to find patterns/anomaly in continuous manner.
            </li>
            <li>
              AI is native entity of BangDB, which means we don&apos;t need a
              silo or component external to the database. This is very important
              for simplification of model building/training exercise and also
              for automation of the processes. Further ontologies could be
              created which allows users to build graph in probabilistic manner
              using a text file/data.
            </li>
            <li>
              BangDB performance (IOPS) is much better than Neo4j, this helps in
              dealing with fast moving data for real-time analysis, and also for
              better efficiency. Creating nodes and relations 10X faster in
              BangDB and for triple creation, BangDB goes beyond 100X for data
              set which is large enough (10M + nodes and entities).
            </li>
            <li>
              BangDB can be used as full-fledged NoSQL DB which offers rich
              support for data organization and query with many traditional and
              advanced database concepts going way beyond Graph concepts.
            </li>
          </ul>
          <p>
            Check out more details on BangDB stack{" "}
            <Link target="_blank" href="https://bangdb.com/product">
              here
            </Link>
            .
          </p>
          <p>
            Details of performance comparison of BangDB with other popular DBs{" "}
            <Link
              target="_blank"
              href="http://highscalability.com/blog/2021/2/17/benchmark-ycsb-numbers-for-redis-mongodb-couchbase2-yugabyte.html"
            >
              here
            </Link>
            .
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
