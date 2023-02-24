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

export interface MarketChartData {
  prices: number[][];
  market_caps: number[][];
  total_volumes: number[][];
}

  export interface Description {
      en: string;
  }

  export interface ReposUrl {
      github: string[];
      bitbucket: any[];
  }

  export interface Links {
      homepage: string[];
      blockchain_site: string[];
      official_forum_url: string[];
      chat_url: string[];
      announcement_url: string[];
      twitter_screen_name: string;
      facebook_username: string;
      bitcointalk_thread_identifier?: any;
      telegram_channel_identifier: string;
      subreddit_url: string;
      repos_url: ReposUrl;
  }

  export interface Image {
      thumb: string;
      small: string;
      large: string;
  }


  export interface IcoData {
      ico_start_date: Date;
      ico_end_date: Date;
      short_desc: string;
      description?: any;
      softcap_currency: string;
      hardcap_currency: string;
      total_raised_currency: string;
      softcap_amount?: any;
      hardcap_amount?: any;
      total_raised?: any;
      quote_pre_sale_currency: string;
      base_pre_sale_amount?: any;
      quote_pre_sale_amount?: any;
      quote_public_sale_currency: string;
      base_public_sale_amount: number;
      quote_public_sale_amount: number;
      accepting_currencies: string;
      country_origin: string;
      pre_sale_start_date?: any;
      pre_sale_end_date?: any;
      whitelist_url: string;
      whitelist_start_date?: any;
      whitelist_end_date?: any;
      bounty_detail_url: string;
      amount_for_sale?: any;
      kyc_required: boolean;
      whitelist_available?: any;
      pre_sale_available?: any;
      pre_sale_ended: boolean;
  }

  export interface Price {
      usd: number;
  }

  export interface Roi {
      times: number;
      currency: string;
      percentage: number;
  }

  export interface MarketData {
      current_price: Price;
      total_value_locked?: any;
      mcap_to_tvl_ratio?: any;
      fdv_to_tvl_ratio?: any;
      roi: Roi;
      ath: Price;
      ath_change_percentage: Price;
      ath_date: Price;
      atl: Price;
      atl_change_percentage: Price;
      atl_date: Price;
      market_cap: Price;
      market_cap_rank: number;
      fully_diluted_valuation: Price;
      total_volume: Price;
      high_24h: Price;
      low_24h: Price;
      price_change_24h: number;
      price_change_percentage_24h: number;
      price_change_percentage_7d: number;
      price_change_percentage_14d: number;
      price_change_percentage_30d: number;
      price_change_percentage_60d: number;
      price_change_percentage_200d: number;
      price_change_percentage_1y: number;
      market_cap_change_24h: number;
      market_cap_change_percentage_24h: number;
      price_change_24h_in_currency: Price;
      price_change_percentage_1h_in_currency: Price;
      price_change_percentage_24h_in_currency: Price;
      price_change_percentage_7d_in_currency: Price;
      price_change_percentage_14d_in_currency: Price;
      price_change_percentage_30d_in_currency: Price;
      price_change_percentage_60d_in_currency: Price;
      price_change_percentage_200d_in_currency: Price;
      price_change_percentage_1y_in_currency: Price;
      market_cap_change_24h_in_currency: Price;
      market_cap_change_percentage_24h_in_currency: Price;
      total_supply: number;
      max_supply?: any;
      circulating_supply: number;
      last_updated: Date;
  }

  export interface PublicInterestStats {
      alexa_rank: number;
      bing_matches?: any;
  }

  export interface CoinDetails {
      id: string;
      symbol: string;
      name: string;
      asset_platform_id?: any;
      block_time_in_minutes: number;
      hashing_algorithm: string;
      categories: string[];
      public_notice?: any;
      additional_notices: any[];
      description: Description;
      links: Links;
      image: Image;
      country_origin: string;
      genesis_date: string;
      sentiment_votes_up_percentage: number;
      sentiment_votes_down_percentage: number;
      ico_data: IcoData;
      market_cap_rank: number;
      coingecko_rank: number;
      coingecko_score: number;
      developer_score: number;
      community_score: number;
      liquidity_score: number;
      public_interest_score: number;
      market_data: MarketData;
      public_interest_stats: PublicInterestStats;
      status_updates: any[];
      last_updated: Date;
  }