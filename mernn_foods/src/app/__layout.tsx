import { NetworkAlert } from "@/components/modals/NetworkModal";
import NetworkProvider, { useNetwork } from "@/context/networkContext";
import { configureGoogleSignin } from "@/helpers/googleSignIn";
import { Stack } from "expo-router";
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { KeyboardProvider } from "react-native-keyboard-controller";
import Toast from "react-native-toast-message";

function GlobalNetworkAlert() {
  const { isNetworkError, retrying, setNetworkError, retry } = useNetwork();

  return (
    <NetworkAlert
      visible={isNetworkError}
      onClose={setNetworkError}
      onRetry={retry}
      retrying={retrying}
    />
  );
}

export default function RootLayout() {
  useEffect(() => {
    // Initialize Google Sign-In configuration
    configureGoogleSignin();
  }, []);
  return (
    <GestureHandlerRootView>
      <NetworkProvider>
        <KeyboardProvider>
          <Stack screenOptions={{ headerShown: false }} />
          <Toast />
          <GlobalNetworkAlert />
        </KeyboardProvider>
      </NetworkProvider>
    </GestureHandlerRootView>
  );
}
