import gql from 'graphql-tag';

// { holes_contains: $search }

export const GetTopRims = gql`
  query GetTopRims {
    rims(
      first: 8
      where: { active: true, top: true }
      orderBy: createdAt_DESC
    ) {
      id
      et
      type
      diameter
      highlight
      top
      holes
      condition
      width
      brand
      price
      city
      text
    }
  }
`;

export const GetRims = gql`
  query getRims(
    $first: Int
    $skip: Int
    $search: String
    $active: Boolean
    $orderBy: RimOrderByInput
    $condition: [String!]
    $brand: [String!]
    $type: [String!]
    $width: [String!]
    $holes: [String!]
    $diameter: [String!]
    $cities: [String!]
    $et: String
  ) {
    rims(
      first: $first
      skip: $skip
      where: {
        AND: [
          {
            active: $active
            condition_in: $condition
            type_in: $type
            brand_in: $brand
            width_in: $width
            holes_in: $holes
            diameter_in: $diameter
            city_in: $cities
            et_starts_with: $et
            et_ends_with: $et
          }
          {
            OR: [
              { type_contains: $search }
              { diameter_contains: $search }
              { width_contains: $search }
              { brand_contains: $search }
              { holes_contains: $search }
              { condition_contains: $search }
              { text_contains: $search }
            ]
          }
        ]
      }
      orderBy: $orderBy
    ) {
      id
      et
      type
      diameter
      highlight
      top
      holes
      condition
      width
      brand
      price
      city
      text
    }
    rimsConnection(
      where: {
        AND: [
          {
            active: $active
            condition_in: $condition
            type_in: $type
            brand_in: $brand
            width_in: $width
            holes_in: $holes
            diameter_in: $diameter
            city_in: $cities
          }
          {
            OR: [
              { type_contains: $search }
              { diameter_contains: $search }
              { width_contains: $search }
              { brand_contains: $search }
              { holes_contains: $search }
              { condition_contains: $search }
              { text_contains: $search }
            ]
          }
        ]
      }
      orderBy: $orderBy
    ) {
      aggregate {
        count
      }
    }
  }
`;

export const GetRim = gql`
  query getRim($id: ID!) {
    rims(where: { id: $id }) {
      id
      et
      active
      highlight
      top
      type
      diameter
      width
      holes
      brand
      condition
      price
      text
      phone
      phone2
      name
      email
      city
      expires
      et
      user {
        id
      }
    }
  }
`;
