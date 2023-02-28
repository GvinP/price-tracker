import { Dimensions } from "react-native";
import React from "react";
import {
  Canvas,
  Group,
  LinearGradient,
  Path,
  Skia,
  vec,
  useFont,
} from "@shopify/react-native-skia";
import { curveBasis, line, scaleLinear } from "d3";
import GridLine from "../GridLine";

const { width } = Dimensions.get("window");
const GRAPH_HEIGHT = 150;
const GRAPH_WIDTH = width;
const ARRAY_LENGTH = 5;

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
        {new Array(ARRAY_LENGTH).fill(0).map((_, index) => (
          <GridLine
            text={(
              graphData.max -
              ((graphData.max - graphData.min) * (ARRAY_LENGTH - 1 - index)) / 4
            )
              .toFixed(2)
              .toString()}
            textY={
              (GRAPH_HEIGHT * (ARRAY_LENGTH - 1 - index)) / 4 +
              (index === ARRAY_LENGTH - 1 ? 8 : index === 0 ? 0 : 3)
            }
            x0={0}
            x1={GRAPH_WIDTH - 65}
            y={
              (GRAPH_HEIGHT * (ARRAY_LENGTH - 1 - index)) / 4 +
              (index === ARRAY_LENGTH - 1 ? 1 : 0)
            }
          />
        ))}
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
