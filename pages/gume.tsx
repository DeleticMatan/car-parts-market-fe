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
  GetTopTiresComponent,
  GetTiresComponent,
  GetTopTiresTires,
  TireOrderByInput,
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

import {
  TIRE_WIDTH,
  TIRE_HEIGHT,
  TIRE_DIAMETER,
  TIRE_CONDITION,
  TIRE_BRANDS,
  TIRE_TYPE_FOR_MULTIPLE,
} from '../constants/tire.constants';

import { CITIES } from '../constants/general.constants';

const TopTiresList = () => {
  return (
    <GetTopTiresComponent>
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
            {data && data.tires && data.tires.length > 0 && (
              <span style={{ marginBottom: '-10px' }}>Top oglasi: </span>
            )}
            {data &&
              data.tires &&
              data.tires.map((item: GetTopTiresTires) => (
                <AdCard adType="tires" key={item.id} data={item} />
              ))}
          </div>
        );
      }}
    </GetTopTiresComponent>
  );
};

const TiresList = ({
  orderBy,
  optional,
  search,
  currentPage,
  pagination,
  onPageChange,
  first,
  skip,
  cities,
}: any) => {
  if (cities.length > 0) {
    optional.cities = cities;
  }
  return (
    <GetTiresComponent
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
            {data.tiresConnection.aggregate.count === 0 && (
              <div style={{ margin: '20px' }}>
                <Alert color="warning">Nema rezultata za unetu pretragu.</Alert>
              </div>
            )}
            {data &&
              data.tires &&
              data.tires.length > 0 &&
              currentPage === 0 && (
                <span style={{ marginBottom: '-10px' }}>Svi oglasi: </span>
              )}
            {data.tires.map((item: any) => (
              <AdCard adType="tires" key={item.id} data={item} />
            ))}
            {data.tiresConnection.aggregate.count > 0 && (
              <Pagination
                pageCount={Math.ceil(
                  data.tiresConnection.aggregate.count / pagination,
                )}
                marginPagesDisplayed={1}
                current={currentPage}
                onPageChange={(p: any) => onPageChange(p)}
              />
            )}
          </>
        );
      }}
    </GetTiresComponent>
  );
};

const Gume: React.FunctionComponent = () => {
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
    { value: TireOrderByInput.CreatedAtDesc, label: 'Datum Silazno' },
    { value: TireOrderByInput.CreatedAtAsc, label: 'Datum Uzlazno' },
    { value: TireOrderByInput.PriceDesc, label: 'Cena Silazno' },
    { value: TireOrderByInput.PriceAsc, label: 'Cena Uzlazno' },
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

  // Optional filter by tire width

  const [
    getOptionalTireWidthFilter,
    setOptionalTireWidthFilter,
  ] = React.useState([]);

  // Optional filter by tire height

  const [
    getOptionalTireHeighOptionsFilter,
    setOptionalTTireHeighFilter,
  ] = React.useState([]);

  // Optional filter by tire diameter

  const [
    getOptionalTireDiameterOptionsFilter,
    setOptionalTireDiameterFilter,
  ] = React.useState([]);

  // Optional filter by tire type

  const [
    getOptionalTireTypeOptionsFilter,
    setOptionalTireTypeFilter,
  ] = React.useState([]);

  // Optional filter by tire conditions

  const [
    getOptionalTireConditionsOptionsFilter,
    setOptionalTireConditionsFilter,
  ] = React.useState([]);

  // Optional filter by tire brands

  const [
    getOptionalTireBrandsOptionsFilter,
    setOptionalTireBrandsFilter,
  ] = React.useState([]);

  // Parse optional filters for graphql query

  const parseOptionalFilters = () => {
    return {
      width: getOptionalTireWidthFilter
        ? getOptionalTireWidthFilter //.map(item => item.value)
        : [],
      height: getOptionalTireHeighOptionsFilter
        ? getOptionalTireHeighOptionsFilter //.map(item => item.value)
        : [],
      diameter: getOptionalTireDiameterOptionsFilter
        ? getOptionalTireDiameterOptionsFilter //.map(item => item.value)
        : [],
      type: getOptionalTireTypeOptionsFilter
        ? getOptionalTireTypeOptionsFilter //.map(item => item.value)
        : [],
      condition: getOptionalTireConditionsOptionsFilter
        ? getOptionalTireConditionsOptionsFilter //.map(item => item.value)
        : [],
      brand: getOptionalTireBrandsOptionsFilter
        ? getOptionalTireBrandsOptionsFilter //.map(item => item.value)
        : [],
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
    <Layout title="Gume" description="Pretraga guma">
      <Container style={{ padding: '0px', maxWidth: '100%' }}>
        <Row>
          <Col xs="12" sm="12" md="12" lg="9">
            <FormBox title="Gume">
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
                          placeholder="Širina gume"
                          allItemsLabel="Sve širine"
                          selectAllLabel="Sve širine"
                          value={getOptionalTireWidthFilter}
                          options={parseOptions(TIRE_WIDTH)}
                          onChange={(option: any) =>
                            setOptionalTireWidthFilter(option)
                          }
                        />
                      </FormGroup>
                    </Col>
                    <Col xs="12" sm="4">
                      <FormGroup style={{ height: '30px' }}>
                        <MultipleSelectInput
                          placeholder="Visina gume"
                          allItemsLabel="Sve visine"
                          selectAllLabel="Sve visine"
                          value={getOptionalTireHeighOptionsFilter}
                          options={parseOptions(TIRE_HEIGHT)}
                          onChange={(option: any) =>
                            setOptionalTTireHeighFilter(option)
                          }
                        />
                      </FormGroup>
                    </Col>
                    <Col xs="12" sm="4">
                      <FormGroup style={{ height: '30px' }}>
                        <MultipleSelectInput
                          placeholder="Prečnik gume"
                          allItemsLabel="Svi prečnici"
                          selectAllLabel="Svi prečnici"
                          value={getOptionalTireDiameterOptionsFilter}
                          options={parseOptions(TIRE_DIAMETER)}
                          onChange={(option: any) =>
                            setOptionalTireDiameterFilter(option)
                          }
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs="12" sm="4">
                      <FormGroup style={{ height: '30px' }}>
                        <MultipleSelectInput
                          placeholder="Sezona"
                          allItemsLabel="Sve sezone"
                          selectAllLabel="Sve sezone"
                          value={getOptionalTireTypeOptionsFilter}
                          options={parseOptions(TIRE_TYPE_FOR_MULTIPLE)}
                          onChange={(option: any) =>
                            setOptionalTireTypeFilter(option)
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
                          options={parseOptions(TIRE_CONDITION)}
                          onChange={(option: any) =>
                            setOptionalTireConditionsFilter(option)
                          }
                        />
                      </FormGroup>
                    </Col>
                    <Col xs="12" sm="4">
                      <FormGroup style={{ height: '30px' }}>
                        <MultipleSelectInput
                          placeholder="Proizvođač"
                          allItemsLabel="Svi proizvođači"
                          selectAllLabel="Svi proizvođači"
                          value={getOptionalTireBrandsOptionsFilter}
                          options={parseOptions(TIRE_BRANDS)}
                          onChange={(option: any) =>
                            setOptionalTireBrandsFilter(option)
                          }
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs="12" sm="8">
                      <FormGroup
                        inline
                        className="login-and-register__form-group"
                      >
                        <Input
                          name="search"
                          placeholder="Pretraga guma"
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
            {getCurrentPage === 0 && <TopTiresList />}
            <TiresList
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

export default Gume;
