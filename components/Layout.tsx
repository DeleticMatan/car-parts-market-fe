import * as React from 'react';
import Head from 'next/head';

import Header from './Header';
import Navigation from './Navigation';

import Footer from './Footer';

import '../styles.scss';

type Props = {
  title?: string;
  description?: string;
};

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = '',
  description,
}) => {
  const renderTitle = () => <title>{`Auto Delovi | ${title}`}</title>;

  return (
    <div className="main-wrapper">
      <Head>
        {renderTitle()}
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="theme-color" content="#0054CE" />
        <meta name="Description" content={description} />
        <link rel="manifest" href="/static/manifest/manifest.json" />
      </Head>

      <header>
        <Header />
        <Navigation />
      </header>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
