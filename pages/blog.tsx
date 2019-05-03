import * as React from 'react';
import Layout from '../components/Layout';

import FormBox from '../components/FormBox';
import RightAds from '../components/RightAds';
import MiddleAds from '../components/MiddleAds';

import { Container, Row, Col } from 'reactstrap';

export default class Blog extends React.Component {
  render() {
    return (
      <Layout title="Blog" description="Blog">
        <Container style={{ padding: '0px', maxWidth: '100%' }}>
          <Row>
            <Col xs="12" sm="12" md="12" lg="9">
              <FormBox>Uskoro</FormBox>

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
