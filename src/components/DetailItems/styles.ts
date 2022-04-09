import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
`;

const Grid = styled.div`
  display: grid;
  padding: 10px 5px;
  width: 100%;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
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

export default { Wrapper, Grid, Description, Title, Text };
