export interface ILoadingProviderProps {
  children: React.ReactNode;
}

export interface LoadingInterface {
  status: boolean;
  message?: string;
}

export interface ILoadingContext {
  // estados
  isLoading: LoadingInterface;

  // ações
  setIsLoading: React.Dispatch<React.SetStateAction<LoadingInterface>>;
}