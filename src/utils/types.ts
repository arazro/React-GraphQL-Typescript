
export interface Assets {
  id: number;
  assetName: string | null;
  assetSymbol: string | null;
  marketCap: string | null;
  currentSupply: number | 0;
  marketCapRank: number | 0;
  markets: (PageMarkets | null)[];
}

export interface assets {
  assets: (Assets | null)[];
}

export interface PageMarkets {
  marketSymbol: string | null;
  baseSymbol: string | null;
  exchangeSymbol: string | null;
  ticker: PageTicker;
}

export interface PageTicker {
  lastPrice: number | 0;
  highPrice: number | 0;
  lowPrice: number | 0;
  percentChange: number | 0;
}

export interface GetAssetsVariables {
  limit?: number;
  coin?: String;
}
export interface dispatchType {
  type: string,
  markets: PageMarkets[]
}

