import { Text, View, Image } from "react-native";
import { Ionicons, EvilIcons } from "@expo/vector-icons";
import React from "react";
import coin from "../../../assets/data/crypto.json";
import styles from "./styles";
import Header from "./components/Header";

const CoinDetailsScreen = () => {
  const {
    image: { small },
    market_data: { market_cap_rank },
    symbol,
  } = coin;
  return (
    <View style={styles.container}>
      <Header {...{ market_cap_rank, symbol }} image={small} />
    </View>
  );
};

export default CoinDetailsScreen;
