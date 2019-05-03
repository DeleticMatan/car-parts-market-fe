import React from 'react';

import LoginAndRegister from './modals/LoginAndRegister';
import Marketing from './modals/Marketing';
import ContactForm from './modals/ContactForm';

import { isBrowser } from '../lib/isBrowser';
import Router from '../routes';
import Link from 'next/link';

import { withApollo } from 'react-apollo';

import './Header.scss';

const Header = ({ client }: any) => {
  const [getContactModal, setContactModal] = React.useState(false);

  const openContactForm = () => {
    setContactModal(true);
  };

  const closeContactForm = () => {
    setContactModal(false);
  };

  const logout = () => {
    client.resetStore();
    isBrowser && localStorage.clear();
    Router.pushRoute('index');
  };

  return (
    <div className="header row header-wrapper">
      <div className="header-subwrapper">
        <Link href="/">
          <img
            style={{ cursor: 'pointer' }}
            src="/static/images/logo.png"
            className="logo"
          />
        </Link>{' '}
        <span
          className="hidden header-span"
          style={{ fontSize: '13px', paddingLeft: '15px' }}
        >
          Najveće tržište auto delova i opreme.
        </span>
      </div>

      <div className="header-links">
        <Marketing openContactForm={openContactForm} />
        <ContactForm
          contactForm={getContactModal}
          closeContactForm={closeContactForm}
        />

        <a
          className="p-2 text-muted"
          href="#"
          onClick={openContactForm}
          style={{ fontSize: '13px' }}
        >
          Kontakt
        </a>
        {isBrowser && localStorage.token && (
          <Link href="/profil">
            <a className="p-2 text-muted" href="#" style={{ fontSize: '13px' }}>
              Profil
            </a>
          </Link>
        )}

        {isBrowser && localStorage.token ? (
          <a
            onClick={logout}
            className="p-2 text-muted"
            href="#"
            style={{ fontSize: '13px' }}
          >
            Izloguj se
          </a>
        ) : (
            <LoginAndRegister />
          )}
      </div>
    </div>
  );
};

export default withApollo(Header);
