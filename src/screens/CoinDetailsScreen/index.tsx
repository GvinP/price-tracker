import { Text, View, Image } from "react-native";
import { Ionicons, EvilIcons, AntDesign } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import coin from "../../../assets/data/crypto.json";
import styles from "./styles";
import Header from "./components/Header";
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
import { getCoinMarketChart } from "../../services/requests";

type DataPoint = {
  date: number;
  value: number;
};
const GRAPH_HEIGHT = 150;
const GRAPH_WIDTH = 400;

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
    id
  } = coin;
  const getCoin = async () => {
    const coinData = await getCoinMarketChart(id, 7);
    //@ts-ignore
    const points: DataPoint[] = coinData.prices.map((el) => ({
      date: el[0],
      value: el[1],
    }));
    setCoinPrices(points);
  };
  const [coinPrices, setCoinPrices] = useState<DataPoint[]>([]);
  useEffect(() => {
    getCoin();
  }, []);
  const percentageColor =
    price_change_percentage_24h < 0 ? "#EA3943" : "#16c784";
  const makeGraph = (data: DataPoint[]) => {
    const min = Math.min(...data.map((val) => val.value));
    const max = Math.max(...data.map((val) => val.value));
    const minDate = Math.min(...data.map((val) => val.date));
    const maxDate = Math.max(...data.map((val) => val.date));
    console.log(min);
    console.log(max);
    console.log(minDate);
    console.log(maxDate);
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
            color="lightgrey"
            strokeWidth={1}
          />
          <Line
            p1={vec(0, GRAPH_HEIGHT / 4)}
            p2={vec(GRAPH_WIDTH, GRAPH_HEIGHT / 4)}
            color="lightgrey"
            strokeWidth={1}
          />
          <Line
            p1={vec(0, GRAPH_HEIGHT / 2)}
            p2={vec(GRAPH_WIDTH, GRAPH_HEIGHT / 2)}
            color="lightgrey"
            strokeWidth={1}
          />
          <Line
            p1={vec(0, (GRAPH_HEIGHT * 3) / 4)}
            p2={vec(GRAPH_WIDTH, (GRAPH_HEIGHT * 3) / 4)}
            color="lightgrey"
            strokeWidth={1}
          />
          <Line
            p1={vec(0, GRAPH_HEIGHT)}
            p2={vec(GRAPH_WIDTH, GRAPH_HEIGHT)}
            color="lightgrey"
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
