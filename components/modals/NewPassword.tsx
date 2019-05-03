import React from 'react';
import {
  Modal,
  ModalBody,
  Button,
  FormGroup,
  Input,
  Form,
  Col,
  FormFeedback,
  Alert,
} from 'reactstrap';
import { Formik } from 'formik';

import Router from '../../routes';

import {
  ResetCompleteComponent,
  ResetCompleteMutation,
} from '../../generated/apolloComponents';

import { FetchResult } from 'react-apollo';

import changePasswordValidationSchema from '../../validations/changePassword';

type Props = {
  token: string;
};

type State = {
  modal: boolean;
  success: boolean;
};

class NewPassword extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      modal: false,
      success: false,
    };
  }

  componentDidMount = () => {
    if (this.props.token) {
      this.openModal();
    }
  };

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

  onClosed = () => {
    this.closeModal();
    Router.replaceRoute('index');
  };

  render() {
    // @ts-ignore
    const { token } = this.props;
    return (
      <div>
        <Modal centered isOpen={this.state.modal} onClosed={this.onClosed}>
          <ModalBody style={{ backgroundColor: '#ebebeb' }}>
            {!this.state.success ? (
              <ResetCompleteComponent>
                {resetComplete => (
                  <Formik
                    validationSchema={changePasswordValidationSchema}
                    initialValues={{
                      token: token,
                      password: '',
                      reenterPassword: '',
                    }}
                    onSubmit={async (data, { setSubmitting, resetForm }) => {
                      try {
                        const response: void | FetchResult<
                          ResetCompleteMutation,
                          Record<string, any>
                        > = await resetComplete({
                          variables: {
                            token: data.token,
                            password: data.password,
                          },
                        });
                        this.setState({
                          success: true,
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
                                type="password"
                                name="password"
                                placeholder="Nova lozinka*"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                invalid={
                                  touched.password && errors.password && true
                                }
                                valid={
                                  touched.password && !errors.password && true
                                }
                              />
                              <FormFeedback>{errors.password}</FormFeedback>
                            </Col>
                          </FormGroup>
                          <FormGroup
                            className="login-and-register__form-group"
                            inline
                          >
                            <Col xs="12" sm="12" md="10" lg="10">
                              <Input
                                type="password"
                                name="reenterPassword"
                                placeholder="Nova lozinka ponovo*"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.reenterPassword}
                                invalid={
                                  touched.reenterPassword &&
                                  errors.reenterPassword &&
                                  true
                                }
                                valid={
                                  touched.reenterPassword &&
                                  !errors.reenterPassword &&
                                  true
                                }
                              />
                              <FormFeedback>
                                {errors.reenterPassword}
                              </FormFeedback>
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
                                Promeni lozinku
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
                        </Form>
                      )}
                  </Formik>
                )}
              </ResetCompleteComponent>
            ) : (
                <div>
                  <div className="login-and-register__logo-wrapper">
                    <img src="/static/images/logo.png" />
                  </div>
                  <Alert style={{ textAlign: 'center' }}>
                    Vaša lozinka je uspešno promenjena!
                </Alert>
                  <div
                    className="login-and-register__form-group"
                    style={{
                      marginTop: '15px',
                    }}
                  >
                    <Button color="secondary" onClick={this.onClosed}>
                      OK
                  </Button>
                  </div>
                </div>
              )}
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default NewPassword;
