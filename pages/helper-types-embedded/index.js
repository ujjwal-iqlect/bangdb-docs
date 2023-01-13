import React, { useState } from "react";
import Head from "next/head";
import DocArticle from "../../components/DocArticle";
import Breadcrumb from "../../components/Breadcrumb";
import HighlightedCpp from "../../components/HighlightedCpp";

export default function HelperTypesEmbedded() {
  const [tab, setTab] = useState(1);

  return (
    <React.Fragment>
      <Head>
        <title>Helper Types (Embedded) - BangDB</title>
        <meta
          name="description"
          content="Learn more about BangDB Helper Types (Embedded). Read the documentation to learn to make embedded applications using BangDB."
        ></meta>
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Helper Types (Embedded) - BangDB" />
        <meta
          property="og:description"
          content="Learn more about BangDB Helper Types (Embedded). Read the documentation to learn to make embedded applications using BangDB."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="Helper Types (Embedded) - BangDB" />
        <meta
          name="twitter:description"
          content="Learn more about BangDB Helper Types (Embedded). Read the documentation to learn to make embedded applications using BangDB."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Embedded API" url="/bangdb-api" />
        <h1 className="article-title">Helper Types (Embedded)</h1>
        <div className="article-body">
          <h2>DBParam</h2>
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
          <p>
            DBParam helps set the various configuration for the BangDB. It has
            following configurable parameter:
          </p>
          <h3>host</h3>
          <p>Sets the host ip of the server, not relevant for embedded</p>
          <h3>port</h3>
          <p>Sets the port id of the server, not relevant for embedded</p>
          <h3>userid</h3>
          <p>BangDB uses default id as of now, will change in future</p>
          <h3>password</h3>
          <p>BangDB used default password as of now, will change in future</p>
          <h3>init_sock_conn</h3>
          <p>
            Boolean to specify if we need to init the socket connection, not
            relevant for embedded
          </p>
          <h3>tls_conn</h3>
          <p>
            Whether to use ssl/tls based secure channel or not, not relevant for
            BangDB embedded
          </p>
          <h3>tran_type</h3>
          <p>
            Whether the db should be opened in transaction mode or not,
            following trantypes are available:
          </p>
          <HighlightedCpp
            code={
              tab === 1
                ? `enum TransactionType { 
   DB_TRANSACTION_NONE,
   DB_OPTIMISTIC_TRANSACTION,
   DB_PESSIMISTIC_TRANSACTION,
};`
                : `public enum TransactionType { 
  DB_TRANSACTION_NONE,
  DB_OPTIMISTIC_TRANSACTION,
  DB_PESSIMISTIC_TRANSACTION,
};`
            }
          />
          <p>
            Only <code>DB_OPTIMISTIC_TRANSACTION</code> is supported.
          </p>
          <h3>config_path</h3>
          <p>Path to the bangdb.config file</p>
          <h3>dbPath</h3>
          <p>Path for db to keep files</p>
          <h3>dbLogPath</h3>
          <p>Path for db to keep log files</p>
          <h3>dbArchivePath</h3>
          <p>
            In case of archival, this path should be used to keep archived data
          </p>
          <h2>TableEnv</h2>
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
          <p>
            Table environment defines the way table should be created. This is
            very important helper type and should be used carefully and in right
            manner to create a table.
          </p>
          <p>Here are the parameter for the table environment:</p>
          <h3>db_type</h3>
          <p>
            Type of db, in-memory or persistent as well. Default is persistent.
          </p>
          <p>It is selected from following enum:</p>
          <HighlightedCpp
            code={
              tab === 1
                ? `// types of db 
enum PersistType { 
   INMEM_ONLY, // only RAM based, cache enabled (no overflow to disk, ideally overflow to other RAM) 
   INMEM_PERSIST, // disked backed, cache enabled (over flow to disk) 
   PERSIST_ONLY, // cache disabled, direct file IO INVALID_PERSIST_TYPE
};`
                : `public enum PersistType { 
  INMEM_ONLY, // only RAM based, cache enabled (no overflow to disk, ideally overflow to other RAM) 
  INMEM_PERSIST, // disked backed, cache enabled (over flow to disk) 
  PERSIST_ONLY, // cache disabled, direct file IO INVALID_PERSIST_TYPE
};`
            }
          />
          <p>
            Most of the time user is not required to set this, default is fine.
          </p>
          <h3>idx_type</h3>
          <p>
            Type of index for primary key, how primary keys would be stored.
          </p>
          <p>It is driven from following enum:</p>
          <HighlightedCpp
            code={
              tab === 1
                ? `// types of pk arrangement 
enum IndexType { 
   HASH, 
   EXTHASH, 
   BTREE, 
   HEAP, 
   INVALID_INDEX_TYPE, 
};`
                : `// types of pk arrangement 
public enum IndexType { 
   HASH, 
   EXTHASH, 
   BTREE, 
   HEAP, 
   INVALID_INDEX_TYPE, 
};`
            }
          />
          <p>Default is BTREE, and it&apos;s good for most of the cases.</p>
          <h3>key_sz</h3>
          <p>
            In case of string key, what&apos;s the maximum size of the primary
            key. Please note large size is not good for performance reasons,
            typically it should be less than 64 bytes, but if it has to be more,
            please set it accordingly, but not good from efficiency perspective.
          </p>
          <aside className="doc-note">
            <strong>Note: </strong>
            If key is tried to be inserted, and size of key is more than key_sz,
            then operation will be rejected, hence set it carefully. Default is
            24 or 32 bytes.
          </aside>
          <h3>table_sz_hint</h3>
          <p>
            This is optional, and it helps tell the db how large this table is
            going to be in case it&apos;s created. Good for db optimization.
            Please note this only affects the db in run time, therefore it could
            be reset while db restarts etc.
          </p>
          <h3>log_sz_mb</h3>
          <p>
            Usually default is good, however you may use to reset it. This tells
            what the size of a single log file is. This log file is Write Ahead
            Log, where db writes metadata and/or data for atomicity, transction
            and data recovery perspective.
          </p>
          <h3>table_log_type</h3>
          <p>
            BangDB can create write ahead log in shared and in private mode.
            Shared mode will have a log structure shared by all tables, whereas
            private log will be created for each table. It&apos;s always good to
            use shared (default) log type unless there is a security or other
            reason to use private.
          </p>
          <p>Here are the options:</p>
          <HighlightedCpp
            code={
              tab === 1
                ? `// log type 
enum LogType { 
   SHARED_LOG, 
   PRIVATE_LOG, 
};`
                : `// log type 
public enum LogType { 
   SHARED_LOG, 
   PRIVATE_LOG, 
};`
            }
          />
          <h3>table_type</h3>
          <p>
            The type of the table. Default is NORMAL_TABLE, but user must change
            this as per requirement. This is a must specified parameter and user
            must define it properly.
          </p>
          <p>Here are the options:</p>
          <HighlightedCpp
            code={
              tab === 1
                ? `enum TableType { 
   NORMAL_TABLE, 
   WIDE_TABLE, 
   INDEX_TABLE, 
   PRIMITIVE_TABLE_INT, 
   PRIMITIVE_TABLE_LONG, 
   PRIMITIVE_TABLE_STRING, 
   LARGE_TABLE, 
   BANGDB_TABLE_INVALID 
};`
                : `public enum TableType { 
  NORMAL_TABLE, 
  WIDE_TABLE, 
  INDEX_TABLE, 
  PRIMITIVE_TABLE_INT, 
  PRIMITIVE_TABLE_LONG, 
  PRIMITIVE_TABLE_STRING, 
  LARGE_TABLE, 
  BANGDB_TABLE_INVALID 
};`
            }
          />

          <h3>wal_enabled</h3>
          <p>
            This tells if write ahead log is enabled or not. User can switch on
            or off it using this. Default is ON.
          </p>
          <h3>Autocommit</h3>
          <p>This is always ON</p>
          <h3>sort_method</h3>
          <p>
            When BTREE for index is used then we have to define the sort method.
          </p>
          <p>Here are the options:</p>
          <HighlightedCpp
            code={
              tab === 1
                ? `enum SortMethod { 
   LEXICOGRAPH = 1, 
   QUASI_LEXICOGRAPH = 2, 
};`
                : `public enum SortMethod { 
  LEXICOGRAPH = 1, 
  QUASI_LEXICOGRAPH = 2, 
};`
            }
          />
          <p>default is QUASI_LEXICOGRAPH = 2</p>
          <h3>sort_direction</h3>
          <p>User can define if sort is in increasing or decreasing order.</p>
          <p>Here are the options:</p>
          <HighlightedCpp
            code={
              tab === 1
                ? `enum SortDirection { 
   SORT_ASCENDING = 3,
   SORT_DESCENDING = 4,
   SORT_INVALID 
};`
                : `public enum SortDirection { 
  SORT_ASCENDING = 3,
  SORT_DESCENDING = 4,
  SORT_INVALID 
};`
            }
          />
          <p>default is SORT_ASCENDING.</p>
          <h3>key_type</h3>
          <p>User may override key type as well.</p>
          <p>Here are the options:</p>
          <HighlightedCpp
            code={
              tab === 1
                ? `enum KeyType { 
   NORMAL_KEY = 1,
   COMPOSITE_KEY = 3,
   NORMAL_KEY_LONG = 10,
};`
                : `public enum KeyType { 
  NORMAL_KEY = 1,
  COMPOSITE_KEY = 3,
  NORMAL_KEY_LONG = 10,
};`
            }
          />
          <p>defaut is NORMAL_KEY.</p>
          <h3>table_sub_type</h3>
          <p>To set sub type of the table.</p>
          <p>Here are the options:</p>
          <HighlightedCpp
            code={
              tab === 1
                ? `enum TableSubType { 
   BANGDB_SW_TABLE, 
   BANGDB_TOPK_TABLE, 
   NON_ANALYTICAL_TABLE, 
   INDEXBTREE_TABLE, 
   DUPLINDEX_TABLE_NOLOG, 
   BANGDB_SW_INVALID, 
};`
                : `public enum TableSubType { 
  BANGDB_SW_TABLE, 
  BANGDB_TOPK_TABLE, 
  NON_ANALYTICAL_TABLE, 
  INDEXBTREE_TABLE, 
  DUPLINDEX_TABLE_NOLOG, 
  BANGDB_SW_INVALID, 
};`
            }
          />
          <p>Default is NON_ANALYTICAL_TABLE.</p>
          <h3>allow_duplicate</h3>
          <p>Sets if duplicate keys are allowed.</p>
          <h3>version_type</h3>
          <p>
            When duplicate keys are set for primary or secondary, then to have
            data version defined for proper retrieval of data, we should set
            this.
          </p>
          <p>The options are:</p>
          <HighlightedCpp
            code={
              tab === 1
                ? `enum VersionType { 
   BANGDB_DATA_VERSION_INVALID = 0,
   BANGDB_DATA_VERSION_VALID = 1,
};`
                : `public enum VersionType { 
  BANGDB_DATA_VERSION_INVALID = 0,
  BANGDB_DATA_VERSION_VALID = 1,
};`
            }
          />
          <p>Default is BANGDB_DATA_VERSION_INVALID.</p>
          <h3>allow_rev_idx</h3>
          <p>
            Set to allow reverse indexing. Note that it can only be done for
            WIDE_TABLE.
          </p>
        </div>
      </DocArticle>
    </React.Fragment>
  );
}
