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

import { FetchResult } from 'react-apollo';

import contactValidationSchema from '../../validations/contact';

import {
  ContactComponent,
  ContactMutation,
} from '../../generated/apolloComponents';
import { FaLess } from 'react-icons/fa';

type Props = {
  contactForm: boolean;
  closeContactForm: any;
};

type State = {
  modal: boolean;
  success: boolean;
};

class ContactForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      modal: false,
      success: false,
    };
  }

  closeAfterSuccess = () => {
    this.setState(
      {
        success: false,
      },
      () => {
        this.props.closeContactForm();
      },
    );
  };

  render() {
    return (
      <Modal
        centered
        isOpen={this.props.contactForm}
        toggle={this.closeAfterSuccess}
      >
        <ModalBody style={{ backgroundColor: '#ebebeb' }}>
          {this.state.success ? (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
              }}
            >
              <div className="login-and-register__logo-wrapper">
                <img src="/static/images/logo.png" />
              </div>
              <Alert style={{ textAlign: 'center' }}>
                Vaša poruka je uspešno poslata!
              </Alert>
              <div style={{ margin: '10px' }}>
                <Button
                  size="sm"
                  color="secondary"
                  onClick={this.closeAfterSuccess}
                >
                  OK
                </Button>
              </div>
            </div>
          ) : (
              <ContactComponent>
                {contact => (
                  <Formik
                    validationSchema={contactValidationSchema}
                    initialValues={{
                      name: '',
                      email: '',
                      message: '',
                    }}
                    onSubmit={async (data, { setSubmitting, resetForm }) => {
                      try {
                        const response: void | FetchResult<
                          ContactMutation,
                          Record<string, any>
                        > = await contact({
                          variables: {
                            name: data.name,
                            email: data.email,
                            message: data.message,
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
                          <div style={{ textAlign: 'center' }}>
                            <h6>
                              <strong>KONTAKT</strong>
                            </h6>
                            <br />
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
                                  invalid={touched.name && errors.name && true}
                                  valid={touched.name && !errors.name && true}
                                />
                                <FormFeedback>{errors.name}</FormFeedback>
                              </Col>
                            </FormGroup>
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
                                  invalid={touched.email && errors.email && true}
                                  valid={touched.email && !errors.email && true}
                                />
                                <FormFeedback>{errors.email}</FormFeedback>
                              </Col>
                            </FormGroup>
                            <FormGroup
                              className="login-and-register__form-group"
                              inline
                            >
                              <Col xs="12" sm="12" md="10" lg="10">
                                <Input
                                  type="textarea"
                                  style={{ minHeight: '100px' }}
                                  name="message"
                                  placeholder="Poruka*"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.message}
                                  invalid={
                                    touched.message && errors.message && true
                                  }
                                  valid={touched.message && !errors.message && true}
                                />
                                <FormFeedback>{errors.message}</FormFeedback>
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
                                  Pošalji poruku
                            </Button>
                              </div>

                              <div style={{ margin: '10px' }}>
                                <Button
                                  size="sm"
                                  color="secondary"
                                  onClick={this.props.closeContactForm}
                                >
                                  Otkaži
                            </Button>
                              </div>
                            </div>
                          </div>
                        </Form>
                      )}
                  </Formik>
                )}
              </ContactComponent>
            )}
        </ModalBody>
      </Modal>
    );
  }
}

export default ContactForm;
