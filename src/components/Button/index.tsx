import React from 'react';
import Styles from './styles';

export type PropsButton = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<PropsButton> = ({
  onClick,
  children,

  ...props
}) => {
  console.log('props :>> ', props);
  return (
    <Styles.Button onClick={onClick} {...props}>
      {children}
    </Styles.Button>
  );
};

export default Button;
