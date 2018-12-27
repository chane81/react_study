const { ApolloServer, gql } = require('apollo-server');
const typeDefs  = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers.js');
const RandomUser = require('./graphql/RandomUser.datasource.js');

console.log(RandomUser);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    RandomUser: new RandomUser()
  })
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
