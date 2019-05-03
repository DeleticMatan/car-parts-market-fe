import * as React from 'react';

import { Formik } from 'formik';

import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Label,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
} from 'reactstrap';

import SelectInput from '../inputs/SelectInput';

import { CONDITION, CITIES } from '../../constants/general.constants';

import rimValidationSchema from '../../validations/rim';
import Router from '../../routes';

import {
  CreateRimComponent,
  CreateRimMutation,
  UploadFileComponent,
  UploadFileMutation,
} from '../../generated/apolloComponents';

import { FetchResult } from 'react-apollo';

import { FOLDER_RIMS } from '../../constants/general.constants';

import UserFields from './UserFields';

import {
  RIM_WIDTH,
  RIM_DIAMETER,
  RIM_HOLES,
  RIM_BRANDS,
  RIM_TYPE,
} from '../../constants/rim.constants';

const AddRim = ({ user }: any) => {
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
        <CreateRimComponent>
          {createRim => (
            <Formik
              validationSchema={rimValidationSchema}
              initialValues={{
                active: true,
                highlight: false,
                width: null,
                diameter: null,
                holes: null,
                type: null,
                condition: null,
                brand: null,
                price: '',
                text: '',
                et: '',
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
                    CreateRimMutation,
                    Record<string, any>
                  > = await createRim({
                    // @ts-ignore
                    variables: {
                      ...trimmedData,
                      price: parseInt(trimmedData.price),
                      width: trimmedData.width && trimmedData.width.value,
                      holes: trimmedData.holes && trimmedData.holes.value,
                      diameter:
                        trimmedData.diameter && trimmedData.diameter.value,
                      type: trimmedData.type && trimmedData.type.value,
                      condition:
                        trimmedData.condition && trimmedData.condition.value,
                      brand: trimmedData.brand && trimmedData.brand.value,
                      city: trimmedData.city && trimmedData.city.value,
                      et: trimmedData.et && trimmedData.et,
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
                              id: `${response.data.createRim.id}-${index}`,
                              type: FOLDER_RIMS,
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
                  Router.pushRoute('oglas-felne-i-ratkapne', {
                    // @ts-ignore
                    id: response.data.createRim.id,
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
                            invalid={touched.diameter && errors.diameter && true}
                            value={values.diameter}
                            placeholder="Prečnik*"
                            options={parseOptions(RIM_DIAMETER)}
                            onChange={(option: any) =>
                              setFieldValue('diameter', option)
                            }
                          />
                        </Col>
                        <Col
                          xs="12"
                          sm="4"
                          style={{ paddingTop: '5px', paddingBottom: '5px' }}
                        >
                          <SelectInput
                            invalid={touched.holes && errors.holes && true}
                            value={values.holes}
                            placeholder="Broj i raspon rupa*"
                            options={parseOptions(RIM_HOLES)}
                            onChange={(option: any) =>
                              setFieldValue('holes', option)
                            }
                          />
                        </Col>
                        <Col
                          xs="12"
                          sm="4"
                          style={{ paddingTop: '5px', paddingBottom: '5px' }}
                        >
                          <SelectInput
                            invalid={touched.width && errors.width && true}
                            value={values.width}
                            placeholder="Širina*"
                            options={parseOptions(RIM_WIDTH)}
                            onChange={(option: any) =>
                              setFieldValue('width', option)
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
                            placeholder="Vrsta*"
                            options={parseOptions(RIM_TYPE)}
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
                            placeholder="Marka*"
                            options={parseOptions(RIM_BRANDS)}
                            onChange={(option: any) =>
                              setFieldValue('brand', option)
                            }
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col
                          xs="12"
                          sm="2"
                          style={{ paddingTop: '5px', paddingBottom: '5px' }}
                        >
                          <FormGroup
                            inline
                            className="login-and-register__form-group"
                          >
                            <Label
                              htmlFor="et"
                              style={{
                                paddingRight: '10px',
                                paddingTop: '5px',
                                color: 'grey',
                              }}
                            >
                              ET
                          </Label>
                            <Input
                              invalid={touched.et && errors.et && true}
                              value={values.et}
                              type="text"
                              name="et"
                              placeholder=""
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                          </FormGroup>
                        </Col>
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
        </CreateRimComponent>
      )}
    </UploadFileComponent>
  );
};

export default AddRim;
