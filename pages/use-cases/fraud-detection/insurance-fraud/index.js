import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../../components/Breadcrumb";
import DocArticle from "../../../../components/DocArticle";
import HighlightedCpp from "../../../../components/HighlightedCpp";
import Image from "next/image";

export default function FDinsuranceFraud() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Insurance fraud (Whiplash for cash) - BangDB</title>
        <meta
          name="description"
          content="An increase in “crash for cash” cases is driving up the total cost of insurance fraud. Luckily, whiplash for cash criminals can be identified with graph technologies."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Insurance fraud (Whiplash for cash) - BangDB"
        />
        <meta
          property="og:description"
          content="An increase in “crash for cash” cases is driving up the total cost of insurance fraud. Luckily, whiplash for cash criminals can be identified with graph technologies."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="Insurance fraud (Whiplash for cash) - BangDB"
        />
        <meta
          name="twitter:description"
          content="An increase in “crash for cash” cases is driving up the total cost of insurance fraud. Luckily, whiplash for cash criminals can be identified with graph technologies."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">Insurance fraud (Whiplash for cash)</h1>
        <div className="article-body">
          <p>
            An increase in &quot;crash for cash&quot; cases is driving up the
            total cost of insurance fraud. In particular, so-called crash for
            cash scams, in which fraudsters deliberately cause motor accidents
            in order to make false whiplash claims, have contributed to the
            increase.
          </p>
          <p>
            The problem with schemes like whiplash for cash is that it targets
            the insurance companies&apos; weaknesses. Faced with thousands of
            claims they have a hard time finding suspicious behavior in the data
            they process. Luckily, like with stolen credit cards or loan fraud,
            whiplash for cash criminals can be identified with graph
            technologies.
          </p>
          <h2>Scenario</h2>
          <p>
            In a typical hard fraud scenario, rings of fraudsters work together
            to stage fake accidents and claim soft tissue injuries. These fake
            accidents never really happen. They are “paper collisions”, complete
            with fake drivers, fake passengers, fake pedestrians and even fake
            witnesses.
          </p>
          <p>Such rings normally include a number of roles :</p>
          <ul>
            <li>Providers</li>
            <p>
              Collusions typically involve participation from professionals in
              several categories: Doctor or Lawyers
            </p>
            <li>Drivers</li>
            <li>Passengers</li>
            <li>Witnesses</li>
          </ul>
          <p>
            Fraudsters often create and manage rings by &quot;recycling&quot;
            participants so as to stage many accidents. Thus one accident may
            have a particular person playing the role of the driver. In another
            accident the same person may be a passenger or a pedestrian, and in
            another a witness. Clever usage of roles can generate a large number
            of costly fake accidents, even with a small number of participants.
          </p>
          <h2>Solution</h2>

          <p>
            We can model the data the insurance company has about its accidents
            as a graph and then find fraud rings with graph queries.
          </p>
          <h3>Graph Structure</h3>
          <p>
            The graph data model below represents how the data is linked, and
            illustrates how one can find rings by simply walking the graph.
          </p>
          <Image
            alt="graph structure"
            src="https://bangdb.com/wp-content/uploads/2022/04/word-image-4.png"
            width="949"
            height="619"
          />
          <h2>Steps to Implement</h2>
          <h3>Step 1</h3>
          <h4>Sample data:</h4>
          <p>Creating graph data from CLI</p>
          <HighlightedCpp
            code={`CREATE (Person:UdoHalstein {"first_name":"Udo", "last_name":"Halstein"})

CREATE (Person:RobrechtMiloslav {"first_name":"Robrecht", "last_name":"Miloslav"})

CREATE (Person:MonroeMaksymilian {"first_name":"Monroe", "last_name":"Maksymilian"})

CREATE (Person:SkylerGavril {"first_name":"Skyler","last_name":"Gavril"})

CREATE (Person:EuantheRossana {"first_name":"Euanthe","last_name":"Rossana"})

CREATE (Person:JasmineRhea {"first_name":"Jasmine","last_name":"Rhea"})

CREATE (Person:SousannaPinar {"first_name":"Sousanna","last_name":"Pinar"})

CREATE (Person:ChelleJessie {"first_name":"Chelle", "last_name":"Jessie"})

CREATE (Car:Ford_Focus {"constructor":"Ford", "model":"Focus"})

CREATE (Car:Toyota_Corolla {"constructor":"Toyota", "model":"Corolla"})

CREATE (Car:Kia_Rio {"constructor":"Kia", "model":"Rio"})

CREATE (Car:Hyundai_Elantra {"constructor":"Hyundai", "model":"Elantra"})

CREATE (Car:Ford_Fiesta {"constructor":"Ford", "model":"Fiesta"})

CREATE (Car:Renault_Clio {"constructor":"Renault", "model":"Clio"})

CREATE (Accident:123 {"date":"19/05/2014","location":"New Jersey"})

CREATE (Accident:234 {"date":"23/05/2014","location":"Florida"})

CREATE (Accident:345 {"date":"27/05/2014","location":"Florida"})

CREATE (Car:Ford_Focus)-[IS_INVOLVED {"claim_total":"4817"}]->(Accident:123)

CREATE (Car:Toyota_Corolla)-[IS_INVOLVED {"claim_total":"4693"}]->(Accident:123)

CREATE (Car:Kia_Rio)-[IS_INVOLVED {"claim_total":"4157"}]->(Accident:234)

CREATE (Car:Hyundai_Elantra)-[IS_INVOLVED {"claim_total":"4001"}]->(Accident:234)

CREATE (Car:Ford_Focus)-[IS_INVOLVED {"claim_total":"4513"}]->(Accident:345)

CREATE (Car:Renault_Clio)-[IS_INVOLVED {"claim_total":"4307"}]->(Accident:345)

CREATE (Person:UdoHalstein)-[DRIVER {"claim_total":"19068","info":"Driver"}]->(Car:Ford_Focus)

CREATE (Person:UdoHalstein)-[PASSENGER {"claim_total":"19447","info":"Passenger"}]->(Car:Kia_Rio)

CREATE (Person:UdoHalstein)-[PASSENGER {"claim_total":"19346","info":"Passenger"}]->(Car:Ford_Fiesta)

CREATE (Person:RobrechtMiloslav)-[DRIVER {"claim_total":"19359","info":"Driver"}]->(Car:Toyota_Corolla)

CREATE (Person:RobrechtMiloslav)-[PASSENGER {"claim_total":"19658","info":"Passenger"}]->(Car:Hyundai_Elantra)

CREATE (Person:RobrechtMiloslav)-[PASSENGER {"claim_total":"19282","info":"Passenger"}]->(Car:Renault_Clio)

CREATE (Person:MonroeMaksymilian)-[DRIVER {"claim_total":"19425","info":"Driver"}]->(Car:Kia_Rio)

CREATE (Person:MonroeMaksymilian)-[PASSENGER {"claim_total":"19535","info":"Passenger"}]->(Car:Ford_Focus)

CREATE (Person:MonroeMaksymilian)-[PASSENGER {"claim_total":"19779","info":"Passenger"}]->(Car:Renault_Clio)

CREATE (Person:SkylerGavril)-[DRIVER {"claim_total":"19010","info":"Driver"}]->(Car:Hyundai_Elantra)

CREATE (Person:SkylerGavril)-[PASSENGER {"claim_total":"19423","info":"Passenger"}]->(Car:Ford_Fiesta)

CREATE (Person:SkylerGavril)-[PASSENGER {"claim_total":"19971","info":"Passenger"}]->(Car:Toyota_Corolla)

CREATE (Person:EuantheRossana)-[DRIVER {"claim_total":"19940","info":"Driver"}]->(Car:Ford_Fiesta)

CREATE (Person:EuantheRossana)-[PASSENGER {"claim_total":"19474","info":"Passenger"}]->(Car:Hyundai_Elantra)

CREATE (Person:EuantheRossana)-[PASSENGER {"claim_total":"19762","info":"Passenger"}]->(Car:Ford_Focus)

CREATE (Person:JasmineRhea)-[DRIVER {"claim_total":"19558","info":"Driver"}]->(Car:Renault_Clio)

CREATE (Person:JasmineRhea)-[PASSENGER {"claim_total":"19224","info":"Passenger"}]->(Car:Toyota_Corolla)

CREATE (Person:JasmineRhea)-[PASSENGER {"claim_total":"19520","info":"Passenger"}]->(Car:Kia_Rio)

CREATE (Person:SousannaPinar)-[IS_DOCTOR {"info":"Doctor"}]->(Person:UdoHalstein)

CREATE (Person:SousannaPinar)-[IS_DOCTOR {"info":"Doctor"}]->(Person:MonroeMaksymilian)

CREATE (Person:SousannaPinar)-[IS_DOCTOR {"info":"Doctor"}]->(Person:EuantheRossana)

CREATE (Person:ChelleJessie)-[IS_LAWYER {"info":"Lawyer"}]->((Person:RobrechtMiloslav)

CREATE (Person:ChelleJessie)-[IS_LAWYER {"info":"Lawyer"}]->((Person:MonroeMaksymilian)

CREATE (Person:ChelleJessie)-[IS_LAWYER {"info":"Lawyer"}]->((Person:SkylerGavril)

CREATE (Person:ChelleJessie)-[IS_LAWYER {"info":"Lawyer"}]->((Person:EuantheRossana)`}
          />
          <h3>Step 2</h3>
          <h4>Performing Graph Queries</h4>
          <p>Let&apos;s start with a simple example</p>
          <p>Checking number of accidents a person is involved in</p>
          <HighlightedCpp
            code={`S1=>(@p Person:*)-[@r *]->(@c Car:*);RETURN p.name AS Person, COUNT(*) AS AccidentInvolvedIn`}
          />
          <p>Checking passengers involved in an accident</p>
          <HighlightedCpp
            code={`S1=>(@p Person:*)-[@r PASSENGER]->(@c Car:*)-[@f IS_INVOLVED]->(@a Accident:*);RETURN p.name AS PersonName, c.name AS CarModel, a.location AS Location, r.info AS label, a.name AS AccidentID`}
          />
          <p>Checking drivers involved in an accident</p>
          <HighlightedCpp
            code={`S1=>(@p Person:*)-[@r DRIVER]->(@c Car:*)-[@f IS_INVOLVED]->(@a Accident:*);RETURN p.name AS PersonName, c.name AS CarModel, a.location AS Location, r.info AS label,a.name AS AccidentID`}
          />
          <p>Checking for all the people who were both driver and passenger</p>
          <HighlightedCpp
            code={`S2=>[S1=>(@p Person:*)-[@d DRIVER]->(@c Car:*)]-[@g PASSENGER]->(@f Car:*);RETURN p.name AS Pname, d.info AS driver, g.info AS Passenger, COUNT(p.name) AS CNT`}
          />
          <p>
            As in the bank fraud example above, graph database queries can be
            added to the insurance company&apos;s standard checks, at
            appropriate points in time such as when the claim is filed to flag
            suspected fraud rings in real time.
          </p>
        </div>
      </DocArticle>
    </React.Fragment>
  );
}

export async function getServerSideProps(context) {
  return {
    props: { useCasesSidebar: true },
  };
}
