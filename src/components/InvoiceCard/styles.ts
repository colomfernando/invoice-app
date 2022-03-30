import styled from 'styled-components';
import StatusComponent from 'components/StatusChip';
import breakpoints from 'theme/breakpoints';

const InvoiceCard = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundCard};
  color: ${({ theme }) => theme.text};
  border-radius: 5px;
  padding: 20px;
  flex-wrap: wrap;
  width: 100%;
  ${breakpoints.md`
		flex-wrap: nowrap;
	`}
`;

const Text = styled.p`
  flex-basis: 20%;
`;

const Id = styled(Text)`
  flex-basis: 50%;
  font-weight: 700;
  margin-bottom: 25px;
  ${breakpoints.md`
		  flex-basis: 20%;
			margin-bottom: initial;
	`}
`;

const Due = styled(Text)`
  flex-basis: 50%;
  margin-bottom: 25px;
  text-align: end;
  ${breakpoints.md`
		  flex-basis: 20%;
			margin-bottom: initial;
			text-align: initial;
	`}
`;

const Name = styled(Text)``;

const Total = styled(Text)``;

const Status = styled(StatusComponent)`
  flex-basis: 20%;
  margin-left: auto;
`;

InvoiceCard.displayName = 'InvoiceCard';

export default { InvoiceCard, Id, Due, Name, Total, Status };
