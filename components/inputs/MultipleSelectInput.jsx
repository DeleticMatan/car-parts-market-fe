import * as React from 'react';

import MultiSelect from '@khanacademy/react-multi-select';

const MultiSelectInput = ({
  value,
  options,
  onChange,
  placeholder = 'Izaberite...',
  selectAllLabel = '',
  allItemsLabel = '',
  searchString = 'Pretraga',
}) => {
  return (
    <MultiSelect
      selectAllLabel={selectAllLabel}
      options={options}
      onSelectedChanged={option => onChange(option)}
      selected={value}
      overrideStrings={{
        search: searchString,
        selectSomeItems: placeholder,
        allItemsAreSelected: allItemsLabel,
      }}
    />
  );
};

export default MultiSelectInput;
