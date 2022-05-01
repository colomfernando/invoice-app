import styled from 'styled-components';
import palette from 'theme/palette';
import Button from 'components/Button';
import { Link } from 'react-router-dom';
import StatusChip from 'components/StatusChip';
import breakpoints from 'theme/breakpoints';
import DetailBillComponent from 'components/DetailBill';

const Wrapper = styled.div``;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.backgroundCard};
  padding: 30px 10px;
  ${breakpoints.lg`
	  padding: 30px 20px;
		flex-direction: row;
	`}
`;

const Body = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding: 30px 10px;
  background-color: inherit;
  ${breakpoints.lg`
	  padding: 30px 20px;
	`}
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  :not(:last-child) {
    margin-bottom: 20px;
  }
`;
const Id = styled.p`
  font-weight: 700;
  margin-right: 20px;
`;

const WrapperInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
`;

const DetailBill = styled(DetailBillComponent)`
  flex-basis: 100%;
  margin-bottom: 30px;
  ${breakpoints.md`
		flex-basis: initial;
	`}
`;

const WrapperButtons = styled.div`
  display: flex;
  ${breakpoints.lg`
		margin-left: auto;
	`}
`;
const BaseButton = styled(Button)`
  text-transform: capitalize;
  &:not(:last-child) {
    margin-right: 15px;
  }
`;

const EditButton = styled(BaseButton)`
  background-color: ${palette.grey[400]};
  color: ${palette.common.white};
`;

const DeleteButton = styled(BaseButton)`
  margin-left: auto;
  background-color: ${palette.error.main};
  color: ${palette.common.white};
`;

const PaidButton = styled(BaseButton)`
  background-color: ${palette.success.main};
  color: ${palette.common.white};
`;

const Status = styled(StatusChip)``;

const Text = styled.p``;

const LinkTo = styled(Link)``;

const Total = styled.p`
  margin: 40px 0;
  margin-left: auto;
  font-size: 1.3rem;
  font-weight: 700;
`;

export default {
  Wrapper,
  Header,
  Id,
  Body,
  LinkTo,
  Text,
  Row,
  WrapperButtons,
  EditButton,
  PaidButton,
  DeleteButton,
  Total,
  Status,
  WrapperInfo,
  DetailBill,
};
