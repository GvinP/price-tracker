import React from "react";
import { Group, Line, Text, useFont, vec } from "@shopify/react-native-skia";
import { COLOR_2, COLOR_WHITE } from "../../../../assets/colors";

interface GridLineProps {
  text: string;
  textY: number;
  x0: number;
  x1: number;
  y: number;
}

const GridLine: React.FC<GridLineProps> = ({ text, textY, x0, x1, y }) => {
  const font = useFont(
    require("../../../../assets/fonts/Roboto-Light.ttf"),
    11
  );
  if (!font) return null;
  return (
    <Group>
      <Line p1={vec(x0, y)} p2={vec(x1, y)} color={COLOR_2} strokeWidth={1} />
      <Text font={font} text={text} x={x1 + 5} y={textY} color={COLOR_WHITE} />
    </Group>
  );
};

export default GridLine;
