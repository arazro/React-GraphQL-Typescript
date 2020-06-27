import React from "react";
import ReactDOM from "react-dom";
import App from "./App"
import * as serviceWorker from "./serviceWorker";
import { ApolloClient } from 'apollo-client';
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';
import { Provider } from 'react-redux'
import { store } from "./redux/store/store";
import './assets/scss/styles.scss'


const cache = new InMemoryCache();
const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
  link: new HttpLink({
    uri: 'https://api.blocktap.io/graphql',
  }),

});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <App />
      </Provider>

    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
serviceWorker.unregister();
