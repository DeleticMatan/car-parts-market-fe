import * as React from 'react';
import Layout from '../components/Layout';

import FormBox from '../components/FormBox';
import RightAds from '../components/RightAds';
import MiddleAds from '../components/MiddleAds';
import Loading from '../components/Loading';
import AdCard from '../components/AdCard';

import { Container, Row, Col } from 'reactstrap';

import {
  GetUserComponent,
  GetUserAdsComponent,
} from '../generated/apolloComponents';

export default class Users extends React.Component {
  static async getInitialProps({ query }: any) {
    return query;
  }

  renderFieldRow = (title: string, data: any) => (
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

      <a style={{ fontSize: '13px' }}>{data}</a>
    </Row>
  );

  render() {
    return (
      <Layout title="Korisnici" description="Postavite besplatan oglas">
        <Container style={{ padding: '0px', maxWidth: '100%' }}>
          <Row>
            <Col xs="12" sm="12" md="12" lg="9">
              <FormBox title="Podaci korisnika">
                <GetUserAdsComponent
                  variables={{
                    // @ts-ignore
                    id: this.props.id,
                  }}
                >
                  {({ loading, error, data }) => {
                    if (loading) return <Loading />;
                    if (error) return `Error! ${error.message}`;

                    let allAds: any = [];

                    if (
                      // @ts-ignore
                      data.users &&
                      Array.isArray(data.users) &&
                      data.users.length > 0
                    ) {
                      data.users[0].ads.forEach((item: any) => {
                        allAds.push(
                          <AdCard adType="ads" key={item.id} data={item} />,
                        );
                      });

                      data.users[0].tires.forEach((item: any) => {
                        allAds.push(
                          <AdCard adType="tires" key={item.id} data={item} />,
                        );
                      });

                      data.users[0].rims.forEach((item: any) => {
                        allAds.push(
                          <AdCard adType="rims" key={item.id} data={item} />,
                        );
                      });

                      allAds = allAds.filter(
                        (ad: any) => ad.props.data.active === true,
                      );

                      allAds = allAds.sort((a: any, b: any) => {
                        if (b.props.data.createdAt < a.props.data.createdAt) {
                          return -1;
                        } else if (
                          b.props.data.createdAt > a.props.data.createdAt
                        ) {
                          return 1;
                        } else {
                          return 0;
                        }
                      });

                      return (
                        <Container
                          style={{
                            minWidth: '100%',
                          }}
                        >
                          <Row>
                            <Col xs="12" sm="4">
                              <div
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'flex-start',
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
                            </Col>
                            <Col
                              xs="12"
                              sm="5"
                              style={{ margin: '10px 25px 20px 0px' }}
                            >
                              {this.renderFieldRow(
                                'Ime i prezime',
                                data.users[0].name,
                              )}
                              {this.renderFieldRow(
                                'Email',
                                data.users[0].email,
                              )}
                              {this.renderFieldRow('Grad', data.users[0].city)}
                              {this.renderFieldRow(
                                'Telefon 1',
                                data.users[0].phone,
                              )}
                              {this.renderFieldRow(
                                'Telefon 2',
                                data.users[0].phone2,
                              )}
                            </Col>
                          </Row>

                          <br />
                          <h3 style={{ fontSize: '25px' }}>Oglasi korisnika</h3>
                          <hr />

                          {allAds}
                        </Container>
                      );
                    } else {
                      return 'Greška!';
                    }
                  }}
                </GetUserAdsComponent>
              </FormBox>

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
  }
}
