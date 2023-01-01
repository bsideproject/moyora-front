import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    div.container{
      width: 100%;
      margin: 0 auto auto;
      background-color: ${({ theme }) => theme.white} !important;
      main {
        width: 100% !important;
        min-height: 100vh;
        padding: 0;
        background-color: ${({ theme }) => theme.white};
      }
    }
`;

const MainSection = styled.section`
  width: 100%;
  min-width: 100vw;
  padding: 0 20rem;
  @media screen and (min-width: 768px) {
    min-width: 960rem;

    & .mobile {
      display: none;
    }
  }

  & > div {
    width: 390rem;
    margin: 0 auto;

    @media screen and (min-width: 768px) {
      width: 920rem;
    }
  }
`;

const BannerSection = styled(MainSection)`
  background-color: #fff3eb;
  & > div {
    padding: 32rem 0 111rem;
    text-align: center;
    @media screen and (min-width: 768px) {
      padding: 38rem 0 149rem;
      text-align: left;
    }
    & > div {
      display: flex;
      justify-content: center;
      margin-top: 60rem;
      @media screen and (min-width: 768px) {
        margin-top: 105rem;
      }
      & img {
        display: none;
        @media screen and (min-width: 768px) {
          display: inline-block;
        }
      }
      & > div {
        @media screen and (min-width: 768px) {
          margin-right: 48rem;
        }
        & h4 {
          font-size: 14rem;
          font-weight: 700;
          line-height: 29rem;
          color: #ff6d3a;
          @media screen and (min-width: 768px) {
            display: inline-block;
            font-size: 16rem;
            line-height: 52rem;
          }
        }
        & h3 {
          font-size: 24rem;
          font-weight: 700;
          line-height: 34rem;
          color: #1c1c1c;
          @media screen and (min-width: 768px) {
            font-size: 40rem;
            line-height: 56rem;
          }
        }
        & h2 {
          margin: 33rem 0;
          font-family: GmarketSans;
          font-size: 24rem;
          font-weight: 500;
          line-height: 24rem;
          & span {
            display: inline-block;
            width: 34rem;
            text-align: center;
          }
          @media screen and (min-width: 768px) {
            margin: 47rem 0 52rem;
            font-size: 38rem;
            line-height: 38rem;
            & span {
              width: 54rem;
            }
          }
        }
        & p {
          margin-bottom: 12rem;
          font-size: 12rem;
          font-weight: 400;
          line-height: 16rem;
          color: #1c1c1c;

          @media screen and (min-width: 768px) {
            margin-bottom: 20rem;
            font-size: 16rem;
            line-height: 19rem;
          }
        }
        & button {
          height: 40rem;
          font-size: 12rem;
          font-weight: 700;
          border-radius: 8rem;

          @media screen and (min-width: 768px) {
            height: 64rem;
            font-size: 20px;
          }
        }
      }
    }
  }
`;

const NumberSection = styled(MainSection)`
  & > div {
    @media screen and (min-width: 768px) {
      display: flex;
      justify-content: space-between;
      width: 696rem;
      padding: 44rem 0;
    }

    & > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      & img {
        margin-left: -9rem;
      }
      & h3 {
        margin: 13rem 0 6rem;
        font-size: 32rem;
        font-weight: 600;
        color: #1c1c1c;
      }
      & p {
        font-size: 16rem;
        font-weight: 500;
        color: #888e94;
        text-align: center;
      }
    }
  }
`;

const ExamSection = styled(MainSection)`
  background: url('../../pngs/beta-background.png') top left no-repeat;
  background-size: cover;
  & > div {
    padding: 122rem 0 96rem;

    & > h2 {
      margin-bottom: 110rem;
      font-size: 36rem;
      font-weight: 700;
      line-height: 56rem;
      color: #000000;
      text-align: center;
      & > span {
        position: relative;
        & span {
          position: relative;
          z-index: 11;
        }
        & div.bar {
          position: absolute;
          top: 24rem;
          left: -5%;
          z-index: 10;
          width: 110%;
          height: 15rem;
          background: rgba(255, 109, 58, 0.5);
          border-radius: 30px;
        }
      }
    }
    & > div {
      display: flex;
      margin-bottom: 162rem;
      & > div {
        & img {
          display: inline-block;
        }
        & span {
          margin-left: 10rem;
          font-size: 22rem;
          font-weight: 600;
          line-height: 33rem;
          color: #ff6d3a;
          vertical-align: text-bottom;
        }
        & h3 {
          margin: 13rem 0 32rem;
          font-size: 34rem;
          font-weight: 600;
          line-height: 46rem;
          color: #000000;
        }
        & p {
          font-size: 18rem;
          font-weight: 500;
          line-height: 26rem;
          color: #484f54;
        }
        &.job {
          padding: 56rem 0;
          margin-left: 100rem;
        }
        &.exam {
          padding: 178rem 0;
          margin-right: 105rem;

          & span {
            color: #4181f0;
          }
        }
      }
    }
  }
`;

const QuestionSection = styled(MainSection)`
  padding: 137rem 0;
  background: url('../../pngs/beta-background2.png') top left no-repeat;
  background-size: cover;
  & > div {
    & h2 {
      font-size: 38rem;
      font-weight: 600;
      line-height: 56rem;
      color: #000000;
      text-align: center;
    }
    & h3 {
      margin: 30rem 0 86rem;
      font-size: 18rem;
      font-weight: 600;
      line-height: 28rem;
      color: #000000;
      text-align: center;
    }
  }
`;

const EndSection = styled(MainSection)`
  padding: 126rem 0;
  background: url('../../pngs/beta-background3.png') top left no-repeat;
  background-size: cover;
  & > div {
    text-align: center;

    & h2 {
      margin-bottom: 52rem;
      font-size: 38rem;
      font-weight: 600;
      line-height: 56rem;
      color: #000000;
      text-align: center;
    }
    & button {
      height: 64px;
      border-radius: 8px;
    }
  }
`;

const LinkSection = styled(MainSection)`
  padding: 54rem 0;
  background: #ff6d3a;
  & > div {
    & h2 {
      margin-bottom: 24rem;
      font-size: 28rem;
      font-weight: 700;
      line-height: 40rem;
      color: #ffffff;
      text-align: center;
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
        cursor: pointer;
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
          color: #ffffff;
        }
      }
    }
  }
`;

const FooterSection = styled(MainSection)`
  padding: 108rem 0 42rem;

  & > div {
    display: flex;
    justify-content: space-between;
    & a {
      font-size: 14rem;
      font-weight: 600;
      line-height: 14rem;
      color: #777777;
    }

    & > div {
      display: flex;

      & a + a {
        margin-left: 25rem;
      }
    }
  }
`;

const B = {
  GlobalStyle,
  BannerSection,
  NumberSection,
  ExamSection,
  QuestionSection,
  EndSection,
  LinkSection,
  FooterSection,
};

export default B;
