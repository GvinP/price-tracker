import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import Navigator from "./src/navigation";

export default function App() {
  return (
    <NavigationContainer>
      <Navigator />
      <StatusBar style="light" />
    </NavigationContainer>
  );
}
