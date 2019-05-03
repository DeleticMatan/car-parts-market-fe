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

import Router from '../../routes';

type Props = {
  openContactForm: any;
};

type State = {
  modal: boolean;
  success: boolean;
};

class Marketing extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      modal: false,
      success: false,
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

  openContactForm = () => {
    this.closeModal();
    this.props.openContactForm();
  };

  render() {
    return (
      <>
        <a
          className="p-2 text-muted"
          href="#"
          onClick={() => this.openModal()}
          style={{ fontSize: '13px' }}
        >
          Marketing
        </a>
        <Modal centered isOpen={this.state.modal} toggle={this.closeModal}>
          <ModalBody style={{ backgroundColor: '#ebebeb' }}>
            <div style={{ textAlign: 'center' }}>
              <div className="login-and-register__logo-wrapper">
                <img src="/static/images/logo.png" />
              </div>
              <h6>
                <strong>MARKETING PO PROMO CENAMA DO 25. APRILA</strong>
              </h6>
              <br />
              <div style={{ textAlign: 'left' }}>
                <p>
                  Svi baneri na našem sajtu vidljivi su na svim stranicama
                  sajta.
                </p>
                <p>Cena zakupa banera na mesečnom nivou sa pdv-om:</p>
                <br />
                <h6>Bočni baneri (ukupno 10 pozicija)</h6>
                <ul>
                  <li>
                    Prve 3 pozicije <strong>2000 RSD / mesečno</strong>
                  </li>
                  <li>
                    Ostalih 7 pozicija <strong>1500 RSD / mesečno</strong>
                  </li>
                </ul>
                <h6>Centralni baneri (ukupno 4 pozicije)</h6>
                <ul>
                  <li>
                    Sve 4 pozicije <strong>2000 RSD / mesečno</strong>
                  </li>
                </ul>
                <p>
                  *cene se odnose na zakup JEDNE baner pozicije u trajanju od 30
                  dana
                </p>
                <p>
                  Ukoliko ste zainteresovani da zakupite jednu od baner pozicija
                  kontaktirajte nas{' '}
                  <a
                    href="#"
                    onClick={() => this.openContactForm()}
                    style={{ fontSize: '13px' }}
                  >
                    ovde
                  </a>
                </p>
              </div>
            </div>
          </ModalBody>
        </Modal>
      </>
    );
  }
}

export default Marketing;
