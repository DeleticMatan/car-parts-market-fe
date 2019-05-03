import * as React from 'react';
import {
  Button,
  FormGroup,
  Input,
  Form,
  Col,
  Label,
  FormFeedback,
  Alert,
} from 'reactstrap';
import { Formik } from 'formik';
import registerValidationSchema from '../../validations/register';

import { CITIES } from '../../constants/general.constants';

import SelectInput from '../inputs/SelectInput';

import {
  CreateUserComponent,
  CreateUserMutation,
} from '../../generated/apolloComponents';

import { FetchResult } from 'react-apollo';

type Props = {
  emailRef: any;
  closeModal: any;
  goToLogin: any;
};

const Register: React.FunctionComponent<Props> = ({
  emailRef,
  closeModal,
  goToLogin,
}) => {
  const [getStatus, setStatus] = React.useState(false);

  const parseOptions = (options: String[]) => {
    return options.map(item => {
      return { value: item, label: item };
    });
  };

  return (
    <>
      {getStatus ? (
        <div>
          <div className="login-and-register__logo-wrapper">
            <img src="/static/images/logo.png" />
          </div>
          <Alert style={{ textAlign: 'center' }}>
            Link za potvrdu vam je poslat na email. Molimo vas da potvrdite svoj
            nalog pre nego što pokušate da se prijavite. Ako vam u roku od par
            minuta ne stigne email, molimo vas proverite i spam folder.
          </Alert>
          <div
            className="login-and-register__form-group"
            style={{
              marginTop: '15px',
            }}
          >
            <p>
              Da bi ste se prijavili nakon potvrde,{' '}
              <a onClick={goToLogin} href="#">
                kliknite ovde
              </a>
            </p>
          </div>
        </div>
      ) : (
          <CreateUserComponent>
            {register => (
              <Formik
                validationSchema={registerValidationSchema}
                initialValues={{
                  active: false,
                  access: 0,
                  terms: false,
                  password: '',
                  reenterPassword: '',
                  email: '',
                  name: '',
                  phone: '',
                  phone2: '',
                  city: null,
                }}
                //validationSchema={registerValidationSchema}
                onSubmit={async (data, { setSubmitting, resetForm }) => {
                  let trimmedData = { ...data };
                  delete trimmedData.reenterPassword;
                  delete trimmedData.terms;
                  trimmedData.city = trimmedData.city
                    ? trimmedData.city.value
                    : null;
                  try {
                    const response: void | FetchResult<
                      CreateUserMutation,
                      Record<string, any>
                    > = await register({
                      variables: trimmedData,
                    });

                    setStatus(true);

                    //goToLogin();
                    //closeModal();
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
                  submitCount,
                }) => (
                    <Form onSubmit={handleSubmit}>
                      <div className="login-and-register__logo-wrapper">
                        <img src="/static/images/logo.png" />
                      </div>
                      <FormGroup className="login-and-register__form-group" inline>
                        <Col xs="12" sm="12" md="10" lg="10">
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
                          <FormFeedback>{errors.email}</FormFeedback>
                        </Col>
                      </FormGroup>

                      <FormGroup className="login-and-register__form-group" inline>
                        <Col xs="12" sm="12" md="10" lg="10">
                          <Input
                            type="password"
                            name="password"
                            placeholder="Lozinka*"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            invalid={touched.password && errors.password && true}
                          />
                          <FormFeedback>{errors.password}</FormFeedback>
                        </Col>
                      </FormGroup>

                      <FormGroup className="login-and-register__form-group" inline>
                        <Col xs="12" sm="12" md="10" lg="10">
                          <Input
                            type="password"
                            name="reenterPassword"
                            placeholder="Ponovi lozinku*"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.reenterPassword}
                            invalid={
                              touched.reenterPassword &&
                              errors.reenterPassword &&
                              true
                            }
                          />

                          <FormFeedback>{errors.reenterPassword}</FormFeedback>
                        </Col>
                      </FormGroup>
                      <FormGroup className="login-and-register__form-group" inline>
                        <Col xs="12" sm="12" md="10" lg="10">
                          <Input
                            type="text"
                            name="name"
                            placeholder="Ime i prezime*"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                            invalid={touched.name && errors.name && true}
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup className="login-and-register__form-group" inline>
                        <Col xs="12" sm="12" md="10" lg="10">
                          <SelectInput
                            invalid={touched.city && errors.city && true}
                            value={values.city}
                            placeholder="Grad*"
                            options={parseOptions(CITIES)}
                            onChange={(option: any) =>
                              setFieldValue('city', option)
                            }
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup className="login-and-register__form-group" inline>
                        <Col xs="12" sm="12" md="10" lg="10">
                          <Input
                            type="text"
                            name="phone"
                            placeholder="Telefon*"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.phone}
                            invalid={touched.phone && errors.phone && true}
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup className="login-and-register__form-group" inline>
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

                      <FormGroup className="login-and-register__form-group" inline>
                        <Col xs="12" sm="12" md="10" lg="10">
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontSize: '13px',
                            }}
                          >
                            <Label check>
                              <Input
                                checked={values.terms}
                                name="terms"
                                type="checkbox"
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />{' '}
                              Prihvatam uslove korišćenja
                        </Label>
                          </div>
                        </Col>
                      </FormGroup>

                      <div className="login-and-register__form-group">
                        <div style={{ margin: '10px' }}>
                          <Button
                            type="submit"
                            size="sm"
                            color="primary"
                            disabled={isSubmitting || !values.terms}
                          >
                            Registruj se
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
                          Već imate profil?{' '}
                          <a onClick={goToLogin} href="#">
                            Prijavite se
                      </a>
                        </p>
                      </div>
                    </Form>
                  )}
              </Formik>
            )}
          </CreateUserComponent>
        )}
    </>
  );
};

export default Register;
