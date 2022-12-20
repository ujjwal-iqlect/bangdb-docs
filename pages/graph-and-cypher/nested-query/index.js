import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";
import HighlightedOutput from "../../../components/HighlightedOutput";
import HighlightedJava from "../../../components/HighlightedJava";

export default function NestedQuery() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Nested query - BangDB Graph & Cypher</title>
        <meta
          name="description"
          content="Nested Query is used when a subject node is having two relations to two other object node and we do require the information from both the objects."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Nested query - BangDB Graph & Cypher"
        />
        <meta
          property="og:description"
          content="Nested Query is used when a subject node is having two relations to two other object node and we do require the information from both the objects."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="Nested query - BangDB Graph & Cypher"
        />
        <meta
          name="twitter:description"
          content="Nested Query is used when a subject node is having two relations to two other object node and we do require the information from both the objects."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">Nested query</h1>
        <div className="article-body">
          <p>
            Nested Query is used when a subject node is having two relations to
            two other object node and we do require the information from both
            the objects as well as subject node. It is really helpful when one
            node is having multiple relation to other distinct node.
          </p>
          <p>To check for all the people who were both driver and passenger</p>
          <HighlightedJava
            code={`S2=>[S1=>(@p Person:*)-[@d DRIVER]->(@c Car:*)]-[@g PASSENGER]->(@f Car:*);RETURN p.name AS Pname, d.info AS driver, g.info AS Passenger, COUNT(p.name) AS CNT`}
          />
          <HighlightedOutput
            code={`+---------+------+-----------------+---+
|Passenger|driver|            Pname|CNT|
+---------+------+-----------------+---+
|Passenger|Driver|      UdoHalstein|2  |
+---------+------+-----------------+---+
|Passenger|Driver| RobrechtMiloslav|2  |
+---------+------+-----------------+---+
|Passenger|Driver|      JasmineRhea|2  |
+---------+------+-----------------+---+
|Passenger|Driver|MonroeMaksymilian|2  |
+---------+------+-----------------+---+
|Passenger|Driver|     SkylerGavril|2  |
+---------+------+-----------------+---+
|Passenger|Driver|   EuantheRossana|2  |
+---------+------+-----------------+---+`}
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
