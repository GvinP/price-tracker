import { StyleSheet } from "react-native";
import { COLOR_BACKGROUND, COLOR_WHITE } from "../../../../assets/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR_BACKGROUND,
    paddingHorizontal: 10,
  },
  title: {
    color: COLOR_WHITE,
    fontSize: 15,
  },
  price: {
    color: COLOR_WHITE,
    fontSize: 30,
    fontWeight: "600",
    letterSpacing: 1,
  },
  priceChange: {
    color: COLOR_WHITE,
    fontSize: 17,
    fontWeight: "500",
  },
  priceContainer: {
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  priceChangeContainer: {
    paddingHorizontal: 5,
    paddingVertical: 8,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default styles;
