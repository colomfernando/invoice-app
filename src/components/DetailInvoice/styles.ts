import styled from 'styled-components';
import palette from 'theme/palette';
import Button from 'components/Button';
import { Link } from 'react-router-dom';

const Wrapper = styled.div``;

const Header = styled.div`
  display: flex;
  align-items: center;
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
  margin-right: 20px;
`;

const BaseButton = styled(Button)`
  text-transform: capitalize;
  &:not(:last-child) {
    margin-right: 15px;
  }
`;

const EditButton = styled(BaseButton)``;

const DeleteButton = styled(BaseButton)`
  margin-left: auto;
  background-color: ${palette.error.main};
  color: ${palette.common.white};
`;

const PaidButton = styled(BaseButton)`
  background-color: ${palette.success.main};
  color: ${palette.common.white};
`;

const Text = styled.p``;

const LinkTo = styled(Link)``;

export default {
  Wrapper,
  Header,
  Id,
  Body,
  LinkTo,
  Text,
  Row,
  EditButton,
  PaidButton,
  DeleteButton,
};
