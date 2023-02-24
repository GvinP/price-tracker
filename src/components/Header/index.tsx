import { Text, View, Image } from "react-native";
import { Ionicons, EvilIcons } from "@expo/vector-icons";
import React from "react";
import styles from "./styles";
import { useAppNavigation } from "../../navigation/types";

interface HeaderProps {
  image: string;
  symbol: string;
  market_cap_rank: number;
}

const Header: React.FC<HeaderProps> = ({ image, symbol, market_cap_rank }) => {
  const navigation = useAppNavigation();
  return (
    <View style={styles.header}>
      <Ionicons
        name="chevron-back-sharp"
        color={"#FFFFFF"}
        size={30}
        onPress={navigation.goBack}
      />
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
