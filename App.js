import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-yellow-100 ">
      <Text>Welcome to Chytarium!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
