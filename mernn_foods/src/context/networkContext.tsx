import { dataServer } from "@/services/interceptor";
import {
  consumeLastFailedRequest,
  registerNetworkTrigger,
} from "@/services/networkBridge";
import { createContext, useContext, useEffect, useState } from "react";

const NetworkContext = createContext({
  isNetworkError: false,
  retrying: false,
  setNetworkError: (value: boolean) => {},
  retry: () => {},
});

export const useNetwork = () => useContext(NetworkContext);

export default function NetworkProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isNetworkError, setNetworkError] = useState(false);
  const [retrying, setRetrying] = useState(false);

  const showNetworkError = (value: boolean) => setNetworkError(value);

  const retry = async () => {
    const request = consumeLastFailedRequest();
    if (!request) return;

    setRetrying(true);

    try {
      await dataServer(request);
      setNetworkError(false);
    } catch {
      // still offline → keep alert open
    } finally {
      setRetrying(false);
    }
  };

  useEffect(() => {
    registerNetworkTrigger(showNetworkError);
  }, []);

  return (
    <NetworkContext.Provider
      value={{ isNetworkError, retrying, setNetworkError, retry }}
    >
      {children}
    </NetworkContext.Provider>
  );
}
