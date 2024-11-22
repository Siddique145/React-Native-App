import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
  ScrollView,
} from "react-native";
import { Link } from "expo-router";
import { LineChart } from "react-native-chart-kit";

// Export options to hide the header for the Dashboard screen
export const options = {
  headerShown: false, // Hide the header for the Dashboard screen
};

export default function Dashboard() {
  const handleLogout = () => {
    Alert.alert("You have been logged out!");
    // Add your logout functionality here, e.g., clear tokens or reset navigation
  };

  // Data for the LineChart
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43, 50],
      },
    ],
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Welcome to Your Dashboard</Text>

      <Image
        source={{ uri: "https://example.com/your-image-url.jpg" }} // Replace with your own image URL
        style={styles.image}
      />

      <View style={styles.content}>
        <Text style={styles.text}>
          Here you can manage your account and settings.
        </Text>

        {/* Line chart for data visualization */}
        <View style={styles.chartContainer}>
          <LineChart
            data={data}
            width={350} // from react-native
            height={220}
            chartConfig={{
              backgroundColor: "#e26a00",
              backgroundGradientFrom: "#fb8c00",
              backgroundGradientTo: "#ffa726",
              decimalPlaces: 2, // Optional, defaults to 2
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: "#ffa726",
              },
            }}
            style={{ marginVertical: 8, borderRadius: 16 }}
          />
        </View>

        {/* Add other dashboard features here */}
        <TouchableOpacity style={styles.button} onPress={handleLogout}>
          <Text style={styles.buttonText}>Log Out</Text>
        </TouchableOpacity>

        <Link href="/profile" style={styles.link}>
          <Text style={styles.linkText}>Go to Profile</Text>
        </Link>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 12,
    marginBottom: 30,
  },
  content: {
    width: "100%",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
  chartContainer: {
    marginBottom: 40,
    alignItems: "center",
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#3498db",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  link: {
    marginTop: 20,
  },
  linkText: {
    color: "#3498db",
    fontWeight: "bold",
  },
});
