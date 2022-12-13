import { Text, View, Image } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";
import { CoinItemType } from "../../../App";

const CoinItem: React.FC<CoinItemType> = ({ image, name, symbol, market_cap_rank, current_price, price_change_percentage_24h, market_cap }) => {
  return (
    <View style={styles.currencyContainer}>
      <Image source={{ uri: image }} style={styles.image} />
      <View>
        <Text style={styles.title}>{name}</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={styles.rankContainer}>
            <Text style={styles.rank}>{market_cap_rank}</Text>
          </View>
          <Text style={styles.text}>{symbol.toUpperCase()}</Text>
          <AntDesign
            name={price_change_percentage_24h<0?"caretdown":"caretup"}
            size={12}
            color={price_change_percentage_24h<0?"#FF0000":"#00FF00"}
            style={{ marginRight: 5 }}
          />
          <Text style={styles.text}>{Math.abs(price_change_percentage_24h)}</Text>
        </View>
      </View>
      <View style={{ marginLeft: "auto" }}>
        <Text style={styles.title}>{current_price}</Text>
        <Text style={styles.text}>MCap 327 B</Text>
      </View>
    </View>
  );
};

export default CoinItem;
