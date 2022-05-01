import styled from 'styled-components';
import palette from 'theme/palette';

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  background-color: ${palette.primary};
  border: none;
  border-radius: 5px;
  color: ${palette.common.white};
  padding: 8px;
  cursor: pointer;
`;

const Icon = styled.svg`
  margin-right: 10px;
  fill: ${palette.common.white};
`;

export default { Button, Icon };
