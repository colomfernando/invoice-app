import React from 'react';
import Styles from './styles';
import { ErrorMessage } from 'formik';
export interface PropsInputForm
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  labelValue?: string;
  type: string;
  placeholder: string;
  disabled?: boolean;
}
const InputForm: React.FC<PropsInputForm> = ({
  name,
  labelValue,
  type,
  placeholder,
  disabled,
  ...props
}) => {
  return (
    <Styles.Wrapper {...props}>
      {labelValue && (
        <Styles.Label htmlFor={labelValue}>{labelValue}</Styles.Label>
      )}
      <Styles.Input
        name={name}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
      ></Styles.Input>
      {!disabled && (
        <Styles.ErrorMsg>
          <ErrorMessage name={name} />
        </Styles.ErrorMsg>
      )}
    </Styles.Wrapper>
  );
};

export default InputForm;
