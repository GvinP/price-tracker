import { StyleSheet, FlatList, ListRenderItem } from "react-native";
import cryptocurrencies from "../../../assets/data/cryptocurrencies.json";

import React from "react";
import CoinItem from "../../components/CoinItem";

export interface Roi {
  times: number;
  currency: string;
  percentage: number;
}

export interface CoinItemType {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: any;
  market_cap_rank: number;
  fully_diluted_valuation?: number | null;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply?: number | null;
  max_supply?: number | null;
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  roi: Roi | null;
  last_updated: string;
}

const HomeScreen = () => {
  const renderItem: ListRenderItem<CoinItemType> = ({ item }) => (
    <CoinItem {...{ ...item }} />
  );
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
