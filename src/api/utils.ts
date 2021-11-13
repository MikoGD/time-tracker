import { AxiosMessageData } from './types';

export const sendMessage = <T>(messageData: AxiosMessageData<T>, worker?: unknown): void => {
  if (worker) {
    (worker as Worker).postMessage(messageData);
  } else {
    postMessage(messageData);
  }
};
