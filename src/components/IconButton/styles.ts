import styled from 'styled-components';
import palette from 'theme/palette';

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  background-color: ${palette.primary};
  border: none;
  border-radius: 5px;
  color: inherit;
  padding: 12px;
  cursor: pointer;
`;

export default { Button };
