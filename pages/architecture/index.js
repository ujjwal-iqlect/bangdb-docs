import React from "react";
import Head from "next/head";
import Image from "next/image";
import Breadcrumb from "../../components/Breadcrumb";

export default function Architecture() {
  return (
    <React.Fragment>
      <Head>
        <title>Architecture - BangDB</title>
        <meta
          name="description"
          content="BangDB Architecture - BangDB comes with lots of elements converged into it. We have to look at it from convergence point of view before..."
        ></meta>
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Architecture - BangDB" />
        <meta
          property="og:description"
          content="BangDB Architecture - BangDB comes with lots of elements converged into it. We have to look at it from convergence point of view before..."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="Architecture - BangDB" />
        <meta
          name="twitter:description"
          content="BangDB Architecture - BangDB comes with lots of elements converged into it. We have to look at it from convergence point of view before..."
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
              <h1 className="article-title">Architecture</h1>
              <p></p>
              <div className="article-body">
                <p>
                  BangDB comes with lots of elements converged into it. We have
                  to look at it from convergence point of view before we go into
                  details. Here is the high level view of BangDB. It indicates
                  the community and enterprise angles clearly and at the same
                  time explains the different layers as well.
                </p>
                <Image
                  alt="BangDB Architecture"
                  width={752}
                  height={454}
                  src="https://bangdb.com/wp-content/uploads/2020/03/BangDB_Architecture_HL.png"
                />
                <p>
                  Lowest layer is about data ingestion. BangDB implements set of
                  data ingestion agents. Apart from that it can also use the
                  protocols like SMTP, Bacnet protocol and directly ingest data
                  if access is provided. The log file ingestion mechanism may
                  use IE to do the transformation in automated manner if
                  enabled. Most of these elements come with Enterprise license.
                </p>
                <p>
                  The processing layer is where data is processed. Please note
                  that the data is not yet on the file system and it&apos;s analysed
                  much before that. Convergence allows BangDB to avoid network
                  hops and also hitting the file system before analysis, this
                  reduces latency to a level which can&apos;t be matched with siloed
                  system
                </p>
                <p>
                  Further, Access and integration layer allow BangDB to connect
                  with ecosystem, such as hadoop, RDB etc. This is useful when
                  we process large amount of data mostly for real time and then
                  archive to batch system like hadoop.
                </p>
                <p>
                  Finally, The dashboard layer, which allows users to build
                  applications in simple manner and publish them for deployment
                  or usage. This can be provisioned on any cloud and deployed
                  within few minutes.
                </p>
                <h2>Under the hood Architecture</h2>
                <p>
                  Now let&apos;s go bit under the hood and see the components.
                  Here is the high level view of the stack or component layer as
                  they stack up.
                </p>
                <Image
                  style={{
                    maxWidth: "80%",
                  }}
                  alt="Under the hood Architecture - BangDB"
                  height={772}
                  width={1093}
                  src="https://bangdb.com/wp-content/uploads/2022/09/High-Level-BangDB-Stack.svg"
                />
                <p>
                  The stacks are self explanatory, however, we must appreciate
                  that in the converged model, we have most of the necessary
                  elements/components or pieces packed in a single box or in a
                  single process, and then that becomes the unit of compute.
                  This unit of compute is what scalable in horizontal manner in
                  order to process huge amount of data.
                </p>
                <p>
                  Therefore, while there is a fabric from high level, within a
                  node as well there is similar fabric to ensure the processing
                  efficiency. More on these in separate topic of distribution
                  etc.
                </p>
              </div>
            </article>
          </div>
        </main>
      </section>
    </React.Fragment>
  );
}
