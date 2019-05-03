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

const RadioInput = () => (
  <Col>
    <FormGroup style={{ marginLeft: "10px", height: "40px" }} check inline>
      <Input type="radio" name="radio1" />
      <Label style={{ marginLeft: "5px" }}>Input</Label>
    </FormGroup>
  </Col>
);

const SelectInput = () => (
  <Col>
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

const SearchForm: React.FunctionComponent = () => (
  <Form>
    <Container style={{ padding: "0px" }}>
      <Row>
        <SelectInput />
        <SelectInput />
        <SelectInput />
      </Row>
      <Row>
        <RadioInput />
        <RadioInput />
        <RadioInput />
      </Row>
      <Row>
        <RadioInput />
        <RadioInput />
        <Col>
          <Button block color="primary">
            Pretraži
          </Button>
        </Col>
      </Row>
    </Container>
  </Form>
);

export default SearchForm;
