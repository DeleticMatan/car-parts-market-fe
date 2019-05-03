import * as React from 'react';

import { isBrowser } from '../lib/isBrowser';

import { Row, Alert } from 'reactstrap';

import Loading from './Loading';
import AdCard from './AdCard';

import { GetMyAdsComponent } from '../generated/apolloComponents';

const MyAds = ({ active }: any) => {
  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <GetMyAdsComponent
          variables={{
            active: active,
          }}
        >
          {({ loading, error, data, refetch }) => {
            if (loading) return <Loading />;
            if (error)
              return (
                <div style={{ margin: '20px' }}>
                  <Alert color="danger">{error.message}</Alert>
                </div>
              );

            let allAds: any = [];
            data &&
              data.me &&
              data.me.ads &&
              data.me.ads.forEach((item: any) => {
                allAds.push(
                  <AdCard
                    editable={active}
                    removable
                    adType="ads"
                    key={item.id}
                    data={item}
                    refetch={refetch}
                  />,
                );
              });
            data &&
              data.me &&
              data.me.tires &&
              data.me.tires.forEach((item: any) => {
                allAds.push(
                  <AdCard
                    editable={active}
                    removable
                    adType="tires"
                    key={item.id}
                    data={item}
                    refetch={refetch}
                  />,
                );
              });
            data &&
              data.me &&
              data.me.rims &&
              data.me.rims.forEach((item: any) => {
                allAds.push(
                  <AdCard
                    editable={active}
                    removable
                    adType="rims"
                    key={item.id}
                    data={item}
                    refetch={refetch}
                  />,
                );
              });

            allAds = allAds.filter(
              (ad: any) => ad.props.data.active === active,
            );

            allAds = allAds.sort((a: any, b: any) => {
              if (b.props.data.createdAt < a.props.data.createdAt) {
                return -1;
              } else if (b.props.data.createdAt > a.props.data.createdAt) {
                return 1;
              } else {
                return 0;
              }
            });

            return (
              <>
                {allAds.length === 0 && (
                  <div style={{ margin: '20px' }}>
                    <Alert color="warning">
                      Nema rezultata za unetu pretragu.
                    </Alert>
                  </div>
                )}
                <div>{allAds}</div>
              </>
            );
          }}
        </GetMyAdsComponent>
      </div>
    </div>
  );
};

export default MyAds;
