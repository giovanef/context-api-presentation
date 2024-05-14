export interface ILoadingStorageProps {
  children: React.ReactNode;
}

export interface LoadingInterface {
  status: boolean;
  message?: string;
}

export interface ILoadingContext {
  // estados do contexto
  isLoading: LoadingInterface;
  setIsLoading: React.Dispatch<React.SetStateAction<LoadingInterface>>;
}