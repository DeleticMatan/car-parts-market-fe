import * as React from 'react';
import Layout from '../components/Layout';

import RightAds from '../components/RightAds';
import MiddleAds from '../components/MiddleAds';
import Profile from '../components/Profile';

import { Container, Row, Col } from 'reactstrap';

import MyAds from '../components/MyAds';

const Profil: React.FunctionComponent = () => {
  const [getCurrentTab, setCurrentTab] = React.useState('Profil');

  return (
    <Layout title="Profil" description="Profil">
      <Container style={{ padding: '0px', maxWidth: '100%' }}>
        <Row>
          <Col xs="12" sm="12" md="12" lg="9">
            <div
              style={{
                backgroundColor: 'white',
                marginTop: '20px',
                marginBottom: '30px',
                padding: '0px',
                boxShadow: '0 10px 10px rgba(0, 0, 0, 0.1)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                  backgroundColor: '#2687ff',
                  cursor: 'pointer',
                }}
              >
                <div
                  className={getCurrentTab !== 'Profil' ? 'flatmenu' : ''}
                  onClick={() => setCurrentTab('Profil')}
                  style={{
                    transition: '0.3s',
                    fontSize: '15px',
                    flex: 1,
                    textAlign: 'center',
                    backgroundColor:
                      getCurrentTab === 'Profil' ? 'white' : '#2687ff',
                    color: getCurrentTab === 'Profil' ? 'black' : 'white',
                    padding: '10px',
                  }}
                >
                  Profil
                </div>
                <div
                  className={
                    getCurrentTab !== 'Aktivni oglasi' ? 'flatmenu' : ''
                  }
                  onClick={() => setCurrentTab('Aktivni oglasi')}
                  style={{
                    fontSize: '15px',
                    flex: 1,
                    textAlign: 'center',
                    backgroundColor:
                      getCurrentTab === 'Aktivni oglasi' ? 'white' : '#2687ff',
                    color:
                      getCurrentTab === 'Aktivni oglasi' ? 'black' : 'white',
                    padding: '10px',
                  }}
                >
                  Aktivni oglasi
                </div>
                <div
                  className={
                    getCurrentTab !== 'Neaktivni oglasi' ? 'flatmenu' : ''
                  }
                  onClick={() => setCurrentTab('Neaktivni oglasi')}
                  style={{
                    fontSize: '15px',
                    flex: 1,
                    textAlign: 'center',
                    backgroundColor:
                      getCurrentTab === 'Neaktivni oglasi'
                        ? 'white'
                        : '#2687ff',
                    color:
                      getCurrentTab === 'Neaktivni oglasi' ? 'black' : 'white',
                    padding: '10px',
                  }}
                >
                  Neaktivni oglasi
                </div>
              </div>
              <div style={{ padding: '20px' }}>
                {getCurrentTab === 'Profil' && <Profile />}
                {getCurrentTab === 'Aktivni oglasi' && (
                  <div>
                    <MyAds active={true} />
                  </div>
                )}
                {getCurrentTab === 'Neaktivni oglasi' && (
                  <MyAds active={false} />
                )}
              </div>
            </div>

            <div>
              <MiddleAds />
            </div>
          </Col>

          <Col xs="12" sm="12" md="12" lg="3">
            <RightAds />
          </Col>
        </Row>
        <Row />
      </Container>
    </Layout>
  );
};

export default Profil;
