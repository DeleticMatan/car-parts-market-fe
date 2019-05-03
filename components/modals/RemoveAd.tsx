import React from 'react';
import { Modal, ModalBody, Button, Form } from 'reactstrap';

import {
  DeleteAdComponent,
  DeleteTireComponent,
  DeleteRimComponent,
} from '../../generated/apolloComponents';

import { FetchResult } from 'react-apollo';

type Props = {
  id: string;
  adType: string;
  refetch: any;
};

type State = {
  modal: boolean;
};

class RemoveAd extends React.Component<Props, State> {
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

  renderRemoveButton = () => {
    const { id, adType } = this.props;
    switch (adType) {
      case 'ads': {
        return this.renderAdRemoveButtom(id);
      }
      case 'tires': {
        return this.renderTireRemoveButtom(id);
      }
      case 'rims': {
        return this.renderRimRemoveButtom(id);
      }
    }
  };

  onSubmit = async (remove: any) => {
    const { id, refetch } = this.props;

    try {
      const response: void | FetchResult<
        any,
        Record<string, any>
      > = await remove({
        variables: { id: id },
      });
      refetch();
      this.closeModal();
    } catch (err) {
      console.log(err);
      this.closeModal();
    }
  };

  renderAdRemoveButtom = (id: string) => {
    return (
      <DeleteAdComponent variables={{ id: id }}>
        {remove => (
          <Button
            type="submit"
            size="sm"
            color="danger"
            onClick={(e: any) => {
              e.preventDefault();
              this.onSubmit(remove);
            }}
          >
            Da, izbriši
          </Button>
        )}
      </DeleteAdComponent>
    );
  };

  renderTireRemoveButtom = (id: string) => {
    return (
      <DeleteTireComponent variables={{ id: id }}>
        {remove => (
          <Button
            type="submit"
            size="sm"
            color="danger"
            onClick={(e: any) => {
              e.preventDefault();
              this.onSubmit(remove);
            }}
          >
            Da, izbriši
          </Button>
        )}
      </DeleteTireComponent>
    );
  };

  renderRimRemoveButtom = (id: string) => {
    return (
      <DeleteRimComponent variables={{ id: id }}>
        {remove => (
          <Button
            type="submit"
            size="sm"
            color="danger"
            onClick={(e: any) => {
              e.preventDefault();
              this.onSubmit(remove);
            }}
          >
            Da, izbriši
          </Button>
        )}
      </DeleteRimComponent>
    );
  };

  render() {
    // @ts-ignore
    const { id } = this.props;
    return (
      <div>
        <Button onClick={this.openModal} block color="danger">
          Izbriši
        </Button>
        <Modal
          centered
          isOpen={this.state.modal}
          toggle={this.closeModal}
          onClosed={this.onClosed}
        >
          <ModalBody style={{ backgroundColor: '#ebebeb' }}>
            <Form>
              <div className="login-and-register__logo-wrapper">
                <img src="/static/images/logo.png" />
              </div>

              <div
                style={{
                  minWidth: '10%%',
                  textAlign: 'center',
                  paddingBottom: '20px',
                }}
              >
                Da li ste sigurni?
              </div>

              <div className="login-and-register__form-group">
                <div style={{ margin: '10px' }}>
                  {this.renderRemoveButton()}
                </div>

                <div style={{ margin: '10px' }}>
                  <Button size="sm" color="secondary" onClick={this.closeModal}>
                    Otkaži
                  </Button>
                </div>
              </div>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default RemoveAd;
