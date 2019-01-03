import gql from "graphql-tag";
import * as fragments from './fragments';

export const GET_NOTES = gql`
  query {
    notes @client {
      id
      title
      content
    }
  }
`;

// export const GET_NOTE = gql`
//   query note($id: Int!) {
//     note(id: $id) @client {
//       id
//       title
//       conetnt
//     }
//   }
// `;

// export const GET_NOTE = gql`
//   query getNote($id: Int!) {
//     note(id: $id) {
//       ...NOTE_FRAGMENT
//     }
//   }
//   ${fragments.NOTE_FRAGMENT}
// `;
