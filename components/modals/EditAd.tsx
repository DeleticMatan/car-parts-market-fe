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

import adValidationSchema from '../../validations/ad';

import Loading from '../Loading';

import SelectInput from '../inputs/SelectInput';

import {
  CONDITION,
  CITIES,
  FOLDER_ADS,
} from '../../constants/general.constants';
import { YEAR } from '../../constants/years.constants';

import {
  UpdateAdComponent,
  UpdateAdMutation,
  GetAdComponent,
  UploadFileComponent,
  UploadFileMutation,
  DeleteFileComponent,
  DeleteFileMutation,
} from '../../generated/apolloComponents';

import {
  AD_BRANDS,
  AD_PART_CATEGORIES,
  AD_EQUIPMENT_CATEGORIES,
} from '../../constants/ad.constants';

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

class EditAd extends React.Component<Props, State> {
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
              <GetAdComponent
                variables={{
                  id: adId,
                }}
              >
                {({ loading, error, data }) => {
                  if (loading) return <Loading />;
                  if (error) return `Error! ${error.message}`;
                  if (
                    data.ads &&
                    Array.isArray(data.ads) &&
                    data.ads.length > 0
                  ) {
                    return (
                      <DeleteFileComponent>
                        {deleteFile => (
                          <UploadFileComponent>
                            {uploadFile => (
                              <UpdateAdComponent>
                                {updateAd => (
                                  <Formik
                                    validationSchema={adValidationSchema}
                                    initialValues={{
                                      id: data.ads[0].id,

                                      adType:
                                        data.ads[0].adType === 'Deo'
                                          ? { value: 'Deo', label: 'Delovi' }
                                          : {
                                            value: 'Oprema',
                                            label: 'Oprema',
                                          },
                                      brand: {
                                        value: data.ads[0].brand,
                                        label: data.ads[0].brand,
                                      },
                                      model: {
                                        value: data.ads[0].model,
                                        label: data.ads[0].model,
                                      },
                                      year: {
                                        value: data.ads[0].year,
                                        label: data.ads[0].year,
                                      },
                                      yearTo: {
                                        value: data.ads[0].yearTo,
                                        label: data.ads[0].yearTo,
                                      },
                                      category: {
                                        value: data.ads[0].category,
                                        label: data.ads[0].category,
                                      },
                                      subcategory: {
                                        value: data.ads[0].subcategory,
                                        label: data.ads[0].subcategory,
                                      },

                                      condition: {
                                        value: data.ads[0].condition,
                                        label: data.ads[0].condition,
                                      },
                                      label: data.ads[0].label,

                                      type: data.ads[0].type,

                                      price: data.ads[0].price,
                                      text: data.ads[0].text,
                                      // User info
                                      name: data.ads[0].name,
                                      email: data.ads[0].email,
                                      phone: data.ads[0].phone,
                                      phone2: data.ads[0].phone2,
                                      city: {
                                        value: data.ads[0].city,
                                        label: data.ads[0].city,
                                      },
                                    }}
                                    onSubmit={async (
                                      data,
                                      { setSubmitting, resetForm },
                                    ) => {
                                      try {
                                        const response: void | FetchResult<
                                          UpdateAdMutation,
                                          Record<string, any>
                                        > = await updateAd({
                                          // @ts-ignore
                                          variables: {
                                            ...data,
                                            adType:
                                              data.adType && data.adType.value,
                                            brand:
                                              data.brand && data.brand.value,
                                            model:
                                              data.model && data.model.value,
                                            year: data.year && data.year.value,
                                            yearTo: data.yearTo && data.yearTo.value,
                                            category:
                                              data.category &&
                                              data.category.value,
                                            subcategory:
                                              data.subcategory &&
                                              data.subcategory.value,
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
                                                        type: FOLDER_ADS,
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
                                                      id: `${FOLDER_ADS}/${adId}-${index}`,
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
                                                  value={values.adType}
                                                  placeholder="Tip*"
                                                  options={[
                                                    {
                                                      value: 'Deo',
                                                      label: 'Delovi',
                                                    },
                                                    {
                                                      value: 'Oprema',
                                                      label: 'Oprema',
                                                    },
                                                  ]}
                                                  onChange={(option: any) => {
                                                    setFieldValue(
                                                      'category',
                                                      null,
                                                    );
                                                    setFieldValue(
                                                      'subcategory',
                                                      null,
                                                    );
                                                    setFieldValue(
                                                      'adType',
                                                      option,
                                                    );
                                                  }}
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
                                                  placeholder="Marka"
                                                  options={this.parseCategories(
                                                    AD_BRANDS,
                                                  )}
                                                  onChange={(option: any) => {
                                                    setFieldValue('model', null);
                                                    setFieldValue(
                                                      'brand',
                                                      option,
                                                    );
                                                  }}
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
                                                    touched.model &&
                                                    errors.model &&
                                                    true
                                                  }
                                                  value={values.model}
                                                  placeholder="Model"
                                                  options={this.parseSubcategories(
                                                    AD_BRANDS,
                                                    values.brand &&
                                                    values.brand.value,
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
                                                    touched.category &&
                                                    errors.category &&
                                                    true
                                                  }
                                                  value={values.category}
                                                  placeholder={
                                                    values.adType.value !==
                                                      'Oprema'
                                                      ? 'Kategorije delova*'
                                                      : 'Kategorije opreme*'
                                                  }
                                                  options={
                                                    values.adType.value !==
                                                      'Oprema'
                                                      ? this.parseCategories(
                                                        AD_PART_CATEGORIES,
                                                      )
                                                      : this.parseCategories(
                                                        AD_EQUIPMENT_CATEGORIES,
                                                      )
                                                  }
                                                  onChange={(option: any) => {
                                                    setFieldValue(
                                                      'subcategory',
                                                      null,
                                                    );
                                                    setFieldValue(
                                                      'category',
                                                      option,
                                                    );
                                                  }}
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
                                                    touched.subcategory &&
                                                    errors.subcategory &&
                                                    true
                                                  }
                                                  value={values.subcategory}
                                                  placeholder="Potkategorija*"
                                                  options={this.parseSubcategories(
                                                    values.adType &&
                                                      values.adType.value !==
                                                      'Oprema'
                                                      ? AD_PART_CATEGORIES
                                                      : AD_EQUIPMENT_CATEGORIES,
                                                    values.category &&
                                                    values.category.value,
                                                    'subcategories',
                                                  )}
                                                  onChange={(option: any) =>
                                                    setFieldValue(
                                                      'subcategory',
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
                                                    touched.year &&
                                                    errors.year &&
                                                    true
                                                  }
                                                  value={values.year}
                                                  placeholder="Godište od"
                                                  options={this.parseYears(YEAR)}
                                                  onChange={(option: any) =>
                                                    setFieldValue('year', option)
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
                                                    touched.yearTo &&
                                                    errors.yearTo &&
                                                    true
                                                  }
                                                  value={values.yearTo}
                                                  placeholder="Godište do"
                                                  options={this.parseYears(YEAR)}
                                                  onChange={(option: any) =>
                                                    setFieldValue('yearTo', option)
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
                                                style={{
                                                  paddingTop: '5px',
                                                  paddingBottom: '5px',
                                                }}
                                              >
                                                <InputGroup>
                                                  <Input
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
                                              id={data.ads[0].id}
                                              type={data.ads[0].__typename}
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
                              </UpdateAdComponent>
                            )}
                          </UploadFileComponent>
                        )}
                      </DeleteFileComponent>
                    );
                  } else {
                    return 'Greška - Nepostojeći oglas!';
                  }
                }}
              </GetAdComponent>
            )}
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default EditAd;
