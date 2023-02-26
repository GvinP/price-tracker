import { StyleSheet } from "react-native";
import { COLOR_1, COLOR_2, COLOR_WHITE } from "../../../../assets/colors";

const styles = StyleSheet.create({
  currencyContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: COLOR_1,
    padding: 15,
  },
  image: {
    width: 45,
    aspectRatio: 1,
    marginRight: 10,
  },
  title: {
    color: COLOR_WHITE,
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 3,
  },
  rank: {
    color: COLOR_WHITE,
    fontWeight: "700",
  },
  rankContainer: {
    backgroundColor: COLOR_2,
    paddingHorizontal: 5,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 5,
  },
  text: {
    color: COLOR_WHITE,
    fontSize: 14,
    fontWeight: "500",
    marginRight: 5,
  },
});

export default styles;
