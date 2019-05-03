import gql from 'graphql-tag';

export const GetUser = gql`
  query getUser($id: ID!) {
    users(where: { id: $id }) {
      id
      active
      email
      name
      phone
      phone2
      address
      city
    }
  }
`;

export const GetUserAds = gql`
  query getUserAds($id: ID!) {
    users(where: { id: $id }) {
      id
      active
      email
      name
      phone
      phone2
      address
      city
      ads {
        id
        active
        brand
        model
        category
        subcategory
        condition
        price
        year
        yearTo
        text
        createdAt
        adType
        city
        highlight
      }
      tires {
        id
        active
        highlight
        condition
        type
        diameter
        width
        height
        city
        brand
        price
        text
        createdAt
      }
      rims {
        id
        active
        et
        type
        diameter
        highlight
        holes
        condition
        width
        brand
        price
        city
        text
        createdAt
      }
    }
  }
`;
