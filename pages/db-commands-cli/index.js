import React from "react";
import Head from "next/head";
import Breadcrumb from "../../components/Breadcrumb";
import Codebox from "../../components/Codebox";
import CodeboxOutput from "../../components/CodeboxOutput";
import HighlightedCpp from "../../components/HighlightedCpp";

export default function DbCommandsCli() {
  return (
    <React.Fragment>
      <Head>
        <title>DB Commands CLI - BangDB</title>
        <meta
          name="description"
          content="DB Commands - Once we run the CLI, we can perform certain activities in different areas, however this page is focusing on DB related activities."
        ></meta>
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="DB Commands CLI - BangDB" />
        <meta
          property="og:description"
          content="DB Commands - Once we run the CLI, we can perform certain activities in different areas, however this page is focusing on DB related activities."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="DB Commands CLI - BangDB" />
        <meta
          name="twitter:description"
          content="DB Commands - Once we run the CLI, we can perform certain activities in different areas, however this page is focusing on DB related activities."
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
              <Breadcrumb text="Command Line Interface" url="/cli-overview" />
              <h1 className="article-title">DB Commands</h1>
              <div className="article-body">
                <p>
                  When we run the CLI it&apos;s connected with the default
                  database. The database name could be provided by the command
                  line argument when running the cli or else it will use “mydb”
                  as the database to connect to. At a time BangDB runs only one
                  database, hence we can switch to different db from cli. Once
                  we run the cli, we can perform certain activities in different
                  areas, however this page is focusing on DB related activities.
                </p>
                <h2>DB Commands using CLI</h2>
                <p>To see help</p>
                <Codebox code={`help db`} copy={`help db`} />
                <p>To see all the tables</p>
                <Codebox code={`show  tables`} copy={`show  tables`} />
                <p>To see all the user tables</p>
                <Codebox
                  code={`show tables only user`}
                  copy={`show tables only user`}
                />
                <p>To see all the sys tables</p>
                <Codebox
                  code={`show tables only sys`}
                  copy={`show tables only sys`}
                />
                <p>
                  To describe the database, get the details of the db. (This
                  will flush a json on the screen)
                </p>
                <Codebox
                  code={`describe database`}
                  copy={`describe database`}
                />
                <p>To see the pretty format of the json</p>
                <Codebox
                  code={`describe database pretty`}
                  copy={`describe database pretty`}
                />
                <p>
                  To describe any table (Let&apos;s say{" "}
                  <code>ml_bucket_info</code>, which is a sys table)
                </p>
                <Codebox
                  code={`describe table ml_bucket_info pretty`}
                  copy={`describe table ml_bucket_info pretty`}
                />
                <p>To create a table</p>
                <aside className="doc-note">
                  <strong>Note: </strong>BangDB provides plenty of different
                  options to create a table. Therefore table creation is a
                  workflow which gets initiated when we issue the &quot;create
                  table&quot; command.
                </aside>
                <p>To select default values, simply enter when prompted.</p>
                <Codebox
                  code={`create table mytable`}
                  copy={`create table mytable`}
                />
                <CodeboxOutput
                  code={`Table Type [NORMAL_TABLE, KV (0) | WIDE_TABLE, Documents (1) | LARGE_TABLE, large objects/files (2) | PREMITIVE_TABLE, like column (3)] (or Enter for default (0)):`}
                />
                <p>Here as we see we need to select the table type.</p>
                <aside className="doc-api-code">
                  <h4>NORMAL_TABLE</h4>
                  <p>
                    (0) : select this if you want to store opaque value, KV
                    store model. Secondary Indexes can&apos;t be created on this
                    table WIDE_TABLE
                    <br />
                    (1) : to store json doc. Secondary indexes can be created on
                    this table LARGE_TABLE
                    <br />
                    (2) : when you wish to deal with large files or objects,
                    definition of Large could be from several 100s of KBs to
                    several GBs of file or objects
                  </p>

                  <h4>PRIMITIVE_TABLE</h4>
                  <p>
                    (3) : KV store essentially but when value is of fixed size,
                    for ex; int, long, double.
                  </p>
                </aside>
                <p>
                  Next set of workflow will be based on the selection here.
                  Let&apos;s say we select 1 here, WIDE_TABLE
                </p>
                <CodeboxOutput
                  code={`Is it a SW(Sliding Window) table? y/n (or Enter for default (n)):`}
                />
                <p>
                  We can put this table in a sliding window if we wish, good for
                  use cases where we wish to discard data after some time,
                  Let&apos;s say we select NO (n)
                </p>
                <CodeboxOutput
                  code={`allow reverse index as well? y/n (or Enter for default (n)):`}
                />
                <p>
                  Do you want to enable reverse index for the table, let&apos;s
                  select Yes (y) here
                </p>
                <CodeboxOutput
                  code={`allow duplicate primary keys as well? y/n (or Enter for default (n)):`}
                />
                <p>
                  Primary keys are always indexed within BangDB, for all kinds
                  of table. This helps in query using the primary keys. However,
                  we can allow primary keys to be duplicated as well. Let&apos;s
                  select Yes (y) here
                </p>
                <CodeboxOutput
                  code={`Key type [NORMAL_KEY(string type) (0) | COMPOSITE_KEY(also string type) (1) | NORMAL_KEY_LONG (long type) (2)] (or Enter for default (0)):`}
                />
                <p>We can define different kinds of keys for primary key.</p>
                <aside className="doc-api-code">
                  <p>
                    <strong>NORMAL_KEY</strong> : String type, needs length to
                    be defined.
                  </p>
                  <p>
                    User should not use very long value here as it affects the
                    performance, however it should be enough to cover the case.
                    Note that if key size is too low then data insert may reject
                    the operation when encountered key size is more than the
                    defined one.
                  </p>
                  <p>
                    Default value is 24 bytes COMPOSITE_KEY : Again String type
                    only, hence need key length to be defined as well. In some
                    cases composite keys could be very efficient from storage
                    and scan perspective. The size of the keys NORMAL_KEY_LONG :
                    select this when key is long type. This is fixed size key
                    and it&apos;s very efficient.
                  </p>
                </aside>
                <p>Let’s select NORMAL_KEY (0)</p>
                <CodeboxOutput
                  code={`key size in num of bytes (at least 8 bytes, max 128 bytes, as low as possible but high enough for the key) (or Enter for default (24)):`}
                />
                <p>Let’s go with default 24 bytes</p>
                <CodeboxOutput
                  code={`primary key arrangement (index) type [ BTREE (2) | EXTHASH (1) ] (or Enter for default (2)):`}
                />
                <p>
                  Primary keys could be arranged in sorted (BTREE, actually
                  B+ExtTree) manner or hashed (EXTHASH). Let’s go with BTREE as
                  it’s a good choice most of the time
                </p>
                <CodeboxOutput
                  code={`Method for key sort [ Lexicographically (1) | Quasi Lexicographically (2) ] (or Enter for default (2)):`}
                />
                <p>
                  We can further tell how to arrange if sorted, let’s go with
                  default
                </p>
                <CodeboxOutput
                  code={`Direction for key sort [ Ascending (3) | Descending (4) ] (or Enter for default (3)):`}
                />
                <p>
                  Let’s go with ascending, default Now it will flush our
                  selection on the terminal and ask for confirmation.
                </p>
                <CodeboxOutput
                  code={`table config set is as follows;
db type = 1,
idx type = 2,
table type = 1,
key type = 1,
table_sub type = 7,
allow_duplicate = 1,
allow_rev_idx = 1, sort_method = 2,
sort_direction = 3,
key_sz = 24, wal_enabled = 1,
log_sz_mb = 128 
Please type 'a' for abort or 'c' for commit [ a | c ]:`}
                />
                <p>
                  Press c to commit, table should be created. You can check the
                  details of the table by using &quot;describe table
                  mytable&quot; command
                </p>
                <p>To create index on the table</p>
                <p>
                  Let&apos;s create index on the firstname for the mytable table
                </p>
                <CodeboxOutput code={`create index mytable.firstname`} />
                <p>
                  Index creation is very similar to table creation, it also
                  creates a similar workflow
                </p>
                <CodeboxOutput
                  code={`Key Type [NORMAL_KEY (1) | NORMAL_KEY_LONG (2)] (or Enter to set default (1)):`}
                />
                <p>Let’s select NORMAL_KEY (1)</p>
                <CodeboxOutput
                  code={`Key size (or Enter to set default (24)):`}
                />
                <p>Select 24 as key size</p>
                <CodeboxOutput
                  code={`Sort direction [SORT_ASCENDING(3) | SORT_DESCENDING(4)] (or Enter to set default (3)):`}
                />
                <p>Select default 3</p>
                <CodeboxOutput
                  code={`Allow duplicate indexes as well? y/n: (or Enter for default (n))`}
                />
                <p>
                  Select yes (y) for duplicate index finally it asks for
                  confirmation before commit
                </p>
                <CodeboxOutput
                  code={`Please type 'a' for abort or 'c' for commit [ a | c ]: 
// select c for commit and it will create the index`}
                />
                <p>Insert few data into the table</p>
                <HighlightedCpp
                  code={`insert into mytable values "user1" {
  "firstname":"sachin", 
  "org":"bangdb",
  "city":"bangalore"
}`}
                />
                <p>select data from the table now</p>
                <Codebox code={`select * from mytable`} />
                <CodeboxOutput
                  code={`// It will return something like this;
+---------+------------------------------------------------------------------------------------------------------------+
|key    |val                                                                           | 
+---------+------------------------------------------------------------------------------------------------------------+
|user1  |{"firstname":"sachin","org":"bangdb","city":"bangalore","_pk":"user1","_v":1} | 
+---------+------------------------------------------------------------------------------------------------------------+
total rows retrieved = 1 (1)`}
                />
                <p></p>
                <CodeboxOutput code={``} />
              </div>
            </article>
          </div>
        </main>
      </section>
    </React.Fragment>
  );
}
