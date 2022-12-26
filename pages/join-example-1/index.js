import React from "react";
import Head from "next/head";
import Breadcrumb from "../../components/Breadcrumb";
import HighlightedCpp from "../../components/HighlightedCpp";

export default function JoinExampleOne() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Join Example 1 - BangDB</title>
        <meta
          name="description"
          content="Join Example 1 - Temperature, Pressure and Vibration streams, Joining and Finding simple pattern. Let's look at an example of IOT scenario."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Join Example 1 - BangDB" />
        <meta
          property="og:description"
          content="Join Example 1 - Temperature, Pressure and Vibration streams, Joining and Finding simple pattern. Let's look at an example of IOT scenario."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="Join Example 1 - BangDB" />
        <meta
          name="twitter:description"
          content="Join Example 1 - Temperature, Pressure and Vibration streams, Joining and Finding simple pattern. Let's look at an example of IOT scenario."
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
              <h1 className="article-title">Join - Example 1</h1>
              <div className="article-body">
                <h2>
                  Temperature, Pressure and Vibration streams joining and
                  finding simple pattern
                </h2>
                <p>
                  Let&apos;s take example of IOT scenario. There are three
                  sensors for temperature, pressure and vibration. We wish to
                  join these streams such that for each point we get all these
                  three values as they arrive and in the end we would like to
                  notify when temperature, pressure and vibration all satisfy
                  some condition, here when (temp &gt; 71.1 and pressure &gt;
                  11.1 and vibration &gt; 35).
                </p>
                <aside className="doc-note">
                  <strong>Note: </strong>This condition is applied on the
                  temp_pressure_vibration stream, stream which has finally all
                  the three data points. A schematic diagram for the stream join
                  is provided below for clarity.
                </aside>
                <p>
                  Joining of streams are happening on simple condition, i.e.
                  where s2.point = s2.point, this is done by
                </p>
                <HighlightedCpp
                  code={`"jqry":{"cond":["point"], "opid":11, "args":["point"]}`}
                />
                <aside className="doc-note">
                  <strong>Note: </strong>opid = 1 is for comparing attribute
                  value and implicit default &quot;comparison&quot; is
                  &quot;equal&quot;. To override for other comparison (line
                  greater than, less than equal to, etc.
                </aside>
                <p>
                  We can add{" "}
                  <code>&quot;cmp&quot;:[&quot;GT&quot;, &quot;LTE&quot;]</code>{" "}
                  in the jqry. The implicit is{" "}
                  <code>&quot;cmp&quot;:[&quot;EQ&quot;]</code>
                </p>
                <HighlightedCpp
                  code={`temperature stream +==> temp_pressure stream pressure stream + ===> temp_pressure_vibration
stream vibration stream`}
                />
                <h2>Example</h2>
                <p>
                  Here we will use join_type = 1, that&apos;s simple join, which
                  means both streams would actively join with each other, but
                  once joined they will not use the same event data for next
                  join.
                </p>
                <p>Let&apos;s define the sample stream first.</p>
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
               "type":1,
               "tloc":300,
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
               "type":1,
               "tloc":300,
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
         "name":"vibration_stream",
         "type":1,
         "inpt":[
            
         ],
         "attr":[
            {
               "name":"vibration",
               "type":9
            },
            {
               "name":"point",
               "type":9
            }
         ],
         "join":[
            {
               "name":"temp_pressure_vibration_join",
               "type":1,
               "tloc":300,
               "ratr":[
                  "temp",
                  "pressure",
                  "point"
               ],
               "rstm":"temp_pressure_stream",
               "iatr":[
                  "vibration"
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
               "ostm":"temp_pressure_vibration_stream"
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
         ],
         "join":[
            {
               "name":"temp_pressure_vibration_join",
               "type":1,
               "tloc":300,
               "iatr":[
                  "temp",
                  "pressure",
                  "point"
               ],
               "rstm":"vibration_stream",
               "ratr":[
                  "vibration"
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
               "ostm":"temp_pressure_vibration_stream"
            }
         ]
      },
      {
         "name":"temp_pressure_vibration_stream",
         "type":3,
         "inpt":[
            "temp_pressure_stream",
            "vibration_stream"
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
            },
            {
               "name":"vibration",
               "type":9
            }
         ],
         "cepq":[
            {
               "name":"temp_press_vib_cond",
               "type":6,
               "tloc":86400,
               "fqry":{
                  "name":"{\"query\":[{\"key\":\"temp\", \"cmp_op\":0, \"val\":71.1},{\"joinop\":0},{\"key\":\"pressure\", \"cmp_op\":0, \"val\":11.0},{\"joinop\":0},{\"key\":\"vibration\", \"cmp_op\":0, \"val\":35}]}",
                  "type":1
               },
               "notf":12345
            }
         ]
      }
   ],
   "notifs":[
      {
         "notifid":12345,
         "name":"notif1",
         "msg":"users msg",
         "rule":"notification rule/condition",
         "pri":1,
         "mailto":[
            
         ],
         "endpoints":[
            "http://192.168.1.49:10102/iot"
         ],
         "schemaid":1234,
         "notif_streamid":4321,
         "notif_stream_name":"sdf",
         "freq":1,
         "tags":[
            "a"
         ],
         "rel_streams":[
            "s1"
         ]
      }
   ]
}`}
                />
                <p>
                  Three streams, they each measure temp, pressure and vibration
                  for the point p. temp_stream and pressure_stream are joining
                  with each other to send data to temp_pressure_stream. Further,
                  vibration_stream and temp_pressure_stream are joining together
                  to send data to temp_pressure_vibration_stream.
                </p>
                <p>
                  The join condition for all of these streams are s1.point =
                  s2.point, i.e. join on point. Finally, from the
                  temp_pressure_vibration_stream notification is sent when temp
                  greater than 71.1 AND pressure greater than 11.0 AND vibration
                  is greater than 35.
                </p>
                <aside className="doc-note">
                  <strong>Note: </strong>&quot;type&quot; in each join is set to
                  1, which denotes simple join.
                </aside>{" "}
                <p>Now, let&apos;s push some data in following order:</p>
                <HighlightedCpp
                  code={`put [ temp_stream ] : {"temp":70.1, "point":1}
