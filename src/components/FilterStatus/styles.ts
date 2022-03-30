import styled from 'styled-components';
import Select from 'react-select';
import palette from 'theme/palette';

const Filter = styled(Select)`
  & {
    .select__option {
      color: ${palette.common.black};
    }
  }
`;

export default { Filter };
