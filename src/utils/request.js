import axios from "axios";
import { serverURL } from "./common";
import { getToken } from "./util";

const instance = axios.create({
  baseURL: serverURL,
  timeout: 5000,
});

instance.interceptors.request.use(
  function(config) {
    if (getToken()) {
      config.headers.authorization = "Bearer " + getToken();
    }
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    return Promise.reject(error);
  }
);

// get请求
export const get = (url, params) => instance.get(url, { params: params });

// post请求
export const post = (url, data) => instance.post(url, data);
