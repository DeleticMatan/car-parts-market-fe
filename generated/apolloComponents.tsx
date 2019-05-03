export type Maybe<T> = T | null;

export interface UserWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<UserWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<UserWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<UserWhereInput[]>;

  id?: Maybe<string>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<string>;
  /** All values that are contained in given list. */
  id_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<string>;
  /** All values greater than the given value. */
  id_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<string>;
  /** All values containing the given string. */
  id_contains?: Maybe<string>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<string>;

  access?: Maybe<number>;
  /** All values that are not equal to given value. */
  access_not?: Maybe<number>;
  /** All values that are contained in given list. */
  access_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  access_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  access_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  access_lte?: Maybe<number>;
  /** All values greater than the given value. */
  access_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  access_gte?: Maybe<number>;

  active?: Maybe<boolean>;
  /** All values that are not equal to given value. */
  active_not?: Maybe<boolean>;

  name?: Maybe<string>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<string>;
  /** All values that are contained in given list. */
  name_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  name_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  name_lte?: Maybe<string>;
  /** All values greater than the given value. */
  name_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<string>;
  /** All values containing the given string. */
  name_contains?: Maybe<string>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<string>;

  email?: Maybe<string>;
  /** All values that are not equal to given value. */
  email_not?: Maybe<string>;
  /** All values that are contained in given list. */
  email_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  email_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  email_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  email_lte?: Maybe<string>;
  /** All values greater than the given value. */
  email_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  email_gte?: Maybe<string>;
  /** All values containing the given string. */
  email_contains?: Maybe<string>;
  /** All values not containing the given string. */
  email_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  email_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  email_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  email_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  email_not_ends_with?: Maybe<string>;

  password?: Maybe<string>;
  /** All values that are not equal to given value. */
  password_not?: Maybe<string>;
  /** All values that are contained in given list. */
  password_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  password_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  password_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  password_lte?: Maybe<string>;
  /** All values greater than the given value. */
  password_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  password_gte?: Maybe<string>;
  /** All values containing the given string. */
  password_contains?: Maybe<string>;
  /** All values not containing the given string. */
  password_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  password_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  password_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  password_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  password_not_ends_with?: Maybe<string>;

  address?: Maybe<string>;
  /** All values that are not equal to given value. */
  address_not?: Maybe<string>;
  /** All values that are contained in given list. */
  address_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  address_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  address_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  address_lte?: Maybe<string>;
  /** All values greater than the given value. */
  address_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  address_gte?: Maybe<string>;
  /** All values containing the given string. */
  address_contains?: Maybe<string>;
  /** All values not containing the given string. */
  address_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  address_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  address_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  address_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  address_not_ends_with?: Maybe<string>;

  city?: Maybe<string>;
  /** All values that are not equal to given value. */
  city_not?: Maybe<string>;
  /** All values that are contained in given list. */
  city_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  city_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  city_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  city_lte?: Maybe<string>;
  /** All values greater than the given value. */
  city_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  city_gte?: Maybe<string>;
  /** All values containing the given string. */
  city_contains?: Maybe<string>;
  /** All values not containing the given string. */
  city_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  city_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  city_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  city_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  city_not_ends_with?: Maybe<string>;

  phone?: Maybe<string>;
  /** All values that are not equal to given value. */
  phone_not?: Maybe<string>;
  /** All values that are contained in given list. */
  phone_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  phone_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  phone_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  phone_lte?: Maybe<string>;
  /** All values greater than the given value. */
  phone_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  phone_gte?: Maybe<string>;
  /** All values containing the given string. */
  phone_contains?: Maybe<string>;
  /** All values not containing the given string. */
  phone_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  phone_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  phone_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  phone_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  phone_not_ends_with?: Maybe<string>;

  phone2?: Maybe<string>;
  /** All values that are not equal to given value. */
  phone2_not?: Maybe<string>;
  /** All values that are contained in given list. */
  phone2_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  phone2_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  phone2_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  phone2_lte?: Maybe<string>;
  /** All values greater than the given value. */
  phone2_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  phone2_gte?: Maybe<string>;
  /** All values containing the given string. */
  phone2_contains?: Maybe<string>;
  /** All values not containing the given string. */
  phone2_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  phone2_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  phone2_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  phone2_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  phone2_not_ends_with?: Maybe<string>;

  passwordToken?: Maybe<string>;
  /** All values that are not equal to given value. */
  passwordToken_not?: Maybe<string>;
  /** All values that are contained in given list. */
  passwordToken_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  passwordToken_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  passwordToken_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  passwordToken_lte?: Maybe<string>;
  /** All values greater than the given value. */
  passwordToken_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  passwordToken_gte?: Maybe<string>;
  /** All values containing the given string. */
  passwordToken_contains?: Maybe<string>;
  /** All values not containing the given string. */
  passwordToken_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  passwordToken_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  passwordToken_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  passwordToken_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  passwordToken_not_ends_with?: Maybe<string>;

  createdAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<DateTime>;

  updatedAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<DateTime>;

  ads_every?: Maybe<AdWhereInput>;

  ads_some?: Maybe<AdWhereInput>;

  ads_none?: Maybe<AdWhereInput>;

  rims_every?: Maybe<RimWhereInput>;

  rims_some?: Maybe<RimWhereInput>;

  rims_none?: Maybe<RimWhereInput>;

  tires_every?: Maybe<TireWhereInput>;

  tires_some?: Maybe<TireWhereInput>;

  tires_none?: Maybe<TireWhereInput>;
}

export interface AdWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<AdWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<AdWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<AdWhereInput[]>;

  id?: Maybe<string>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<string>;
  /** All values that are contained in given list. */
  id_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<string>;
  /** All values greater than the given value. */
  id_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<string>;
  /** All values containing the given string. */
  id_contains?: Maybe<string>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<string>;

  active?: Maybe<boolean>;
  /** All values that are not equal to given value. */
  active_not?: Maybe<boolean>;

  highlight?: Maybe<boolean>;
  /** All values that are not equal to given value. */
  highlight_not?: Maybe<boolean>;

  top?: Maybe<boolean>;
  /** All values that are not equal to given value. */
  top_not?: Maybe<boolean>;

  adType?: Maybe<string>;
  /** All values that are not equal to given value. */
  adType_not?: Maybe<string>;
  /** All values that are contained in given list. */
  adType_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  adType_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  adType_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  adType_lte?: Maybe<string>;
  /** All values greater than the given value. */
  adType_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  adType_gte?: Maybe<string>;
  /** All values containing the given string. */
  adType_contains?: Maybe<string>;
  /** All values not containing the given string. */
  adType_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  adType_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  adType_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  adType_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  adType_not_ends_with?: Maybe<string>;

  type?: Maybe<string>;
  /** All values that are not equal to given value. */
  type_not?: Maybe<string>;
  /** All values that are contained in given list. */
  type_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  type_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  type_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  type_lte?: Maybe<string>;
  /** All values greater than the given value. */
  type_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  type_gte?: Maybe<string>;
  /** All values containing the given string. */
  type_contains?: Maybe<string>;
  /** All values not containing the given string. */
  type_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  type_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  type_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  type_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  type_not_ends_with?: Maybe<string>;

  brand?: Maybe<string>;
  /** All values that are not equal to given value. */
  brand_not?: Maybe<string>;
  /** All values that are contained in given list. */
  brand_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  brand_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  brand_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  brand_lte?: Maybe<string>;
  /** All values greater than the given value. */
  brand_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  brand_gte?: Maybe<string>;
  /** All values containing the given string. */
  brand_contains?: Maybe<string>;
  /** All values not containing the given string. */
  brand_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  brand_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  brand_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  brand_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  brand_not_ends_with?: Maybe<string>;

  model?: Maybe<string>;
  /** All values that are not equal to given value. */
  model_not?: Maybe<string>;
  /** All values that are contained in given list. */
  model_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  model_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  model_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  model_lte?: Maybe<string>;
  /** All values greater than the given value. */
  model_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  model_gte?: Maybe<string>;
  /** All values containing the given string. */
  model_contains?: Maybe<string>;
  /** All values not containing the given string. */
  model_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  model_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  model_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  model_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  model_not_ends_with?: Maybe<string>;

  label?: Maybe<string>;
  /** All values that are not equal to given value. */
  label_not?: Maybe<string>;
  /** All values that are contained in given list. */
  label_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  label_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  label_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  label_lte?: Maybe<string>;
  /** All values greater than the given value. */
  label_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  label_gte?: Maybe<string>;
  /** All values containing the given string. */
  label_contains?: Maybe<string>;
  /** All values not containing the given string. */
  label_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  label_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  label_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  label_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  label_not_ends_with?: Maybe<string>;

  category?: Maybe<string>;
  /** All values that are not equal to given value. */
  category_not?: Maybe<string>;
  /** All values that are contained in given list. */
  category_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  category_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  category_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  category_lte?: Maybe<string>;
  /** All values greater than the given value. */
  category_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  category_gte?: Maybe<string>;
  /** All values containing the given string. */
  category_contains?: Maybe<string>;
  /** All values not containing the given string. */
  category_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  category_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  category_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  category_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  category_not_ends_with?: Maybe<string>;

  subcategory?: Maybe<string>;
  /** All values that are not equal to given value. */
  subcategory_not?: Maybe<string>;
  /** All values that are contained in given list. */
  subcategory_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  subcategory_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  subcategory_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  subcategory_lte?: Maybe<string>;
  /** All values greater than the given value. */
  subcategory_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  subcategory_gte?: Maybe<string>;
  /** All values containing the given string. */
  subcategory_contains?: Maybe<string>;
  /** All values not containing the given string. */
  subcategory_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  subcategory_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  subcategory_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  subcategory_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  subcategory_not_ends_with?: Maybe<string>;

  condition?: Maybe<string>;
  /** All values that are not equal to given value. */
  condition_not?: Maybe<string>;
  /** All values that are contained in given list. */
  condition_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  condition_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  condition_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  condition_lte?: Maybe<string>;
  /** All values greater than the given value. */
  condition_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  condition_gte?: Maybe<string>;
  /** All values containing the given string. */
  condition_contains?: Maybe<string>;
  /** All values not containing the given string. */
  condition_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  condition_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  condition_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  condition_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  condition_not_ends_with?: Maybe<string>;

  year?: Maybe<string>;
  /** All values that are not equal to given value. */
  year_not?: Maybe<string>;
  /** All values that are contained in given list. */
  year_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  year_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  year_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  year_lte?: Maybe<string>;
  /** All values greater than the given value. */
  year_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  year_gte?: Maybe<string>;
  /** All values containing the given string. */
  year_contains?: Maybe<string>;
  /** All values not containing the given string. */
  year_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  year_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  year_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  year_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  year_not_ends_with?: Maybe<string>;

  yearTo?: Maybe<string>;
  /** All values that are not equal to given value. */
  yearTo_not?: Maybe<string>;
  /** All values that are contained in given list. */
  yearTo_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  yearTo_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  yearTo_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  yearTo_lte?: Maybe<string>;
  /** All values greater than the given value. */
  yearTo_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  yearTo_gte?: Maybe<string>;
  /** All values containing the given string. */
  yearTo_contains?: Maybe<string>;
  /** All values not containing the given string. */
  yearTo_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  yearTo_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  yearTo_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  yearTo_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  yearTo_not_ends_with?: Maybe<string>;

  price?: Maybe<number>;
  /** All values that are not equal to given value. */
  price_not?: Maybe<number>;
  /** All values that are contained in given list. */
  price_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  price_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  price_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  price_lte?: Maybe<number>;
  /** All values greater than the given value. */
  price_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  price_gte?: Maybe<number>;

  text?: Maybe<string>;
  /** All values that are not equal to given value. */
  text_not?: Maybe<string>;
  /** All values that are contained in given list. */
  text_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  text_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  text_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  text_lte?: Maybe<string>;
  /** All values greater than the given value. */
  text_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  text_gte?: Maybe<string>;
  /** All values containing the given string. */
  text_contains?: Maybe<string>;
  /** All values not containing the given string. */
  text_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  text_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  text_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  text_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  text_not_ends_with?: Maybe<string>;

  phone?: Maybe<string>;
  /** All values that are not equal to given value. */
  phone_not?: Maybe<string>;
  /** All values that are contained in given list. */
  phone_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  phone_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  phone_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  phone_lte?: Maybe<string>;
  /** All values greater than the given value. */
  phone_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  phone_gte?: Maybe<string>;
  /** All values containing the given string. */
  phone_contains?: Maybe<string>;
  /** All values not containing the given string. */
  phone_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  phone_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  phone_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  phone_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  phone_not_ends_with?: Maybe<string>;

  phone2?: Maybe<string>;
  /** All values that are not equal to given value. */
  phone2_not?: Maybe<string>;
  /** All values that are contained in given list. */
  phone2_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  phone2_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  phone2_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  phone2_lte?: Maybe<string>;
  /** All values greater than the given value. */
  phone2_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  phone2_gte?: Maybe<string>;
  /** All values containing the given string. */
  phone2_contains?: Maybe<string>;
  /** All values not containing the given string. */
  phone2_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  phone2_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  phone2_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  phone2_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  phone2_not_ends_with?: Maybe<string>;

  name?: Maybe<string>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<string>;
  /** All values that are contained in given list. */
  name_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  name_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  name_lte?: Maybe<string>;
  /** All values greater than the given value. */
  name_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<string>;
  /** All values containing the given string. */
  name_contains?: Maybe<string>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<string>;

  email?: Maybe<string>;
  /** All values that are not equal to given value. */
  email_not?: Maybe<string>;
  /** All values that are contained in given list. */
  email_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  email_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  email_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  email_lte?: Maybe<string>;
  /** All values greater than the given value. */
  email_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  email_gte?: Maybe<string>;
  /** All values containing the given string. */
  email_contains?: Maybe<string>;
  /** All values not containing the given string. */
  email_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  email_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  email_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  email_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  email_not_ends_with?: Maybe<string>;

  city?: Maybe<string>;
  /** All values that are not equal to given value. */
  city_not?: Maybe<string>;
  /** All values that are contained in given list. */
  city_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  city_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  city_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  city_lte?: Maybe<string>;
  /** All values greater than the given value. */
  city_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  city_gte?: Maybe<string>;
  /** All values containing the given string. */
  city_contains?: Maybe<string>;
  /** All values not containing the given string. */
  city_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  city_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  city_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  city_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  city_not_ends_with?: Maybe<string>;

  expires?: Maybe<number>;
  /** All values that are not equal to given value. */
  expires_not?: Maybe<number>;
  /** All values that are contained in given list. */
  expires_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  expires_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  expires_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  expires_lte?: Maybe<number>;
  /** All values greater than the given value. */
  expires_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  expires_gte?: Maybe<number>;

  createdAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<DateTime>;

  updatedAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<DateTime>;

  user?: Maybe<UserWhereInput>;
}

