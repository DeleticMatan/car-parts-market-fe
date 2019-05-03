import * as React from 'react';

import {
  GetTopAdsComponent,
  GetPromoAdsComponent,
  GetFirstAdsComponent,
  GetTopAdsAds,
  GetPromoAdsAds,
} from '../generated/apolloComponents';

import Router from '../routes';

import Loading from '../components/Loading';
import MiddleAds from '../components/MiddleAds';
import FormBox from '../components/FormBox';

import { Alert } from 'reactstrap';

import {
  AD_BRANDS,
  AD_PART_CATEGORIES,
  AD_EQUIPMENT_CATEGORIES,
  MOST_POPULAR,
} from '../constants/ad.constants';

// @ts-ignore
const SmallAd = ({ data, highlighted = false }) => {
  return (
    <div
      onClick={() => Router.pushRoute('oglas-delovi-i-oprema', { id: data.id })}
      style={{
        width: '170px',
        height: '200px',
        margin: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        flex: '1 0 20%',
        cursor: 'pointer',
      }}
    >
      <img
        style={{
          maxWidth: '170px',
          maxHeight: 'auto',
          border: highlighted ? '5px solid #005fd4' : '5px solid #C5C5C5',
        }}
        onError={e => {
          // @ts-ignore
          e.target.src = '/static/images/defaults/no-image.jpg';
        }}
        src={`${process.env.STATIC_IMAGE_SERVER_URI}/autodelovi/${data.id}-1`}
      />
      <a
        style={{
          color: '#005fd4',
          fontSize: '16px',
        }}
      >{`${data.price} €`}</a>
      <a
        href="#"
        style={{
          color: '#007bff',
          fontSize: '13px',
          textAlign: 'center',
          cursor: 'pointer',
        }}
      >{`${data.subcategory ? data.subcategory : ''} za ${
        data.brand ? data.brand : ''
      } ${data.model ? data.model : ''}`}</a>
    </div>
  );
};

const TopAdsList = () => {
  return (
    <GetTopAdsComponent>
      {({ loading, error, data }) => {
        if (loading) return <Loading />;
        if (error)
          return (
            <div style={{ margin: '20px' }}>
              <Alert color="danger">{error.message}</Alert>
            </div>
          );

        return (
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            {data &&
              data.ads &&
              data.ads.map((item: GetTopAdsAds) => (
                <SmallAd highlighted key={item.id} data={item} />
              ))}
          </div>
        );
      }}
    </GetTopAdsComponent>
  );
};

const PromoAdsList = () => {
  return (
    <GetPromoAdsComponent>
      {({ loading, error, data }) => {
        if (loading) return <Loading />;
        if (error)
          return (
            <div style={{ margin: '20px' }}>
              <Alert color="danger">{error.message}</Alert>
            </div>
          );

        return (
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            {data &&
              data.ads &&
              data.ads.map((item: GetPromoAdsAds) => (
                <SmallAd highlighted key={item.id} data={item} />
              ))}
          </div>
        );
      }}
    </GetPromoAdsComponent>
  );
};

const FirstAdsList = () => {
  return (
    <GetFirstAdsComponent>
      {({ loading, error, data }) => {
        if (loading) return <Loading />;
        if (error)
          return (
            <div style={{ margin: '20px' }}>
              <Alert color="danger">{error.message}</Alert>
            </div>
          );

        return (
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            {data &&
              data.ads &&
              data.ads.map((item: any) => (
                <SmallAd key={item.id} data={item} />
              ))}
          </div>
        );
      }}
    </GetFirstAdsComponent>
  );
};

const ListLink = ({ name, onItem }: any) => {
  return (
    <div
      style={{
        borderColor: '#dddddd',
        borderWidth: '1px',
        borderStyle: 'solid',
        padding: '10px',
        margin: '5px',
      }}
    >
      <a
        href="#"
        style={{ color: '#005fd4', fontSize: '12px' }}
        onClick={() => onItem(name)}
      >
        <strong>{name}</strong>
      </a>
    </div>
  );
};

const List = ({ onItem, list, title, brands }: any) => {
  const [getExpanded, setExpanded] = React.useState(false);
  return (
    <FormBox>
      <div>
        <h2 style={{ fontSize: '20px' }}>{title}</h2>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          flexWrap: 'wrap',
          marginTop: '20px',
          marginBottom: '20px',
          marginLeft: '-5px',
          marginRight: '-5px',
        }}
      >
        {//
        // @ts-ignore
        list.map((item, index) => {
          if (!getExpanded) {
            if (brands) {
              if (index < 23) {
                return (
                  <ListLink
                    key={index}
                    name={MOST_POPULAR[index]}
                    onItem={() => onItem(MOST_POPULAR[index])}
                  />
                );
              } else {
                return null;
              }
            } else {
              if (index < 20) {
                return (
                  <ListLink
                    key={index}
                    name={item.name}
                    onItem={() => onItem(item.name)}
                  />
                );
              } else {
                return null;
              }
            }
          } else {
            return (
              <ListLink
                key={index}
                name={item.name}
                onItem={() => onItem(item.name)}
              />
            );
          }
        })}
      </div>
      {brands && (
        <div>
          {!getExpanded ? (
            <a
              onClick={() => setExpanded(true)}
              style={{
                color: '#005fd4',
                fontSize: '14px',
                cursor: 'pointer',
                fontWeight: 'bold',
              }}
            >
              Vidi sve marke vozila »
            </a>
          ) : (
            <a
              onClick={() => setExpanded(false)}
              style={{
                color: '#005fd4',
                fontSize: '14px',
                cursor: 'pointer',
                fontWeight: 'bold',
              }}
            >
              Skloni marke, osim najpopularnijih »
            </a>
          )}
        </div>
      )}
    </FormBox>
  );
};

const Home: React.FunctionComponent = ({ onBrand, onCategory, type }: any) => (
  <div>
    <h3 className="home-subtitle" style={{ fontSize: '25px', fontWeight: 500 }}>
      Top oglasi
    </h3>
    <TopAdsList />
    <h3 className="home-subtitle" style={{ fontSize: '25px', fontWeight: 500 }}>
      Istaknuti oglasi
    </h3>
    <PromoAdsList />
    <MiddleAds />
    <List
      brands={true}
      title="Najpopularnija vozila"
      onItem={(brand: any) => onBrand(brand)}
      list={AD_BRANDS}
    />
    <List
      brands={false}
      title={type === 'Delovi' ? 'Kategorije delova' : 'Kategorije opreme'}
      onItem={(item: any) => onCategory(item)}
      list={type === 'Delovi' ? AD_PART_CATEGORIES : AD_EQUIPMENT_CATEGORIES}
    />
    <h3 className="home-subtitle" style={{ fontSize: '25px', fontWeight: 500 }}>
      Najnoviji oglasi
    </h3>
    <FirstAdsList />
  </div>
);

export default Home;
