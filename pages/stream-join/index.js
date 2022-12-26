import React from "react";
import Head from "next/head";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export default function StreamJoin() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Stream Join - BangDB</title>
        <meta
          name="description"
          content="Stream Join - It is important to join the streams and join stream continuously as the data streams in to different streams."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Stream Join - BangDB" />
        <meta
          property="og:description"
          content="Stream Join - It is important to join the streams and join stream continuously as the data streams in to different streams."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="Stream Join - BangDB" />
        <meta
          name="twitter:description"
          content="Stream Join - It is important to join the streams and join stream continuously as the data streams in to different streams."
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
              <h1 className="article-title">Stream Join</h1>
              <div className="article-body">
                <p>
                  It&apos;s important to join the streams and join them
                  continuously as data streams in to different streams. However,
                  this is not as simple as joining two tables which have data
                  pretty much static in nature. Here the data is coming in, with
                  different timestamps, in different random order and then we
                  may wish to join the streams where data from one stream could
                  be moving faster than the other one. Most of the time there
                  won&apos;t be same number of events coming in from two
                  different streams.
                </p>
                <p>
                  Further, depending upon use cases, we may wish to join any two
                  data based on some condition or wish to chose the latest event
                  in one or both the streams etc. Therefore, it&apos;s important
                  that the db support more than one kind of join.
                </p>
                <p>Broadly, there are three ways to join:</p>
                <ol>
                  <li>
                    <strong>Simple join</strong> - join two latest data streams,
                    i.e. the latest data (if the condition satisfies) from both
                    the joining streams.
                  </li>
                  <li>
                    <strong>Active join</strong> - One of the two participating
                    streams will be active join stream, other will be passive.
                  </li>
                  <li>
                    <strong>Passive join</strong> - One of the two participating
                    streams will be passive join stream, other will be active.
                  </li>
                </ol>
                <p>
                  There are few types of joins defined and they should be used
                  for different use cases. Following are the types of joins
                  supported in the BangDB:
                </p>
                <aside className="doc-api-code">
                  <h4>join</h4>
                  <p>
                    join_type = 1 means only once join. [ no active passive,
                    both streams will join actively ].
                  </p>
                  <p>
                    join_type = 2 means passive join (not necessarily the
                    latest).
                  </p>
                  <p>
                    join_type = 3 means passive join but join with the latest
                    one.
                  </p>
                  <p>
                    join_type = 4 means active join (not necessarily the
                    latest).
                  </p>
                  <p>
                    join_type = 5 means active join but with the latest one.
                  </p>
                  <p>
                    join_type = 6 means simple cep join, typically it involves
                    only one stream, hence self join case, but used in cep query
                    only (2,4) and (3,5) go together.
                  </p>
                </aside>
                <p>
                  Active, passive join concept is created to ensure we allow
                  proper join as required by the case. Stream which is joining
                  actively, will be responsible for actual join while stream
                  which is joining passively can participate in the process.
                  This means passive stream will simply check if basic condition
                  satisfies then it will place itself for next join candidate.
                </p>
                <h2>Simple join</h2>
                <p>
                  Here the two streams joins the data based on the condition
                  with the latest data from the slower stream and last
                  non-joined data from the faster stream. So if we have two
                  streams - s1 and s2 and we have data coming in like following:
                </p>
                <aside className="doc-api-code">
                  <p>
                    join_type = 1, defined in both streams. join condition is
                    points in both the stream should be same, basically join
                    temperature and pressure streams for same points.
                  </p>
                  <p>
                    s1 s2
                    <br />
                    t11 v11 p1
                    <br />
                    t21 v21 p2
                    <br />
                    t22 v22 p1
                    <br />
                    t23 v23 p1
                    <br />
                    t24 v24 p1
                    <br />
                    t12 v12 p2
                    <br />
                    t25 v25 p1
                    <br />
                    t26 v26 p2
                    <br />
                    t13 v13 p1
                  </p>
                  <p>
                    Here if we join stream in &quot;simple manner&quot;
                    (&quot;type&quot; = ) then following will be the events in
                    joined stream s3.
                  </p>
                  <p>
                    s3
                    <br />
                    t22 v11 v22 p1
                    <br />
                    t12 v12 v21 p2
                    <br />
                    t13 v13 v23 p1 …
                  </p>
                  <p>
                    As you notice, both streams are joining actively, and they
                    join with the latest event that are not joined yet and once
                    joined the events are not used further. Also note that the
                    pointer for events in both streams move as it joins the
                    event, and even if speed is different it ensures that
                    multiple redundant join doesn&apos;t happen repeating the
                    events.
                  </p>
                </aside>
                <p>
                  Once event (t11, v11) and (t22, v22) are joined, even though
                  we got (t23, v23) it waited until next event in s1 was
                  received. It didn&apos;t join with the older event of s1.
                  Therefore, once an event has been joined, the same event is
                  not used for next or subsequent join. Stream manager waits for
                  next event and then it joins with the earliest non-joined
                  event of the other stream.
                </p>

                <h2>Active passive join</h2>
                <p>
                  Here we have one stream which does active join and the other
                  stream which simply participates passively in the join
                  process. Here we have two types of such joins, one is where
                  the join happens with only latest events whenever possible and
                  the other one is where join happens not necessarily with the
                  latest but the available ones. Let&apos;s see examples for
                  each to get the clarity.
                </p>
                <aside className="doc-api-code">
                  <p>
                    For the same data pattern, let&apos;s say s2 is the active
                    stream, therefore only s2 will initiate join. This join will
                    invalidate data only if new data is not arrived join_type =
                    3 for passive, and 5 for active stream joined stream will
                    have following data:
                  </p>
                  <p>
                    s3
                    <br />
                    t22 v11 v22 p1
                    <br />
                    t23 v11 v23 p1
                    <br />
                    t24 v11 v24 p1
                    <br />
                    t25 v11 v25 p1
                    <br />
                    t26 v12 v26 p2
                    <br />
                    t24 v12 v24 …
                  </p>
                </aside>
                <p>
                  As you see, the data kept joining with the other (passive)
                  stream latest data, the moment newer data arrived in the
                  active stream. This is different from simple join(type = 1) or
                  active - active join where once joined same data/event was not
                  used again for the join.
                </p>
                <p>
                  Here in case of active-passive (type = 3 and 5), active join
                  will never reuse the joined data but passive will keep using
                  the events for join as we get more events in active stream.
                </p>
                <aside className="doc-api-code">
                  <p>
                    Now let&apos;s say, we wish to join with s2 as the active
                    stream, but with invalidation of the previous data with new
                    data no matter what the condition might be.
                  </p>
                  <p>
                    join_type = 2
                    <br />
                    for passive, and 4 for active stream
                    <br />
                    s3
                    <br />
                    t22 v11 v22 p1
                    <br />
                    t23 v11 v23 p1
                    <br />
                    t24 v11 v24 p1
                    <br />
                    t26 v12 v26 p2
                    <br />
                    t24 v12 v24 …
                  </p>
                  <p>
                    If you notice, you will find this is very similar to the
                    previous one, except we don&apos;t have event (t25, v11,
                    v25, p1) in this joined stream. Basically, passive stream
                    event is kept joining with the active stream new events
                    until passive stream receive new data, then the latest from
                    passive joins.
                  </p>
                  <p>
                    Now, let see some of the examples here for more clarity.
                  </p>
                  <ul>
                    <li>
                      <Link href={`/join-example-1`}>Example 1</Link>
                    </li>
                    <li>
                      <Link href={`/join-example-2`}>Example 2</Link>
                    </li>
                    <li>
                      <Link href={`/join-example-3`}>Example 3</Link>
                    </li>
                  </ul>
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