put [ pressure_stream ] : {"pressure":10.2, "point":1}
put [ pressure_stream ] : {"pressure":11.1, "point":1}
put [ vibration_stream ] : {"vibration":30, "point":1} 
put [ pressure_stream ] : {"pressure":11.5, "point":1}
put [ vibration_stream ] : {"vibration":40, "point":1}
put [ pressure_stream ] : {"pressure":11.8, "point":1}
put [ temp_stream ] : {"temp":71.1, "point":1}
put [ vibration_stream ] : {"vibration":50, "point":1}
put [ temp_stream ] : {"temp":71.2, "point":1}
put [ vibration_stream ] : {"vibration":60, "point":1}`}
                />
                <p>
                  Now let&apos;s scan and see data from different streams. Here
                  are the data in temp stream:
                </p>
                <HighlightedCpp
                  code={`{
   "temp":70.10000000000001,
   "point":1,
   "_pk":1584944534256620,
   "_v":1
}
{
   "temp":71.10000000000001,
   "point":1,
   "_pk":1584944534362863,
   "_v":1
}
{
   "temp":71.2,
   "point":1,
   "_pk":1584944534396958,
   "_v":1
}`}
                />
                <p>Here are the data in pressure stream:</p>
                <HighlightedCpp
                  code={`{
   "pressure":10.2,
   "point":1,
   "_pk":1584944534266887,
   "_v":1
}
{
   "pressure":11.1,
   "point":1,
   "_pk":1584944534280460,
   "_v":1
}
{
   "pressure":11.5,
   "point":1,
   "_pk":1584944534308709,
   "_v":1
}
{
   "pressure":11.8,
   "point":1,
   "_pk":1584944534332148,
   "_v":1
}`}
                />
                <p>Here is the data in vibration stream:</p>
                <HighlightedCpp
                  code={`{
   "vibration":30,
   "point":1,
   "_pk":1584944534296090,
   "_v":1
}
{
   "vibration":40,
   "point":1,
   "_pk":1584944534320131,
   "_v":1
}
{
   "vibration":50,
   "point":1,
   "_pk":1584944534384031,
   "_v":1
}
{
   "vibration":60,
   "point":1,
   "_pk":1584944534397786,
   "_v":1
}`}
                />
                <p>Here are the data in temp_pressure stream:</p>
                <HighlightedCpp
                  code={`{
   "pressure":10.2,
   "_pk":1584944534266887,
   "temp":70.10000000000001,
   "point":1,
   "_jpk1":1584944534256620,
   "_v":1
}
{
   "temp":71.10000000000001,
   "point":1,
   "_pk":1584944534362863,
   "pressure":11.1,
   "_jpk1":1584944534280460,
   "_v":1
}
{
   "temp":71.2,
   "point":1,
   "_pk":1584944534396958,
   "pressure":11.5,
   "_jpk1":1584944534308709,
   "_v":1
}`}
                />
                <p>Here are the data in temp_pressure_vibration stream:</p>
                <HighlightedCpp
                  code={`{
   "vibration":30,
   "_pk":1584944534296090,
   "temp":70.10000000000001,
   "pressure":10.2,
   "point":1,
   "_jpk1":1584944534266887,
   "_v":1
}
{
   "temp":71.10000000000001,
   "pressure":11.1,
   "point":1,
   "_pk":1584944534362863,
   "vibration":40,
   "_jpk1":1584944534320131,
   "_v":1
}
{
   "temp":71.2,
   "pressure":11.5,
   "point":1,
   "_pk":1584944534396958,
   "vibration":50,
   "_jpk1":1584944534384031,
   "_v":1
}`}
                />
                <p>
                  Finally there is notification sent out from the following
                  joined stream:
                </p>
                <HighlightedCpp
                  code={`{
   "notifid":12345,
   "name":"notif1",
   "msg":"users msg",
   "rule":"notification rule/condition",
   "pri":1,
   "mailto":[
      
   ],
   "endpoints":[
      "http://192.168.1.49:10102/iot"
   ],
   "schemaid":1234,
   "notif_streamid":4321,
   "notif_stream_name":"sdf",
   "freq":1,
   "tags":[
      "a"
   ],
   "rel_streams":[
      "s1"
   ],
   "count":1,
   "dur":0,
   "notif_event":{
      "temp":71.2,
      "pressure":11.5,
      "point":1,
      "_pk":1584944534396958,
      "vibration":50,
      "_jpk1":1584944534384031,
      "_v":1
   },
   "count":1,
   "count_this_notif":1,
   "dur":0
}`}
                />
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
