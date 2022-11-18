import Head from "next/head";
import React from "react";
import Sidebar from "../../components/Sidebar";

export default function cloudPakForData() {
  return (
    <div>
      <Head>
        <title>BangDB on CPD IBM</title>
        <meta
          name="description"
          content="BangDB on CPD (cloud pak for data) IBM is integrated as co-sell partner under the Data Sources segment on the platform"
        />
      </Head>
      <Sidebar />
    </div>
  );
}
