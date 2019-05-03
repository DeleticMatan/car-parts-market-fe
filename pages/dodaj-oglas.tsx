import * as React from 'react';
import Layout from '../components/Layout';

import RightAds from '../components/RightAds';
import MiddleAds from '../components/MiddleAds';

import { Container, Row, Col } from 'reactstrap';

import AddAd from '../components/forms/AddAd';
import AddTire from '../components/forms/AddTire';
import AddRim from '../components/forms/AddRim';
import Loading from '../components/Loading';

import { GetMyInfoComponent } from '../generated/apolloComponents';

const AdRules = () => {
  return (
    <div style={{ backgroundColor: '#CCCCCC', padding: '15px' }}>
      <h3 style={{ fontSize: '24px' }}>Pravila unosa oglasa</h3>
      <div style={{ fontSize: '13px' }}>
        Zabranjeno je:
        <ul style={{ margin: '10px' }}>
          <li>
            Postavljanje oglasa koji nemaju veze sa sadržajem sajta
            AutoDelovi.com.
          </li>
          <li>
            Postavljanje oglasa u pogrešnim odnosno neprikladnim kategorijama i
            grupama.
          </li>
          <li>Postavljanje slika koje nemaju veze sa oglasom.</li>
          <li>
            Postavljanje istih ili sličnih oglasa više puta za redom (spamovanje
            sajta).
          </li>
          <li>Slični oglasi su oni koji imaju isti predmet prodaje.</li>
          <li>
            Postavljane linkova koji vode ka drugom sajtu u svrhu reklame.
          </li>
          <li>
            Postavljanje zaštitnih znakova proizvođača u okviru oglasa od strane
            firmi i pojedinaca koji nisu ovlašceni da ga koriste.
          </li>
          <li>
            Unositi specijalne grafičke karaktere u naslov ili opis oglasa sa
            ciljem isticanja oglasa.
          </li>
          <li>
            Unositi uvredljiv sadržaj, ili sadržaj koji promoviše rasizam,
            netrpeljivost, mržnju, ili fizičko povređivanje bilo koje vrste, a
            koje je usmereno na bilo koju grupu, ili pojedinca.
          </li>
        </ul>
      </div>
      <p style={{ fontSize: '13px' }}>
        Član 301 (1) Ko unese netačan podatak, propusti unošenje tačnog podatka
        ili na drugi način prikrije ili lažno prikaže podatak i time utiče na
        rezultat elektronske obrade i prenosa podataka u nameri da sebi ili
        drugom pribavi protivpravnu imovinsku korist i time drugom prouzrokuje
        imovinsku štetu, kazniće se novcanom kaznom ili zatvorom do tri godine.
      </p>
    </div>
  );
};

