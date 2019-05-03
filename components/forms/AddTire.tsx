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

import SelectInput from '../inputs/SelectInput';

import { CONDITION, CITIES } from '../../constants/general.constants';
import { FOLDER_TIRES } from '../../constants/general.constants';

import tireValidationSchema from '../../validations/tire';
import Router from '../../routes';

import {
  CreateTireComponent,
  CreateTireMutation,
  UploadFileComponent,
  UploadFileMutation,
} from '../../generated/apolloComponents';

import { FetchResult } from 'react-apollo';

import UserFields from './UserFields';

import {
  TIRE_WIDTH,
  TIRE_HEIGHT,
  TIRE_DIAMETER,
  TIRE_TYPE,
  TIRE_BRANDS,
} from '../../constants/tire.constants';

const AddTire = ({ user }: any) => {
  const parseOptions = (options: String[]) => {
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
        <CreateTireComponent>
          {createTire => (
            <Formik
              validationSchema={tireValidationSchema}
              initialValues={{
                active: true,
                highlight: false,

                width: null,
                height: null,
                diameter: null,
                type: null,
                condition: null,
                brand: null,
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
                    CreateTireMutation,
                    Record<string, any>
                  > = await createTire({
                    // @ts-ignore
                    variables: {
                      ...trimmedData,
                      price: parseInt(trimmedData.price),
                      width: trimmedData.width && trimmedData.width.value,
                      height: trimmedData.height && trimmedData.height.value,
                      diameter:
                        trimmedData.diameter && trimmedData.diameter.value,
                      type: trimmedData.type && trimmedData.type.value,
                      condition:
                        trimmedData.condition && trimmedData.condition.value,
                      brand: trimmedData.brand && trimmedData.brand.value,
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
                              id: `${response.data.createTire.id}-${index}`,
                              type: FOLDER_TIRES,
                            },
                          });
                        } catch (uploadFileError) {
                          console.log(
                            uploadFileError
                          );
                        }
                      }
                    });
                  };

                  await uploadImages();

                  resetForm();
                  Router.pushRoute('oglas-gume', {
                    // @ts-ignore
                    id: response.data.createTire.id,
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
                            invalid={touched.width && errors.width && true}
                            value={values.width}
                            placeholder="Širina gume*"
                            options={parseOptions(TIRE_WIDTH)}
                            onChange={(option: any) =>
                              setFieldValue('width', option)
                            }
                          />
                        </Col>
                        <Col
                          xs="12"
                          sm="4"
                          style={{ paddingTop: '5px', paddingBottom: '5px' }}
                        >
                          <SelectInput
                            invalid={touched.height && errors.height && true}
                            value={values.height}
                            placeholder="Visina gume*"
                            options={parseOptions(TIRE_HEIGHT)}
                            onChange={(option: any) =>
                              setFieldValue('height', option)
                            }
                          />
                        </Col>
                        <Col
                          xs="12"
                          sm="4"
                          style={{ paddingTop: '5px', paddingBottom: '5px' }}
                        >
                          <SelectInput
                            invalid={touched.diameter && errors.diameter && true}
                            value={values.diameter}
                            placeholder="Prečnik gume*"
                            options={parseOptions(TIRE_DIAMETER)}
                            onChange={(option: any) =>
                              setFieldValue('diameter', option)
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
                            invalid={touched.type && errors.type && true}
                            value={values.type}
                            placeholder="Sezona*"
                            options={parseOptions(TIRE_TYPE)}
                            onChange={(option: any) =>
                              setFieldValue('type', option)
                            }
                          />
                        </Col>
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
                            invalid={touched.brand && errors.brand && true}
                            value={values.brand}
                            placeholder="Proizvodjac*"
                            options={parseOptions(TIRE_BRANDS)}
                            onChange={(option: any) =>
                              setFieldValue('brand', option)
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
                          <InputGroup>
                            <Input
                              invalid={touched.price && errors.price && true}
                              value={values.price}
                              type="text"
                              name="price"
                              placeholder="Cena*"
                              onChange={handleChange}
                              onBlur={handleBlur}
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
        </CreateTireComponent>
      )}
    </UploadFileComponent>
  );
};

export default AddTire;
