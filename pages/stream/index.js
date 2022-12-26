import React from "react";
import Head from "next/head";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import Codebox from "../../components/Codebox";
import HighlightedOutput from "../../components/HighlightedOutput";

export default function Stream() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Stream - BangDB</title>
        <meta
          name="description"
          content="BangDB Stream - Stream is a concept which is available in all flavours of BangDB i.e. embedded, Server and p2p."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Stream - BangDB" />
        <meta
          property="og:description"
          content="BangDB Stream - Stream is a concept which is available in all flavours of BangDB i.e. embedded, Server and p2p."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="Stream - BangDB" />
        <meta
          name="twitter:description"
          content="BangDB Stream - Stream is a concept which is available in all flavours of BangDB i.e. embedded, Server and p2p."
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
              <h1 className="article-title">Stream</h1>
              <div className="article-body">
                <p>
                  Stream is a concept which is available in all flavours of
                  BangDB i.e. embedded, Server and p2p. However, minor
                  behavioural changes could be there with respect to the flavour
                  of the db, but more than 95% of things related to stream would
                  remain same across all different BangDB flavours.
                </p>
                <h2>Stream processing</h2>
                <p>
                  The meaning of stream processing in BangDB is the handling of
                  set of events or data which is time sensitive or time-series
                  in nature. The handling of events start from ingesting these
                  data into the system, then processing them for various
                  dimensions, running CEP (complex event processing) for
                  identifying patterns in absolute manner, then for
                  probabilistic processing, training to predicting on these data
                  and in the end taking some action as required. Finally storing
                  the data for further analysis or BI. Visualisation is kind of
                  associated with it, but not required from core processing
                  perspective.
                </p>
                <p>
                  This whole process from beginning to end can be cumbersome and
                  difficult to put together and there are several reasons for
                  the same, starting from ingestion to processing (batch or
                  otherwise) to model training or prediction to finding
                  interesting patterns to taking action to storing data for BI
                  or visualisation. In many cases, developer has to take
                  different components from different vendors/open sources, then
                  stitch them and then write some application on top of it.
                </p>
                <p>
                  Even if there are some basic framework available, it&apos;s
                  hard to deal with them due to time to get started, to be able
                  to process every single event to avoid batch processing to
                  manage and scale the system well and finally to enable newer
                  advanced use cases in continuous manner. Moreover, in many
                  cases upfront structuring of data is very difficult and then
                  being flexible to changes in the data structure at run time is
                  even more complex as they tend to break the processing.
                </p>
                <p>
                  BangDB has designed the streaming system keeping all of these
                  in mind. Focus has been on to enable developer to quickly
                  start with the problem at hand without spending time and
                  resources on stitchin a platform, then writing code for
                  parsing data, then write code to process data then to train
                  model somewhere else and deploy them in the pipeline, then
                  store data somewhere else, then plug in visualisation etc.
                  With BangDB developer can get started in very simple yet
                  powerful manner.
                </p>
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
