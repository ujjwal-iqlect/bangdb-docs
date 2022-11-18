import Head from "next/head";
import React from "react";

export default function benchmark() {
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>BangDB Benchmark</title>
        <meta
          name="description"
          content="Goal of BangDB benchmark is to find out the throughput of db where we put data and the get them using multiple connections."
        />
      </Head>
      <div className="article-body">
        <h1>Done</h1>
      </div>
    </div>
  );
}
