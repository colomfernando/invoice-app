import styled from 'styled-components';
import InputForm from 'components/InputForm';
import { Form } from 'formik';
import IconButton from 'components/IconButton';
import palette from 'theme/palette';

const FormFormik = styled(Form)`
  display: flex;
  flex-flow: column nowrap;
  max-width: 900px;
  justify-content: space-between;
  margin: 0 auto;
  padding: 20px;
  background-color: ${({ theme }) => theme.backgroundCard};
`;

const Title = styled.h3`
  font-weight: 700;
  flex-basis: 100%;
  margin-bottom: 20px;
`;

const BaseInput = styled(InputForm)`
  height: 120px;
`;

const WrapperSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 20px 0 0;
`;

const WrapperItems = styled.div`
  display: flex;
  flex-basis: 100%;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
`;

const Submit = styled.button`
  width: 100%;
  max-width: 250px;
  padding: 8px;
  margin: 20px auto;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  background-color: ${palette.primary};
  color: ${palette.common.white};
`;

const AddButton = styled(IconButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 100%;
  color: ${palette.common.white};
  & > svg {
    margin-right: 10px;
    fill: ${palette.common.white};
  }
`;

const DeleteButton = styled(IconButton)`
  margin-top: -0.9rem;
  width: 45px;
  height: 45px;
`;

export default {
  FormFormik,
  BaseInput,
  Title,
  WrapperSection,
  WrapperItems,
  Submit,
  AddButton,
  DeleteButton,
};
