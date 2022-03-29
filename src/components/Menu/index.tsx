import React from 'react';
import Styles from './styles';

const Menu: React.FC = ({ ...props }) => {
  return (
    <Styles.Wrapper {...props}>
      <Styles.Toggle />
    </Styles.Wrapper>
  );
};

export default Menu;
