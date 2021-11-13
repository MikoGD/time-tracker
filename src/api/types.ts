import { AxiosResponse } from 'axios';

export type Resolve<T> = (value: T) => void;

export enum REQUEST_TYPE {
  GET = 'get',
  PUT = 'put',
  POST = 'post',
  DELETE = 'delete',
}

export enum MESSAGE_TYPE {
  REQUEST = 'request',
  RESPONSE = 'response',
}

interface Request<T extends unknown> {
  requestType?: REQUEST_TYPE;
  resource?: string;
  payload?: T;
  response?: AxiosResponse;
  error?: string;
}

interface WorkerMeta {
  type: MESSAGE_TYPE;
  id: string;
}

export interface AxiosMessageData<T> {
  request: Request<T>;
  meta: WorkerMeta;
}

export interface RequestPromise<T extends unknown> {
  resolve: Resolve<T>;
  reject: (reason?: string) => void;
}
