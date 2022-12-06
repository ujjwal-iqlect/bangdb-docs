import React from "react";
import Head from "next/head";
import Breadcrumb from "../../components/Breadcrumb";
import HighlightedCpp from "../../components/HighlightedCpp";

export default function GroupBy() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Group By (GPBY) - BangDB</title>
        <meta
          name="description"
          content="Group By - This is as name suggests, Group By (GPBY), which is computed continuously and is always ready to be consumed."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Group By (GPBY) - BangDB" />
        <meta
          property="og:description"
          content="Group By - This is as name suggests, Group By (GPBY), which is computed continuously and is always ready to be consumed."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="Group By (GPBY) - BangDB" />
        <meta
          name="twitter:description"
          content="Group By - This is as name suggests, Group By (GPBY), which is computed continuously and is always ready to be consumed."
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
              <h1 className="article-title">Group By</h1>
              <div className="article-body">
                <p>
                  This as name suggests, gpby (groupby), which is computed
                  continuously and is always ready to be consumed. Every
                  processing with the db for stream is always updated for every
                  single event and this enables us to deal with continuously
                  running run time queries. This is super efficient, fast and
                  clean way for continuous running analysis.
                </p>
                <HighlightedCpp
                  code={`"gpby":[
   {
      "gpat":[
         "a",
         "b"
      ],
      "iatr":"c",
      "stat":1,
      "gran":3600,
      "swsz":86400,
      "kysz":48
   },
   {
      "gpat":[
         "a"
      ],
      "iatr":"d",
      "stat":2,
      "gran":300,
      "swsz":864000,
      "kysz":32
   }
]`}
                />
                <p>Let&apos;s look at each one now at a time.</p>
                <HighlightedCpp
                  code={`{"gpat":["a", "b"], "iatr":"c", "stat":1, "gran":3600, "swsz":86400, "kysz":48}`}
                />
                <p>
                  This tells the db to groupby (a, b) for input attribute c, set
                  the keysize as 48 (this is to specify max length of the gpby
                  name) for granularity &quot;gran&quot;: 3600 with sliding
                  window size of 1 day (86400 sec) and finally &quot;stat&quot;
                  dictates what to do here.
                </p>
                <p>
                  For example: &quot;stat&quot; : 1 means count. This allows db
                  to keep computing gpby for c by (a, b) every hour. so in
                  typical sql language sense, it&apos;s select c from table1
                  groupby a, b.
                </p>
                <aside className="doc-note">
                  <strong>Note: </strong>gpat -&gt; is groupby attributes in
                  typical sql query. iatr -&gt; attribute on which aggregation
                  occurs stat -&gt; what kind of aggregation we want? count(1),
                  unique count(2), running stats(3) etc… Please note, count
                  happens for string and fixed type attribute, unique count for
                  string and running stats for fixed type (long, double) gran
                  -&gt; what&apos;s the granularity for the aggregation?
                  <p>
                    For example: aggregated value for 300 secs will keep the
                    aggregated value for 5 min and several 5 min data will be
                    there swsz -&gt; How long you would like these aggregated
                    data to be there? 86400 sec would mean keep it for 1 day
                    kysz -&gt; each aggregated data is stored with composite
                    string as key.
                  </p>
                </aside>
                <p>
                  The composite string is formed as follows; nts:attr1:attr2
                  Here attr1 and attr2 the attributes that appear in gpat array
                  i.e. groupby attributes. The order is followed as it&apos;s
                  defined in the gpat array. nts means nth time stamp tick since
                  begining of epoch. It depends on gran value. Therefore, if
                  gran is 60 sec, the nts is nth minute since epoch
                </p>
                <p>
                  For example: if we replace a with category id, b with page id
                  and c with visitor id, then this gpby scheme tells &quot;count
                  num of visitors groupby category and page in one hour&quot;
                  etc.
                </p>
                <HighlightedCpp
                  code={`{"gpat":["a"], "iatr":"d", "stat":2, "gran":300, "swsz":864000, "kysz":32}`}
                />
                <p>
                  This one is also similar except it tells do unique count
                  (stat:2)
                </p>
                <p>
                  So for example, it could be unique visitor count every day
                  etc.
                </p>
                <aside className="doc-note">
                  <strong>Note: </strong>It&apos;s is self evident but good to
                  emphasise that all these computations are happening at run
                  time for every single event. This allows us to do run time
                  continuous pattern identification (such as anomaly detection)
                  etc. but also to return the data instantly when it comes to
                  query as the post processing for data won&apos;t happen and
                  data is already in ready to be consumed state. This is true
                  for all other computations as well in BangDB.
                </aside>
              </div>
            </article>
          </div>
        </main>
      </section>
    </React.Fragment>
  );
}
