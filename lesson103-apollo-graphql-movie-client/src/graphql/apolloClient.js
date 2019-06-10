import { HttpLink } from 'apollo-boost';
import { ApolloClient } from "apollo-client";
import { ApolloLink } from "apollo-link";
import { InMemoryCache } from "apollo-cache-inmemory";
import { typeDefs, defaults, resolvers } from "./clientState";
import { withClientState } from 'apollo-link-state';

const cache = new InMemoryCache();


const stateLink = withClientState({
  cache,
  typeDefs,
  defaults,
  resolvers
});

const httpLink = new HttpLink({
  uri: "http://localhost:8000"
})

// const client = new ApolloClient({  
//   uri: "http://localhost:8000"
// }).initQueryManager();

const client = new ApolloClient({
  link: ApolloLink.from([httpLink, stateLink]),
  cache
}).initQueryManager();

export default client;