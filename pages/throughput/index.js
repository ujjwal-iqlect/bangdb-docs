import Head from "next/head";
import React from "react";

export default function throughput() {
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Throughput for 1B operations - BangDB</title>
        <meta
          name="description"
          content="Throughput for 1B operations - We notice that the average throughput of the server was around 250K ops/sec."
        />
      </Head>
    </div>
  );
}
