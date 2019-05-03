import * as React from 'react';

import { Container, Row, Col } from 'reactstrap';
import ImageSlider from './ImageSlider';

import Router from '../routes';

const SingleAdComponent = ({ data, adType }: any) => {
  const getRimsType = () => {
    if (data.type !== 'Ratkapne') {
      return ' felne';
    } else {
      return '';
    }
  };

  const getTitle = () => {
    switch (adType) {
      case 'ad': {
        return `${data.subcategory ? data.subcategory : ''} za ${
          data.brand ? data.brand : ''
        } ${data.model ? data.model : ''}`;
      }
      case 'tire': {
        return `${data.brand} ${data.width}/${data.height} R${data.diameter} ${
          data.type
        }`;
      }
      case 'rim': {
        return `${data.type} ${getRimsType()} ${data.brand} ${data.diameter}" ${
          data.holes
        }`;
      }
    }
  };

  const getCode = () => {
    switch (adType) {
      case 'ad': {
        return `a${data.id}`;
      }
      case 'tire': {
        return `t${data.id}`;
      }
      case 'rim': {
        return `r${data.id}`;
      }
    }
  };

  const renderFieldRow = (title: string, localData: any) => (
    <Row
      style={{
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '5px',
      }}
    >
      <a style={{ fontSize: '14px' }}>
        <strong>{`${title}:`}</strong>
      </a>
      {title === 'Profil' && localData !== '' ? (
        <a
          onClick={() =>
            Router.replaceRoute('korisnici-profil', { id: localData })
          }
          href={Router.getRoutePath('korisnici-profil', { id: localData })}
          style={{ fontSize: '13px' }}
        >
          Link
        </a>
      ) : (
        <a style={{ fontSize: '13px' }}>{localData}</a>
      )}
    </Row>
  );

  const renderFields = () => {
    switch (adType) {
      case 'ad': {
        return (
          <div style={{ minWidth: '100%' }}>
            {renderFieldRow('Vrsta', data.adType)}
            {renderFieldRow('Marka', data.brand)}
            {renderFieldRow('Model', data.model)}
            {renderFieldRow('Kategorija', data.category)}
            {renderFieldRow('Potkategorija', data.subcategory)}
            {renderFieldRow('Godište od', data.year)}
            {renderFieldRow('Godište do', data.yearTo)}
            {renderFieldRow('Stanje', data.condition)}
            {renderFieldRow('Cena', data.price)}
            {renderFieldRow('Ime i prezime', data.name)}
            {renderFieldRow(
              'Profil',
              data.user && data.user.id && data.user.id ? data.user.id : '',
            )}
            {renderFieldRow('Grad', data.city)}
            {renderFieldRow('Email', data.email)}
            {renderFieldRow('Tel1', data.phone)}
            {renderFieldRow('Tel2', data.phone2)}
          </div>
        );
      }
      case 'tire': {
        return (
          <div style={{ minWidth: '100%' }}>
            {renderFieldRow('Širina', data.width)}
            {renderFieldRow('Visina', data.height)}
            {renderFieldRow('Prečnik', data.diameter)}
            {renderFieldRow('Sezona', data.type)}
            {renderFieldRow('Stanje', data.condition)}
            {renderFieldRow('Proizvođač', data.brand)}
            {renderFieldRow('Cena', data.price)}
            {renderFieldRow('Ime i prezime', data.name)}
            {renderFieldRow(
              'Profil',
              data.user && data.user.id && data.user.id ? data.user.id : '',
            )}
            {renderFieldRow('Grad', data.city)}
            {renderFieldRow('Email', data.email)}
            {renderFieldRow('Tel1', data.phone)}
            {renderFieldRow('Tel2', data.phone2)}
          </div>
        );
      }
      case 'rim': {
        return (
          <div style={{ minWidth: '100%' }}>
            {renderFieldRow('Širina', data.width)}
            {renderFieldRow('Broj i raspon rupa', data.holes)}
            {renderFieldRow('Prečnik', data.diameter)}
            {renderFieldRow('Vrsta', data.type)}
            {renderFieldRow('Stanje', data.condition)}
            {renderFieldRow('Proizvođač', data.brand)}
            {renderFieldRow('ET', `${data.et && 'ET'}${data.et && data.et}`)}
            {renderFieldRow('Cena', data.price)}
            {renderFieldRow('Ime i prezime', data.name)}
            {renderFieldRow(
              'Profil',
              data.user && data.user.id && data.user.id ? data.user.id : '',
            )}
            {renderFieldRow('Grad', data.city)}
            {renderFieldRow('Email', data.email)}
            {renderFieldRow('Tel1', data.phone)}
            {renderFieldRow('Tel2', data.phone2)}
          </div>
        );
      }
    }
  };
  return (
    <Container style={{ margin: 0, padding: 0, maxWidth: '100%' }}>
      <h3 style={{ margin: 0, padding: 0 }}>{getTitle()}</h3>

      <hr />
      <Row>
        <Col xs="12" sm="12" md="12" lg="12">
          <Container style={{ padding: 0, maxWidth: '100%' }}>
            <Row>
              <Col xs="12" sm="6" md="7" lg="7">
                <ImageSlider id={data.id} adType={data.__typename} />
              </Col>
              <Col xs="12" sm="6" md="5" lg="5">
                <div
                  style={{
                    paddingLeft: '15px',
                    paddingRight: '15px',
                  }}
                >
                  {renderFields()}
                </div>
              </Col>
              <Col xs="12" sm="12" md="12" lg="12">
                <div>
                  <br />
                  {data.text && data.text !== '' && (
                    <>
                      <h3>Opis oglasa</h3>
                      <hr />
                      <div>
                        <p>{data.text}</p>
                      </div>
                    </>
                  )}
                </div>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default SingleAdComponent;
