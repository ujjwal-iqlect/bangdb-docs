import React from "react";
import Head from "next/head";
import Breadcrumb from "../../components/Breadcrumb";

export default function CepUseCases() {
  return (
    <React.Fragment>
      <Head>
        <title>CEP Use Cases - BangDB</title>
        <meta
          name="description"
          content="Lets look at few more CEP use cases. You would notice that its pretty hard (or next to impossible) for SQL or Relational databases to handle these."
        ></meta>
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="CEP Use Cases - BangDB" />
        <meta
          property="og:description"
          content="Lets look at few more CEP use cases. You would notice that its pretty hard (or next to impossible) for SQL or Relational databases to handle these."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="CEP Use Cases - BangDB" />
        <meta
          name="twitter:description"
          content="Lets look at few more CEP use cases. You would notice that its pretty hard (or next to impossible) for SQL or Relational databases to handle these."
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
              <Breadcrumb
                text="Complex Event Processing"
                url="/complex-event-processing"
              />
              <h1 className="article-title">CEP Use Cases</h1>
              <div className="article-body">
                <p>
                  Let&apos;s look at few more use cases for CEP. You would
                  notice that it&apos;s pretty hard (or next to impossible) for
                  SQL or RDBMS or other stream processing systems to handle some
                  of these.
                </p>
                <h3>Example 1</h3>
                <p>
                  Suppose we want to match pairs of stock quotes, where the
                  first is an IBM quote with a price above $83 and the second is
                  the next Microsoft quote to appear in the stream.
                </p>
                <h3>Example 2</h3>
                <p>
                  Suppose we want to match pairs of stock quotes, where the
                  first is an IBM quote with a price above $83 and the second is
                  the next quote (of any stock) with a price above the IBM price
                  from the first quote.
                </p>
                <h3>Example 3</h3>
                <p>
                  Suppose we want to find a monotonically increasing temperature
                  readings for a set of sensors, where the run lasts for at
                  least 10 readings, and the first reading is greater than 78C.
                </p>
                <h3>Example 4</h3>
                <p>
                  Find anomalies in pressure vessel where the pressure readings
                  are continuously more than average value of last 1 hour
                  readings and this is repeated for 10 such readings along with
                  pressure value increasing continuously at the same time within
                  1000 seconds.
                </p>
                <h3>Example 5</h3>
                <p>
                  Find patterns where more than one credit card transactions
                  happen from two different locations within 1000 seconds for
                  the same credit card by swiping.
                </p>
                <h3>Example 6</h3>
                <p>
                  Find the pattern where CDR records show different cell tower
                  for same number within 1000 seconds where the towers are more
                  than 25 km apart.
                </p>
                <h3>Example 7</h3>
                <p>
                  Suppose we wish to find a scenario where individual
                  temperature and pressure readings are within limit but both
                  are increasing continuously for 10 such readings within 1000
                  seconds with temperature more than 68 C and pressure 5 ATM.
                </p>
                <aside className="doc-note">
                  <strong>Note: </strong>Here we need to join the two streams
                  namely temperature and pressure].
                </aside>
                <h3>Example 8</h3>
                <p>
                  The standard deviation of sensor reading is continuously out
                  of 2 SIGMA in normal gaussian distribution for 10 readings
                  within 1000 seconds with deviation increasing continuously.
                </p>
              </div>
            </article>
          </div>
        </main>
      </section>
    </React.Fragment>
  );
}
