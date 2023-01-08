import styled from 'styled-components';

const ArchiveWrapper = styled.section`
  & h1 {
    font-size: 22rem;
    font-weight: 700;
    line-height: 32rem;
    color: ${({ theme }) => theme.white};
  }
  & h2 {
    font-size: 15rem;
    font-weight: 600;
    line-height: 22rem;
    color: ${({ theme }) => theme.white};
  }
  & h3 {
    font-size: 16rem;
    font-weight: 500;
    line-height: 24rem;
    color: ${({ theme }) => theme.gray100};
    opacity: 0.8;
  }
  & p {
    font-size: 14rem;
    font-weight: 500;
    line-height: 20rem;
    color: ${({ theme }) => theme.white};
    opacity: 0.8;
  }
`;

const PrimaryBackgroundSection = styled.section`
  width: 390rem;
  margin-left: -20rem;
  background-color: ${({ theme }) => theme.primary};
  padding: 0 20rem;
`;

const Info = styled.div`
  height: 268rem;
  & > div:first-of-type {
    & > span:first-of-type {
      height: 64rem;
      width: 64rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${({ theme }) => theme.white};
      border-radius: 50%;
      /* 베타이미지 */
      & > span {
        background-color: #b8c6fb;
        border-radius: 50%;
        height: 60rem;
        width: 60rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    display: flex;
    align-items: center;
    & > span:last-of-type {
      margin-left: 22rem;
      & > div {
        display: flex;
        align-items: center;
        & > h3 {
          margin-left: 7rem;
          line-height: 32rem;
        }
      }
    }
  }
  & > div:last-of-type {
    margin-top: 16rem;
    border: 1rem solid rgba(255, 255, 255, 0.4);
    border-radius: 20rem;
    height: 148rem;
    padding: 18rem 20rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    & > span {
      display: flex;
      align-items: center;
      & p {
        margin-left: 8rem;
      }
    }
    & > div {
      display: flex;
      align-items: center;
      & > p {
        color: rgba(255, 255, 255, 0.6);
        margin: 0 8rem;
        line-height: 12rem;
      }
    }
  }
`;

const EtcInfo = styled.div`
  height: 134rem;
  width: 100%;
  padding: 20rem 0 24rem 0;

  & h4 {
    font-size: 16rem;
    font-weight: 700;
    line-height: 24rem;
    color: ${({ theme }) => theme.gray800};
  }
  & p {
    font-size: 14rem;
    font-weight: 400;
    line-height: 20rem;
    color: ${({ theme }) => theme.gray600};
  }
  & > div {
    background-color: #fff4ec;
    border-radius: 20rem;
    padding: 18rem 20rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    text-align: center;
    align-items: center;
    & > span:nth-last-of-type(2n) {
      height: 28rem;
      border-right: 1px solid rgba(255, 109, 58, 0.16);
    }
    & > span {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }
    & > span:nth-of-type(3) {
      width: 84rem;
      height: 50rem;
    }
    & > span:first-of-type {
      width: 73rem;
      height: 50rem;
    }
    & > span:last-of-type {
      width: 73rem;
      height: 50rem;
    }
    & > span > div {
      display: flex;
      justify-content: space-around;
    }
  }
`;

const GrayDiv = styled.div`
  height: 8rem;
  width: 390rem;
  margin-left: -20rem;
  background-color: ${({ theme }) => theme.gray50};
`;

const Note = styled.div`
  margin-top: 24rem;
  & h1 {
    font-size: 20rem;
    font-weight: 700;
    line-height: 28rem;
    color: ${({ theme }) => theme.gray950};
  }
  & p {
    font-size: 14rem;
    font-weight: 500;
    line-height: 20rem;
    color: ${({ theme }) => theme.gray600};
  }
  & > div:first-of-type {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  & > p {
    margin-top: 6rem;
  }
  & > div:last-of-type {
    margin-top: 16rem;
    height: 220rem;
    overflow: auto;
    display: flex;
    & > div:not(:last-of-type) {
      margin-right: 10rem;
    }
    & > span {
      width: 350rem;
      height: 220rem;
      background-color: ${({ theme }) => theme.gray50};
      border: 1rem solid ${({ theme }) => theme.gray100};
      border-radius: 20rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      & h5 {
        font-size: 14rem;
        font-weight: 500;
        line-height: 20rem;
        color: ${({ theme }) => theme.gray600};
      }
      & p {
        font-size: 14rem;
        font-weight: 500;
        line-height: 20rem;
        color: ${({ theme }) => theme.gray500};
        margin-top: 8rem;
      }
    }
  }
`;

const A = {
  ArchiveWrapper,
  PrimaryBackgroundSection,
  Info,
  EtcInfo,
  GrayDiv,
  Note,
};

export default A;
