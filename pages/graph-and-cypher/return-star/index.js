import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";
import HighlightedOutput from "../../../components/HighlightedOutput";
import HighlightedJava from "../../../components/HighlightedJava";

export default function ReturnStar() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Return Star - BangDB Graph & Cypher</title>
        <meta
          name="description"
          content="Return star is used to check attr, sub_props, sub_label, obj_props, rels, obj_label. We can check all data in one go in RETURN statements."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Return Star - BangDB Graph & Cypher"
        />
        <meta
          property="og:description"
          content="Return star is used to check attr, sub_props, sub_label, obj_props, rels, obj_label. We can check all data in one go in RETURN statements."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="Return Star - BangDB Graph & Cypher"
        />
        <meta
          name="twitter:description"
          content="Return star is used to check attr, sub_props, sub_label, obj_props, rels, obj_label. We can check all data in one go in RETURN statements."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">Return Star</h1>
        <div className="article-body">
          <p>
            Return Star is used to check attr, sub_props, sub_label, obj_props,
            rels, obj_label for any node. We can check what all the fields it
            can return based on which we can formulate the new Cypher query
            subsequently.
          </p>
          <p>
            We can check all of the data, rels in one go without even metioning
            indiviual attributes in RETURN statements. Using Return * with LIMIT
            we can easily check all the properties, for that query with less
            computation and effort.
          </p>
          <p>
            To Return all the sub_props, sub_label, obj_props, rels, obj_label
            for query with Subject, Relation, & Object.
          </p>
          <HighlightedJava
            code={`S1=>(@p Person:*)-[@r DRIVER]->(@c Car:*); RETURN * LIMIT 5`}
          />
          <HighlightedOutput
            code={`+----------+-----------+---------+-----------------+-----------+------+------+-----------+-------+---------+---------------+
|first_name|last_name  |sub_label|sub              |claim_total|info  |rel   |constructor|model  |obj_label|obj            |
+----------+-----------+---------+-----------------+-----------+------+------+-----------+-------+---------+---------------+
|Jasmine   |Rhea       |   Person|JasmineRhea      |19558      |Driver|DRIVER|Renault    |Clio   |Car      |Renault_Clio   |
+----------+-----------+---------+-----------------+-----------+------+------+-----------+-------+---------+---------------+
|Euanthe   |Rossana    |   Person|EuantheRossana   |19940      |Driver|DRIVER|Ford       |Fiesta |Car      |Ford_Fiesta    |
+----------+-----------+---------+-----------------+-----------+------+------+-----------+-------+---------+---------------+
|Udo       |Halstein   |   Person|UdoHalstein      |19068      |Driver|DRIVER|Ford       |Focus  |Car      |Ford_Focus     |
+----------+-----------+---------+-----------------+-----------+------+------+-----------+-------+---------+---------------+
|Monroe    |Maksymilian|   Person|MonroeMaksymilian|19425      |Driver|DRIVER|Kia        |Rio    |Car      |Kia_Rio        |
+----------+-----------+---------+-----------------+-----------+------+------+-----------+-------+---------+---------------+
|Skyler    |Gavril     |   Person|SkylerGavril     |19010      |Driver|DRIVER|Hyundai    |Elantra|Car      |Hyundai_Elantra|
+----------+-----------+---------+-----------------+-----------+------+------+-----------+-------+---------+---------------+`}
          />
          <p>To return the sub_label, attributes for the person node</p>
          <HighlightedJava code={`S1=>(@p Person:*); RETURN * LIMIT 8`} />
          <HighlightedOutput
            code={`{
   "nodes" : [
      "{\"first_name\":\"Jasmine\",\"last_name\":\"Rhea\",\"label\":\"Person\",\"name\":\"JasmineRhea\",\"_pk\":\"2471870506:1087718271580413333\",\"_v\":1}",
      "{\"first_name\":\"Euanthe\",\"last_name\":\"Rossana\",\"label\":\"Person\",\"name\":\"EuantheRossana\",\"_pk\":\"2471870506:2014071307490583277\",\"_v\":1}",
      "{\"first_name\":\"Udo\",\"last_name\":\"Halstein\",\"label\":\"Person\",\"name\":\"UdoHalstein\",\"_pk\":\"2471870506:2291981794142759710\",\"_v\":1}",
      "{\"first_name\":\"Monroe\",\"last_name\":\"Maksymilian\",\"label\":\"Person\",\"name\":\"MonroeMaksymilian\",\"_pk\":\"2471870506:3715885426790073584\",\"_v\":1}",
      "{\"first_name\":\"Chelle\",\"last_name\":\"Jessie\",\"label\":\"Person\",\"name\":\"ChelleJessie\",\"_pk\":\"2471870506:3805768673468582374\",\"_v\":1}",
      "{\"first_name\":\"Sousanna\",\"last_name\":\"Pinar\",\"label\":\"Person\",\"name\":\"SousannaPinar\",\"_pk\":\"2471870506:4581727513578972106\",\"_v\":1}",
      "{\"first_name\":\"Skyler\",\"last_name\":\"Gavril\",\"label\":\"Person\",\"name\":\"SkylerGavril\",\"_pk\":\"2471870506:7739971633447738127\",\"_v\":1}",
      "{\"first_name\":\"Robrecht\",\"last_name\":\"Miloslav\",\"label\":\"Person\",\"name\":\"RobrechtMiloslav\",\"_pk\":\"2471870506:8764152668372701843\",\"_v\":1}"
   ],
   "num_items" : 8
}`}
          />
          <p>
            To return all the sub_props, sub_label, rels, obj_props, obj_label
            from the person.
          </p>
          <HighlightedJava code={`S1=>(@p Person:*)-[*]->(*);RETURN *`} />
          <HighlightedOutput
            code={`+----------+-----------+---------+-----------------+-----------+---------+---------+-----------+-------+---------+-----------------+
|first_name|last_name  |sub_label|sub              |claim_total|info     |rel      |constructor|model  |obj_label|obj              |
+----------+-----------+---------+-----------------+-----------+---------+---------+-----------+-------+---------+-----------------+
|Jasmine   |Rhea       |   Person|JasmineRhea      |19558      |Driver   |DRIVER   |Renault    |Clio   |Car      |Renault_Clio     |
+----------+-----------+---------+-----------------+-----------+---------+---------+-----------+-------+---------+-----------------+
|Euanthe   |Rossana    |   Person|EuantheRossana   |19940      |Driver   |DRIVER   |Ford       |Fiesta |Car      |Ford_Fiesta      |
+----------+-----------+---------+-----------------+-----------+---------+---------+-----------+-------+---------+-----------------+
|Udo       |Halstein   |   Person|UdoHalstein      |19068      |Driver   |DRIVER   |Ford       |Focus  |Car      |Ford_Focus       |
+----------+-----------+---------+-----------------+-----------+---------+---------+-----------+-------+---------+-----------------+
|Monroe    |Maksymilian|   Person|MonroeMaksymilian|19425      |Driver   |DRIVER   |Kia        |Rio    |Car      |Kia_Rio          |
+----------+-----------+---------+-----------------+-----------+---------+---------+-----------+-------+---------+-----------------+
|Skyler    |Gavril     |   Person|SkylerGavril     |19010      |Driver   |DRIVER   |Hyundai    |Elantra|Car      |Hyundai_Elantra  |
+----------+-----------+---------+-----------------+-----------+---------+---------+-----------+-------+---------+-----------------+
|Robrecht  |Miloslav   |   Person|RobrechtMiloslav |19359      |Driver   |DRIVER   |Toyota     |Corolla|Car      |Toyota_Corolla   |
+----------+-----------+---------+-----------------+-----------+---------+---------+-----------+-------+---------+-----------------+
|Chelle    |Jessie     |   Person|ChelleJessie     |null       |Lawyer   |IS_LAWYER|null       |null   |(Person  |EuantheRossana   |
+----------+-----------+---------+-----------------+-----------+---------+---------+-----------+-------+---------+-----------------+
|Chelle    |Jessie     |   Person|ChelleJessie     |null       |Lawyer   |IS_LAWYER|null       |null   |(Person  |MonroeMaksymilian|
+----------+-----------+---------+-----------------+-----------+---------+---------+-----------+-------+---------+-----------------+
|Chelle    |Jessie     |   Person|ChelleJessie     |null       |Lawyer   |IS_LAWYER|null       |null   |(Person  |SkylerGavril     |
+----------+-----------+---------+-----------------+-----------+---------+---------+-----------+-------+---------+-----------------+
|Chelle    |Jessie     |   Person|ChelleJessie     |null       |Lawyer   |IS_LAWYER|null       |null   |(Person  |RobrechtMiloslav |
+----------+-----------+---------+-----------------+-----------+---------+---------+-----------+-------+---------+-----------------+
|Jasmine   |Rhea       |   Person|JasmineRhea      |19520      |Passenger|PASSENGER|Kia        |Rio    |Car      |Kia_Rio          |
+----------+-----------+---------+-----------------+-----------+---------+---------+-----------+-------+---------+-----------------+
|Jasmine   |Rhea       |   Person|JasmineRhea      |19224      |Passenger|PASSENGER|Toyota     |Corolla|Car      |Toyota_Corolla   |
+----------+-----------+---------+-----------------+-----------+---------+---------+-----------+-------+---------+-----------------+
|Euanthe   |Rossana    |   Person|EuantheRossana   |19474      |Passenger|PASSENGER|Hyundai    |Elantra|Car      |Hyundai_Elantra  |
+----------+-----------+---------+-----------------+-----------+---------+---------+-----------+-------+---------+-----------------+
|Euanthe   |Rossana    |   Person|EuantheRossana   |19762      |Passenger|PASSENGER|Ford       |Focus  |Car      |Ford_Focus       |
+----------+-----------+---------+-----------------+-----------+---------+---------+-----------+-------+---------+-----------------+
|Udo       |Halstein   |   Person|UdoHalstein      |19447      |Passenger|PASSENGER|Kia        |Rio    |Car      |Kia_Rio          |
+----------+-----------+---------+-----------------+-----------+---------+---------+-----------+-------+---------+-----------------+
|Udo       |Halstein   |   Person|UdoHalstein      |19346      |Passenger|PASSENGER|Ford       |Fiesta |Car      |Ford_Fiesta      |
+----------+-----------+---------+-----------------+-----------+---------+---------+-----------+-------+---------+-----------------+
|Monroe    |Maksymilian|   Person|MonroeMaksymilian|19779      |Passenger|PASSENGER|Renault    |Clio   |Car      |Renault_Clio     |
+----------+-----------+---------+-----------------+-----------+---------+---------+-----------+-------+---------+-----------------+
|Monroe    |Maksymilian|   Person|MonroeMaksymilian|19535      |Passenger|PASSENGER|Ford       |Focus  |Car      |Ford_Focus       |
+----------+-----------+---------+-----------------+-----------+---------+---------+-----------+-------+---------+-----------------+
|Skyler    |Gavril     |   Person|SkylerGavril     |19423      |Passenger|PASSENGER|Ford       |Fiesta |Car      |Ford_Fiesta      |
+----------+-----------+---------+-----------------+-----------+---------+---------+-----------+-------+---------+-----------------+
|Skyler    |Gavril     |   Person|SkylerGavril     |19971      |Passenger|PASSENGER|Toyota     |Corolla|Car      |Toyota_Corolla   |
+----------+-----------+---------+-----------------+-----------+---------+---------+-----------+-------+---------+-----------------+
|Robrecht  |Miloslav   |   Person|RobrechtMiloslav |19658      |Passenger|PASSENGER|Hyundai    |Elantra|Car      |Hyundai_Elantra  |
+----------+-----------+---------+-----------------+-----------+---------+---------+-----------+-------+---------+-----------------+
|Robrecht  |Miloslav   |   Person|RobrechtMiloslav |19282      |Passenger|PASSENGER|Renault    |Clio   |Car      |Renault_Clio     |
+----------+-----------+---------+-----------------+-----------+---------+---------+-----------+-------+---------+-----------------+
|Sousanna  |Pinar      |   Person|SousannaPinar    |null       |Doctor   |IS_DOCTOR|null       |null   |Person   |EuantheRossana   |
+----------+-----------+---------+-----------------+-----------+---------+---------+-----------+-------+---------+-----------------+
|Sousanna  |Pinar      |   Person|SousannaPinar    |null       |Doctor   |IS_DOCTOR|null       |null   |Person   |UdoHalstein      |
+----------+-----------+---------+-----------------+-----------+---------+---------+-----------+-------+---------+-----------------+
|Sousanna  |Pinar      |   Person|SousannaPinar    |null       |Doctor   |IS_DOCTOR|null       |null   |Person   |MonroeMaksymilian|
+----------+-----------+---------+-----------------+-----------+---------+---------+-----------+-------+---------+-----------------+`}
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
