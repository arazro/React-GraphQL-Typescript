# Frontend code challenge

## Cryptocurrency Single Page App

For the Bondify code challenge we ask you to create a crypto overview and search application. If you’re not familiar with crypto currencies have a look at https://coinmarketcap.com/.

You are going to build the following pages:

1. An overview (main) page with the list/table of 25 coins sorted by the highest market cap
  - You can decide what are relevant data to show in each row
  - This page also contains a search box (search icon can be found in ui-examples folder) that enables users to search based on coin name. Search results will replace the default data
  - You're not required to show the coin icons
  - Search only based on coin name is sufficient
  
Example:

![step 1:](./ui-examples/step1.png?raw=true&width=100)
  
2. A page showing the coin pairs per exhange
  - This page should contains cards of coin pairs and what exchange they belong to
  - This page data is based on one of the 25 coins that we are showing in step 1
  - Showing icons is not required
  - If it's not clear, this might help: https://coinmarketcap.com/currencies/bitcoin/markets
  
Example:

![step 2:](./ui-examples/step2.png?raw=true)

3. Lastly, a detail page of the coin pair data specific to an exchange
  - This will be a detail view of step 2
  
Example:

![step 3:](./ui-examples/step3.png?raw=true)

**How to get started**
 
You will be using React, Typescript and [Apollo Client](https://www.apollographql.com/docs/react/v3.0-beta/). For your convenience we have already configured Apollo Client, so that you can get right to the code. Just fork this repository and you're good to go. The API that you will be using is from bloktap.io. The GraphQL explorer can be accessed via this link https://api.blocktap.io/graphiql.

This example query will shows you all the data that you will be needing:

```
query PageAssets {
  assets(sort: [{marketCapRank: ASC}], page: {limit: 25}) {
    id
    assetName
    assetSymbol
    marketCap
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
```
You can check Blocktap documentation for more help: https://www.blocktap.io/docs 

**We will judge your code based on the following criteria:**

- Knowledge of routing and navigation
- ES6 and React Hooks
- Typescript Typing
- Modularity and reusability of your code (think about components)
- Mobile first responsive implementation of the pages
- Search
- Your explanation if you diverted from the assignment, because you had a nicer way of doing things or if something was impossible to achieve
- *Bonus (optional):* Theme toggle for dark mode

**Time to spend**

We expect you to spend 6-8 hours to complete this challenge. However you can do the assignment whenever you want within a 24 hour window after you forked the repository. When you're finished send us the url of the forked repository with your code.
