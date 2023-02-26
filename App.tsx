import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import Navigator from "./src/navigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import WatchlistProvider from "./src/context/Context";

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <WatchlistProvider>
          <Navigator />
        </WatchlistProvider>
      </SafeAreaProvider>
      <StatusBar style="light" />
    </NavigationContainer>
  );
}
