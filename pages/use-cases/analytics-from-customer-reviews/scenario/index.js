import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../../components/Breadcrumb";
import DocArticle from "../../../../components/DocArticle";

export default function AFCRscenario() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Scenario of Customer reviews analytics use case</title>
        <meta
          name="description"
          content="Scenario of Customer reviews analytics use case - Checkout the detailed demo video or read the documentation to know about scenarios & solutions of this use case."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Scenario of Customer reviews analytics use case"
        />
        <meta
          property="og:description"
          content="Scenario of Customer reviews analytics use case - Checkout the detailed demo video or read the documentation to know about scenarios & solutions of this use case."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="Scenario of Customer reviews analytics use case"
        />
        <meta
          name="twitter:description"
          content="Scenario of Customer reviews analytics use case - Checkout the detailed demo video or read the documentation to know about scenarios & solutions of this use case."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">Scenario</h1>
        <div className="article-body">
          <p>
            Users and customers are sending their messages or reviews from their
            devices. There are several such messages streaming from different
            users into the system. We must first be able to ingest these
            messages in real time manner. Further we should be able to processes
            every single message and take corrective action as needed. The
            processes would include following:
          </p>
          <ol>
            <li>
              Set the streams and sliding window and ingest the data in these
              streams in continuous manner.
            </li>
            <li>
              Find out the sentiment of the message [ positve, negative ] using
              IE (information extraction).
            </li>
            <aside className="doc-note">
              <strong>Note: </strong>We can find out many different sentiments/
              emotions as we want, the demo deals with only two. We need to
              train a model here for this.
            </aside>
            <li>
              Filter messages with negative sentiment and put them in separate
              stream for further action / processing.
            </li>
            <li>
              Find out a definitive pattern and send such events matching the
              patter to another stream for further review / action. The patter
              is as follows:
            </li>
            <p>
              Any particular product that gets minimum 3 consequtive negative
              sentiment messages from different users in span of 1000 sec, find
              this pattern in continuous sliding manner.
            </p>
            <li>
              Store few tripples in graph store like (user, POSTS_REVIEW, prod)
              and (prod, HAS_REVIEWS, revid), revid id review id and prod is
              product.
            </li>
            <li>
              Set running stats for different attributes in the event such as
              uniquw count for users or min/max/avg/sdtdev/sum/kurt for amount
              spend etc.
            </li>
            <li>
              Set up reverse index for messages such that it can used for text
              search by the user.
            </li>
            <li>
              Set up secondary indexes for several attributes that could be
              helpful in query and also internal stream joins/ filter etc.
            </li>
          </ol>
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
