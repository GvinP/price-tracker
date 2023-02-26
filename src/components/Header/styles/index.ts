import { COLOR_2, COLOR_WHITE } from "./../../../../assets/colors/index";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  tickerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  ticker: {
    fontSize: 17,
    fontWeight: "700",
    color: COLOR_WHITE,
    marginHorizontal: 5,
  },
  text: {
    fontSize: 14,
    fontWeight: "700",
    color: COLOR_WHITE,
  },
  rankContainer: {
    backgroundColor: COLOR_2,
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 5,
  },
});

export default styles;
