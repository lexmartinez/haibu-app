import {API_BASE_URL} from '@env';
import axios from 'axios';
console.log(new Date(), 'a', API_BASE_URL)
const instance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const authHeaders = (token: string, headers: any = {}) => ({
  ...headers,
  Authorization: `Bearer ${token}`,
});

export default {
  get: async (url: string, token?: string, headers?: any) => {
    return await instance.get(url, {
      headers: token ? authHeaders(token, headers) : {},
    });
  },
  delete: async (url: string, token?: string, headers?: any) => {
    return await instance.delete(url, {
      headers: token ? authHeaders(token, headers) : {},
    });
  },
  post: async (url: string, body: any, token?: string, headers?: any) => {
    return await instance.post(url, body, {
      headers: token ? authHeaders(token, headers) : {},
    });
  },
  put: async (url: string, body: any, token?: string, headers?: any) => {
    return await instance.post(url, body, {
      headers: token ? authHeaders(token, headers) : {},
    });
  },
  patch: async (url: string, body: any, token?: string, headers?: any) => {
    return await instance.post(url, body, {
      headers: token ? authHeaders(token, headers) : {},
    });
  },
  authHeaders,
};
