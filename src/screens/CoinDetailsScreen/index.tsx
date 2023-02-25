import { Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import styles from "./styles";
import {
  Canvas,
  Group,
  Line,
  LinearGradient,
  Path,
  Skia,
  vec,
} from "@shopify/react-native-skia";
import { curveBasis, line, scaleLinear } from "d3";
import {
  getCoinMarketChart,
  getDetailedCoinData,
} from "../../services/requests";
import { useRoute } from "@react-navigation/native";
import { RootRouteProps } from "../../navigation/types";
import { CoinDetails } from "../../types";
import {
  COLOR_2,
  COLOR_GREEN,
  COLOR_RED,
  COLOR_WHITE,
} from "../../../assets/colors";

type DataPoint = {
  date: number;
  value: number;
};
const GRAPH_HEIGHT = 150;
const GRAPH_WIDTH = 400;

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
  const makeGraph = (data: DataPoint[]) => {
    const min = Math.min(...data.map((val) => val.value));
    const max = Math.max(...data.map((val) => val.value));
    const minDate = Math.min(...data.map((val) => val.date));
    const maxDate = Math.max(...data.map((val) => val.date));
    const getYAxis = scaleLinear().domain([min, max]).range([GRAPH_HEIGHT, 0]);
    const getXAxis = scaleLinear()
      .domain([minDate, maxDate])
      .range([10, GRAPH_WIDTH - 10]);
    const curveLine = line<DataPoint>()
      .x((d) => getXAxis(d.date))
      .y((d) => getYAxis(d.value))
      .curve(curveBasis)(data);
    const skPath = Skia.Path.MakeFromSVGString(curveLine || "") || "";
    return { min, max, curve: skPath! };
  };
  const graphData = makeGraph(coinPrices);
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
      <Canvas
        style={{
          height: GRAPH_HEIGHT,
          width: GRAPH_WIDTH,
        }}
      >
        <Group>
          <Line
            p1={vec(0, 1)}
            p2={vec(GRAPH_WIDTH, 1)}
            color={COLOR_2}
            strokeWidth={1}
          />
          <Line
            p1={vec(0, GRAPH_HEIGHT / 4)}
            p2={vec(GRAPH_WIDTH, GRAPH_HEIGHT / 4)}
            color={COLOR_2}
            strokeWidth={1}
          />
          <Line
            p1={vec(0, GRAPH_HEIGHT / 2)}
            p2={vec(GRAPH_WIDTH, GRAPH_HEIGHT / 2)}
            color={COLOR_2}
            strokeWidth={1}
          />
          <Line
            p1={vec(0, (GRAPH_HEIGHT * 3) / 4)}
            p2={vec(GRAPH_WIDTH, (GRAPH_HEIGHT * 3) / 4)}
            color={COLOR_2}
            strokeWidth={1}
          />
          <Line
            p1={vec(0, GRAPH_HEIGHT)}
            p2={vec(GRAPH_WIDTH, GRAPH_HEIGHT)}
            color={COLOR_2}
            strokeWidth={1}
          />
          <Path path={graphData.curve} strokeWidth={1} style="stroke">
            <LinearGradient
              start={vec(0, 0)}
              end={vec(GRAPH_WIDTH, 0)}
              colors={["#ff00ff", "#00ff00"]}
            />
          </Path>
        </Group>
      </Canvas>
    </View>
  );
};

export default CoinDetailsScreen;
