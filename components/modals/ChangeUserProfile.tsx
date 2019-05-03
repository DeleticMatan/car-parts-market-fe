import React from 'react';
import {
  Modal,
  ModalBody,
  Button,
  FormGroup,
  Input,
  Form,
  Col,
  Label,
} from 'reactstrap';

import { Formik } from 'formik';

import {
  UpdateUserComponent,
  UpdateUserMutation,
} from '../../generated/apolloComponents';

import { FetchResult } from 'react-apollo';

import SelectInput from '../inputs/SelectInput';

import { CITIES } from '../../constants/general.constants';

type Props = {
  data: any;
  onSuccess: any;
};

type State = {
  modal: boolean;
};

class ChangeUserProfile extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      modal: false,
    };
  }

  openModal = () => {
    this.setState(() => ({
      modal: true,
    }));
  };

  closeModal = () => {
    this.setState(() => ({
      modal: false,
    }));
  };

  handleSubmit = (event: any) => {
    event.preventDefault();
    this.closeModal();
  };

  onClosed = () => { };

  parseOptions = (options: String[]) => {
    return options.map(item => {
      return { value: item, label: item };
    });
  };

  render() {
    const { id, email, name, phone, phone2, city } = this.props.data;
    return (
      <div>
        <Button onClick={this.openModal} block color="warning">
          Izmeni podatke
        </Button>
        <Modal
          centered
          isOpen={this.state.modal}
          toggle={this.closeModal}
          onClosed={this.onClosed}
        >
          <ModalBody style={{ backgroundColor: '#ebebeb' }}>
            <UpdateUserComponent>
              {update => (
                <Formik
                  initialValues={{
                    id,
                    email: email,
                    name: name,
                    phone: phone,
                    phone2: phone2,
                    city: { value: city, label: city },
                  }}
                  //validationSchema={registerValidationSchema}
                  onSubmit={async data => {
                    let trimmedData = { ...data, city: data.city.value };
                    try {
                      const response: void | FetchResult<
                        UpdateUserMutation,
                        Record<string, any>
                      > = await update({
                        variables: trimmedData,
                      });

                      localStorage.setItem(
                        'name',
                        response &&
                        response.data &&
                        response.data.updateUser.name,
                      );
                      localStorage.setItem(
                        'city',
                        response &&
                        response.data &&
                        response.data.updateUser.city,
                      );
                      localStorage.setItem(
                        'email',
                        response &&
                        response.data &&
                        response.data.updateUser.email,
                      );
                      localStorage.setItem(
                        'phone',
                        response &&
                        response.data &&
                        response.data.updateUser.phone,
                      );
                      localStorage.setItem(
                        'phone2',
                        response &&
                        response.data &&
                        response.data.updateUser.phone2,
                      );
                      //Router.pushRoute('index');
                      this.props.onSuccess(trimmedData);
                      this.closeModal();
                    } catch (err) {
                      console.log(
                        err,
                        //err.graphQLErrors.map((err: any) => `${err.message}\n`),
                      );
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
                        <div className="login-and-register__logo-wrapper">
                          <img src="/static/images/logo.png" />
                        </div>
                        <FormGroup
                          className="login-and-register__form-group"
                          inline
                        >
                          <Col xs="12" sm="12" md="10" lg="10">
                            <Input
                              type="email"
                              name="email"
                              placeholder="Email*"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.email}
                            />
                          </Col>
                        </FormGroup>

                        <FormGroup
                          className="login-and-register__form-group"
                          inline
                        >
                          <Col xs="12" sm="12" md="10" lg="10">
                            <Input
                              type="text"
                              name="name"
                              placeholder="Ime i prezime*"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.name}
                            />
                          </Col>
                        </FormGroup>
                        <FormGroup
                          className="login-and-register__form-group"
                          inline
                        >
                          <Col xs="12" sm="12" md="10" lg="10">
                            <SelectInput
                              invalid={touched.city && errors.city && true}
                              value={values.city}
                              placeholder="Grad*"
                              options={this.parseOptions(CITIES)}
                              onChange={(option: any) =>
                                setFieldValue('city', option)
                              }
                            />
                          </Col>
                        </FormGroup>
                        <FormGroup
                          className="login-and-register__form-group"
                          inline
                        >
                          <Col xs="12" sm="12" md="10" lg="10">
                            <Input
                              type="text"
                              name="phone"
                              placeholder="Telefon*"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.phone}
                            />
                          </Col>
                        </FormGroup>
                        <FormGroup
                          className="login-and-register__form-group"
                          inline
                        >
                          <Col xs="12" sm="12" md="10" lg="10">
                            <Input
                              type="text"
                              name="phone2"
                              placeholder="Telefon 2"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.phone2}
                            />
                          </Col>
                        </FormGroup>

                        <div className="login-and-register__form-group">
                          <div style={{ margin: '10px' }}>
                            <Button
                              type="submit"
                              size="sm"
                              color="primary"
                              disabled={isSubmitting}
                            >
                              Primeni izmene
                          </Button>
                          </div>

                          <div style={{ margin: '10px' }}>
                            <Button
                              size="sm"
                              color="secondary"
                              onClick={this.closeModal}
                            >
                              Otkaži
                          </Button>
                          </div>
                        </div>
                        <div
                          className="login-and-register__form-group"
                          style={{
                            marginTop: '15px',
                          }}
                        />
                      </Form>
                    )}
                </Formik>
              )}
            </UpdateUserComponent>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default ChangeUserProfile;
