import { router } from 'expo-router';
import { Text, View } from 'react-native';

import { useSession } from '@/context/ctx';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';



export default function SignIn() {
  const { signIn, isLoading } = useSession();
  console.log('first')
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <GoogleSigninButton size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        disabled={isLoading}
         onPress={signIn} />
      {/* <Text
        onPress={() => {
          signIn();
          // Navigate after signing in. You may want to tweak this to ensure sign-in is
          // successful before navigating.
          router.replace('/');
        }}>
        Sign In
      </Text> */}
    </View>
  );
}
