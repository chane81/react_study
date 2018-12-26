import ApolloClient from 'apollo-boost';

const client = new ApolloClient({  
  uri: "http://localhost:8000"
}).initQueryManager();

export default client;