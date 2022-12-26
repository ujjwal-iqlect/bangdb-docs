import React from "react";
import Head from "next/head";
import Breadcrumb from "../../components/Breadcrumb";
import HighlightedCpp from "../../components/HighlightedCpp";

export default function JoinExampleTwo() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Join Example 2 - BangDB</title>
        <meta
          name="description"
          content="Join Example 2 - Two streams, namely temp and pressure will join with each other using active, passive rule (3, 5) where pressure stream..."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Join Example 2 - BangDB" />
        <meta
          property="og:description"
          content="Join Example 2 - Two streams, namely temp and pressure will join with each other using active, passive rule (3, 5) where pressure stream..."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="Join Example 2 - BangDB" />
        <meta
          name="twitter:description"
          content="Join Example 2 - Two streams, namely temp and pressure will join with each other using active, passive rule (3, 5) where pressure stream..."
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
              <h1 className="article-title">Join - Example 2</h1>
              <div className="article-body">
                <h2>
                  Temperature and Pressure streams joining with active -passive
                  [ 3 and 5 option for active -passive ]
                </h2>
                <h2>Example</h2>
                <p>
                  Again same IOT scenario, but we will limit to two streams for
                  clarity. These two streams, namely temp and pressure will join
                  with each other using active, passive rule (3, 5) where
                  pressure stream is active stream and temp is passive one.
                </p>
                <p>Let&apos;s define the schema first.</p>
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
               "type":5,
               "kysz":48,
               "sidx":1,
               "stat":1
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
               "type":5,
               "kysz":48,
               "sidx":1,
               "stat":1
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
               "type":5,
               "kysz":48,
               "sidx":1,
               "stat":1
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
                <p>Now pump data:</p>
                <HighlightedCpp
                  code={`put [ temp_stream ] : {"temp":70.1, "point":1}
put [ pressure_stream ] : {"pressure":10.2, "point":2}
put [ pressure_stream ] : {"pressure":11.1, "point":1}
put [ pressure_stream ] : {"pressure":11.5, "point":1}
put [ pressure_stream ] : {"pressure":11.8, "point":1}
put [ temp_stream ] : {"temp":71.1, "point":2}
put [ pressure_stream ] : {"pressure":11.9, "point":1}
put [ pressure_stream ] : {"pressure":12.1, "point":2}
put [ temp_stream ] : {"temp":71.2, "point":1}
put [ pressure_stream ] : {"pressure":12.5, "point":1}`}
                />
                <p>Here is the data for temp stream:</p>
                <HighlightedCpp
                  code={`{
   "temp":70.10000000000001,
   "point":1,
   "_pk":1584945351349346,
   "_v":1
}
{
   "temp":71.10000000000001,
   "point":2,
   "_pk":1584945351429690,
   "_v":1
}
{
   "temp":71.2,
   "point":1,
   "_pk":1584945351491986,
   "_v":1
}`}
                />
                <p>Here is the data for pressure stream:</p>
                <HighlightedCpp
                  code={`{
   "pressure":10.2,
   "point":2,
   "_pk":1584945351359800,
   "_v":1
}
{
   "pressure":11.1,
   "point":1,
   "_pk":1584945351372994,
   "_v":1
}
{
   "pressure":11.5,
   "point":1,
   "_pk":1584945351388063,
   "_v":1
}
{
   "pressure":11.8,
   "point":1,
   "_pk":1584945351399370,
   "_v":1
}
{
   "pressure":11.9,
   "point":1,
   "_pk":1584945351450466,
   "_v":1
}
{
   "pressure":12.1,
   "point":2,
   "_pk":1584945351461066,
   "_v":1
}
{
   "pressure":12.5,
   "point":1,
   "_pk":1584945351523036,
   "_v":1
}`}
                />
                <p>Here is the data for joined temp_pressure stream:</p>
                <p></p>
                <HighlightedCpp code={``} />

                <p>Here is the data in vibration stream:</p>
                <HighlightedCpp
                  code={`{
   "pressure":11.1,
   "_pk":1584945351372994,
   "temp":70.10000000000001,
   "point":1,
   "_jpk1":1584945351349346,
   "_v":1
}
{
   "pressure":11.5,
   "_pk":1584945351388063,
   "temp":70.10000000000001,
   "point":1,
   "_jpk1":1584945351349346,
   "_v":1
}
{
   "pressure":11.8,
   "_pk":1584945351399370,
   "temp":70.10000000000001,
   "point":1,
   "_jpk1":1584945351349346,
   "_v":1
}
{
   "pressure":11.9,
   "_pk":1584945351450466,
   "temp":70.10000000000001,
   "point":1,
   "_jpk1":1584945351349346,
   "_v":1
}
{
   "pressure":12.1,
   "_pk":1584945351461066,
   "temp":71.10000000000001,
   "point":2,
   "_jpk1":1584945351429690,
   "_v":1
}
{
   "pressure":12.5,
   "_pk":1584945351523036,
   "temp":71.2,
   "point":1,
   "_jpk1":1584945351491986,
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
