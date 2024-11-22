import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Home() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red",
      }}
    >
      <Text style={{ fontSize: 30, fontWeight: "200", color: "white" }}>
        This is the my app home page
      </Text>
      <Link href={"/about"}>Go to about</Link>
      <Link href={"/signup"}>Go to signup</Link>
      <Link href={"/signin"}>Go to Login</Link>
    </View>
  );
}
