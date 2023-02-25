import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import CoinDetailsScreen from "../screens/CoinDetailsScreen";
import { BottomTabParamList, RootStackParamList } from "./types";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { COLOR_2, COLOR_BACKGROUND, COLOR_WHITE } from "../../assets/colors";
import Header from "../components/Header";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WatchList from "../screens/WatchList";
import { Entypo, FontAwesome } from "@expo/vector-icons";

const Stack = createStackNavigator<RootStackParamList>();
const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const BottomNavigator = () => {
  const safeAreaInsets = useSafeAreaInsets();
  return (
    <BottomTab.Navigator
      {...safeAreaInsets}
      initialRouteName="Homescreen"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLOR_WHITE,
        tabBarInactiveTintColor: COLOR_2,
        tabBarStyle: {
          paddingTop: 5,
          backgroundColor: COLOR_BACKGROUND,
        },
      }}
    >
      <BottomTab.Screen
        name="Homescreen"
        component={HomeScreen}
        options={{
          title: "Home",
          tabBarIcon: ({ focused, color }) => (
            <Entypo name="home" size={focused ? 30 : 25} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Watchlist"
        component={WatchList}
        options={{
          title: "WatchList",
          tabBarIcon: ({ focused, color }) => (
            <FontAwesome name="star" size={focused ? 30 : 25} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

const Navigator = () => {
  const safeAreaInsets = useSafeAreaInsets();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={BottomNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Details"
        component={CoinDetailsScreen}
        options={(props) => ({
          cardStyle: {
            backgroundColor: COLOR_BACKGROUND,
            paddingTop: safeAreaInsets.top,
          },
          header: () => <Header {...props} />,
        })}
      />
    </Stack.Navigator>
  );
};

export default Navigator;
