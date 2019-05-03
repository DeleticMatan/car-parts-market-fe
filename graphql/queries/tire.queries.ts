import gql from 'graphql-tag';

export const GetTopTires = gql`
  query GetTopTires {
    tires(
      first: 8
      where: { active: true, top: true }
      orderBy: createdAt_DESC
    ) {
      id
      highlight
      top
      condition
      type
      diameter
      width
      height
      city
      brand
      price
      text
    }
  }
`;

export const GetTires = gql`
  query getTires(
    $first: Int
    $skip: Int
    $search: String
    $active: Boolean
    $orderBy: TireOrderByInput
    $condition: [String!]
    $brand: [String!]
    $type: [String!]
    $width: [String!]
    $height: [String!]
    $diameter: [String!]
    $cities: [String!]
  ) {
    tires(
      first: $first
      skip: $skip
      orderBy: $orderBy
      where: {
        AND: [
          {
            active: $active
            condition_in: $condition
            type_in: $type
            brand_in: $brand
            width_in: $width
            height_in: $height
            diameter_in: $diameter
            city_in: $cities
          }
          {
            OR: [
              { type_contains: $search }
              { diameter_contains: $search }
              { width_contains: $search }
              { height_contains: $search }
              { brand_contains: $search }
              { condition_contains: $search }
              { text_contains: $search }
            ]
          }
        ]
      }
    ) {
      id
      highlight
      top
      condition
      type
      diameter
      width
      height
      city
      brand
      price
      text
      user {
        id
      }
    }
    tiresConnection(
      orderBy: $orderBy
      where: {
        AND: [
          {
            active: $active
            condition_in: $condition
            type_in: $type
            brand_in: $brand
            width_in: $width
            height_in: $height
            diameter_in: $diameter
            city_in: $cities
          }
          {
            OR: [
              { type_contains: $search }
              { diameter_contains: $search }
              { width_contains: $search }
              { height_contains: $search }
              { brand_contains: $search }
              { condition_contains: $search }
              { text_contains: $search }
            ]
          }
        ]
      }
    ) {
      aggregate {
        count
      }
    }
  }
`;

export const GetArchivedTires = gql`
  query getArchivedTires {
    tires(where: { active: false }, orderBy: createdAt_DESC) {
      id
      type
      diameter
      width
      brand
    }
  }
`;

export const GetTire = gql`
  query getTire($id: ID!) {
    tires(where: { id: $id }) {
      id
      active
      highlight
      top
      type
      diameter
      width
      height
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
      user {
        id
      }
    }
  }
`;
