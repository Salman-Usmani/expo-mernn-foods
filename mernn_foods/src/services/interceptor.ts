import axios, {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { router } from "expo-router";
import { getAccessToken, setAccessToken } from "@/storage";
import { handleNetworkFailure } from "./networkBridge";

const BASE_URL = process.env.EXPO_PUBLIC_BASE_URL;

const dataServer: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
});

dataServer.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

dataServer.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    console.log("error", error);
    console.log("error.message", error.message);

    if (error?.response) {
      console.log("error.response", error.response.data);
      const status = error.response.status;

      if (status === 401) {
        setAccessToken(null);
        // router.replace("/auth/login");
      }
    } else {
      console.log("Network error:", error.message);
      handleNetworkFailure(error.config);
    }
    return Promise.reject(error);
  }
);

export { dataServer };
