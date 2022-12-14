import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  tickerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  ticker: {
    fontSize: 17,
    fontWeight: "700",
    color: "#FFFFFF",
    marginHorizontal: 5,
  },
  text: {
    fontSize: 14,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  rankContainer: {
    backgroundColor: "#585858",
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 5,
  },
});

export default styles;
