import * as React from 'react';
import Router from '../routes';

import RemoveAd from '../components/modals/RemoveAd';

import EditAd from '../components/modals/EditAd';
import EditTire from '../components/modals/EditTire';
import EditRim from '../components/modals/EditRim';

import {
  FOLDER_ADS,
  FOLDER_RIMS,
  FOLDER_TIRES,
} from '../constants/general.constants';

import { Col } from 'reactstrap';

type Props = {
  data?: any;
  onClick?: any;
  adType: any;
  editable?: boolean;
  removable?: boolean;
  refetch?: any;
};

const AdCard: React.FunctionComponent<Props> = ({
  data = '',
  adType,
  editable = false,
  removable = false,
  refetch,
}) => {
  const getRimsType = () => {
    if (data.type !== 'Ratkapne') {
      return ' felne';
    } else {
      return '';
    }
  };

  const getTitle = () => {
    switch (adType) {
      case 'ads': {
        return `${data.subcategory ? data.subcategory : ''} za ${
          data.brand ? data.brand : ''
        } ${data.model ? data.model : ''}`;
      }
      case 'tires': {
        return `${data.brand} ${data.width}/${data.height} R${data.diameter} ${
          data.type
        }`;
      }
      case 'rims': {
        return `${data.type} ${getRimsType()} ${data.brand} ${data.diameter}" ${
          data.holes
        }`;
      }
    }
  };

  const getCode = () => {
    switch (adType) {
      case 'ads': {
        return `a${data.id}`;
      }
      case 'tires': {
        return `t${data.id}`;
      }
      case 'rims': {
        return `r${data.id}`;
      }
    }
  };

  const getFolder = () => {
    switch (adType) {
      case 'ads': {
        return FOLDER_ADS;
      }
      case 'tires': {
        return FOLDER_TIRES;
      }
      case 'rims': {
        return FOLDER_RIMS;
      }
    }
  };

  const getFields = () => {
    switch (adType) {
      case 'ads': {
        return `${data.adType} | Marka: ${
          data.brand ? data.brand : ''
        } | Model: ${data.model ? data.model : ''} | ${
          data.year ? data.year : ''
        } | ${data.yearTo ? data.yearTo : ''} | Kategorija: ${
          data.category
        } | ${data.subcategory} | ${data.condition} | Grad: ${data.city}`;
      }
      case 'tires': {
        return `Širina: ${data.brand} | Visina: ${data.width} | Prečnik: ${
          data.diameter
        } | ${data.type} | ${data.condition} | Grad: ${data.city}`;
      }
      case 'rims': {
        return `Prečnik: ${data.diameter} | Broj i raspon rupa: ${
          data.holes
        } | ${data.type} ${data.et && '| ET'}${data.et} | ${
          data.condition
        } | Grad: ${data.city}`;
      }
    }
  };

  const [getDate, setDate] = React.useState(Date.now());

  const getEditModal = () => {
    switch (adType) {
      case 'ads': {
        return (
          <EditAd
            setNewDate={() => setDate(Date.now())}
            refetch={refetch}
            adId={data.id}
          />
        );
      }
      case 'tires': {
        return (
          <EditTire
            setNewDate={() => setDate(Date.now())}
            refetch={refetch}
            adId={data.id}
          />
        );
      }
      case 'rims': {
        return (
          <EditRim
            setNewDate={() => setDate(Date.now())}
            refetch={refetch}
            adId={data.id}
          />
        );
      }
    }
  };

  const isHighlighted = (classNames: string, border: boolean = false) => {
    if (data.top) {
      if (border) {
        return classNames + ' top-highlighted';
      }
      return classNames + ' highlighted-price';
    }
    if (data.highlight) {
      if (border) {
        return classNames + ' highlighted';
      }
      return classNames + ' highlighted-price';
    }
    return classNames;
  };

  const onClick = () => {
    // Router.pushRoute('oglas', { id: data.id })
    switch (adType) {
      case 'ads': {
        Router.pushRoute('oglas-delovi-i-oprema', { id: data.id });
        break;
      }
      case 'tires': {
        Router.pushRoute('oglas-gume', { id: data.id });
        break;
      }
      case 'rims': {
        Router.pushRoute('oglas-felne-i-ratkapne', { id: data.id });
        break;
      }
    }
  };

  return (
    <div className={isHighlighted('col-12 ad ad_card-wrapper', true)}>
      <div className="row">
        <Col lg="3" md="3" sm="5" xs="12">
          <img
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
            }}
            onError={e => {
              // @ts-ignore
              e.target.src = '/static/images/defaults/no-image.jpg';
            }}
            src={`${process.env.STATIC_IMAGE_SERVER_URI}/${getFolder()}/${
              data.id
            }-1?${getDate}`}
          />
        </Col>
        <Col lg="9" md="9" sm="7" xs="12">
          <h3
            onClick={onClick}
            style={{ marginTop: '5px' }}
            className="ad-title"
          >
            <a>{getTitle()}</a>
          </h3>
          <p>{getFields()}</p>
          <p>{data.text}</p>
          {editable && (
            <p style={{ marginBottom: '0' }}>
              Pošalji SMS "TOP {getCode()}" na 1311
            </p>
          )}
          {editable && <p>Pošalji SMS "ISTAKNI {getCode()}" na 1311</p>}
          {(editable || removable) && (
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'flex-end',
                marginRight: '20px',
              }}
            >
              {editable && getEditModal()}
              {removable && (
                <RemoveAd refetch={refetch} id={data.id} adType={adType} />
              )}
            </div>
          )}
        </Col>
        <div
          style={{
            position: 'absolute',
            backgroundColor: data && data.highlight ? '#227CFF' : 'white',
            top: '0px',
            right: '0px',
            marginTop: '-5px',
            paddingLeft: '5px',
            marginRigth: '5px',
            borderWidth: '5px',
            borderStyle: 'solid',
            borderColor: data && data.highlight ? '#227CFF' : 'white',
          }}
        >
          <span
            style={{
              color: data && data.highlight ? 'white' : 'black',
              fontWeight: 'bold',
            }}
          >{`${data.price} €`}</span>
        </div>
      </div>
    </div>
  );
};

export default AdCard;
