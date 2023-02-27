import { Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import styles from "./styles";
import {
  getCoinMarketChart,
  getDetailedCoinData,
} from "../../services/requests";
import { useRoute } from "@react-navigation/native";
import { RootRouteProps } from "../../navigation/types";
import { CoinDetails } from "../../types";
import { COLOR_GREEN, COLOR_RED, COLOR_WHITE } from "../../../assets/colors";
import Graph from "./components/Graph";

type DataPoint = {
  date: number;
  value: number;
};

const CoinDetailsScreen = () => {
  const route = useRoute<RootRouteProps<"Details">>();
  const [coin, setCoin] = useState<CoinDetails>({} as CoinDetails);
  const [coinPrices, setCoinPrices] = useState<DataPoint[]>([]);
  const getCoin = async () => {
    const coin = await getDetailedCoinData(route.params.coinId);
    if (coin) {
      setCoin(coin);
    }
    const coinData = await getCoinMarketChart(route.params.coinId, 7);
    if (coinData) {
      const points: DataPoint[] = coinData.prices.map((el) => ({
        date: el[0],
        value: el[1],
      }));
      setCoinPrices(points);
    }
  };
  useEffect(() => {
    getCoin();
  }, []);
  const percentageColor =
    coin?.market_data?.price_change_percentage_24h < 0
      ? COLOR_RED
      : COLOR_GREEN;
  return (
    <View style={styles.container}>
      <View style={styles.priceContainer}>
        <View>
          <Text style={styles.title}>{coin?.name}</Text>
          <Text style={styles.price}>
            ${coin?.market_data?.current_price?.usd}
          </Text>
        </View>
        <View
          style={[
            { backgroundColor: percentageColor },
            styles.priceChangeContainer,
          ]}
        >
          <AntDesign
            name={
              coin?.market_data?.price_change_percentage_24h < 0
                ? "caretdown"
                : "caretup"
            }
            size={12}
            color={COLOR_WHITE}
            style={{ marginRight: 5 }}
          />
          <Text style={styles.priceChange}>
            {coin?.market_data?.price_change_percentage_24h.toFixed(2)} %
          </Text>
        </View>
      </View>
      <Graph {...{ coinPrices }} />
    </View>
  );
};

export default CoinDetailsScreen;
