import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useSignIn } from "@clerk/clerk-expo";
import { theme } from "@/theme";

export default function SignIn() {
  const { signIn, isLoading } = useSignIn();

  const handleSignInWithEmail = async () => {
    try {
      await signIn.create({
        identifier: "user@example.com",
        password: "password",
      });
    } catch (err) {
      console.error("Error signing in:", err);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <TouchableOpacity 
        style={styles.button} 
        onPress={handleSignInWithEmail}
        disabled={isLoading}
      >
        <Text style={styles.buttonText}>
          {isLoading ? "Signing in..." : "Sign in with Email"}
        </Text>
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
    marginBottom: 32,
  },
  button: {
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 12,
    opacity: 1,
  },
  buttonText: {
    color: theme.colors.white,
    fontSize: 18,
    fontWeight: "bold",
  },
});