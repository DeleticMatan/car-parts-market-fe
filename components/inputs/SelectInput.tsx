import * as React from 'react';
import Select from 'react-select';

const errorStyle = {
  borderColor: 'red',
  borderStyle: 'solid',
  borderWidth: '1px',
  borderRadius: '6px',
};

const SelectInput: React.FunctionComponent<any> = ({
  value,
  options,
  onChange,
  placeholder = 'Select...',
  invalid = false,
}) => {
  return (
    <div>
      {/*
      <p
        style={{
          margin: 0,
          padding: 0,
          color: 'red',
          textAlign: 'right',
          fontSize: '11px',
          minWidth: '100px',
          minHeight: '15px',
        }}
      >
        {invalid ? 'Obavezno polje!' : ` `}
      </p>*/}
      <div style={invalid ? errorStyle : {}}>
        <Select
          placeholder={placeholder}
          value={value}
          onChange={option => onChange(option)}
          options={options}
        />
      </div>
    </div>
  );
};

export default SelectInput;
