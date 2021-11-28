export interface platform{
  id: number;
  name: string;
  slug: string;
  symbol: string;
  token_address: string;
}

export interface quote{
  fully_diluted_market_cap: number;
  last_updated: string;
  market_cap: number;
  market_cap_dominance: number;
  percent_change_1h: number;
  percent_change_7d: number;
  percent_change_24h: number;
  percent_change_30d: number;
  percent_change_60d: number;
  percent_change_90d: number;
  price: number;
  volume_24h: number;
  volume_change_24h: number;
}


export interface CoinItem {
  id: number;
  name: string;
  symbol: string;
  slug: string;
  cmc_rank: number;
  num_market_pairs: number;
  circulating_supply: number;
  total_supply: number;
  market_cap_by_total_supply: number;
  max_supply: number;
  last_updated: string;
  date_added: string;
  tags: string[];
  platform: platform;
  quote:{
    USD: quote
  }
}

