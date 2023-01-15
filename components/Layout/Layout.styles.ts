import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 390px;
  margin: auto auto 0;
  background-color: ${({ theme }) => theme.background};

  & > main {
    width: 390px;
    min-height: 100vh;
    padding: 0 20px;
    background-color: ${({ theme }) => theme.white};

    & .loading-page {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
    }
  }

  @media screen and (min-width: 768px) {
    width: 100%;
    background-color: ${({ theme }) => theme.background};
  }
`;

const SignupStepWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  padding: 16px 0 32px;

  & div.ant-progress {
    width: 390px;
    margin: 10px 0;
    margin-left: -20px;
  }

  & > h2 {
    font-size: 20px;
    font-weight: 700;
    color: ${({ theme }) => theme.gray900};
  }

  & > section {
    margin-top: 32px;
  }
`;

const SignupStepWrap = styled.div`
  display: flex;
  margin: 0 -3px 19px;

  & > img {
    margin: 0 3px;
  }
`;

const L = {
  Container,
  SignupStepWrapper,
  SignupStepWrap,
};

export default L;
