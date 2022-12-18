import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";
import HighlightedOutput from "../../../components/HighlightedOutput";
import HighlightedCpp from "../../../components/HighlightedCpp";
import HighlightedJava from "../../../components/HighlightedJava";
import Codebox from "../../../components/Codebox";
import Link from "next/link";

export default function CreateATable() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Create a table - BangDB REST API</title>
        <meta
          name="description"
          content="Learn how to create a table - it requires to define the properties of table hence we need to send a json doc specifying the details."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Create a table - BangDB REST API" />
        <meta
          property="og:description"
          content="Learn how to create a table - it requires to define the properties of table hence we need to send a json doc specifying the details."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="Create a table - BangDB REST API" />
        <meta
          name="twitter:description"
          content="Learn how to create a table - it requires to define the properties of table hence we need to send a json doc specifying the details."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">Create a table</h1>
        <div className="article-body">
          <p>
            Table creation requires to define the properties of table hence we
            need to send a json doc specifying the details. Please see more
            about the specific of table that could be defined in this
            documentation.
          </p>
          <p>
            <strong>Method</strong> : POST
          </p>
          <p>
            <strong>URI</strong> : /db/&lt;db_name&gt;/table
          </p>
          <p>Body:</p>
          <HighlightedCpp
            code={`{
  "table_name": "< table name >",
  "table_type": <table_type>, // WIDE_TABLE (1), NORMAL_TABLE (0) etc...
  "key_type": <key_type>, // string or long (for key type)
  "key_sz": <key_size_bytes>, // if key_type is string then size of key, dfault is 24 in this case
  "allow_duplicate": <0 or 1>,
  "allow_rev_idx": <0 or 1>,
  "version_type": <0 or 1>
}`}
          />
          <aside className="doc-note">
            <strong>Note: </strong>Not all params are required for table
            creation and there could be many more attributes here as we create
            table , please see the detail documentations for the same.
          </aside>
          <p>Here is some information regarding these parameters.</p>
          <p>
            You don&apos;t need to provide all these info unless you are sure,
            otherwise default is good.
          </p>
          <p>The required (must) attributes are:</p>
          <ul>
            <li>
              <strong>table name</strong> : alphanumeric and
              &apos;_&apos;(underscore) is allowed. Should be less than 64 bytes
              (ideally).
            </li>
            <li>
              <strong>table type</strong> :
            </li>
            <aside className="doc-api-code">
              <p>
                <strong>NORMAL_TABLE (0)</strong> : for key/val scenario where
                val is opaque.
              </p>
              <p>
                <strong>WIDE_TABLE (1)</strong> : when you wish to store json
                document. Secondary, nested, composite, geo, reverse indexing
                can be created for only WIDE_TABLE.
              </p>
              <p>
                <strong>INDEX_TABLE (2)</strong> : only for db internal use,
                don&apos;t create this.
              </p>
              <p>
                <strong>PRIMITIVE_INT (3)</strong> : when key and value are
                integer types
              </p>
              <p>
                <strong>PRIMITIVE_TABLE_LONG (4)</strong> : when key and value
                are long types
              </p>
              <p>
                <strong>PRIMITIVE_TABLE_STRING (5)</strong> : when key is string
                type and value is long type
              </p>
              <p>
                <strong>LARGE_TABLE (6)</strong> : Don&apos;t use directly,
                create bucket instead. Bucket uses this table type
              </p>
            </aside>
            <li>
              <strong>key type:</strong>
            </li>
            <aside className="doc-api-code">
              <p>
                <strong>NORMAL_KEY (1)</strong> : when key is of string type
                (variable size)
              </p>
              <p>
                <strong>COMPOSITE_KEY (3)</strong> : when key is composite, for
                ex; &quot;city:area&quot; etc. (variable size)
              </p>
              <p>
                <strong>NORMAL_KEY_LONG (10)</strong> : when key is of long type
                (fixed size)
              </p>
            </aside>
            <aside className="doc-note">
              <strong>Note: </strong>For variable key type, we may also provide
              key size, default is 24 bytes. Please note that it&apos;s
              important to keep key size as low as possible as it has direct
              impact on db performance in many ways. ideal size is 8 bytes to 64
              bytes (or in some case upto 128 bytes). Please consider
              structuring your table such that its key size is minimum.
            </aside>
            <li>
              <strong>allow duplicate</strong> : set it as 1 if you wish to
              allow duplicate PKs.
            </li>
            <li>
              <strong>allow reverse index</strong> : set it as 1 if you wish to
              enable reverse indexing.
            </li>
          </ul>
          <p>
            There are more attributes that can be set, please see{" "}
            <Link href={`/table-env-api`}>table-env documentation</Link>.
          </p>
          <p>Example</p>
          <ol
            style={{
              listStyle: "upper-alpha",
            }}
          >
            <li>
              Let&apos;s create WIDE_TABLE , with key size 24 (key type as
              NORMAL_KEY) etc.
            </li>
            <HighlightedJava
              code={`curl -H "Content-Type: application/json" -d '{"table_name":"my_table_test","table_type":1,"key_type":1,"key_sz":24,"allow_duplicate":1,"allow_rev_idx":0,"version_type":1}' -X POST http://192.168.1.105:18080/db/mydb/table`}
            />
            <p>Response</p>
            <HighlightedOutput
              code={`{
   "msg": "successfully created the table"
}`}
            />
            <p>To insert data into WIDE_TABLE we can use the following API:</p>
            <p>
              <strong>Method</strong> : POST
            </p>
            <p>
              <strong>URI</strong> : /db/&lt;db_name&gt;/&lt;table_name&gt;/doc
            </p>
            <p>Body:</p>

            <HighlightedCpp
              code={`{"doc":{"name":"john"}, "_pk":"p1"} // _pk outside doc, DB will take this as _pk
{"doc":{"name":"john", "_pk":"p1"}} // _pk inside doc, DB will take this as _pk
{"doc":{"name":"john"}} // _pk is missing, DB will create one (timestamp in microsec)`}
            />
            <aside className="doc-note">
              <strong>Note: </strong>If key_type = 1 (NORMAL_KEY) or 3
              (COMPOSITE_KEY) then pass &quot;_pk&quot; value as string, else
              pass it as long (for NORMAL_KEY_LONG).
              <p>
                Also note that the value of key &quot;doc&quot; is going as
                object (not string) this is because we must insert document
                (json) for WIDE_TABLE.
              </p>
            </aside>
            <li>Let&apos;s create NORMAL_TABLE now, with long key type</li>
            <HighlightedJava
              code={`curl -H "Content-Type: application/json" -d '{"table_name":"my_table_test2","table_type":0,"key_type":10,"allow_duplicate":1,"allow_rev_idx":0,"version_type":1}' -X POST http://192.168.1.105:18080/db/mydb/table`}
            />
            <p>To insert data into NORMAL_TABLE we can use following:</p>
            <p>
              <strong>Method</strong> : POST
            </p>
            <p>
              <strong>URI</strong> : /db/&lt;db_name&gt;/&lt;table_name&gt;/doc
            </p>
            <p>Body:</p>

            <HighlightedCpp
              code={`{"doc":"this is a random opaque value", "_pk":1}`}
            />
            <aside className="doc-note">
              <strong>Note: </strong>We must provide &quot;_pk&quot; else call
              will fail. And note that value of key &quot;doc&quot; is string,
              we can pass anything here.
            </aside>
            <li>
              There is another way, which is unique for all table types and
              it&apos;s using sql like statement.
            </li>
            <p>
              <strong>Method</strong> : POST
            </p>
            <p>
              <strong>URI</strong> : /db/&lt;db_name&gt;/query
            </p>
            <p>Body:</p>
            <HighlightedCpp code={`{"sql":"insert statement ..."}`} />
            <p>To insert into WIDE_TABLE, we can use following as body</p>
            <HighlightedCpp
              code={`{"sql" : "insert into my_table_test values \"p1\" {\"name\":\"john\"}"}`}
            />
            <p>To insert into NORMAL_TABLE</p>
            <HighlightedCpp
              code={`{"sql" : "insert into my_table_test2 values 1 \" this is a random opaque value \""}`}
            />
            <p>Response</p>
            <HighlightedOutput
              code={`{
   "retval": 0
}`}
            />
            <p>
              This returns 0 or positive number for success else negative value
              for error.
            </p>
            <aside className="doc-note">
              <strong>Note: </strong>Using the same API , you can run select
              query to retrieve the data.
            </aside>
          </ol>
          <p>
            <strong>Method</strong> : POST
          </p>
          <p>
            <strong>URI</strong> : /db/&lt;db_name&gt;/query
          </p>
          <p>Body:</p>
          <HighlightedCpp code={`{"sql":"insert statement ..."}`} />
          <p>Example</p>
          <HighlightedCpp
            code={`{"sql" : "select * from my_table_test"}
{"sql" : "select * from my_table_test2"}`}
          />
          <p>etc.</p>
        </div>
      </DocArticle>
    </React.Fragment>
  );
}

export async function getServerSideProps(context) {
  return {
    props: { apiSidebar: true },
  };
}
