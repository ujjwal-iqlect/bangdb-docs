import Head from "next/head";
import DevArticle from "../components/DevArticle";

export default function Home() {
  return (
    <div>
      <Head>
        <title>BangDB Overview</title>
        <meta
          name="description"
          content="Best NoSQL database in the industry"
        />
      </Head>
      <DevArticle />
    </div>
  );
}
