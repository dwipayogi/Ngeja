import { View, Text, StyleSheet } from "react-native";
import { Redirect } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";

export default function RootPage() {
  const { isSignedIn } = useAuth();

  if (!isSignedIn) {
    return <Redirect href="/sign-in" />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ngeja</Text>
      <Text style={styles.tagline}>Aplikasi Pembelajaran Bahasa Jawa</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 18,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#000",
  },
  tagline: {
    fontSize: 18,
    color: "#000",
  },
});