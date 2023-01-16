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
      div.full-container{
        padding: 0;
      }
    }
`;

const MainSection = styled.section`
  width: 100%;
  min-width: 390px;
  padding: 0 20px;

  & .web {
    display: none;
  }
  @media screen and (min-width: 768px) {
    min-width: 960px;
    & .web {
      display: flex;
    }
    & .mobile {
      display: none;
    }
  }

  & > div {
    max-width: 390px;
    margin: 0 auto;
    @media screen and (min-width: 768px) {
      max-width: 960px;
    }
  }
`;

const BannerSection = styled(MainSection)`
  background-color: #fff3eb;
  & > div {
    padding: 32px 0 111px;
    text-align: center;
    @media screen and (min-width: 768px) {
      padding: 38px 0 149px;
      text-align: left;
    }
    & > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-top: 24px;
      @media screen and (min-width: 768px) {
        flex-direction: row;
        margin-top: 105px;
      }
      & img {
        order: 1;
        width: 143px;
        height: 182px;
        margin-bottom: 20px;
        @media screen and (min-width: 768px) {
          order: 0;
          width: 341px;
          height: 434px;
          margin-bottom: 0;
        }
      }
      & > div {
        order: 2;
        @media screen and (min-width: 768px) {
          order: 0;
          margin-right: 48px;
        }
        & h4 {
          font-size: 14px;
          font-weight: 700;
          line-height: 29px;
          color: #ff6d3a;
          @media screen and (min-width: 768px) {
            display: inline-block;
            font-size: 16px;
            line-height: 52px;
          }
        }
        & h3 {
          font-size: 24px;
          font-weight: 700;
          line-height: 34px;
          color: #1c1c1c;
          @media screen and (min-width: 768px) {
            font-size: 40px;
            line-height: 56px;
          }
        }
        & h2 {
          margin: 33px 0;
          font-family: GmarketSans;
          font-size: 24px;
          font-weight: 500;
          line-height: 24px;
          & span {
            display: inline-block;
            width: 34px;
            font-family: GmarketSans;
            text-align: center;
          }
          @media screen and (min-width: 768px) {
            margin: 47px 0 52px;
            font-size: 38px;
            line-height: 38px;
            & span {
              width: 54px;
            }
          }
        }
        & p {
          margin-bottom: 16px;
          font-size: 13px;
          font-weight: 400;
          line-height: 18px;
          color: #1c1c1c;

          @media screen and (min-width: 768px) {
            margin-bottom: 20px;
            font-size: 16px;
            line-height: 19px;
          }
        }
        & button {
          height: 40px;
          font-size: 12px;
          font-weight: 700;
          border-radius: 8px;

          @media screen and (min-width: 768px) {
            height: 64px;
            font-size: 20px;
          }
        }
      }
    }
  }
