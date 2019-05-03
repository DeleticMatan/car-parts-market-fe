import * as React from 'react';
import {
  Button,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  Form,
  Col,
  FormFeedback,
  Alert,
} from 'reactstrap';
import { Formik, ErrorMessage } from 'formik';
import loginValidationSchema from '../../validations/login';
import Router from '../../routes';

import {
  LoginComponent,
  LoginMutation,
} from '../../generated/apolloComponents';

import { FetchResult } from 'react-apollo';
import { FaKey } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';

type Props = {
  emailRef: any;
  closeModal: any;
  goToRegister: any;
  goToForgotPassword: any;
};

const Login: React.FunctionComponent<Props> = ({
  emailRef,
  closeModal,
  goToRegister,
  goToForgotPassword,
}) => {
  const [getNonActivated, setNonActivated] = React.useState(false);
  return (
    <>
      {getNonActivated ? (
        <div>
          <div className="login-and-register__logo-wrapper">
            <img src="/static/images/logo.png" />
          </div>
          <Alert color="danger" style={{ textAlign: 'center' }}>
            Greška! Ako imate nalog, proverite da li je potvrdjen i da li je
            lozinka koju ste uneli ispravna.
          </Alert>
          <div
            className="login-and-register__form-group"
            style={{
              marginTop: '15px',
            }}
          >
            <p>
              Da bi ste ponovo pokušali da se prijavite,{' '}
              <a onClick={() => setNonActivated(false)} href="#">
                kliknite ovde
              </a>
            </p>
          </div>
        </div>
      ) : (
          <LoginComponent>
            {login => (
              <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={loginValidationSchema}
                onSubmit={async (data, { setSubmitting, resetForm }) => {
                  try {
                    const response: void | FetchResult<
                      LoginMutation,
                      Record<string, any>
                    > = await login({
                      variables: data,
                    });

                    if (
                      response &&
                      response.data &&
                      response.data.login.user.active === true
                    ) {
                      if (
                        response &&
                        response.data &&
                        response.data.login.token
                      ) {
                        localStorage.setItem(
                          'token',
                          response && response.data && response.data.login.token,
                        );
                        localStorage.setItem(
                          'id',
                          response &&
                          response.data &&
                          response.data.login.user.id,
                        );
                        localStorage.setItem(
                          'name',
                          response &&
                          response.data &&
                          response.data.login.user.name,
                        );
                        localStorage.setItem(
                          'city',
                          response &&
                          response.data &&
                          response.data.login.user.city,
                        );
                        localStorage.setItem(
                          'email',
                          response &&
                          response.data &&
                          response.data.login.user.email,
                        );
                        localStorage.setItem(
                          'phone',
                          response &&
                          response.data &&
                          response.data.login.user.phone,
                        );
                        localStorage.setItem(
                          'phone2',
                          response &&
                          response.data &&
                          response.data.login.user.phone2,
                        );
                        Router.pushRoute('profil');
                        closeModal();
                      } else {
                        alert('Proverite kredencijale!');
                      }
                    } else {
                      resetForm();
                      setNonActivated(true);
                    }
                  } catch (err) {
                    resetForm();
                    setNonActivated(true);
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
                  submitCount,
                }) => (
                    <Form onSubmit={handleSubmit}>
                      <div className="login-and-register__logo-wrapper">
                        <img src="/static/images/logo.png" />
                      </div>

                      <FormGroup inline className="login-and-register__form-group">
                        <Col xs="12" sm="12" md="10" lg="10">
                          <InputGroup>
                            <InputGroupAddon addonType="prepend" style={{
                              padding: '10px',
                              color: '#fff',
                              backgroundColor: '#005DD3',
                              border: '1px solid grey',
                            }}>
                              <FaEnvelope />
                            </InputGroupAddon>
                            <Input
                              innerRef={emailRef}
                              type="email"
                              name="email"
                              placeholder="Email*"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.email}
                              invalid={
                                touched.email &&
                                errors.email &&
                                submitCount > 0 &&
                                true
                              }
                            />
                          </InputGroup>
                          <FormFeedback>{errors.email}</FormFeedback>
                        </Col>
                      </FormGroup>
                      <FormGroup className="login-and-register__form-group" inline>
                        <Col xs="12" sm="12" md="10" lg="10">
                          <InputGroup>
                            <InputGroupAddon addonType="prepend" style={{
                              padding: '10px',
                              color: '#fff',
                              backgroundColor: '#005DD3',
                              border: '1px solid grey',
                            }}>
                              <FaKey />
                            </InputGroupAddon>
                            <Input
                              type="password"
                              name="password"
                              placeholder="Lozinka*"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.password}
                              invalid={touched.password && errors.password && true}
                            />
                          </InputGroup>
                          <FormFeedback>{errors.password}</FormFeedback>
                        </Col>
                      </FormGroup>
                      <div
                        style={{
                          margin: '10px',
                          display: 'flex',
                          alignContent: 'center',
                          justifyContent: 'center',
                          color: 'red',
                          fontSize: '12px',
                        }}
                      />

                      <div className="login-and-register__form-group">
                        <div style={{ margin: '10px' }}>
                          <Button
                            type="submit"
                            size="sm"
                            color="primary"
                            disabled={isSubmitting}
                          >
                            Prijavi se
                      </Button>
                        </div>

                        <div style={{ margin: '10px' }}>
                          <Button size="sm" color="secondary" onClick={closeModal}>
                            Otkaži
                      </Button>
                        </div>
                      </div>

                      <div
                        className="login-and-register__form-group"
                        style={{
                          marginTop: '15px',
                        }}
                      >
                        <p>
                          Nemate profil?{' '}
                          <a onClick={goToRegister} href="#">
                            Registrujte se
                      </a>
                        </p>
                      </div>
                      <div className="login-and-register__form-group">
                        <p>
                          Zaboravili ste lozinku?{' '}
                          <a onClick={goToForgotPassword} href="#">
                            Kliknite ovde
                      </a>
                        </p>
                      </div>
                    </Form>
                  )}
              </Formik>
            )}
          </LoginComponent>
        )}
    </>
  );
};

export default Login;
