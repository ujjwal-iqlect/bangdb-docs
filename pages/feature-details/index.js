import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "../../components/Breadcrumb";

export default function FeatureDetails() {
  return (
    <React.Fragment>
      <Head>
        <title>Feature Details - BangDB</title>
        <meta
          name="description"
          content="BangDB has very rich feature set and we are working hard to keep improving the existing ones and adding new ones. Here's it's feature details"
        ></meta>
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Feature Details - BangDB" />
        <meta
          property="og:description"
          content="BangDB has very rich feature set and we are working hard to keep improving the existing ones and adding new ones. Here's it's feature details"
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="Feature Details - BangDB" />
        <meta
          name="twitter:description"
          content="BangDB has very rich feature set and we are working hard to keep improving the existing ones and adding new ones. Here's it's feature details"
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <section className="main-container">
        <main className="container">
          <div className="article-content">
            <article className="article">
              <Breadcrumb text="Introduction" url="/bangdb-introduction" />
              <h1 className="article-title">Feature Details</h1>
              <div className="article-body">
                <p>
                  BangDB has very rich feature set and we are working hard to
                  keep improving the existing ones and adding new ones to
                  simplify the life of developers and enable them to deal with
                  more challenging problems. Here is a high-level feature list
                  for BangDB.
                </p>
                <h2>Multi Flavoured</h2>
                <ul>
                  <li>
                    <strong>Embedded</strong> - within the process or device
                  </li>
                  <p>
                    BangDB embedded runs within and as part of the user's
                    process. This allows users to build local apps. For IOT use
                    cases, the BangDB embedded can run within devices
                    (micro-processors) and deal with some state based complex
                    yet local use cases.
                  </p>
                  <li>
                    <strong>Client Server</strong> - over the network
                  </li>
                  <p>
                    Client connects to the server over the network. This is a
                    shared state for the server and very good for majority of
                    the use cases. This also allows users to store, analyse data
                    and improve the app efficiency and performance
                  </p>
                  <li>
                    <strong>P2P based</strong> - fully distributed
                  </li>
                  <p>
                    This is very good for linear scaling and dealing with huge
                    of amount of data. This is a masterless model therefore
                    truly runs in a scalable distributed model. The db also
                    tolerates high level of network churning in this case
                  </p>
                  <li>
                    <strong>Ampere</strong> - App building platform
                  </li>
                  <p>
                    Ampere allows BangDB to run behind portal and a dashboard.
                    Users can not only visualise using the dashboard but also
                    build their use cases or apps using simple intuitive
                    dashboard.
                  </p>
                </ul>
                <h2>Multi model</h2>
                <p>
                  BangDB is designed to handle more than one data type. It deals
                  with following kinds of data effectively.
                </p>
                <ul>
                  <li>Key value (value generally opaque)</li>
                  <li>Document - json based</li>
                  <li>Time series - for streaming real time data</li>
                  <li>Large files or binary data</li>
                </ul>
                <p>
                  More over, all of these different kinds of data could reside
                  in same database and further could be joined or leveraged in
                  different manner depending upon the use case.
                </p>
                <h2>Native streaming</h2>
                <p>
                  BangDB has streaming capabilities natively implemented which
                  allows users to simply ingest data and start dealing with time
                  series data in real time manner. Streaming constructs like
                  sliding window, aggregations, statistics, anomalies, finding
                  patterns, CEP (complex event processing), notifications,
                  prediction etc. all of these are supported in a very simple
                  way.
                </p>
                <p>
                  User just has to write simple json and all of these could
                  start working immediately with no extra coding for the same.
                  It also supports running statistics such as aggr, groupby,
                  avg, std-dev, topk, min, max, count, unique count, skew,
                  ex-kurtosis etc. Explore more on this in the{" "}
                  <Link href={"/stream"}>stream section</Link>
                </p>
                <h2>Native AI</h2>
                <p>
                  BangDB has AI (ML, IE and DL) capabilities natively
                  integrated. This allows users to deal with model building,
                  testing, training and deploying for prediction using simple
                  APIs. Further, since AI is within the db, therefore many
                  activities on the AI side could be simply automated, which
                  runs the BangDB for continuous intelligence.
                </p>
                <p>
                  BangDB abstracts all the infrastructure level complexities and
                  allows user to deal with the use cases. For ex;
                  infrastructure, large files storage and retrieval, Memory
                  management, Model versioning, deployment etc. all are taken
                  care by the db.
                </p>
                <h2>Graph and Cypher</h2>
                <p>
                  One of the best feature of BangDB is that it supports Graph
                  which means the data (triples) could be stored and queried as
                  required. The Graph is treated as table where user can store
                  data which is basically set of subject-relation-object
                  triples. Then these data could be queried using Cypher query
                  language.
                </p>
                <p>
                  The Graph can also be applied on streaming data with simple
                  schema definition, which will allow db to keep adding triples
                  to the Graph table and also query them for any pattern
                  identifications.
                </p>
                <p>
                  Further, user can deal with ontologies as well which is
                  created by the IE (Information Extraction) component of the
                  BangDB. User can train KB (knowledge base), NER (Name Entity)
                  model, Relation models and then for any given text, ontology
                  can be created/predicted.
                </p>
                <h2>Cloud Native</h2>
                <ul>
                  <li>
                    BangDB Ampere runs on almost all favourite clouds and it
                    could be deployed within few minutes of sign up.
                  </li>
                  <li>
                    BangDB also could be deployed on cloud or on-prem data
                    centers or within the device, as required
                  </li>
                </ul>
                <h2>Multi table types</h2>
                <p>
                  To store different data in efficient manner, user may use
                  different kinds of table supported by the db
                </p>
                <h3>Normal table</h3>
                <p>This is suitable for key-value data.</p>
                <h3>Wide table</h3>
                <p>
                  This is suitable for document data. It allows users to create
                  different indexes and also complex queries.
                </p>
                <h3>Primitive table</h3>
                <p>
                  For many cases, we just need to deal with primitive types.
                  Primitive tables are designed for maximum efficiency and
                  performance for such data.
                </p>
                <h3>Large table</h3>
                <p>
                  This is designed to keep very large files and provides S3 kind
                  of APIs to deal with it. User can upload and download very
                  large files or object. The ML component also uses it for
                  automating training, testing and deployment
                </p>
                <h2>Key arrangement</h2>
                <p>
                  BangDB has primary key concept and every data, irrespective of
                  data type, it can be stored using the primary keys.
                </p>
                <p>Primary keys can be stored in two different ways:</p>
                <ul>
                  <li>
                    <strong>Sorted</strong> - using B+link*tree
                  </li>
                  <li>
                    <strong>Hashed</strong> - ExtHash*
                  </li>
                </ul>
                <h2>Indexes</h2>
                <p>
                  One of the best feature of BangDB is that it supports many
                  kinds of indexes as these are necessary for efficient query
                  and retrieval of the data.
                </p>
                <h3>Secondary Indexes</h3>
                <p>
                  Here, again there are several different kinds of secondary
                  indexes that could be created
                </p>
                <ul>
                  <li>
                    <strong>Normal Indexes</strong> - on a given field of json
                    etc
                  </li>
                  <li>
                    <strong>Nested Indexes</strong> - This could be nested
                    within the document
                  </li>
                  <li>
                    <strong>Composite Indexes</strong> - Created by combining
                    different fields
                  </li>
                  <li>
                    <strong>Geospatial Indexes</strong> - Suitable for
                    coordinate based tuples
                  </li>
                  <li>
                    <strong>Reversed Indexes</strong> - For free text search
                  </li>
                </ul>
                <h2>Queries</h2>
                <p>
                  BangDB allows simple, complex, advanced queries to be run
                  using simple express-able json language. Leveraging the
                  different kinds of indexes, it is rather efficient to run some
                  of the queries which could be complex for many other systems
                  in the market.
                </p>
                <p>
                  For example: queries could be run on streaming data, different
                  streams could be joined or filtered or processed for state
                  based queries as well, in order to find interesting patterns
                </p>
                <h2>CEP</h2>
                <p>
                  Complex event processing is an inbuilt feature in BangDB,
                  which allows users or developers to find patterns within data
                  in absolute manner. This is very powerful and happens in
                  realtime with very less overhead and latency. Most of the CEP
                  in the market are memory bloating ones, BangDB implements file
                  system backed CEP yet on streaming continuous data.
                </p>
                <h2>Transaction</h2>
                <p>
                  BangDB implements OCC (Optimistic concurrency control)
                  transaction and users can leverage this for different
                  purposes. However, every single operation is by default atomic
                  in nature.
                </p>
                <h2>Write Ahead Logging (WAL)</h2>
                <p>
                  BangDB implements <strong>write ahead logging</strong> with
                  novel structure and algorithm which is based on Aries, and yet
                  recovers data in a very high speed manner. WAL on one hand
                  allows us to achieve transaction in efficient manner and on
                  the other hand it allows db to recover from crash(system,
                  process, db, machine etc.) in automated and high speed manner.
                </p>
                <h2>In-memory & persistent</h2>
                <p>
                  BangDB can be made to run like in-mem db as well. This is
                  purely from use case point of view. Default way for BangDB is
                  to run in persistent mode. BangDB implements its own buffer
                  pool/page cache and with predictive pre-fetching it manages
                  data well beyond the working memory set.
                </p>
                <p>
                  Further BangDB implements a IO layer within the db to leverage
                  SSDs in much better manner for large amount data to keep the
                  performance high.
                </p>
                <h2>High Performance</h2>
                <p>
                  BangDB achieves high performance in all different models and
                  flavours. It&apos;s one of the highest performing databases in
                  the market. In fact it is 2-3X when compared to mongodb,
                  50-70% higher as compared to redis (even thought it&apos;s
                  primarily a in-mem key/val db) etc.
                </p>
              </div>
            </article>
          </div>
        </main>
      </section>
    </React.Fragment>
  );
}
