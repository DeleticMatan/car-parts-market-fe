import React from 'react';
import { Modal, ModalBody } from 'reactstrap';

import Login from '../forms/Login';
import Register from '../forms/Register';
import ForgotPassword from '../forms/ForgotPassword';
import { FaLock } from 'react-icons/fa';

enum loginOrRegister {
  LOGIN,
  REGISTER,
  FORGOT_PASSWORD,
}

type Props = {};

type State = {
  modal: boolean;
  mode: loginOrRegister;
};

class LoginAndRegister extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      modal: false,
      mode: loginOrRegister.LOGIN,
    };
  }

  private emailLoginRef: any = React.createRef();
  private emailRegisterRef: any = React.createRef();
  private emailForgotPasswordRef: any = React.createRef();

  openModal = () => {
    this.setState(() => ({
      modal: true,
      mode: loginOrRegister.LOGIN,
    }));
  };

  closeModal = () => {
    this.setState(() => ({
      modal: false,
    }));
  };

  onOpened = () => {
    this.emailLoginRef.current.focus();
  };

  handleSubmit = (event: any) => {
    event.preventDefault();
    this.closeModal();
  };

  onClosed = () => { };

  goToRegister = () => {
    this.setState(
      () => ({
        mode: loginOrRegister.REGISTER,
      }),
      () => this.emailRegisterRef.current.focus(),
    );
  };

  goToLogin = () => {
    this.setState(
      () => ({
        mode: loginOrRegister.LOGIN,
      }),
      () => this.emailLoginRef.current.focus(),
    );
  };

  goToForgotPassword = () => {
    this.setState(
      () => ({
        mode: loginOrRegister.FORGOT_PASSWORD,
      }),
      () => this.emailForgotPasswordRef.current.focus(),
    );
  };

  renderLoginForm = (mode: loginOrRegister) => {
    return (
      <>
        {mode === loginOrRegister.LOGIN && (
          <Login
            emailRef={this.emailLoginRef}
            closeModal={this.closeModal}
            goToRegister={this.goToRegister}
            goToForgotPassword={this.goToForgotPassword}
          />
        )}
      </>
    );
  };

  renderRegisterForm = (mode: loginOrRegister) => {
    return (
      <>
        {mode === loginOrRegister.REGISTER && (
          <Register
            emailRef={this.emailRegisterRef}
            closeModal={this.closeModal}
            goToLogin={this.goToLogin}
          />
        )}
      </>
    );
  };

  renderForgotPasswordForm = (mode: loginOrRegister) => {
    return (
      <>
        {mode === loginOrRegister.FORGOT_PASSWORD && (
          <ForgotPassword
            emailRef={this.emailForgotPasswordRef}
            closeModal={this.closeModal}
          />
        )}
      </>
    );
  };

  renderBody = () => {
    const { mode } = this.state;
    return (
      <>
        {this.renderLoginForm(mode)}
        {this.renderRegisterForm(mode)}
        {this.renderForgotPasswordForm(mode)}
      </>
    );
  };

  render() {
    return (
      <>
        <FaLock />
        <a
          onClick={this.openModal}
          className="p-2 text-muted"
          href="#"
          style={{ fontSize: '13px' }}
        >
          Prijavi se
        </a>
        <Modal
          centered
          isOpen={this.state.modal}
          toggle={this.closeModal}
          onOpened={this.onOpened}
          onClosed={this.onClosed}
        >
          <ModalBody style={{ backgroundColor: '#ebebeb' }}>
            {this.renderBody()}
          </ModalBody>
        </Modal>
      </>
    );
  }
}

export default LoginAndRegister;
