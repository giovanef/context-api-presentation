'use client'

import { createContext, useContext, useState } from "react";

import { ILoadingContext, ILoadingStorageProps, LoadingInterface } from "./loadingContext.types";

import styles from './loadingcontext.module.css';

const defaultValue = {
  isLoading: {status: false},
  setIsLoading: () => null,
};

export const LoadingContext = createContext<ILoadingContext>(defaultValue);

export const LoadingStorage = ({ children }: ILoadingStorageProps): JSX.Element => {
  const [isLoading, setIsLoading] = useState<LoadingInterface>({ status: false })

  const contextValue = {
    isLoading,
    setIsLoading
  }

  return (
    <LoadingContext.Provider value={contextValue}>
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
