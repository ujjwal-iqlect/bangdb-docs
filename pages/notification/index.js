import React from "react";
import Head from "next/head";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import HighlightedCpp from "../../components/HighlightedCpp";

export default function Notification() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Notification (NOTIF) - BangDB</title>
        <meta
          name="description"
          content="Notification (Notif) is registered with the db or BangDB Stream manager (bsm) or it can be directly made part of the schema."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Notification (NOTIF) - BangDB" />
        <meta
          property="og:description"
          content="Notification (Notif) is registered with the db or BangDB Stream manager (bsm) or it can be directly made part of the schema."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="Notification (NOTIF) - BangDB" />
        <meta
          name="twitter:description"
          content="Notification (Notif) is registered with the db or BangDB Stream manager (bsm) or it can be directly made part of the schema."
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
              <h1 className="article-title">Notification (NOTIF)</h1>
              <div className="article-body">
                <p>
                  Notification (NOTIF) is registered with the db or BangDB
                  Stream manager (bsm) or it can be directly made part of the
                  schema. Notification has metadata that gets registered with
                  the db/bsm is as follows:
                </p>

                <HighlightedCpp
                  code={`"notifs":[
    {
       "notifid":12345,
       "name":"notif1",
       "msg":"users msg",
       "rule":"notification rule/condition",
       "pri":1,
       "mailto":[
          
       ],
       "endpoints":[
          "http://192.168.1.49:10102/account"
       ],
       "schemaid":1234,
       "notif_streamid":4321,
       "notif_stream_name":"sdf",
       "freq":1,
       "tags":[
          "a"
       ],
       "rel_streams":[
          "s1"
       ]
    }
]`}
                />
                <p>
                  It has id associated with it, along with name provided by the
                  user. Please note the id is not computed one, but provided by
                  the user. &quot;msg&quot; is user defined message that should
                  be part of every notification sent. &quot;rule&quot; is not
                  used at this moment but in sometime it will have some useful
                  processing logic. &quot;pri&quot; is priority set by the user.
                  Since notification could also be stored in some stream, hence
                  <code>&quot;notif_stream_name&quot;</code> is for this, not
                  necessary in all cases.
                </p>
                <p>
                  When notification is sent, it&apos;s sent for certain event.
                  Therefore, before sending it to the user or to the end point,
                  the event which caused the notification is also added to the
                  data. It&apos;s done using a key “event” with value as the
                  entire event data which caused it. Please see the{" "}
                  <Link href={"/bangdb-notification-manager-api"}>
                    Notification C++ API
                  </Link>{" "}
                  for details on the API.
                </p>
                <p>
                  The notification can be sent to an endpoint which knows how to
                  parse the data. It can also be sent to user over mail.
                  Endpoint can be implemented in such a manner which can trigger
                  some action to automate the process. The onus on implementing
                  the end point API is up to the user as they know best about
                  how to use the notification event for their operations.
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
