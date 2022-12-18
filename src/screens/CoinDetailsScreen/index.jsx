import { Text, View, Dimensions } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import coin from "../../../assets/data/crypto.json";
import styles from "./styles";
import Header from "./components/Header";
import {
  ChartDot,
  ChartPath,
  ChartPathProvider,
} from "@rainbow-me/animated-charts";

const SCREEN_WIDTH = Dimensions.get("window").width;

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
  const [points, setPoints] = useState(
    prices.map((el) => ({
      x: el[0],
      y: el[1],
    }))
  );
  const percentageColor =
    price_change_percentage_24h < 0 ? "#EA3943" : "#16c784";
  useEffect(() => {
    setPoints(
      prices.map((el) => ({
        x: el[0],
        y: el[1],
      }))
    );
  }, []);

  return (
    <View style={styles.container}>
      <ChartPathProvider
        data={{
          points,
          smoothingStrategy: "bezier",
        }}
      >
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
        <View>
          <ChartPath
            height={SCREEN_WIDTH / 2}
            stroke="yellow"
            width={SCREEN_WIDTH}
          />
          <ChartDot style={{ backgroundColor: "blue" }} />
        </View>
      </ChartPathProvider>
    </View>
  );
};

export default CoinDetailsScreen;
