import styled from 'styled-components';
import palette from 'theme/palette';
import { Link } from 'react-router-dom';

const Wrapper = styled.div``;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${palette.grey[300]};
  padding: 30px 20px;
`;

const Body = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding: 30px 20px;
  background-color: ${({ theme }) => theme.backgroundCard};
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  :not(:last-child) {
    margin-bottom: 20px;
  }
`;
const Id = styled.p`
  font-weight: 700;
`;

const Text = styled.p``;

const LinkTo = styled(Link)``;

export default { Wrapper, Header, Id, Body, LinkTo, Text, Row };
