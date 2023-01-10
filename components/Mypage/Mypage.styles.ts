import Link from 'next/link';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    div.container{
      main {
        min-height: 100vh;
        padding: 0;
        background-color: ${({ theme }) => theme.white};
      }
      div.full-container{
        padding: 0;
      }
    }
`;

const MypageIndexWrapper = styled.div`
  padding: 56rem 0;

  & > div {
    padding: 0 20rem;
  }
`;

const ProfileWrap = styled.section`
  display: flex;
  align-items: center;
  padding: 22rem;
  background-color: ${({ theme }) => theme.gray50};

  & span.ant-upload-wrapper {
    position: relative;
    width: 76rem;
    height: 76rem;
    & div.ant-upload {
      & img {
        width: 76rem;
        height: 76rem;
      }
      & div {
        position: absolute;
        right: 0rem;
        bottom: 0rem;
        padding: 4rem;
        background-color: ${({ theme }) => theme.primary};
        border-radius: 50%;
        & img {
          width: 16rem;
          height: 16rem;
        }
      }
    }
  }

  & > div {
    margin-left: 26rem;

    & > div {
      display: flex;
      align-items: center;
      margin-bottom: 4rem;

      & > h2 {
        font-size: 24rem;
        font-weight: 700;
        line-height: 34rem;
        color: ${({ theme }) => theme.gray900};
      }
      & > h3 {
        margin-left: 8rem;
        font-size: 20rem;
        font-weight: 400;
        line-height: 28rem;
        color: ${({ theme }) => theme.gray700};
      }
    }

    & > p {
      font-size: 14rem;
      font-weight: 400;
      line-height: 20rem;
      color: ${({ theme }) => theme.gray600};
    }
  }
`;
const LinkWrap = styled.section`
  & + & {
    border-top: 8rem solid ${({ theme }) => theme.gray50};
  }

  & > h4 {
    margin: 24rem 20rem 12rem;
    font-size: 16rem;
    font-weight: 700;
    line-height: 24rem;
    color: ${({ theme }) => theme.gray800};
  }
`;
const LinkCard = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12rem 20rem 16rem;

  &:not(:last-child) {
    border-bottom: 1rem solid ${({ theme }) => theme.gray50};
  }

  & p {
    font-size: 16rem;
    font-weight: 500;
    line-height: 24rem;
    color: ${({ theme }) => theme.gray750};
  }

  & img {
    width: 20rem;
    height: 20rem;
  }
`;

const M = { GlobalStyle, MypageIndexWrapper, ProfileWrap, LinkWrap, LinkCard };

export default M;