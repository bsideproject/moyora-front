import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 390rem;
  margin: auto auto 0;
  background-color: ${({ theme }) => theme.background};

  & > main {
    width: 390rem;
    min-height: 100vh;
    padding: 0 20px;
    background-color: ${({ theme }) => theme.white};
  }

  @media screen and (min-width: 768px) {
    width: 100%;
    background-color: ${({ theme }) => theme.background};
  }
`;

const L = {
  Container,
};

export default L;
