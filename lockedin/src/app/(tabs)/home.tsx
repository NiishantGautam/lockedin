import { View, Text, StyleSheet } from "react-native";
import { theme } from "@/theme";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Home!</Text>
      <Text style={styles.subtitle}>Your journey starts here</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: theme.colors.black,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: theme.colors.gray,
  },
});
