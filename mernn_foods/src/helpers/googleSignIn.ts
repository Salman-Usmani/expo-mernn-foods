// googleSignin.ts
import {
  GoogleSignin,
  statusCodes,
} from "@react-native-google-signin/google-signin";

export function configureGoogleSignin() {
  GoogleSignin.configure({
    webClientId: process.env.EXPO_PUBLIC_WEB_CLIENT_ID || "",
    offlineAccess: true,
  });
}

export async function signInWithGoogle() {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    return userInfo;
  } catch (error: any) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) return null;
    throw error;
  }
}

export async function checkIfSignedIn() {
  const user = GoogleSignin.getCurrentUser();
  return user; // null if not signed in
}

export async function signOutGoogle() {
  await GoogleSignin.signOut();
}
