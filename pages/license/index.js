import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "../../components/Breadcrumb";

export default function License() {
  return (
    <React.Fragment>
      <Head>
        <title>License - BangDB</title>
        <meta
          name="description"
          content="License - BangDB 2.0 community version is based on BSD 3 license which allows users to use BangDB 2.0 free of cost."
        ></meta>
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="License - BangDB" />
        <meta
          property="og:description"
          content="License - BangDB 2.0 community version is based on BSD 3 license which allows users to use BangDB 2.0 free of cost."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="License - BangDB" />
        <meta
          name="twitter:description"
          content="License - BangDB 2.0 community version is based on BSD 3 license which allows users to use BangDB 2.0 free of cost."
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
              <h1 className="article-title">License</h1>
              <div className="article-body">
                <h2>Community</h2>
                <p>
                  BangDB 2.0 community version is based on BSD 3 license which
                  allows users to use BangDB 2.0 free of cost, the way they
                  would like to use it. Part of it also aligns with the Open
                  Source license model.
                </p>
                <figure
                  style={{
                    width: "30%",
                    margin: "0 auto",
                  }}
                >
                  <Image
                    alt="Open Source License - BangDB"
                    src="https://bangdb.com/wp-content/uploads/2020/03/BangDB_OSS_License.jpeg"
                    width={200}
                    height={172}
                  />
                </figure>
                <p>
                  BangDB 2.0 Enterprise edition comes with enterprise commercial
                  license and please get in touch with us to know more about it.
                  Please visit the{" "}
                  <Link
                    className="external"
                    href={"https://bangdb.com/contact-us"}
                    target={"_blank"}
                  >
                    contact page
                  </Link>{" "}
                  or send an e-mail to{" "}
                  <Link target="_blank" href={"mailto:info@bangdb.com"}>
                    info@bangdb.com
                  </Link>{" "}
                  or{" "}
                  <Link target="_blank" href={"mailto:sachin@bangdb.com"}>
                    sachin@bangdb.com
                  </Link>
                </p>
                <h2>Enterprise License</h2>
                <p>
                  All features of BangDB is covered in the enterprise license.
                  There are two kinds of enterprise license.
                </p>
                <ul>
                  <li>Enterprise License Basic</li>
                  <li>Enterprise License Custom</li>
                </ul>
                <p>
                  The details for these licenses are available at{" "}
                  <Link
                    className="external"
                    target={"_blank"}
                    href={"https://bangdb.com/pricing/"}
                  >
                    pricing
                  </Link>{" "}
                  page
                </p>
                <p>
                  The basic difference between these two licenses are in support
                  level and also at co-develop level.
                </p>
                <p>There are three different licenses available :-</p>
                <h3>L1 [ included in the platform cost]</h3>
                <ul>
                  <li>KT (Knowledge Transfer) - 4 hours [ one time]</li>
                  <li>DevOps, deployment support - 2 hours [ one time]</li>
                  <li>
                    Monitoring tools for the infrastructure - 2 hours [ one
                    time]
                  </li>
                  <li>Hot fixes as needed - ongoing</li>
                  <li>On-going monthly 8 hours of support</li>
                </ul>
                <h3>L2 [ in addition to the platform cost]</h3>
                <ul>
                  <li>All that is covered in L1, in addition</li>
                  <li>Owning the infra/deployment monitoring & management</li>
                  <li>Managing upgrades, updates, backup for database</li>
                  <li>Integration support</li>
                  <li>
                    15 USD per hour per head - 40 hours per week, min 2
                    engineers
                  </li>
                  <li>
                    We can add more engineers as needed, depending upon size of
                    deployment
                  </li>
                </ul>
                <h3>L3 [ in addition to the platform cost]</h3>
                <ul>
                  <li>All that is covered in L2, in addition</li>
                  <li>
                    Build solutions, apps along with customer team - additional
                    L3 engineers as required
                  </li>
                  <li>
                    Pre-sales and Sales support from BangDB/Tech perspective
                  </li>
                  <li>
                    YY USD per hour per head - 40 hours per week, min 2
                    engineers
                  </li>
                  <li>
                    15 USD per hour per head - 40 hours per week, min 2
                    engineers
                  </li>
                  <li>
                    We can add more engineers as needed, depending upon size of
                    deployment
                  </li>
                  <li>
                    Please get in touch with us to figure out the value, it
                    depends on nature of work
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </main>
      </section>
    </React.Fragment>
  );
}