export interface RimWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<RimWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<RimWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<RimWhereInput[]>;

  id?: Maybe<string>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<string>;
  /** All values that are contained in given list. */
  id_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<string>;
  /** All values greater than the given value. */
  id_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<string>;
  /** All values containing the given string. */
  id_contains?: Maybe<string>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<string>;

  active?: Maybe<boolean>;
  /** All values that are not equal to given value. */
  active_not?: Maybe<boolean>;

  highlight?: Maybe<boolean>;
  /** All values that are not equal to given value. */
  highlight_not?: Maybe<boolean>;

  top?: Maybe<boolean>;
  /** All values that are not equal to given value. */
  top_not?: Maybe<boolean>;

  type?: Maybe<string>;
  /** All values that are not equal to given value. */
  type_not?: Maybe<string>;
  /** All values that are contained in given list. */
  type_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  type_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  type_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  type_lte?: Maybe<string>;
  /** All values greater than the given value. */
  type_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  type_gte?: Maybe<string>;
  /** All values containing the given string. */
  type_contains?: Maybe<string>;
  /** All values not containing the given string. */
  type_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  type_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  type_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  type_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  type_not_ends_with?: Maybe<string>;

  diameter?: Maybe<string>;
  /** All values that are not equal to given value. */
  diameter_not?: Maybe<string>;
  /** All values that are contained in given list. */
  diameter_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  diameter_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  diameter_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  diameter_lte?: Maybe<string>;
  /** All values greater than the given value. */
  diameter_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  diameter_gte?: Maybe<string>;
  /** All values containing the given string. */
  diameter_contains?: Maybe<string>;
  /** All values not containing the given string. */
  diameter_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  diameter_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  diameter_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  diameter_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  diameter_not_ends_with?: Maybe<string>;

  width?: Maybe<string>;
  /** All values that are not equal to given value. */
  width_not?: Maybe<string>;
  /** All values that are contained in given list. */
  width_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  width_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  width_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  width_lte?: Maybe<string>;
  /** All values greater than the given value. */
  width_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  width_gte?: Maybe<string>;
  /** All values containing the given string. */
  width_contains?: Maybe<string>;
  /** All values not containing the given string. */
  width_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  width_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  width_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  width_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  width_not_ends_with?: Maybe<string>;

  holes?: Maybe<string>;
  /** All values that are not equal to given value. */
  holes_not?: Maybe<string>;
  /** All values that are contained in given list. */
  holes_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  holes_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  holes_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  holes_lte?: Maybe<string>;
  /** All values greater than the given value. */
  holes_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  holes_gte?: Maybe<string>;
  /** All values containing the given string. */
  holes_contains?: Maybe<string>;
  /** All values not containing the given string. */
  holes_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  holes_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  holes_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  holes_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  holes_not_ends_with?: Maybe<string>;

  brand?: Maybe<string>;
  /** All values that are not equal to given value. */
  brand_not?: Maybe<string>;
  /** All values that are contained in given list. */
  brand_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  brand_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  brand_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  brand_lte?: Maybe<string>;
  /** All values greater than the given value. */
  brand_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  brand_gte?: Maybe<string>;
  /** All values containing the given string. */
  brand_contains?: Maybe<string>;
  /** All values not containing the given string. */
  brand_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  brand_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  brand_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  brand_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  brand_not_ends_with?: Maybe<string>;

  et?: Maybe<string>;
  /** All values that are not equal to given value. */
  et_not?: Maybe<string>;
  /** All values that are contained in given list. */
  et_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  et_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  et_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  et_lte?: Maybe<string>;
  /** All values greater than the given value. */
  et_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  et_gte?: Maybe<string>;
  /** All values containing the given string. */
  et_contains?: Maybe<string>;
  /** All values not containing the given string. */
  et_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  et_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  et_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  et_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  et_not_ends_with?: Maybe<string>;

  condition?: Maybe<string>;
  /** All values that are not equal to given value. */
  condition_not?: Maybe<string>;
  /** All values that are contained in given list. */
  condition_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  condition_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  condition_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  condition_lte?: Maybe<string>;
  /** All values greater than the given value. */
  condition_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  condition_gte?: Maybe<string>;
  /** All values containing the given string. */
  condition_contains?: Maybe<string>;
  /** All values not containing the given string. */
  condition_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  condition_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  condition_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  condition_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  condition_not_ends_with?: Maybe<string>;

  price?: Maybe<number>;
  /** All values that are not equal to given value. */
  price_not?: Maybe<number>;
  /** All values that are contained in given list. */
  price_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  price_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  price_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  price_lte?: Maybe<number>;
  /** All values greater than the given value. */
  price_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  price_gte?: Maybe<number>;

  text?: Maybe<string>;
  /** All values that are not equal to given value. */
  text_not?: Maybe<string>;
  /** All values that are contained in given list. */
  text_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  text_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  text_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  text_lte?: Maybe<string>;
  /** All values greater than the given value. */
  text_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  text_gte?: Maybe<string>;
  /** All values containing the given string. */
  text_contains?: Maybe<string>;
  /** All values not containing the given string. */
  text_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  text_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  text_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  text_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  text_not_ends_with?: Maybe<string>;

  phone?: Maybe<string>;
  /** All values that are not equal to given value. */
  phone_not?: Maybe<string>;
  /** All values that are contained in given list. */
  phone_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  phone_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  phone_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  phone_lte?: Maybe<string>;
  /** All values greater than the given value. */
  phone_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  phone_gte?: Maybe<string>;
  /** All values containing the given string. */
  phone_contains?: Maybe<string>;
  /** All values not containing the given string. */
  phone_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  phone_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  phone_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  phone_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  phone_not_ends_with?: Maybe<string>;

  phone2?: Maybe<string>;
  /** All values that are not equal to given value. */
  phone2_not?: Maybe<string>;
  /** All values that are contained in given list. */
  phone2_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  phone2_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  phone2_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  phone2_lte?: Maybe<string>;
  /** All values greater than the given value. */
  phone2_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  phone2_gte?: Maybe<string>;
  /** All values containing the given string. */
  phone2_contains?: Maybe<string>;
  /** All values not containing the given string. */
  phone2_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  phone2_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  phone2_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  phone2_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  phone2_not_ends_with?: Maybe<string>;

  name?: Maybe<string>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<string>;
  /** All values that are contained in given list. */
  name_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  name_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  name_lte?: Maybe<string>;
  /** All values greater than the given value. */
  name_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<string>;
  /** All values containing the given string. */
  name_contains?: Maybe<string>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<string>;

  email?: Maybe<string>;
  /** All values that are not equal to given value. */
  email_not?: Maybe<string>;
  /** All values that are contained in given list. */
  email_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  email_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  email_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  email_lte?: Maybe<string>;
  /** All values greater than the given value. */
  email_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  email_gte?: Maybe<string>;
  /** All values containing the given string. */
  email_contains?: Maybe<string>;
  /** All values not containing the given string. */
  email_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  email_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  email_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  email_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  email_not_ends_with?: Maybe<string>;

  city?: Maybe<string>;
  /** All values that are not equal to given value. */
  city_not?: Maybe<string>;
  /** All values that are contained in given list. */
  city_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  city_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  city_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  city_lte?: Maybe<string>;
  /** All values greater than the given value. */
  city_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  city_gte?: Maybe<string>;
  /** All values containing the given string. */
  city_contains?: Maybe<string>;
  /** All values not containing the given string. */
  city_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  city_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  city_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  city_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  city_not_ends_with?: Maybe<string>;

  expires?: Maybe<number>;
  /** All values that are not equal to given value. */
  expires_not?: Maybe<number>;
  /** All values that are contained in given list. */
  expires_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  expires_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  expires_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  expires_lte?: Maybe<number>;
  /** All values greater than the given value. */
  expires_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  expires_gte?: Maybe<number>;

  createdAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<DateTime>;

  updatedAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<DateTime>;

  user?: Maybe<UserWhereInput>;
}

