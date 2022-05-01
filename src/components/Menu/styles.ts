import styled from 'styled-components';
import ToggleThemeMode from 'components/ToggleThemeMode';

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  padding: 15px 30px;
  background-color: inherit;
`;

const Toggle = styled(ToggleThemeMode)`
  margin-left: auto;
`;

export default { Wrapper, Toggle };
