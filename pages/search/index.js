import { useRouter } from "next/router";
import React from "react";
import { SearchData } from "../../components/SearchData";
import Link from "next/link";

export default function Search() {
  const router = useRouter();
  const { q } = router.query;
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

  return (
    <>
      <main className="bangdb-search">
        <div className="search-results-stats">
          <span>
            Showing {FilteredData.length}{" "}
            {FilteredData.length > 1 ? "results" : "result"} for &quot;{q}
            &quot;
          </span>
        </div>
        <div className="search-results-wrapper">
          {FilteredData.map((item, index) => {
            return (
              <div className="search-result" key={index}>
                <Link href={item.path + url_params}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
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