export interface TireWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<TireWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<TireWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<TireWhereInput[]>;

  id?: Maybe<string>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<string>;
  /** All values that are contained in given list. */
  id_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<string>;
  /** All values greater than the given value. */
  id_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<string>;
  /** All values containing the given string. */
  id_contains?: Maybe<string>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<string>;

  active?: Maybe<boolean>;
  /** All values that are not equal to given value. */
  active_not?: Maybe<boolean>;

  highlight?: Maybe<boolean>;
  /** All values that are not equal to given value. */
  highlight_not?: Maybe<boolean>;

  top?: Maybe<boolean>;
  /** All values that are not equal to given value. */
  top_not?: Maybe<boolean>;

  type?: Maybe<string>;
  /** All values that are not equal to given value. */
  type_not?: Maybe<string>;
  /** All values that are contained in given list. */
  type_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  type_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  type_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  type_lte?: Maybe<string>;
  /** All values greater than the given value. */
  type_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  type_gte?: Maybe<string>;
  /** All values containing the given string. */
  type_contains?: Maybe<string>;
  /** All values not containing the given string. */
  type_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  type_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  type_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  type_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  type_not_ends_with?: Maybe<string>;

  diameter?: Maybe<string>;
  /** All values that are not equal to given value. */
  diameter_not?: Maybe<string>;
  /** All values that are contained in given list. */
  diameter_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  diameter_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  diameter_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  diameter_lte?: Maybe<string>;
  /** All values greater than the given value. */
  diameter_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  diameter_gte?: Maybe<string>;
  /** All values containing the given string. */
  diameter_contains?: Maybe<string>;
  /** All values not containing the given string. */
  diameter_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  diameter_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  diameter_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  diameter_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  diameter_not_ends_with?: Maybe<string>;

  width?: Maybe<string>;
  /** All values that are not equal to given value. */
  width_not?: Maybe<string>;
  /** All values that are contained in given list. */
  width_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  width_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  width_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  width_lte?: Maybe<string>;
  /** All values greater than the given value. */
  width_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  width_gte?: Maybe<string>;
  /** All values containing the given string. */
  width_contains?: Maybe<string>;
  /** All values not containing the given string. */
  width_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  width_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  width_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  width_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  width_not_ends_with?: Maybe<string>;

  height?: Maybe<string>;
  /** All values that are not equal to given value. */
  height_not?: Maybe<string>;
  /** All values that are contained in given list. */
  height_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  height_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  height_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  height_lte?: Maybe<string>;
  /** All values greater than the given value. */
  height_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  height_gte?: Maybe<string>;
  /** All values containing the given string. */
  height_contains?: Maybe<string>;
  /** All values not containing the given string. */
  height_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  height_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  height_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  height_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  height_not_ends_with?: Maybe<string>;

  brand?: Maybe<string>;
  /** All values that are not equal to given value. */
  brand_not?: Maybe<string>;
  /** All values that are contained in given list. */
  brand_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  brand_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  brand_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  brand_lte?: Maybe<string>;
  /** All values greater than the given value. */
  brand_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  brand_gte?: Maybe<string>;
  /** All values containing the given string. */
  brand_contains?: Maybe<string>;
  /** All values not containing the given string. */
  brand_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  brand_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  brand_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  brand_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  brand_not_ends_with?: Maybe<string>;

  condition?: Maybe<string>;
  /** All values that are not equal to given value. */
  condition_not?: Maybe<string>;
  /** All values that are contained in given list. */
  condition_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  condition_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  condition_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  condition_lte?: Maybe<string>;
  /** All values greater than the given value. */
  condition_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  condition_gte?: Maybe<string>;
  /** All values containing the given string. */
  condition_contains?: Maybe<string>;
  /** All values not containing the given string. */
  condition_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  condition_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  condition_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  condition_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  condition_not_ends_with?: Maybe<string>;

  price?: Maybe<number>;
  /** All values that are not equal to given value. */
  price_not?: Maybe<number>;
  /** All values that are contained in given list. */
  price_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  price_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  price_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  price_lte?: Maybe<number>;
  /** All values greater than the given value. */
  price_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  price_gte?: Maybe<number>;

  text?: Maybe<string>;
  /** All values that are not equal to given value. */
  text_not?: Maybe<string>;
  /** All values that are contained in given list. */
  text_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  text_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  text_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  text_lte?: Maybe<string>;
  /** All values greater than the given value. */
  text_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  text_gte?: Maybe<string>;
  /** All values containing the given string. */
  text_contains?: Maybe<string>;
  /** All values not containing the given string. */
  text_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  text_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  text_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  text_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  text_not_ends_with?: Maybe<string>;

  phone?: Maybe<string>;
  /** All values that are not equal to given value. */
  phone_not?: Maybe<string>;
  /** All values that are contained in given list. */
  phone_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  phone_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  phone_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  phone_lte?: Maybe<string>;
  /** All values greater than the given value. */
  phone_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  phone_gte?: Maybe<string>;
  /** All values containing the given string. */
  phone_contains?: Maybe<string>;
  /** All values not containing the given string. */
  phone_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  phone_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  phone_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  phone_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  phone_not_ends_with?: Maybe<string>;

  phone2?: Maybe<string>;
  /** All values that are not equal to given value. */
  phone2_not?: Maybe<string>;
  /** All values that are contained in given list. */
  phone2_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  phone2_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  phone2_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  phone2_lte?: Maybe<string>;
  /** All values greater than the given value. */
  phone2_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  phone2_gte?: Maybe<string>;
  /** All values containing the given string. */
  phone2_contains?: Maybe<string>;
  /** All values not containing the given string. */
  phone2_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  phone2_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  phone2_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  phone2_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  phone2_not_ends_with?: Maybe<string>;

  name?: Maybe<string>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<string>;
  /** All values that are contained in given list. */
  name_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  name_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  name_lte?: Maybe<string>;
  /** All values greater than the given value. */
  name_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<string>;
  /** All values containing the given string. */
  name_contains?: Maybe<string>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<string>;

  email?: Maybe<string>;
  /** All values that are not equal to given value. */
  email_not?: Maybe<string>;
  /** All values that are contained in given list. */
  email_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  email_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  email_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  email_lte?: Maybe<string>;
  /** All values greater than the given value. */
  email_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  email_gte?: Maybe<string>;
  /** All values containing the given string. */
  email_contains?: Maybe<string>;
  /** All values not containing the given string. */
  email_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  email_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  email_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  email_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  email_not_ends_with?: Maybe<string>;

  city?: Maybe<string>;
  /** All values that are not equal to given value. */
  city_not?: Maybe<string>;
  /** All values that are contained in given list. */
  city_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  city_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  city_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  city_lte?: Maybe<string>;
  /** All values greater than the given value. */
  city_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  city_gte?: Maybe<string>;
  /** All values containing the given string. */
  city_contains?: Maybe<string>;
  /** All values not containing the given string. */
  city_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  city_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  city_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  city_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  city_not_ends_with?: Maybe<string>;

  expires?: Maybe<number>;
  /** All values that are not equal to given value. */
  expires_not?: Maybe<number>;
  /** All values that are contained in given list. */
  expires_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  expires_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  expires_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  expires_lte?: Maybe<number>;
  /** All values greater than the given value. */
  expires_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  expires_gte?: Maybe<number>;

  createdAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<DateTime>;

  updatedAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<DateTime>;

  user?: Maybe<UserWhereInput>;
}

export interface LoginUserInput {
  email: string;

  password: string;
}

export interface ResetPasswordInput {
  email: string;
}

export interface ResetCompleteInput {
  token: string;

  password: string;
}

export interface ActivateUserInput {
  token: string;
}

export interface ContactInput {
  name: string;

  email: string;

  message: string;
}

export interface CreateUserInput {
  access: number;

  active: boolean;

  name?: Maybe<string>;

  email: string;

  password: string;

  address?: Maybe<string>;

  city?: Maybe<string>;

  phone?: Maybe<string>;

  phone2?: Maybe<string>;
}

export interface UpdateUserInput {
  access?: Maybe<number>;

  active?: Maybe<boolean>;

  name?: Maybe<string>;

  email?: Maybe<string>;

  password?: Maybe<string>;

  address?: Maybe<string>;

  city?: Maybe<string>;

  phone?: Maybe<string>;

  phone2?: Maybe<string>;

  passwordToken?: Maybe<string>;
}

export interface CreateAdInput {
  userId?: Maybe<string>;

  active: boolean;

  highlight?: Maybe<boolean>;

  top?: Maybe<boolean>;

  adType?: Maybe<string>;

  type: string;

  brand?: Maybe<string>;

  model?: Maybe<string>;

  label?: Maybe<string>;

  category?: Maybe<string>;

  subcategory?: Maybe<string>;

  condition?: Maybe<string>;

  year?: Maybe<string>;

  yearTo?: Maybe<string>;

  price?: Maybe<number>;

  text?: Maybe<string>;

  phone: string;

  phone2?: Maybe<string>;

  name?: Maybe<string>;

  email: string;

  city: string;

  expires?: Maybe<number>;
}

export interface UpdateAdInput {
  active?: Maybe<boolean>;

  highlight?: Maybe<boolean>;

  top?: Maybe<boolean>;

  adType?: Maybe<string>;

  type?: Maybe<string>;

  brand?: Maybe<string>;

  model?: Maybe<string>;

  label?: Maybe<string>;

  category?: Maybe<string>;

  subcategory?: Maybe<string>;

  condition?: Maybe<string>;

  year?: Maybe<string>;

  yearTo?: Maybe<string>;

  price?: Maybe<number>;

  text?: Maybe<string>;

  phone?: Maybe<string>;

  phone2?: Maybe<string>;

  name?: Maybe<string>;

  email?: Maybe<string>;

  city?: Maybe<string>;

  expires?: Maybe<number>;
}

export interface CreateRimInput {
  userId?: Maybe<string>;

  active: boolean;

  highlight?: Maybe<boolean>;

  top?: Maybe<boolean>;

  type?: Maybe<string>;

  diameter?: Maybe<string>;

  width?: Maybe<string>;

  holes?: Maybe<string>;

  brand?: Maybe<string>;

  et?: Maybe<string>;

  condition?: Maybe<string>;

  price?: Maybe<number>;

  text?: Maybe<string>;

  phone: string;

  phone2?: Maybe<string>;

  name?: Maybe<string>;

  email: string;

  city: string;

  expires?: Maybe<number>;
}

export interface UpdateRimInput {
  active?: Maybe<boolean>;

  highlight?: Maybe<boolean>;

  top?: Maybe<boolean>;

  type?: Maybe<string>;

  diameter?: Maybe<string>;

  width?: Maybe<string>;

  holes?: Maybe<string>;

  brand?: Maybe<string>;

  et?: Maybe<string>;

  condition?: Maybe<string>;

  price?: Maybe<number>;

  text?: Maybe<string>;

  phone?: Maybe<string>;

  phone2?: Maybe<string>;

  name?: Maybe<string>;

  email?: Maybe<string>;

  city?: Maybe<string>;

  expires?: Maybe<number>;
}

export interface CreateTireInput {
  userId?: Maybe<string>;

  active: boolean;

  highlight?: Maybe<boolean>;

  top?: Maybe<boolean>;

  type?: Maybe<string>;

  diameter?: Maybe<string>;

  width?: Maybe<string>;

  height?: Maybe<string>;

  brand?: Maybe<string>;

  condition?: Maybe<string>;

  price?: Maybe<number>;

  text?: Maybe<string>;

  phone: string;

  phone2?: Maybe<string>;

  name?: Maybe<string>;

  email: string;

  city: string;

  expires?: Maybe<number>;
}

export interface UpdateTireInput {
  active?: Maybe<boolean>;

  highlight?: Maybe<boolean>;

  top?: Maybe<boolean>;

  type?: Maybe<string>;

  diameter?: Maybe<string>;

  width?: Maybe<string>;

  height?: Maybe<string>;

  brand?: Maybe<string>;

  condition?: Maybe<string>;

  price?: Maybe<number>;

  text?: Maybe<string>;

  phone?: Maybe<string>;

  phone2?: Maybe<string>;

  name?: Maybe<string>;

  email?: Maybe<string>;

  city?: Maybe<string>;

  expires?: Maybe<number>;
}

export enum UserOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  AccessAsc = 'access_ASC',
  AccessDesc = 'access_DESC',
  ActiveAsc = 'active_ASC',
  ActiveDesc = 'active_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  PasswordAsc = 'password_ASC',
  PasswordDesc = 'password_DESC',
  AddressAsc = 'address_ASC',
  AddressDesc = 'address_DESC',
  CityAsc = 'city_ASC',
  CityDesc = 'city_DESC',
  PhoneAsc = 'phone_ASC',
  PhoneDesc = 'phone_DESC',
  Phone2Asc = 'phone2_ASC',
  Phone2Desc = 'phone2_DESC',
  PasswordTokenAsc = 'passwordToken_ASC',
  PasswordTokenDesc = 'passwordToken_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export enum AdOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ActiveAsc = 'active_ASC',
  ActiveDesc = 'active_DESC',
  HighlightAsc = 'highlight_ASC',
  HighlightDesc = 'highlight_DESC',
  TopAsc = 'top_ASC',
  TopDesc = 'top_DESC',
  AdTypeAsc = 'adType_ASC',
  AdTypeDesc = 'adType_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  BrandAsc = 'brand_ASC',
  BrandDesc = 'brand_DESC',
  ModelAsc = 'model_ASC',
  ModelDesc = 'model_DESC',
  LabelAsc = 'label_ASC',
  LabelDesc = 'label_DESC',
  CategoryAsc = 'category_ASC',
  CategoryDesc = 'category_DESC',
  SubcategoryAsc = 'subcategory_ASC',
  SubcategoryDesc = 'subcategory_DESC',
  ConditionAsc = 'condition_ASC',
  ConditionDesc = 'condition_DESC',
  YearAsc = 'year_ASC',
  YearDesc = 'year_DESC',
  YearToAsc = 'yearTo_ASC',
  YearToDesc = 'yearTo_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  TextAsc = 'text_ASC',
  TextDesc = 'text_DESC',
  PhoneAsc = 'phone_ASC',
  PhoneDesc = 'phone_DESC',
  Phone2Asc = 'phone2_ASC',
  Phone2Desc = 'phone2_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  CityAsc = 'city_ASC',
  CityDesc = 'city_DESC',
  ExpiresAsc = 'expires_ASC',
  ExpiresDesc = 'expires_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export enum RimOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ActiveAsc = 'active_ASC',
  ActiveDesc = 'active_DESC',
  HighlightAsc = 'highlight_ASC',
  HighlightDesc = 'highlight_DESC',
  TopAsc = 'top_ASC',
  TopDesc = 'top_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  DiameterAsc = 'diameter_ASC',
  DiameterDesc = 'diameter_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC',
  HolesAsc = 'holes_ASC',
  HolesDesc = 'holes_DESC',
  BrandAsc = 'brand_ASC',
  BrandDesc = 'brand_DESC',
  EtAsc = 'et_ASC',
  EtDesc = 'et_DESC',
  ConditionAsc = 'condition_ASC',
  ConditionDesc = 'condition_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  TextAsc = 'text_ASC',
  TextDesc = 'text_DESC',
  PhoneAsc = 'phone_ASC',
  PhoneDesc = 'phone_DESC',
  Phone2Asc = 'phone2_ASC',
  Phone2Desc = 'phone2_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  CityAsc = 'city_ASC',
  CityDesc = 'city_DESC',
  ExpiresAsc = 'expires_ASC',
  ExpiresDesc = 'expires_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export enum TireOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ActiveAsc = 'active_ASC',
  ActiveDesc = 'active_DESC',
  HighlightAsc = 'highlight_ASC',
  HighlightDesc = 'highlight_DESC',
  TopAsc = 'top_ASC',
  TopDesc = 'top_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  DiameterAsc = 'diameter_ASC',
  DiameterDesc = 'diameter_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  BrandAsc = 'brand_ASC',
  BrandDesc = 'brand_DESC',
  ConditionAsc = 'condition_ASC',
  ConditionDesc = 'condition_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  TextAsc = 'text_ASC',
  TextDesc = 'text_DESC',
  PhoneAsc = 'phone_ASC',
  PhoneDesc = 'phone_DESC',
  Phone2Asc = 'phone2_ASC',
  Phone2Desc = 'phone2_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  CityAsc = 'city_ASC',
  CityDesc = 'city_DESC',
  ExpiresAsc = 'expires_ASC',
  ExpiresDesc = 'expires_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type DateTime = any;

