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
import { useWindowDimensions, View } from "react-native";

const Stack = createStackNavigator<RootStackParamList>();
const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const BottomNavigator = () => {
  const insets = useSafeAreaInsets();
  const { width, height } = useWindowDimensions();
  return (
    <View
      style={{
        width,
        height,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        backgroundColor: COLOR_BACKGROUND,
      }}
    >
      <BottomTab.Navigator
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
    </View>
  );
};

const Navigator = () => {
  const insets = useSafeAreaInsets();
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
            paddingTop: insets.top,
          },
          header: () => <Header {...props} />,
        })}
      />
    </Stack.Navigator>
  );
};

export default Navigator;
