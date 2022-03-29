import React from 'react';
import Styles from './styles';

const ButtonNewInvoice: React.FC = ({ ...props }) => {
  return (
    <Styles.Button {...props}>
      <Styles.Icon
        xmlSpace="preserve"
        enableBackground="new 0 0 52 52"
        viewBox="0 0 52 52"
        width={24}
      >
        <path d="M26 0C11.664 0 0 11.663 0 26s11.664 26 26 26 26-11.663 26-26S40.336 0 26 0zm12.5 28H28v11a2 2 0 0 1-4 0V28H13.5a2 2 0 0 1 0-4H24V14a2 2 0 0 1 4 0v10h10.5a2 2 0 0 1 0 4z" />
      </Styles.Icon>
      New Invoice
    </Styles.Button>
  );
};

export default ButtonNewInvoice;
