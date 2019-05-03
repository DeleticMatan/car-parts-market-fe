import * as React from 'react';

import Layout from '../components/Layout';

import AdCard from '../components/AdCard';
import FormBox from '../components/FormBox';
import RightAds from '../components/RightAds';
import MiddleAds from '../components/MiddleAds';

import Loading from '../components/Loading';

import Pagination from '../components/Pagination';

import SelectInput from '../components/inputs/SelectInput';
import MultipleSelectInput from '../components/inputs/MultipleSelectInput';

import {
  GetTopRimsComponent,
  GetRimsComponent,
  GetTopRimsRims,
  RimOrderByInput,
} from '../generated/apolloComponents';

import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Button,
  Input,
  Alert,
} from 'reactstrap';

import { CONDITION, CITIES } from '../constants/general.constants';

import {
  RIM_DIAMETER,
  RIM_WIDTH,
  RIM_BRANDS,
  RIM_HOLES,
  RIM_TYPE,
} from '../constants/rim.constants';
import Label from 'reactstrap/lib/Label';

const TopRimsList = () => {
  return (
    <GetTopRimsComponent>
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
            {data && data.rims && data.rims.length > 0 && (
              <span style={{ marginBottom: '-10px' }}>Top oglasi: </span>
            )}
            {data &&
              data.rims &&
              data.rims.map((item: GetTopRimsRims) => (
                <AdCard adType="rims" key={item.id} data={item} />
              ))}
          </div>
        );
      }}
    </GetTopRimsComponent>
  );
};

const RimsList = ({
  orderBy,
  optional,
  search,
  pagination,
  currentPage,
  onPageChange,
  first,
  skip,
  cities,
}: any) => {
  if (cities.length > 0) {
    optional.cities = cities;
  }
  return (
    <GetRimsComponent
      variables={{
        first: first,
        skip: skip,
        active: true,
        orderBy: orderBy,
        search: search,
        ...optional,
      }}
    >
      {({ loading, error, data }) => {
        if (loading) return <Loading />;
        if (error)
          return (
            <div style={{ margin: '20px' }}>
              <Alert color="danger">{error.message}</Alert>
            </div>
          );

        return (
          <>
            {data &&
              data.rimsConnection &&
              data.rimsConnection.aggregate &&
              data.rimsConnection.aggregate.count === 0 && (
                <div style={{ margin: '20px' }}>
                  <Alert color="warning">
                    Nema rezultata za unetu pretragu.
                  </Alert>
                </div>
              )}
            {data && data.rims && data.rims.length > 0 && currentPage === 0 && (
              <span style={{ marginBottom: '-10px' }}>Svi oglasi: </span>
            )}
            {data &&
              data.rims.map((item: any) => (
                <AdCard adType="rims" key={item.id} data={item} />
              ))}
            {data &&
              data.rimsConnection &&
              data.rimsConnection.aggregate &&
              data.rimsConnection.aggregate.count > 0 && (
                <Pagination
                  pageCount={Math.ceil(
                    data.rimsConnection.aggregate.count / pagination,
                  )}
                  marginPagesDisplayed={1}
                  current={currentPage}
                  onPageChange={(p: any) => onPageChange(p)}
                />
              )}
          </>
        );
      }}
    </GetRimsComponent>
  );
};

