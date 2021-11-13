import { v4 as uuid } from 'uuid';
/* eslint-disable */
// @ts-ignore
import Worker from 'worker-loader?filename=axios.worker.js!./axios.worker';
/* eslint-enable */
import { AxiosMessageData, MESSAGE_TYPE, RequestPromise, REQUEST_TYPE } from './types';
import { sendMessage } from './utils';

const worker = new Worker();

const requests = new Map<string, RequestPromise<unknown>>();

export const sendRequest = <T, K extends unknown>(resource: string, type: REQUEST_TYPE, payload?: T): Promise<K> => {
  const id = uuid();
  const message = { meta: { type: MESSAGE_TYPE.REQUEST, id }, request: { resource, requestType: type, payload } };

  return new Promise<any>((resolve, reject) => {
    requests.set(id, { resolve, reject });
    sendMessage(message, worker);
  });
};

const handleSuccessResponse = (messageData: AxiosMessageData<unknown>) => {
  const {
    meta: { id },
    request: { response, error },
  } = messageData;

  const { resolve, reject } = requests.get(id) ?? { resolve: null };

  if (resolve && !error) {
    resolve(response);
  } else if (reject && error) {
    reject(error);
  }
};

onmessage = (event: MessageEvent<AxiosMessageData<any>>) => {
  console.log(event);
  const {
    meta: { type },
  } = event.data;

  switch (type) {
    case MESSAGE_TYPE.RESPONSE:
      handleSuccessResponse(event.data);
      break;
    default:
      console.error(`axios manager - unhandled type: ${type}`);
  }
};
