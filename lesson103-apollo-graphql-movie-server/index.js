import { GraphQLServer} from "graphql-yoga";
import resolvers from "./graphql/resolvers"
/*
// 더미 데이터 테스트용
import resolvers from "./graphql-dummy-data/resolvers"

// 더미 데이터 테스트용
const server = new GraphQLServer({
  typeDefs: "./graphql-dummy-data/schema.graphql",
  resolvers
});
*/

const server = new GraphQLServer({
  typeDefs: "./graphql/schema.graphql",
  resolvers
});

server.start(() => console.log("Graphql Server Running"));