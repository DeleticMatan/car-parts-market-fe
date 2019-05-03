import * as React from 'react';
import Layout from '../components/Layout';

import AdCard from '../components/AdCard';
import RightAds from '../components/RightAds';
import MiddleAds from '../components/MiddleAds';

import {
  GetTopAdsComponent,
  GetAdsComponent,
  GetTopAdsAds,
  AdOrderByInput,
} from '../generated/apolloComponents';

import Pagination from '../components/Pagination';
import Loading from '../components/Loading';
import Home from '../components/Home';

import NewPassword from '../components/modals/NewPassword';
import Activate from '../components/modals/Activate';

import { CONDITION, CITIES } from '../constants/general.constants';

import {
  AD_BRANDS,
  AD_PART_CATEGORIES,
  AD_EQUIPMENT_CATEGORIES,
} from '../constants/ad.constants';

import { YEAR } from '../constants/years.constants';

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

import SelectInput from '../components/inputs/SelectInput';
import MultipleSelectInput from '../components/inputs/MultipleSelectInput';

const TopAdsList = ({ optional, search }: any) => {
  return (
    <GetTopAdsComponent
      variables={{
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
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            {data && data.ads && data.ads.length > 0 && (
              <span style={{ marginBottom: '-10px' }}>Top oglasi: </span>
            )}
            {data &&
              data.ads &&
              data.ads.map((item: GetTopAdsAds) => (
                <AdCard adType="ads" key={item.id} data={item} />
              ))}
          </div>
        );
      }}
    </GetTopAdsComponent>
  );
};

const AdsList = ({
  orderBy,
  optional,
  search,
  pagination,
  onPageChange,
  currentPage,
  first,
  skip,
  cities,
}: any) => {
  if (cities.length > 0) {
    optional.cities = cities;
  }
  return (
    <GetAdsComponent
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
            {data.adsConnection.aggregate.count === 0 && (
              <div style={{ margin: '20px' }}>
                <Alert color="warning">Nema rezultata za unetu pretragu.</Alert>
              </div>
            )}
            {data && data.ads && data.ads.length > 0 && currentPage === 0 && (
              <span style={{ marginBottom: '-10px' }}>Svi oglasi: </span>
            )}
            {data.ads.map((item: any) => (
              <AdCard adType="ads" key={item.id} data={item} />
            ))}
            {data.adsConnection.aggregate.count > 0 && (
              <Pagination
                pageCount={Math.ceil(
                  data.adsConnection.aggregate.count / pagination,
                )}
                marginPagesDisplayed={1}
                current={currentPage}
                onPageChange={(p: any) => onPageChange(p)}
              />
            )}
          </>
        );
      }}
    </GetAdsComponent>
  );
};

