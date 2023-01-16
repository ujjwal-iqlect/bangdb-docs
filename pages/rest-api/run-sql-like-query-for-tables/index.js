import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";
import HighlightedCpp from "../../../components/HighlightedCpp";
import HighlightedOutput from "../../../components/HighlightedOutput";
import HighlightedJava from "../../../components/HighlightedJava";

export default function RunSqlLikeQueriesForTables() {
  return (
    <React.Fragment>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Run SQL like query for tables - BangDB REST API</title>
        <meta
          name="description"
          content="Run SQL (like) query for tables - BangDB returns around 4MB of data in one shot (this is configurable, but still a limited data in one call)."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Run SQL like query for tables - BangDB REST API"
        />
        <meta
          property="og:description"
          content="Run SQL (like) query for tables - BangDB returns around 4MB of data in one shot (this is configurable, but still a limited data in one call)."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="Run SQL like query for tables - BangDB REST API"
        />
        <meta
          name="twitter:description"
          content="Run SQL (like) query for tables - BangDB returns around 4MB of data in one shot (this is configurable, but still a limited data in one call)."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">Run SQL like query for tables</h1>
        <div className="article-body">
          <p>
            To run SQL like query for tables, streams etc. we can use the
            following API:
          </p>
          <p>
            <strong>Method</strong> : GET
          </p>
          <p>
            <strong>URI</strong> : /db/&lt;dbname&gt;/table
          </p>
          <p>Body</p>
          <HighlightedCpp
            code={`{
    "sql":"select * from ...",
    "levk":"abcd",
    "sec_buf":"",
    "rev_buf":"",
    "switch_done":1
}`}
          />
          <aside className="doc-note">
            <strong>Note: </strong>There are more params here apart from
            &quot;sql&quot;, but they are only used for recursive query (when
            more data is expected to come for the same query.
          </aside>
          <p>
            BangDB returns around 4MB of data in one shot (this is configurable,
            but still a limited data in one call), which means if there are more
            data in the table for the same query then I need to call again. But
            in next call I would like to start from right where it stopped. This
            becomes complicated when the query contains filter clauses for
            secondary or reverse indexes.
          </p>
          <p>
            BangDB abstracts all these details and helps users with just few
            key/value pairs that it returns along with response. And in
            subsequent call, we just need to copy paste those key/value pairs
            along with the &quot;sql&quot; query and call the API again to get
            the next set of data. We can keep doing this until data is exhausted
            in the db or we don&apos;t wish to call again. Let&apos;s see all
            the attributes here in the json body.
          </p>
          <p>&quot;sql&quot; : put your sql query here</p>
          <aside className="doc-note">
            <strong>Note: </strong>In the first call, we just need to send
            &quot;sql&quot;.
          </aside>
          <p>
            If in response we see “more_data_to_come” as 1 , then it means we
            have more data in the table for the query and we need to call it
            again. This time we will copy whatever other attribute is there in
            the request json doc as they are (no need to copy
            &quot;more_data_to_come&quot;) along with the original sql query
          </p>

          <aside className="doc-note">
            <strong>Note: </strong>Checkout more details on SQL query supported
            within BangDB.
          </aside>

          <p>Example</p>
          <HighlightedJava
            code={`curl -H "Content-Type: application/json" -d '{"sql": "select * from my_table_test"}' -X POST http://192.168.1.105:18080/db/mydb/query`}
          />
          <p>Response</p>
          <HighlightedOutput
            code={String.raw`{
   "rows":[
      {
         "k":"user1",
         "v":"{\"name\":\"sachin sinha\", \"org\":\"BangDB\", \"likes\":[\"music\",\"cricket\",\"linux\",\"coding\"],\"_pk\":\"user1\",\"_v\":1}"
      },
      {
         "k":"user2",
         "v":"{\"name\":\"Andy B\", \"org\":\"BangDB\", \"likes\":[\"books\",\"mountains\",\"system designs\"],\"_pk\":\"user2\",\"_v\":1}"
      }
   ],
   "num_items":2,
   "more_data_to_come":0,
   "switch_done":0
}`}
          />
          <p>
            As you see here, the response has variable
            &quot;more_data_to_come&quot; which is set as 0, which means we have
            retrieved all the data for the query and no need to call the API
            again.
          </p>
          <p>
            Table APIs : All table APIs start with
            /db/&lt;dbname&gt;/&lt;tablename&gt;
          </p>
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
