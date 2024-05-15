'use client'

import { createContext, useContext, useState } from "react";

import { LOADING_DEFAULT_VALUE } from "./loadingContext.consts";
import { ILoadingContext, ILoadingProviderProps, LoadingInterface } from "./loadingContext.types";

import styles from './loadingcontext.module.css';

export const LoadingContext = createContext<ILoadingContext>(LOADING_DEFAULT_VALUE);

export const LoadingProvider = ({ children }: ILoadingProviderProps): JSX.Element => {
  const [isLoading, setIsLoading] = useState<LoadingInterface>({ status: false })

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}

      {isLoading.status && (
        <div className={styles.loading}>
          {isLoading?.message ? isLoading.message : 'Carregando...'}
        </div>
      )}
    </LoadingContext.Provider>
  );
}

export const useLoading = (): ILoadingContext => {
  return useContext(LoadingContext);
};
