import styled from 'styled-components';

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundButton};
  border: none;
  border-radius: 5px;
  color: inherit;
  padding: 8px;
  cursor: pointer;
`;

const Icon = styled.svg`
  margin-right: 10px;
  fill: ${({ theme }) => theme.iconButton};
`;

export default { Button, Icon };
