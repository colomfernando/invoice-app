import styled from 'styled-components';
import { PropsStatus } from './index';
import palette, { hexToRgb } from 'theme/palette';

const Wrapper = styled.div<PropsStatus>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 10px;
  max-width: 150px;
  border-radius: 5px;
  background-color: ${({ status }) =>
    `rgba(${hexToRgb(palette.status[status])}, 0.2)`};
`;

const Dot = styled.span<PropsStatus>`
  width: 8px;
  height: 8px;
  border-radius: 5px;
  background-color: ${({ status }) => palette.status[status]};
  margin-right: 15px;
`;

const Status = styled.span<PropsStatus>`
  text-transform: capitalize;
  font-weight: 700;
  color: ${({ status }) => palette.status[status]};
`;

export default { Wrapper, Status, Dot };
