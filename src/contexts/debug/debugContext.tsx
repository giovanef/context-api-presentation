'use client'

import { createContext, useContext } from "react";

import { IDebugContext, IDebugProviderProps } from "./debugContext.types";

export const DebugContext = createContext<IDebugContext>(false);

export const DebugProvider = ({ children }: IDebugProviderProps): JSX.Element => {
  return (
    <DebugContext.Provider value={true}>
      {children}
    </DebugContext.Provider>
  );
}

export const useDebug = (): IDebugContext => {
  return useContext(DebugContext);
};
