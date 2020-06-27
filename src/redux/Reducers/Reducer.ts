
export const repositoryReducer = (state: any, action: any) => {

  switch (action.type) {
    case 'SELECTED_MARKETS':
      return {
        ...state,
        markets: action.markets

      }
    case 'SELECTED_TICKER':
      return {
        ...state,
        ticker: action.ticker
      }
    default:
      return state;
  }
}
