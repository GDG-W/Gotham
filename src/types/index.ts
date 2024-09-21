// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type UnknownObjectType = Record<string, any>;

export interface apiRequestParams {
  onError?: (err: string) => void;
  onSuccess?: (res: UnknownObjectType) => void;
}

export interface IDpObj {
  name: string;
  hook: string;
  picture: string;
}
