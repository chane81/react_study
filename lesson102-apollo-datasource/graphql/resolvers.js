const resolvers = {
  Query: {
    getUser: async (_, { gender }, { dataSources }) =>
      dataSources.RandomUser.getUser(gender),
    getUsers: async (_, { people, gender }, { dataSources }) =>
      dataSources.RandomUser.getUsers(people, gender)
  }
};

module.exports = resolvers;