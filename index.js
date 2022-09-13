import { createContext, useContext } from "react";

export const AnyContext = createContext({});

export const useAny = () => useContext(AnyContext);
