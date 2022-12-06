import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";
import Codebox from "../../../components/Codebox";
import HighlightedOutput from "../../../components/HighlightedOutput";

export default function GetTheServerStats() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Get the server stats - BangDB REST API</title>
        <meta
          name="description"
          content="Get the Server Stats on which BangDB server is running. It returns basic statistics of the machine and the database process."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Get the server stats - BangDB REST API"
        />
        <meta
          property="og:description"
          content="Get the Server Stats on which BangDB server is running. It returns basic statistics of the machine and the database process."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="Get the server stats - BangDB REST API"
        />
        <meta
          name="twitter:description"
          content="Get the Server Stats on which BangDB server is running. It returns basic statistics of the machine and the database process."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">Get the server stats</h1>
        <div className="article-body">
          <p>
            Get the Server Stats on which BangDB server is running. It returns
            basic statistics of the machine and the database process.
          </p>
          <p>
            <strong>Method</strong> : GET
          </p>
          <p>
            <strong>URI</strong> : /server/stat
          </p>
          <p>Example</p>
          <Codebox
            code={`curl -X GET http://192.168.1.105:18080/server/stat`}
          />
          <p>Response</p>
          <HighlightedOutput
            code={String.raw`{
   "server":{
      "node_name":"bangdb",
      "version":"#146~16.04.1-Ubuntu SMP Tue Apr 13 09:27:15 UTC 2021",
      "release":"4.15.0-142-generic",
      "machine_arch":"x86_64",
      "system":"\"Ubuntu 16.04.7 LTS\"\n",
      "ram_mb":15831,
      "num_cpu":12,
      "listen_tcp_sock":10,
      "established_tcp_sock":7,
      "avg_user_cpu":3.07,
      "avg_sys_cpu":0.5600000000000001,
      "avg_iowait_cpu":0.16,
      "avg_idle_cpu":95.68000000000001,
      "num_open_files":105314,
      "num_disk":2,
      "total_disk_space_GB":1024,
      "used_disk_space":"6%\n"
   },
   "bangdb_process":{
      "pid":26717,
      "bangdb_ip_port":"NULL",
      "vm":8886,
      "maxrss_mb":148,
      "user_time_sec":56,
      "sys_time_sec":0,
      "page_reclaims":34187,
      "page_fault_IO":1,
      "block_input":0,
      "block_output":4304,
      "context_switch_vol":1695,
      "context_switch_forced":255
   }
}`}
          />
          <p>Database related query starts with {`/db/<dbname>`}.</p>
        </div>
      </DocArticle>
    </React.Fragment>
  );
}

export async function getStaticProps(context) {
  return {
    props: { restApiSidebar: true },
  };
}
