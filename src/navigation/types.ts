import {
  NavigationProp,
  useNavigation,
  RouteProp,
} from "@react-navigation/native";

export type RootStackParamList = {
  Home: undefined;
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
