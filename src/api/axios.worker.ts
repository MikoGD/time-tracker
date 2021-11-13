import axios from 'axios';
import { AxiosMessageData, MESSAGE_TYPE, REQUEST_TYPE } from './types';
import { sendMessage } from './utils';

const instance = axios.create({
  baseURL: 'http://192.168.1.32:8090/v1/',
});

const handleGetRequest = async (id: string, resource: string) => {
  try {
    console.log(resource);
    const response = await instance.get(resource);
    console.log(response);

    sendMessage({ request: { response, requestType: REQUEST_TYPE.GET }, meta: { id, type: MESSAGE_TYPE.RESPONSE } });
  } catch (error) {
    /* eslint-disable */
    // @ts-ignore
    console.log(Object.assign({}, error));
    /* eslint-enable */
  }
};

const handleRequest = (messageData: AxiosMessageData<unknown>) => {
  const {
    request: { requestType, resource },
    meta: { id },
  } = messageData;

  switch (requestType) {
    case REQUEST_TYPE.GET:
      if (resource) {
        handleGetRequest(id, resource);
      }
      break;
    default:
      console.error(`unhandled request type in axios.worker: ${requestType}`);
  }
};

onmessage = (event: MessageEvent<AxiosMessageData<unknown>>) => {
  const {
    meta: { type },
  } = event.data;

  switch (type) {
    case MESSAGE_TYPE.REQUEST:
      handleRequest(event.data);
      break;
    default:
      console.error(`unhandled type in axios.worker: ${type}`);
  }
};
