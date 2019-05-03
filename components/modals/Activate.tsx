import React from 'react';
import { Modal, ModalBody, Button, Alert } from 'reactstrap';

import Loading from '../Loading';

import Router from '../../routes';

import {
  ActivateUserComponent,
  ActivateUserMutation,
} from '../../generated/apolloComponents';

import { FetchResult } from 'react-apollo';

type Props = {
  token: string;
};

type State = {
  modal: boolean;
  activated: boolean;
  activating: boolean;
};

class NewPassword extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      modal: false,
      activated: false,
      activating: false,
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
    Router.replaceRoute('index');
    this.closeModal();
  };

  handleVerification = (activate: any) => {
    this.setState({ activating: true }, async () => {
      try {
        const response: void | FetchResult<
          ActivateUserMutation,
          Record<string, any>
        > = await activate();

        this.setState({
          activated: true,
        });
      } catch (err) {
        console.log(err);
        this.onClosed();
      }
    });
  };

  render() {
    // @ts-ignore
    const { token } = this.props;
    const { activating, activated, modal } = this.state;
    return (
      <div>
        <Modal centered isOpen={this.state.modal} onClosed={this.onClosed}>
          <ModalBody style={{ backgroundColor: '#ebebeb' }}>
            <ActivateUserComponent
              variables={{
                token: token,
              }}
            >
              {activate => (
                <div>
                  {!activated ? (
                    modal && (
                      <div>
                        <div>
                          <div className="login-and-register__logo-wrapper">
                            <img src="/static/images/logo.png" />
                          </div>
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexDirection: 'column',
                            }}
                          >
                            {activating ? (
                              <Loading />
                            ) : (
                                <>
                                  <p>Da li želite da aktivirate nalog?</p>
                                  <div
                                    style={{
                                      marginTop: '15px',
                                      marginBottom: '15px',
                                    }}
                                  >
                                    <Button
                                      onClick={() =>
                                        this.handleVerification(activate)
                                      }
                                    >
                                      Aktiviraj
                                  </Button>
                                  </div>
                                  <Button
                                    size="sm"
                                    color="danger"
                                    onClick={this.onClosed}
                                  >
                                    Otkaži
                                </Button>
                                </>
                              )}
                          </div>

                          <div
                            className="login-and-register__form-group"
                            style={{
                              marginTop: '15px',
                            }}
                          />
                        </div>
                      </div>
                    )
                  ) : (
                      <div>
                        <div className="login-and-register__logo-wrapper">
                          <img src="/static/images/logo.png" />
                        </div>
                        <Alert style={{ textAlign: 'center' }}>
                          Vaš nalog je uspešno aktiviran!
                      </Alert>
                        <div
                          className="login-and-register__form-group"
                          style={{
                            marginTop: '15px',
                          }}
                        >
                          <Button
                            size="sm"
                            color="secondary"
                            onClick={this.onClosed}
                          >
                            OK
                        </Button>
                        </div>
                      </div>
                    )}
                </div>
              )}
            </ActivateUserComponent>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default NewPassword;
