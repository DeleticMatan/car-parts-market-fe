import gql from 'graphql-tag';

export const CreateUser = gql`
  mutation createUser(
    $active: Boolean!
    $access: Int!
    $name: String!
    $email: String!
    $password: String!
    $phone: String!
    $phone2: String
    $city: String!
  ) {
    createUser(
      data: {
        active: $active
        access: $access
        name: $name
        email: $email
        password: $password
        phone: $phone
        phone2: $phone2
        city: $city
      }
    ) {
      user {
        id
      }
    }
  }
`;

export const UpdateUser = gql`
  mutation updateUser(
    $id: ID!
    $name: String
    $email: String
    $password: String
    $phone: String
    $phone2: String
    $city: String
  ) {
    updateUser(
      id: $id
      data: {
        name: $name
        email: $email
        password: $password
        phone: $phone
        phone2: $phone2
        city: $city
      }
    ) {
      id
      name
      email
      phone
      phone2
      city
    }
  }
`;

export const UpdatePassword = gql`
  mutation updatePassword($id: ID!, $password: String!) {
    updateUser(id: $id, data: { password: $password }) {
      id
    }
  }
`;

export const ResetPassword = gql`
  mutation resetPassword($email: String!) {
    resetPassword(data: { email: $email }) {
      active
    }
  }
`;

export const ResetComplete = gql`
  mutation resetComplete($token: String!, $password: String!) {
    resetComplete(data: { token: $token, password: $password }) {
      active
    }
  }
`;

export const ActivateUser = gql`
  mutation activateUser($token: String!) {
    activateUser(data: { token: $token }) {
      active
    }
  }
`;

export const Login = gql`
  mutation login($email: String!, $password: String!) {
    login(data: { email: $email, password: $password }) {
      user {
        id
        access
        active
        email
        name
        phone
        phone2
        address
        city
      }
      token
    }
  }
`;
