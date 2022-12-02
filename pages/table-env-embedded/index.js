import React, { useState } from "react";
import Head from "next/head";
import Breadcrumb from "../../components/Breadcrumb";
import HighlightedCpp from "../../components/HighlightedCpp";
import HighlightedJava from "../../components/HighlightedJava";
import Link from "next/link";

export default function TableEnvEmbedded() {
  const [tab, setTab] = useState(1);

  return (
    <React.Fragment>
      <Head>
        <title>Table Env (Embedded) - BangDB</title>
        <meta
          name="description"
          content="Learn more about BangDB Table Env (Embedded). Read the documentation to learn to make embedded applications using BangDB."
        ></meta>
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Table Env (Embedded) - BangDB" />
        <meta
          property="og:description"
          content="Learn more about BangDB Table Env (Embedded). Read the documentation to learn to make embedded applications using BangDB."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="Table Env (Embedded) - BangDB" />
        <meta
          name="twitter:description"
          content="Learn more about BangDB Table Env (Embedded). Read the documentation to learn to make embedded applications using BangDB."
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
              <Breadcrumb text="Embedded API" url="/bangdb-api" />
              <h1 className="article-title">Table Env (Embedded)</h1>
              <div className="article-body">
                <p>
                  TableEnv (embedded) defines the way a table should be created.
                  This is a very important type and should be used carefully and
                  in the right manner to create a table.
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
                  <p>To create TableEnv (embedded) object</p>
                  <HighlightedCpp code={`TableEnv();`} />
                  <p>To get PersistType</p>
                  <HighlightedCpp code={`PersistType getDbType();`} />
                  <p>To set PersistType</p>
                  <HighlightedCpp
                    code={`void setDbType(PersistType db_type);`}
                  />
                  <aside className="doc-api-code">
                    <p>PersistType is an enum with following values:</p>
                    <p>
                      INMEM_ONLY
                      <br />
                      INMEM_PERSIST
                      <br />
                      PERSIST_ONLY
                    </p>
                    <p>
                      Please see more on this at{" "}
                      <Link href={"/bangdb-client-common"}>bangdb common</Link>
                    </p>
                  </aside>
                  <p>To get index type for the table</p>
                  <HighlightedCpp code={`IndexType getIdxType();`} />
                  <p>To set index type for a table</p>
                  <HighlightedCpp
                    code={`void setIdxType(IndexType idx_type);`}
                  />
                  <aside className="doc-api-code">
                    <p>IndexType is an enum with following values:</p>
                    <p>
                      HASH,
                      <br />
                      EXTHASH
                      <br />
                      BTREE,
                      <br />
                      HEAP
                    </p>
                    <p>
                      Please see more on this at{" "}
                      <Link href={"/bangdb-client-common"}>bangdb common</Link>
                    </p>
                  </aside>
                  <p>To get LogType for a table</p>
                  <HighlightedCpp code={`LogType getTableLogType();`} />
                  <p>To set LogType for a table</p>
                  <HighlightedCpp
                    code={`void setTableLogType(LogType table_log_type);`}
                  />
                  <aside className="doc-api-code">
                    <p>LogType is an enum with following values:</p>
                    <p>
                      SHARED_LOG,
                      <br />
                      PRIVATE_LOG,
                      <br />
                      INVALID_LOG,
                    </p>
                    <p>
                      Please see more on this at{" "}
                      <Link href={"/bangdb-client-common"}>bangdb common</Link>
                    </p>
                  </aside>
                  <p>To get the table type</p>
                  <HighlightedCpp code={`TableType getTableType();`} />
                  <p>To set the table type</p>
                  <HighlightedCpp
                    code={`void setTableType(TableType table_type);`}
                  />
                  <aside className="doc-api-code">
                    <p>TableType is an enum with following values:</p>
                    <p>
                      NORMAL_TABLE,
                      <br />
                      WIDE_TABLE,
                      <br />
                      INDEX_TABLE,
                      <br />
                      PRIMITIVE_INT
                      <br />
                      PRIMITIVE_TABLE_LONG
                      <br />
                      PRIMITIVE_TABLE_STRING
                      <br />
                      LARGE_TABLE
                    </p>
                    <p>
                      Please see more on this at{" "}
                      <Link href={"/bangdb-client-common"}>bangdb common</Link>
                    </p>
                  </aside>
                  <p>To get the key type</p>
                  <HighlightedCpp code={`KeyType getKeyType();`} />
                  <p>To set the key type for a table</p>
                  <HighlightedCpp code={`void setKeyType(KeyType key_type);`} />
                  <aside className="doc-api-code">
                    <p>KeyType is an enum with following values:</p>
                    <p>
                      NORMAL_KEY = 1
                      <br />
                      COMPOSITE_KEY = 3
                      <br />
                      NORMAL_KEY_LONG = 10
                    </p>
                    <p>
                      Please see more on this at{" "}
                      <Link href={"/bangdb-client-common"}>bangdb common</Link>
                    </p>
                  </aside>
                  <p>To get the sorting method for a table</p>
                  <HighlightedCpp code={`SortMethod getSortMethod();`} />
                  <p>To set the sorting method for a table</p>
                  <HighlightedCpp
                    code={`void setSortMethod(SortMethod sort_method);`}
                  />
                  <aside className="doc-api-code">
                    <p>SortMethod is an enum with following values:</p>
                    <p>
                      LEXICOGRAPH = 1,
                      <br />
                      QUASI_LEXICOGRAPH = 2,
                      <br />
                      SORT_METHOD_INVALID = 100
                    </p>
                    <p>
                      Please see more on this at{" "}
                      <Link href={"/bangdb-client-common"}>bangdb common</Link>
                    </p>
                  </aside>
                  <p>To get the sorting direction set for a table</p>
                  <HighlightedCpp code={`SortDirection getSortDirection();`} />
                  <p>To set the sprint direction for a table</p>
                  <HighlightedCpp
                    code={`void setSortDirection(SortDirection sort_direction);`}
                  />
                  <aside className="doc-api-code">
                    <p>SortDirection is an enum with following values:</p>
                    <p>
                      SORT_ASCENDING = 3,
                      <br />
                      SORT_DESCENDING = 4
                    </p>
                  </aside>
                  <p>To get table subtype</p>
                  <HighlightedCpp code={`TableSubType getTblSubType();`} />
                  <p>To set table subtype</p>
                  <HighlightedCpp
                    code={`void setTblSubType(TableSubType tbl_sub_type);`}
                  />
                  <aside className="doc-api-code">
                    <p>TableSubType is an enum with following values:</p>
                    <p>
                      BANGDB_SW_TABLE
                      <br />
                      BANGDB_TOPK_TABLE
                      <br />
                      NON_ANALYTICAL_TABLE
                      <br />
                      INDEXBTREE_TABLE
                      <br />
                      DUPLINDEX_TABLE_NOLOG
                    </p>
                    <p>
                      Please see more on this at{" "}
                      <Link href={"/bangdb-client-common"}>bangdb common</Link>
                    </p>
                  </aside>

                  <p>To get PrimitiveDataType for a table</p>
                  <HighlightedCpp
                    code={`PrimitiveDataType getPrimDataType();`}
                  />
                  <p>To set value for Primitive data type for a table</p>
                  <HighlightedCpp
                    code={`void setPrimDataType(PrimitiveDataType prim_data_type);`}
                  />
                  <aside className="doc-api-code">
                    <p>PrimitiveDataType is an enum with following values:</p>
                    <p>
                      PRIMITIVE_INT
                      <br />
                      PRIMITIVE_LONG
                      <br />
                      PRIMITIVE_STRING,
                      <br />
                      PRIMITIVE_INVALID
                    </p>
                    <p>
                      Please see more on this at{" "}
                      <Link href={"/bangdb-client-common"}>bangdb common</Link>
                    </p>
                  </aside>
                  <p>To get the version</p>
                  <HighlightedCpp code={`VersionType getVersionType();`} />
                  <p>To set the version</p>
                  <HighlightedCpp
                    code={`void setVersionType(VersionType version_type);`}
                  />
                  <aside className="doc-api-code">
                    <p>VersionType is an enum with following values:</p>
                    <p>
                      BANGDB_DATA_VERSION_OFF
                      <br />
                      BANGDB_DATA_VERSION_ON
                    </p>
                    <p>
                      Please see more on this at{" "}
                      <Link href={"/bangdb-client-common"}>bangdb common</Link>
                    </p>
                  </aside>
                  <p>To get the sizehint of a table</p>
                  <HighlightedCpp code={`TableSizeHint getTableSizeHint();`} />
                  <p>To set the sizehint of a table</p>
                  <HighlightedCpp
                    code={`void setTableSizeHint(TableSizeHint table_sz_hint);`}
                  />
                  <aside className="doc-api-code">
                    <p>TableSizeHint is an enum with following values:</p>
                    <p>
                      TINY_TABLE_SIZE
                      <br />
                      SMALL_TABLE_SIZE
                      <br />
                      NORMAL_TABLE_SIZE,
                      <br />
                      BIG_TABLE_SIZE,
                      <br />
                      TABLE_SIZE_INVALID
                    </p>
                    <p>
                      Please see more on this at{" "}
                      <Link href={"/bangdb-client-common"}>bangdb common</Link>
                    </p>
                  </aside>
                  <p>To get key size for a table</p>
                  <HighlightedCpp code={`int getKeySize();`} />
                  <p>To set key size for a table</p>
                  <HighlightedCpp code={`void setKeySize(int key_sz);`} />
                  <p>To get LogSize in Mb</p>
                  <HighlightedCpp code={`int getLogSizeMb();`} />
                  <p>To set Log Size in Mb</p>
                  <HighlightedCpp code={`void setLogSizeMb(int log_sz_mb);`} />
                  <p>To get status of WalEnabled</p>
                  <HighlightedCpp code={`bool getWalEnabled();`} />
                  <p>To set WalEnabled</p>
                  <HighlightedCpp
                    code={`void setWalEnabled(bool wal_enabled);`}
                  />
                  <p>To get status for auto commit</p>
                  <HighlightedCpp code={`bool getAutocommit();`} />
                  <p>To enable auto commit for single operation</p>
                  <HighlightedCpp
                    code={`void setAutocommit(bool autocommit);`}
                  />
                  <p>To check whether Duplicate keys are allowed</p>
                  <HighlightedCpp code={`bool getAllowDuplicate();`} />
                  <p>To set whether Duplicate keys are allowed in a table</p>
                  <HighlightedCpp
                    code={`void setAllowDuplicate(bool allow_duplicate);`}
                  />
                  <p>
                    To check if <code>RevIdx</code> is enable
                  </p>
                  <HighlightedCpp code={`bool getAllowRevIdx();`} />
                  <p>
                    To set whether <code>RevIdx</code> is allowed or not
                  </p>
                  <HighlightedCpp
                    code={`void setAllowRevIdx(bool allow_rev_idx);`}
                  />
                  <p>To get value for Ttlsec</p>
                  <HighlightedCpp code={`int getTtlsec();`} />
                  <p>To set value for Ttlsec</p>
                  <HighlightedCpp code={`void setTtlsec(int ttlsec);`} />
                  <p>To delete TableEnv (Embedded) object</p>
                  <HighlightedCpp code={`virtual ~TableEnv();`} />
                </div>
                <div
                  style={{
                    display: tab === 2 ? "block" : "none",
                  }}
                >
                  <p>Creating TableEnv object</p>
                  <HighlightedJava code={`public TableEnv()`} />
                  <p>To get the PersistType set</p>
                  <HighlightedJava code={`public PersistType getDbType()`} />
                  <p>To set the PersistType for DB</p>
                  <HighlightedJava
                    code={`public void setDbType(PersistType db_type)`}
                  />
                  <p>
                    This set type of db, in-memory or persistent. Default is
                    persistent.
                  </p>
                  <aside className="doc-api-code">
                    <p>PersistType is an enum with following values:</p>
                    <p>
                      INMEM_ONLY
                      <br />
                      INMEM_PERSIST
                      <br />
                      PERSIST_ONLY
                    </p>
                    <p>
                      Please see more on this at{" "}
                      <Link href={"/bangdb-client-common"}>bangdb common</Link>
                    </p>
                  </aside>
                  <p>To get the IndexType set</p>
                  <HighlightedJava code={`public IndexType getIdxType()`} />
                  <p>To set the IndexType for a table</p>
                  <HighlightedJava
                    code={`public void setIdxType(IndexType idx_type)`}
                  />
                  <aside className="doc-api-code">
                    <p>IndexType is an enum with following values:</p>
                    <p>
                      HASH,
                      <br />
                      EXTHASH
                      <br />
                      BTREE,
                      <br />
                      HEAP
                    </p>
                    <p>
                      Please see more on this at{" "}
                      <Link href={"/bangdb-client-common"}>bangdb common</Link>
                    </p>
                  </aside>
                  <p>To get LogType set</p>
                  <HighlightedJava code={`public LogType getTableLogType()`} />
                  <p>To set LogType</p>
                  <HighlightedJava
                    code={`public void setTableLogType(LogType table_log_type)`}
                  />
                  <p>
                    BangDB can create write ahead log in shared and in private
                    mode.
                  </p>
                  <aside className="doc-api-code">
                    <p>LogType is an enum with following values:</p>
                    <p>
                      SHARED_LOG,
                      <br />
                      PRIVATE_LOG,
                      <br />
                      INVALID_LOG,
                    </p>
                    <p>
                      Please see more on this at{" "}
                      <Link href={"/bangdb-client-common"}>bangdb common</Link>
                    </p>
                  </aside>
                  <p>To get TableType for a table</p>
                  <HighlightedJava code={`public TableType getTableType()`} />
                  <p>To set TableType</p>
                  <HighlightedJava
                    code={`public void setTableType(TableType table_type)`}
                  />
                  <aside className="doc-api-code">
                    <p>TableType is an enum with following values:</p>
                    <p>
                      NORMAL_TABLE,
                      <br />
                      WIDE_TABLE,
                      <br />
                      INDEX_TABLE,
                      <br />
                      PRIMITIVE_INT
                      <br />
                      PRIMITIVE_TABLE_LONG
                      <br />
                      PRIMITIVE_TABLE_STRING
                      <br />
                      LARGE_TABLE
                    </p>
                    <p>
                      Please see more on this at{" "}
                      <Link href={"/bangdb-client-common"}>bangdb common</Link>
                    </p>
                  </aside>
                  <p>To get KeyType set for a table</p>
                  <HighlightedJava code={`public KeyType getKeyType()`} />
                  <p>To set KeyType set for a table</p>
                  <HighlightedJava
                    code={`public void setKeyType(KeyType key_type)`}
                  />
                  <aside className="doc-api-code">
                    <p>KeyType is an enum with following values:</p>
                    <p>
                      NORMAL_KEY
                      <br />
                      COMPOSITE_KEY
                      <br />
                      NORMAL_KEY_LONG
                    </p>
                    <p>
                      Please see more on this at{" "}
                      <Link href={"/bangdb-client-common"}>bangdb common</Link>
                    </p>
                  </aside>
                  <p>To get the Sorting method set for a table</p>
                  <HighlightedJava code={`public SortMethod getSortMethod()`} />
                  <p>To set the Sorting method set for a table</p>
                  <HighlightedJava
                    code={`public void setSortMethod(SortMethod sort_method)`}
                  />
                  <aside className="doc-api-code">
                    <p>SortMethod is an enum with following values:</p>
                    <p>
                      LEXICOGRAPH,
                      <br />
                      QUASI_LEXICOGRAPH
                    </p>
                    <p>
                      Please see more on this at{" "}
                      <Link href={"/bangdb-client-common"}>bangdb common</Link>
                    </p>
                  </aside>
                  <p>To get Sorting Direction set for a table</p>
                  <HighlightedJava
                    code={`public SortDirection getSortDirection()`}
                  />
                  <p>To set Sorting Direction set for a table</p>
                  <HighlightedJava
                    code={`public void setSortDirection(SortDirection sort_direction)`}
                  />
                  <aside className="doc-api-code">
                    <p>SortDirection is an enum with following values:</p>
                    <p>
                      SORT_ASCENDING,
                      <br />
                      SORT_DESCENDING
                    </p>
                    <p>
                      Please see more on this at{" "}
                      <Link href={"/bangdb-client-common"}>bangdb common</Link>
                    </p>
                  </aside>
                  <p>To get the Table subtype</p>
                  <HighlightedJava
                    code={`public TableSubType getTblSubType()`}
                  />
                  <p>To set the subtype for a table</p>
                  <HighlightedJava
                    code={`public void setTblSubType(TableSubType tbl_sub_type)`}
                  />
                  <aside className="doc-api-code">
                    <p>TableSubType is an enum with following values:</p>
                    <p>
                      BANGDB_SW_TABLE
                      <br />
                      BANGDB_TOPK_TABLE
                      <br />
                      NON_ANALYTICAL_TABLE
                      <br />
                      INDEXBTREE_TABLE
                      <br />
                      DUPLINDEX_TABLE_NOLOG
                    </p>
                    <p>
                      Please see more on this at{" "}
                      <Link href={"/bangdb-client-common"}>bangdb common</Link>
                    </p>
                  </aside>
                  <p>To get the Primitive Data Type set</p>
                  <HighlightedJava
                    code={`public PrimitiveDataType getPrimDataType()`}
                  />
                  <p>To set the Primitive Data Type set</p>
                  <HighlightedJava
                    code={`public void setPrimDataType(PrimitiveDataType prim_data_type)`}
                  />
                  <aside className="doc-api-code">
                    <p>PrimitiveDataType is an enum with following values:</p>
                    <p>
                      PRIMITIVE_INT
                      <br />
                      PRIMITIVE_LONG
                      <br />
                      PRIMITIVE_STRING
                    </p>
                    <p>
                      Please see more on this at{" "}
                      <Link href={"/bangdb-client-common"}>bangdb common</Link>
                    </p>
                  </aside>
                  <p>To get Version type set</p>
                  <HighlightedJava
                    code={`public VersionType getVersionType()`}
                  />
                  <p>To set Version type</p>
                  <HighlightedJava
                    code={`public void setVersionType(VersionType version_type)`}
                  />
                  <aside className="doc-api-code">
                    <p>VersionType is an enum with following values:</p>
                    <p>
                      BANGDB_DATA_VERSION_INVALID
                      <br />
                      BANGDB_DATA_VERSION_VALID
                    </p>
                    <p>
                      Please see more on this at{" "}
                      <Link href={"/bangdb-client-common"}>bangdb common</Link>
                    </p>
                  </aside>
                  <p>To get Table Size hint set select for a table</p>
                  <HighlightedJava
                    code={`public TableSizeHint getTableSizeHint()`}
                  />
                  <p>To set the TableSizeHint for a table</p>
                  <HighlightedJava
                    code={`public void setTableSizeHint(TableSizeHint table_sz_hint)`}
                  />
                  <aside className="doc-api-code">
                    <p>TableSizeHint is an enum with following values:</p>
                    <p>
                      TINY_TABLE_SIZE
                      <br />
                      SMALL_TABLE_SIZE
                      <br />
                      NORMAL_TABLE_SIZE,
                      <br />
                      BIG_TABLE_SIZE
                    </p>
                    <p>
                      Please see more on this at{" "}
                      <Link href={"/bangdb-client-common"}>bangdb common</Link>
                    </p>
                  </aside>
                  <p>To get the size of key value</p>
                  <HighlightedJava code={`public int getKeySize()`} />
                  <p>To set the size of a key</p>
                  <HighlightedJava
                    code={`public void setKeySize(int key_sz)`}
                  />
                  <p>To get the value for Log size in Mb</p>
                  <HighlightedJava code={`public int getLogSizeMb()`} />
                  <p>To set the Log size in Mb</p>
                  <HighlightedJava
                    code={`public void setLogSizeMb(int log_sz_mb)`}
                  />
                  <p>To check WalEnabled status</p>
                  <HighlightedJava code={`public int getWalEnabled()`} />
                  <p>To set WalEnabled</p>
                  <HighlightedJava
                    code={`public void setWalEnabled(int wal_enabled)`}
                  />
                  <p>To check if Duplicates are allowed or not for a table</p>
                  <HighlightedJava code={`public int getAllowDuplicate()`} />
                  <p>
                    To set whether duplicates should be allowed or not for a
                    table
                  </p>
                  <HighlightedJava
                    code={`public void setAllowDuplicate(int allow_duplicate)`}
                  />
                  <p>
                    To check whether <code>RevIdx</code> is enabled or not
                  </p>
                  <HighlightedJava code={`public int getAllowRevIdx()`} />
                  <p>
                    To set whether <code>RevIdx</code> is allowed or not
                  </p>
                  <HighlightedJava
                    code={`public void setAllowRevIdx(int allow_rev_idx)`}
                  />
                  <p>To allow reverse indexing</p>
                  <HighlightedJava code={`public int getTtlsec()`} />
                  <aside className="doc-note">
                    <strong>Note: </strong>It can only be done for WIDE_TABLE To
                    get Ttlsec value set.
                  </aside>
                  <p>To set the Ttlsec</p>
                  <HighlightedJava code={`public void setTtlsec(int ttlsec)`} />
                  <p>
                    This is to set whether to use SSL/TLS based secure channel
                    or not.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </main>
      </section>
    </React.Fragment>
  );
}
