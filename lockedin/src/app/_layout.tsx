import React, { useEffect } from "react";
import { Stack, useRouter } from "expo-router";
import { useUserStore } from "@/store/useUserStore";

export default function Layout() {
  const router = useRouter();
  const hasFinishedOnboarding = useUserStore(
    (state) => state.hasFinishedOnboarding,
  );

  useEffect(() => {
    if (hasFinishedOnboarding) {
      router.replace("/(tabs)/home");
    }
  }, [hasFinishedOnboarding]);

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: "fade",
      }}
    >
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="index" />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
