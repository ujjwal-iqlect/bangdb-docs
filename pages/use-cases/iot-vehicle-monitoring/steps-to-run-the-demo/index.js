import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../../components/Breadcrumb";
import DocArticle from "../../../../components/DocArticle";
import Codebox from "../../../../components/Codebox";
import HighlightedOutput from "../../../../components/HighlightedOutput";
import HighlightedCpp from "../../../../components/HighlightedCpp";
import Link from "next/link";
import Image from "next/image";

export default function IVMstepsToRunTheDemo() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Steps to run the demo - IOT vehicle monitoring use case</title>
        <meta
          name="description"
          content="Learn about steps to run the iot vehicle monitoring demo. Steps include Installing BangDB, Registering Schema, Ingesting data and a lot more."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Steps to run the demo - IOT vehicle monitoring use case"
        />
        <meta
          property="og:description"
          content="Learn about steps to run the iot vehicle monitoring demo. Steps include Installing BangDB, Registering Schema, Ingesting data and a lot more."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="Steps to run the demo - IOT vehicle monitoring use case"
        />
        <meta
          name="twitter:description"
          content="Learn about steps to run the iot vehicle monitoring demo. Steps include Installing BangDB, Registering Schema, Ingesting data and a lot more."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">Steps to run the demo</h1>
        <div className="article-body">
          <h2>Install BangDB</h2>
          <p>There are many ways to do it:</p>
          <ul>
            <li>
              Checkout{" "}
              <Link href={"https://bangdb.com/download"}>download page</Link>.
            </li>
            <li>
              Or check{" "}
              <Link
                className="external"
                target={`_blank`}
                href={"https://github.com/sachin-sinha/BangDB/releases"}
              >
                releases
              </Link>{" "}
              at BangDB Github repo.
            </li>
            <li>
              You may checkout the{" "}
              <Link
                className="external"
                target={`_blank`}
                href={"https://github.com/sachin-sinha/BangDB"}
              >
                Github repo
              </Link>{" "}
              as well.
            </li>
          </ul>
          <p>Cd to the usecases/iot-car-sensor-analysis</p>
          <Codebox code={`cd usecases/iot_vehicle_monitoring`} />
          <p>After that, copy bangdb-server-2.0 into the server folder</p>
          <p>Run the server, agent and cli</p>
          <Codebox code={`cd server`} />
          <Codebox code={`./bangdb-server-2.0 -c hybrid -w 18080> cd ..`} />
          <Codebox code={`cd agent`} />
          <Codebox code={`./bangdb-agent-2.0> cd ..`} />
          <Codebox code={`cd cli`} />
          <Codebox code={`./bangdb-cli-2.0`} />
          <p>
            When you run the cli, you will get a command prompt like following:
          </p>
          <aside className="doc-note">
            <strong>Note: </strong>We will do most of the activities using the
            cli.
          </aside>
          <HighlightedOutput
            code={String.raw`server [ 127.0.0.1 : 10101 ] is master with repl = OFF

            __     _    _   _   ____   ___    ___
           |   \  / \  | \ | | | ___\ |   \  |   \
           |   / /   \ |  \| | | | __ |    | |   /
           |   \/ ___ \| | \ | | |__|||    | |   \
           |___/_/   \_|_| |_| |_____||___/  |___/
   
           command line tool for db+stream+ai+graph
   
please type 'help' to get more info, 'quit' or 'exit' to return`}
          />
          <h2>Register the schema</h2>
          <p>
            schema is a set of streams and processing/actions that could be
            done/taken as event arrives.
          </p>
          <p>To register the schema:</p>
          <Codebox code={`register schema car_sensor_schema.txt`} />
          <h2>Train battery_voltage_model</h2>
          <p>
            Command train model, initiates a workflow and cli will ask several
            questions and finally schedules the training, see below to get the
            details:
          </p>
          <Codebox code={`train model battery_voltage_model`} />
          <p>To register the schema:</p>
          <HighlightedOutput
            code={String.raw`what's the name of the schema for which you wish to train the model?: cars

do you wish to read earlier saved ml schema for editing/adding? [ yes |  no ]:


                BangDB supports following algorithm, pls select from these
                Classification (1) | Regression (2) | Lin-regression/Classification (3) | Kmeans (4) | Custom (5)
                | IE - ontology (6) | IE - NER (7) | IE - Sentiment (8) | IE - KB (9) | TS - Forecast (10)
                | DL - resnet (11) | DL - lenet (12) | DL - face detection (13) | DL - shape detection (14) | SL - object detection (15)

what's the algo would you like to use (or Enter for default (1)): 10
        do you wish to select details of algo and params for the forecast model training? [ yes |  no ]: yes

        For forecast, pls select algo from these
        Regression (2) | Lin-regression/Classification (3))

what's the algo would you like to use (or Enter for default (2)): 3


        available solver type for libliner
        L2R_LR, L2R_L2LOSS_SVC_DUAL, L2R_L2LOSS_SVC, L2R_L1LOSS_SVC_DUAL, MCSVM_CS,

1R_L2LOSS_SVC, L1R_LR, L2R_LR_DUAL, L2R_L2LOSS_SVR = 11, L2R_L2LOSS_SVR_DUAL, L2R_L1LOSS_SVR_DUAL



        tuning of params is only available for solver L2R_LR (0), L2R_L2LOSS_SVC (2) and L2R_L2LOSS_SVR (11)

solver type [ 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 11 | 12 | 13 ] (press enter for default (0)): 11

        enter C (or press enter for default):

        enter nr_weight (or press enter for default(1)):

        enter p, epslon_svr (or press enter for default(0.1)):

        enter bias (or press enter for default (0)):

        enter fold (or press enter for default (5)):

        what's the stopping criteria (or press enter for default (0.001)):

what's the format of the file [ CSV (1) | JSON (2) ] (or Enter for default (1)): 1

enter the time-stamp field name: time

enter the time-stamp field datatype [ string (5) | long (9) | double (11) ] (or Enter for default (9)): 9

what's the position of timestamp field in the csv (count starts with 0): 0

do you wish to use entity for groupby? [ yes |  no ]: yes

enter the entity (group by) field name: car

enter the entity (group by) field datatype [ string (5) | long (9) | double (11) ] (or Enter for default (9)): 9

what's the position of entity (group by) field in the csv (count starts with 0, enter -1 ignore): 1

enter the quantity field name: battery_voltage

what's the position of quantity field in the csv (count starts with 0): 6

do you wish to ignore grouping by entity? [ yes |  no ]:

what's the granularity [ day (1) | week (2) | month (3) | year (4) | no_rollup(5) ] for aggregation during rollup of quantity (default is day(1)): 5
what's the lag for data to be selected for prediction (default is 2)?: 5

what's the offset for data to be selected for prediction (default is 0)?: 0

do you wish to schedule for the training of the forecast model now? [ yes | no ]: yes`}
          />
          <p>You can check the status of model by typing</p>
          <Codebox code={`show models`} />
          <h2>Ingest the data (from train.txt file)</h2>
          <Codebox
            code={`cd ../mon
bash sendfile ../data/train.txt car.txt 100 1
cd ../cli`}
          />
          <p>
            The above command will simulate 100 cars sending data every second.
            Wait until it sends 7000 events.
          </p>
          <h2>Train model speed_pred_model</h2>
          <p>This will predict the speed of the car</p>
          <Codebox code={`train model speed_pred_model`} />
          <HighlightedOutput
            code={String.raw`do you wish to read earlier saved ml schema for editing/adding? [ yes |  no ]:


                BangDB supports following algorithm, pls select from these
                Classification (1) | Regression (2) | Lin-regression/Classification (3) | Kmeans (4) | Custom (5)
                | IE - ontology (6) | IE - NER (7) | IE - Sentiment (8) | IE - KB (9) | TS - Forecast (10)
                | DL - resnet (11) | DL - lenet (12) | DL - face detection (13) | DL - shape detection (14) | SL - object detection (15)

what's the algo would you like to use (or Enter for default (1)): 3


                available solver type for libliner
                L2R_LR, L2R_L2LOSS_SVC_DUAL, L2R_L2LOSS_SVC, L2R_L1LOSS_SVC_DUAL, MCSVM_CS,

1R_L2LOSS_SVC, L1R_LR, L2R_LR_DUAL, L2R_L2LOSS_SVR = 11, L2R_L2LOSS_SVR_DUAL, L2R_L1LOSS_SVR_DUAL



                tuning of params is only available for solver L2R_LR (0), L2R_L2LOSS_SVC (2) and L2R_L2LOSS_SVR (11)

        solver type [ 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 11 | 12 | 13 ] (press enter for default (0)): 11
        enter C (or press enter for default):
        enter nr_weight (or press enter for default(1)):
        enter p, epslon_svr (or press enter for default(0.1)):
        enter bias (or press enter for default (0)):
        enter fold (or press enter for default (5)):
        what's the stopping criteria (or press enter for default (0.001)):
what's the input (training data) source? [ local file (1) | file on BRS (2) | stream (3) ] (press enter for default (1)): 3
enter the name of the stream from which the data should be uploaded: sensor
enter the approx of the size of the file in MB(enter for default): 10
enter the duration is seconds upto which the data will be selected from the stream for training (enter for default 3600 sec):
what is the target index (to select the target attribute/val): 0
what's the training speed you wish to select [ Very fast (1) | fast (2) | medium (3) | slow (4) | very slow (5) ] (or Enter for default (1)): 3
what's the attribute type [ NUM (1) | STRING (2) | HYBRID (3) ] (press enter for default (1):`}
          />
          <HighlightedOutput
            code={`do you wish to scale the data? [ yes | no ]: no
do you wish to tune the params? [ yes | no ]: yes`}
          />
          <p>
            We need to do the mapping so it can be used on streams later. This
            means we need to provide attr name and its position in the training
            file.
          </p>
          <HighlightedOutput
            code={`attr name: speed
attr position: 0
do you wish to add more attributes? [ yes | no ]: yes
attr name: coolant_temp
attr position: 1
do you wish to add more attributes? [ yes | no ]: yes
attr name: intake_air_temp
attr position: 2
do you wish to add more attributes? [ yes | no ]: yes
attr name: intake_air_flow_speed
attr position: 3
do you wish to add more attributes? [ yes | no ]: yes
attr name: battery_percentage
attr position: 4
do you wish to add more attributes? [ yes | no ]: yes
attr name: battery_voltage
attr position: 5
do you wish to add more attributes? [ yes | no ]: yes
attr name: current_draw
attr position: 6
do you wish to add more attributes? [ yes | no ]: yes
attr name: engine_vibration_amplitude
attr position: 7
do you wish to add more attributes? [ yes | no ]: yes
attr name: throttle_pos
attr position: 8
do you wish to add more attributes? [ yes | no ]:
do you wish to add external udf to do some computations before the training? [ yes | no ]:
do you wish to start training now? [ yes | no ]: yes`}
          />
          <p>Ycan check the status of the model by typing</p>
          <Codebox code={`show models`} />
          <HighlightedOutput
            code={String.raw`+--------------------------+---------------------+----+------------+-----------+------------------------+------------------------+
|key                       |model name           |algo|train status|schema name|train start time        |train end time          |
+--------------------------+---------------------+----+------------+-----------+------------------------+------------------------+
|cars:speed_pred_model     |speed_pred_model     | LIN|passed      |cars       |Mon Dec 13 11:28:38 2022|Mon Dec 13 11:29:12 2022|
+--------------------------+---------------------+----+------------+-----------+------------------------+------------------------+
|cars:battery_voltage_model|battery_voltage_model| LIN|passed      |cars       |Mon Dec 13 11:15:26 2022|Mon Dec 13 11:15:59 2022|
+--------------------------+---------------------+----+------------+-----------+------------------------+------------------------+`}
          />
          <p>
            Now start ingesting data from other file, this time ingest slowly to
            see some results.
          </p>
          <Codebox
            code={`cd ../mon
bash sendfile ../data/test.txt car.txt 10 1
cd ../cli`}
          />
          <p>To see summary of events in different streams</p>
          <Codebox code={`select stream from cars`} />
          <p>To select data from sensors stream</p>
          <Codebox code={`select * from cars.sensor`} />
          <p>To see aggregated data for coolant_temp</p>
          <Codebox
            code={`select aggr(coolant_temp) from cars.sensor rollup 0`}
          />
          <p>You can also plot the data in the terminal</p>
          <HighlightedCpp
            code={`select * from cars.sensor where _pk > 1 plot {"type":"line","attrs":["speed","speed_pred"],"just_plot":1} limit 25`}
          />
          <Codebox code={`bangdb_plot scan`} />
          <Image
            src="https://bangdb.com/wp-content/uploads/2022/04/image-star.png"
            alt="bangdb plot scan"
            height={400}
            width={1115}
          />
          <HighlightedOutput
            code={`total rows retrieved = 25 (25)
more data to come, continue .... [y/n]: n`}
          />
          <aside className="doc-note">
            <strong>Note: </strong>As you see, the speed and predicted speed are
            close most of the time and so on …
          </aside>
          <h2>To similate the pattern</h2>
          <p>
            Insert following events (cut and paste on the cli prompt one by one)
          </p>
          <HighlightedCpp
            code={`insert into cars.sensor values null
 {
   "time":1567607187,
   "car":100,
   "coolant_temp":191.3604,
   "intake_air_temp":19.891075,
   "intake_air_flow_speed":9.86402,
   "battery_percentage":-18.83759,
   "battery_voltage":242.07639,
   "current_draw":15.151241,
   "speed":35.703476,
   "engine_vibration_amplitude":2570.3477,
   "throttle_pos":0.6609447000000001,
   "tire_pressure_1_1":22,
   "tire_pressure_1_2":34,
   "tire_pressure_2_1":31,
   "tire_pressure_2_2":33,
   "accelerometer_1_1_value":0.0812409499999999,
   "accelerometer_1_2_value":3.3291862,
   "accelerometer_2_1_value":3.0881116,
   "accelerometer_2_2_value":0.033119857,
   "control_unit_firmware":1000
}

insert into cars.sensor values null
 {
   "time":1567607187,
   "car":100,
   "coolant_temp":191.3604,
   "intake_air_temp":19.891075,
   "intake_air_flow_speed":9.86402,
   "battery_percentage":-18.83759,
   "battery_voltage":242.07639,
   "current_draw":15.151241,
   "speed":36.703476,
   "engine_vibration_amplitude":2570.3477,
   "throttle_pos":0.6609447000000001,
   "tire_pressure_1_1":22,
   "tire_pressure_1_2":34,
   "tire_pressure_2_1":31,
   "tire_pressure_2_2":33,
   "accelerometer_1_1_value":0.0812409499999999,
   "accelerometer_1_2_value":3.3291862,
   "accelerometer_2_1_value":3.0881116,
   "accelerometer_2_2_value":0.033119857,
   "control_unit_firmware":1000
}

insert into cars.sensor values null 
{
   "time":1567607187,
   "car":100,
   "coolant_temp":191.3604,
   "intake_air_temp":19.891075,
   "intake_air_flow_speed":9.86402,
   "battery_percentage":-18.83759,
   "battery_voltage":242.07639,
   "current_draw":15.151241,
   "speed":37.703476,
   "engine_vibration_amplitude":2570.3477,
   "throttle_pos":0.6609447000000001,
   "tire_pressure_1_1":22,
   "tire_pressure_1_2":34,
   "tire_pressure_2_1":31,
   "tire_pressure_2_2":33,
   "accelerometer_1_1_value":0.0812409499999999,
   "accelerometer_1_2_value":3.3291862,
   "accelerometer_2_1_value":3.0881116,
   "accelerometer_2_2_value":0.033119857,
   "control_unit_firmware":1000
}

insert into cars.sensor values null
 {
   "time":1567607187,
   "car":100,
   "coolant_temp":191.3604,
   "intake_air_temp":19.891075,
   "intake_air_flow_speed":9.86402,
   "battery_percentage":-18.83759,
   "battery_voltage":242.07639,
   "current_draw":15.151241,
   "speed":38.703476,
   "engine_vibration_amplitude":2570.3477,
   "throttle_pos":0.6609447000000001,
   "tire_pressure_1_1":22,
   "tire_pressure_1_2":34,
   "tire_pressure_2_1":31,
   "tire_pressure_2_2":33,
   "accelerometer_1_1_value":0.0812409499999999,
   "accelerometer_1_2_value":3.3291862,
   "accelerometer_2_1_value":3.0881116,
   "accelerometer_2_2_value":0.033119857,
   "control_unit_firmware":1000
}`}
          />
          <p>
            If you run “select stream from cars” you will see one event there in
            the cep output stream. Basically we simulated continulously
            increasing speed of a particular car for 3 times in 1000 sec window.
          </p>
          <h2>Useful Resources</h2>
          <ul>
            <li>
              Please go to{" "}
              <Link href={`https://bangdb.com/developer`}>
                https://bangdb.com/developer
              </Link>{" "}
              for more info on BangDB.
            </li>
            <li>
              Please subsribe to our{" "}
              <Link
                href={`https://www.youtube.com/@bangdb3553`}
                target={`_blank`}
                className="external"
              >
                YouTube channel
              </Link>{" "}
              for more videos on different real world use cases.
            </li>
            <li>
              Please follow us on twitter at{" "}
              <Link
                href={`https://twitter.com/iqlect`}
                target={`_blank`}
                className="external"
              >
                @iqlect
              </Link>
            </li>
          </ul>
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
