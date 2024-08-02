import { useRouter } from "next/router";
import React, { useState } from "react";
import { SearchData } from "../../components/SearchData";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function Search() {
  const router = useRouter();
  const { q } = router.query;

  const [data, setData] = useState([]);

  const FilteredData = SearchData.filter(
    (item) =>
      item.title.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q)
  ).sort(
    (a, b) =>
      b.title.toLowerCase().startsWith(q.toLowerCase()) -
      a.title.toLowerCase().startsWith(q.toLowerCase())
  );

  const url_params =
    Object.keys(router.query)?.length > 0
      ? "?" + new URLSearchParams(router.query)?.toString()
      : "";

  const fetch_data = useQuery({
    queryKey: ["fetch_data", q],
    queryFn: async () => {
      const res = await axios.get(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.NEXT_PUBLIC_GOOGLE_CUSTOM_SEARCH_API_KEY}&cx=${process.env.NEXT_PUBLIC_GOOGLE_CUSTOM_SEARCH_ENGINE_ID}&q=${q}`
      );

      if (res?.data?.items?.length > 0) {
        setData(res?.data?.items);
      }
    },
    enabled: Boolean(q),
  });

  return (
    <>
      <main className="bangdb-search">
        <div className="search-results-stats">
          <span>
            Showing {data.length} {data.length > 1 ? "results" : "result"} for
            &quot;{q}
            &quot;
          </span>
        </div>
        <div className="search-results-wrapper">
          {data?.map((item, index) => {
            return (
              <div className="search-result" key={index}>
                <Link href={item?.formattedUrl + url_params}>
                  <h3>{item?.title}</h3>
                  <p>{item?.snippet}</p>
                </Link>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  return {
    props: { noSidebar: true },
  };
}
