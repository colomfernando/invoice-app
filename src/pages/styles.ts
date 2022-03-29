import styled from 'styled-components';
import InvoiceCard from 'components/InvoiceCard';
import ButtonNewInvoice from 'components/ButtonNewInvoice';
import FilterStatus from 'components/FilterStatus';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
`;

const Invoice = styled(InvoiceCard)`
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
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
  margin-left: auto;
  margin-right: 30px;
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
};
