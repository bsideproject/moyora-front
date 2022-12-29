import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    div.container{
        @media screen and (min-width: 768px) {
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
    }
`;

const MainSection = styled.section`
  & > div {
    max-width: 920rem;
    margin: 0 auto;
  }
`;

const BannerSection = styled(MainSection)`
  background-color: #fff3eb;
  & > div {
    padding: 38rem 0 149rem;

    & > div {
      display: flex;
      margin-top: 105rem;

      & > div {
        margin-right: 48rem;

        & h4 {
          font-size: 16rem;
          font-weight: 700;
          line-height: 52rem;
          color: #ff6d3a;
        }
        & h3 {
          font-size: 40rem;
          font-weight: 700;
          line-height: 56rem;
          color: #1c1c1c;
        }
        & h2 {
          margin: 47rem 0 52rem;
          font-size: 38rem;
          font-weight: 500;
          line-height: 38rem;
          & span {
            display: inline-block;
            width: 48rem;
          }
        }
        & p {
          margin-bottom: 20rem;
          font-size: 16rem;
          font-weight: 400;
          line-height: 19rem;
          color: #1c1c1c;
        }
        & button {
          height: 64rem;
          border-radius: 8rem;
        }
      }
    }
  }
`;

const NumberSection = styled(MainSection)`
  & > div {
    display: flex;
    justify-content: space-between;
    width: 696rem;
    padding: 44rem 0;

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
