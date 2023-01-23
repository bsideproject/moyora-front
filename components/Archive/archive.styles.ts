import styled from 'styled-components';

const ArchiveWrapper = styled.section`
  & h1 {
    font-size: 22px;
    font-weight: 700;
    line-height: 32px;
    color: ${({ theme }) => theme.white};
  }
  & h2 {
    font-size: 15px;
    font-weight: 600;
    line-height: 22px;
    color: ${({ theme }) => theme.white};
  }
  & h3 {
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    color: ${({ theme }) => theme.gray100};
    opacity: 0.8;
  }
  & p {
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    color: ${({ theme }) => theme.white};
    opacity: 0.8;
  }
`;

const PrimaryBackgroundSection = styled.section`
  width: 390px;
  padding: 0 20px;
  margin-left: -20px;
  background-color: ${({ theme }) => theme.primary};
`;

const Info = styled.div`
  height: 268px;
  & > div:first-of-type {
    padding-top: 20px;
    & > span:first-of-type {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 64px;
      height: 64px;
      background-color: ${({ theme }) => theme.white};
      border-radius: 50%;
      /* 베타이미지 */
      & > span {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 60px;
        height: 60px;
        background-color: #b8c6fb;
        border-radius: 50%;
      }
    }
    display: flex;
    align-items: center;
    & > span:last-of-type {
      margin-left: 22px;
      & > div {
        display: flex;
        align-items: center;
        & > h3 {
          margin-left: 7px;
          line-height: 32px;
        }
      }
    }
  }
  & > div:last-of-type {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 148px;
    padding: 18px 20px;
    margin-top: 16px;
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: 20px;
    & > span {
      display: flex;
      align-items: center;
      & p {
        margin-left: 8px;
      }
    }
    & > div {
      display: flex;
      align-items: center;
      & > p {
        margin: 0 8px;
        line-height: 12px;
        color: rgba(255, 255, 255, 0.6);
      }
    }
  }
`;

const EtcInfo = styled.div`
  margin: 20px auto;
  padding: 20px 0 24px 0;
  width: 350px;
  height: 86px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 18px 20px;
  text-align: center;
  background-color: #fff4ec;
  border-radius: 20px;
  & > div {
    width: 73px;
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
  }
  & > div > div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 84px;
    height: 28px;
  }
  & > span {
    height: 28px;
    width: 1px;
    background-color: rgba(255, 109, 58, 0.16);
  }
  & h4 {
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    color: ${({ theme }) => theme.gray800};
  }
  & p {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: ${({ theme }) => theme.gray600};
  }
`;

const GrayDiv = styled.div`
  width: 390px;
  height: 8px;
  margin-left: -20px;
  background-color: ${({ theme }) => theme.gray50};
`;

const Note = styled.div`
  margin-top: 24px;

  & > div:first-of-type {
    display: flex;
    align-items: center;
    justify-content: space-between;
    & h1 {
      font-size: 20px;
      font-weight: 700;
      line-height: 28px;
      color: ${({ theme }) => theme.gray950};
    }
    & p {
      font-size: 14px;
      font-weight: 500;
      line-height: 20px;
      color: ${({ theme }) => theme.gray600};
    }
  }
  & > p {
    margin-top: 6px;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    color: ${({ theme }) => theme.gray600};
  }
  & > div:last-of-type {
    display: flex;
    height: 220px;
    margin-top: 16px;
    overflow: auto;
    & > div:not(:last-of-type) {
      margin-right: 10px;
    }
    & > span {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 350px;
      height: 220px;
      background-color: ${({ theme }) => theme.gray50};
      border: 1px solid ${({ theme }) => theme.gray100};
      border-radius: 20px;
      & h5 {
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
        color: ${({ theme }) => theme.gray600};
      }
      & p {
        margin-top: 8px;
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
        color: ${({ theme }) => theme.gray500};
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
