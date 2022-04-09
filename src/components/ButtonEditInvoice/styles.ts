import styled from 'styled-components';

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundCreateInvoice};
  border: none;
  border-radius: 5px;
  color: inherit;
  padding: 12px;
  cursor: pointer;
`;

const Icon = styled.svg`
  margin-right: 10px;
  fill: ${({ theme }) => theme.fillIconCreateInvoice};
`;

export default { Button, Icon };
