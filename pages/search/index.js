import { useRouter } from "next/router";
import React from "react";
import { SearchData } from "../../components/SearchData";
import Link from "next/link";

export default function Search() {
  const router = useRouter();
  const { q } = router.query;
  const FilteredData = [];

  {
    SearchData.filter((item) => {
      if (
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q)
      ) {
        FilteredData.push(item);
      }
    });
  }

  return (
    <>
      <main className="bangdb-search">
        <div className="search-results-stats">
          <span>
            Showing {FilteredData.length}{" "}
            {FilteredData.length > 1 ? "results" : "result"} for &quot;{q}&quot;
          </span>
        </div>
        <div className="search-results-wrapper">
          {FilteredData.map((item, index) => {
            return (
              <div className="search-result">
                <Link href={item.path}>
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
