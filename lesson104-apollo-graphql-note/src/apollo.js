import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { withClientState } from 'apollo-link-state';
import { ApolloLink } from 'apollo-link';
import { importSchema } from 'graphql-import';
import { defaults, resolvers } from './resolvers';

const typeDefs = importSchema('./schema.graphql');

//import { typeDefs, defaults, resolvers } from './clientState.gql';

const cache = new InMemoryCache();

const stateLink = withClientState({
  cache,
  typeDefs,
  defaults,
  resolvers
});

const client = new ApolloClient({
  cache,
  link: ApolloLink.from([stateLink])
}).initQueryManager();

export default client;