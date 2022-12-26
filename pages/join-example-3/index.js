import React from "react";
import Head from "next/head";
import Breadcrumb from "../../components/Breadcrumb";
import HighlightedCpp from "../../components/HighlightedCpp";

export default function JoinExampleThree() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Join Example 3 - BangDB</title>
        <meta
          name="description"
          content="Join Example 3 - Temperature, Pressure and Vibration streams, Joining in active-passive mode. Let's look at an example of IOT scenario."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Join Example 3 - BangDB" />
        <meta
          property="og:description"
          content="Join Example 3 - Temperature, Pressure and Vibration streams, Joining in active-passive mode. Let's look at an example of IOT scenario."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="Join Example 3 - BangDB" />
        <meta
          name="twitter:description"
          content="Join Example 3 - Temperature, Pressure and Vibration streams, Joining in active-passive mode. Let's look at an example of IOT scenario."
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
              <h1 className="article-title">Join - Example 3</h1>
              <div className="article-body">
                <h2>
                  Temperature and Pressure STREAMS Joining in Active-Passive
                  Mode [ 2 and 4 mode ]
                </h2>
                <h2>Example</h2>
                <p>Same as previous problem, let&apos;s see the output.</p>
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
               "type":9
            }
         ],
         "join":[
            {
               "name":"temp_pressure_join",
               "type":2,
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
               "type":4,
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
                <p>Here is the output:</p>
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
                <p>Here is the data in the temp stream:</p>
                <HighlightedCpp
                  code={`{
   "temp":70.10000000000001,
   "point":1,
   "_pk":1584946101515817,
   "_v":1
}
{
   "temp":71.10000000000001,
   "point":2,
   "_pk":1584946101611668,
   "_v":1
}
{
   "temp":71.2,
   "point":1,
   "_pk":1584946101674582,
   "_v":1
}`}
                />
                <p>Here is the data in the pressure stream:</p>
                <HighlightedCpp
                  code={` {
   "pressure":10.2,
   "point":2,
   "_pk":1584946101526004,
   "_v":1
}
{
   "pressure":11.1,
   "point":1,
   "_pk":1584946101540463,
   "_v":1
}
{
   "pressure":11.5,
   "point":1,
   "_pk":1584946101562172,
   "_v":1
}
{
   "pressure":11.8,
   "point":1,
   "_pk":1584946101579064,
   "_v":1
}
{
   "pressure":11.9,
   "point":1,
   "_pk":1584946101632106,
   "_v":1
}
{
   "pressure":12.1,
   "point":2,
   "_pk":1584946101643448,
   "_v":1
}
{
   "pressure":12.5,
   "point":1,
   "_pk":1584946101705836,
   "_v":1
}`}
                />
                <p></p>
                <HighlightedCpp
                  code={`----------scan for stream [ pressure_stream : 836447675855282773 ] 
fetched = 7;`}
                />
                <HighlightedCpp
                  code={`{
   "pressure":11.1,
   "_pk":1584946101540463,
   "temp":70.10000000000001,
   "point":1,
   "_jpk1":1584946101515817,
   "_v":1
}
{
   "pressure":11.5,
   "_pk":1584946101562172,
   "temp":70.10000000000001,
   "point":1,
   "_jpk1":1584946101515817,
   "_v":1
}
{
   "pressure":11.8,
   "_pk":1584946101579064,
   "temp":70.10000000000001,
   "point":1,
   "_jpk1":1584946101515817,
   "_v":1
}
{
   "pressure":12.1,
   "_pk":1584946101643448,
   "temp":71.10000000000001,
   "point":2,
   "_jpk1":1584946101611668,
   "_v":1
}
{
   "pressure":12.5,
   "_pk":1584946101705836,
   "temp":71.2,
   "point":1,
   "_jpk1":1584946101674582,
   "_v":1
}`}
                />
                <p></p>
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
