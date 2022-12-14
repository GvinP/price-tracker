import { Text, View, Image } from "react-native";
import { Ionicons, EvilIcons } from "@expo/vector-icons";
import React from "react";
import styles from "./styles";

const Header = ({ image, symbol, market_cap_rank }) => {
  return (
    <View style={styles.header}>
      <Ionicons name="chevron-back-sharp" color={"#FFFFFF"} size={30} />
      <View style={styles.tickerContainer}>
        <Image source={{ uri: image }} style={{ width: 25, aspectRatio: 1 }} />
        <Text style={styles.ticker}>{symbol.toUpperCase()}</Text>
        <View style={styles.rankContainer}>
          <Text style={styles.text}>#{market_cap_rank}</Text>
        </View>
      </View>
      <EvilIcons name="user" color={"#FFFFFF"} size={30} />
    </View>
  );
};

export default Header;
