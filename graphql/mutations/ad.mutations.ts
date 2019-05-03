import gql from 'graphql-tag';

export const CreateAd = gql`
  mutation createAd(
    $active: Boolean!
    $highlight: Boolean!
    $adType: String
    $type: String!
    $brand: String
    $model: String
    $label: String
    $category: String
    $subcategory: String
    $condition: String
    $year: String
    $yearTo: String
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
    createAd(
      data: {
        active: $active
        highlight: $highlight
        userId: $userId
        adType: $adType
        type: $type
        brand: $brand
        model: $model
        label: $label
        category: $category
        subcategory: $subcategory
        condition: $condition
        year: $year
        yearTo: $yearTo
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
      brand
      model
      category
      condition
    }
  }
`;

export const UpdateAd = gql`
  mutation updateAd(
    $id: ID!
    $adType: String
    $type: String
    $brand: String
    $model: String
    $label: String
    $category: String
    $subcategory: String
    $condition: String
    $year: String
    $yearTo: String
    $price: Int
    $text: String
    $phone: String
    $phone2: String
    $name: String
    $email: String
    $city: String
  ) {
    updateAd(
      id: $id
      data: {
        adType: $adType
        type: $type
        brand: $brand
        model: $model
        label: $label
        category: $category
        subcategory: $subcategory
        condition: $condition
        year: $year
        yearTo: $yearTo
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
      brand
      model
      category
      condition
    }
  }
`;
export const DeleteAd = gql`
  mutation deleteAd($id: ID!) {
    deleteAd(id: $id) {
      id
    }
  }
`;

export const ArchiveAd = gql`
  mutation archiveAd($id: ID!) {
    updateAd(id: $id, data: { active: false }) {
      id
      brand
      model
      category
      condition
    }
  }
`;

export const ActivateAd = gql`
  mutation activateAd($id: ID!) {
    updateAd(id: $id, data: { active: true }) {
      id
      brand
      model
      category
      condition
    }
  }
`;
