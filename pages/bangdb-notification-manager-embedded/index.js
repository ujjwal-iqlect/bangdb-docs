import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import DocArticle from "../../components/DocArticle";
import Breadcrumb from "../../components/Breadcrumb";
import HighlightedCpp from "../../components/HighlightedCpp";
import HighlightedJava from "../../components/HighlightedJava";

export default function BangdbNotificationManagerEmbedded() {
  const [tab, setTab] = useState(1);

  return (
    <React.Fragment>
      <Head>
        <title>Notification Manager (Embedded) - BangDB</title>
        <meta
          name="description"
          content="Learn more about BangDB Notification Manager (Embedded). Read the documentation to learn to make embedded applications using BangDB."
        ></meta>
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Stream Manager (Embedded) - BangDB"
        />
        <meta
          property="og:description"
          content="Learn more about BangDB Notification Manager (Embedded). Read the documentation to learn to make embedded applications using BangDB."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="Notification Manager (Embedded) - BangDB"
        />
        <meta
          name="twitter:description"
          content="Learn more about BangDB Notification Manager (Embedded). Read the documentation to learn to make embedded applications using BangDB."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Embedded API" url="/bangdb-api" />
        <h1 className="article-title">Notification Manager (Embedded)</h1>
        <div className="article-body">
          <div className="tab-shifter">
            <div className="tab-wrapper">
              <div className="tab" onClick={() => setTab(1)}>
                <span className={tab !== 1 ? null : "active"}>C++</span>
              </div>
              <div className="tab" onClick={() => setTab(2)}>
                <span className={tab !== 2 ? null : "active"}>Java</span>
              </div>
            </div>
          </div>
          <div
            style={{
              display: tab === 1 ? "block" : "none",
            }}
          >
            <p>To get instance of notification manager</p>
            <HighlightedCpp
              code={`BangDB Notification Manager (BangDBEnv *env, int nthreads = 4);`}
            />
            <p>
              This returns an instance of notification manager given reference
              to BangDBEnv and number of threads that should be given to the
              manager to manage the notifications. See BangDBEnv for more
              details on the db environment.
            </p>
            <p>To create or register a notification</p>
            <HighlightedCpp
              code={`int registerNotification(const char *notif_meta);`}
            />
            <p>
              It takes notification metadata as input. Example of notification
              metadata.
            </p>
            <HighlightedCpp
              code={` {
   "notifid":12345,
   "name":"notif1",
   "msg":"users msg",
   "pri":1,
   "mailto":[],
   "endpoints":[
      "http://192.168.1.3:10101/account"
   ],
   "schemaid":1234,
   "freq":1
}`}
            />
            <p>It returns -1 for error else 0.</p>
            <p>To drop or deregister a notification</p>
            <HighlightedCpp
              code={`void deregisterNotification(long notifid, short state);`}
            />
            <p>
              state = 0 means pause, 1 means activate, -1 means delete
              completely.
              <br />
              <code>notifid</code> is the unique id which the user has provided
              while registering the notification. This API puts the notification
              in the queue for processing.
            </p>
            <HighlightedCpp
              code={`int put(long notifid, long pkts, long orig_streamid, const char *notif);`}
            />
            <p>
              <code>pkts</code> is the pk (timestamp) of the data which is in
              stream. This checks if notification is needed or not and if
              needed, then it queues the notifid for further work. It return 0
              for success. To get a list for notification generated based on
              given condition and filter query. This is exactly similar to{" "}
              <code>scanDoc</code> on BangDBTable. Please see DataQuery for more
              details on effective and right way of scan.
            </p>
            <HighlightedCpp
              code={`ResultSet * scanDoc(
   ResultSet * prev_rs,
   FDT * pk_skey = NULL,
   FDT * pk_ekey = NULL,
   const char * idx_filter_json = NULL,
   ScanFilter * sf = NULL
);`}
            />
            <p>It returns ResultSet if successful else NULL.</p>
            <p>
              To get a list of registered notifications, call this function.
              This takes filter query and can do recursive scans. See{" "}
              <Link href={"/dataquery"}>DataQuery</Link> for more details.
            </p>
            <HighlightedCpp
              code={`ResultSet * scanRegisteredNotif(
   ResultSet * prev_rs,
   FDT * pk_skey = NULL,
   FDT * pk_ekey = NULL,
   const char * idx_filter_json = NULL,
   ScanFilter * sf = NULL
);`}
            />
            <p>It returns NULL for error.</p>
            <p>To close Notification Manager</p>
            <HighlightedCpp
              code={`void close Notification Manager (CloseType ctype = DEFAULT_AT_CLIENT);`}
            />
            <div className="doc-api-code">
              <p>ClosedType is an enum with following values:</p>
              <p>
                DEFAULT_AT_CLIENT,
                <br />
                CONSERVATIVE_AT_SERVER,
                <br />
                OPTIMISTIC_AT_SERVER,
                <br />
                CLEANCLOSE_AT_SERVER,
                <br />
                SIMPLECLOSE_AT_SERVER,
                <br />
                DEFAULT_AT_SERVER
                <br />
              </p>
              <p>
                Please see more on this at{" "}
                <Link href="/bangdb-client-common">bangdb common</Link>.
              </p>
            </div>
          </div>
          <div
            style={{
              display: tab === 2 ? "block" : "none",
            }}
          >
            <p>To create NotificationManager object</p>
            <HighlightedJava
              code={`public BangDBNotificationManager(BangDBEnv bdbenv)`}
            />
            <p>
              This returns an instance of notification manager given reference
              to BangDBEnv and number of threads that should be given to the
              manager to manage the notifications. See BangDBEnv for more
              details on the db environment.
            </p>
            <p>To register a notification</p>
            <HighlightedJava
              code={`public int registerNotification(String notif_meta)`}
            />
            <p>
              <code>Notif_meta</code> is a json string which looks like:
            </p>
            <HighlightedJava
              code={`{
                      "notifid":12345,
                      "name":"notif1",
                      "msg":"users msg",
                      "rule":"notification rule/condition",
                      "pri":1,
                      "mailto":[], 
                      "endpoints":[],
                      "schemaid":1234,
                      "freq":1
                    }`}
            />
            <p>It returns -1 for error else 0</p>
            <p>To de-register or delete a registered notification</p>
            <HighlightedJava
              code={`public int deregisterNotification(long notifid, short state)`}
            />
            <p>
              The <code>notifid</code> is unique id provided by user when the
              notification was registered and state = 0 means pause, 1 means
              activate, -1 means delete completely. This API puts the
              notification in the queue for processing.
            </p>
            <HighlightedJava
              code={`public int put(long notifid, long pks, long orig_strmid, String notif)`}
            />
            <p>
              <code>pkts</code> is the pk (timestamp) of the data which is in
              stream. This checks if notification is needed or not and if
              needed, then it queues the notifid for further work. Queued item
              must be sent to the respective destination. If it doesn&apos;t
              need to send the notification then it calls send_notification with
              op = 0 to update the cnt, lts etc. and returns - it doesn&apos;t
              queue.
            </p>
            <p>
              To get the list for notification generated based on given
              condition and filter query. This is exactly similar to scanDoc on
              BangDBTable. Please see DataQuery for more details on effective
              and right way of scan.
            </p>
            <HighlightedJava
              code={`public ResultSet scanRegisteredNotif(
                      ResultSet prev_rs,
                      long k1,
                      long k2,
                      String idx_filter_json,
                      ScanFilter sf
                      )`}
            />
            <p>To close the notification manager</p>
            <HighlightedJava
              code={`public int closeNotificationManager(CloseType closetype)`}
            />
            <div className="doc-api-code">
              <p>ClosedType is an enum with following values:</p>
              <p>
                DEFAULT_AT_CLIENT,
                <br />
                CONSERVATIVE_AT_SERVER,
                <br />
                OPTIMISTIC_AT_SERVER,
                <br />
                CLEANCLOSE_AT_SERVER,
                <br />
                SIMPLECLOSE_AT_SERVER,
                <br />
                DEFAULT_AT_SERVER
                <br />
              </p>
              <p>
                Please see more on this at{" "}
                <Link href="/bangdb-client-common">bangdb common</Link>.
              </p>
            </div>
          </div>
        </div>
      </DocArticle>
    </React.Fragment>
  );
}
