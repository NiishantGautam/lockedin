import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { theme } from "@/theme";
import { useUserStore } from "@/store/useUserStore";
import { useAuth } from "@clerk/clerk-expo";

export default function Onboarding() {
  const router = useRouter();
  const { isSignedIn } = useAuth();
  const toggleHasOnboarded = useUserStore((state) => state.toggleHasOnboarded);

  const handleGetStarted = () => {
    toggleHasOnboarded();
    if (isSignedIn) {
      router.replace("/(tabs)/home");
    } else {
      router.replace("/(auth)/sign-in");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to LockedIn</Text>
      <Text style={styles.subtitle}>
        Your personal space for staying organized
      </Text>

      <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: theme.colors.primary,
    marginBottom: 16,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    color: theme.colors.gray,
    textAlign: "center",
    marginBottom: 48,
  },
  button: {
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 12,
  },
  buttonText: {
    color: theme.colors.white,
    fontSize: 18,
    fontWeight: "bold",
  },
});