import axios from 'axios';
import { SERVER_URL, STORAGE_KEY_ACCESS_TOKEN } from '../config/constants';

const setupToken = (config) => {
  const accessToken = localStorage.getItem(STORAGE_KEY_ACCESS_TOKEN);
  if (!accessToken) {
    return config;
  }
  return {
    ...config,
    headers: {
      ...config?.headers,
      Authorization: `Bearer ${accessToken}`,
    },
  };
};

/** @type {import('axios').AxiosStatic} */
const backend = {
  async get(url, config) {
    return axios.get(SERVER_URL + url, setupToken(config));
  },
  post(url, data, config) {
    return axios.post(SERVER_URL + url, data, setupToken(config));
  },
};

export default backend;