/** The `Upload` scalar type represents a file upload promise that resolves an object containing `stream`, `filename`, `mimetype` and `encoding`. */
export type Upload = any;

// ====================================================
// Documents
// ====================================================

export type CreateAdVariables = {
  active: boolean;
  highlight: boolean;
  adType?: Maybe<string>;
  type: string;
  brand?: Maybe<string>;
  model?: Maybe<string>;
  label?: Maybe<string>;
  category?: Maybe<string>;
  subcategory?: Maybe<string>;
  condition?: Maybe<string>;
  year?: Maybe<string>;
  yearTo?: Maybe<string>;
  price: number;
  text?: Maybe<string>;
  phone: string;
  phone2?: Maybe<string>;
  name?: Maybe<string>;
  email: string;
  city: string;
  expires: number;
  userId?: Maybe<string>;
};

export type CreateAdMutation = {
  __typename?: 'Mutation';

  createAd: CreateAdCreateAd;
};

export type CreateAdCreateAd = {
  __typename?: 'Ad';

  id: string;

  brand: Maybe<string>;

  model: Maybe<string>;

  category: Maybe<string>;

  condition: Maybe<string>;
};

export type UpdateAdVariables = {
  id: string;
  adType?: Maybe<string>;
  type?: Maybe<string>;
  brand?: Maybe<string>;
  model?: Maybe<string>;
  label?: Maybe<string>;
  category?: Maybe<string>;
  subcategory?: Maybe<string>;
  condition?: Maybe<string>;
  year?: Maybe<string>;
  yearTo?: Maybe<string>;
  price?: Maybe<number>;
  text?: Maybe<string>;
  phone?: Maybe<string>;
  phone2?: Maybe<string>;
  name?: Maybe<string>;
  email?: Maybe<string>;
  city?: Maybe<string>;
};

export type UpdateAdMutation = {
  __typename?: 'Mutation';

  updateAd: UpdateAdUpdateAd;
};

export type UpdateAdUpdateAd = {
  __typename?: 'Ad';

  id: string;

  brand: Maybe<string>;

  model: Maybe<string>;

  category: Maybe<string>;

  condition: Maybe<string>;
};

export type DeleteAdVariables = {
  id: string;
};

export type DeleteAdMutation = {
  __typename?: 'Mutation';

  deleteAd: DeleteAdDeleteAd;
};

export type DeleteAdDeleteAd = {
  __typename?: 'Ad';

  id: string;
};

export type ArchiveAdVariables = {
  id: string;
};

export type ArchiveAdMutation = {
  __typename?: 'Mutation';

  updateAd: ArchiveAdUpdateAd;
};

export type ArchiveAdUpdateAd = {
  __typename?: 'Ad';

  id: string;

  brand: Maybe<string>;

  model: Maybe<string>;

  category: Maybe<string>;

  condition: Maybe<string>;
};

export type ActivateAdVariables = {
  id: string;
};

export type ActivateAdMutation = {
  __typename?: 'Mutation';

  updateAd: ActivateAdUpdateAd;
};

export type ActivateAdUpdateAd = {
  __typename?: 'Ad';

  id: string;

  brand: Maybe<string>;

  model: Maybe<string>;

  category: Maybe<string>;

  condition: Maybe<string>;
};

export type ContactVariables = {
  name: string;
  email: string;
  message: string;
};

export type ContactMutation = {
  __typename?: 'Mutation';

  contact: Maybe<boolean>;
};

export type CreateRimVariables = {
  active: boolean;
  highlight: boolean;
  type: string;
  diameter?: Maybe<string>;
  width?: Maybe<string>;
  holes?: Maybe<string>;
  brand?: Maybe<string>;
  condition?: Maybe<string>;
  price: number;
  text?: Maybe<string>;
  phone: string;
  phone2?: Maybe<string>;
  name?: Maybe<string>;
  email: string;
  city: string;
  expires: number;
  userId?: Maybe<string>;
  et?: Maybe<string>;
};

export type CreateRimMutation = {
  __typename?: 'Mutation';

  createRim: CreateRimCreateRim;
};

export type CreateRimCreateRim = {
  __typename?: 'Rim';

  id: string;

  type: Maybe<string>;

  diameter: Maybe<string>;

  width: Maybe<string>;

  brand: Maybe<string>;
};

export type UpdateRimVariables = {
  id: string;
  type: string;
  diameter?: Maybe<string>;
  width?: Maybe<string>;
  holes?: Maybe<string>;
  brand?: Maybe<string>;
  condition?: Maybe<string>;
  price?: Maybe<number>;
  text?: Maybe<string>;
  phone?: Maybe<string>;
  phone2?: Maybe<string>;
  name?: Maybe<string>;
  email?: Maybe<string>;
  city?: Maybe<string>;
  et?: Maybe<string>;
};

export type UpdateRimMutation = {
  __typename?: 'Mutation';

  updateRim: UpdateRimUpdateRim;
};

export type UpdateRimUpdateRim = {
  __typename?: 'Rim';

  id: string;

  type: Maybe<string>;

  diameter: Maybe<string>;

  width: Maybe<string>;

  brand: Maybe<string>;
};

export type DeleteRimVariables = {
  id: string;
};

export type DeleteRimMutation = {
  __typename?: 'Mutation';

  deleteRim: DeleteRimDeleteRim;
};

export type DeleteRimDeleteRim = {
  __typename?: 'Rim';

  id: string;
};

export type ArchiveRimVariables = {
  id: string;
};

export type ArchiveRimMutation = {
  __typename?: 'Mutation';

  updateRim: ArchiveRimUpdateRim;
};

export type ArchiveRimUpdateRim = {
  __typename?: 'Rim';

  id: string;

  type: Maybe<string>;

  diameter: Maybe<string>;

  width: Maybe<string>;

  brand: Maybe<string>;
};

export type ActivateRimVariables = {
  id: string;
};

export type ActivateRimMutation = {
  __typename?: 'Mutation';

  updateRim: ActivateRimUpdateRim;
};

export type ActivateRimUpdateRim = {
  __typename?: 'Rim';

  id: string;

  type: Maybe<string>;

  diameter: Maybe<string>;

  width: Maybe<string>;

  brand: Maybe<string>;
};

export type CreateTireVariables = {
  active: boolean;
  highlight: boolean;
  type: string;
  diameter?: Maybe<string>;
  width?: Maybe<string>;
  height?: Maybe<string>;
  brand?: Maybe<string>;
  condition?: Maybe<string>;
  price: number;
  text?: Maybe<string>;
  phone: string;
  phone2?: Maybe<string>;
  name?: Maybe<string>;
  email: string;
  city: string;
  expires: number;
  userId?: Maybe<string>;
};

export type CreateTireMutation = {
  __typename?: 'Mutation';

  createTire: CreateTireCreateTire;
};

export type CreateTireCreateTire = {
  __typename?: 'Tire';

  id: string;

  type: Maybe<string>;

  diameter: Maybe<string>;

  width: Maybe<string>;

  brand: Maybe<string>;
};

export type UpdateTireVariables = {
  id: string;
  type: string;
  diameter?: Maybe<string>;
  width?: Maybe<string>;
  height?: Maybe<string>;
  brand?: Maybe<string>;
  condition?: Maybe<string>;
  price?: Maybe<number>;
  text?: Maybe<string>;
  phone?: Maybe<string>;
  phone2?: Maybe<string>;
  name?: Maybe<string>;
  email?: Maybe<string>;
  city?: Maybe<string>;
};

export type UpdateTireMutation = {
  __typename?: 'Mutation';

  updateTire: UpdateTireUpdateTire;
};

export type UpdateTireUpdateTire = {
  __typename?: 'Tire';

  id: string;

  type: Maybe<string>;

  diameter: Maybe<string>;

  width: Maybe<string>;

  brand: Maybe<string>;
};

export type DeleteTireVariables = {
  id: string;
};

export type DeleteTireMutation = {
  __typename?: 'Mutation';

  deleteTire: DeleteTireDeleteTire;
};

export type DeleteTireDeleteTire = {
  __typename?: 'Tire';

  id: string;
};

export type ArchiveTireVariables = {
  id: string;
};

export type ArchiveTireMutation = {
  __typename?: 'Mutation';

  updateTire: ArchiveTireUpdateTire;
};

export type ArchiveTireUpdateTire = {
  __typename?: 'Tire';

  id: string;

  type: Maybe<string>;

  diameter: Maybe<string>;

  width: Maybe<string>;

  brand: Maybe<string>;
};

export type ActivateTireVariables = {
  id: string;
};

export type ActivateTireMutation = {
  __typename?: 'Mutation';

  updateTire: ActivateTireUpdateTire;
};

export type ActivateTireUpdateTire = {
  __typename?: 'Tire';

  id: string;

  type: Maybe<string>;

  diameter: Maybe<string>;

  width: Maybe<string>;

  brand: Maybe<string>;
};

export type UploadFileVariables = {
  file: Upload;
  id: string;
  type: string;
};

export type UploadFileMutation = {
  __typename?: 'Mutation';

  uploadFile: Maybe<boolean>;
};

export type DeleteFileVariables = {
  id: string;
};

export type DeleteFileMutation = {
  __typename?: 'Mutation';

  deleteFile: Maybe<boolean>;
};

export type CreateUserVariables = {
  active: boolean;
  access: number;
  name: string;
  email: string;
  password: string;
  phone: string;
  phone2?: Maybe<string>;
  city: string;
};

export type CreateUserMutation = {
  __typename?: 'Mutation';

  createUser: CreateUserCreateUser;
};

export type CreateUserCreateUser = {
  __typename?: 'AuthPayload';

  user: CreateUserUser;
};

export type CreateUserUser = {
  __typename?: 'User';

  id: string;
};

export type UpdateUserVariables = {
  id: string;
  name?: Maybe<string>;
  email?: Maybe<string>;
  password?: Maybe<string>;
  phone?: Maybe<string>;
  phone2?: Maybe<string>;
  city?: Maybe<string>;
};

export type UpdateUserMutation = {
  __typename?: 'Mutation';

  updateUser: UpdateUserUpdateUser;
};

export type UpdateUserUpdateUser = {
  __typename?: 'User';

  id: string;

  name: Maybe<string>;

  email: string;

  phone: Maybe<string>;

  phone2: Maybe<string>;

  city: Maybe<string>;
};

export type UpdatePasswordVariables = {
  id: string;
  password: string;
};

export type UpdatePasswordMutation = {
  __typename?: 'Mutation';

  updateUser: UpdatePasswordUpdateUser;
};

export type UpdatePasswordUpdateUser = {
  __typename?: 'User';

  id: string;
};

export type ResetPasswordVariables = {
  email: string;
};

export type ResetPasswordMutation = {
  __typename?: 'Mutation';

  resetPassword: ResetPasswordResetPassword;
};

export type ResetPasswordResetPassword = {
  __typename?: 'User';

  active: boolean;
};

export type ResetCompleteVariables = {
  token: string;
  password: string;
};