const DodajOglas: React.FunctionComponent = () => {
  // Parsing constants

  const [getCurrentTab, setCurrentTab] = React.useState('Delovi i oprema');

  return (
    <Layout title="Postavite oglas" description="Postavite besplatan oglas">
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
              <GetMyInfoComponent>
                {({ loading, error, data }) => {
                  if (loading)
                    return (
                      <div
                        style={{ paddingTop: '20px', paddingBottom: '20px' }}
                      >
                        <Loading />
                      </div>
                    );
                  if (error)
                    return (
                      <>
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
                            className={
                              getCurrentTab !== 'Delovi i oprema'
                                ? 'flatmenu'
                                : ''
                            }
                            onClick={() => setCurrentTab('Delovi i oprema')}
                            style={{
                              fontSize: '15px',
                              flex: 1,
                              textAlign: 'center',
                              backgroundColor:
                                getCurrentTab === 'Delovi i oprema'
                                  ? 'white'
                                  : '#2687ff',
                              color:
                                getCurrentTab === 'Delovi i oprema'
                                  ? 'black'
                                  : 'white',
                              padding: '10px',
                            }}
                          >
                            Delovi i oprema
                          </div>
                          <div
                            className={
                              getCurrentTab !== 'Gume' ? 'flatmenu' : ''
                            }
                            onClick={() => setCurrentTab('Gume')}
                            style={{
                              fontSize: '15px',
                              flex: 1,
                              textAlign: 'center',
                              backgroundColor:
                                getCurrentTab === 'Gume' ? 'white' : '#2687ff',
                              color:
                                getCurrentTab === 'Gume' ? 'black' : 'white',
                              padding: '10px',
                            }}
                          >
                            Gume
                          </div>
                          <div
                            className={
                              getCurrentTab !== 'Felne i ratkapne'
                                ? 'flatmenu'
                                : ''
                            }
                            onClick={() => setCurrentTab('Felne i ratkapne')}
                            style={{
                              fontSize: '15px',
                              flex: 1,
                              textAlign: 'center',
                              backgroundColor:
                                getCurrentTab === 'Felne i ratkapne'
                                  ? 'white'
                                  : '#2687ff',
                              color:
                                getCurrentTab === 'Felne i ratkapne'
                                  ? 'black'
                                  : 'white',
                              padding: '10px',
                            }}
                          >
                            Felne i ratkapne
                          </div>
                        </div>
                        <div style={{ padding: '20px' }}>
                          <h3>Dodaj oglas</h3>
                          <hr />
                          {getCurrentTab === 'Delovi i oprema' && <AddAd />}
                          {getCurrentTab === 'Gume' && <AddTire />}
                          {getCurrentTab === 'Felne i ratkapne' && <AddRim />}
                        </div>
                      </>
                    );

                  if (data) {
                    return (
                      <>
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
                            className={
                              getCurrentTab !== 'Delovi i oprema'
                                ? 'flatmenu'
                                : ''
                            }
                            onClick={() => setCurrentTab('Delovi i oprema')}
                            style={{
                              fontSize: '15px',
                              flex: 1,
                              textAlign: 'center',
                              backgroundColor:
                                getCurrentTab === 'Delovi i oprema'
                                  ? 'white'
                                  : '#2687ff',
                              color:
                                getCurrentTab === 'Delovi i oprema'
                                  ? 'black'
                                  : 'white',
                              padding: '10px',
                            }}
                          >
                            Delovi i oprema
                          </div>
                          <div
                            className={
                              getCurrentTab !== 'Gume' ? 'flatmenu' : ''
                            }
                            onClick={() => setCurrentTab('Gume')}
                            style={{
                              fontSize: '15px',
                              flex: 1,
                              textAlign: 'center',
                              backgroundColor:
                                getCurrentTab === 'Gume' ? 'white' : '#2687ff',
                              color:
                                getCurrentTab === 'Gume' ? 'black' : 'white',
                              padding: '10px',
                            }}
                          >
                            Gume
                          </div>
                          <div
                            className={
                              getCurrentTab !== 'Felne i ratkapne'
                                ? 'flatmenu'
                                : ''
                            }
                            onClick={() => setCurrentTab('Felne i ratkapne')}
                            style={{
                              fontSize: '15px',
                              flex: 1,
                              textAlign: 'center',
                              backgroundColor:
                                getCurrentTab === 'Felne i ratkapne'
                                  ? 'white'
                                  : '#2687ff',
                              color:
                                getCurrentTab === 'Felne i ratkapne'
                                  ? 'black'
                                  : 'white',
                              padding: '10px',
                            }}
                          >
                            Felne i ratkapne
                          </div>
                        </div>
                        <div style={{ padding: '20px' }}>
                          <h3>Dodaj oglas</h3>
                          <hr />
                          {getCurrentTab === 'Delovi i oprema' && (
                            <AddAd user={data ? data.me : null} />
                          )}
                          {getCurrentTab === 'Gume' && (
                            <AddTire user={data ? data.me : null} />
                          )}
                          {getCurrentTab === 'Felne i ratkapne' && (
                            <AddRim user={data ? data.me : null} />
                          )}
                        </div>
                      </>
                    );
                  }
                }}
              </GetMyInfoComponent>
            </div>

            <AdRules />

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

export default DodajOglas;
