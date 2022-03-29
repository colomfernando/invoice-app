import React from 'react';
import Styles from './styles';

const options = [
  { value: 'pending', label: 'pending' },
  { value: 'paid', label: 'paid' },
];

const FilterStatus: React.FC = ({ ...props }) => {
  return (
    <Styles.Filter
      {...props}
      classNamePrefix="select"
      placeholder="Filter by status"
      isMulti
      options={options}
    />
  );
};

export default FilterStatus;
