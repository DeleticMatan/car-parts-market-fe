import * as React from 'react';

import { isBrowser } from '../lib/isBrowser';

import { Row } from 'reactstrap';

import ChangeUserProfile from './modals/ChangeUserProfile';
import ChangePassword from './modals/ChangePassword';

class Profile extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      id: '',
      name: '',
      email: '',
      city: '',
      phone: '',
      phone2: '',
    };
  }
  componentDidMount = () => {
    this.setState({
      id: localStorage.getItem('id') ? localStorage.getItem('id') : '',
      name: localStorage.getItem('name') ? localStorage.getItem('name') : '',
      email: localStorage.getItem('email') ? localStorage.getItem('email') : '',
      city: localStorage.getItem('city') ? localStorage.getItem('city') : '',
      phone: localStorage.getItem('phone') ? localStorage.getItem('phone') : '',
      phone2: localStorage.getItem('phone2')
        ? localStorage.getItem('phone2')
        : '',
    });
  };

  renderFieldRow = (title: string, data: any) => (
    <Row
      style={{
        margin: '8px',
        minWidth: '75%',
      }}
    >
      <a
        style={{
          fontSize: '13px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flex: 1,
        }}
      >
        <strong>{`${title}:`}</strong>
      </a>
      <a style={{ fontSize: '13px' }}>{data}</a>
    </Row>
  );

  render() {
    // @ts-ignore
    const { id, name, email, city, phone, phone2 } = this.state;
    return (
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/*
        <div
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            style={{
              width: '150px',
              height: '150px',
            }}
            src="/static/images/profile.png"
          />
        </div>
          */}
        {isBrowser && localStorage && (
          <div
            style={{
              flex: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                minWidth: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'column',
                flex: 1,
              }}
            >
              {this.renderFieldRow('Ime i prezime', name)}
              {this.renderFieldRow('Email', email)}
              {this.renderFieldRow('Grad', city)}
              {this.renderFieldRow('Telefon 1', phone)}
              {this.renderFieldRow('Telefon 2', phone2)}
            </div>
          </div>
        )}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
          }}
        >
          <div
            style={{
              width: '150px',
              margin: '10px',
            }}
          >
            {isBrowser && localStorage && (
              <ChangeUserProfile
                onSuccess={(newData: any) => this.setState(newData)}
                data={this.state}
              />
            )}
          </div>
          <div
            style={{
              width: '150px',
              margin: '10px',
            }}
          >
            <ChangePassword id={id} />
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
