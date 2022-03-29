import styled from 'styled-components';
import StatusComponent from 'components/StatusChip';

const InvoiceCard = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundCard};
  color: ${({ theme }) => theme.text};
  border-radius: 5px;
  padding: 25px;
`;

const Text = styled.p`
  flex-basis: 20%;
`;

const Id = styled(Text)`
  font-weight: 700;
`;

const Due = styled(Text)``;

const Name = styled(Text)``;

const Total = styled(Text)``;

const Status = styled(StatusComponent)`
  flex-basis: 20%;
  margin-left: auto;
  text-align: center;
`;

InvoiceCard.displayName = 'InvoiceCard';

export default { InvoiceCard, Id, Due, Name, Total, Status };
