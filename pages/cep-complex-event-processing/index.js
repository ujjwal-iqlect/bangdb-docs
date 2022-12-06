import React from "react";
import Head from "next/head";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import HighlightedCpp from "../../components/HighlightedCpp";

export default function Cepq() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>CEP Queries (CEPQ) - BangDB</title>
        <meta
          name="description"
          content="CEP is a large topic and it has more details , For now let's see few CEP queries (CEPQ) here that we add in the stream definition."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="CEP Queries (CEPQ) - BangDB" />
        <meta
          property="og:description"
          content="CEP is a large topic and it has more details , For now let's see few CEP queries (CEPQ) here that we add in the stream definition."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="CEP Queries (CEPQ) - BangDB" />
        <meta
          name="twitter:description"
          content="CEP is a large topic and it has more details , For now let's see few CEP queries (CEPQ) here that we add in the stream definition."
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
              <Breadcrumb text="Stream in BangDB" url="/stream" />
              <h1 className="article-title">CEP Queries (CEPQ)</h1>
              <div className="article-body">
                <p>
                  CEP is a large topic and it has more details which is covered
                  separately{" "}
                  <Link href={"/complex-event-processing"}>here</Link>, For now
                  let&apos;s see few cep queries here that we add in the stream
                  definition.
                </p>
                <HighlightedCpp
                  code={`"cepq":[
   {
      "name":"amount_exceed_fixed",
      "type":6,
      "tloc":86400,
      "fqry":{
         "name":"{\"query\":[{\"key\":\"amount\", \"cmp_op\":0, \"val\":10000}]}",
         "type":1
      },
      "notf":12345
   },
   {
      "name":"amount_exceed_avg",
      "type":6,
      "tloc":86400,
      "fqry":{
         "name":"{\"query\":[{\"key\":\"amount\", \"cmp_op\":0, \"val\":\"avg(account.amount, h_1, more_10)\"}],\"qtype\":3}",
         "type":1
      },
      "notf":12345
   },
   {
      "name":"txn_fraud_case",
      "type":1,
      "tloc":1000,
      "ratr":[
         "txnid",
         "loc"
      ],
      "rstm":"account",
      "iatr":[
         "name",
         "balance",
         "txnid",
         "loc"
      ],
      "jqry":{
         "cond":[
            "txnid",
            "loc"
         ],
         "opid":11,
         "args":[
            "txnid",
            "loc"
         ],
         "cmp":[
            "EQ",
            "NE"
         ]
      },
      "cond":[
         {
            "name":"NUMT",
            "val":1,
            "opid":1
         },
         {
            "name":"DUR",
            "val":100,
            "opid":0
         }
      ],
      "ostm":"txn_fraud",
      "notf":11111
   }
]`}
                />
                <p>
                  First one simply applies amount &gt; 10000 rule and if true it
                  notifies using 12345 notification id.
                </p>
                <p>
                  Second one does same but it uses amount &gt; avg(amount) of an
                  hour + 10%, which is average amount for an hour and 10% extra.
                </p>
                <p>
                  Third one finds the fraud in transaction where same
                  transaction id is used in two different transactions with
                  different locations within 100 sec.
                </p>
                <aside className="doc-note">
                  <strong>Note: </strong>These are cep involving single stream
                  only, we can do it for more than one stream.
                  <p>
                    See <Link href={"/complex-event-processing"}>cep</Link>{" "}
                    details for more info.
                  </p>
                </aside>
              </div>
            </article>
          </div>
        </main>
      </section>
    </React.Fragment>
  );
}
