export const defaults = {
  notes: [
    {
      __typename: 'Note',
      id: 1,
      title: 'First',
      content: 'TEST'
    }
  ]
};

export const typeDefs = [
  `
  schema {
    query: Query
    mutation: Mutation
  }
  type Query {
    notes: [Note]!
    note(id: Int!): Note
  }
  type Mutation {
    createNote(title: String!, content: String!): Note
    editNote(id: String!, title: String!, content: String!): Note
  }
  type Note {
    id: Int!
    title: String!
    conetnt: String!
  }
  `
];

export const resolvers = {
  Query: {
    notes: (_, variables, { cache, getCacheKey }) => {
      const id = getCacheKey({__typename: 'Note', id: variables.id})
      console.log(id);
      return null;
    }
  }
};