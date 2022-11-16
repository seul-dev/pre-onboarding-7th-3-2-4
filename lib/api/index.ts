import axios from "axios";
import { getToken } from "../util/tokenStorage";

export const api = axios.create({
  baseURL: "/api",
  timeout: 3000
});

api.interceptors.request.use(
  (config) => {
    const token = getToken();

    if (token) {
      config.headers = { ...config.headers, Authorizations: `Bearer ${token}` };
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
