import { Dimensions } from "react-native";
import React from "react";
import {
  Canvas,
  Group,
  Line,
  LinearGradient,
  Path,
  Skia,
  vec,
  Text,
  useFont,
} from "@shopify/react-native-skia";
import { curveBasis, line, scaleLinear } from "d3";
import { COLOR_2, COLOR_WHITE } from "../../../../../assets/colors";

const { width, height } = Dimensions.get("window");
const GRAPH_HEIGHT = 150;
const GRAPH_WIDTH = width;

export type DataPoint = {
  date: number;
  value: number;
};

interface GraphProps {
  coinPrices: DataPoint[];
}

const Graph: React.FC<GraphProps> = ({ coinPrices }) => {
  const font = useFont(
    require("../../../../../assets/fonts/Roboto-Light.ttf"),
    11
  );

  const makeGraph = (data: DataPoint[]) => {
    const min = Math.min(...data.map((val) => val.value));
    const max = Math.max(...data.map((val) => val.value));
    const minDate = Math.min(...data.map((val) => val.date));
    const maxDate = Math.max(...data.map((val) => val.date));
    const getYAxis = scaleLinear().domain([min, max]).range([GRAPH_HEIGHT, 0]);
    const getXAxis = scaleLinear()
      .domain([minDate, maxDate])
      .range([10, GRAPH_WIDTH - 70]);
    const curveLine = line<DataPoint>()
      .x((d) => getXAxis(d.date))
      .y((d) => getYAxis(d.value))
      .curve(curveBasis)(data);
    const skPath = Skia.Path.MakeFromSVGString(curveLine || "") || "";
    return { min, max, curve: skPath! };
  };
  const graphData = makeGraph(coinPrices);
  if (!font) return null;
  return (
    <Canvas
      style={{
        height: GRAPH_HEIGHT,
        width: GRAPH_WIDTH,
      }}
    >
      <Group>
        <Line
          p1={vec(0, 1)}
          p2={vec(GRAPH_WIDTH - 65, 1)}
          color={COLOR_2}
          strokeWidth={1}
        />
        <Text
          font={font}
          text={graphData.max.toFixed(2).toString()}
          x={GRAPH_WIDTH - 60}
          y={10}
          color={COLOR_WHITE}
        />
        <Line
          p1={vec(0, GRAPH_HEIGHT / 4)}
          p2={vec(GRAPH_WIDTH - 65, GRAPH_HEIGHT / 4)}
          color={COLOR_2}
          strokeWidth={1}
        />
        <Text
          font={font}
          text={(graphData.max - (graphData.max - graphData.min) / 4)
            .toFixed(2)
            .toString()}
          x={GRAPH_WIDTH - 60}
          y={GRAPH_HEIGHT / 4 + 3}
          color={COLOR_WHITE}
        />
        <Line
          p1={vec(0, GRAPH_HEIGHT / 2)}
          p2={vec(GRAPH_WIDTH - 65, GRAPH_HEIGHT / 2)}
          color={COLOR_2}
          strokeWidth={1}
        />
        <Text
          font={font}
          text={(graphData.max - (graphData.max - graphData.min) / 2)
            .toFixed(2)
            .toString()}
          x={GRAPH_WIDTH - 60}
          y={GRAPH_HEIGHT / 2 + 3}
          color={COLOR_WHITE}
        />
        <Line
          p1={vec(0, (GRAPH_HEIGHT * 3) / 4)}
          p2={vec(GRAPH_WIDTH - 65, (GRAPH_HEIGHT * 3) / 4)}
          color={COLOR_2}
          strokeWidth={1}
        />
        <Text
          font={font}
          text={(graphData.max - ((graphData.max - graphData.min) * 3) / 4)
            .toFixed(2)
            .toString()}
          x={GRAPH_WIDTH - 60}
          y={(GRAPH_HEIGHT * 3) / 4 + 3}
          color={COLOR_WHITE}
        />
        <Line
          p1={vec(0, GRAPH_HEIGHT - 1)}
          p2={vec(GRAPH_WIDTH - 65, GRAPH_HEIGHT - 1)}
          color={COLOR_2}
          strokeWidth={1}
        />
        <Text
          font={font}
          text={(graphData.max - (graphData.max - graphData.min))
            .toFixed(2)
            .toString()}
          x={GRAPH_WIDTH - 60}
          y={GRAPH_HEIGHT - 1}
          color={COLOR_WHITE}
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
  );
};

export default Graph;
