import styled from 'styled-components';
import palette from 'theme/palette';

const Wrapper = styled.div`
  width: 100%;
`;

const Grid = styled.div`
  display: grid;
  padding: 15px;
  width: 100%;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  border-radius: 10px;
`;

const Header = styled(Grid)`
  margin-bottom: 15px;
`;

const Item = styled(Grid)`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
  background-color: ${palette.grey[300]};
`;

const Description = styled.p`
  text-transform: capitalize;
`;

const Title = styled.p`
  font-weight: 700;
  text-transform: capitalize;
  &:not(:first-child) {
    text-align: center;
  }
`;
const Text = styled.p`
  text-transform: capitalize;
  text-align: center;
`;

export default { Wrapper, Header, Item, Description, Title, Text };
