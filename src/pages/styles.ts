import styled from 'styled-components';
import InvoiceCard from 'components/InvoiceCard';
import ButtonNewInvoice from 'components/ButtonNewInvoice';
import FilterStatus from 'components/FilterStatus';
import breakpoints from 'theme/breakpoints';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

const LinkTo = styled(Link)`
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

const Invoice = styled(InvoiceCard)``;

const Header = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  ${breakpoints.md`
	flex-flow: row nowrap;
	justify-content: initial;
	`}
`;

const WrapperTitle = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 1.8rem;
`;

const TotalInvoice = styled.p`
  margin-top: 10px;
  font-size: 0.8rem;
`;

const CreateInvoice = styled(ButtonNewInvoice)``;

const Filter = styled(FilterStatus)`
  width: 90%;
  margin: 25px 0;
  ${breakpoints.md`
	  width: 40%;
  	margin-left: auto;
		margin-right: 30px;
	`}
`;

export default {
  Wrapper,
  Invoice,
  Header,
  WrapperTitle,
  Title,
  TotalInvoice,
  CreateInvoice,
  Filter,
  LinkTo,
};
