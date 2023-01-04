import React, { createContext, useContext, useState } from "react";
// import Reducer from "./Reducer";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  // const [sidebar, setSidebar] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [query, setQuery] = useState("");
  const [filterQuery, setFilterQuery] = useState("");

  return (
    <AppContext.Provider
      value={{
        sidebar,
        setSidebar,
        query,
        setQuery,
        filterQuery,
        setFilterQuery,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// global custom hook
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
