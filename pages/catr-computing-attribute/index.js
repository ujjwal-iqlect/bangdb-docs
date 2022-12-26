import React from "react";
import Head from "next/head";
import Breadcrumb from "../../components/Breadcrumb";
import HighlightedCpp from "../../components/HighlightedCpp";

export default function CatrComputingAttribute() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Computed Attribute (CATR) - BangDB</title>
        <meta
          name="description"
          content="CATR - If we define order for one CATR entry, then we need to define for all. If we don't define then the order of execution can be random."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Computed Attribute (CATR) - BangDB"
        />
        <meta
          property="og:description"
          content="CATR - If we define order for one CATR entry, then we need to define for all. If we don't define then the order of execution can be random."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="Computed Attribute (CATR) - BangDB"
        />
        <meta
          name="twitter:description"
          content="CATR - If we define order for one CATR entry, then we need to define for all. If we don't define then the order of execution can be random."
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
              <h1 className="article-title">Computed Attribute (CATR)</h1>
              <div className="article-body">
                <p>
                  This is useful to compute extra set of attributes from the
                  event stream as we ingest data from the source. For example:
                  if we get attribute a, b, c,… etc. and we wish to compute a3
                  based on some logic, then we need to define that here. This is
                  how it looks:
                </p>
                <HighlightedCpp
                  code={`[
   {
      "name":"m",
      "type":9,
      "opnm":"MUL",
      "stat":3,
      "iatr":[
         "b",
         "c",
         "d"
      ],
      "seq":1,
      "order":0
   },
   {
      "name":"n",
      "type":11,
      "stat":1,
      "opnm":"comp_int",
      "iatr":[
         "g",
         "h"
      ],
      "seq":0,
      "order":1
   },
   {
      "name":"o",
      "type":5,
      "opnm":"string_add",
      "iatr":[
         "a",
         "b"
      ],
      "order":2
   },
   {
      "name":"p",
      "type":5,
      "opid":3,
      "opnm":"myudf3",
      "iatr":[
         "c",
         "b"
      ],
      "order":3
   },
   {
      "name":"mexp",
      "type":9,
      "opnm":"MATH_EXP",
      "iatr":[
         "((($g+$h)*2)+($g*$h))"
      ],
      "order":4
   },
   {
      "name":"x",
      "type":11,
      "opnm":"PRED",
      "model":"mymodel1",
      "algo":"SVM",
      "attr_type":"HYB",
      "iatr":[
         "a",
         "b",
         "c"
      ],
      "order":5
   }
]`}
                />
                <p>Let&apos;s look at each one by one</p>
                <HighlightedCpp
                  code={`{"name":"m", "type":9, "opnm":"MUL", "stat": 3, "iatr":["b", "c", "d"],"seq":1,"order":0}`}
                />
                <p>
                  It says that compute new attribute &quot;m&quot; of type
                  9(long), from (b, c, d) using opnm : &quot;MUL&quot;
                  (multiply) and enable “stat” as well (type 3, running stats).
                </p>
                <aside className="doc-api-code">
                  <p>
                    <strong>attribute type</strong> : 5 - for string, char * 9 -
                    long (can be used for int short as well), 11 - double.
                  </p>
                </aside>
                <aside className="doc-api-code">
                  <p>
                    <strong>&quot;seq&quot;</strong> tells when this catr should
                    be executed. catr can be executed by the db before or after
                    &quot;refr&quot; (reference), this way we can also use some
                    of the referred attributes if we wish to for computing
                    attributes or compute attribute first and then use it for
                    rerference. &quot;seq&quot; = 1 would mean, db would execute
                    it before taking the referred attributes. Default value for
                    &quot;seq&quot; is 0, which means the catr will be executed
                    after reference.
                  </p>
                  <p>
                    <strong>&quot;order&quot;</strong> defines, in which order
                    should db execute these catrs? Since there can be more than
                    on catrs to be executed and some of the catrs may use other
                    catrs attributes, therefore user can define the order in
                    which these should be executed. If we define order for one
                    catr entry, then we need to define for all. If we don&apos;t
                    define then the order of execution can be random, which may
                    be fine in many scenarios where the catrs are not
                    interdependent.
                  </p>
                  <p>
                    <strong>&quot;iatr&quot;</strong> tells the input attribute,
                    opid tells which operation to use.
                  </p>
                </aside>
                <aside className="doc-note">
                  <strong>Note: </strong>Everywhere in stream, &quot;iatr&quot;
                  is used of set of attributes coming from this stream, i.e. the
                  stream for which it&apos;s defined.
                </aside>
                <p>
                  Here are few default operations that can be used or user may
                  upload a udf (user defined function - as explained in udf
                  section separately) and use that. Following default operations
                  are available within db. When we wish to use “opid” instead of
                  &quot;opnm&quot;, we may use following:
                </p>
                <HighlightedCpp
                  code={`enum BANGDB_DEFAULT_UDF {
    // following are for computations of value of different attribute 
    BANGDB_DEFAULT_UDF_COPY = 1, 
    BANGDB_DEFAULT_UDF_ADD,
    BANGDB_DEFAULT_UDF_MUL,
    BANGDB_DEFAULT_UDF_DIV,
    BANGDB_DEFAULT_UDF_PERCENT,
    BANGDB_DEFAULT_UDF_SUB,
    BANGDB_DEFAULT_UDF_UPPER, // for string, it's upper case, for double it's ceiling, long doesn't care
    BANGDB_DEFAULT_UDF_LOWER, // for string, it's lower case, for double it's floor, long doesn't care 
    BANGDB_DEFAULT_UDF_COPY_VAL, // copies the value, doesn't use the val as attribute to read it from event 
    BANGDB_DEFAULT_UDF_LOG_BASE_E, 
    BANGDB_DEFAULT_UDF_LOG_BASE_2,
    BANGDB_DEFAULT_UDF_LOG_BASE_10,
    BANGDB_DEFAULT_UDF_MATH_EXP,
    BANGDB_DEFAULT_DATE_TS,
    BANGDB_DEFAULT_DATE_YEAR_ACTUCAL,
    BANGDB_DEFAULT_DATE_YEAR_EPOCH,
    BANGDB_DEFAULT_DATE_MONTH_ACTUAL,
    BANGDB_DEFAULT_DATE_MONTH_EPOCH,
    BANGDB_DEFAULT_DATE_WEEK_ACTUAL,
    BANGDB_DEFAULT_DATE_WEEK_MONTH,
    BANGDB_DEFAULT_DATE_WEEK_EPOCH,
    BANGDB_DEFAULT_DATE_DAY_YEAR,
    BANGDB_DEFAULT_DATE_DAY_WEEK,
    BANGDB_DEFAULT_DATE_DAY_MONTH,
    BANGDB_DEFAULT_DATE_DAY_EPOCH,
    BANGDB_DEFAULT_DATE_HOUR_ACTUAL,
    BANGDB_DEFAULT_DATE_HOUR_EPOCH,
    BANGDB_DEFAULT_DATE_MIN_ACTUAL,
    BANGDB_DEFAULT_DATE_MIN_EPOCH,
    BANGDB_DEFAULT_DATE_SEC_ACTUAL,
    BANGDB_DEFAULT_ABS_VAL,
    BANGDB_DEFAULT_GEOHASH,
    BANGDB_DEFAULT_UDF_INVALID = 1024
};`}
                />
                <p>In the &quot;opnm&quot;, we would however add following:</p>
                <HighlightedCpp
                  code={`"COPY" // simply copy the attribute val
"ADD" // add two attributes values
"MUL" // multiply the attributes values 
"DIV" // divide the left attribute with the right one 
"PERCENT" // compute percentage, left of right 
"SUB" // subtract right one from left one 
"UPPER" // convert attribute value to upper case 
"LOWER" // convert attribute values to lower case 
"COPY_VAL" // this is to copy the value, not the attribute value, but whatever value is provided \
"LOG_E" // log to the base e 
"LOG_2" // log to the base 2, ln \
"LOG_10" // log to the base 10 
"MATH_EXP" // math expression, involving attributes and fixed values 
"PRED", // for prediction 
"TS", // timestamp given a date (ec; dd//mm/yy hr:mn:sc, etc...) 
"YEAR", // year from the date 
"YEAR_EPOCH", // num of year since epoch 
"MONTH", // month from the date 
"MONTH_EPOCH", // month since epoch 
"WEEK", // week from the date 
"WEEK_MONTH", // week of the month 
"WEEK_EPOCH", // week since epoch 
"DAY", // day from the date 
"DAY_WEEK", // day of the week 
"DAY_MONTH", // day of the month 
"DAY_EPOCH", // num of days since epoch 
"HOUR", // hour from the date 
"HOUR_EPOCH", // hours since epoch 
"MINUTE", // min from the date 
"MINUTE_EPOCH", // min since epoch 
"SECOND", // second from the date 
"ABS", // abs value of as it is 
"GEOHASH" // hash value for geo loc (lat, lon)`}
                />
                <p>Another one</p>
                <HighlightedCpp
                  code={`{"name":"n", "type":11, "stat":1, "opnm":"comp_int", "iatr":["g", "h"]}`}
                />
                <p>
                  It tells, compute attribute n of type(double) from input
                  attribyte (g, h) using a udf name comp_int (implemented and
                  uploaded by the user) and enable &quot;stat&quot;: 1
                  (counting). Since &quot;comp_int&quot; is not the name of any
                  of the default udf, therefore the db would look for custom udf
                  implemented and supplied by the user.
                </p>
                <HighlightedCpp
                  code={`{"name":"o", "type":5, "opnm":"string_add", "iatr":["a", "b"]}`}
                />
                <p>
                  It computes an attribute 0 of type 5(string) from input
                  attributes (a, b) using udf string_add
                </p>
                <HighlightedCpp
                  code={`{"name":"p", "type":5, "opid":3, "opnm":"myudf3", "iatr":["c", "b"]`}
                />
                <p>
                  This is also in similar lines, but it has both opid and opnm,
                  in such case it uses opid 3.
                </p>
                <aside className="doc-note">
                  <strong>Note: </strong> When both &quot;opid&quot; and
                  &quot;opnm&quot; are given then &quot;opid&quot; is used.
                </aside>
                <HighlightedCpp
                  code={`{"name":"myexp", "type":9, "opid":13, "iatr":["((($g+$h)*2)+($g*$h))"]}`}
                />
                <p>
                  This is bit different, here it computes attribute
                  &quot;myexp&quot; of type 9(long) using &quot;opid&quot;:
                  13(BANGDB_DEFAULT_UDF_MATH_EXP) which says use math expression
                  as defined in the &quot;iatr&quot; for the given input
                  attributes. Here it adds g and h values then multiplies by 2
                  and the adds with multiple of g and h.
                </p>
                <p>
                  This should be simple enough, but it has lots of value as we
                  can create new attributes and associate them with the stream
                  before further processing.
                </p>
                <aside className="doc-note">
                  <strong>Note: </strong>This is the first processing done when
                  the event is ingested after &quot;refr&quot; is done by
                  default, to execute it before refer, use &quot;seq&quot;:1.
                </aside>
                <p>Now, let&apos;s look at how to do prediction on stream.</p>
                <HighlightedCpp
                  code={`{
   "name":"x",
   "type":11,
   "opnm":"PRED",
   "model":"mymodel1",
   "algo":"SVM",
   "attr_type":"HYB",
   "iatr":[
      "a",
      "b",
      "c"
   ]
}`}
                />
                <p>
                  Let&apos;s say when we ingest events in any stream, we wish to
                  use set of attributes in the event and then use pre-trained
                  model.
                </p>
                <p>
                  To do prediction and store the prediction output in the stream
                  itself in some attribute. Here, we use &quot;catr&quot; and
                  pretty much use the defined structure of the &quot;catr&quot;
                  expect few additions and they are:
                </p>
                <aside className="doc-api-code">
                  <p>&quot;opnm&quot;: here we use &quot;PRED&quot;</p>
                  <p>
                    <strong>&quot;model&quot;</strong> : name of the model that
                    we have trained
                  </p>
                  <p>
                    <strong>&quot;algo&quot;</strong> : name of the algorithm
                    using which we trained the model
                  </p>
                  <p>
                    <strong>&quot;attr_type&quot;</strong> : type of the
                    attributes, if all are numerical use &quot;NUM&quot;, when
                    all are string, use &quot;STR&quot; and when we have mixed
                    use &quot;HYB&quot;
                  </p>
                  <p>
                    <strong>&quot;exp_fmt&quot;</strong> : what is the expected
                    format of the data (csv, json, libsvm etc…) needed by the
                    model. When model is trained using BangDB native algos, then
                    this is not needed, only required when using external files
                    to train the model.
                  </p>
                  <p>
                    <strong>&quot;iatr&quot;</strong> : this contains all the
                    attributes that should be participating in the prediction.
                    Order is important here. However, if not clear, then just
                    put what makes sense at that point in time, later during
                    prediction, DB will correct this and use the right one (by
                    learning from the trained model, how the model was
                    trained?).
                  </p>
                </aside>
                <p>
                  Rest all is same, we can use &quot;stat&quot; on the
                  attribute, further this attribute can participate in different
                  computations of the &quot;catr&quot;, etc…
                </p>
                <aside className="doc-note">
                  <strong>Note: </strong>The order in which the items are
                  defined in the &quot;catr&quot;:[] array is important. DB
                  computes these in the random order unless “order” is defined
                  in proper manner. If &quot;order&quot; is defined for one catr
                  then it has to be defined for all other catrs. Also
                  &quot;order&quot; values should be unique else db will throw
                  error.
                </aside>
                <h2>Few Examples</h2>
                <p>
                  Let&apos;s say, we have a stream of data with attributes
                  (a,b,c,m), here is the schema for the same.
                </p>
                <HighlightedCpp
                  code={`{
   "schema":"myapp",
   "streams":[
      {
         "name":"product",
         "type":1,
         "swsz":86400,
         "inpt":[
            
         ],
         "attr":[
            {
               "name":"a",
               "type":5,
               "sidx":1,
               "stat":2,
               "ridx":1
            },
            {
               "name":"b",
               "type":9,
               "stat":3
            },
            {
               "name":"m",
               "type":11,
               "stat":3
            },
            {
               "name":"c",
               "type":5,
               "kysz":24,
               "stat":2
            }
         ]
      }
   ]
}`}
                />
                <p>
                  Now, let&apos;s compute several other attributes as required.
                </p>
                <ol>
                  <li>
                    Lower the attribute a, i.e replace &apos;Sachin&apos; to
                    &apos;sachin&apos;.
                  </li>
                  <p>
                    Here we would like to apply replace the attribute a with
                    lower form of the same. Therefore for us here both
                    &quot;name&quot; and &quot;iatr&quot; will be the same. To
                    replace the attribute, we have &quot;fnr&quot; tag (find and
                    replace) that we can set. &quot;fnr&quot; can take following
                    values.
                  </p>
                  <aside className="doc-api-code">
                    <p>
                      &apos;fnr&apos; key options; 1 = just add this attribute
                      after compute into the stream [ default ] 2 = replace if
                      existing, else just add 3 = add only if it&apos;s not
                      existing (missing value case).
                    </p>
                  </aside>
                  <p>Therefore, we can do following:</p>
                  <HighlightedCpp
                    code={`{"name":"a","type":5,"opnm":"LOWER","iatr":["a"],"stat":2,"fnr":2}`}
                  />
                  <li>
                    Add missing fixed value, if missing then add else ignore
                  </li>
                  <HighlightedCpp
                    code={`{"name":"i","type":5,"opnm":"COPY_VAL","iatr":["sachin"],"fndr":3}`}
                  />
                  <li>Compute new attribute using math expression</li>
                  <HighlightedCpp
                    code={`{"name":"b","type":9,"opnm":"MATH_EXP","iatr":["($b*10)"]}`}
                  />
                </ol>
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
