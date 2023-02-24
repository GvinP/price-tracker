import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import CoinDetailsScreen from "../screens/CoinDetailsScreen";
import { RootStackParamList } from "./types";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { COLOR_BACKGROUND } from "../../assets/colors";
import Header from "../components/Header";

const Stack = createStackNavigator<RootStackParamList>();
const Navigator = () => {
  const insets = useSafeAreaInsets();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Details"
        component={CoinDetailsScreen}
        options={{
          cardStyle: {
            backgroundColor: COLOR_BACKGROUND,
            paddingTop: insets.top,
          },
          header: ({ route }) => {
            // console.log(route);
            return (
              <Header
                //@ts-ignore
                image={route.params?.image}
                //@ts-ignore
                market_cap_rank={route.params?.market_cap_rank}
                //@ts-ignore
                symbol={route.params?.symbol}
              />
            );
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default Navigator;
