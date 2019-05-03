import * as React from 'react';
import Layout from '../components/Layout';

import FormBox from '../components/FormBox';
import RightAds from '../components/RightAds';
import MiddleAds from '../components/MiddleAds';
import Loading from '../components/Loading';

import { Container, Row, Col } from 'reactstrap';

import {
  GetAdComponent,
  GetTireComponent,
  GetRimComponent,
} from '../generated/apolloComponents';
import SingleAdComponent from '../components/SingleAdComponent';

const SingleAd = ({ id }: any) => {
  return (
    <GetAdComponent
      variables={{
        id: id,
      }}
    >
      {({ loading, error, data }) => {
        if (loading) return <Loading />;
        if (error) return `Error! ${error.message}`;

        if (data.ads && Array.isArray(data.ads) && data.ads.length > 0) {
          return <SingleAdComponent data={data.ads[0]} adType="ad" />;
        } else {
          return 'Greška - Nepostojeći oglas!';
        }
      }}
    </GetAdComponent>
  );
};

const SingleTire = ({ id }: any) => {
  return (
    <GetTireComponent
      variables={{
        id: id,
      }}
    >
      {({ loading, error, data }) => {
        if (loading) return <Loading />;
        if (error) return `Error! ${error.message}`;

        if (data.tires && Array.isArray(data.tires) && data.tires.length > 0) {
          return <SingleAdComponent data={data.tires[0]} adType="tire" />;
        } else {
          return 'Greška - Nepostojeći oglas!';
        }
      }}
    </GetTireComponent>
  );
};

const SingleRim = ({ id }: any) => {
  return (
    <GetRimComponent
      variables={{
        id: id,
      }}
    >
      {({ loading, error, data }) => {
        if (loading) return <Loading />;
        if (error) return `Error! ${error.message}`;

        if (data.rims && Array.isArray(data.rims) && data.rims.length > 0) {
          return <SingleAdComponent data={data.rims[0]} adType="rim" />;
        } else {
          return 'Greška - Nepostojeći oglas!';
        }
      }}
    </GetRimComponent>
  );
};

export default class SingleAdPage extends React.Component {
  static async getInitialProps({ query, asPath }: any) {
    const letter = asPath[1];
    return { query: query, letter: letter };
  }

  componentDidMount = () => {
    window.scrollTo(0, 0);
  };

  getItemTypeFromLetter = (letter: string) => {
    switch (letter) {
      case 'd': {
        // @ts-ignore
        return <SingleAd id={this.props.query.id} />;
      }
      case 'g': {
        // @ts-ignore
        return <SingleTire id={this.props.query.id} />;
      }
      case 'f': {
        // @ts-ignore
        return <SingleRim id={this.props.query.id} />;
      }
    }
  };

  getItemTitleFromLetter = (letter: string) => {
    switch (letter) {
      case 'd': {
        // @ts-ignore
        return 'Delovi i oprema';
      }
      case 'g': {
        // @ts-ignore
        return 'Gume';
      }
      case 'f': {
        // @ts-ignore
        return 'Felne i ratkapne';
      }
    }
  };

  render() {
    return (
      <Layout
        title={this.getItemTitleFromLetter(
          // @ts-ignore
          this.props.letter,
        )}
        description="Postavite besplatan oglas"
      >
        <Container style={{ padding: '0px', maxWidth: '100%' }}>
          <Row>
            <Col xs="12" sm="12" md="12" lg="9">
              <FormBox>
                {this.getItemTypeFromLetter(
                  // @ts-ignore
                  this.props.letter,
                )}
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
