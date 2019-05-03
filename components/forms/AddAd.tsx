import * as React from 'react';

import { Formik } from 'formik';

import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Input,
  InputGroup,
  InputGroupAddon,
} from 'reactstrap';

import adValidationSchema from '../../validations/ad';
import Router from '../../routes';

import SelectInput from '../inputs/SelectInput';

import { CONDITION, CITIES } from '../../constants/general.constants';
import { YEAR } from '../../constants/years.constants';

import UserFields from './UserFields';

import {
  CreateAdComponent,
  CreateAdMutation,
  UploadFileComponent,
  UploadFileMutation,
} from '../../generated/apolloComponents';

import { FOLDER_ADS } from '../../constants/general.constants';

import { FetchResult } from 'react-apollo';

import {
  AD_BRANDS,
  AD_PART_CATEGORIES,
  AD_EQUIPMENT_CATEGORIES,
} from '../../constants/ad.constants';

const AddAd = ({ user }: any) => {
  const parseCategories = (options: any[]) => {
    let newOptions: any = [];
    newOptions = options.map(item => {
      return { value: item.name, label: item.name };
    });
    return newOptions;
  };

  const parseSubcategories = (
    options: any[],
    currentCategory: string,
    sublabel: string,
  ) => {
    let subCategroriesList: any[] = [];
    options.forEach(category => {
      if (category.name === currentCategory) {
        subCategroriesList = [...parseOptions(category[sublabel])];
      }
    });
    return subCategroriesList;
  };

  const parseOptions = (options: String[]) => {
    return options.map(item => {
      return { value: item, label: item };
    });
  };

  const parseYears = (options: string[]) => {
    return options.map(item => {
      return { value: item, label: item };
    });
  };

  const [getImages, setImages] = React.useState([
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  return (
    <UploadFileComponent>
      {uploadFile => (
        <CreateAdComponent>
          {createAd => (
            <Formik
              validationSchema={adValidationSchema}
              initialValues={{
                active: true,
                highlight: false,

                adType: { value: 'Deo', label: 'Delovi' },
                brand: null,
                model: null,
                year: null,
                yearTo: null,
                category: null,
                subcategory: null,

                condition: null,
                label: '',

                type: '',

                price: '',
                text: '',
                // User info
                name: user ? user.name : '',
                email: user ? user.email : '',
                phone: user ? user.phone : '',
                phone2: user ? user.phone2 : '',
                city: user ? { value: user.city, label: user.city } : null,
                userId: user ? user.id : null,
                expires: 30,
              }}
              onSubmit={async (data, { setSubmitting, resetForm }) => {
                let trimmedData = { ...data };
                if (!trimmedData.userId) {
                  delete trimmedData.userId;
                }

                try {
                  const response: void | FetchResult<
                    CreateAdMutation,
                    Record<string, any>
                  > = await createAd({
                    // @ts-ignore
                    variables: {
                      ...trimmedData,
                      price: parseInt(trimmedData.price),
                      adType: trimmedData.adType && trimmedData.adType.value,
                      brand: trimmedData.brand && trimmedData.brand.value,
                      model: trimmedData.model && trimmedData.model.value,
                      year: trimmedData.year && trimmedData.year.value,
                      yearTo: trimmedData.yearTo && trimmedData.yearTo.value,
                      category:
                        trimmedData.category && trimmedData.category.value,
                      subcategory:
                        trimmedData.subcategory &&
                        trimmedData.subcategory.value,
                      condition:
                        trimmedData.condition && trimmedData.condition.value,
                      city: trimmedData.city && trimmedData.city.value,
                    },
                  });

                  async function asyncForEach(array: any, callback: any) {
                    for (let index = 0; index < array.length; index++) {
                      await callback(array[index], index, array);
                    }
                  }

                  const uploadImages = async () => {
                    let index = 0;
                    await asyncForEach(getImages, async (file: File) => {
                      if (file) {
                        index = index + 1;
                        try {
                          const uploadFileResponse: void | FetchResult<
                            UploadFileMutation,
                            Record<string, any>
                          > = await uploadFile({
                            variables: {
                              file: file,
                              // @ts-ignore
                              id: `${response.data.createAd.id}-${index}`,
                              type: FOLDER_ADS,
                            },
                          });
                        } catch (uploadFileError) {
                          console.log(uploadFileError)
                        }
                      }
                    });
                  };

                  await uploadImages();

                  resetForm();
                  Router.pushRoute('oglas-delovi-i-oprema', {
                    //@ts-ignore
                    id: response.data.createAd.id,
                  });
                } catch (err) {
                  console.log(
                    err
                  );
                  resetForm();
                }
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                setFieldValue,
              }) => (
                  <Form onSubmit={handleSubmit}>
                    <Container style={{ padding: '0px', maxWidth: '100%' }}>
                      <Row>
                        <Col
                          xs="12"
                          sm="4"
                          style={{ paddingTop: '5px', paddingBottom: '5px' }}
                        >
                          <SelectInput
                            value={values.adType}
                            placeholder="Tip*"
                            options={[
                              {
                                value: 'Deo',
                                label: 'Delovi',
                              },
                              { value: 'Oprema', label: 'Oprema' },
                            ]}
                            onChange={(option: any) => {
                              setFieldValue('category', null);
                              setFieldValue('subcategory', null);
                              setFieldValue('adType', option);
                            }}
                          />
                        </Col>
                        <Col
                          xs="12"
                          sm="4"
                          style={{ paddingTop: '5px', paddingBottom: '5px' }}
                        >
                          <SelectInput
                            invalid={touched.brand && errors.brand && true}
                            value={values.brand}
                            placeholder="Marka"
                            options={parseCategories(AD_BRANDS)}
                            onChange={(option: any) => {
                              setFieldValue('model', null);
                              setFieldValue('brand', option);
                            }}
                          />
                        </Col>
                        <Col
                          xs="12"
                          sm="4"
                          style={{ paddingTop: '5px', paddingBottom: '5px' }}
                        >
                          <SelectInput
                            invalid={touched.model && errors.model && true}
                            value={values.model}
                            placeholder="Model"
                            options={parseSubcategories(
                              AD_BRANDS,
                              values.brand && values.brand.value,
                              'models',
                            )}
                            onChange={(option: any) =>
                              setFieldValue('model', option)
                            }
                          />
                        </Col>
                      </Row>

                      <Row>

                        <Col
                          xs="12"
                          sm="4"
                          style={{ paddingTop: '5px', paddingBottom: '5px' }}
                        >

                          <SelectInput
                            invalid={
                              touched.condition && errors.condition && true
                            }
                            value={values.condition}
                            placeholder="Stanje*"
                            options={parseOptions(CONDITION)}
                            onChange={(option: any) =>
                              setFieldValue('condition', option)
                            }
                          />
                        </Col>

                        <Col
                          xs="12"
                          sm="4"
                          style={{ paddingTop: '5px', paddingBottom: '5px' }}
                        >
                          <SelectInput
                            invalid={touched.category && errors.category && true}
                            value={values.category}
                            placeholder={
                              values.adType.value !== 'Oprema'
                                ? 'Kategorije delova*'
                                : 'Kategorije opreme*'
                            }
                            options={
                              values.adType.value !== 'Oprema'
                                ? parseCategories(AD_PART_CATEGORIES)
                                : parseCategories(AD_EQUIPMENT_CATEGORIES)
                            }
                            onChange={(option: any) => {
                              setFieldValue('subcategory', null);
                              setFieldValue('category', option);
                            }}
                          />
                        </Col>
                        <Col
                          xs="12"
                          sm="4"
                          style={{ paddingTop: '5px', paddingBottom: '5px' }}
                        >
                          <SelectInput
                            invalid={
                              touched.subcategory && errors.subcategory && true
                            }
                            value={values.subcategory}
                            placeholder="Potkategorija*"
                            options={parseSubcategories(
                              values.adType && values.adType.value !== 'Oprema'
                                ? AD_PART_CATEGORIES
                                : AD_EQUIPMENT_CATEGORIES,
                              values.category && values.category.value,
                              'subcategories',
                            )}
                            onChange={(option: any) =>
                              setFieldValue('subcategory', option)
                            }
                          />
                        </Col>

                        <Col
                          xs="12"
                          sm="4"
                          style={{ paddingTop: '5px', paddingBottom: '5px' }}
                        >
                          <SelectInput
                            invalid={touched.year && errors.year && true}
                            value={values.year}
                            placeholder="Godište od"
                            options={parseYears(YEAR)}
                            onChange={(option: any) =>
                              setFieldValue('year', option)
                            }
                          />
                        </Col>

                        <Col
                          xs="12"
                          sm="4"
                          style={{ paddingTop: '5px', paddingBottom: '5px' }}
                        >
                          <SelectInput
                            invalid={touched.yearTo && errors.yearTo && true}
                            value={values.yearTo}
                            placeholder="Godište do"
                            options={parseYears(YEAR)}
                            onChange={(option: any) =>
                              setFieldValue('yearTo', option)
                            }
                          />
                        </Col>

                        <Col
                          xs="12"
                          sm="4"
                          style={{ paddingTop: '5px', paddingBottom: '5px' }}
                        >
                          <Input
                            value={values.label}
                            type="text"
                            name="label"
                            placeholder="Dodatne informacije (GTI, TDI, S Type itd.)"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col
                          xs="12"
                          sm="4"
                          style={{ paddingTop: '5px', paddingBottom: '5px' }}
                        >
                          <InputGroup>
                            <Input
                              value={values.price}
                              type="text"
                              name="price"
                              placeholder="Cena*"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              invalid={touched.price && errors.price && true}
                            />
                            <InputGroupAddon addonType="append">
                              €
                          </InputGroupAddon>
                          </InputGroup>
                        </Col>
                      </Row>
                      <UserFields
                        getImages={getImages}
                        setImages={setImages}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        values={values}
                        touched={touched}
                        errors={errors}
                        isSubmitting={isSubmitting}
                        cities={parseOptions(CITIES)}
                        setFieldValue={setFieldValue}
                        label="Dodaj"
                        color="secondary"
                      />
                    </Container>
                  </Form>
                )}
            </Formik>
          )}
        </CreateAdComponent>
      )}
    </UploadFileComponent>
  );
};

export default AddAd;
