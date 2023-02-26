import { FlatList, RefreshControl, View } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./styles";
import { useWatchlist } from "../../context/Context";
import { getWatchlistedCoins } from "../../services/requests";
import { CoinItemType } from "../../types";
import CoinItem from "../../components/CoinItem";

const WatchList = () => {
  const { watchlistCoinIds } = useWatchlist();
  const [coins, setCoins] = useState<CoinItemType[]>([]);
  const [loading, setLoading] = useState(false);
  const fetchCoins = async () => {
    if (loading) {
      return;
    }
    setLoading(true);
    const coins = await getWatchlistedCoins(1, watchlistCoinIds.join("%2C"));
    setCoins(coins);
    setLoading(false);
  };
  useEffect(() => {
    if (watchlistCoinIds.length > 0) {
      fetchCoins();
    }
  }, [watchlistCoinIds]);

  return (
    <View style={styles.container}>
      <FlatList
        data={coins}
        renderItem={({ item }) => <CoinItem {...item} />}
        refreshControl={
          <RefreshControl
            refreshing={loading}
            tintColor="white"
            onRefresh={watchlistCoinIds.length > 0 ? fetchCoins : undefined}
          />
        }
      />
    </View>
  );
};

export default WatchList;
