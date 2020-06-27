import gql from 'graphql-tag'

export const GET_COINS_QUERY = gql`
query PageAssets($limit: Int,$coin: String ) {
  assets(sort: [{marketCapRank: ASC}], page: {limit: $limit},filter: {
    assetName: {
      _like: $coin 
    }
  }) {
    id
    assetName
    assetSymbol
    marketCap
    currentSupply
    marketCapRank
    markets {
      marketSymbol
      baseSymbol
      exchangeSymbol
      ticker {
        lastPrice
        highPrice
        lowPrice
        percentChange
      }
    }
  }
}
`
