import { NOTE_FRAGMENT } from './graphql/fragments.js'
import { GET_NOTES } from './graphql/queries';
//import gql from "graphql-tag";

export const defaults = {
    notes: [
      {
        __typename: 'Note',
        id: 1,
        title: 'First',
        content: 'TEST'
      },
      {
        __typename: 'Note',
        id: 2,
        title: 'te222',
        content: 'dd222'
      },
      {
        __typename: 'Note',
        id: 3,
        title: 'hh333',
        content: 'zz333'
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
    editNote(id: Int!, title: String, content: String): Note
  }
  type Note {
    id: Int!
    title: String!
    content: String!
  }
  `
];

export const resolvers = {
  Query: {
    note: (_, variables, { cache, getCacheKey }) => {
      const id = cache.config.dataIdFromObject({
        __typename: 'Note',
        id: variables.id
      });
      
      const note = cache.readFragment({fragment: NOTE_FRAGMENT, id});
      //const note = cache.readQuery({ query: GET_NOTES });
      
      return note;
    }
  },
  Mutation: {
    createNote: (_, variables, { cache, getCacheKey }) => {
      const { notes } = cache.readQuery({ query: GET_NOTES });
      const { title, content } = variables;

      console.log(notes);

      const newNote = {
        __typename: 'Note',
        title,
        content,
        id: notes.length + 1
      };

      cache.writeData({
        data: {
          notes: [newNote, ...notes]
        }
      });

      return newNote;
    },
    editNote: (_, {id, title, content}, { cache }) => {
      const noteId = cache.config.dataIdFromObject({
        __typename: 'Note',
        id
      });

      const note = cache.readFragment({fragment: NOTE_FRAGMENT, id: noteId});
      const updateNote = {
        ...note,
        title,
        content
      };

      cache.writeFragment({
        id: noteId,
        fragment: NOTE_FRAGMENT,
        data: updateNote
      });

      return updateNote;
    }
  }
};