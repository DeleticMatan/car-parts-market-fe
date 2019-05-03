import React from 'react';
import {
  Modal,
  ModalBody,
  Button,
  Input,
  Form,
  Col,
  Container,
  Label,
  FormGroup,
  Row,
  InputGroup,
  InputGroupAddon,
} from 'reactstrap';
import { Formik } from 'formik';

import rimValidationSchema from '../../validations/rim';

import Loading from '../Loading';

import SelectInput from '../inputs/SelectInput';

import {
  CONDITION,
  CITIES,
  FOLDER_RIMS,
} from '../../constants/general.constants';

import {
  UpdateRimComponent,
  UpdateRimMutation,
  GetRimComponent,
  UploadFileComponent,
  UploadFileMutation,
  DeleteFileComponent,
  DeleteFileMutation,
} from '../../generated/apolloComponents';

import {
  RIM_WIDTH,
  RIM_DIAMETER,
  RIM_HOLES,
  RIM_BRANDS,
  RIM_TYPE,
} from '../../constants/rim.constants';

import { FetchResult } from 'react-apollo';
import UserFields from '../forms/UserFields';

type Props = {
  adId: string;
  refetch?: any;
  setNewDate?: any;
};

type State = {
  modal: boolean;
  images: any;
};

class EditRim extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      modal: false,
      images: [null, null, null, null, null, null],
    };
  }

  openModal = () => {
    this.setState(() => ({
      modal: true,
      images: [null, null, null, null, null, null],
    }));
  };

  closeModal = () => {
    this.setState(() => ({
      modal: false,
      images: [null, null, null, null, null, null],
    }));
  };

  handleSubmit = (event: any) => {
    event.preventDefault();
    this.closeModal();
  };

  onClosed = () => { };

  parseCategories = (options: any[]) => {
    let newOptions: any = [];
    newOptions = options.map(item => {
      return { value: item.name, label: item.name };
    });
    return newOptions;
  };

  parseSubcategories = (
    options: any[],
    currentCategory: string,
    sublabel: string,
  ) => {
    let subCategroriesList: any[] = [];
    options.forEach(category => {
      if (category.name === currentCategory) {
        subCategroriesList = [...this.parseOptions(category[sublabel])];
      }
    });
    return subCategroriesList;
  };

  parseOptions = (options: String[]) => {
    return options.map(item => {
      return { value: item, label: item };
    });
  };

  parseYears = (options: string[]) => {
    return options.map(item => {
      return { value: item, label: item };
    });
  };

  onOriginal = (index: any) => {
    let newImages = [...this.state.images];
    newImages[index] = 'ORIGINAL';
    this.setState({ ...this.state, images: newImages });
  };

  setImages = (images: any) => {
    this.setState({ ...this.state, images: images });
  };

  render() {
    // @ts-ignore
    const { userId, adId } = this.props;
    return (
      <div>
        <Button
          onClick={this.openModal}
          color="warning"
          style={{ marginRight: '20px' }}
        >
          Izmeni
        </Button>

        <Modal
          size="lg"
          centered
          isOpen={this.state.modal}
          toggle={this.closeModal}
          onClosed={this.onClosed}
        >
          <ModalBody style={{ backgroundColor: '#ebebeb' }}>
            {this.state.modal && (
              <GetRimComponent
                variables={{
                  id: adId,
                }}
              >
                {({ loading, error, data }) => {
                  if (loading) return <Loading />;
                  if (error) return `Error! ${error.message}`;
                  if (
                    data.rims &&
                    Array.isArray(data.rims) &&
                    data.rims.length > 0
                  ) {
                    return (
                      <DeleteFileComponent>
                        {deleteFile => (
                          <UploadFileComponent>
                            {uploadFile => (
                              <UpdateRimComponent>
                                {updateRim => (
                                  <Formik
                                    validationSchema={rimValidationSchema}
                                    initialValues={{
                                      id: data.rims[0].id,

                                      width: {
                                        value: data.rims[0].width,
                                        label: data.rims[0].width,
                                      },
                                      holes: {
                                        value: data.rims[0].holes,
                                        label: data.rims[0].holes,
                                      },
                                      diameter: {
                                        value: data.rims[0].diameter,
                                        label: data.rims[0].diameter,
                                      },
                                      type: {
                                        value: data.rims[0].type,
                                        label: data.rims[0].type,
                                      },
                                      brand: {
                                        value: data.rims[0].brand,
                                        label: data.rims[0].brand,
                                      },

                                      condition: {
                                        value: data.rims[0].condition,
                                        label: data.rims[0].condition,
                                      },
                                      et: data.rims[0].et,

                                      price: data.rims[0].price,
                                      text: data.rims[0].text,
                                      // User info
                                      name: data.rims[0].name,
                                      email: data.rims[0].email,
                                      phone: data.rims[0].phone,
                                      phone2: data.rims[0].phone2,
                                      city: {
                                        value: data.rims[0].city,
                                        label: data.rims[0].city,
                                      },
                                    }}
                                    onSubmit={async (
                                      data,
                                      { setSubmitting, resetForm },
                                    ) => {
                                      try {
                                        const response: void | FetchResult<
                                          UpdateRimMutation,
                                          Record<string, any>
                                        > = await updateRim({
                                          // @ts-ignore
                                          variables: {
                                            ...data,
                                            width:
                                              data.width && data.width.value,
                                            holes:
                                              data.holes && data.holes.value,
                                            diameter:
                                              data.diameter &&
                                              data.diameter.value,
                                            type: data.type && data.type.value,
                                            brand:
                                              data.brand && data.brand.value,
                                            condition:
                                              data.condition &&
                                              data.condition.value,
                                            city: data.city && data.city.value,
                                          },
                                        });
                                        async function asyncForEach(
                                          array: any,
                                          callback: any,
                                        ) {
                                          for (
                                            let index = 0;
                                            index < array.length;
                                            index++
                                          ) {
                                            await callback(
                                              array[index],
                                              index,
                                              array,
                                            );
                                          }
                                        }

                                        const uploadImages = async () => {
                                          let index = 0;
                                          await asyncForEach(
                                            this.state.images,
                                            async (file: any) => {
                                              index = index + 1;
                                              if (file) {
                                                if (file !== 'ORIGINAL') {
                                                  try {
                                                    const uploadFileResponse: void | FetchResult<
                                                      UploadFileMutation,
                                                      Record<string, any>
                                                    > = await uploadFile({
                                                      variables: {
                                                        file: file,
                                                        // @ts-ignore
                                                        id: `${adId}-${index}`,
                                                        type: FOLDER_RIMS,
                                                      },
                                                    });
                                                  } catch (uploadFileError) {
                                                    console.log(uploadFileError);
                                                  }
                                                }
                                              } else {
                                                try {
                                                  const deleteFileResponse: void | FetchResult<
                                                    DeleteFileMutation,
                                                    Record<string, any>
                                                  > = await deleteFile({
                                                    variables: {
                                                      id: `${FOLDER_RIMS}/${adId}-${index}`,
                                                    },
                                                  });
                                                } catch (uploadFileError) {
                                                  console.log(uploadFileError);
                                                }
                                              }
                                            },
                                          );
                                        };

                                        await uploadImages();

                                        this.props.refetch();
                                        this.props.setNewDate();

                                        this.closeModal();
                                      } catch (err) {
                                        console.log(
                                          err
                                        );
                                        setSubmitting(false);
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
                                          <Container
                                            style={{
                                              padding: '0px',
                                              maxWidth: '100%',
                                            }}
                                          >
                                            <Row>
                                              <Col
                                                xs="12"
                                                sm="4"
                                                style={{
                                                  paddingTop: '5px',
                                                  paddingBottom: '5px',
                                                }}
                                              >
                                                <SelectInput
                                                  invalid={
                                                    touched.diameter &&
                                                    errors.diameter &&
                                                    true
                                                  }
                                                  value={values.diameter}
                                                  placeholder="Prečnik*"
                                                  options={this.parseOptions(
                                                    RIM_DIAMETER,
                                                  )}
                                                  onChange={(option: any) =>
                                                    setFieldValue(
                                                      'diameter',
                                                      option,
                                                    )
                                                  }
                                                />
                                              </Col>
                                              <Col
                                                xs="12"
                                                sm="4"
                                                style={{
                                                  paddingTop: '5px',
                                                  paddingBottom: '5px',
                                                }}
                                              >
                                                <SelectInput
                                                  invalid={
                                                    touched.holes &&
                                                    errors.holes &&
                                                    true
                                                  }
                                                  value={values.holes}
                                                  placeholder="Broj i raspon rupa*"
                                                  options={this.parseOptions(
                                                    RIM_HOLES,
                                                  )}
                                                  onChange={(option: any) =>
                                                    setFieldValue('holes', option)
                                                  }
                                                />
                                              </Col>
                                              <Col
                                                xs="12"
                                                sm="4"
                                                style={{
                                                  paddingTop: '5px',
                                                  paddingBottom: '5px',
                                                }}
                                              >
                                                <SelectInput
                                                  invalid={
                                                    touched.width &&
                                                    errors.width &&
                                                    true
                                                  }
                                                  value={values.width}
                                                  placeholder="Širina*"
                                                  options={this.parseOptions(
                                                    RIM_WIDTH,
                                                  )}
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
                                                style={{
                                                  paddingTop: '5px',
                                                  paddingBottom: '5px',
                                                }}
                                              >
                                                <SelectInput
                                                  invalid={
                                                    touched.type &&
                                                    errors.type &&
                                                    true
                                                  }
                                                  value={values.type}
                                                  placeholder="Vrsta*"
                                                  options={this.parseOptions(
                                                    RIM_TYPE,
                                                  )}
                                                  onChange={(option: any) =>
                                                    setFieldValue('type', option)
                                                  }
                                                />
                                              </Col>
                                              <Col
                                                xs="12"
                                                sm="4"
                                                style={{
                                                  paddingTop: '5px',
                                                  paddingBottom: '5px',
                                                }}
                                              >
                                                <SelectInput
                                                  invalid={
                                                    touched.condition &&
                                                    errors.condition &&
                                                    true
                                                  }
                                                  value={values.condition}
                                                  placeholder="Stanje*"
                                                  options={this.parseOptions(
                                                    CONDITION,
                                                  )}
                                                  onChange={(option: any) =>
                                                    setFieldValue(
                                                      'condition',
                                                      option,
                                                    )
                                                  }
                                                />
                                              </Col>
                                              <Col
                                                xs="12"
                                                sm="4"
                                                style={{
                                                  paddingTop: '5px',
                                                  paddingBottom: '5px',
                                                }}
                                              >
                                                <SelectInput
                                                  invalid={
                                                    touched.brand &&
                                                    errors.brand &&
                                                    true
                                                  }
                                                  value={values.brand}
                                                  placeholder="Marka*"
                                                  options={this.parseOptions(
                                                    RIM_BRANDS,
                                                  )}
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
                                                style={{
                                                  paddingTop: '5px',
                                                  paddingBottom: '5px',
                                                }}
                                              >
                                                <FormGroup
                                                  style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'flex-start',
                                                  }}
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
                                                    invalid={
                                                      touched.et &&
                                                      errors.et &&
                                                      true
                                                    }
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
                                                style={{
                                                  paddingTop: '5px',
                                                  paddingBottom: '5px',
                                                }}
                                              >
                                                <InputGroup>
                                                  <Input
                                                    invalid={
                                                      touched.price &&
                                                      errors.price &&
                                                      true
                                                    }
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
                                              handleChange={handleChange}
                                              handleBlur={handleBlur}
                                              values={values}
                                              touched={touched}
                                              errors={errors}
                                              isSubmitting={isSubmitting}
                                              cities={this.parseOptions(CITIES)}
                                              setFieldValue={setFieldValue}
                                              label="Izmeni"
                                              color="warning"
                                              id={data.rims[0].id}
                                              type={data.rims[0].__typename}
                                              onOriginal={(index: any) =>
                                                this.onOriginal(index)
                                              }
                                              getImages={this.state.images}
                                              setImages={(images: any) =>
                                                this.setImages(images)
                                              }
                                            />
                                            <Row>
                                              <Col xs="0" sm="6" md="8" />
                                              <Col
                                                style={{
                                                  paddingTop: '5px',
                                                  paddingBottom: '5px',
                                                }}
                                                xs="12"
                                                sm="6"
                                                md="4"
                                                lg="4"
                                              >
                                                <Button
                                                  style={{
                                                    height: '38px',
                                                  }}
                                                  block
                                                  size="sm"
                                                  color="secondary"
                                                  onClick={this.closeModal}
                                                >
                                                  Otkaži
                                              </Button>
                                              </Col>
                                            </Row>
                                          </Container>
                                        </Form>
                                      )}
                                  </Formik>
                                )}
                              </UpdateRimComponent>
                            )}
                          </UploadFileComponent>
                        )}
                      </DeleteFileComponent>
                    );
                  } else {
                    return 'Greška - Nepostojeći oglas!';
                  }
                }}
              </GetRimComponent>
            )}
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default EditRim;
