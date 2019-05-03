import * as React from "react";

import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Row,
  Col
} from "reactstrap";

type InputSizingProps = {
  xs?: string;
  sm?: string;
  md?: string;
  lg?: string;
};

const TextAreaInput = () => (
  <Col>
    <FormGroup>
      <Input
        type="textarea"
        name="text"
        id="exampleText"
        placeholder="Unesite opis oglasa"
        style={{ minHeight: "100px" }}
      />
    </FormGroup>
  </Col>
);

const FileInput: React.FunctionComponent<InputSizingProps> = ({
  xs,
  sm,
  md,
  lg
}) => (
  <Col xs={xs} sm={sm} md={md} lg={lg}>
    <FormGroup inline>
      <Input type="file" name="file" id="exampleFile" />
    </FormGroup>
  </Col>
);

const TextInput: React.FunctionComponent<InputSizingProps> = ({
  xs,
  sm,
  md,
  lg
}) => (
  <Col xs={xs} sm={sm} md={md} lg={lg}>
    <FormGroup style={{ height: "40px" }} inline>
      <Input type="text" name="text" />
    </FormGroup>
  </Col>
);

const RadioInput: React.FunctionComponent<InputSizingProps> = ({
  xs,
  sm,
  md,
  lg
}) => (
  <Col xs={xs} sm={sm} md={md} lg={lg}>
    <FormGroup style={{ marginLeft: "10px", height: "40px" }} check inline>
      <Input type="radio" name="radio1" />
      <Label style={{ marginLeft: "5px" }}>Input</Label>
    </FormGroup>
  </Col>
);

const SelectInput: React.FunctionComponent<InputSizingProps> = ({
  xs,
  sm,
  md,
  lg
}) => (
  <Col xs={xs} sm={sm} md={md} lg={lg}>
    <FormGroup style={{ height: "30px" }}>
      <Input type="select" name="select" id="exampleSelect">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </Input>
    </FormGroup>
  </Col>
);

const AddForm: React.FunctionComponent = () => (
  <Form>
    <Container style={{ padding: "0px" }}>
      <Row>
        <SelectInput xs="12" sm="4" />
        <SelectInput xs="12" sm="4" />
        <SelectInput xs="12" sm="4" />
      </Row>
      <Row>
        <SelectInput xs="12" sm="4" />
        <SelectInput xs="12" sm="4" />
        <SelectInput xs="12" sm="4" />
      </Row>
      <Row>
        <SelectInput xs="12" sm="4" />
        <TextInput xs="12" sm="8" />
      </Row>
      <Row />
      <Row>
        <Col>
          <p>
            Dozvoljeno je dodavanje fotografija koje su isključivo vezane za
            oglas. Broj fotografija je ograničen na 6.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Izaberite fotografije:</p>
        </Col>
      </Row>
      <Row>
        <FileInput xs="12" sm="6" md="4" />
        <FileInput xs="12" sm="6" md="4" />
        <FileInput xs="12" sm="6" md="4" />

        <FileInput xs="12" sm="6" md="4" />
        <FileInput xs="12" sm="6" md="4" />
        <FileInput xs="12" sm="6" md="4" />
      </Row>
      <Row>
        <TextAreaInput />
      </Row>
      <Row>
        <TextInput xs="12" sm="4" />
        <TextInput xs="12" sm="4" />
        <TextInput xs="12" sm="4" />
      </Row>
      <Row>
        <TextInput xs="12" sm="4" />
        <TextInput xs="12" sm="4" />
        <Col xs="12" sm="4">
          <Button block color="primary">
            Dodaj
          </Button>
        </Col>
      </Row>
    </Container>
  </Form>
);

export default AddForm;
