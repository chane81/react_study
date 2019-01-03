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


export const resolvers = {
  Query: {
    notes: (_, variables, { cache, getCacheKey }) => {
      const id = getCacheKey({__typename: 'Note', id: variables.id})
      console.log(id);
      return null;
    }
  }
};