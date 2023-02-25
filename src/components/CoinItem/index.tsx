import { Text, View, Image, Pressable } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";
import { useAppNavigation } from "../../navigation/types";
import { CoinItemType } from "../../types";
import { COLOR_GREEN, COLOR_RED } from "../../../assets/colors";

const CoinItem: React.FC<CoinItemType> = ({
  image,
  name,
  id,
  symbol,
  market_cap_rank,
  current_price,
  price_change_percentage_24h,
  market_cap,
}) => {
  const navigation = useAppNavigation();
  const percentageColor =
    price_change_percentage_24h < 0 ? COLOR_RED : COLOR_GREEN;
  const normalizeMarketCap = (marketCap: number) => {
    if (marketCap > 1_000_000_000_000) {
      return `${Math.floor(marketCap / 1_000_000_000_000)} T`;
    }
    if (marketCap > 1_000_000_000) {
      return `${Math.floor(marketCap / 1_000_000_000)} B`;
    }
    if (marketCap > 1_000_000) {
      return `${Math.floor(marketCap / 1_000_000)} M`;
    }
    if (marketCap > 1_000) {
      return `${Math.floor(marketCap / 1_000)} K`;
    }
    return marketCap;
  };
  return (
    <Pressable
      style={styles.currencyContainer}
      onPress={() =>
        navigation.navigate("Details", {
          coinId: id,
          image,
          market_cap_rank,
          symbol,
        })
      }
    >
      <Image source={{ uri: image }} style={styles.image} />
      <View>
        <Text style={styles.title}>{name}</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={styles.rankContainer}>
            <Text style={styles.rank}>{market_cap_rank}</Text>
          </View>
          <Text style={styles.text}>{symbol.toUpperCase()}</Text>
          <AntDesign
            name={price_change_percentage_24h < 0 ? "caretdown" : "caretup"}
            size={12}
            color={percentageColor}
            style={{ marginRight: 5 }}
          />
          <Text style={{ color: percentageColor }}>
            {Math.abs(price_change_percentage_24h).toFixed(2)}%
          </Text>
        </View>
      </View>
      <View style={{ marginLeft: "auto", alignItems: "flex-end" }}>
        <Text style={styles.title}>{current_price}</Text>
        <Text style={[styles.text, { marginRight: 0 }]}>
          MCap {normalizeMarketCap(market_cap)}
        </Text>
      </View>
    </Pressable>
  );
};

export default CoinItem;
