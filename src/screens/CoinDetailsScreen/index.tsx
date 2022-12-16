import { Text, View, Image } from "react-native";
import { Ionicons, EvilIcons, AntDesign } from "@expo/vector-icons";

import React from "react";
import coin from "../../../assets/data/crypto.json";
import styles from "./styles";
import Header from "./components/Header";
import { LineGraph, GraphPoint } from "react-native-graph";

const CoinDetailsScreen = () => {
  const {
    image: { small },
    market_data: {
      market_cap_rank,
      current_price,
      price_change_percentage_24h,
    },
    symbol,
    prices,
    name,
  } = coin;
  const percentageColor =
    price_change_percentage_24h < 0 ? "#EA3943" : "#16c784";
  const points: GraphPoint[] = prices.map((el) => ({
    date: new Date(el[0]),
    value: el[1],
  }));
  return (
    <View style={styles.container}>
      <Header {...{ market_cap_rank, symbol }} image={small} />
      <View style={styles.priceContainer}>
        <View>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.price}>${current_price.usd}</Text>
        </View>
        <View
          style={[
            { backgroundColor: percentageColor },
            styles.priceChangeContainer,
          ]}
        >
          <AntDesign
            name={price_change_percentage_24h < 0 ? "caretdown" : "caretup"}
            size={12}
            color={"white"}
            style={{ marginRight: 5 }}
          />
          <Text style={styles.priceChange}>
            {price_change_percentage_24h.toFixed(2)} %
          </Text>
        </View>
      </View>
      <LineGraph
        points={points}
        color="#16c784"
        animated={false}
        style={{ width: 275, height: 175, alignSelf: "center", marginTop: 25 }}
      />
    </View>
  );
};

export default CoinDetailsScreen;
