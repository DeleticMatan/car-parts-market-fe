import * as React from 'react';
import { Button, FormGroup, Input, Form, Col, FormFeedback } from 'reactstrap';
import { Formik, ErrorMessage } from 'formik';
import forgotPasswordValidationSchema from '../../validations/forgotPassword';

import {
  ResetPasswordComponent,
  ResetPasswordMutation,
} from '../../generated/apolloComponents';

import { FetchResult } from 'react-apollo';

type Props = {
  emailRef: any;
  closeModal: any;
};

const ForgotPassword: React.FunctionComponent<Props> = ({
  emailRef,
  closeModal,
}) => {
  return (
    <ResetPasswordComponent>
      {resetPassword => (
        <Formik
          initialValues={{ email: '' }}
          validationSchema={forgotPasswordValidationSchema}
          onSubmit={async (data, { setSubmitting, resetForm }) => {
            try {
              const response: void | FetchResult<
                ResetPasswordMutation,
                Record<string, any>
              > = await resetPassword({
                variables: data,
              });

              console.log(response);
              //Router.pushRoute('profil');
              closeModal();
            } catch (err) {
              console.log(err);
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
            submitCount,
          }) => (
              <Form onSubmit={handleSubmit}>
                <div className="login-and-register__logo-wrapper">
                  <img src="/static/images/logo.png" />
                </div>
                <div
                  style={{ textAlign: 'center' }}
                  className="login-and-register__form-group"
                >
                  <p>
                    Unesite e-mail adresu sa kojom ste registrovani, a mi ćemo Vam
                    poslati uputstvo kako da kreirate novu lozinku. Ako vam u roku
                    od par minuta ne stigne email, molimo vas proverite i spam
                    folder.
                </p>
                </div>
                <FormGroup inline className="login-and-register__form-group">
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
                        touched.email && errors.email && submitCount > 0 && true
                      }
                    />
                    <FormFeedback>{errors.email}</FormFeedback>
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
                      Pošalji
                  </Button>
                  </div>

                  <div style={{ margin: '10px' }}>
                    <Button size="sm" color="secondary" onClick={closeModal}>
                      Otkaži
                  </Button>
                  </div>
                </div>
              </Form>
            )}
        </Formik>
      )}
    </ResetPasswordComponent>
  );
};

export default ForgotPassword;
