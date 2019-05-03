import gql from 'graphql-tag';

export const GetTopAds = gql`
  query GetTopAds {
    ads(first: 8, where: { active: true, top: true }, orderBy: createdAt_DESC) {
      id
      brand
      model
      category
      subcategory
      condition
      price
      year
      yearTo
      text
      city
      adType
      highlight
      top
    }
  }
`;

export const GetPromoAds = gql`
  query getPromoAds {
    ads(
      first: 8
      where: { active: true, highlight: true }
      orderBy: createdAt_DESC
    ) {
      id
      subcategory
      price
      brand
      model
      label
      year
      yearTo
    }
  }
`;

export const GetFirstAds = gql`
  query getFirstAds {
    ads(first: 8, where: { active: true }, orderBy: createdAt_DESC) {
      id
      subcategory
      price
      brand
      model
      label
      year
      yearTo
    }
  }
`;

export const GetAds = gql`
  query getAds(
    $first: Int
    $skip: Int
    $search: String
    $active: Boolean
    $orderBy: AdOrderByInput
    $condition: String
    $brand: String
    $model: String
    $type: String
    $category: String
    $subcategory: String
    $adType: String
    $getYearFrom: String
    $getYearTo: String
    $cities: [String!]
  ) {
    ads(
      first: $first
      skip: $skip
      where: {
        AND: [
          {
            year_gte: $getYearFrom
            year_lt: $getYearTo
            yearTo_lte: $getYearTo
            yearTo_gt: $getYearFrom
            active: $active
            adType: $adType
            condition: $condition
            type: $type
            brand: $brand
            model: $model
            category: $category
            subcategory: $subcategory
            city_in: $cities
          }
          {
            OR: [
              { type_contains: $search }
              { subcategory_contains: $search }
              { category_contains: $search }
              { model_contains: $search }
              { brand_contains: $search }
              { condition_contains: $search }
              { text_contains: $search }
            ]
          }
        ]
      }
      orderBy: $orderBy
    ) {
      id
      brand
      model
      category
      subcategory
      condition
      price
      year
      yearTo
      text
      city
      adType
      highlight
      top
    }
    adsConnection(
      where: {
        AND: [
          {
            year_gte: $getYearFrom
            year_lt: $getYearTo
            yearTo_lte: $getYearTo
            yearTo_gt: $getYearFrom
            active: $active
            adType: $adType
            condition: $condition
            type: $type
            brand: $brand
            model: $model
            category: $category
            subcategory: $subcategory
            city_in: $cities
          }
          {
            OR: [
              { type_contains: $search }
              { subcategory_contains: $search }
              { category_contains: $search }
              { model_contains: $search }
              { brand_contains: $search }
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

export const GetArchivedAds = gql`
  query getArchivedAds {
    ads(where: { active: false }, orderBy: createdAt_DESC) {
      id
      brand
      model
      category
      condition
    }
  }
`;

export const GetAd = gql`
  query getAd($id: ID!) {
    ads(where: { id: $id }) {
      id
      active
      highlight
      top
      adType
      type
      brand
      model
      label
      category
      subcategory
      condition
      year
      yearTo
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
