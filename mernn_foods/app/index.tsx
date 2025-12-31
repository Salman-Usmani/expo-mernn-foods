import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSession } from '@/context/ctx';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Stack } from 'expo-router';

const index = () => {
    const { session } = useSession();
    const colorScheme = useColorScheme();

    console.log('session', session)
    return (
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            {/* <Text style={{fontSize: 160}}>slo</Text> */}
            <Stack>
                {/* {session ?

                    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                    :

                    } */}
                    <Stack.Screen name="sign-in" options={{ headerShown: false }} />
                <Stack.Screen name="+not-found" />
            </Stack>
            {/* <StatusBar style="auto" /> */}
        </ThemeProvider>
    )
}

export default index

const styles = StyleSheet.create({})