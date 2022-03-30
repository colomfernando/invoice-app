import React from 'react';
import Styles from './styles';

export interface Option {
  value: string;
  label: string;
}
export interface PropsFilter {
  onChange: (options: Option[] | []) => void;
}

const options = [
  { value: 'pending', label: 'pending' },
  { value: 'paid', label: 'paid' },
];

const FilterStatus: React.FC<PropsFilter> = ({ onChange, ...props }) => {
  return (
    <Styles.Filter
      {...props}
      onChange={(options) => onChange(options as Option[] | [])}
      classNamePrefix="select"
      placeholder="Filter by status"
      isMulti
      options={options}
    />
  );
};

export default FilterStatus;
