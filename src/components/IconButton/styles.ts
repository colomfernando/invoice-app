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

export default { Button };