`;

const NumberSection = styled(MainSection)`
  & > div {
    padding: 15px 0;
    @media screen and (min-width: 768px) {
      display: flex;
      justify-content: space-between;
      padding: 44px 134px;
    }

    & > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 9px 0;

      @media screen and (min-width: 768px) {
        flex-direction: column;
      }
      & img {
        width: 40px;
        height: 40px;
        @media screen and (min-width: 768px) {
          width: 56px;
          height: 56px;
          margin-left: -9px;
        }
      }
      & h3 {
        order: 2;
        font-size: 20px;
        font-weight: 600;
        color: #1c1c1c;

        @media screen and (min-width: 768px) {
          order: 0;
          margin: 13px 0 6px;
          font-size: 32px;
        }
      }
      & p {
        margin-right: auto;
        margin-left: 12px;
        font-size: 15px;
        font-weight: 500;
        color: #888e94;

        @media screen and (min-width: 768px) {
          margin: 0;
          font-size: 16px;
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
    padding: 60px 0 0;
    @media screen and (min-width: 768px) {
      padding: 122px 0 96px;
    }

    & > h2 {
      margin-bottom: 72px;
      font-size: 20px;
      font-weight: 700;
      line-height: 28px;
      color: #000000;
      text-align: center;

      @media screen and (min-width: 768px) {
        margin-bottom: 110px;
        font-size: 36px;
        line-height: 56px;
      }
      & > span {
        position: relative;
        & span {
          position: relative;
          z-index: 11;
        }
        & div.bar {
          position: absolute;
          top: 14px;
          left: -5%;
          z-index: 10;
          width: 110%;
          height: 8px;
          background: rgba(255, 109, 58, 0.5);
          border-radius: 30px;
          @media screen and (min-width: 768px) {
            top: 24px;
            height: 15px;
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
          width: 274px;
          height: 274px;
          margin-right: -5px;

          &.beta-exam {
            height: 503px;
          }

          &.exam-icon {
            width: 32px;
            height: 32px;
            margin-left: -10px;
          }
        }
        & > span {
          margin: 8px 0 17px;
          font-size: 16px;
          font-weight: 600;
          line-height: 19px;
          color: #ff6d3a;
          &.is-blue {
            color: #4181f0;
          }
        }

        & > h3 {
          margin: 38px 0 16px;
          font-size: 22px;
          font-weight: 700;
          line-height: 32px;
        }

        & > p {
          margin-bottom: 119px;
          font-size: 14px;
          font-weight: 500;
          line-height: 20px;
          color: #484f54;
        }
      }
      @media screen and (min-width: 768px) {
        flex-direction: row;
        margin-bottom: 162px;
        & > div {
          text-align: left;
          & img {
            display: inline-block;
          }
          & span {
            margin-left: 10px;
            font-size: 22px;
            font-weight: 600;
            line-height: 33px;
            color: #ff6d3a;
            vertical-align: text-bottom;
          }
          & h3 {
            margin: 13px 0 32px;
            font-size: 34px;
            font-weight: 600;
            line-height: 46px;
            color: #000000;
          }
          & p {
            font-size: 18px;
            font-weight: 500;
            line-height: 26px;
            color: #484f54;
          }
          &.job {
            padding: 56px 0;
            margin-left: 100px;
          }
          &.exam {
            padding: 178px 0;
            margin-right: 105px;

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
  padding: 65px 0;
  background: #ffffff;
  @media screen and (min-width: 768px) {
    padding: 137px 0;
    background: url('../../pngs/beta-background2.png') top left no-repeat;
    background-size: cover;
  }
  & > div {
    & h2 {
      font-size: 20px;
      font-weight: 700;
      line-height: 28px;
      color: #000000;
      text-align: center;

      @media screen and (min-width: 768px) {
        font-size: 38px;
        font-weight: 600;
        line-height: 56px;
      }
    }
    & h3 {
      margin: 16px 0 42px;
      font-size: 14px;
      font-weight: 500;
      line-height: 20px;
      color: #484f54;
      text-align: center;

      @media screen and (min-width: 768px) {
        margin: 30px 0 86px;
        font-size: 18px;
        font-weight: 600;
        line-height: 28px;
        color: #000000;
      }
    }
    & > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      & img {
        width: 204px;
        height: 165px;
      }
      & img + img {
        margin-top: 50px;
      }
      @media screen and (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        & img {
          width: 288px;
          height: 233px;
        }
        & img + img {
          margin-top: 0;
        }
      }
    }
  }
`;

const EndSection = styled(MainSection)`
  padding: 64px 0 68px;
  background: #fff3eb;

  @media screen and (min-width: 768px) {
    padding: 126px 0;
    background: url('../../pngs/beta-background3.png') top left no-repeat;
    background-size: cover;
  }

  & > div {
    text-align: center;
    & h2 {
      margin-bottom: 23px;
      font-size: 22px;
      font-weight: 700;
      line-height: 32px;
      color: #000000;
      @media screen and (min-width: 768px) {
        margin-bottom: 52px;
        font-size: 38px;
        font-weight: 600;
        line-height: 56px;
      }
    }
    & button {
      height: 40px;
      font-size: 14px;
      font-weight: 700;
      border-radius: 5px;
      @media screen and (min-width: 768px) {
        height: 64px;
        font-size: 20px;
        border-radius: 8px;
      }
    }
  }
`;

const LinkSection = styled(MainSection)`
  padding: 43px 0;
  background: #ff6d3a;
  @media screen and (min-width: 768px) {
    padding: 54px 0;
  }
  & > div {
    & h2 {
      margin-bottom: 4px;
      font-size: 18px;
      font-weight: 700;
      line-height: 26px;
      color: #ffffff;
      text-align: center;

      @media screen and (min-width: 768px) {
        margin-bottom: 24px;
        font-size: 28px;
        line-height: 40px;
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
        margin-top: 20px;
        cursor: pointer;
        &:first-of-type {
          margin-right: 22px;

          @media screen and (min-width: 768px) {
            margin-right: 20px;
          }
        }
        & > button {
          width: 56px;
          height: 56px;
          margin: auto;
        }

        & > button > img {
          margin: auto;
        }

        & > p {
          margin-top: 5px;
          font-size: 13px;
          font-weight: 400;
          line-height: 18px;
          color: #ffffff;
        }
      }
    }
  }
`;

const FooterSection = styled(MainSection)`
  padding: 108px 20px 42px;

  & > div {
    display: flex;
    justify-content: space-between;
    & a {
      font-size: 14px;
      font-weight: 600;
      line-height: 14px;
      color: #777777;
    }

    & > div {
      display: flex;

      & a + a {
        margin-left: 25px;
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
