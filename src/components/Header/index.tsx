import { Text, View, Image } from "react-native";
import { Ionicons, EvilIcons } from "@expo/vector-icons";
import React from "react";
import styles from "./styles";
import { RootStackParamList } from "../../navigation/types";
import { COLOR_WHITE } from "../../../assets/colors";
import { StackScreenProps } from "@react-navigation/stack";

const Header: React.FC<StackScreenProps<RootStackParamList, "Details">> = (
  props
) => {
  const { image, market_cap_rank, symbol } = props.route.params;
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
      <EvilIcons name="user" color={COLOR_WHITE} size={30} />
    </View>
  );
};

export default Header;
