import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../../components/Breadcrumb";
import DocArticle from "../../../../components/DocArticle";

export default function IVMscenario() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Scenario - IOT vehicle monitoring use case</title>
        <meta
          name="description"
          content="Scenario of IOT vehicle monitoring use case - In this demo, we'll stream data for many cars into system, each car sending one event per sec or more."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Scenario - IOT vehicle monitoring use case"
        />
        <meta
          property="og:description"
          content="Scenario of IOT vehicle monitoring use case - In this demo, we'll stream data for many cars into system, each car sending one event per sec or more."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="Scenario - IOT vehicle monitoring use case"
        />
        <meta
          name="twitter:description"
          content="Scenario of IOT vehicle monitoring use case - In this demo, we'll stream data for many cars into system, each car sending one event per sec or more."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">Scenario</h1>
        <div className="article-body">
          <p>
            Today&apos;s vehicle has lots of sensors generating lots of
            different data which if captured could be used for vehicle
            monitoring, predictive analytics, finding anomalies and taking
            corrective actions as needed either locally, remotely or in
            self-healing manner.
          </p>
          <aside className="doc-api-code">
            <p>
              <strong>The various data points (sensors) are as follows:</strong>
            </p>
            <p>time</p>
            <p>car</p>
            <p>coolant_temp</p>
            <p>intake_air_temp</p>
            <p>intake_air_flow_speed</p>
            <p>battery_percentage</p>
            <p>battery_voltage</p>
            <p>current_draw</p>
            <p>speed</p>
            <p>engine_vibration_amplitude</p>
            <p>throttle_pos</p>
            <p>tire_pressure_1_1</p>
            <p>tire_pressure_1_2</p>
            <p>tire_pressure_2_1</p>
            <p>tire_pressure_2_2</p>
            <p>accelerometer_1_1_value</p>
            <p>accelerometer_1_2_value</p>
            <p>accelerometer_2_1_value</p>
            <p>accelerometer_2_2_value</p>
            <p>control_unit_firmware</p>
          </aside>
          <p>
            In this demo, we will stream data for many cars into the system,
            each car sending one event per sec or more. We will use BangDB agent
            to stream the data into BangDB, and use streaming analysis for these
            events with 1 day as sliding window length (continuous window).
          </p>
          <p>
            Further we will use BangDB ML abstractions to train two models, one
            using existing file and other on data which have been streamed into
            the database. These models will help us find certain anomalies for
            further action.
          </p>
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
