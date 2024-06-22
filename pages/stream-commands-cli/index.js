import React from "react";
import Head from "next/head";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import HighlightedCpp from "../../components/HighlightedCpp";
import HighlightedOutput from "../../components/HighlightedOutput";

export default function StreamCommandsCli() {
  return (
    <React.Fragment>
      <Head>
        <title>Stream Commands CLI - BangDB</title>
        <meta
          name="description"
          content="Stream Commands - Stream is a feature in BangDB using which user can ingest, parse, process and analyse data in continuous manner."
        ></meta>
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Stream Commands CLI - BangDB" />
        <meta
          property="og:description"
          content="Stream Commands - Stream is a feature in BangDB using which user can ingest, parse, process and analyse data in continuous manner."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="Stream Commands CLI - BangDB" />
        <meta
          name="twitter:description"
          content="Stream Commands - Stream is a feature in BangDB using which user can ingest, parse, process and analyse data in continuous manner."
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
              <h1 className="article-title">Stream Commands</h1>
              <div className="article-body">
                <p>
                  Stream is a feature in BangDB using which user can ingest,
                  parse, process and analyse data in continuous manner. CLI
                  provides lots of commands to deal with streams in simple
                  manner.
                </p>
                <p>There are following important steps to set up streams.</p>

                <ol>
                  <li>
                    Create Schema (using cli or can author json schema file
                    separately)
                  </li>
                  <li>Register the schema</li>
                  <li>Ingest and process data</li>
                </ol>
                <p>
                  Schema is a jsondocument which defines how the streams will
                  get processed, stored and further the necessary actions may be
                  taken. The structure of json is very simple it is like
                  following:
                </p>
                <aside className="doc-api-code">
                  <h4>Schema</h4>
                  <p>
                    array of streams
                    <br />
                    array of notification templates
                    <br />
                    array of user defined functions [ UDFs ]
                  </p>
                  <h4>Stream</h4>
                  <p>
                    array of attributes
                    <br />
                    array of computed attributes [ attrs that could be computed
                    at run time and added to the stream ]
                    <br />
                    array of referred attributes [ attrs that could be referred
                    and added to the stream ]
                    <br />
                    array groupby that could be computed and updated
                    continuously
                    <br />
                    array of joins that could result in data streamed into
                    another derived streams
                    <br />
                    array of filter that could send filtered data to another
                    derived streams
                    <br />
                    array of CEP queries that could run continuously to find
                    patterns, output could be sent to another derived streams
                    <br />
                    array of entity long term stats to be computed continuously
                  </p>
                  <p>
                    Please see more on this at{" "}
                    <Link href={"/stream"}>stream processing</Link>
                  </p>
                </aside>
                <p>Let&apos;s see a sample schema</p>
                <HighlightedCpp
                  code={`{
   "schema":"myschema",
   "streams":[
      {
         "name":"stream1",
         "type":1,
         "swsz":86400,
         "inpt":[
            
         ],
         "attr":[
            {
               "name":"a",
               "type":5,
               "kysz":32,
               "sidx":1,
               "ridx":1,
               "stat":1
            },
            {
               "name":"b",
               "type":5,
               "kysz":32,
               "stat":2
            },
            {
               "name":"g",
               "type":11,
               "stat":3
            },
            {
               "name":"h",
               "type":11
            }
         ],
         "catr":[
            {
               "name":"m",
               "type":9,
               "opnm":"ADD",
               "stat":3,
               "iatr":[
                  "b",
                  "a"
               ]
            },
            {
               "name":"mexp",
               "type":9,
               "opnm":"MATH_EXP",
               "iatr":[
                  "((($g+$h)*2)+($g*$h))"
               ]
            }
         ],
         "gpby":[
            {
               "gpat":[
                  "a",
                  "b"
               ],
               "iatr":"g",
               "stat":3,
               "gran":3600,
               "kysz":48
            }
         ],
         "refr":[
            {
               "name":"myrefr1",
               "iatr":[
                  "c"
               ],
               "rstm":"stream2",
               "ratr":[
                  "p1"
               ],
               "jqry":{
                  "cond":[
                     "b"
                  ],
                  "opnm":"ATTR",
                  "args":[
                     "b"
                  ]
               }
            }
         ]
      },
      {
         "name":"stream2",
         "type":1,
         "inpt":[
            
         ],
         "attr":[
            {
               "name":"p1",
               "type":5,
               "kysz":24,
               "sidx":1
            },
            {
               "name":"b",
               "type":5,
               "kysz":32
            }
         ]
      }
   ]
}`}
                />
                <p>
                  Other example could be following. This runs CEP in continuous
                  manner to find a pattern where for two stocks, the current
                  value is exactly same but the stocks are different.
                </p>
                <HighlightedCpp
                  code={`{
   "schema":"test",
   "streams":[
      {
         "name":"s1",
         "type":1,
         "swsz":86400,
         "inpt":[
            
         ],
         "attr":[
            {
               "name":"stock",
               "type":5,
               "kysz":16
            },
            {
               "name":"price",
               "type":9
            }
         ],
         "cepq":[
            {
               "name":"mystock",
               "type":1,
               "tloc":3000,
               "ratr":[
                  "price"
               ],
               "rstm":"s1",
               "iatr":[
                  "stock",
                  "price"
               ],
               "jqry":{
                  "cond":[
                     "stock",
                     "price"
                  ],
                  "opid":11,
                  "args":[
                     "stock",
                     "price"
                  ],
                  "cmp":[
                     "NE",
                     "EQ"
                  ],
                  "seq":1
               },
               "fqry":{
                  "name":"{\"query\":[{\"key\":\"price\", \"cmp_op\":0, \"val\":70.5}]}",
                  "type":1
               },
               "cond":[
                  {
                     "name":"NUMT",
                     "val":1,
                     "opid":1
                  },
                  {
                     "name":"DUR",
                     "val":1000,
                     "opid":0
                  }
               ],
               "ostm":"s2"
            }
         ]
      },
      {
         "name":"s2",
         "type":3,
         "swsz":86400,
         "inpt":[
            "s1"
         ],
         "attr":[
            {
               "name":"stock",
               "type":5,
               "kysz":16
            },
            {
               "name":"price",
               "type":9
            }
         ]
      }
   ]
}`}
                />
                <p>
                  Another example, which joins two streams in continuous manner.
                  This joins temperature and pressure for any given point and
                  sends the joined data to <code>temp_pressure_stream</code>.
                </p>
                <HighlightedCpp
                  code={`{
   "schema":"myschema",
   "streams":[
      {
         "name":"temp_stream",
         "type":1,
         "swsz":81600,
         "inpt":[
            
         ],
         "attr":[
            {
               "name":"temp",
               "type":11
            },
            {
               "name":"point",
               "type":9
            }
         ],
         "join":[
            {
               "name":"temp_pressure_join",
               "type":3,
               "tloc":3000,
               "iatr":[
                  "temp",
                  "point"
               ],
               "rstm":"pressure_stream",
               "ratr":[
                  "pressure"
               ],
               "jqry":{
                  "cond":[
                     "point"
                  ],
                  "opid":11,
                  "args":[
                     "point"
                  ]
               },
               "ostm":"temp_pressure_stream"
            }
         ]
      },
      {
         "name":"pressure_stream",
         "type":1,
         "inpt":[
            
         ],
         "attr":[
            {
               "name":"pressure",
               "type":11
            },
            {
               "name":"point",
               "type":9
            }
         ],
         "join":[
            {
               "name":"temp_pressure_join",
               "type":5,
               "tloc":3000,
               "ratr":[
                  "temp",
                  "point"
               ],
               "rstm":"temp_stream",
               "iatr":[
                  "pressure"
               ],
               "jqry":{
                  "cond":[
                     "point"
                  ],
                  "opid":11,
                  "args":[
                     "point"
                  ]
               },
               "ostm":"temp_pressure_stream"
            }
         ]
      },
      {
         "name":"temp_pressure_stream",
         "type":3,
         "inpt":[
            "temp_stream",
            "pressure_stream"
         ],
         "attr":[
            {
               "name":"point",
               "type":9
            },
            {
               "name":"temp",
               "type":11
            },
            {
               "name":"pressure",
               "type":11
            }
         ]
      }
   ]
}`}
                />
                <p>
                  To register the given schema (We can write a schema (like
                  above) and directly register it with the server using CLI.
                  Suppose the schema is in file “sample_schema.json” then we can
                  register as below)
                </p>
                <HighlightedCpp code={`register schema sample_schema.json`} />
                <HighlightedOutput
                  code={`@@@@ time taken to init stream [ myschema__stream2 ] is ... 
Usage : 
------------------------- 
| Time : 0.003 msec | 
------------------------- 
User : 0.01 msec 
Sys : 0 msec 
------------------------- 
@@@@ time taken to init stream [ myschema__stream1 ] is ... 
Usage : 
------------------------- 
| Time : 89.097 msec | 
------------------------- 
User : 89.975 msec Sys : 1 msec 
------------------------- 
success`}
                />
                <p>To de-register the schema, drop the schema</p>
                <HighlightedCpp code={`deregister schema myschema`} />
                <HighlightedOutput code={`success`} />
                <p>
                  OR, we can create using the workflow provided by the CLI, if
                  we issue command &quot;create schema&quot;
                </p>
                <HighlightedCpp code={`create schema myschema`} />
                <HighlightedOutput
                  code={`do you wish to read earlier saved schema for editing/adding? [ yes | no ]: no`}
                />
                <p>
                  Select &quot;no&quot; as we are creating from scratch. We
                  should select yes. If we have some schema on the disk and we
                  would like to add/edit to it. Then it asks to select the
                  stream name.
                </p>
                <HighlightedOutput
                  code={`what's the name of the stream that you wish to add?: stream1`}
                />
                <p>
                  We input the name of the stream &quot;stream1&quot; and the
                  press enter. Post this we must select the type of the stream.
                </p>
                <HighlightedOutput
                  code={`what's the type of the stream [ raw/normal primary (1) | fltr output (2) | join/cep output (3) | Entity (4) | skip (5) ] (or Enter for default (1)):1`}
                />
                <aside className="doc-note">
                  <strong>Note: </strong>There are few types of streams, raw is
                  the one where we ingest data and all others are derived
                  streams, i.e. used by the stream processing engine flter
                  output stream is one where filtered data goes, JOIN/CEP is the
                  one where joined data goes and entity stream is the one where
                  long term aggregate goes. There are few other types, such as
                  stat, groupby, buffer etc. but they are all abstracted and
                  used by the stream processing engine solely.
                </aside>
                <p>
                  Since this is the primary/raw stream hence we will select 1.
                </p>
                <p>
                  Now, define the size of the sliding window, enter for default
                  one day
                </p>
                <HighlightedOutput
                  code={`what's the size of the sliding window in seconds [ or enter for default 86400 sec (a day) ]:`}
                />
                <p>
                  By now, we have empty stream schema defined, now we must
                  define what goes inside the schema framework enter 1 to add
                  attributes first.
                </p>
                <HighlightedOutput
                  code={`What would you like to add (press Enter when done) [ attr (1) | catr (2) | refr (3) | gpby (4) | fltr (5) | join (6) | entity (7) | cep (8) | notifs (9) ]:1`}
                />
                <p>This is start the sub workflow to add attributes</p>
                <HighlightedCpp code={`add attributes`} />
                <HighlightedOutput
                  code={`attribute name: a 
attribute type (press Enter for default(5)) [ string(5) | long(9) | double (11) ]: 5 enable sidx [ 0 | 1 ]: 1 
attribute key size in bytes (press Enter for default(24 bytes)): 32 
enable ridx [ 0 | 1 ]: 1 
enable stat [ none(0) | count (1) | unique count (2) ]: 1
add another attribute ? [ yes | no ]:`}
                />
                <aside className="doc-api-code">
                  <h4>To add any attribute</h4>
                  <p>
                    <strong>type</strong>: We can select type of attributes
                  </p>
                  <p>
                    <strong>sidx</strong>: To create secondary index on the
                    attribute. Good for query and also if this is going to be
                    used in join or cep or filter. Then we should enable the
                    sidx.
                  </p>
                  <p>
                    <strong>key size</strong> : only when attribute type is
                    string then we need to select this
                  </p>
                  <p>
                    <strong>ridx</strong> : reverse index, switch it on if we
                    wish to do search on this
                  </p>
                  <p>
                    <strong>stat</strong> : this is generic running stats. For
                    string type we can do count or unique count. For double or
                    long we can also select stat as 3, which is complete set of
                    stats [ count, min, max, avg, skey, stddev, excurt etc… ].
                    We can keep following the sub workflow until we have created
                    enough attributes.
                  </p>
                </aside>
                <p>
                  Now let&apos;s also create another stream “stream2” and add
                  two attributes p1 and b as shown above, following the same
                  workflow. Let&apos;s now create &quot;catr&quot;. When
                  creating &quot;catr&quot;, it starts sub workflow for the
                  &quot;catr&quot; itself.
                </p>
                <HighlightedCpp code={`add computed attributes (catr)`} />
                <HighlightedOutput
                  code={`attribute name (press Enter to end): m 
attribute type (press Enter for default (5)) [ string(5) | long(9) | double (11) ]: 9
available default ops are 
[ COPY | ADD | MUL | DIV | PERCENT | SUB | UPPER | LOWER | COPY_VAL 
| LOG_E | LOG_2 | LOG_10 | MATH_EXP | PRED | TS | YEAR | YEAR_EPOCH 
| MONTH | MONTH_EPOCH | WEEK | WEEK_MONTH | WEEK_EPOCH | DAY | DAY_WEEK 
| DAY_MONTH | DAY_EPOCH | HOUR | HOUR_EPOCH | MINUTE | MINUTE_EPOCH 
| SECOND | ABS ] 
or 
Enter custom udf name
enter the name of the intended operation from the above default ops (press Enter to end): ADD`}
                />
                <aside className="doc-note">
                  <strong>Note: </strong>The catr is about computing new
                  attribute based on some logic/computations/operations. Here we
                  have 20+ default operations available, if we want to do
                  something beyond these then we can write our own UDF and use
                  the same.
                </aside>
                <p>
                  Select &quot;ADD&quot; as the ops here, so we wish to add
                  something. We can ADD attributes or some fixed val.
                </p>
                <p>
                  Here let&apos;s say we wish to add the attributes, therefore
                  we need to select attributes that we wish to add.
                </p>
                <HighlightedOutput
                  code={`enter the name of the intended operation from the above default ops (press Enter to end): ADD
enter the input attributes on which this ops will be performed, (press Enter once done): b 
enter the input attributes on which this ops will be performed, (press Enter once done): a 
enter the input attributes on which this ops will be performed, (press Enter once done): 
enter sequence [ 0 | 1 ], if 1 then it will be done before refer else post refr:1`}
                />
                <p>
                  The sequence is important if let&apos;s say we wish to apply
                  operation on attribute which will be referred from other
                  stream. Order ensures we execute catr before or after refer.
                </p>
                <p>
                  We can now select &quot;sidx&quot; and &quot;stat&quot; for this
                  computed attribute as well.
                </p>
                <HighlightedOutput
                  code={`enable sidx [ 0 | 1 ]: 0 
enable stat [ none(0) | count (1) | running stats (3) ]: 0 
should add, replace or add only if present [ add (1) | replace (2) | add only if not present (3) ]: 1
add another computed attribute ? [ yes | no ]: yes`}
                />
                <p>
                  Add another computed attribute now. This time we will use Math
                  Expression to compute the attribute, using the existing
                  attributes.
                </p>
                <aside className="doc-note">
                  <strong>Note: </strong>We can use the computed attributed as
                  part of input here for another catr and so on.
                </aside>
                <p>
                  Here we should select <code>((($g+$h)*2)+($g*$h))</code> as
                  math expression.
                </p>
                <HighlightedOutput
                  code={`attribute name (press Enter to end): mexp
attribute type (press Enter for default (5)) [ string(5) | long(9) | double (11) ]: 9 
available default ops are 
[ COPY | ADD | MUL | DIV | PERCENT | SUB | UPPER | LOWER | COPY_VAL |
LOG_E | LOG_2 | LOG_10 | MATH_EXP | PRED | TS | YEAR | YEAR_EPOCH | 
MONTH | MONTH_EPOCH | WEEK | WEEK_MONTH | WEEK_EPOCH | DAY | DAY_WEEK |
DAY_MONTH | DAY_EPOCH | HOUR | HOUR_EPOCH | MINUTE | MINUTE_EPOCH | 
SECOND | ABS ] 
or Enter custom udf name enter the name of the intended operation from the above default ops (press Enter to end): MATH_EXP 
enter math expression: ((($g+$h)*2)+($g*$h))
enter sequence [ 0 | 1 ], if 1 then it will be done before refr else post refr: 1 
enable sidx [ 0 | 1 ]: 0 
enable stat [ none(0) | count (1) | running stats (3) ]: 0 
should add, replace or add only if present [ add (1) | replace (2) | add only if not present (3) ]: 1 
add another computed attribute ? [ yes | no ]: no`}
                />
                <p>Now let&apos;s add groupby. It&apos;s also a sub-workflow</p>
                <HighlightedOutput
                  code={`What would you like to add (press Enter when done) [ attr (1) | catr (2) | refr (3) | gpby (4) | fltr (5) | join (6) | entity (7) | cep (8) | notifs (9) ]: 4 `}
                />
                <HighlightedCpp code={`add groupby (gpby)`} />
                <HighlightedOutput
                  code={`name of the attribute that would be aggregated: g

enter name of groupby attributes (press Enter once done): a

enter name of groupby attributes (press Enter once done): b

enter name of groupby attributes (press Enter once done):

attribute key size in bytes (note gpby is name mangled with aggr and groupby attr names, hence should be properly allocated): 48 
granularity for the aggregate (in seconds): 600 
enable stat (1,2,3) [ count (1) | unique count (2) | running stat (3) ]: 1 
add another gpby ? [ yes | no ]: no`}
                />
                <p>
                  Now let&apos;s create <code>&quot;refr&quot;</code>, refer
                  attribute in another stream.
                </p>
                <HighlightedOutput
                  code={`What would you like to add (press Enter when done) 
[ attr (1) | catr (2) | refr (3) | gpby (4) | fltr (5) | join (6) | entity (7) | cep (8) | notifs (9) ]: 3 
add refers (refr)... refr name: myrefr1
    enter name of input attribute that will get created after referring the other stream: c

    enter name of input attribute that will get created after referring the other stream:

    enable stat (1,2,3) on this created attribute? [ none(0) | count (1) | unique count (2) | running stat (3) ]: 0

    enter refr (other stream) stream name: stream2

    enter refr attribute name, the attribute which will get copied into this stream if refer condition is satisfied: p1

    enter refr attribute name, the attribute which will get copied into this stream if refer condition is satisfied:
    
    enter name of condition attribute need to join two events (press Enter once done): b

    enter name of condition attribute need to join two events (press Enter once done):

    available jqry op names tells whether the condition attributes should be compared with another attribute (ATTR), some fixed value (FIXED), math expression (MATH_EXP), both attribute and fixed (HYBRID) or your custom udf name

    enter opid (operation name)[ ATTR (a) | FIXED (f) | MATH_EXP (m) | HYBRID (h) ]: a

    enter name of arguments (attribute or fixed val or hybrid or math_exp as opid selected previously) for joining (press Enter once done): b

    enter name of arguments (attribute or fixed val or hybrid or math_exp as opid selected previously) for joining (press Enter once done):

    enter the comparison operators [ EQ | NE | GT | LT ] for join (press Enter once done): EQ

    enter the comparison operators [ EQ | NE | GT | LT ] for join (press Enter once done):

    enter seq (sequence to tell if strictly consecutive events are required (1) or we may have other events in between (0)) [ or Enter for default (0) ]: 0

should add, replace or add only if present [ add (1) | replace (2) | add only if not present (3) ]: 1 add another refr ? [ yes | no ]: no`}
                />
                <p>
                  That&apos;s it to create the first schema (as shown above), now
                  simply commit the changes and it will create the schema.
                </p>
                <HighlightedOutput
                  code={`What would you like to add (press Enter when done) [ attr (1) | catr (2) | refr (3) | gpby (4) | fltr (5) | join (6) | entity (7) | cep (8) | notifs (9) ]: 
add another stream ? [ yes | no ]: no 
do you wish to register the schema now? [ yes | no ]: yes 
@@@@ time taken to init stream [ myschema__stream2 ] is ... 
Usage :
------------------------- 
| Time : 0.002 msec |
------------------------- 
User : 0.008 msec 
Sys : 0 msec 
-------------------------
@@@@ time taken to init stream [ myschema__stream1 ] is ...
Usage :
------------------------- 
| Time : 100.218 msec |
-------------------------
User : 0.884 msec 
Sys : 1.001 msec 
------------------------- 
success schema [ myschema ] registered successfully`}
                />
                <p>
                  It finally asks if you wish to store the schema on the disk
                </p>
                <HighlightedOutput
                  code={`do you wish to save the schema (locally) for later reference? [ yes | no ]: no
done with the schema [ myschema ] processing`}
                />
                <p>See the existing schemas</p>
                <HighlightedOutput
                  code={`schema list fetched successfully
+----------------+---------+ 
|name            |state    | 
+----------------+---------+ 
|myschema        |1        | 
+----------------+---------+ 
fetched [ 1 ] schemas`}
                />
                <p>To see the schema</p>
                <HighlightedCpp code={`select schema from myschema pretty`} />
                <p>To insert event in the streams</p>
                <HighlightedCpp
                  code={`insert into myschema.stream2 values null {"p1":"P123","b":"b123"}`}
                />
                <HighlightedOutput code={`success`} />
                <p></p>
                <HighlightedOutput
                  code={`insert into myschema.stream1 values null {"a":"a123","b":"b123","g":10.2,"h":5.5}`}
                />
                <HighlightedOutput code={`success`} />
                <p>Select data from stream1 now</p>
                <HighlightedCpp
                  code={`select * from myschema.stream1 scanning for pk range [null : null] and query = null`}
                />
                <HighlightedOutput
                  code={`+-------------------------------+-------------------------------------------------------------------------------------------------------------------------+
|key                            |val                                                                                                                      | 
+-------------------------------+-------------------------------------------------------------------------------------------------------------------------+
|1612193259884284               |{"a":"a123","b":"b123","g":10.2,"h":5.5,"_pk":1612193259884284,"m":7746999651695517567, | | "mexp":87,"c":"P123","_v":1} | 
+-------------------------------+-------------------------------------------------------------------------------------------------------------------------+
total rows retrieved = 1 (1)`}
                />
                <p>
                  As you see, attribute m, mexp and c got added due to
                  &quot;catr&quot; and &quot;refr&quot; respectively.
                </p>
                <p>
                  To see the count of events in each stream of a given schema
                </p>
                <HighlightedCpp code={`select stream from myschema`} />
                <HighlightedOutput
                  code={`+-------------+--------+------------------+ 
|stream       |type    |num_events        | 
+-------------+--------+------------------+ 
|stream2      |1       | 1                | 
+-------------+--------+------------------+ 
|stream1      |1       | 1                | 
+-------------+----+----------------------+ 
successful in getting the streams [ 2 num ] info for schema [ myschema ]`}
                />
                <p>
                  To describe the schema, this will show the dependencies among
                  streams and other entities
                </p>
                <HighlightedCpp
                  code={`describe schema myschema pretty {
   "schema":"myschema",
   "schemaid":4766750373947953813,
   "node_info":[
      {
         "refr-by":[
            
         ],
         "cepq":[
            
         ],
         "gpby":[
            
         ],
         "fltr":[
            
         ],
         "refr":[
            
         ],
         "refr-to":[
            
         ],
         "parent":[
            
         ],
         "type":0,
         "children":[
            "myschema__stream2",
            "myschema__stream1"
         ],
         "node":"dummy_head",
         "enty":[
            
         ],
         "joins":[
            
         ]
      },
      {
         "refr":[
            
         ],
         "fltr":[
            
         ],
         "gpby":[
            
         ],
         "cepq":[
            
         ],
         "refr-by":[
            "myschema__stream1"
         ],
         "enty":[
            
         ],
         "node":"myschema__stream2",
         "joins":[
            
         ],
         "children":[
            
         ],
         "type":1,
         "parent":[
            "dummy_head"
         ],
         "refr-to":[
            
         ]
      },
      {
         "refr-to":[
            "myschema__stream2"
         ],
         "children":[
            "myschema__stream1__a__b__g"
         ],
         "type":1,
         "parent":[
            "dummy_head"
         ],
         "joins":[
            
         ],
         "enty":[
            
         ],
         "node":"myschema__stream1",
         "refr-by":[
            
         ],
         "cepq":[
            
         ],
         "fltr":[
            
         ],
         "gpby":[
            "g"
         ],
         "refr":[
            "myschema__stream2"
         ]
      },
      {
         "gpby":[
            
         ],
         "fltr":[
            
         ],
         "refr":[
            
         ],
         "refr-by":[
            
         ],
         "cepq":[
            
         ],
         "enty":[
            
         ],
         "joins":[
            
         ],
         "node":"myschema__stream1__a__b__g",
         "refr-to":[
            
         ],
         "parent":[
            
         ],
         "type":5,
         "children":[
            
         ]
      }
   ]
}`}
                />
                <p>To describe stream of any schema</p>
                <HighlightedCpp
                  code={`describe stream myschema.stream1 {
   "node":6578472670278090808,
   "attributes":[
      {
         "name":"b",
         "type":5,
         "kysz":48,
         "sidx":0,
         "stat":2,
         "ridx":0
      },
      {
         "name":"g",
         "type":11,
         "kysz":8,
         "sidx":0,
         "stat":3,
         "ridx":0
      },
      {
         "name":"m",
         "type":9,
         "kysz":8,
         "sidx":0,
         "stat":0,
         "ridx":0
      },
      {
         "name":"a",
         "type":5,
         "kysz":32,
         "sidx":1,
         "stat":1,
         "ridx":1
      },
      {
         "name":"h",
         "type":11,
         "kysz":8,
         "sidx":0,
         "stat":0,
         "ridx":0
      },
      {
         "name":"c",
         "type":5,
         "kysz":0,
         "sidx":0,
         "stat":0,
         "ridx":0
      },
      {
         "name":"mexp",
         "type":9,
         "kysz":8,
         "sidx":0,
         "stat":0,
         "ridx":0
      }
   ],
   "parents":[
      {
         "name":"dummy_head",
         "stid":0
      }
   ],
   "children":[
      {
         "name":"myschema__stream1__a__b__g",
         "stid":2601729947950351671
      }
   ],
   "catr":[
      {
         "name":"m",
         "attr-type":9,
         "fnr":1,
         "iatr":[
            "b",
            "a"
         ]
      },
      {
         "name":"mexp",
         "attr-type":9,
         "fnr":1,
         "iatr":[
            "g",
            "h"
         ]
      }
   ],
   "gpby":[
      {
         "gpby-attr":"g",
         "gpby-attr-type":11,
         "gran":600,
         "swsz":86400,
         "gpat":[
            "a",
            "b"
         ]
      }
   ],
   "refr-to":[
      {
         "name":"myschema__stream2",
         "stid":5641729835205121944
      }
   ],
   "refr-by":[
      
   ],
   "fltr":[
      
   ],
   "joins":[
      
   ],
   "refr":[
      {
         "refr-name":"myrefr1",
         "refr-type":0,
         "joins-with":"myschema__stream2",
         "iatr":[
            "c",
            "b"
         ],
         "ratr":[
            "b",
            "p1"
         ]
      }
   ],
   "cepq":[
      
   ],
   "enty":[
      
   ],
   "name":"myschema__stream1",
   "type":1
}`}
                />
                <p>
                  You may also run the above command with{" "}
                  <code>&quot;pretty&quot;</code> qualifier.
                </p>
                <p>To register notification</p>
                <p>
                  This is to create notification template which could be used to
                  send notifications when certain event happens. For example
                  when CEP query is satisfied, when filter is made, when join
                  has happened etc.
                </p>
                <p>
                  Notification creation also create a sub-workflow which is
                  intuitive enough to be able to create the notifications.
                </p>
                <HighlightedOutput
                  code={`add notification details:

notification name: notif1
notification id: 1234
enter notification msg: This is a sample notification
frequency in seconds (minimum num of seconds to wait before sending same notification): 60
priority of the notification [1, 2 or 3] (1 is highest): 1

enter the schema name for which this notification may be used?: myschema
enter mail ids [whom notificaions will be sent to] (press enter to break):sachin@bangdb.com
enter mail ids [whom notificaions will be sent to] (press enter to break):admin@bangdb.com
enter mail ids [whom notificaions will be sent to] (press enter to break):
enter API end points [whom notificaions will be sent to] (press enter to break):http://192.168.1.3:10101/account
enter API end points [whom notificaions will be sent to] (press enter to break):`}
                />
                <HighlightedCpp
                  code={`{
   "schemaid":4766750373947953813,
   "endpoints":[
      "http://192.168.1.3:10101/account"
   ],
   "mailto":[
      "sachin@bangdb.com",
      "admin@bangdb.com"
   ],
   "freq":60,
   "pri":1,
   "name":"notif1",
   "notifid":1234,
   "msg":"This is a sample notification"
}`}
                />
                <HighlightedOutput
                  code={`notification registered successfully`}
                />
                <p>To de-register notification</p>
                <HighlightedCpp code={`deregister notification 1234`} />
                <p>To select the list of registered notifications</p>
                <HighlightedCpp
                  code={`select * from reg_notif scanning for pk range [null : null] and query = null`}
                />
                <HighlightedOutput
                  code={`+--------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| key    | val                                                                                                                                                                                                                                      |
+--------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|1234    | {"name":"notif1","notifid":1234,"msg":"This is a sample notification","freq":60,"pri":1, | | | "schemaid":4766750373947953813,"mailto":["sachin@bangdb.com","admin@bangdb.com"], | | | "endpoints":["http://192.168.1.3:10101/account"]} | 
+--------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ 
total rows retrieved = 1 (1)`}
                />
                <h3>stats or aggr data selection</h3>
                <p>
                  While creating the schema we add &quot;stat&quot; : 1 for attr
                  &quot;a&quot; and &quot;stat&quot;:2 for attr &quot;b&quot;.
                  stat : 1 is for count, 2 is for unique count and 3 for all
                  stats.
                </p>
                <HighlightedCpp
                  code={`select aggr(a) from myschema.stream1 the query json is = {"proc-type":6,"attrs":["a"],"rollup":1,"from_ts":1,"to_ts":9223372036854775807}`}
                />
                <HighlightedOutput
                  code={`
+------+------------------------------------------------------------+
|key   |val                                                         |
+------+------------------------------------------------------------+
|1     |{"fromts":1,"tots":9223372036854775807,"aggr_val":{"cnt":1}}| 
+------+------------------------------------------------------------+
total rows retrieved = 1 (1)`}
                />
                <h3>
                  Plot - we can plot the data in a chart on the terminal or save
                  it on a disk
                </h3>
                <p>
                  We can plot data by adding <code>&quot;plot&quot;</code>{" "}
                  command at the end of the query along with optional values.
                </p>
                <p>The syntax for plot is as follows:</p>
                <HighlightedCpp
                  code={`plot {"title":"mychart","term":1,"saveto":"file1.png","type":"line","just_plot":1,"attrs":["cnt","min","max"]}`}
                />
                <aside className="doc-note">
                  <strong>Note: </strong>The json after plot command is optional
                  as are the details within it. For example: If you don&apos;t
                  wish to save the image then avoid &quot;saveto&quot; key etc.
                </aside>
                <aside className="doc-api-code">
                  <p>
                    <strong>title</strong> : title of the chart term: whether to
                    print the chart in the terminal or in a window (pop up)?
                  </p>
                  <p>
                    <strong>saveto</strong> : if you wish to save the chart as
                    png file on the disk.
                  </p>
                  <p>
                    <strong>type</strong> : line | hist | point just_plot: this
                    will not print the data, just the plot (useful when the data
                    is large).
                  </p>
                  <p>
                    <strong>attrs</strong> : typically stats will have count
                    (cnt), min, max, avg, stdd, skew, kurt etc to print.
                  </p>
                </aside>
                <HighlightedCpp
                  code={`select aggr(a) from myschema.stream1 plot {"type":"line"} the query json is = {"proc-type":6,"attrs":["a"],"rollup":1,"from_ts":1,"to_ts":9223372036854775807}`}
                />
                <HighlightedOutput
                  code={`the time range has not been selected, hence limiting the num of data points to 1000 and just_plot =1 
Warning: empty y range [0:0], adjusting to [-1:1]`}
                />
                <HighlightedCpp code={`bangdb_plot aggr 1`} />
                <HighlightedOutput
                  code={`+--------------------------------------------------------------------+ 
| + + + + + + + + + | 
| | 
| | 
0.5 |-+ +-| 
| | 
| | 
| |
| | 
0 |-+ *********************************************************** +-| 
| | 
| | 
| | 
-0.5 |-+ +-| 
| | 
| |
| | 
| + + + + + + + + + | 
-1 +--------------------------------------------------------------------+ 
12:00 14:00 16:00 18:00 20:00 22:00 24:00 26:00 28:00 30:00 32:00 
total rows retrieved = 1000 (1000)
more data to come, continue .... [y/n]:`}
                />
                <p>There are more commands here which are self explanatory.</p>
              </div>
            </article>
          </div>
        </main>
      </section>
    </React.Fragment>
  );
}
