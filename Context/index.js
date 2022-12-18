import React, { createContext, useContext } from "react";
// import Reducer from "./Reducer";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  return <AppContext.Provider value="">{children}</AppContext.Provider>;
};

// gloabal custom hook
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
