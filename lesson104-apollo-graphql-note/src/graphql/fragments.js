import gql from 'graphql-tag';

export const NOTE_FRAGMENT = gql`
  fragment NOTE_FRAGMENT on Note {
    id
    title
    content
  }
`