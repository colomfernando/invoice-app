import React from 'react';
import Menu from 'components/Menu';
import Styles from './styles';

const MainLayout: React.FC = ({ children }) => {
  return (
    <Styles.Wrapper>
      <Menu />
      <Styles.Inner>{children}</Styles.Inner>
    </Styles.Wrapper>
  );
};

export default MainLayout;
