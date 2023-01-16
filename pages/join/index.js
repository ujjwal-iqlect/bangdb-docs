import React from "react";
import Head from "next/head";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import HighlightedCpp from "../../components/HighlightedCpp";

export default function Join() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Join - BangDB</title>
        <meta
          name="description"
          content="JOIN is used to join two streams on some condition at run time. It selects some attributes from this stream."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Join - BangDB" />
        <meta
          property="og:description"
          content="JOIN is used to join two streams on some condition at run time. It selects some attributes from this stream."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="Join - BangDB" />
        <meta
          name="twitter:description"
          content="JOIN is used to join two streams on some condition at run time. It selects some attributes from this stream."
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
              <h1 className="article-title">Join</h1>
              <div className="article-body">
                <p>
                  This is used to join two streams on some condition at run
                  time. It selects some attributes from this stream (stream
                  where data is ingested) &quot;iatr&quot; and few from the
                  joining stream &quot;rstm&quot;, it also may compute few
                  attributes using &quot;catr&quot; and then send the combined
                  data to the output stream (third one). In the process it may
                  also notify as required.
                </p>
                <HighlightedCpp
                  code={`"join":[
   {
      "name":"myjoin1",
      "type":1,
      "tloc":30,
      "iatr":[
         "a",
         "b",
         "c",
         "e"
      ],
      "rstm":"s2",
      "ratr":[
         "j1",
         "j2",
         "j3"
      ],
      "jqry":{
         "cond":[
            "a",
            "b"
         ],
         "opid":11,
         "opnm":"myrule2",
         "args":[
            "a",
            "b"
         ]
      },
      "ostm":"s3"
   }
]`}
                />
                <p>
                  Let&apos;s look at this example. It&apos;s trying to join two
                  streams, this (s1) and s2 and sending the output to stream s3.
                  Output is union of set &quot;iatr&quot; and &quot;ratr&quot;
                  (a, b, c, d, j1, j2, j3). The &quot;jqry&quot; is as defined
                  here for more information.
                </p>
                <aside className="doc-note">
                  <strong>Note: </strong>&quot;notf&quot; key, it says once
                  joined send notification using notif id 123. The notification
                  can be sent for filter as well. Please see{" "}
                  <Link href={"/notification"}>notificaton</Link> for more info.
                  <p>
                    One important thing to note here is &quot;type&quot;, which
                    is the type. It has meaning and there are more than one
                    types of join in the db which should be used for different
                    use cases, pls see{" "}
                    <Link href={"/complex-event-processing"}>CEP</Link> for more
                    information.
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

export async function getServerSideProps(context) {
  return {
    props: { streamSidebar: true },
  };
}
