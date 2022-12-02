import React from "react";
import Head from "next/head";
import Breadcrumb from "../../components/Breadcrumb";
import HighlightedCpp from "../../components/HighlightedCpp";

export default function CompositeIndex() {
  const createTableCode = String.raw`table_env te;
te.set_table_type(WIDE_TABLE);
te.set_key_type(COMPOSITE_KEY);
bangdb_table *tbl = bdb->getTable((char*)"topview", &te);`;

  const putDataInTable = String.raw`char * k, * v;
FDT fk, fv;
k = makeComposite((char * )
   "1", (char * )
   "a", NULL);
v = (char * )
"val13";
fk.data = k;
fk.length = strlen(k);
fv.data = v;
fv.length = strlen(v);
tbl -> put(fk, fv, INSERT_UNIQUE);
fk.free();

// more data

insert k = makeComposite((char * )
   "2", (char * )
   "a", NULL);
v = (char * )
"val9";
fk.data = k;
fk.length = strlen(k);
fv.data = v;
fv.length = strlen(v);
tbl -> put(fk, fv, INSERT_UNIQUE);
fk.free();
k = makeComposite((char * )
   "1", (char * )
   "b", NULL);
v = (char * )
"val7";
fk.data = k;
fk.length = strlen(k);
fv.data = v;
fv.length = strlen(v);
tbl -> put( & fk, & fv, INSERT_UNIQUE);
fk.free();`;

  const fireSomeQueryCode = String.raw`resultset * rs = NULL;

 //to scan all data 
 while (true) {
    rs = tbl -> scan_doc(NULL);
    if (!rs) break;
    while (rs -> hasNext()) {
       rs -> moveNext();
    }
 }
 rs = NULL;
 char * tval1, * tval2;
 FDT skey, ekey;
 scan_filter sf;
 sf.skey_op = GTE;
 sf.ekey_op = LTE;
 tval1 = (char * )"1:*";
 tval2 = (char * )"1:*";
 skey.data = tval1;
 skey.length = strlen(tval1);
 ekey.data = tval2;
 ekey.length = strlen(tval2);
 while (true) {
    rs = tbl -> scan_doc(NULL, skey, ekey);
    if (!rs) break;
    while (rs -> hasNext()) {
       rs -> moveNext();
    }
 }`;

  const matchSecondPartCode = String.raw`tval1 = (char * )"1:b";
tval2 = (char * )"3:b";

// to match all data with 1:b... until 3:b 
skey.data = tval1;
skey.length = strlen(tval1);
ekey.data = tval2;
ekey.length = strlen(tval2);
while (true) {
   rs = tbl -> scan_doc(NULL, skey, ekey);
   if (!rs) break;
   while (rs -> hasNext()) {
      rs -> moveNext();
   }
}`;

  const similarCode = String.raw`tval1 = (char * ) "*:a";
tval2 = (char * )"*:a";
skey.data = tval1;
skey.length = strlen(tval1);
ekey.data = tval2;
ekey.length = strlen(tval2);
while (true) {
   rs = tbl -> scan_doc(NULL, & skey, & ekey);
   if (!rs) break;
   while (rs -> hasNext()) {
      rs -> moveNext();
   }
}`;

  return (
    <React.Fragment>
      <Head>
        <title>Composite Key Index - BangDB</title>
        <meta
          name="description"
          content="Composite keys can be created for WIDE_TABLE type. To create composite index for primary key, we need to create table with following setting"
        ></meta>
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Composite Key Index - BangDB" />
        <meta
          property="og:description"
          content="Composite keys can be created for WIDE_TABLE type. To create composite index for primary key, we need to create table with following setting"
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="Composite Key Index - BangDB" />
        <meta
          name="twitter:description"
          content="Composite keys can be created for WIDE_TABLE type. To create composite index for primary key, we need to create table with following setting"
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
              <Breadcrumb text="Introduction" url="/bangdb-introduction" />
              <h1 className="article-title">Composite Key Index</h1>
              <div className="article-body">
                <h2>Efficient way to structure data for faster queries</h2>
                <p>
                  Composite keys / index again can be created for WIDE_TABLE
                  type. To create composite index for primary key, we need to
                  create table with following setting.
                </p>
                <HighlightedCpp code={createTableCode} />
                <p>
                  There are several helper function to create composite key
                  before putting the data into the table. Here data could be
                  json doc or normal text or opaque data.
                </p>
                <p>Here is an example for putting data into the table</p>
                <HighlightedCpp code={putDataInTable} />
                <p>Now, let&apos;s fire some query</p>
                <HighlightedCpp code={fireSomeQueryCode} />
                <p>
                  We can also match with the second part of the key using %
                  char, like following:
                </p>
                <HighlightedCpp code={matchSecondPartCode} />
                <p>Similarly</p>
                <HighlightedCpp code={similarCode} />
              </div>
            </article>
          </div>
        </main>
      </section>
    </React.Fragment>
  );
}
