import React, { useState } from "react";
import Head from "next/head";
import Breadcrumb from "../../components/Breadcrumb";
import HighlightedCpp from "../../components/HighlightedCpp";
import HighlightedJava from "../../components/HighlightedJava";
import Link from "next/link";

export default function DbParamType() {
  const [tab, setTab] = useState(1);

  return (
    <React.Fragment>
      <Head>
        <title>DBParam - BangDB</title>
        <meta
          name="description"
          content="Learn about BangDB DBParam Type & server APIs. Read the documentation to know more about BangDB Server APIs."
        ></meta>
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="DBParam - BangDB" />
        <meta
          property="og:description"
          content="Learn about BangDB DBParam Type & server APIs. Read the documentation to know more about BangDB Server APIs."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="DBParam - BangDB" />
        <meta
          name="twitter:description"
          content="Learn about BangDB DBParam Type & server APIs. Read the documentation to know more about BangDB Server APIs."
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
              <Breadcrumb text="Server API" url="/api-server" />
              <h1 className="article-title">DBParam</h1>
              <div className="article-body">
                <p>
                  DBParam is used to set the several parameters to get the
                  BangDB Environment. Some of the parameters are host ip, port,
                  ssl/non-ssl, transaction type etc. Client connecting with each
                  different DBs will have separate DBParams.
                </p>
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
                  <p>To get the DB Param environment</p>
                  <HighlightedCpp code={`DBParam();`} />
                  <p>To set host IP</p>
                  <HighlightedCpp code={`void setHost(const char *host);`} />
                  <p>To set PORT on which server will be running</p>
                  <HighlightedCpp code={`void setPort(const char *port);`} />
                  <p>To set path to bangdb.config file</p>
                  <HighlightedCpp
                    code={`void setDbConfigPath(const char *dbconfigPath);`}
                  />
                  <p>To set path where db files will be kept</p>
                  <HighlightedCpp
                    code={`void setDbPath(const char *dbPath);`}
                  />
                  <p>To set path where log files will be kept</p>
                  <HighlightedCpp
                    code={`void setLogPath(const char *logPath);`}
                  />
                  <p>To set path where archive files will be kept</p>
                  <HighlightedCpp
                    code={`void setArchivePath(const char *archivePath);`}
                  />
                  <p>To open db in transactional or non-transactional mode</p>
                  <HighlightedCpp
                    code={`void setTransactionType(TransactionType tranType);`}
                  />
                  <aside className="doc-api-code">
                    <p>TransactionType is an enum with following options:</p>
                    <p>
                      DB_TRANSACTION
                      <br />
                      DB_OPTIMISTIC_TRANSACTION
                      <br />
                      DB_PESSIMISTIC_TRANSACTION
                    </p>
                    <p>
                      Please see{" "}
                      <Link href={"/bangdb-client-common"}>bangdb common</Link>{" "}
                      for more info.
                    </p>
                  </aside>
                  <p>To set for sock connection</p>
                  <HighlightedCpp code={`void setInitSockConn(bool flag);`} />
                  <p>
                    This is to specify if we need to init the socket connection.
                  </p>
                  <p>To set secure connection</p>
                  <HighlightedCpp code={`void setSecureConn(bool flag);`} />
                  <p>To get host IP address</p>
                  <HighlightedCpp code={`const char *getHost();`} />
                  <p>
                    User should free the returned data using{" "}
                    <code>delete[]</code>.
                  </p>
                  <p>To get host PORT</p>
                  <HighlightedCpp code={`const char *getPort();`} />
                  <p>
                    User should free the returned data using{" "}
                    <code>delete[]</code>.
                  </p>
                  <p>To get location of bangdb.config file</p>
                  <HighlightedCpp code={`const char *getDbConfigPath();`} />
                  <p>
                    User should free the returned data using{" "}
                    <code>delete[]</code>.
                  </p>
                  <p>To get location of DB files</p>
                  <HighlightedCpp code={`const char *getDbPath();`} />
                  <p>
                    User should free the returned data using{" "}
                    <code>delete[]</code>.
                  </p>
                  <p>To get location of log files</p>
                  <HighlightedCpp code={`const char *getLogPath();`} />
                  <p>
                    User should free the returned data using{" "}
                    <code>delete[]</code>.
                  </p>
                  <p>To get location of archive files</p>
                  <HighlightedCpp code={`const char *getArchivePath();`} />
                  <p>
                    User should free the returned data using{" "}
                    <code>delete[]</code>.
                  </p>
                  <p>To get the transaction type</p>
                  <HighlightedCpp code={`TransactionType getTranType();`} />
                  <aside className="doc-api-code">
                    <p>TransactionType is an enum with following options:</p>
                    <p>
                      DB_TRANSACTION
                      <br />
                      DB_OPTIMISTIC_TRANSACTION
                      <br />
                      DB_PESSIMISTIC_TRANSACTION
                    </p>
                    <p>
                      Please see{" "}
                      <Link href={"/bangdb-client-common"}>bangdb common</Link>{" "}
                      for more info.
                    </p>
                  </aside>
                  <p>To check sock connection</p>
                  <HighlightedCpp code={`bool getInitSockConn();`} />
                  <p>To check for secure connection</p>
                  <HighlightedCpp code={`bool getSecureConn();`} />
                </div>
                <div
                  style={{
                    display: tab === 2 ? "block" : "none",
                  }}
                >
                  <p>To get status for verification for DB parameters</p>
                  <HighlightedJava code={`public boolean get_just_verify()`} />
                  <p>To verify DB parameters</p>
                  <HighlightedJava
                    code={`public void set_just_verify(boolean just_verify)`}
                  />
                  <p>To check for sock connections</p>
                  <HighlightedJava
                    code={`public boolean get_init_sock_conns()`}
                  />
                  <p>
                    This returns boolean that represent init the socket
                    connection.
                  </p>
                  <p>To set sock connection</p>
                  <HighlightedJava
                    code={`public void set_init_sock_conns(boolean _init_sock_conns)`}
                  />
                  <p>
                    This is to specify if we need to init the socket connection.
                  </p>
                  <p>To check for TLS connection</p>
                  <HighlightedJava code={`public boolean get_is_tls_conn()`} />
                  <p>To set TLS connection</p>
                  <HighlightedJava
                    code={`public void set_is_tls_conn(boolean _is_tls_conn)`}
                  />
                  <p>
                    This is the set whether to use ssl/tls based secure channel
                    or not.
                  </p>
                  <p>To get Host IP address and PORT</p>
                  <HighlightedJava
                    code={`public String get_host()
public String get_port()`}
                  />
                  <p>To get user id</p>
                  <HighlightedJava code={`public String get_userid()`} />
                  <p>To set user id</p>
                  <HighlightedJava
                    code={`public void set_userid(String _userid)`}
                  />
                  <p>To get password</p>
                  <HighlightedJava code={`public String get_pwd()`} />
                  <p>To set password</p>
                  <HighlightedJava code={`public void set_pwd(String _pwd)`} />
                  <p>To get location of log files</p>
                  <HighlightedJava code={`public String get_archivePath()`} />
                  <p>To set path where archive files will be kept</p>
                  <HighlightedJava
                    code={`public void set_archivePath(String _archivePath)`}
                  />
                  <p>To set path where DB files will be kept</p>
                  <HighlightedJava
                    code={`public void setDBPath(String dbPath)`}
                  />
                  <p>To get location of DB files</p>
                  <HighlightedJava code={`public String getDBPath()`} />
                  <p>To set path where log files will be kept</p>
                  <HighlightedJava
                    code={`public void setLogPath(String logPath)`}
                  />
                  <p>To get location of log files</p>
                  <HighlightedJava code={`public String getLogPath()`} />
                  <p>To set path to bangdb.config file</p>
                  <HighlightedJava
                    code={`public void setDBConfigPath(String dbconfigPath)`}
                  />
                  <p>To set client config file path</p>
                  <HighlightedJava
                    code={`public void setClientConfigPath(String clconfigPath)`}
                  />
                  <p>To get location of bangdb.config file</p>
                  <HighlightedJava code={`public String getDBConfigPath()`} />
                  <p>To get path location of client config file</p>
                  <HighlightedJava
                    code={`public String getClientConfigPath()`}
                  />
                  <p>To set transaction type</p>
                  <HighlightedJava
                    code={`public void setTransactionType(TransactionType tranType)`}
                  />

                  <p>To get the Transaction type set</p>
                  <HighlightedJava
                    code={`public TransactionType getTransactionType()`}
                  />
                  <aside className="doc-api-code">
                    <p>TransactionType is an enum with following options:</p>
                    <p>
                      DB_TRANSACTION
                      <br />
                      DB_OPTIMISTIC_TRANSACTION
                      <br />
                      DB_PESSIMISTIC_TRANSACTION
                    </p>
                    <p>
                      Please see{" "}
                      <Link href={"/bangdb-client-common"}>bangdb common</Link>{" "}
                      for more info.
                    </p>
                  </aside>
                </div>
              </div>
            </article>
          </div>
        </main>
      </section>
    </React.Fragment>
  );
}