export type ResetCompleteMutation = {
  __typename?: 'Mutation';

  resetComplete: ResetCompleteResetComplete;
};

export type ResetCompleteResetComplete = {
  __typename?: 'User';

  active: boolean;
};

export type ActivateUserVariables = {
  token: string;
};

export type ActivateUserMutation = {
  __typename?: 'Mutation';

  activateUser: Maybe<ActivateUserActivateUser>;
};

export type ActivateUserActivateUser = {
  __typename?: 'User';

  active: boolean;
};

export type LoginVariables = {
  email: string;
  password: string;
};

export type LoginMutation = {
  __typename?: 'Mutation';

  login: LoginLogin;
};

export type LoginLogin = {
  __typename?: 'AuthPayload';

  user: LoginUser;

  token: string;
};

export type LoginUser = {
  __typename?: 'User';

  id: string;

  access: number;

  active: boolean;

  email: string;

  name: Maybe<string>;

  phone: Maybe<string>;

  phone2: Maybe<string>;

  address: Maybe<string>;

  city: Maybe<string>;
};

export type GetTopAdsVariables = {};

export type GetTopAdsQuery = {
  __typename?: 'Query';

  ads: GetTopAdsAds[];
};

export type GetTopAdsAds = {
  __typename?: 'Ad';

  id: string;

  brand: Maybe<string>;

  model: Maybe<string>;

  category: Maybe<string>;

  subcategory: Maybe<string>;

  condition: Maybe<string>;

  price: Maybe<number>;

  year: Maybe<string>;

  yearTo: Maybe<string>;

  text: Maybe<string>;

  city: Maybe<string>;

  adType: Maybe<string>;

  highlight: Maybe<boolean>;

  top: Maybe<boolean>;
};

export type GetPromoAdsVariables = {};

export type GetPromoAdsQuery = {
  __typename?: 'Query';

  ads: GetPromoAdsAds[];
};

export type GetPromoAdsAds = {
  __typename?: 'Ad';

  id: string;

  subcategory: Maybe<string>;

  price: Maybe<number>;

  brand: Maybe<string>;

  model: Maybe<string>;

  label: Maybe<string>;

  year: Maybe<string>;

  yearTo: Maybe<string>;
};

export type GetFirstAdsVariables = {};

export type GetFirstAdsQuery = {
  __typename?: 'Query';

  ads: GetFirstAdsAds[];
};

export type GetFirstAdsAds = {
  __typename?: 'Ad';

  id: string;

  subcategory: Maybe<string>;

  price: Maybe<number>;

  brand: Maybe<string>;

  model: Maybe<string>;

  label: Maybe<string>;

  year: Maybe<string>;

  yearTo: Maybe<string>;
};

export type GetAdsVariables = {
  first?: Maybe<number>;
  skip?: Maybe<number>;
  search?: Maybe<string>;
  active?: Maybe<boolean>;
  orderBy?: Maybe<AdOrderByInput>;
  condition?: Maybe<string>;
  brand?: Maybe<string>;
  model?: Maybe<string>;
  type?: Maybe<string>;
  category?: Maybe<string>;
  subcategory?: Maybe<string>;
  adType?: Maybe<string>;
  getYearFrom?: Maybe<string>;
  getYearTo?: Maybe<string>;
  cities?: Maybe<string[]>;
};

export type GetAdsQuery = {
  __typename?: 'Query';

  ads: GetAdsAds[];

  adsConnection: GetAdsAdsConnection;
};

export type GetAdsAds = {
  __typename?: 'Ad';

  id: string;

  brand: Maybe<string>;

  model: Maybe<string>;

  category: Maybe<string>;

  subcategory: Maybe<string>;

  condition: Maybe<string>;

  price: Maybe<number>;

  year: Maybe<string>;

  yearTo: Maybe<string>;

  text: Maybe<string>;

  city: Maybe<string>;

  adType: Maybe<string>;

  highlight: Maybe<boolean>;

  top: Maybe<boolean>;
};

export type GetAdsAdsConnection = {
  __typename?: 'AdConnection';

  aggregate: GetAdsAggregate;
};

export type GetAdsAggregate = {
  __typename?: 'AggregateAd';

  count: number;
};

export type GetArchivedAdsVariables = {};

export type GetArchivedAdsQuery = {
  __typename?: 'Query';

  ads: GetArchivedAdsAds[];
};

export type GetArchivedAdsAds = {
  __typename?: 'Ad';

  id: string;

  brand: Maybe<string>;

  model: Maybe<string>;

  category: Maybe<string>;

  condition: Maybe<string>;
};

export type GetAdVariables = {
  id: string;
};

export type GetAdQuery = {
  __typename?: 'Query';

  ads: GetAdAds[];
};

export type GetAdAds = {
  __typename?: 'Ad';

  id: string;

  active: boolean;

  highlight: Maybe<boolean>;

  top: Maybe<boolean>;

  adType: Maybe<string>;

  type: string;

  brand: Maybe<string>;

  model: Maybe<string>;

  label: Maybe<string>;

  category: Maybe<string>;

  subcategory: Maybe<string>;

  condition: Maybe<string>;

  year: Maybe<string>;

  yearTo: Maybe<string>;

  price: Maybe<number>;

  text: Maybe<string>;

  phone: string;

  phone2: Maybe<string>;

  name: Maybe<string>;

  email: string;

  city: Maybe<string>;

  expires: Maybe<number>;

  user: Maybe<GetAdUser>;
};

export type GetAdUser = {
  __typename?: 'User';

  id: string;
};

export type GetMyAdsVariables = {};

export type GetMyAdsQuery = {
  __typename?: 'Query';

  me: GetMyAdsMe;
};

export type GetMyAdsMe = {
  __typename?: 'User';

  id: string;

  email: string;

  name: Maybe<string>;

  city: Maybe<string>;

  phone: Maybe<string>;

  phone2: Maybe<string>;

  ads: GetMyAdsAds[];

  tires: GetMyAdsTires[];

  rims: GetMyAdsRims[];
};

export type GetMyAdsAds = {
  __typename?: 'Ad';

  id: string;

  active: boolean;

  brand: Maybe<string>;

  model: Maybe<string>;

  category: Maybe<string>;

  subcategory: Maybe<string>;

  condition: Maybe<string>;

  price: Maybe<number>;

  year: Maybe<string>;

  yearTo: Maybe<string>;

  text: Maybe<string>;

  createdAt: Maybe<string>;

  adType: Maybe<string>;

  city: Maybe<string>;

  highlight: Maybe<boolean>;
};

export type GetMyAdsTires = {
  __typename?: 'Tire';

  id: string;

  active: boolean;

  highlight: Maybe<boolean>;

  condition: Maybe<string>;

  type: Maybe<string>;

  diameter: Maybe<string>;

  width: Maybe<string>;

  height: Maybe<string>;

  city: Maybe<string>;

  brand: Maybe<string>;

  price: Maybe<number>;

  text: Maybe<string>;

  createdAt: Maybe<string>;
};

export type GetMyAdsRims = {
  __typename?: 'Rim';

  id: string;

  active: boolean;

  et: Maybe<string>;

  type: Maybe<string>;

  diameter: Maybe<string>;

  highlight: Maybe<boolean>;

  holes: Maybe<string>;

  condition: Maybe<string>;

  width: Maybe<string>;

  brand: Maybe<string>;

  price: Maybe<number>;

  city: Maybe<string>;

  text: Maybe<string>;

  createdAt: Maybe<string>;
};

export type GetMyInfoVariables = {};

export type GetMyInfoQuery = {
  __typename?: 'Query';

  me: GetMyInfoMe;
};

export type GetMyInfoMe = {
  __typename?: 'User';

  id: string;

  email: string;

  name: Maybe<string>;

  city: Maybe<string>;

  phone: Maybe<string>;

  phone2: Maybe<string>;
};

export type GetTopRimsVariables = {};

export type GetTopRimsQuery = {
  __typename?: 'Query';

  rims: GetTopRimsRims[];
};

export type GetTopRimsRims = {
  __typename?: 'Rim';

  id: string;

  et: Maybe<string>;

  type: Maybe<string>;

  diameter: Maybe<string>;

  highlight: Maybe<boolean>;

  top: Maybe<boolean>;

  holes: Maybe<string>;

  condition: Maybe<string>;

  width: Maybe<string>;

  brand: Maybe<string>;

  price: Maybe<number>;

  city: Maybe<string>;

  text: Maybe<string>;
};

export type GetRimsVariables = {
  first?: Maybe<number>;
  skip?: Maybe<number>;
  search?: Maybe<string>;
  active?: Maybe<boolean>;
  orderBy?: Maybe<RimOrderByInput>;
  condition?: Maybe<string[]>;
  brand?: Maybe<string[]>;
  type?: Maybe<string[]>;
  width?: Maybe<string[]>;
  holes?: Maybe<string[]>;
  diameter?: Maybe<string[]>;
  cities?: Maybe<string[]>;
  et?: Maybe<string>;
};

export type GetRimsQuery = {
  __typename?: 'Query';

  rims: GetRimsRims[];

  rimsConnection: GetRimsRimsConnection;
};

export type GetRimsRims = {
  __typename?: 'Rim';

  id: string;

  et: Maybe<string>;

  type: Maybe<string>;

  diameter: Maybe<string>;

  highlight: Maybe<boolean>;

  top: Maybe<boolean>;

  holes: Maybe<string>;

  condition: Maybe<string>;

  width: Maybe<string>;

  brand: Maybe<string>;

  price: Maybe<number>;

  city: Maybe<string>;

  text: Maybe<string>;
};

export type GetRimsRimsConnection = {
  __typename?: 'RimConnection';

  aggregate: GetRimsAggregate;
};

export type GetRimsAggregate = {
  __typename?: 'AggregateRim';

  count: number;
};

export type GetRimVariables = {
  id: string;
};

export type GetRimQuery = {
  __typename?: 'Query';

  rims: GetRimRims[];
};

export type GetRimRims = {
  __typename?: 'Rim';

  id: string;

  et: Maybe<string>;

  active: boolean;

  highlight: Maybe<boolean>;

  top: Maybe<boolean>;

  type: Maybe<string>;

  diameter: Maybe<string>;

  width: Maybe<string>;

  holes: Maybe<string>;

  brand: Maybe<string>;

  condition: Maybe<string>;

  price: Maybe<number>;

  text: Maybe<string>;

  phone: string;

  phone2: Maybe<string>;

  name: Maybe<string>;

  email: string;

  city: Maybe<string>;

  expires: Maybe<number>;

  et: Maybe<string>;

  user: Maybe<GetRimUser>;
};

export type GetRimUser = {
  __typename?: 'User';

  id: string;
};

export type GetTopTiresVariables = {};

export type GetTopTiresQuery = {
  __typename?: 'Query';

  tires: GetTopTiresTires[];
};

export type GetTopTiresTires = {
  __typename?: 'Tire';

  id: string;

  highlight: Maybe<boolean>;

  top: Maybe<boolean>;

  condition: Maybe<string>;

  type: Maybe<string>;

  diameter: Maybe<string>;

  width: Maybe<string>;

  height: Maybe<string>;

  city: Maybe<string>;

  brand: Maybe<string>;

  price: Maybe<number>;

  text: Maybe<string>;
};

export type GetTiresVariables = {
  first?: Maybe<number>;
  skip?: Maybe<number>;
  search?: Maybe<string>;
  active?: Maybe<boolean>;
  orderBy?: Maybe<TireOrderByInput>;
  condition?: Maybe<string[]>;
  brand?: Maybe<string[]>;
  type?: Maybe<string[]>;
  width?: Maybe<string[]>;
  height?: Maybe<string[]>;
  diameter?: Maybe<string[]>;
  cities?: Maybe<string[]>;
};

export type GetTiresQuery = {
  __typename?: 'Query';

  tires: GetTiresTires[];

  tiresConnection: GetTiresTiresConnection;
};

export type GetTiresTires = {
  __typename?: 'Tire';

  id: string;

  highlight: Maybe<boolean>;

  top: Maybe<boolean>;

  condition: Maybe<string>;

  type: Maybe<string>;

  diameter: Maybe<string>;

  width: Maybe<string>;

  height: Maybe<string>;

  city: Maybe<string>;

  brand: Maybe<string>;

  price: Maybe<number>;

  text: Maybe<string>;

  user: Maybe<GetTiresUser>;
};

export type GetTiresUser = {
  __typename?: 'User';

  id: string;
};

export type GetTiresTiresConnection = {
  __typename?: 'TireConnection';

  aggregate: GetTiresAggregate;
};

export type GetTiresAggregate = {
  __typename?: 'AggregateTire';

  count: number;
};

