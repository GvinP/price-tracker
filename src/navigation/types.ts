import {
  NavigationProp,
  useNavigation,
  RouteProp,
  NavigatorScreenParams,
} from "@react-navigation/native";

export type BottomTabParamList = {
  Homescreen: undefined;
  Watchlist: undefined;
};

export type RootStackParamList = {
  Home: NavigatorScreenParams<BottomTabParamList>;
  Details: {
    coinId: string;
    image: string;
    symbol: string;
    market_cap_rank: number;
  };
};

type UseNavigationType = NavigationProp<RootStackParamList>;

export const useAppNavigation = () => useNavigation<UseNavigationType>();

export type RootRouteProps<RouteName extends keyof RootStackParamList> =
  RouteProp<RootStackParamList, RouteName>;
