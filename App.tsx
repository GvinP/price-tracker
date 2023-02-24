import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import Navigator from "./src/navigation";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Navigator />
      </SafeAreaProvider>
      <StatusBar style="light" />
    </NavigationContainer>
  );
}
