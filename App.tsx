import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import CoinDetailsScreen from "./src/screens/CoinDetailsScreen";
import HomeScreen from "./src/screens/HomeScreen";

export default function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <View style={styles.container}>
        <CoinDetailsScreen />
        <StatusBar style="light" />
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingTop: 50,
  },
});
