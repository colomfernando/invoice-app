import styled from 'styled-components';
import palette from 'theme/palette';
import { Field } from 'formik';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

const Label = styled.label`
  color: ${({ theme }) => theme.text};
  margin-bottom: 15px;
`;

const Input = styled(Field)`
  width: 100%;
  background-color: ${({ theme }) => theme.backgroundInput};
  color: ${({ theme }) => theme.text};
  border: none;
  border-radius: 5px;
  padding: 10px;
  outline: none;
`;

const ErrorMsg = styled.span`
  margin-top: 10px;
  padding-left: 8px;
  font-size: 0.9rem;
  color: ${palette.error.main};
`;
export default { Wrapper, Input, Label, ErrorMsg };
