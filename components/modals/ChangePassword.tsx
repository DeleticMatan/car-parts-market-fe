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
} from 'reactstrap';
import { Formik } from 'formik';

import {
  UpdatePasswordComponent,
  UpdatePasswordMutation,
} from '../../generated/apolloComponents';

import { FetchResult } from 'react-apollo';

import changePasswordValidationSchema from '../../validations/changePassword';

type Props = {
  id: string;
};

type State = {
  modal: boolean;
};

class ChangePassword extends React.Component<Props, State> {
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

  onClosed = () => {};

  render() {
    // @ts-ignore
    const { id } = this.props;
    return (
      <div>
        <Button onClick={this.openModal} block color="danger">
          Izmeni lozinku
        </Button>
        <Modal
          centered
          isOpen={this.state.modal}
          toggle={this.closeModal}
          onClosed={this.onClosed}
        >
          <ModalBody style={{ backgroundColor: '#ebebeb' }}>
            <UpdatePasswordComponent>
              {login => (
                <Formik
                  validationSchema={changePasswordValidationSchema}
                  initialValues={{ id: id, password: '', reenterPassword: '' }}
                  onSubmit={async (data, { setSubmitting, resetForm }) => {
                    try {
                      const response: void | FetchResult<
                        UpdatePasswordMutation,
                        Record<string, any>
                      > = await login({
                        variables: { id: data.id, password: data.password },
                      });

                      this.closeModal();
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
                            valid={touched.password && !errors.password && true}
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
                          <FormFeedback>{errors.reenterPassword}</FormFeedback>
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
            </UpdatePasswordComponent>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default ChangePassword;
