import gql from 'graphql-tag';

export const GetMyAds = gql`
  query getMyAds {
    me {
      id
      email
      name
      city
      phone
      phone2
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

export const GetMyInfo = gql`
  query getMyInfo {
    me {
      id
      email
      name
      city
      phone
      phone2
    }
  }
`;
