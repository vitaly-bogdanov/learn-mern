import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import {HOST, PORT} from './constants';

const serverAction = async (
  conf: AxiosRequestConfig, 
  callbackSucces: Function, 
  callbackError: Function) : Promise<void> => {
  try {
    let response: AxiosResponse = await axios({
      ...conf,
      url: `${HOST}:${PORT}${conf.url}`,
    });
    callbackSucces(response);
  } catch (e) {
    callbackError(e);
  }
}

export default serverAction;