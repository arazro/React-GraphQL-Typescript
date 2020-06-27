
import { PageMarkets, PageTicker } from '../../utils/types';
export const SELECTED_MARKETS = 'SELECTED_MARKETS';
export const SELECTED_TICKER = 'SELECTED_TICKER';

export const selectMarket = (markets: PageMarkets[]) => {
  return {
    type: SELECTED_MARKETS,
    markets,
  };
}
export const selectTicker = (ticker: PageTicker[]) => {
  return {
    type: SELECTED_TICKER,
    ticker,
  };
}

