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
    height: 76rem;
    & img {
      width: 76rem;
      height: 76rem;
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
const LinkWrap = styled.section``;
const LinkCard = styled(Link)``;

const M = { GlobalStyle, MypageIndexWrapper, ProfileWrap, LinkWrap, LinkCard };

export default M;
