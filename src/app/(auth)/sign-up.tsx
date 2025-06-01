import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useSignUp } from "@clerk/clerk-expo";
import { theme } from "@/theme";

export default function SignUp() {
  const { signUp, isLoading } = useSignUp();

  const handleSignUpWithEmail = async () => {
    try {
      await signUp.create({
        emailAddress: "user@example.com",
        password: "password",
      });
    } catch (err) {
      console.error("Error signing up:", err);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <TouchableOpacity 
        style={styles.button} 
        onPress={handleSignUpWithEmail}
        disabled={isLoading}
      >
        <Text style={styles.buttonText}>
          {isLoading ? "Creating account..." : "Sign up with Email"}
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