import React from 'react';
import { Button, Input, Col, Row } from 'reactstrap';
import SelectInput from '../inputs/SelectInput';
import Dropzone from '../inputs/Dropzone';

const UserFields = ({
  values,
  handleBlur,
  handleChange,
  errors,
  touched,
  isSubmitting,
  cities,
  setFieldValue,
  label,
  color,
  getImages,
  setImages,
  id,
  type,
  onOriginal,
}: any) => {
  const setImage = (file: File, number: number) => {
    let newImages = [...getImages];
    newImages[number] = file;
    setImages(newImages);
  };

  return (
    <>
      <Row style={{ marginTop: '10px', marginBottom: '10px' }}>
        <Col>
          <p>
            Dozvoljeno je dodavanje fotografija koje su isključivo vezane za
            oglas. Broj fotografija je ograničen na 6.
            <br />
            Fotografije moraju zauzimati ispod 2mb prostora i biti u PNG, JPG
            ili JPEG formatu.
          </p>
        </Col>
      </Row>
      <Row style={{ marginTop: '10px' }}>
        <Col>
          <p>Izaberite fotografije:</p>
        </Col>
      </Row>
      <Row>
        {[0, 1, 2, 3, 4, 5].map(index => (
          <Col key={index} xs="12" sm="6" md="4" lg="4">
            <Dropzone
              original={false}
              onOriginal={() => onOriginal(index)}
              id={id}
              type={type}
              number={index}
              getImage={
                Array.isArray(getImages) &&
                getImages.length === 6 &&
                getImages[index]
              }
              setImage={(file: File) => setImage(file, index)}
            />
          </Col>
        ))}
      </Row>
      <Row
        style={{
          paddingTop: '5px',
          paddingBottom: '5px',
        }}
      >
        <Col
          style={{
            paddingTop: '5px',
            paddingBottom: '5px',
          }}
          xs="12"
          sm="12"
          md="12"
          lg="12"
        >
          <Input
            value={values.text}
            placeholder="Unesite opis oglasa"
            type="textarea"
            name="text"
            onChange={handleChange}
            onBlur={handleBlur}
            style={{ minHeight: '100px', maxHeight: '150px' }}
          />
        </Col>
        <Col
          style={{
            paddingTop: '5px',
            paddingBottom: '5px',
          }}
          xs="12"
          sm="6"
          md="4"
          lg="4"
        >
          <Input
            value={values.name}
            placeholder="Ime i prezime*"
            type="text"
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            invalid={touched.name && errors.name && true}
          />
        </Col>
        <Col
          style={{
            paddingTop: '5px',
            paddingBottom: '5px',
          }}
          xs="12"
          sm="6"
          md="4"
          lg="4"
        >
          <Input
            value={values.email}
            placeholder="Email*"
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            invalid={touched.email && errors.email && true}
          />
        </Col>
        <Col
          style={{
            paddingTop: '5px',
            paddingBottom: '5px',
          }}
          xs="12"
          sm="6"
          md="4"
          lg="4"
        >
          <SelectInput
            invalid={touched.city && errors.city && true}
            value={values.city}
            placeholder="Grad*"
            options={cities}
            onChange={(option: any) => setFieldValue('city', option)}
          />
        </Col>

        <Col
          style={{
            paddingTop: '5px',
            paddingBottom: '5px',
          }}
          xs="12"
          sm="6"
          md="4"
          lg="4"
        >
          <Input
            invalid={touched.phone && errors.phone && true}
            value={values.phone}
            placeholder="Telefon 1*"
            type="text"
            name="phone"
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Col>
        <Col
          style={{
            paddingTop: '5px',
            paddingBottom: '5px',
          }}
          xs="12"
          sm="6"
          md="4"
          lg="4"
        >
          <Input
            value={values.phone2}
            placeholder="Telefon 2"
            type="text"
            name="phone2"
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Col>
        <Col
          style={{
            paddingTop: '5px',
            paddingBottom: '5px',
          }}
          xs="12"
          sm="6"
          md="4"
          lg="4"
        >
          <Button disabled={isSubmitting} block color={color} type="submit">
            {label}
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default UserFields;
