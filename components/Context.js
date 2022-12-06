import { useContext, createContext } from "react";

export const Context = createContext(null);
export const useCustomContext = () => {
  const context = useContext(Context);
  if (!context)
    throw new Error("useCustomContext should be inside a Context Provider");
  return context;
};
