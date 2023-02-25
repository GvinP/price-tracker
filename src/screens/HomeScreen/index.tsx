import {
  StyleSheet,
  FlatList,
  RefreshControl,
  ListRenderItem,
  View,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import CoinItem from "../../components/CoinItem";
import { CoinItemType } from "../../types";
import { getMarketData } from "../../services/requests";
import { COLOR_BACKGROUND, COLOR_WHITE } from "../../../assets/colors";

const HomeScreen = () => {
  const [coins, setCoins] = useState<CoinItemType[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchCoins = async (pageNumber?: number) => {
    if (loading) {
      return;
    }
    setLoading(true);
    const coins = await getMarketData(pageNumber);
    if (coins) {
      setCoins((prevCoins) => [...prevCoins, ...coins]);
    }
    setLoading(false);
  };

  const refetchCoins = async () => {
    if (loading) {
      return;
    }
    setLoading(true);
    const coins = await getMarketData();
    if (coins) {
      setCoins(coins);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  const renderItem: ListRenderItem<CoinItemType> = useCallback(
    ({ item }) => <CoinItem {...{ ...item }} />,
    [coins]
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={coins}
        renderItem={renderItem}
        refreshControl={
          <RefreshControl
            refreshing={loading}
            tintColor={COLOR_WHITE}
            onRefresh={refetchCoins}
          />
        }
        onEndReached={() => fetchCoins(coins.length / 50 + 1)}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR_BACKGROUND,
  },
});