export type GetArchivedTiresVariables = {};

export type GetArchivedTiresQuery = {
  __typename?: 'Query';

  tires: GetArchivedTiresTires[];
};

export type GetArchivedTiresTires = {
  __typename?: 'Tire';

  id: string;

  type: Maybe<string>;

  diameter: Maybe<string>;

  width: Maybe<string>;

  brand: Maybe<string>;
};

export type GetTireVariables = {
  id: string;
};

export type GetTireQuery = {
  __typename?: 'Query';

  tires: GetTireTires[];
};

export type GetTireTires = {
  __typename?: 'Tire';

  id: string;

  active: boolean;

  highlight: Maybe<boolean>;

  top: Maybe<boolean>;

  type: Maybe<string>;

  diameter: Maybe<string>;

  width: Maybe<string>;

  height: Maybe<string>;

  brand: Maybe<string>;

  condition: Maybe<string>;

  price: Maybe<number>;

  text: Maybe<string>;

  phone: string;

  phone2: Maybe<string>;

  name: Maybe<string>;

  email: string;

  city: Maybe<string>;

  expires: Maybe<number>;

  user: Maybe<GetTireUser>;
};

export type GetTireUser = {
  __typename?: 'User';

  id: string;
};

export type GetUserVariables = {
  id: string;
};

export type GetUserQuery = {
  __typename?: 'Query';

  users: GetUserUsers[];
};

export type GetUserUsers = {
  __typename?: 'User';

  id: string;

  active: boolean;

  email: string;

  name: Maybe<string>;

  phone: Maybe<string>;

  phone2: Maybe<string>;

  address: Maybe<string>;

  city: Maybe<string>;
};

export type GetUserAdsVariables = {
  id: string;
};

export type GetUserAdsQuery = {
  __typename?: 'Query';

  users: GetUserAdsUsers[];
};

export type GetUserAdsUsers = {
  __typename?: 'User';

  id: string;

  active: boolean;

  email: string;

  name: Maybe<string>;

  phone: Maybe<string>;

  phone2: Maybe<string>;

  address: Maybe<string>;

  city: Maybe<string>;

  ads: GetUserAdsAds[];

  tires: GetUserAdsTires[];

  rims: GetUserAdsRims[];
};

export type GetUserAdsAds = {
  __typename?: 'Ad';

  id: string;

  active: boolean;

  brand: Maybe<string>;

  model: Maybe<string>;

  category: Maybe<string>;

  subcategory: Maybe<string>;

  condition: Maybe<string>;

  price: Maybe<number>;

  year: Maybe<string>;

  yearTo: Maybe<string>;

  text: Maybe<string>;

  createdAt: Maybe<string>;

  adType: Maybe<string>;

  city: Maybe<string>;

  highlight: Maybe<boolean>;
};

export type GetUserAdsTires = {
  __typename?: 'Tire';

  id: string;

  active: boolean;

  highlight: Maybe<boolean>;

  condition: Maybe<string>;

  type: Maybe<string>;

  diameter: Maybe<string>;

  width: Maybe<string>;

  height: Maybe<string>;

  city: Maybe<string>;

  brand: Maybe<string>;

  price: Maybe<number>;

  text: Maybe<string>;

  createdAt: Maybe<string>;
};

export type GetUserAdsRims = {
  __typename?: 'Rim';

  id: string;

  active: boolean;

  et: Maybe<string>;

  type: Maybe<string>;

  diameter: Maybe<string>;

  highlight: Maybe<boolean>;

  holes: Maybe<string>;

  condition: Maybe<string>;

  width: Maybe<string>;

  brand: Maybe<string>;

  price: Maybe<number>;

  city: Maybe<string>;

  text: Maybe<string>;

  createdAt: Maybe<string>;
};

import gql from 'graphql-tag';
import * as React from 'react';
import * as ReactApollo from 'react-apollo';

// ====================================================
// Components
// ====================================================

export const CreateAdDocument = gql`
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
export class CreateAdComponent extends React.Component<
  Partial<ReactApollo.MutationProps<CreateAdMutation, CreateAdVariables>>
> {
  render() {
    return (
      <ReactApollo.Mutation<CreateAdMutation, CreateAdVariables>
        mutation={CreateAdDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type CreateAdProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<CreateAdMutation, CreateAdVariables>
> &
  TChildProps;
export type CreateAdMutationFn = ReactApollo.MutationFn<
  CreateAdMutation,
  CreateAdVariables
>;
export function CreateAdHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        CreateAdMutation,
        CreateAdVariables,
        CreateAdProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    CreateAdMutation,
    CreateAdVariables,
    CreateAdProps<TChildProps>
  >(CreateAdDocument, operationOptions);
}
export const UpdateAdDocument = gql`
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
export class UpdateAdComponent extends React.Component<
  Partial<ReactApollo.MutationProps<UpdateAdMutation, UpdateAdVariables>>
