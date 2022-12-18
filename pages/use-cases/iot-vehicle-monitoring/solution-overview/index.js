import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../../components/Breadcrumb";
import DocArticle from "../../../../components/DocArticle";

export default function IVMsolutionOverview() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Solution Overview - IOT vehicle monitoring use case</title>
        <meta
          name="description"
          content="Solution overview of IOT vehicle monitoring use case - Find anomaly for battery_voltage for any event. This we wish to do by projecting the battery_voltage basedon number..."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Solution Overview - IOT vehicle monitoring use case"
        />
        <meta
          property="og:description"
          content="Solution overview of IOT vehicle monitoring use case - Find anomaly for battery_voltage for any event. This we wish to do by projecting the battery_voltage basedon number..."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="Solution Overview - IOT vehicle monitoring use case"
        />
        <meta
          name="twitter:description"
          content="Solution overview of IOT vehicle monitoring use case - Find anomaly for battery_voltage for any event. This we wish to do by projecting the battery_voltage basedon number..."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">Solution Overview</h1>
        <div className="article-body">
          <p>We intend to do following here:</p>
          <ol>
            <li>
              Find anomaly for battery_voltage for any event. This we wish to do
              by projecting the <code>battery_voltage</code> based on number of
              past data (train a model for this), then finding the difference
              with the actual data. Then we wish to compute the running average
              of the this difference and when the difference is more than 10% in
              last 5 min then it&apos;s an anomaly. As you see, it&apos;s not
              just a simple computation but rather quite comprehensive.
            </li>
            <li>
              Train a model to predict the speed of the vehicle, note this is
              different from projection as done in previous case. Then follow
              the same steps as in (a) above to compute anomaly. In this case
              the model is trained using following attributes :
            </li>
            <aside className="doc-api-code">
              <p>coolant_temp,</p>
              <p>intake_air_temp,</p>
              <p>intake_air_flow_speed,</p>
              <p>battery_percentage,</p>
              <p>battery_voltage,</p>
              <p>current_draw,</p>
              <p>engine_vibration_amplitude,</p>
              <p>throttle_pos</p>
            </aside>
            <li>
              Find a pattern using CEP (complex event processing). The pattern
              is following:
            </li>
            <p>
              Speed of a car is more than 35 unit and is increasing
              continuously. And if we observe this for 3 consicutive times in
              last 1000 sec, then this is a pattern for us and we should keep
              finding this pattern continuously for all carsAll of these
              anomalies should be pushed to different streams for notifications
              or further analysis or action need to be taken as required.
            </p>
            <li>
              Compute running statistics for several attributes, like
              coolant_temp, battery_voltage, cuurent_draw, speed,
              emgine_vibration_amplitude etc.
            </li>
          </ol>
        </div>
      </DocArticle>
    </React.Fragment>
  );
}

export async function getServerSideProps(context) {
  return {
    props: { useCasesSidebar: true },
  };
}
