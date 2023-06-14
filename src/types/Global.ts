export type UnprocessableEntityErrorType = {
  message: string;
  errors: {
    [key: string]: string[];
  };
};

export type GenericCallableType<T> = {
  isLoading?: boolean;
} & T;
