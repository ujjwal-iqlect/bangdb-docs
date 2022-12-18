import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../../components/Breadcrumb";
import DocArticle from "../../../../components/DocArticle";
import Link from "next/link";

export default function AFCRapplicationANDdetails() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          Application & Details - Customer reviews analytics use case
        </title>
        <meta
          name="description"
          content="Application & Details of Customer reviews analytics use case - Checkout the documentation to know about relevant application areas, complexities & benefits of this use case."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Application & Details - Customer reviews analytics use case"
        />
        <meta
          property="og:description"
          content="Application & Details of Customer reviews analytics use case - Checkout the documentation to know about relevant application areas, complexities & benefits of this use case."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="Application & Details - Customer reviews analytics use case"
        />
        <meta
          name="twitter:description"
          content="Application & Details of Customer reviews analytics use case - Checkout the documentation to know about relevant application areas, complexities & benefits of this use case."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">Application & Details</h1>
        <div className="article-body">
          <h2>Relevant application areas</h2>
          <ol>
            <li>E-commerce</li>
            <li>Payment and Banking</li>
            <li>Ridesharing and cabs on hire (for example: Uber, OLA etc.)</li>
            <li>Home delivery entities (for example: food etc.)</li>
          </ol>
          <h2>Complexities</h2>
          <p>There are several challenges here, some of them could be :</p>
          <ol>
            <li>
              Volume and Velocity.The number of messages could be very high, as
              these could be several users sending messages per second across
              the geographical areas. Hence data ingestion in real time is
              critical.
            </li>
            <li>
              The messages could be in English or in other vernacular
              langauages, hence we need to extract sentiment from unstructured
              data, and keep improving or updating the models in real time.
            </li>
            <li>
              Extracting patterns from the streaming set of events in continuous
              manner, this requires CEP on the streaming data which is very hard
              to implement on SQL or regular NoSQL databases.
            </li>
            <li>
              {" "}
              Storing certain truples (sub, obj, predicate) in a graph which is
              continously updated as events arrive, helpful in linking data
              and/or events.
            </li>
            <li>
              Different database queries along with text search which requires
              many secondary and reverse indexes.
            </li>
            <li>
              Infrstructure deplyment and maintenance if too many siols are
              used. Further automation is difficult to achieve in typical
              deployment models.
            </li>
          </ol>
          <h2>Benefits of using BangDB</h2>
          <ol>
            <li>
              Use light weight high performance bangdb agents or other messaging
              framework to stream data into the BangDB. BangDB is high
              performance database with ingestion speed over 5K+ events per
              second per server leading to half a billion events processing per
              commodity server in a day.
            </li>
            <li>
              Integrated stream processing within BangDB allows users to simply
              start the process with a simple json schema definition. There is
              no extra silos setup for streaming infrastructure.
            </li>
            <li>
              Ingerated AI within BangDB allows users to simply train, deploy
              and predict on incoming data without having to set up separate
              infra and then exporting data/ importing model etc. The entire
              process can be automated within BangDB.
            </li>
            <li>
              BangDB is a multi model database and it also allows Graph to be
              integrated with streams such that the graph is updated on
              streaming data with triples.
            </li>
            <li>
              BangDB supports many kinds of indexes including reverse indexes,
              hence running rich queries along with searches on BangDB is quite
              simple.
            </li>
            <li>
              Integrated with Grafana for visualization of time-series data.
            </li>
          </ol>
          <h2>Overview of the solution</h2>
          <p>
            Checkout the details{" "}
            <Link
              href={`https://bangdb.com/blog/customer-message-analysis-predictive-streaming-manner/`}
              target={`_blank`}
            >
              here
            </Link>
            .
          </p>
          <p>
            Please let us know if you want more features in the use case to be
            added or another use case to be implemented and shared. Also do send
            me your feedback / comment at{" "}
            <Link href={"mailto:sachin@bangdb.com"}>sachin@bangdb.com</Link>.
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
