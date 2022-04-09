import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

const Title = styled.p`
  font-size: 1.2rem;
  margin-bottom: 20px;
`;

const Inner = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

const Name = styled.p`
  font-weight: 700;
  margin-bottom: 5px;
`;
const Text = styled.p`
  :not(:last-child) {
    margin-bottom: 5px;
  }
`;

export default { Wrapper, Title, Inner, Text, Name };
