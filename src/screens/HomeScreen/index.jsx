import { StyleSheet, FlatList, ListRenderItem } from "react-native";
import cryptocurrencies from "../../../assets/data/cryptocurrencies.json";

import React from "react";
import CoinItem from "../../components/CoinItem";

const HomeScreen = () => {
  const renderItem = ({ item }) => <CoinItem {...{ ...item }} />;
  return (
    <FlatList
      data={cryptocurrencies}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