> {
  render() {
    return (
      <ReactApollo.Mutation<UpdateAdMutation, UpdateAdVariables>
        mutation={UpdateAdDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type UpdateAdProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<UpdateAdMutation, UpdateAdVariables>
> &
  TChildProps;
export type UpdateAdMutationFn = ReactApollo.MutationFn<
  UpdateAdMutation,
  UpdateAdVariables
>;
export function UpdateAdHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        UpdateAdMutation,
        UpdateAdVariables,
        UpdateAdProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    UpdateAdMutation,
    UpdateAdVariables,
    UpdateAdProps<TChildProps>
  >(UpdateAdDocument, operationOptions);
}
export const DeleteAdDocument = gql`
  mutation deleteAd($id: ID!) {
    deleteAd(id: $id) {
      id
    }
  }
`;
export class DeleteAdComponent extends React.Component<
  Partial<ReactApollo.MutationProps<DeleteAdMutation, DeleteAdVariables>>
> {
  render() {
    return (
      <ReactApollo.Mutation<DeleteAdMutation, DeleteAdVariables>
        mutation={DeleteAdDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type DeleteAdProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<DeleteAdMutation, DeleteAdVariables>
> &
  TChildProps;
export type DeleteAdMutationFn = ReactApollo.MutationFn<
  DeleteAdMutation,
  DeleteAdVariables
>;
export function DeleteAdHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        DeleteAdMutation,
        DeleteAdVariables,
        DeleteAdProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    DeleteAdMutation,
    DeleteAdVariables,
    DeleteAdProps<TChildProps>
  >(DeleteAdDocument, operationOptions);
}
export const ArchiveAdDocument = gql`
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
export class ArchiveAdComponent extends React.Component<
  Partial<ReactApollo.MutationProps<ArchiveAdMutation, ArchiveAdVariables>>
> {
  render() {
    return (
      <ReactApollo.Mutation<ArchiveAdMutation, ArchiveAdVariables>
        mutation={ArchiveAdDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type ArchiveAdProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<ArchiveAdMutation, ArchiveAdVariables>
> &
  TChildProps;
export type ArchiveAdMutationFn = ReactApollo.MutationFn<
  ArchiveAdMutation,
  ArchiveAdVariables
>;
export function ArchiveAdHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        ArchiveAdMutation,
        ArchiveAdVariables,
        ArchiveAdProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    ArchiveAdMutation,
    ArchiveAdVariables,
    ArchiveAdProps<TChildProps>
  >(ArchiveAdDocument, operationOptions);
}
export const ActivateAdDocument = gql`
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
export class ActivateAdComponent extends React.Component<
  Partial<ReactApollo.MutationProps<ActivateAdMutation, ActivateAdVariables>>
> {
  render() {
    return (
      <ReactApollo.Mutation<ActivateAdMutation, ActivateAdVariables>
        mutation={ActivateAdDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type ActivateAdProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<ActivateAdMutation, ActivateAdVariables>
> &
  TChildProps;
export type ActivateAdMutationFn = ReactApollo.MutationFn<
  ActivateAdMutation,
  ActivateAdVariables
>;
export function ActivateAdHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        ActivateAdMutation,
        ActivateAdVariables,
        ActivateAdProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    ActivateAdMutation,
    ActivateAdVariables,
    ActivateAdProps<TChildProps>
  >(ActivateAdDocument, operationOptions);
}
export const ContactDocument = gql`
  mutation contact($name: String!, $email: String!, $message: String!) {
    contact(data: { name: $name, email: $email, message: $message })
  }
`;
export class ContactComponent extends React.Component<
  Partial<ReactApollo.MutationProps<ContactMutation, ContactVariables>>
> {
  render() {
    return (
      <ReactApollo.Mutation<ContactMutation, ContactVariables>
        mutation={ContactDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type ContactProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<ContactMutation, ContactVariables>
> &
  TChildProps;
export type ContactMutationFn = ReactApollo.MutationFn<
  ContactMutation,
  ContactVariables
>;
export function ContactHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        ContactMutation,
        ContactVariables,
        ContactProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    ContactMutation,
    ContactVariables,
    ContactProps<TChildProps>
  >(ContactDocument, operationOptions);
}
export const CreateRimDocument = gql`
  mutation createRim(
    $active: Boolean!
    $highlight: Boolean!
    $type: String!
    $diameter: String
    $width: String
    $holes: String
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
    $et: String
  ) {
    createRim(
      data: {
        active: $active
        highlight: $highlight
        userId: $userId
        type: $type
        diameter: $diameter
        width: $width
        holes: $holes
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
        et: $et
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
export class CreateRimComponent extends React.Component<
  Partial<ReactApollo.MutationProps<CreateRimMutation, CreateRimVariables>>
> {
  render() {
    return (
      <ReactApollo.Mutation<CreateRimMutation, CreateRimVariables>
        mutation={CreateRimDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type CreateRimProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<CreateRimMutation, CreateRimVariables>
> &
  TChildProps;
export type CreateRimMutationFn = ReactApollo.MutationFn<
  CreateRimMutation,
  CreateRimVariables
>;
export function CreateRimHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        CreateRimMutation,
        CreateRimVariables,
        CreateRimProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    CreateRimMutation,
    CreateRimVariables,
    CreateRimProps<TChildProps>
  >(CreateRimDocument, operationOptions);
}
export const UpdateRimDocument = gql`
  mutation updateRim(
    $id: ID!
    $type: String!
    $diameter: String
    $width: String
    $holes: String
    $brand: String
    $condition: String
    $price: Int
    $text: String
    $phone: String
    $phone2: String
    $name: String
    $email: String
    $city: String
    $et: String
  ) {
    updateRim(
      id: $id
      data: {
        type: $type
        diameter: $diameter
        width: $width
        holes: $holes
        brand: $brand
        condition: $condition
        price: $price
        text: $text
        phone: $phone
        phone2: $phone2
        name: $name
        email: $email
        city: $city
        et: $et
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
export class UpdateRimComponent extends React.Component<
  Partial<ReactApollo.MutationProps<UpdateRimMutation, UpdateRimVariables>>
> {
  render() {
    return (
      <ReactApollo.Mutation<UpdateRimMutation, UpdateRimVariables>
        mutation={UpdateRimDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type UpdateRimProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<UpdateRimMutation, UpdateRimVariables>
> &
  TChildProps;
export type UpdateRimMutationFn = ReactApollo.MutationFn<
  UpdateRimMutation,
  UpdateRimVariables
>;
export function UpdateRimHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        UpdateRimMutation,
        UpdateRimVariables,
        UpdateRimProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    UpdateRimMutation,
    UpdateRimVariables,
    UpdateRimProps<TChildProps>
  >(UpdateRimDocument, operationOptions);
}
export const DeleteRimDocument = gql`
  mutation deleteRim($id: ID!) {
    deleteRim(id: $id) {
      id
    }
  }
`;
export class DeleteRimComponent extends React.Component<
  Partial<ReactApollo.MutationProps<DeleteRimMutation, DeleteRimVariables>>
> {
  render() {
    return (
      <ReactApollo.Mutation<DeleteRimMutation, DeleteRimVariables>
        mutation={DeleteRimDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type DeleteRimProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<DeleteRimMutation, DeleteRimVariables>
> &
  TChildProps;
export type DeleteRimMutationFn = ReactApollo.MutationFn<
  DeleteRimMutation,
  DeleteRimVariables
>;
export function DeleteRimHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        DeleteRimMutation,
        DeleteRimVariables,
        DeleteRimProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    DeleteRimMutation,
    DeleteRimVariables,
    DeleteRimProps<TChildProps>
  >(DeleteRimDocument, operationOptions);
}
export const ArchiveRimDocument = gql`
  mutation archiveRim($id: ID!) {
    updateRim(id: $id, data: { active: false }) {
      id
      type
      diameter
      width
      brand
    }
  }
`;
export class ArchiveRimComponent extends React.Component<
  Partial<ReactApollo.MutationProps<ArchiveRimMutation, ArchiveRimVariables>>
> {
  render() {
    return (
      <ReactApollo.Mutation<ArchiveRimMutation, ArchiveRimVariables>
        mutation={ArchiveRimDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type ArchiveRimProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<ArchiveRimMutation, ArchiveRimVariables>
> &
  TChildProps;
export type ArchiveRimMutationFn = ReactApollo.MutationFn<
  ArchiveRimMutation,
  ArchiveRimVariables
>;
export function ArchiveRimHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        ArchiveRimMutation,
        ArchiveRimVariables,
        ArchiveRimProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    ArchiveRimMutation,
    ArchiveRimVariables,
    ArchiveRimProps<TChildProps>
  >(ArchiveRimDocument, operationOptions);
}
export const ActivateRimDocument = gql`
  mutation activateRim($id: ID!) {
    updateRim(id: $id, data: { active: true }) {
      id
      type
      diameter
      width
      brand
    }
  }
`;
export class ActivateRimComponent extends React.Component<
  Partial<ReactApollo.MutationProps<ActivateRimMutation, ActivateRimVariables>>
> {
  render() {
    return (
      <ReactApollo.Mutation<ActivateRimMutation, ActivateRimVariables>
        mutation={ActivateRimDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type ActivateRimProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<ActivateRimMutation, ActivateRimVariables>
> &
  TChildProps;
export type ActivateRimMutationFn = ReactApollo.MutationFn<
  ActivateRimMutation,
  ActivateRimVariables
>;
export function ActivateRimHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        ActivateRimMutation,
        ActivateRimVariables,
        ActivateRimProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    ActivateRimMutation,
    ActivateRimVariables,
    ActivateRimProps<TChildProps>
  >(ActivateRimDocument, operationOptions);
}
export const CreateTireDocument = gql`
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
export class CreateTireComponent extends React.Component<
  Partial<ReactApollo.MutationProps<CreateTireMutation, CreateTireVariables>>
> {
  render() {
    return (
      <ReactApollo.Mutation<CreateTireMutation, CreateTireVariables>
        mutation={CreateTireDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type CreateTireProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<CreateTireMutation, CreateTireVariables>
> &
  TChildProps;
export type CreateTireMutationFn = ReactApollo.MutationFn<
  CreateTireMutation,
  CreateTireVariables
>;
export function CreateTireHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        CreateTireMutation,
        CreateTireVariables,
        CreateTireProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    CreateTireMutation,
    CreateTireVariables,
    CreateTireProps<TChildProps>
  >(CreateTireDocument, operationOptions);
}
export const UpdateTireDocument = gql`
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
export class UpdateTireComponent extends React.Component<
  Partial<ReactApollo.MutationProps<UpdateTireMutation, UpdateTireVariables>>
> {
  render() {
    return (
      <ReactApollo.Mutation<UpdateTireMutation, UpdateTireVariables>
        mutation={UpdateTireDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type UpdateTireProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<UpdateTireMutation, UpdateTireVariables>
> &
  TChildProps;
export type UpdateTireMutationFn = ReactApollo.MutationFn<
  UpdateTireMutation,
  UpdateTireVariables
>;
export function UpdateTireHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        UpdateTireMutation,
        UpdateTireVariables,
        UpdateTireProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    UpdateTireMutation,
    UpdateTireVariables,
    UpdateTireProps<TChildProps>
  >(UpdateTireDocument, operationOptions);
}
export const DeleteTireDocument = gql`
  mutation deleteTire($id: ID!) {
    deleteTire(id: $id) {
      id
    }
  }
`;
export class DeleteTireComponent extends React.Component<
  Partial<ReactApollo.MutationProps<DeleteTireMutation, DeleteTireVariables>>
> {
  render() {
    return (
      <ReactApollo.Mutation<DeleteTireMutation, DeleteTireVariables>
        mutation={DeleteTireDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type DeleteTireProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<DeleteTireMutation, DeleteTireVariables>
> &
  TChildProps;
export type DeleteTireMutationFn = ReactApollo.MutationFn<
  DeleteTireMutation,
  DeleteTireVariables
>;
export function DeleteTireHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        DeleteTireMutation,
        DeleteTireVariables,
        DeleteTireProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    DeleteTireMutation,
    DeleteTireVariables,
    DeleteTireProps<TChildProps>
  >(DeleteTireDocument, operationOptions);
}
export const ArchiveTireDocument = gql`
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
export class ArchiveTireComponent extends React.Component<
  Partial<ReactApollo.MutationProps<ArchiveTireMutation, ArchiveTireVariables>>
> {
  render() {
    return (
      <ReactApollo.Mutation<ArchiveTireMutation, ArchiveTireVariables>
        mutation={ArchiveTireDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type ArchiveTireProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<ArchiveTireMutation, ArchiveTireVariables>
> &
  TChildProps;
export type ArchiveTireMutationFn = ReactApollo.MutationFn<
  ArchiveTireMutation,
  ArchiveTireVariables
>;
export function ArchiveTireHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        ArchiveTireMutation,
        ArchiveTireVariables,
        ArchiveTireProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    ArchiveTireMutation,
    ArchiveTireVariables,
    ArchiveTireProps<TChildProps>
  >(ArchiveTireDocument, operationOptions);
}
export const ActivateTireDocument = gql`
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
export class ActivateTireComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<ActivateTireMutation, ActivateTireVariables>
  >
> {
  render() {
    return (
      <ReactApollo.Mutation<ActivateTireMutation, ActivateTireVariables>
        mutation={ActivateTireDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type ActivateTireProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<ActivateTireMutation, ActivateTireVariables>
> &
  TChildProps;
export type ActivateTireMutationFn = ReactApollo.MutationFn<
  ActivateTireMutation,
  ActivateTireVariables
>;
export function ActivateTireHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        ActivateTireMutation,
        ActivateTireVariables,
        ActivateTireProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    ActivateTireMutation,
    ActivateTireVariables,
    ActivateTireProps<TChildProps>
  >(ActivateTireDocument, operationOptions);
}
export const UploadFileDocument = gql`
  mutation uploadFile($file: Upload!, $id: ID!, $type: String!) {
    uploadFile(file: $file, id: $id, type: $type)
  }
`;
export class UploadFileComponent extends React.Component<
  Partial<ReactApollo.MutationProps<UploadFileMutation, UploadFileVariables>>
> {
  render() {
    return (
      <ReactApollo.Mutation<UploadFileMutation, UploadFileVariables>
        mutation={UploadFileDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type UploadFileProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<UploadFileMutation, UploadFileVariables>
> &
  TChildProps;
export type UploadFileMutationFn = ReactApollo.MutationFn<
  UploadFileMutation,
  UploadFileVariables
>;
export function UploadFileHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        UploadFileMutation,
        UploadFileVariables,
        UploadFileProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    UploadFileMutation,
    UploadFileVariables,
    UploadFileProps<TChildProps>
  >(UploadFileDocument, operationOptions);
}
export const DeleteFileDocument = gql`
  mutation deleteFile($id: String!) {
    deleteFile(id: $id)
  }
`;
export class DeleteFileComponent extends React.Component<
  Partial<ReactApollo.MutationProps<DeleteFileMutation, DeleteFileVariables>>
> {
  render() {
    return (
      <ReactApollo.Mutation<DeleteFileMutation, DeleteFileVariables>
        mutation={DeleteFileDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type DeleteFileProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<DeleteFileMutation, DeleteFileVariables>
> &
  TChildProps;
export type DeleteFileMutationFn = ReactApollo.MutationFn<
  DeleteFileMutation,
  DeleteFileVariables
>;
export function DeleteFileHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        DeleteFileMutation,
        DeleteFileVariables,
        DeleteFileProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    DeleteFileMutation,
    DeleteFileVariables,
    DeleteFileProps<TChildProps>
  >(DeleteFileDocument, operationOptions);
}
export const CreateUserDocument = gql`
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
export class CreateUserComponent extends React.Component<
  Partial<ReactApollo.MutationProps<CreateUserMutation, CreateUserVariables>>
> {
  render() {
    return (
      <ReactApollo.Mutation<CreateUserMutation, CreateUserVariables>
        mutation={CreateUserDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type CreateUserProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<CreateUserMutation, CreateUserVariables>
> &
  TChildProps;
export type CreateUserMutationFn = ReactApollo.MutationFn<
  CreateUserMutation,
  CreateUserVariables
>;
export function CreateUserHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        CreateUserMutation,
        CreateUserVariables,
        CreateUserProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    CreateUserMutation,
    CreateUserVariables,
    CreateUserProps<TChildProps>
  >(CreateUserDocument, operationOptions);
}
export const UpdateUserDocument = gql`
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
export class UpdateUserComponent extends React.Component<
  Partial<ReactApollo.MutationProps<UpdateUserMutation, UpdateUserVariables>>
> {
  render() {
    return (
      <ReactApollo.Mutation<UpdateUserMutation, UpdateUserVariables>
        mutation={UpdateUserDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type UpdateUserProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<UpdateUserMutation, UpdateUserVariables>
> &
  TChildProps;
export type UpdateUserMutationFn = ReactApollo.MutationFn<
  UpdateUserMutation,
  UpdateUserVariables
>;
export function UpdateUserHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        UpdateUserMutation,
        UpdateUserVariables,
        UpdateUserProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    UpdateUserMutation,
    UpdateUserVariables,
    UpdateUserProps<TChildProps>
  >(UpdateUserDocument, operationOptions);
}
export const UpdatePasswordDocument = gql`
  mutation updatePassword($id: ID!, $password: String!) {
    updateUser(id: $id, data: { password: $password }) {
      id
    }
  }
`;
export class UpdatePasswordComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<UpdatePasswordMutation, UpdatePasswordVariables>
  >
> {
  render() {
    return (
      <ReactApollo.Mutation<UpdatePasswordMutation, UpdatePasswordVariables>
        mutation={UpdatePasswordDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type UpdatePasswordProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<UpdatePasswordMutation, UpdatePasswordVariables>
> &
  TChildProps;
export type UpdatePasswordMutationFn = ReactApollo.MutationFn<
  UpdatePasswordMutation,
  UpdatePasswordVariables
>;
export function UpdatePasswordHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        UpdatePasswordMutation,
        UpdatePasswordVariables,
        UpdatePasswordProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    UpdatePasswordMutation,
    UpdatePasswordVariables,
    UpdatePasswordProps<TChildProps>
  >(UpdatePasswordDocument, operationOptions);
}
export const ResetPasswordDocument = gql`
  mutation resetPassword($email: String!) {
    resetPassword(data: { email: $email }) {
      active
    }
  }
`;
export class ResetPasswordComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<ResetPasswordMutation, ResetPasswordVariables>
  >
> {
  render() {
    return (
      <ReactApollo.Mutation<ResetPasswordMutation, ResetPasswordVariables>
        mutation={ResetPasswordDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type ResetPasswordProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<ResetPasswordMutation, ResetPasswordVariables>
> &
  TChildProps;
export type ResetPasswordMutationFn = ReactApollo.MutationFn<
  ResetPasswordMutation,
  ResetPasswordVariables
>;
export function ResetPasswordHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        ResetPasswordMutation,
        ResetPasswordVariables,
        ResetPasswordProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    ResetPasswordMutation,
    ResetPasswordVariables,
    ResetPasswordProps<TChildProps>
  >(ResetPasswordDocument, operationOptions);
}
export const ResetCompleteDocument = gql`
  mutation resetComplete($token: String!, $password: String!) {
    resetComplete(data: { token: $token, password: $password }) {
      active
    }
  }
`;
export class ResetCompleteComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<ResetCompleteMutation, ResetCompleteVariables>
  >
> {
  render() {
    return (
      <ReactApollo.Mutation<ResetCompleteMutation, ResetCompleteVariables>
        mutation={ResetCompleteDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type ResetCompleteProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<ResetCompleteMutation, ResetCompleteVariables>
> &
  TChildProps;
export type ResetCompleteMutationFn = ReactApollo.MutationFn<
  ResetCompleteMutation,
  ResetCompleteVariables
>;
export function ResetCompleteHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        ResetCompleteMutation,
        ResetCompleteVariables,
        ResetCompleteProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    ResetCompleteMutation,
    ResetCompleteVariables,
    ResetCompleteProps<TChildProps>
  >(ResetCompleteDocument, operationOptions);
}
export const ActivateUserDocument = gql`
  mutation activateUser($token: String!) {
    activateUser(data: { token: $token }) {
      active
    }
  }
`;
export class ActivateUserComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<ActivateUserMutation, ActivateUserVariables>
  >
> {
  render() {
    return (
      <ReactApollo.Mutation<ActivateUserMutation, ActivateUserVariables>
        mutation={ActivateUserDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type ActivateUserProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<ActivateUserMutation, ActivateUserVariables>
> &
  TChildProps;
export type ActivateUserMutationFn = ReactApollo.MutationFn<
  ActivateUserMutation,
  ActivateUserVariables
>;
export function ActivateUserHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        ActivateUserMutation,
        ActivateUserVariables,
        ActivateUserProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    ActivateUserMutation,
    ActivateUserVariables,
    ActivateUserProps<TChildProps>
  >(ActivateUserDocument, operationOptions);
}
export const LoginDocument = gql`
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
export class LoginComponent extends React.Component<
  Partial<ReactApollo.MutationProps<LoginMutation, LoginVariables>>
> {
  render() {
    return (
      <ReactApollo.Mutation<LoginMutation, LoginVariables>
        mutation={LoginDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type LoginProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<LoginMutation, LoginVariables>
> &
  TChildProps;
export type LoginMutationFn = ReactApollo.MutationFn<
  LoginMutation,
  LoginVariables
>;
export function LoginHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        LoginMutation,
        LoginVariables,
        LoginProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    LoginMutation,
    LoginVariables,
    LoginProps<TChildProps>
  >(LoginDocument, operationOptions);
}
export const GetTopAdsDocument = gql`
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
export class GetTopAdsComponent extends React.Component<
  Partial<ReactApollo.QueryProps<GetTopAdsQuery, GetTopAdsVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<GetTopAdsQuery, GetTopAdsVariables>
        query={GetTopAdsDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type GetTopAdsProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<GetTopAdsQuery, GetTopAdsVariables>
> &
  TChildProps;
export function GetTopAdsHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        GetTopAdsQuery,
        GetTopAdsVariables,
        GetTopAdsProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    GetTopAdsQuery,
    GetTopAdsVariables,
    GetTopAdsProps<TChildProps>
  >(GetTopAdsDocument, operationOptions);
}
export const GetPromoAdsDocument = gql`
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
export class GetPromoAdsComponent extends React.Component<
  Partial<ReactApollo.QueryProps<GetPromoAdsQuery, GetPromoAdsVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<GetPromoAdsQuery, GetPromoAdsVariables>
        query={GetPromoAdsDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type GetPromoAdsProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<GetPromoAdsQuery, GetPromoAdsVariables>
> &
  TChildProps;
export function GetPromoAdsHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        GetPromoAdsQuery,
        GetPromoAdsVariables,
        GetPromoAdsProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    GetPromoAdsQuery,
    GetPromoAdsVariables,
    GetPromoAdsProps<TChildProps>
  >(GetPromoAdsDocument, operationOptions);
}
export const GetFirstAdsDocument = gql`
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
export class GetFirstAdsComponent extends React.Component<
  Partial<ReactApollo.QueryProps<GetFirstAdsQuery, GetFirstAdsVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<GetFirstAdsQuery, GetFirstAdsVariables>
        query={GetFirstAdsDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type GetFirstAdsProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<GetFirstAdsQuery, GetFirstAdsVariables>
> &
  TChildProps;
export function GetFirstAdsHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        GetFirstAdsQuery,
        GetFirstAdsVariables,
        GetFirstAdsProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    GetFirstAdsQuery,
    GetFirstAdsVariables,
    GetFirstAdsProps<TChildProps>
  >(GetFirstAdsDocument, operationOptions);
}
export const GetAdsDocument = gql`
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
export class GetAdsComponent extends React.Component<
  Partial<ReactApollo.QueryProps<GetAdsQuery, GetAdsVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<GetAdsQuery, GetAdsVariables>
        query={GetAdsDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type GetAdsProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<GetAdsQuery, GetAdsVariables>
> &
  TChildProps;
export function GetAdsHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        GetAdsQuery,
        GetAdsVariables,
        GetAdsProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    GetAdsQuery,
    GetAdsVariables,
    GetAdsProps<TChildProps>
  >(GetAdsDocument, operationOptions);
}
export const GetArchivedAdsDocument = gql`
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
export class GetArchivedAdsComponent extends React.Component<
  Partial<ReactApollo.QueryProps<GetArchivedAdsQuery, GetArchivedAdsVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<GetArchivedAdsQuery, GetArchivedAdsVariables>
        query={GetArchivedAdsDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type GetArchivedAdsProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<GetArchivedAdsQuery, GetArchivedAdsVariables>
> &
  TChildProps;
export function GetArchivedAdsHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        GetArchivedAdsQuery,
        GetArchivedAdsVariables,
        GetArchivedAdsProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    GetArchivedAdsQuery,
    GetArchivedAdsVariables,
    GetArchivedAdsProps<TChildProps>
  >(GetArchivedAdsDocument, operationOptions);
}
export const GetAdDocument = gql`
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
export class GetAdComponent extends React.Component<
  Partial<ReactApollo.QueryProps<GetAdQuery, GetAdVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<GetAdQuery, GetAdVariables>
        query={GetAdDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type GetAdProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<GetAdQuery, GetAdVariables>
> &
  TChildProps;
export function GetAdHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        GetAdQuery,
        GetAdVariables,
        GetAdProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    GetAdQuery,
    GetAdVariables,
    GetAdProps<TChildProps>
  >(GetAdDocument, operationOptions);
}
export const GetMyAdsDocument = gql`
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
export class GetMyAdsComponent extends React.Component<
  Partial<ReactApollo.QueryProps<GetMyAdsQuery, GetMyAdsVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<GetMyAdsQuery, GetMyAdsVariables>
        query={GetMyAdsDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type GetMyAdsProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<GetMyAdsQuery, GetMyAdsVariables>
> &
  TChildProps;
export function GetMyAdsHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        GetMyAdsQuery,
        GetMyAdsVariables,
        GetMyAdsProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    GetMyAdsQuery,
    GetMyAdsVariables,
    GetMyAdsProps<TChildProps>
  >(GetMyAdsDocument, operationOptions);
}
export const GetMyInfoDocument = gql`
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
export class GetMyInfoComponent extends React.Component<
  Partial<ReactApollo.QueryProps<GetMyInfoQuery, GetMyInfoVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<GetMyInfoQuery, GetMyInfoVariables>
        query={GetMyInfoDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type GetMyInfoProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<GetMyInfoQuery, GetMyInfoVariables>
> &
  TChildProps;
export function GetMyInfoHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        GetMyInfoQuery,
        GetMyInfoVariables,
        GetMyInfoProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    GetMyInfoQuery,
    GetMyInfoVariables,
    GetMyInfoProps<TChildProps>
  >(GetMyInfoDocument, operationOptions);
}
export const GetTopRimsDocument = gql`
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
export class GetTopRimsComponent extends React.Component<
  Partial<ReactApollo.QueryProps<GetTopRimsQuery, GetTopRimsVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<GetTopRimsQuery, GetTopRimsVariables>
        query={GetTopRimsDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type GetTopRimsProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<GetTopRimsQuery, GetTopRimsVariables>
> &
  TChildProps;
export function GetTopRimsHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        GetTopRimsQuery,
        GetTopRimsVariables,
        GetTopRimsProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    GetTopRimsQuery,
    GetTopRimsVariables,
    GetTopRimsProps<TChildProps>
  >(GetTopRimsDocument, operationOptions);
}
export const GetRimsDocument = gql`
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
export class GetRimsComponent extends React.Component<
  Partial<ReactApollo.QueryProps<GetRimsQuery, GetRimsVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<GetRimsQuery, GetRimsVariables>
        query={GetRimsDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type GetRimsProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<GetRimsQuery, GetRimsVariables>
> &
  TChildProps;
export function GetRimsHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        GetRimsQuery,
        GetRimsVariables,
        GetRimsProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    GetRimsQuery,
    GetRimsVariables,
    GetRimsProps<TChildProps>
  >(GetRimsDocument, operationOptions);
}
export const GetRimDocument = gql`
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
export class GetRimComponent extends React.Component<
  Partial<ReactApollo.QueryProps<GetRimQuery, GetRimVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<GetRimQuery, GetRimVariables>
        query={GetRimDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type GetRimProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<GetRimQuery, GetRimVariables>
> &
  TChildProps;
export function GetRimHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        GetRimQuery,
        GetRimVariables,
        GetRimProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    GetRimQuery,
    GetRimVariables,
    GetRimProps<TChildProps>
  >(GetRimDocument, operationOptions);
}
export const GetTopTiresDocument = gql`
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
export class GetTopTiresComponent extends React.Component<
  Partial<ReactApollo.QueryProps<GetTopTiresQuery, GetTopTiresVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<GetTopTiresQuery, GetTopTiresVariables>
        query={GetTopTiresDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type GetTopTiresProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<GetTopTiresQuery, GetTopTiresVariables>
> &
  TChildProps;
export function GetTopTiresHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        GetTopTiresQuery,
        GetTopTiresVariables,
        GetTopTiresProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    GetTopTiresQuery,
    GetTopTiresVariables,
    GetTopTiresProps<TChildProps>
  >(GetTopTiresDocument, operationOptions);
}
export const GetTiresDocument = gql`
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
export class GetTiresComponent extends React.Component<
  Partial<ReactApollo.QueryProps<GetTiresQuery, GetTiresVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<GetTiresQuery, GetTiresVariables>
        query={GetTiresDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type GetTiresProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<GetTiresQuery, GetTiresVariables>
> &
  TChildProps;
export function GetTiresHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        GetTiresQuery,
        GetTiresVariables,
        GetTiresProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    GetTiresQuery,
    GetTiresVariables,
    GetTiresProps<TChildProps>
  >(GetTiresDocument, operationOptions);
}
export const GetArchivedTiresDocument = gql`
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
export class GetArchivedTiresComponent extends React.Component<
  Partial<
    ReactApollo.QueryProps<GetArchivedTiresQuery, GetArchivedTiresVariables>
  >
> {
  render() {
    return (
      <ReactApollo.Query<GetArchivedTiresQuery, GetArchivedTiresVariables>
        query={GetArchivedTiresDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type GetArchivedTiresProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<GetArchivedTiresQuery, GetArchivedTiresVariables>
> &
  TChildProps;
export function GetArchivedTiresHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        GetArchivedTiresQuery,
        GetArchivedTiresVariables,
        GetArchivedTiresProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    GetArchivedTiresQuery,
    GetArchivedTiresVariables,
    GetArchivedTiresProps<TChildProps>
  >(GetArchivedTiresDocument, operationOptions);
}
export const GetTireDocument = gql`
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
export class GetTireComponent extends React.Component<
  Partial<ReactApollo.QueryProps<GetTireQuery, GetTireVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<GetTireQuery, GetTireVariables>
        query={GetTireDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type GetTireProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<GetTireQuery, GetTireVariables>
> &
  TChildProps;
export function GetTireHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        GetTireQuery,
        GetTireVariables,
        GetTireProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    GetTireQuery,
    GetTireVariables,
    GetTireProps<TChildProps>
  >(GetTireDocument, operationOptions);
}
export const GetUserDocument = gql`
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
export class GetUserComponent extends React.Component<
  Partial<ReactApollo.QueryProps<GetUserQuery, GetUserVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<GetUserQuery, GetUserVariables>
        query={GetUserDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type GetUserProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<GetUserQuery, GetUserVariables>
> &
  TChildProps;
export function GetUserHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        GetUserQuery,
        GetUserVariables,
        GetUserProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    GetUserQuery,
    GetUserVariables,
    GetUserProps<TChildProps>
  >(GetUserDocument, operationOptions);
}
export const GetUserAdsDocument = gql`
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
export class GetUserAdsComponent extends React.Component<
  Partial<ReactApollo.QueryProps<GetUserAdsQuery, GetUserAdsVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<GetUserAdsQuery, GetUserAdsVariables>
        query={GetUserAdsDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type GetUserAdsProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<GetUserAdsQuery, GetUserAdsVariables>
> &
  TChildProps;
export function GetUserAdsHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        GetUserAdsQuery,
        GetUserAdsVariables,
        GetUserAdsProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    GetUserAdsQuery,
    GetUserAdsVariables,
    GetUserAdsProps<TChildProps>
  >(GetUserAdsDocument, operationOptions);
}
