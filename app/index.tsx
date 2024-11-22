import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Welcome to My App</Text>

      <Text style={styles.subHeaderText}>This is the home page</Text>

      <View style={styles.linkContainer}>
        <Link href="/about" style={styles.linkButton}>
          Go to About
        </Link>
        <Link href="/signup" style={styles.linkButton}>
          Go to Signup
        </Link>
        <Link href="/signin" style={styles.linkButton}>
          Go to Login
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ff7f50",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  headerText: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 10,
    textShadowColor: "#000",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
  },
  subHeaderText: {
    fontSize: 18,
    fontWeight: "300",
    color: "#fff",
    marginBottom: 30,
  },
  linkContainer: {
    width: "100%",
    alignItems: "center",
  },
  linkButton: {
    fontSize: 18,
    color: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginVertical: 10,
    backgroundColor: "#5c6bc0",
    borderRadius: 30,
    textAlign: "center",
    textDecorationLine: "none",
    fontWeight: "500",
  },
});
