import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  //url: "https://movieql-osezlvyqsg.now.sh/"
  url: "https://fakerql.com/graphql"
});

export default client;