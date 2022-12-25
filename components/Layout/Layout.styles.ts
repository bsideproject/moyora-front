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
    padding: 0 20rem;
    background-color: ${({ theme }) => theme.white};
  }

  @media screen and (min-width: 768px) {
    width: 100%;
    background-color: ${({ theme }) => theme.background};
  }
`;

const SignupStepWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  padding: 16rem 0 32rem;

  & div.ant-progress {
    width: 390rem;
    margin: 10rem 0;
    margin-left: -20rem;
  }

  & > h2 {
    font-size: 20rem;
    font-weight: 700;
    color: ${({ theme }) => theme.gray900};
  }

  & > section {
    margin-top: 32rem;
  }
`;

const SignupStepWrap = styled.div`
  display: flex;
  margin: 0 -3rem 19rem;

  & > img {
    margin: 0 3rem;
  }
`;

const L = {
  Container,
  SignupStepWrapper,
  SignupStepWrap,
};

export default L;
