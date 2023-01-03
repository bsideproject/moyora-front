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
  min-width: 390rem;
  padding: 0 20rem;

  & .web {
    display: none;
  }
  @media screen and (min-width: 768px) {
    min-width: 960rem;
    & .web {
      display: flex;
    }
    & .mobile {
      display: none;
    }
  }

  & > div {
    max-width: 390rem;
    margin: 0 auto;
    @media screen and (min-width: 768px) {
      max-width: 960rem;
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
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-top: 24rem;
      @media screen and (min-width: 768px) {
        flex-direction: row;
        margin-top: 105rem;
      }
      & img {
        order: 1;
        width: 143rem;
        height: 182rem;
        margin-bottom: 20rem;
        @media screen and (min-width: 768px) {
          order: 0;
          width: 341rem;
          height: 434rem;
          margin-bottom: 0;
        }
      }
      & > div {
        order: 2;
        @media screen and (min-width: 768px) {
          order: 0;
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
          margin-bottom: 16rem;
          font-size: 13rem;
          font-weight: 400;
          line-height: 18rem;
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
    padding: 15rem 0;
    @media screen and (min-width: 768px) {
      display: flex;
      justify-content: space-between;
      padding: 44rem 134rem;
    }

    & > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 9rem 0;

      @media screen and (min-width: 768px) {
        flex-direction: column;
      }
      & img {
        width: 40rem;
        height: 40rem;
        @media screen and (min-width: 768px) {
          width: 56rem;
          height: 56rem;
          margin-left: -9rem;
        }
      }
      & h3 {
        order: 2;
        font-size: 20rem;
        font-weight: 600;
        color: #1c1c1c;

        @media screen and (min-width: 768px) {
          order: 0;
          margin: 13rem 0 6rem;
          font-size: 32rem;
        }
      }
      & p {
        margin-right: auto;
        margin-left: 12rem;
        font-size: 15rem;
        font-weight: 500;
        color: #888e94;

        @media screen and (min-width: 768px) {
          margin: 0;
          font-size: 16rem;
          text-align: center;
        }
      }
    }
  }
`;

const ExamSection = styled(MainSection)`
  background: #fff9f5;
  @media screen and (min-width: 768px) {
    background: url('../../pngs/beta-background.png') top left no-repeat;
    background-size: cover;
  }
  & > div {
    padding: 60rem 0 0;
    @media screen and (min-width: 768px) {
      padding: 122rem 0 96rem;
    }

    & > h2 {
      margin-bottom: 72rem;
      font-size: 20rem;
      font-weight: 700;
      line-height: 28rem;
      color: #000000;
      text-align: center;

      @media screen and (min-width: 768px) {
        margin-bottom: 110rem;
        font-size: 36rem;
        line-height: 56rem;
      }
      & > span {
        position: relative;
        & span {
          position: relative;
          z-index: 11;
        }
        & div.bar {
          position: absolute;
          top: 14rem;
          left: -5%;
          z-index: 10;
          width: 110%;
          height: 8rem;
          background: rgba(255, 109, 58, 0.5);
          border-radius: 30px;
          @media screen and (min-width: 768px) {
            top: 24rem;
            height: 15rem;
          }
        }
      }
    }
    & > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;

      &.mobile {
        & img {
          width: 274rem;
          height: 274rem;
          margin-right: -5rem;

          &.beta-exam {
            height: 503rem;
          }

          &.exam-icon {
            width: 32rem;
            height: 32rem;
            margin-left: -10rem;
          }
        }
        & > span {
          margin: 8rem 0 17rem;
          font-size: 16rem;
          font-weight: 600;
          line-height: 19rem;
          color: #ff6d3a;
          &.is-blue {
            color: #4181f0;
          }
        }

        & > h3 {
          margin: 38rem 0 16rem;
          font-size: 22rem;
          font-weight: 700;
          line-height: 32rem;
        }

        & > p {
          margin-bottom: 119rem;
          font-size: 14rem;
          font-weight: 500;
          line-height: 20rem;
          color: #484f54;
        }
      }
      @media screen and (min-width: 768px) {
        flex-direction: row;
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
  }
`;

const QuestionSection = styled(MainSection)`
  padding: 65rem 0;
  background: #ffffff;
  @media screen and (min-width: 768px) {
    padding: 137rem 0;
    background: url('../../pngs/beta-background2.png') top left no-repeat;
    background-size: cover;
  }
  & > div {
    & h2 {
      font-size: 20rem;
      font-weight: 700;
      line-height: 28rem;
      color: #000000;
      text-align: center;

      @media screen and (min-width: 768px) {
        font-size: 38rem;
        font-weight: 600;
        line-height: 56rem;
      }
    }
    & h3 {
      margin: 16rem 0 42rem;
      font-size: 14rem;
      font-weight: 500;
      line-height: 20rem;
      color: #484f54;
      text-align: center;

      @media screen and (min-width: 768px) {
        margin: 30rem 0 86rem;
        font-size: 18rem;
        font-weight: 600;
        line-height: 28rem;
        color: #000000;
      }
    }
    & > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      & img {
        width: 204rem;
        height: 165rem;
      }
      & img + img {
        margin-top: 50rem;
      }
      @media screen and (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        & img {
          width: 288rem;
          height: 233rem;
        }
        & img + img {
          margin-top: 0;
        }
      }
    }
  }
`;

const EndSection = styled(MainSection)`
  padding: 64rem 0 68rem;
  background: #fff3eb;

  @media screen and (min-width: 768px) {
    padding: 126rem 0;
    background: url('../../pngs/beta-background3.png') top left no-repeat;
    background-size: cover;
  }

  & > div {
    text-align: center;
    & h2 {
      margin-bottom: 23rem;
      font-size: 22rem;
      font-weight: 700;
      line-height: 32rem;
      color: #000000;
      @media screen and (min-width: 768px) {
        margin-bottom: 52rem;
        font-size: 38rem;
        font-weight: 600;
        line-height: 56rem;
      }
    }
    & button {
      height: 40rem;
      font-size: 14rem;
      font-weight: 700;
      border-radius: 5rem;
      @media screen and (min-width: 768px) {
        height: 64rem;
        font-size: 20px;
        border-radius: 8rem;
      }
    }
  }
`;

const LinkSection = styled(MainSection)`
  padding: 43rem 0;
  background: #ff6d3a;
  @media screen and (min-width: 768px) {
    padding: 54rem 0;
  }
  & > div {
    & h2 {
      margin-bottom: 4rem;
      font-size: 18rem;
      font-weight: 700;
      line-height: 26rem;
      color: #ffffff;
      text-align: center;

      @media screen and (min-width: 768px) {
        margin-bottom: 24rem;
        font-size: 28rem;
        line-height: 40rem;
      }
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
          margin-right: 22rem;

          @media screen and (min-width: 768px) {
            margin-right: 20rem;
          }
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
