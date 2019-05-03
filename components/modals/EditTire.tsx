import React from 'react';
import {
  Modal,
  ModalBody,
  Button,
  Input,
  Form,
  Col,
  Container,
  Row,
  InputGroup,
  InputGroupAddon,
} from 'reactstrap';
import { Formik } from 'formik';

import tireValidationSchema from '../../validations/tire';

import Loading from '../Loading';

import SelectInput from '../inputs/SelectInput';

import {
  CONDITION,
  CITIES,
  FOLDER_TIRES,
} from '../../constants/general.constants';

import {
  UpdateTireComponent,
  UpdateTireMutation,
  GetTireComponent,
  UploadFileComponent,
  UploadFileMutation,
  DeleteFileComponent,
  DeleteFileMutation,
} from '../../generated/apolloComponents';

import {
  TIRE_WIDTH,
  TIRE_HEIGHT,
  TIRE_DIAMETER,
  TIRE_TYPE,
  TIRE_BRANDS,
} from '../../constants/tire.constants';

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

class EditTire extends React.Component<Props, State> {
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
              <GetTireComponent
                variables={{
                  id: adId,
                }}
              >
                {({ loading, error, data }) => {
                  if (loading) return <Loading />;
                  if (error) return `Error! ${error.message}`;
                  if (
                    data.tires &&
                    Array.isArray(data.tires) &&
                    data.tires.length > 0
                  ) {
                    return (
                      <DeleteFileComponent>
                        {deleteFile => (
                          <UploadFileComponent>
                            {uploadFile => (
                              <UpdateTireComponent>
                                {updateTire => (
                                  <Formik
                                    validationSchema={tireValidationSchema}
                                    initialValues={{
                                      id: data.tires[0].id,

                                      width: {
                                        value: data.tires[0].width,
                                        label: data.tires[0].width,
                                      },
                                      height: {
                                        value: data.tires[0].height,
                                        label: data.tires[0].height,
                                      },
                                      diameter: {
                                        value: data.tires[0].diameter,
                                        label: data.tires[0].diameter,
                                      },
                                      type: {
                                        value: data.tires[0].type,
                                        label: data.tires[0].type,
                                      },
                                      brand: {
                                        value: data.tires[0].brand,
                                        label: data.tires[0].brand,
                                      },

                                      condition: {
                                        value: data.tires[0].condition,
                                        label: data.tires[0].condition,
                                      },

                                      price: data.tires[0].price,
                                      text: data.tires[0].text,
                                      // User info
                                      name: data.tires[0].name,
                                      email: data.tires[0].email,
                                      phone: data.tires[0].phone,
                                      phone2: data.tires[0].phone2,
                                      city: {
                                        value: data.tires[0].city,
                                        label: data.tires[0].city,
                                      },
                                    }}
                                    onSubmit={async (
                                      data,
                                      { setSubmitting, resetForm },
                                    ) => {
                                      try {
                                        const response: void | FetchResult<
                                          UpdateTireMutation,
                                          Record<string, any>
                                        > = await updateTire({
                                          // @ts-ignore
                                          variables: {
                                            ...data,
                                            width:
                                              data.width && data.width.value,
                                            height:
                                              data.height && data.height.value,
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
                                                        type: FOLDER_TIRES,
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
                                                      id: `${FOLDER_TIRES}/${adId}-${index}`,
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
                                                    touched.width &&
                                                    errors.width &&
                                                    true
                                                  }
                                                  value={values.width}
                                                  placeholder="Širina gume*"
                                                  options={this.parseOptions(
                                                    TIRE_WIDTH,
                                                  )}
                                                  onChange={(option: any) =>
                                                    setFieldValue('width', option)
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
                                                    touched.height &&
                                                    errors.height &&
                                                    true
                                                  }
                                                  value={values.height}
                                                  placeholder="Visina gume*"
                                                  options={this.parseOptions(
                                                    TIRE_HEIGHT,
                                                  )}
                                                  onChange={(option: any) =>
                                                    setFieldValue(
                                                      'height',
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
                                                    touched.diameter &&
                                                    errors.diameter &&
                                                    true
                                                  }
                                                  value={values.diameter}
                                                  placeholder="Prečnik gume*"
                                                  options={this.parseOptions(
                                                    TIRE_DIAMETER,
                                                  )}
                                                  onChange={(option: any) =>
                                                    setFieldValue(
                                                      'diameter',
                                                      option,
                                                    )
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
                                                  placeholder="Sezona*"
                                                  options={this.parseOptions(
                                                    TIRE_TYPE,
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
                                                  placeholder="Proizvodjac*"
                                                  options={this.parseOptions(
                                                    TIRE_BRANDS,
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
                                              id={data.tires[0].id}
                                              type={data.tires[0].__typename}
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
                              </UpdateTireComponent>
                            )}
                          </UploadFileComponent>
                        )}
                      </DeleteFileComponent>
                    );
                  } else {
                    return 'Greška - Nepostojeći oglas!';
                  }
                }}
              </GetTireComponent>
            )}
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default EditTire;
