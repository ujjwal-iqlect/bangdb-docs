import React from "react";
import Head from "next/head";
import Image from "next/image";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";
import HighlightedJava from "../../../components/HighlightedJava";
import Link from "next/link";

export default function HGChartCreation() {
  return (
    <React.Fragment>
      <Head>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Chart creation - BangDB help guide</title>
        <meta
          name="description"
          content="In BangDB, we have the option to create charts for the dashboard from Stream and Graph. In this help guide we'll explore chart creation in detail."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Chart creation - BangDB help guide"
        />
        <meta
          property="og:description"
          content="In BangDB, we have the option to create charts for the dashboard from Stream and Graph. In this help guide we'll explore chart creation in detail."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="Chart creation - BangDB help guide"
        />
        <meta
          name="twitter:description"
          content="In BangDB, we have the option to create charts for the dashboard from Stream and Graph. In this help guide we'll explore chart creation in detail."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">Chart creation</h1>
        <div className="article-body">
          <p>
            In BangDB we have the option to create charts for the dashboard from
            2 sections: <strong>Stream</strong> & <strong>Graph</strong>. When
            we say chart creation, we are here referring to many visualization
            tools that allow us to create charts, cards, graphs, and many more,
            w.r.t. available Data. Now let&apos;s discuss both sections and see
            the steps and prerequisites we need to follow.
          </p>
          <h2>Using Stream Section</h2>
          <p>
            BanDB allows us to use all these visualization tools which are
            available in the Stream section.
          </p>
          <Image
            width="1249"
            height="72"
            src="https://bangdb.com/wp-content/uploads/2022/12/different-charts-available.png"
            alt="Different charts available"
          />
          <p>
            But before creating charts we need to follow some prerequisites:
          </p>
          <ol>
            <li>Schema creation</li>
            <li>Data pushing</li>
          </ol>
          <h3>Schema creation</h3>
          <p>
            For schema creation we are here attaching a sample schema so that
            anyone can use it.
          </p>
          <HighlightedJava
            code={`{
  "notifs": [],
  "schema": "Sales",
  "streams": [
    {
      "name": "Data",
      "inpt": [],
      "swsz": 86400,
      "type": 1,
      "attr": [
        {
          "name": "Country",
          "type": "STRING",
          "kysz": 40,
          "gran": 60,
          "stat": "UCOUNT"
        },
        {
          "name": "State",
          "type": "STRING",
          "kysz": 40,
          "gran": 60,
          "stat": "UCOUNT"
        },
        {
          "name": "City",
          "type": "STRING",
          "kysz": 40,
          "gran": 60,
          "stat": "UCOUNT"
        },
        {
          "name": "SalesAmount",
          "type": "DOUBLE",
          "gran": 60,
          "stat": "RSTAT"
        }
      ],
      "catr": [],
      "refr": [],
      "join": [],
      "fltr": [],
      "cepq": [],
      "gpby": [
        {
          "gpat": [
            "Country"
          ],
          "gran": 900,
          "kysz": 64,
          "swsz": 86400,
          "iatr": "SalesAmount",
          "stat": "RSTAT"
        },
        {
          "gpat": [
            "State"
          ],
          "gran": 900,
          "kysz": 64,
          "swsz": 86400,
          "iatr": "SalesAmount",
          "stat": "RSTAT"
        },
        {
          "gpat": [
            "City"
          ],
          "gran": 900,
          "kysz": 64,
          "swsz": 86400,
          "iatr": "SalesAmount",
          "stat": "RSTAT"
        },
        {
          "gpat": [
            "State",
            "City",
            "Country"
          ],
          "gran": 900,
          "kysz": 64,
          "swsz": 86400,
          "iatr": "SalesAmount",
          "stat": "RSTAT"
        }
      ],
      "enty": []
    }
  ],
  "udfs": []
}`}
          />
          <p>
            Copy the attached schema and save it as{" "}
            <strong>
              <em>.json</em>
            </strong>{" "}
            format in your system.
          </p>
          <aside className="doc-note">
            <strong>Note: </strong> If you see the 2nd line where we are
            defining our schema name as &quot;schema&quot;: &quot;Sales&quot;.
            In BangDB we can&apos;t create a schema under the same name. So if
            you try to create a new schema, just make sure that the name should
            be unique.
          </aside>
          <p>
            Click on Create or Edit schema under the Stream Processing section.
          </p>
          <Image
            width="1920"
            height="579"
            src="https://bangdb.com/wp-content/uploads/2022/12/create-or-edit-schema-using-ampere.png"
            alt="Create or edit schema using ampere"
          />
          <p>
            Click on File -&gt; Select File and pick your{" "}
            <strong>
              <em>.json</em>
            </strong>{" "}
            schema file. And click on the upload button in the bottom of the
            page. Now the schema has been uploaded successfully. You can check
            your schema in the Schema section and search the name Sales.
            &apos;Data&apos; is our Stream name.
          </p>
          <Image
            width="1920"
            height="585"
            src="https://bangdb.com/wp-content/uploads/2022/12/sales-schema-and-its-details.png"
            alt="Sales schema and it's details"
          />
          <h3>Data pushing</h3>
          <p>
            The schema part is now done. Now we have to push the data. BangDB
            allows us to push the data into streams in many ways, this time we
            will push data by uploading the data file.
          </p>
          <aside className="doc-note">
            <strong>Note: </strong>
            BangDB supports 4 types of data file formats: CSV, LOG, KV, JSON.
          </aside>
          <p>
            We are here attaching one dataset, you can download this dataset and
            follow below steps to push this data OR you are free to use any
            other dataset too.
          </p>
          <p>
            <strong>Dataset Link</strong>:{" "}
            <Link
              target="_blank"
              href="https://drive.google.com/file/d/1AcfvB8200A3ReKRWPWNQNv4-v-HwwFy2/view?usp=share_link"
              className="external"
            >
              https://drive.google.com/file/d/1AcfvB8200A3ReKRWPWNQNv4-v-HwwFy2/view?usp=share_link
            </Link>
          </p>
          <p>
            After searching for the schema in schema section, if you click on
            the streams, here you will be able to see your available streams as
            you defined in the schema. On the right side, you will get an option
            to upload the file.
          </p>
          <Image
            width="1920"
            height="585"
            src="https://bangdb.com/wp-content/uploads/2022/12/sales-schema-and-its-details.png"
            alt="Data pushing in Ampere - BangDB"
          />
          <p>If you click on the upload button, one pop-up will come up.</p>
          <p>Select Local-&gt;Select File-&gt;File type as CSV</p>
          <p>
            Select any bucket from the dropdown in the bucket section and Keep
            everything as default and click on Done.
          </p>
          <Image
            width="832"
            height="475"
            src="https://bangdb.com/wp-content/uploads/2022/12/upload-data-sales-schema-BangDB.png"
            alt="Upload data sales schema - BangDB"
          />
          <p>
            Now data pushing is done and it will be reflected automatically as
            285 records have been added. Now all the prerequisites are done, now
            we can create charts and make an appropriate dashboard.
          </p>
          <h3>Chart creation</h3>
          <p>Click on the visualization button under the stream section.</p>
          <ul>
            <li>
              <strong>Query Filter</strong>
            </li>
            <p>
              Here you can see the Query filter tab, if you click on the empty
              tab, BangDB will suggest the possible queries that we can use.
              Although you can write your own query too in the tab.
            </p>
            <li>
              <strong>Time Range</strong>
            </li>
            <p>
              We can show the data of past x-Minutes, x-Hours, x-Days, x-Weeks,
              x-Months. BangDB also gives us the liberty to show Full data or
              custom date ranges we can also use.
            </p>
            <li>
              <strong>Frequency</strong>
            </li>
            <p>
              How frequently we want our data to be updated for the chart. We
              can set frequency in seconds. Here 86400 is our seconds which
              actually means 1 Day.
            </p>
            <li>
              <strong>Metric</strong>
            </li>
            <p>
              BangDB gives us the feature to use all these matrices: count, sum,
              min, max, avg, skew, stddev, and kurtosis.
            </p>
            <li>
              <strong>Chart Colors</strong>
            </li>
            <p>We can select colors for our bars and charts.</p>
          </ul>
          <Image
            width="1920"
            height="894"
            src="https://bangdb.com/wp-content/uploads/2022/12/schema-visualize-group-by-country-BangDB.png"
            alt="Schema visualize group by country - BangDB"
          />
          <p>Here are some possible charts we can create for our dashboard.</p>
          <h2>Sales by Country</h2>
          <h3>Candle graph</h3>
          <p>
            We are here showing a candle graph which shows the Total Sum of
            Sales, specific to Countries.
          </p>
          <Image
            width="898"
            height="448"
            src="https://bangdb.com/wp-content/uploads/2022/12/candle-graph-sales-by-country-bangdb-ampere.png"
            alt="Candle graph - sales by country - BangDB Ampere"
          />
          <p>
            If you scroll down, you will see the options to set Y-axis n2ame,
            Chart Name, Dashboard Name, and Dashboard Description
          </p>
          <aside className="doc-note">
            <strong>Note: </strong> Dashboard Description is REQUIRED.
          </aside>
          <aside className="doc-note">
            <strong>Note: </strong> Chart name should be unique.
          </aside>
          <p>
            You can either select an already created dashboard or you can create
            a new one and click on Save chart.
          </p>
          <Image
            width="1486"
            height="211"
            src="https://bangdb.com/wp-content/uploads/2022/12/save-candle-graph-to-my-sales-dashboard-bangdb.png"
            alt="Save candle graph to my sales dashboard - Ampere"
          />
          <p>
            Now our chart is saved in our newly created dashboard:{" "}
            <strong>My Sales</strong>.
          </p>
          <p>
            In a similar way you can select any other charts too and add them to
            the dashboard.
          </p>
          <h3>Bar graph</h3>
          <p>
            It presents categorical data(Country) with rectangular bars with
            heights or lengths proportional to the values(Sum of Sales) that
            they represent.
          </p>
          <Image
            width="973"
            height="510"
            src="https://bangdb.com/wp-content/uploads/2022/12/bar-graph-sales-by-country-bangdb-ampere.png"
            alt="Bar graph - sales by country - BangDB Ampere"
          />
          <h3>Pie chart</h3>
          <p>
            It divided countries into circular statistical slices to illustrate
            the sum of sales proportion.
          </p>
          <Image
            width="964"
            height="505"
            src="https://bangdb.com/wp-content/uploads/2022/12/pie-chart-sales-by-country-bangdb-ampere.png"
            alt="Pie chart - sales by country - BangDB Ampere"
          />
          <h3>Donut chart</h3>
          <p>
            It divided countries into slices to illustrate the sum of sales
            proportion.
          </p>
          <Image
            width="1354"
            height="555"
            src="https://bangdb.com/wp-content/uploads/2022/12/donut-chart-sales-by-country-bangdb-ampere.png"
            alt="Donut graph - sales by country - BangDB Ampere"
          />
          <h3>Radar chart</h3>
          <p>It shows data as a 2-Dimensional graph.</p>
          <Image
            width="970"
            height="505"
            src="https://bangdb.com/wp-content/uploads/2022/12/radar-chart-sales-by-country-bangdb-ampere.png"
            alt="Radar graph - sales by country - BangDB Ampere"
          />
          <h3>Area graph</h3>
          <p>
            If our data has a DATE column then we can use some other types of
            graph too. To do that, please use the configurations mentioned in
            the image. If DATE is not available in the data, we can use the date
            which is added by BangDB itself based on when we pushed the data
            into the stream.
          </p>
          <ul>
            <li>
              You can refer below configurations to use Area and scatter graph.
            </li>
            <li>
              Area and scatter graphs are mainly helpful in time-series
              analysis.
            </li>
            <li>
              Here it is showing how Sales data is changing every day for all
              the countries.
            </li>
          </ul>
          <Image
            width="1057"
            height="501"
            src="https://bangdb.com/wp-content/uploads/2022/12/area-graph-config-sales-by-country-bangdb-ampere.png"
            alt="Area graph config - sales by country - BangDB Ampere"
          />
          <Image
            width="969"
            height="505"
            src="https://bangdb.com/wp-content/uploads/2022/12/area-graph-sales-by-country-bangdb-ampere.png"
            alt="Area graph - sales by country - BangDB Ampere"
          />
          <h3>Scatter chart</h3>
          <Image
            width="972"
            height="511"
            src="https://bangdb.com/wp-content/uploads/2022/12/scatter-chart-sales-by-country-bangdb-ampere.png"
            alt="Scatter graph - sales by country - BangDB Ampere"
          />
          <h2>Sales by State</h2>
          <h3>Candle graph</h3>
          <Image
            width="970"
            height="505"
            src="https://bangdb.com/wp-content/uploads/2022/12/candle-graph-sales-by-state-bangdb-ampere.png"
            alt="Candle graph - sales by state - BangDB Ampere"
          />
          <h3>Bar graph</h3>
          <Image
            width="972"
            height="511"
            src="https://bangdb.com/wp-content/uploads/2022/12/bar-graph-sales-by-state-bangdb-ampere.png"
            alt="Bar graph - sales by state - BangDB Ampere"
          />
          <h2>Sales by City</h2>
          <h3>Candle graph</h3>
          <Image
            width="970"
            height="507"
            src="https://bangdb.com/wp-content/uploads/2022/12/scatter-chart-sales-by-country-bangdb-ampere.png"
            alt="Candle graph - sales by city - BangDB Ampere"
          />
          <p>
            In a similar way we can use other suggested queries also. After
            saving all the charts, you can go to the dashboard and rearrange
            them as per the requirement.
          </p>
          <h2>Using Graph section</h2>
          <p>
            BanDB allows us to use all these visualization tools which are
            available in the Graph section.
          </p>
          <Image
            width="493"
            height="49"
            src="https://bangdb.com/wp-content/uploads/2022/12/chart-options-that-are-available-in-graph-section-bangdb-ampere.png"
            alt="Chart optiions available in graph section - BangDB Ampere"
          />
          <p>
            But before creating charts we need to follow some prerequisites:
          </p>
          <ol>
            <li>Schema creation</li>
            <li>Data pushing</li>
          </ol>
          <h3>Schema creation:</h3>
          <p>
            The schema that we used earlier for Stream will not be useful as no
            Nodes and no Relationships were formed. We are here attaching a new
            schema that anyone can use to run cypher queries and create charts
            accordingly.
          </p>
          <HighlightedJava
            code={`{
  "notifs": [],
  "schema": "Sales",
  "streams": [
    {
      "name": "Data",
      "inpt": [],
      "swsz": 86400,
      "type": 1,
      "attr": [
        {
          "name": "Country",
          "type": "STRING",
          "kysz": 40,
          "gran": 60,
          "stat": "UCOUNT"
        },
        {
          "name": "State",
          "type": "STRING",
          "kysz": 40,
          "gran": 60,
          "stat": "UCOUNT"
        },
        {
          "name": "City",
          "type": "STRING",
          "kysz": 40,
          "gran": 60,
          "stat": "UCOUNT"
        },
        {
          "name": "SalesAmount",
          "type": "DOUBLE",
          "gran": 60,
          "stat": "RSTAT"
        }
      ],
      "catr": [],
      "refr": [],
      "join": [],
      "fltr": [],
      "cepq": [],
      "gpby": [
        {
          "gpat": [
            "Country"
          ],
          "gran": 900,
          "kysz": 64,
          "swsz": 86400,
          "iatr": "SalesAmount",
          "stat": "RSTAT"
        },
        {
          "gpat": [
            "State"
          ],
          "gran": 900,
          "kysz": 64,
          "swsz": 86400,
          "iatr": "SalesAmount",
          "stat": "RSTAT"
        },
        {
          "gpat": [
            "City"
          ],
          "gran": 900,
          "kysz": 64,
          "swsz": 86400,
          "iatr": "SalesAmount",
          "stat": "RSTAT"
        },
        {
          "gpat": [
            "State",
            "City",
            "Country"
          ],
          "gran": 900,
          "kysz": 64,
          "swsz": 86400,
          "iatr": "SalesAmount",
          "stat": "RSTAT"
        }
      ],
      "enty": [],
      "node": [
        {
          "sub": "Country",
          "label": "Country",
          "props": [
            "SalesAmount"
          ],
          "updt": 0
        },
        {
          "sub": "State",
          "label": "State",
          "props": [
            "SalesAmount"
          ],
          "updt": 0
        },
        {
          "sub": "City",
          "label": "City",
          "props": [
            "SalesAmount"
          ],
          "updt": 0
        }
      ],
      "rels": [
        {
          "sub": "Country",
          "sub_label": "Country",
          "obj": "State",
          "obj_label": "State",
          "rel": "HAS",
          "sub_props": [
            "SalesAmount"
          ],
          "obj_props": [
            "SalesAmount"
          ],
          "rel_props": []
        },
        {
          "sub": "State",
          "sub_label": "State",
          "obj": "City",
          "obj_label": "City",
          "rel": "HAS",
          "sub_props": [
            "SalesAmount"
          ],
          "obj_props": [
            "SalesAmount"
          ],
          "rel_props": []
        },
        {
          "sub": "Country",
          "sub_label": "Country",
          "obj": "City",
          "obj_label": "City",
          "rel": "HAS",
          "sub_props": [
            "SalesAmount"
          ],
          "obj_props": [
            "SalesAmount"
          ],
          "rel_props": []
        }
      ]
    }
  ],
  "udfs": []
}`}
          />
          <p>
            You can use this schema and register it in a similar manner as we
            discussed earlier.
          </p>
          <h3>Data pushing:</h3>
          <p>Push the data as we discussed in the earlier steps.</p>
          <h3>Chart creation</h3>
          <p>
            In the graph section, we have to write queries first to make
            appropriate charts. These are some of the possible queries we can
            use to make charts.
          </p>
          <h4>Country-specific Sales Details:</h4>
          <HighlightedJava
            code={`S=>(@P Country:*);RETURN P.name AS Country, P.SalesAmount AS "Sales Amount" SORT_DESC "Sales Amount"`}
          />
          <h3>Table chart</h3>
          <Image
            width="1395"
            height="418"
            src="https://bangdb.com/wp-content/uploads/2022/12/table-chart-country-specific-details-Bangdb-Ampere.png"
            alt="Table chart - country specific sales - BangDB Ampere"
          />
          <h3>Bar chart</h3>
          <Image
            width="1396"
            height="619"
            src="https://bangdb.com/wp-content/uploads/2022/12/bar-chart-country-specific-details-Bangdb-Ampere.png"
            alt="Bar chart - country specific sales - BangDB Ampere"
          />
          <p>
            You can select X-axis and Y-axis from the dropdown. If you click on
            the three-horizontal lines, you can even change the color of bars
            inside.
          </p>
          <Image
            width="771"
            height="640"
            src="https://bangdb.com/wp-content/uploads/2022/12/different-color-options-that-are-available-for-bars-bangdb-ampere.png"
            alt="Different color options for bars - BangDB Ampere"
          />
          <p>
            If you scroll down, you can give the chart name and dashboard name
            as we did in the stream section.
          </p>
          <h3>Pie chart</h3>
          <Image
            width="1375"
            height="628"
            src="https://bangdb.com/wp-content/uploads/2022/12/pie-chart-country-specific-details-Bangdb-Ampere.png"
            alt="Pie chart - country specific sales - BangDB Ampere"
          />
          <h3>Donut chart</h3>
          <Image
            width="1378"
            height="601"
            src="https://bangdb.com/wp-content/uploads/2022/12/donut-chart-country-specific-details-Bangdb-Ampere.png"
            alt="Donut chart - country specific sales - BangDB Ampere"
          />
          <h3>Min/Max cards</h3>
          <Image
            width="1390"
            height="354"
            src="https://bangdb.com/wp-content/uploads/2022/12/min-max-card-country-specific-details-Bangdb-Ampere.png"
            alt="Min/Max card - country specific sales - BangDB Ampere"
          />
          <ul>
            <li>
              In MAX card: It shows the Top-5 countries where Sale is Highest
            </li>
            <li>
              In MIN card: It shows the Top-5 countries where Sale is Lowest
            </li>
          </ul>
          <h3>State-specific Sales Details</h3>
          <HighlightedJava
            code={`S=>(@P State:*);RETURN P.name AS State, P.SalesAmount AS "Sales Amount" SORT_DESC "Sales Amount"`}
          />
          <h3>Pie Chart</h3>
          <Image
            width="1390"
            height="643"
            src="https://bangdb.com/wp-content/uploads/2022/12/Pie-chart-state-specific-sales-BangDB-Ampere.png"
            alt="Pie chart - country specific sales - BangDB Ampere"
          />
          <h3>Bar Chart</h3>
          <Image
            width="1327"
            height="696"
            src="https://bangdb.com/wp-content/uploads/2022/12/Bar-chart-state-specific-sales-BangDB-Ampere.png"
            alt="Bar chart - country specific sales - BangDB Ampere"
          />
          <h3>Sales details of all the Cities in a specific Country</h3>
          <HighlightedJava
            code={`S=>(@P State:*);RETURN P.name AS State, P.SalesAmount AS "Sales Amount" SORT_DESC "Sales Amount"`}
          />
          <h3>Bar chart</h3>
          <Image
            width="1330"
            height="694"
            src="https://bangdb.com/wp-content/uploads/2022/12/Bar-chart-sales-details-of-all-cities-in-a-specific-country-BangDB-Ampere.png"
            alt="Bar chart - sales details of all cities in a specific country - BangDB Ampere"
          />
          <h3>Sales details of all the States in a specific Country</h3>
          <HighlightedJava
            code={`S{UNIQUE_IN_CONTEXT}=>(@C Country:{name = "##Country"})-[@ HAS]->(@P State:*);RETURN P.name AS State, P.SalesAmount AS "Sales Amount" SORT_DESC "Sales Amount"`}
          />
          <h3>Stack-Bar Chart</h3>
          <Image
            width="1324"
            height="681"
            src="https://bangdb.com/wp-content/uploads/2022/12/Stack-bar-chart-sales-details-of-all-states-in-a-specific-country-BangDB-Ampere.png"
            alt="Stack Bar chart - sales details of all states in a specific country - BangDB Ampere"
          />
          <p>
            In a similar way, we can make different queries and make charts as
            per the requirement.
          </p>
          <h2>Dashboard Section</h2>
          <p>BangDB gives us the feature to:</p>
          <ul>
            <li>Rename the dashboard.</li>
            <li>It also has a feature to create copies of the dashboard.</li>
          </ul>
          <p>By clicking on the 3 dots we can see all these options.</p>
          <Image
            width="547"
            height="289"
            src="https://bangdb.com/wp-content/uploads/2022/12/dashboard-options-features-BangDB-Ampere.png"
            alt="Dashboard options/features - BangDB Ampere"
          />
          <h3>Rename the dashboard title</h3>
          <p>Click on the edit button on the top right side of the page.</p>
          <Image
            width="1039"
            height="523"
            src="https://bangdb.com/wp-content/uploads/2022/12/Rename-the-dashboard-title-BangDB-Ampere.png"
            alt="Rename the dashboard title - BangDB Ampere"
          />
          <h3>Rename the chart</h3>
          <p>
            Click on the Chart name(e.g. Here chart name is &apos;Chart1&apos;)
            and you will be able to rename the chart name.
          </p>
          <Image
            width="616"
            height="670"
            src="https://bangdb.com/wp-content/uploads/2022/12/Rename-the-chart-in-a-dashboard-BangDB-Ampere.png"
            alt="Rename the chart in a dashboard - BangDB Ampere"
          />
          <h3>Chart Modifications and some more Information</h3>
          <p>
            If you click on the 3 dots on the top right side of the chart, one
            pop-up will appear. You will get the option to:
          </p>
          <ul>
            <li>Delete the chart</li>
            <li>
              Pin the chart: If you want to move the chart, first we have to
              Unpin it. After moving, we have to Pin in again so that it won't
              change it&apos;s position if page reloads happen.
            </li>
            <li>
              Save the chart: if we move/resize the chart or change the query of
              the definition of the chart then it&apos;s important to save the
              changes.
            </li>
            <li>Increase/Decrease the font size of the Chart Title.</li>
            <li>More Information: Advance modifications</li>
          </ul>
          <Image
            width="691"
            height="262"
            src="https://bangdb.com/wp-content/uploads/2022/12/Chart-modifications-and-other-options-BangDB-Ampere.png"
            alt="Chart modifications and other options in a dashboard - BangDB Ampere"
          />
          <p>
            If you click on more information, You will get options to make
            advance changes like:
          </p>
          <ul>
            <li>Query update</li>
            <li>Graph Name update</li>
            <li>Definition update</li>
          </ul>
          <p>You can make all the changes and see the result in real time.</p>
          <Image
            width="1041"
            height="312"
            src="https://bangdb.com/wp-content/uploads/2022/12/Edit-a-chart-in-a-dashboard-BangDB-Ampere.png"
            alt="Edit a chart in a dashboard - BangDB Ampere"
          />
          <h3>Other features:</h3>
          <ul>
            <li>BangDB allows us to see the chart in Full-screen mode.</li>
            <li>We can also download the chart in PNG format.</li>
          </ul>
          <h2>Final Dashboard Template:</h2>
          <Image
            width="793"
            height="862"
            src="https://bangdb.com/wp-content/uploads/2022/12/Final-dashboard-template-BangDB-Ampere.png"
            alt="Final dashboard template - BangDB Ampere"
          />
        </div>
      </DocArticle>
    </React.Fragment>
  );
}

export async function getServerSideProps(context) {
  return {
    props: { helpGuideSidebar: true },
  };
}
