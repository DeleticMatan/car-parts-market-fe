import * as React from 'react';
import Select from 'react-select';

const groupStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};

const formatGroupLabel = (data: any) => (
  <div style={groupStyles}>
    <span>{data.label}</span>
    <span
      style={{
        backgroundColor: '#EBECF0',
        borderRadius: '2em',
        color: '#172B4D',
        display: 'inline-block',
        fontSize: 12,
        fontWeight: 'normal',
        lineHeight: '1',
        minWidth: 1,
        padding: '0.16666666666667em 0.5em',
        textAlign: 'center',
      }}
    >
      {data.options.length}
    </span>
  </div>
);

const GroupedSelectInput: React.FunctionComponent<any> = ({
  value,
  options,
  onChange,
  placeholder = 'Select...',
}) => {
  return (
    <Select
      placeholder={placeholder}
      value={value}
      onChange={option => onChange(option)}
      options={options}
      formatGroupLabel={formatGroupLabel}
    />
  );
};

export default GroupedSelectInput;
