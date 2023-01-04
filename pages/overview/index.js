import React from "react";
import Head from "next/head";
import DocArticle from "../../components/DocArticle";
import Image from "next/image";
import Breadcrumb from "../../components/Breadcrumb";

export default function Overview() {
  return (
    <React.Fragment>
      <Head>
        <title>Overview - BangDB NoSQL Database</title>
        <meta
          name="description"
          content="Overview - BangDB is more than just a NoSql database. It is designed to help developers and users to solve problems with ease and speed."
        ></meta>
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Overview - BangDB NoSQL Database" />
        <meta
          property="og:description"
          content="Overview - BangDB is more than just a NoSql database. It is designed to help developers and users to solve problems with ease and speed."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="Overview - BangDB NoSQL Database" />
        <meta
          name="twitter:description"
          content="Overview - BangDB is more than just a NoSql database. It is designed to help developers and users to solve problems with ease and speed."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Introduction" url="/bangdb-introduction" />
        <h1 className="article-title">Overview</h1>
        <div className="article-body">
          <p>
            BangDB is more than just a NoSql database. It is designed to help
            developers and users to solve problems with ease and speed and build
            powerful applications by focusing on the use case and leaving the
            rest of the heavy lifting to the database.
          </p>
          <p>
            BangDB is a NoSQL database platform which allows developers to
            ingest any kind of data into the system in streaming or batch
            manner, then analyze the data in absolute and probabilistic ways in
            order to take some actions to optimize the business operations and
            do all these with very high speed to ensure continuous intelligence
            delivery out of the platform.
          </p>
          <p>
            BangDB could be thought as a converge data platform designed for the
            rapidly changing data trend and also to be resilient to tolerate
            future changes and requirements. NoSQL + AI + Stream is a way to sum
            up the proposition.
          </p>
          <p>
            When it comes to deal with the fast-moving data from devices, logs,
            clickstreams etc. we need to have streaming mechanism to easily
            ingest data. Ingestion alone will not do much as we need to
            continuously analyze data as it arrives. Therefore, we need to have
            timeseries data analysis system in place.
          </p>
          <p>
            It's important to note that bringing another streaming system and
            integrating it with the NoSql database will not be able to do the
            justice to both the “ease of use & faster time to market” from
            developers' perspective and “continuous intelligence with sub-sec
            latency” from the use case requirement angle. Hence, we must have
            streaming component natively integrated within the NoSQL itself.
          </p>
          <p>
            Similarly, more and more use cases are demanding predictive analysis
            which in turn requires machine learning or AI component. Again, in
            order to be able to train and predict on streaming data to achieve
            the goal of continuous intelligence, we must have AI component
            natively integrated within the NoSQL itself.
          </p>
          <Image
            alt="Overview of BangDB NoSQL Database"
            width={1000}
            height={163}
            src="https://bangdb.com/wp-content/uploads/2021/12/image1-1.png"
          />
          <p>
            Since we are talking about ingesting data from heterogenous set of
            sources, therefore it will not be possible to deal with upfront
            structuring of the data before ingestion can begin. At the same
            time, it will also be not prudent to define all data types in a
            singular structure. Hence if on one hand we need to worry about how
            to avoid structuring of the data then on the other hand we will need
            to employ more than one structure within the system down the stream
            in order to efficiently process, store and retrieve them.{" "}
          </p>
          <p>
            Therefore, multi modeling becomes important which allows us to deal
            with different data types in the same database, for ex; documents,
            timeseries, graph, opaque data etc. and at the same time it
            liberates us from putting brittle requirement of upfront structuring
            of the data.
          </p>
          <Image
            alt="Ingesting data - BangDB NoSQL Database"
            width={1000}
            height={141}
            src="https://bangdb.com/wp-content/uploads/2021/12/image2-1.png"
          />
          <p>
            Most of these data are coming from sensors, devices, logs, machines,
            etc. which are hyper local in nature. In order to process these
            data, most of the contemporary solutions or platforms/tools, take
            all these data into some cloud or data center and then process it
            before taking any action. This method has many problems and people
            have realized it already.
          </p>
          <p>
            While on one hand we have problem of taking lots of data over the
            wire to the cloud or data centers, at the same time we lose the
            opportunity to act quickly and locally even though the data and
            insights were all there at the local level.
          </p>
          <p>
            Therefore it not only becomes inefficient, cost intensive but at the
            same time it becomes very hard to enable the hyperlocal use cases.
            Hence, we need to have system which is connected from local to cloud
            or data center with ability to process and analyze data at both
            local and cloud level. This architecture demands embedded computing
            and analytics with store.
          </p>

          <Image
            alt="Embedded BangDB and BangDB on Cloud"
            width={1000}
            height={125}
            src="https://bangdb.com/wp-content/uploads/2021/12/image3-1.png"
          />
          <p>
            Further, most of the data platform in the market boasts of in-memory
            only platform. This to my mind is a limitation rather than a
            feature. Assembling lots of memory makes the proposition very costly
            and then irrespective of whatever is the size of memory, the system
            remains brittle in a sense that it will always require extra memory
            in order to process another byte beyond memory size.
          </p>
          <p>
            Therefore, we must get rid of the this "bug" and allow data to be
            overflowed to the disk. But going to disk makes the processing too
            slow and this was the main reasons why other platform went
            “in-memory” only approach.
          </p>
          <figure style={{ width: "50%", margin: "0 auto" }}>
            <Image
              alt="Growth or RAM vs Data log scale - BangDB NoSQL Database"
              width={600}
              height={535}
              src="https://bangdb.com/wp-content/uploads/2021/12/image4-1.png"
            />
          </figure>
          <p>
            BangDB implements IO-Layer which sits on top of ext3/4 like file
            system and allows db to use SSDs to enhance the performance even
            when it overflows from memory to fs. Within a boundary, this
            mechanism allows us to go beyond memory and degrade gracefully for
            long period of time until the system scales for higher load.
          </p>
          <p>
            This especially very helpful for the scenarios where the system has
            to be designed for peak load even though that peak exists for tiny
            part of the computing life cycle. Further, it brings the needed
            flexibility and resilience when it comes to dealing for burst of
            data supply and system will not fail for the need of more memory but
            instead will handle the scenario gracefully and allow it to continue
            function without break. Finally, with the use of SSD is a particular
            way, overall cost gets reduced significantly since it no longer
            requires assembly of lots of memory upfront.
          </p>
          <figure style={{ width: "50%", margin: "40px auto" }}>
            <Image
              alt="Memory and Virtual Memory - BangDB NoSQL Database"
              width={600}
              height={210}
              src="https://bangdb.com/wp-content/uploads/2021/12/image5-1.png"
            />
          </figure>
          <p>
            Therefore, BangDB is designed for all these trends and requirements
            and it has been developed from ground up in C/C++ to align with the
            use cases, requirements and pain points of the developers and users.
            We are in process of adding lot more binaries in coming days and we
            will be very aggressive in adding more capabilities and features.
          </p>
          <p>
            Since BangDB allows us to control the data and the way we deal with
            it, same should get transferred to the developers and users.
          </p>
        </div>
      </DocArticle>
    </React.Fragment>
  );
}
