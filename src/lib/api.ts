import axios from "axios";
// import {AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";


export const api = axios.create({
  baseURL: "http://sajjad.me/api",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("@Auth:access_token");
    if (token) {
      config.headers = {
         Authorization: `Bearer ${token}`,
        // Authorization:token,
        Accept: "application/json",
        // Authorization: `${token}`,
      };
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
