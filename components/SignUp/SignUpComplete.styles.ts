import styled from 'styled-components';

const LogoSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 56rem;
`;

const SignUpCompleteWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > div {
    text-align: center;
    justify-content: center;
    margin-top: 68rem;

    & > h3 {
      font-size: 20rem;
      font-weight: 700;
      line-height: 28rem;
      color: ${({ theme }) => theme.gray900};
      margin-top: 43rem;
    }

    & > h2 {
      font-size: 28rem;
      font-weight: 700;
      line-height: 40rem;
      color: ${({ theme }) => theme.gray900};
      margin-top: 20rem;
    }

    & > p {
      margin-top: 8rem;
      font-size: 16rem;
      line-height: 24rem;
      font-weight: 400;
      color: ${({ theme }) => theme.gray800};
      margin-top: 8rem;
    }
  }
`;

const shareSection = styled.div`
  justify-content: center;
  width: 100%;
  margin-top: 108rem;

  & > p {
    margin-top: 108rem;
    font-size: 16rem;
    font-weight: 400;
    line-height: 24rem;
    color: ${({ theme }) => theme.gray700};
  }

  & div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    & > div {
      display: flex;
      flex-direction: column;
      margin-top: 20rem;
      &:first-of-type {
        margin-right: 20rem;
      }
      & > button {
        margin: auto;
        width: 56rem;
        height: 56rem;
      }

      & > button > img {
        margin: auto;
      }

      & > p {
        font-size: 13rem;
        font-weight: 400;
        line-height: 18rem;
        color: ${({ theme }) => theme.gray700};
        margin-top: 5rem;
      }
    }
  }
`;

const SC = {
  SignUpCompleteWrapper,
  LogoSection,
  shareSection,
};

export default SC;