const Delovi: React.FunctionComponent = ({ query, path }: any) => {
  const paginationOptions = [
    { value: 5, label: 'Prikaži 5 po stranici' },
    { value: 10, label: 'Prikaži 10 po stranici' },
    { value: 15, label: 'Prikaži 15 po stranici' },
    { value: 20, label: 'Prikaži 20 po stranici' },
    { value: 25, label: 'Prikaži 25 po stranici' },
  ];

  const [getHome, setHome] = React.useState(true);

  const [getPagination, setPagination] = React.useState(paginationOptions[0]);

  const onSetPagination = (value: any) => {
    setCurrentPage(0);
    setPagination(value);
  };

  const [getCurrentPage, setCurrentPage] = React.useState(0);

  const [getCurrentTab, setCurrentTab] = React.useState('Delovi');

  const orderByOptions = [
    { value: AdOrderByInput.CreatedAtDesc, label: 'Datum Silazno' },
    { value: AdOrderByInput.CreatedAtAsc, label: 'Datum Uzlazno' },
    { value: AdOrderByInput.PriceDesc, label: 'Cena Silazno' },
    { value: AdOrderByInput.PriceAsc, label: 'Cena Uzlazno' },
  ];
  const [getOrderBy, setOrderBy] = React.useState(orderByOptions[0]);

  const [getBrand, setBrand] = React.useState(null);
  const [getModel, setModel] = React.useState(null);

  const [getCategory, setCategory] = React.useState(null);
  const [getSubcategory, setSubcategory] = React.useState(null);

  const [getYearFrom, setYearFrom] = React.useState(null);
  const [getYearTo, setYearTo] = React.useState(null);

  // Parse years

  const parseYears = (options: string[]) => {
    return options.map(item => {
      return { value: parseInt(item), label: item };
    });
  };

  // Parse dependant categories

  const parseCategories = (options: any[], first: string) => {
    let newOptions: any = [];
    newOptions = options.map(item => {
      return { value: item.name, label: item.name };
    });
    newOptions.unshift({ value: null, label: first });
    return newOptions;
  };

  const parseSubcategories = (
    options: any[],
    currentCategory: string,
    sublabel: string,
    first: string,
  ) => {
    let subCategroriesList: any[] = [];
    options.forEach(category => {
      if (category.name === currentCategory) {
        subCategroriesList = [...parseOptions(category[sublabel])];
      }
    });
    subCategroriesList.unshift({ value: null, label: first });
    return subCategroriesList;
  };

  // Parsing constants

  const parseOptions = (options: string[]) => {
    return options.map(item => {
      return { value: item, label: item };
    });
  };

  const [getCities, setCities] = React.useState([]);

  const parseConditions = (options: any[], first: string) => {
    let newOptions: any = [];
    newOptions = options.map(item => {
      return { value: item, label: item };
    });
    newOptions.unshift({ value: null, label: first });
    return newOptions;
  };

  const [
    getOptionalConditionsOptionsFilter,
    setOptionalConditionsFilter,
  ] = React.useState([]);

  const onSetCurrentTab = (value: string) => {
    setCurrentTab(value);
    setCategory(null);
    setSubcategory(null);
  };

  const onSetCategory = (value: string) => {
    if (getCategory !== value) {
      setSubcategory(null);
    }
    setCategory(value);
  };

  const onSetBrand = (value: string) => {
    if (getBrand !== value) {
      setModel(null);
    }
    setBrand(value);
  };

  const [getSearchValue, setSearchValue] = React.useState('');

  const [getAllFilters, setAllFilters] = React.useState({
    optional: {
      adType: getCurrentTab === 'Delovi' ? 'Deo' : 'Oprema',
    },
    search: '',
  });

  const onSearch = () => {
    setHome(false);
    let optional = {};

    if (getBrand && getBrand.value) {
      // @ts-ignore
      optional.brand = getBrand.value;
    } else {
      // @ts-ignore
      delete optional.brand;
    }

    if (getModel && getModel.value) {
      // @ts-ignore
      optional.model = getModel.value;
    } else {
      // @ts-ignore
      delete optional.model;
    }

    if (getCategory && getCategory.value) {
      // @ts-ignore
      optional.category = getCategory.value;
    } else {
      // @ts-ignore
      delete optional.category;
    }

    if (getSubcategory && getSubcategory.value) {
      // @ts-ignore
      optional.subcategory = getSubcategory.value;
    } else {
      // @ts-ignore
      delete optional.subcategory;
    }

    if (getYearFrom && getYearFrom.value) {
      // @ts-ignore
      optional.yearFrom = getYearFrom.value;
    } else {
      // @ts-ignore
      delete optional.yearFrom;
    }

    if (getYearTo && getYearTo.value) {
      // @ts-ignore
      optional.getYearTo = getYearTo.value;
    } else {
      // @ts-ignore
      delete optional.getYearTo;
    }

    if (
      getOptionalConditionsOptionsFilter &&
      // @ts-ignore
      getOptionalConditionsOptionsFilter.value
    ) {
      // @ts-ignore
      optional.condition = getOptionalConditionsOptionsFilter.value;
    } else {
      // @ts-ignore
      delete optional.condition;
    }

    setAllFilters({
      // @ts-ignore
      optional: {
        adType: getCurrentTab === 'Delovi' ? 'Deo' : 'Oprema',

        ...optional,
      },
      search: getSearchValue,
    });
  };

  return (
    <Layout
      title="Delovi i oprema"
      description="Pretraga automobilskih delova i opreme"
    >
      <NewPassword token={!path.includes('activate') ? query.token : null} />
      <Activate token={path.includes('activate') ? query.token : null} />
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
                  className={getCurrentTab !== 'Delovi' ? 'flatmenu' : ''}
                  onClick={() => onSetCurrentTab('Delovi')}
                  style={{
                    fontSize: '15px',
                    flex: 1,
                    textAlign: 'center',
                    backgroundColor:
                      getCurrentTab === 'Delovi' ? 'white' : '#2687ff',
                    color: getCurrentTab === 'Delovi' ? 'black' : 'white',
                    padding: '10px',
                  }}
                >
                  Delovi
                </div>
                <div
                  className={getCurrentTab !== 'Oprema' ? 'flatmenu' : ''}
                  onClick={() => onSetCurrentTab('Oprema')}
                  style={{
                    fontSize: '15px',
                    flex: 1,
                    textAlign: 'center',
                    backgroundColor:
                      getCurrentTab === 'Oprema' ? 'white' : '#2687ff',
                    color: getCurrentTab === 'Oprema' ? 'black' : 'white',
                    padding: '10px',
                  }}
                >
                  Oprema
                </div>
              </div>
              <Form
                onSubmit={e => {
                  e.preventDefault();
                }}
                style={{ marginTop: '20px', marginBottom: '30px' }}
              >
                <div style={{ padding: '0px', margin: '15px' }}>
                  <Row style={{ minHeight: '13px' }} />
                  <Row>
                    <Col
                      xs="12"
                      sm="6"
                      md="3"
                      lg="3"
                      style={{ paddingTop: '5px', paddingBottom: '5px' }}
                    >
                      <SelectInput
                        value={getBrand}
                        placeholder="Marka"
                        options={parseCategories(AD_BRANDS, 'Sve marke')}
                        onChange={(option: any) => onSetBrand(option)}
                      />
                    </Col>
                    <Col
                      xs="12"
                      sm="6"
                      md="3"
                      lg="3"
                      style={{ paddingTop: '5px', paddingBottom: '5px' }}
                    >
                      <SelectInput
                        value={getModel}
                        placeholder="Model"
                        options={parseSubcategories(
                          AD_BRANDS,
                          getBrand && getBrand.value,
                          'models',
                          'Sve potkategorije',
                        )}
                        onChange={(option: any) => setModel(option)}
                      />
                    </Col>
                    <Col
                      xs="12"
                      sm="6"
                      md="3"
                      lg="3"
                      style={{ paddingTop: '5px', paddingBottom: '5px' }}
                    >
                      <SelectInput
                        value={getYearFrom}
                        placeholder="Godište od"
                        options={parseYears(YEAR)}
                        onChange={(option: any) => setYearFrom(option)}
                      />
                    </Col>
                    <Col
                      xs="12"
                      sm="6"
                      md="3"
                      lg="3"
                      style={{ paddingTop: '5px', paddingBottom: '5px' }}
                    >
                      <SelectInput
                        value={getYearTo}
                        placeholder="Godište do"
                        options={parseYears(YEAR)}
                        onChange={(option: any) => setYearTo(option)}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col
                      xs="12"
                      sm="4"
                      md="4"
                      lg="4"
                      style={{ paddingTop: '5px', paddingBottom: '5px' }}
                    >
                      <SelectInput
                        value={getCategory}
                        placeholder={
                          getCurrentTab === 'Delovi'
                            ? 'Kategorije delova'
                            : 'Kategorije opreme'
                        }
                        options={
                          getCurrentTab === 'Delovi'
                            ? parseCategories(
                                AD_PART_CATEGORIES,
                                'Sve kategorije delova',
                              )
                            : parseCategories(
                                AD_EQUIPMENT_CATEGORIES,
                                'Sve kategorije opreme',
                              )
                        }
                        onChange={(option: any) => onSetCategory(option)}
                      />
                    </Col>
                    <Col
                      xs="12"
                      sm="4"
                      md="4"
                      lg="4"
                      style={{ paddingTop: '5px', paddingBottom: '5px' }}
                    >
                      <SelectInput
                        value={getSubcategory}
                        placeholder="Potkategorija"
                        options={parseSubcategories(
                          getCurrentTab === 'Delovi'
                            ? AD_PART_CATEGORIES
                            : AD_EQUIPMENT_CATEGORIES,
                          getCategory && getCategory.value,
                          'subcategories',
                          'Sve potkategorije',
                        )}
                        onChange={(option: any) => setSubcategory(option)}
                      />
                    </Col>
                    <Col
                      xs="12"
                      sm="4"
                      md="4"
                      lg="4"
                      style={{ paddingTop: '5px', paddingBottom: '5px' }}
                    >
                      <SelectInput
                        value={getOptionalConditionsOptionsFilter}
                        placeholder="Stanje"
                        options={parseConditions(CONDITION, 'Sva stanja')}
                        onChange={(option: any) =>
                          setOptionalConditionsFilter(option)
                        }
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col
                      xs="12"
                      sm="8"
                      style={{ paddingTop: '5px', paddingBottom: '5px' }}
                    >
                      <FormGroup
                        inline
                        className="login-and-register__form-group"
                      >
                        <Input
                          name="search"
                          placeholder="Unesite pojam koji tražite"
                          onChange={event => {
                            setSearchValue(event.target.value);
                          }}
                          value={getSearchValue}
                        />
                      </FormGroup>
                    </Col>
                    <Col
                      xs="12"
                      sm="4"
                      style={{ paddingTop: '5px', paddingBottom: '5px' }}
                    >
                      <Button block color="secondary" onClick={onSearch}>
                        Pretraži
                      </Button>
                    </Col>
                  </Row>
                  <Row style={{ minHeight: '10px' }} />
                </div>
              </Form>
            </div>
            {!getHome && (
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
            )}
            {!getHome && getCurrentPage === 0 && (
              <TopAdsList {...getAllFilters} />
            )}
            {getHome ? (
              // @ts-ignore
              <Home
                onBrand={(brand: any) => {
                  setBrand([{ value: brand, label: brand }]);
                  setHome(false);
                  setAllFilters({
                    // @ts-ignore
                    optional: {
                      adType: getCurrentTab === 'Delovi' ? 'Deo' : 'Oprema',

                      brand: brand,
                    },
                    search: '',
                  });
                }}
                onCategory={(item: any) => {
                  setCategory([{ value: item, label: item }]);
                  setHome(false);
                  setAllFilters({
                    // @ts-ignore
                    optional: {
                      adType: getCurrentTab === 'Delovi' ? 'Deo' : 'Oprema',

                      category: item,
                    },
                    search: '',
                  });
                }}
                type={getCurrentTab}
              />
            ) : (
              <AdsList
                first={getPagination.value}
                skip={getCurrentPage * getPagination.value}
                {...getAllFilters}
                orderBy={getOrderBy.value}
                currentPage={getCurrentPage}
                pagination={getPagination.value}
                cities={getCities}
                onPageChange={(p: any) => setCurrentPage(p.selected)}
              />
            )}
            {!getHome && <MiddleAds />}
          </Col>
          <Col xs="12" sm="12" md="12" lg="3">
            <RightAds />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Delovi;
