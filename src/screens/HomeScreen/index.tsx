import { StyleSheet, FlatList, ListRenderItem } from "react-native";
import React, { useEffect, useState } from "react";
import CoinItem from "../../components/CoinItem";
import { CoinItemType } from "../../types";
import { getMarketData } from "../../services/requests";

const HomeScreen = () => {
  const [coins, setCoins] = useState<CoinItemType[]>([]);

  const getCoins = async () => {
    const coins = await getMarketData();
    if (coins) {
      setCoins(coins);
    }
  };

  useEffect(() => {
    getCoins();
  }, []);

  const renderItem: ListRenderItem<CoinItemType> = ({ item }) => (
    <CoinItem {...{ ...item }} />
  );
  return (
    <FlatList
      data={coins}
      renderItem={renderItem}
      contentContainerStyle={styles.container}
      keyExtractor={(item) => item.id}
    />
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#121212",
    paddingTop: 50,
  },
});
