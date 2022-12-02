import React from "react";
import Head from "next/head";
import Breadcrumb from "../../components/Breadcrumb";

export default function LanguageSupport() {
  return (
    <React.Fragment>
      <Head>
        <title>Language support - BangDB</title>
        <meta
          name="description"
          content="BangDB Language Support - BangDB core or embedded is implemented in C/C++. BangDB doesn't use any template library etc."
        ></meta>
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Language support - BangDB" />
        <meta
          property="og:description"
          content="BangDB Language Support - BangDB core or embedded is implemented in C/C++. BangDB doesn't use any template library etc."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="Language support - BangDB" />
        <meta
          name="twitter:description"
          content="BangDB Language Support - BangDB core or embedded is implemented in C/C++. BangDB doesn't use any template library etc."
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
              <h1 className="article-title">Language support</h1>
              <div className="article-body">
                <h2>BangDB Clients</h2>
                <p>
                  BangDB language support - BangDB core or embedded is
                  implemented in C/C++. BangDB doesn&apos;t use any template
                  library etc. that come from either C++ or other related
                  framework. It doesn&apos;t use any framework as well.
                </p>
                <p>
                  BangDB is implemented in mostly in C but it uses C++ classes
                  and some features for better code organisation and API
                  signature, therefore it&apos;s compiled in C++. The other
                  internal frameworks like stream, CEP, ML, DL, IE etc. are all
                  implemented in C only.
                </p>
                <p>
                  The reason to implement in such a manner was to get the
                  control of the all that goes on within the db and at the same
                  time remove the layers of abstractions to gain performance.
                  Further it also allowed us to run within devices without any
                  problems.
                </p>
                <p>
                  Primary BangDB client is also written in C/C++ however there
                  are many language bindings in multiple languages available
                  such as:
                </p>
                <ul>
                  <li>C++</li>
                  <li>C#</li>
                  <li>Java</li>
                  <li>Python</li>
                </ul>
                <p>
                  We will be adding <strong>JavaScript</strong> very soon and
                  update the manual accordingly
                </p>
              </div>
            </article>
          </div>
        </main>
      </section>
    </React.Fragment>
  );
}
