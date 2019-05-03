import gql from 'graphql-tag';

export const Contact = gql`
  mutation contact($name: String!, $email: String!, $message: String!) {
    contact(data: { name: $name, email: $email, message: $message })
  }
`;
