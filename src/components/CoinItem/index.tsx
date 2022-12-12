import { Text, View, Image } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";

const CoinItem = () => {
  return (
    <View style={styles.currencyContainer}>
      <Image
        source={{
          uri: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
        }}
        style={styles.image}
      />
      <View>
        <Text style={styles.title}>Bitcoin</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={styles.rankContainer}>
            <Text style={styles.rank}>1</Text>
          </View>
          <Text style={styles.text}>BTC</Text>
          <AntDesign
            name="caretdown"
            size={12}
            color={"#FF0000"}
            style={{ marginRight: 5 }}
          />
          <Text style={styles.text}>0,63%</Text>
        </View>
      </View>
      <View style={{ marginLeft: "auto" }}>
        <Text style={styles.title}>17005.05</Text>
        <Text style={styles.text}>MCap 327 B</Text>
      </View>
    </View>
  );
};

export default CoinItem;
