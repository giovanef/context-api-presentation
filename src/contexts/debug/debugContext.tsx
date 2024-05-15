'use client'

import { createContext, useContext } from "react";

import { IDebugContext, IDebugStorageProps } from "./debuggContext.types";

export const DebugContext = createContext<IDebugContext>(false);

export const DebugStorage = ({ children }: IDebugStorageProps): JSX.Element => {
  return (
    <DebugContext.Provider value={true}>
      {children}
    </DebugContext.Provider>
  );
}

export const useDebug = (): IDebugContext => {
  return useContext(DebugContext);
};
