import * as React from 'react';

import { Collapse, Navbar, Nav } from 'reactstrap';

import NavigationItem from './NavigationItem';

import { isBrowser } from '../lib/isBrowser';

import { FaBars } from 'react-icons/fa';

import NavigationLogin from './forms/NavigationLogin';

import './Navigation.scss';

const Navigation: React.FunctionComponent = () => {
  const [isNavbarOpen, setIsNavbarOpen] = React.useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <Navbar
      style={{
        flex: 1,
        padding: '0px',
      }}
      color="primary"
      expand="md"
    >
      <div className="navbar-toggler-custom" onClick={toggleNavbar}>
        <FaBars />
      </div>

      <Collapse isOpen={isNavbarOpen} navbar>
        <Nav navbar>
          <NavigationItem title="Delovi i oprema" link="/" />
          <NavigationItem title="Gume" link="/gume" />
          <NavigationItem title="Felne i ratkapne" link="/felne-i-ratkapne" />
          <NavigationItem title="blog" link="/blog" />
          <NavigationItem title="forum" link="/forum" />

          {isBrowser && localStorage.token ? (
            <NavigationItem
              light
              title="+ Postavite besplatan oglas"
              link="/dodaj-oglas"
            />
          ) : <NavigationLogin />}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Navigation;
