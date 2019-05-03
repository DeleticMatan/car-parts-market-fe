import gql from 'graphql-tag';

export const CreateTire = gql`
  mutation createTire(
    $active: Boolean!
    $highlight: Boolean!
    $type: String!
    $diameter: String
    $width: String
    $height: String
    $brand: String
    $condition: String
    $price: Int!
    $text: String
    $phone: String!
    $phone2: String
    $name: String
    $email: String!
    $city: String!
    $expires: Int!
    $userId: ID
  ) {
    createTire(
      data: {
        active: $active
        highlight: $highlight
        userId: $userId
        type: $type
        diameter: $diameter
        width: $width
        height: $height
        brand: $brand
        condition: $condition
        price: $price
        text: $text
        phone: $phone
        phone2: $phone2
        name: $name
        email: $email
        city: $city
        expires: $expires
      }
    ) {
      id
      type
      diameter
      width
      brand
    }
  }
`;

export const UpdateTire = gql`
  mutation updateTire(
    $id: ID!
    $type: String!
    $diameter: String
    $width: String
    $height: String
    $brand: String
    $condition: String
    $price: Int
    $text: String
    $phone: String
    $phone2: String
    $name: String
    $email: String
    $city: String
  ) {
    updateTire(
      id: $id
      data: {
        type: $type
        diameter: $diameter
        width: $width
        height: $height
        brand: $brand
        condition: $condition
        price: $price
        text: $text
        phone: $phone
        phone2: $phone2
        name: $name
        email: $email
        city: $city
      }
    ) {
      id
      type
      diameter
      width
      brand
    }
  }
`;
export const DeleteTire = gql`
  mutation deleteTire($id: ID!) {
    deleteTire(id: $id) {
      id
    }
  }
`;

export const ArchiveTire = gql`
  mutation archiveTire($id: ID!) {
    updateTire(id: $id, data: { active: false }) {
      id
      type
      diameter
      width
      brand
    }
  }
`;

export const ActivateTire = gql`
  mutation activateTire($id: ID!) {
    updateTire(id: $id, data: { active: true }) {
      id
      type
      diameter
      width
      brand
    }
  }
`;
