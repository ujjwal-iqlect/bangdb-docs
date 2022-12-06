import React, { useState } from "react";
import Head from "next/head";
import Sidebar from "../components/Sidebar";
import DevArticle from "../components/DevArticle";

export default function Home() {
  const [sidebar, setSidebar] = useState(false);

  return (
    <div>
      <Head>
        <title>BangDB Overview</title>
        <meta
          name="description"
          content="Best NoSQL database in the industry"
        />
      </Head>
      <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
      <DevArticle getit={sidebar} />
    </div>
  );
}

export async function getStaticProps(context) {
  return {
    props: { noSidebar: true },
  };
}
