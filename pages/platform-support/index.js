import Head from "next/head";
import React from "react";

export default function platformSupport() {
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Supported Platforms - BangDB</title>
        <meta
          name="description"
          content="BangDB 2.0 core supported platforms are Windows (7+), MAC (10+) & Linux. However, BangDB Server and distributed can run only on linux"
        />
      </Head>
    </div>
  );
}
