import React from "react";
import { useGlobalContext } from "../../Context";
import { useRouter } from "next/router";

export default function Searchbar({ placeholder }) {
  const { query, setQuery } = useGlobalContext();
  const router = useRouter();

  const submitHandler = (e) => {
    e.preventDefault();
    router.push(`/search?q=${query}`);
    setQuery("");
  };

  return (
    <>
      <div className="search-wrapper-wrapper">
        <div className="search-wrapper">
          <form onSubmit={submitHandler}>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value.toLowerCase())}
              placeholder={placeholder}
              className="s-input"
            />
            <span className="search-button"></span>
          </form>
        </div>
      </div>
    </>
  );
}
