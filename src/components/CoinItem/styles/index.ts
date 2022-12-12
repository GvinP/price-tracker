import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  currencyContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#282828",
    padding: 15,
  },
  image: {
    width: 45,
    aspectRatio: 1,
    marginRight: 10,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 3,
  },
  rank: {
    color: "#FFFFFF",
    fontWeight: "700",
  },
  rankContainer: {
    backgroundColor: "#585858",
    paddingHorizontal: 5,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 5,
  },
  text: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "500",
    marginRight: 5,
  },
});

export default styles;
