import { AxiosRequestConfig } from "axios";

let lastFailedRequest: AxiosRequestConfig | null = null;
let trigger: ((value: boolean) => void) | null = null;

export const registerNetworkTrigger = (fn: (value: boolean) => void) => {
  trigger = fn;
};

export const showNetworkErrorGlobal = (value: boolean) => {
  trigger?.(value);
};

export const handleNetworkFailure = (config?: AxiosRequestConfig) => {
  if (config) {
    lastFailedRequest = {
      ...config,
      headers: { ...config.headers },
    };
  }
  showNetworkErrorGlobal(true);
};
export const consumeLastFailedRequest = () => {
  const request = lastFailedRequest;
  lastFailedRequest = null;
  return request;
};