const Rims: React.FunctionComponent = () => {
  // Pagination options

  const paginationOptions = [
    { value: 5, label: 'Prikaži 5 po stranici' },
    { value: 10, label: 'Prikaži 10 po stranici' },
    { value: 15, label: 'Prikaži 15 po stranici' },
    { value: 20, label: 'Prikaži 20 po stranici' },
    { value: 25, label: 'Prikaži 25 po stranici' },
  ];

  const [getPagination, setPagination] = React.useState(paginationOptions[0]);

  const onSetPagination = (value: any) => {
    setCurrentPage(0);
    setPagination(value);
  };

  const [getCurrentPage, setCurrentPage] = React.useState(0);

  // Order By Options

  const orderByOptions = [
    { value: RimOrderByInput.CreatedAtDesc, label: 'Datum Silazno' },
    { value: RimOrderByInput.CreatedAtAsc, label: 'Datum Uzlazno' },
    { value: RimOrderByInput.PriceDesc, label: 'Cena Silazno' },
    { value: RimOrderByInput.PriceAsc, label: 'Cena Uzlazno' },
  ];
  const [getOrderBy, setOrderBy] = React.useState(orderByOptions[0]);

  const [getSearchValue, setSearchValue] = React.useState('');

  // Parsing constants

  const parseOptions = (options: String[]) => {
    return options.map(item => {
      return { value: item, label: item };
    });
  };

  const [getCities, setCities] = React.useState([]);

  // Optional filter by tire height

  const [
    getOptionalTireHolesOptionsFilter,
    setOptionalTTireHolesFilter,
  ] = React.useState([]);

  // Optional filter by tire diameter

  const [
    getOptionalRimDiameterOptionsFilter,
    setOptionalRimDiameterOptionsFilter,
  ] = React.useState([]);

  const [
    getOptionalRimWidthOptionsFilter,
    setOptionalRimWidthOptionsFilter,
  ] = React.useState([]);

  // Optional filter by tire type

  const [
    getOptionalRimTypeOptionsFilter,
    setOptionalRimTypeFilter,
  ] = React.useState([]);

  // Optional filter by tire conditions

  const [
    getOptionalTireConditionsOptionsFilter,
    setOptionalTireConditionsFilter,
  ] = React.useState([]);

  // Optional filter by tire brands

  const [
    getOptionalRimBrandsOptionsFilter,
    setOptionalRimBrandsFilter,
  ] = React.useState([]);

  // Parse optional filters for graphql query

  const [getET, setET] = React.useState('');

  const parseOptionalFilters = () => {
    return {
      width: getOptionalRimWidthOptionsFilter
        ? getOptionalRimWidthOptionsFilter //.map(item => item.value)
        : [],
      holes: getOptionalTireHolesOptionsFilter
        ? getOptionalTireHolesOptionsFilter //.map(item => item.value)
        : [],
      diameter: getOptionalRimDiameterOptionsFilter
        ? getOptionalRimDiameterOptionsFilter //.map(item => item.value)
        : [],
      type: getOptionalRimTypeOptionsFilter
        ? getOptionalRimTypeOptionsFilter //.map(item => item.value)
        : [],
      condition: getOptionalTireConditionsOptionsFilter
        ? getOptionalTireConditionsOptionsFilter //.map(item => item.value)
        : [],
      brand: getOptionalRimBrandsOptionsFilter
        ? getOptionalRimBrandsOptionsFilter //.map(item => item.value)
        : [],
      et: getET,
    };
  };

  const parseMore = (optionalFilters: object) => {
    Object.keys(optionalFilters).forEach(key => {
      // @ts-ignore
      if (optionalFilters[key].length === 0) {
        // @ts-ignore
        delete optionalFilters[key];
      }
    });
    return optionalFilters;
  };

  const resetSearch = () => {
    setSearchValue('');
  };

  const [getAllFilters, setAllFilters] = React.useState({
    optional: {},
    search: '',
  });

  const onSearch = () => {
    setCurrentPage(0);
    setAllFilters({
      // @ts-ignore
      optional: parseMore(parseOptionalFilters()),
      search: getSearchValue,
    });
  };

  return (
    <Layout title="Felne i ratkapne" description="Pretraga felni i ratkapni">
      <Container style={{ padding: '0px', maxWidth: '100%' }}>
        <Row>
          <Col xs="12" sm="12" md="12" lg="9">
            <FormBox title="Felne i ratkapne">
              <Form
                onSubmit={e => {
                  e.preventDefault();
                  onSearch();
                }}
              >
                <div style={{ padding: '0px' }}>
                  <Row>
                    <Col xs="12" sm="4">
                      <FormGroup style={{ height: '30px' }}>
                        <MultipleSelectInput
                          placeholder="Širina"
                          allItemsLabel="Sve širine"
                          selectAllLabel="Sve širine"
                          value={getOptionalRimWidthOptionsFilter}
                          options={parseOptions(RIM_WIDTH)}
                          onChange={(option: any) =>
                            setOptionalRimWidthOptionsFilter(option)
                          }
                        />
                      </FormGroup>
                    </Col>
                    <Col xs="12" sm="4">
                      <FormGroup style={{ height: '30px' }}>
                        <MultipleSelectInput
                          placeholder="Prečnik"
                          allItemsLabel="Svi prečnici"
                          selectAllLabel="Svi prečnici"
                          value={getOptionalRimDiameterOptionsFilter}
                          options={parseOptions(RIM_DIAMETER)}
                          onChange={(option: any) =>
                            setOptionalRimDiameterOptionsFilter(option)
                          }
                        />
                      </FormGroup>
                    </Col>
                    <Col xs="12" sm="4">
                      <FormGroup style={{ height: '30px' }}>
                        <MultipleSelectInput
                          placeholder="Broj i raspon rupa"
                          allItemsLabel="Svi brojevi i rasponi rupa"
                          selectAllLabel="Svi brojevi i rasponi rupa"
                          value={getOptionalTireHolesOptionsFilter}
                          options={parseOptions(RIM_HOLES)}
                          onChange={(option: any) =>
                            setOptionalTTireHolesFilter(option)
                          }
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs="12" sm="4">
                      <FormGroup style={{ height: '30px' }}>
                        <MultipleSelectInput
                          placeholder="Marke"
                          allItemsLabel="Sve marke"
                          selectAllLabel="Sve marke"
                          value={getOptionalRimBrandsOptionsFilter}
                          options={parseOptions(RIM_BRANDS)}
                          onChange={(option: any) =>
                            setOptionalRimBrandsFilter(option)
                          }
                        />
                      </FormGroup>
                    </Col>
                    <Col xs="12" sm="4">
                      <FormGroup style={{ height: '30px' }}>
                        <MultipleSelectInput
                          placeholder="Vrsta"
                          allItemsLabel="Sve vrste"
                          selectAllLabel="Sve vrste"
                          value={getOptionalRimTypeOptionsFilter}
                          options={parseOptions(RIM_TYPE)}
                          onChange={(option: any) =>
                            setOptionalRimTypeFilter(option)
                          }
                        />
                      </FormGroup>
                    </Col>
                    <Col xs="12" sm="4">
                      <FormGroup style={{ height: '30px' }}>
                        <MultipleSelectInput
                          placeholder="Stanje"
                          allItemsLabel="Sva stanja"
                          selectAllLabel="Sva stanja"
                          value={getOptionalTireConditionsOptionsFilter}
                          options={parseOptions(CONDITION)}
                          onChange={(option: any) =>
                            setOptionalTireConditionsFilter(option)
                          }
                        />
                      </FormGroup>
                    </Col>
                    <Col xs="12" sm="4" />
                  </Row>
                  <Row>
                    <Col xs="12" sm="2">
                      <FormGroup
                        inline
                        className="login-and-register__form-group"
                      >
                        <Label
                          htmlFor="et"
                          style={{
                            paddingRight: '10px',
                            paddingTop: '5px',
                            color: 'grey',
                          }}
                        >
                          ET
                        </Label>
                        <Input
                          name="et"
                          type="number"
                          placeholder=""
                          onChange={event => {
                            if (
                              (parseInt(event.target.value) > 0 &&
                                parseInt(event.target.value) < 100) ||
                              event.target.value === ''
                            ) {
                              setET(event.target.value);
                            }
                          }}
                          value={getET}
                        />
                      </FormGroup>
                    </Col>
                    <Col xs="12" sm="6">
                      <FormGroup
                        inline
                        className="login-and-register__form-group"
                      >
                        <Input
                          name="search"
                          placeholder="Pretraga felni i ratkapni"
                          onChange={event => {
                            setSearchValue(event.target.value);
                          }}
                          value={getSearchValue}
                        />
                      </FormGroup>
                    </Col>
                    <Col xs="12" sm="4">
                      <Button block color="secondary" onClick={onSearch}>
                        Pretraži
                      </Button>
                    </Col>
                  </Row>
                </div>
              </Form>
            </FormBox>

            <Row>
              <Col
                xs="12"
                sm="4"
                md="4"
                style={{ paddingTop: '5px', paddingBottom: '5px' }}
              >
                <MultipleSelectInput
                  placeholder="Gradovi"
                  allItemsLabel="Svi gradovi"
                  selectAllLabel="Svi gradovi"
                  value={getCities}
                  options={parseOptions(CITIES)}
                  onChange={(option: any) => {
                    setCurrentPage(0);
                    setCities(option);
                  }}
                />
              </Col>
              <Col
                xs="12"
                sm="4"
                md="4"
                style={{ paddingTop: '5px', paddingBottom: '5px' }}
              >
                <SelectInput
                  value={getOrderBy}
                  options={orderByOptions}
                  onChange={(option: any) => {
                    setCurrentPage(0);
                    setOrderBy(option);
                  }}
                />
              </Col>
              <Col
                xs="12"
                sm="4"
                md="4"
                style={{ paddingTop: '5px', paddingBottom: '5px' }}
              >
                <SelectInput
                  value={getPagination}
                  options={paginationOptions}
                  onChange={(option: any) => onSetPagination(option)}
                />
              </Col>
            </Row>
            {getCurrentPage === 0 && <TopRimsList />}
            <RimsList
              first={getPagination.value}
              skip={getCurrentPage * getPagination.value}
              {...getAllFilters}
              orderBy={getOrderBy.value}
              cities={getCities}
              currentPage={getCurrentPage}
              pagination={getPagination.value}
              onPageChange={(p: any) => setCurrentPage(p.selected)}
            />
            <MiddleAds />
          </Col>

          <Col xs="12" sm="12" md="12" lg="3">
            <RightAds />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Rims;
