import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{
        headerTitle: 'Sticker Smash',
        title: 'Home'
      }}/>
      <Stack.Screen name="about" options={{
        headerTitle: 'About',
        title: 'About'
      }}/>
       <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
