// import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
// import { useFonts } from 'expo-font';
// import { Stack } from 'expo-router';
// import * as SplashScreen from 'expo-splash-screen';
// import { StatusBar } from 'expo-status-bar';
// import { useEffect, useState } from 'react';
// import 'react-native-reanimated';

// import { useColorScheme } from '@/hooks/useColorScheme';

// // Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();

// export default function RootLayout() {
//   const colorScheme = useColorScheme();
//   const [auth, setAuth] = useState(false)
//   const [loaded] = useFonts({
//     SpaceMono: require('@/assets/fonts/SpaceMono-Regular.ttf'),
//   });

//   useEffect(() => {
//     if (true) {
//       SplashScreen.hideAsync();
//     }
//   }, [loaded]);

//   if (!loaded) {
//     return null;
//   }

//   return (
//     <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
//       <Stack>
        
//         <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//         <Stack.Screen name="sign-in" options={{ headerShown: false }} />
//         <Stack.Screen name="+not-found" />
//       </Stack>
//       <StatusBar style="auto" />
//     </ThemeProvider>
//   );
// }
import { Slot } from 'expo-router';
import { SessionProvider } from '@/context/ctx';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useEffect } from 'react';


export default function Root() {
  // Set up the auth context and render our layout inside of it.
  // useEffect(()=> {
  //   GoogleSignin.configure({
  //     // webClientId: '<FROM DEVELOPER CONSOLE>', // client ID of type WEB for your server. Required to get the `idToken` on the user object, and for offline access.
  //     scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
  //     // offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
  //     hostedDomain: '', // specifies a hosted domain restriction
  //     forceCodeForRefreshToken: false, // [Android] related to `serverAuthCode`, read the docs link below *.
  //     accountName: '', // [Android] specifies an account name on the device that should be used
  //     // iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
  //     googleServicePlistPath: '', // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. "GoogleService-Info-Staging"
  //     openIdRealm: '', // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
  //     profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
  //   });

  // }, [])
  return (
    <SessionProvider>
      <Slot />
    </SessionProvider>
  );
}
