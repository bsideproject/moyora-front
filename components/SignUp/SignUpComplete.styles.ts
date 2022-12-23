import styled from 'styled-components';

const SignUpCompleteWrapper = styled.section`
  display: flex;
  flex-direction: column;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 68rem;
    text-align: center;

    & > h3 {
      margin-top: 43rem;
      font-size: 20rem;
      font-weight: 700;
      color: ${({ theme }) => theme.gray900};
    }

    & > h2 {
      margin-top: 20rem;
      font-size: 28rem;
      font-weight: 700;
      color: ${({ theme }) => theme.gray900};

      & span {
        display: inline-block;
        width: 35rem;
      }
    }

    & > p {
      margin-top: 8rem;
      font-size: 16rem;
      font-weight: 400;
      line-height: 24rem;
      color: ${({ theme }) => theme.gray800};
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
    align-items: center;
    justify-content: center;
    & > div {
      display: flex;
      flex-direction: column;
      margin-top: 20rem;
      &:first-of-type {
        margin-right: 20rem;
      }
      & > button {
        width: 56rem;
        height: 56rem;
        margin: auto;
      }

      & > button > img {
        margin: auto;
      }

      & > p {
        margin-top: 5rem;
        font-size: 13rem;
        font-weight: 400;
        line-height: 18rem;
        color: ${({ theme }) => theme.gray700};
      }
    }
  }
`;

const S = {
  SignUpCompleteWrapper,
  shareSection,
};

export default S;
