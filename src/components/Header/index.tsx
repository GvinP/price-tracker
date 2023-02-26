import { Text, View, Image } from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import React from "react";
import styles from "./styles";
import { RootStackParamList } from "../../navigation/types";
import { COLOR_WHITE } from "../../../assets/colors";
import { StackScreenProps } from "@react-navigation/stack";
import { useWatchlist } from "../../context/Context";

const Header: React.FC<StackScreenProps<RootStackParamList, "Details">> = (
  props
) => {
  const { watchlistCoinIds, removeWatchlistCoinId, storeWatchlistCoinId } =
    useWatchlist();
  const { image, market_cap_rank, symbol, coinId } = props.route.params;
  const checkIfCoinIsWatchlisted = () =>
    watchlistCoinIds.some((coinIdValue) => coinIdValue === coinId);
  const handleWatchlistCoin = () => {
    if (checkIfCoinIsWatchlisted()) {
      return removeWatchlistCoinId(coinId);
    }
    return storeWatchlistCoinId(coinId);
  };
  return (
    <View style={styles.header}>
      <Ionicons
        name="chevron-back-sharp"
        color={COLOR_WHITE}
        size={30}
        onPress={props.navigation.goBack}
      />
      <View style={styles.tickerContainer}>
        <Image source={{ uri: image }} style={{ width: 25, aspectRatio: 1 }} />
        <Text style={styles.ticker}>{symbol.toUpperCase()}</Text>
        <View style={styles.rankContainer}>
          <Text style={styles.text}>#{market_cap_rank}</Text>
        </View>
      </View>
      <FontAwesome
        name={checkIfCoinIsWatchlisted() ? "star" : "star-o"}
        color={checkIfCoinIsWatchlisted() ? "#FFBF00" : COLOR_WHITE}
        size={25}
        onPress={handleWatchlistCoin}
      />
    </View>
  );
};

export default Header;
