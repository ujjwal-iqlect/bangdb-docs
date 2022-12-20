import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";
import HighlightedOutput from "../../../components/HighlightedOutput";
import HighlightedJava from "../../../components/HighlightedJava";

export default function ChainQuery() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Chain query - BangDB Graph & Cypher</title>
        <meta
          name="description"
          content="Chain query is mostly used when one node is connected to other, which particularly is connected to some other node. We can use chain query to obtain sub_props , obj_props from any intermediate node."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Chain query - BangDB Graph & Cypher"
        />
        <meta
          property="og:description"
          content="Chain query is mostly used when one node is connected to other, which particularly is connected to some other node. We can use chain query to obtain sub_props , obj_props from any intermediate node."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="Chain query - BangDB Graph & Cypher"
        />
        <meta
          name="twitter:description"
          content="Chain query is mostly used when one node is connected to other, which particularly is connected to some other node. We can use chain query to obtain sub_props , obj_props from any intermediate node."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">Chain query</h1>
        <div className="article-body">
          <p>
            Chain query is mostly used when one node is connected to other,
            which particularly is connected to some other node such as:
          </p>
          <p>
            <strong>Chain</strong> :{" "}
            <em>N1-[r1]-&gt;N2-[r2]-&gt;N3-[r3]-&gt;N4;</em>
          </p>
          <p>
            <strong>Nodes</strong> : <em>N1,N2,N3,N4</em>
          </p>
          <p>
            <strong>Relations</strong> : <em>r1, r2, r3</em>
          </p>
          <p>
            In such situation, we can use chain query to obtain sub_props ,
            obj_props from any intermediate node.
          </p>
          <p>
            To get information of a Person who was passenger and caught accident
            which later was treated by a Doctor.
          </p>
          <HighlightedJava
            code={`S1=>(@d Person:*)-[IS_DOCTOR]->(@p Person:*)-[@r PASSENGER]->(@c Car:*)-[@f IS_INVOLVED]->(@a Accident:*);RETURN d.name AS Doctor, p.name AS "Person Name", c.name AS "Car Model", a.location AS Location, r.info AS label, a.name AS AccidentID`}
          />
          <HighlightedOutput
            code={`+----------+----------+---------------+-------------+-----------------+---------+
|Location  |AccidentID|      Car Model|Doctor       |Person Name      |label    |
+----------+----------+---------------+-------------+-----------------+---------+
|Florida   |234       |Hyundai_Elantra|SousannaPinar|EuantheRossana   |Passenger|
+----------+----------+---------------+-------------+-----------------+---------+
|Florida   |234       |        Kia_Rio|SousannaPinar|UdoHalstein      |Passenger|
+----------+----------+---------------+-------------+-----------------+---------+
|Florida   |345       |   Renault_Clio|SousannaPinar|MonroeMaksymilian|Passenger|
+----------+----------+---------------+-------------+-----------------+---------+
|New Jersey|123       |     Ford_Focus|SousannaPinar|EuantheRossana   |Passenger|
+----------+----------+---------------+-------------+-----------------+---------+
|Florida   |345       |     Ford_Focus|SousannaPinar|EuantheRossana   |Passenger|
+----------+----------+---------------+-------------+-----------------+---------+`}
          />
          <p>
            To get information of a Person who was a Driver and caught accident
          </p>
          <HighlightedJava
            code={`S1=>(@p Person:*)-[@r DRIVER]->(@c Car:*)-[@f IS_INVOLVED]->(@a Accident:*);RETURN p.name AS PersonName, c.name AS CarModel, a.location AS Location, r.info AS label, a.name AS AccidentID`}
          />
          <HighlightedOutput
            code={`+----------+----------+---------------+-----------------+------+
|Location  |AccidentID|       CarModel|PersonName       |label |
+----------+----------+---------------+-----------------+------+
|Florida   |234       |Hyundai_Elantra|SkylerGavril     |Driver|
+----------+----------+---------------+-----------------+------+
|Florida   |234       |        Kia_Rio|MonroeMaksymilian|Driver|
+----------+----------+---------------+-----------------+------+
|Florida   |345       |   Renault_Clio|JasmineRhea      |Driver|
+----------+----------+---------------+-----------------+------+
|New Jersey|123       |     Ford_Focus|UdoHalstein      |Driver|
+----------+----------+---------------+-----------------+------+
|Florida   |345       |     Ford_Focus|UdoHalstein      |Driver|
+----------+----------+---------------+-----------------+------+
|New Jersey|123       | Toyota_Corolla|RobrechtMiloslav |Driver|
+----------+----------+---------------+-----------------+------+`}
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
