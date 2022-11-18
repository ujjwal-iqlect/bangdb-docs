import Head from "next/head";
import React from "react";

export default function deployBangdbHelmChart() {
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Using the helm chart - BangDB</title>
        <meta
          name="description"
          content="There are 2 methods to deploy BangDB on openshift - Learn more about deploying BangDB on an Openshift using the helm chart."
        />
      </Head>
    </div>
  );
}
