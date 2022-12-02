import React from "react";
import Head from "next/head";
import Image from "next/image";
import Breadcrumb from "../../components/Breadcrumb";

export default function MultiFlavour() {
  return (
    <React.Fragment>
      <Head>
        <title>Multi Flavour - BangDB</title>
        <meta
          name="description"
          content="Multi Flavor - BangDB runs in different ways as required by different use cases. For example, if an app needs to run in device or server"
        ></meta>
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Multi Flavour - BangDB" />
        <meta
          property="og:description"
          content="Multi Flavor - BangDB runs in different ways as required by different use cases. For example, if an app needs to run in device or server"
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="Multi Flavour - BangDB" />
        <meta
          name="twitter:description"
          content="Multi Flavor - BangDB runs in different ways as required by different use cases. For example, if an app needs to run in device or server"
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
              <Breadcrumb text="Introduction" url="/bangdb-introduction" />
              <h1 className="article-title">Multi flavour</h1>
              <div className="article-body">
                <p>
                  BangDB is a multi flavor database that runs in different ways
                  as required by different use cases. For example, if an app
                  needs to run in device or microprocessor or server, but the
                  app requirement is to link the db directly into the program or
                  process then BangDB could be simply used like that. BangDB
                  runs in Raspberry pi, or linux, windows or Mac as required.
                  It&apos;s very similar to the way BerkeleyDB runs or LevelDB
                  runs.
                </p>
                <p>
                  There are plenty of use cases where embedded and multi flavor
                  database is needed. But in the case of IOT, there are many
                  reasons why embedded BangDB would be useful. Hyper local
                  analysis demands this way of functioning and it has numerous
                  benefits.
                </p>
                <p>
                  For example, since the BangDB will be within microprocessor
                  therefore it will be able to do some analysis, find some
                  patterns and take some action immediately without having to
                  wait for server for response after forwarding data to it.
                </p>
                <p>
                  By doing this we achieve the level of latency we need for
                  users to take decision faster which could result in
                  significant saving of time, cost and productivity. Further we
                  reduce the amount of data to be sent over the wire to the
                  cloud which could result in huge cost, energy saving.
                  Therefore, embedded computing and analysis is the need of the
                  hour.
                </p>
                <Image
                  alt="BangDB Multi-flavour database"
                  width={745}
                  height={275}
                  src="https://bangdb.com/wp-content/uploads/2020/03/BangDB_Multiflaour.png"
                />
                <p>
                  BangDB also comes in Client Server mode, where clients connect
                  and interact with the server over the network. Server may have
                  slaves attached to it where data could keep replicating to the
                  them from the server. This model is pretty good for many use
                  cases and also to handle larger amount of data and do lot more
                  computations than it is possible in embedded scenario.
                  Majority of the use cases would fit this model and from both
                  volume of data, speed of processing and also use cases
                  perspective.
                </p>
                <p>
                  BangDB also runs in fully distributed mode where the data is
                  distributed among different participating nodes. This is
                  achieved using consistent hashing over a virtual network
                  overlay implementing chord algorithm. This is a masterless
                  scenario implemented using p2p model, which allows high level
                  of churning in the cluster. It&apos;s highly suitable for
                  linear scaling for higher volume of data with minimal admin
                  support required to maintain the system. This is also suitable
                  for scale up and down at run time in a simple manner which may
                  result to cost efficiency and at the same time high
                  performance for huge amount of data.
                </p>
                <p>
                  Finally, BangDB enterprise comes with an interactive dashboard
                  and portal behind it to allow developers and users to create
                  applications (apps) in a real simple manner with little or no
                  coding at all. This allows domain experts to build use cases
                  and deploy in time accelerated manner in simple dashboard
                  driven manner.
                </p>
                <p>
                  There is a AppStore associated with it and apps could be
                  further published for someone else to simply download,
                  configure and use it. We have built several apps and they are
                  already published for users to simple take and use it for
                  powerful use cases in the domain like ecommerce, payment, data
                  center, infrastructure, etc.
                </p>
                <p>
                  Integrated AI and Stream allow users to simply ingest data,
                  create models, test and deploy models with just few clicks.
                  This gives lots of power and capability to the users who know
                  what they want to build leaving heavy tech lifting to the
                  BangDB.
                </p>
              </div>
            </article>
          </div>
        </main>
      </section>
    </React.Fragment>
  );
}
