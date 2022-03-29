import styled from 'styled-components';
import InvoiceCard from 'components/InvoiceCard';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
`;

const Invoice = styled(InvoiceCard)`
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export default { Wrapper, Invoice };
