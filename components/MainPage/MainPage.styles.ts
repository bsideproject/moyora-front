import styled from 'styled-components';

const MainPageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  & h1 {
    display: inline;
    font-size: 20px;
    font-weight: 700;
    line-height: 28px;
    color: ${({ theme }) => theme.gray900};
  }
  & h2 {
    display: inline;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    color: ${({ theme }) => theme.primary};
  }
  & h3 {
    display: inline;
  }
  & p {
    display: inline;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    color: ${({ theme }) => theme.gray600};
  }
`;

const mySchoolSection = styled.div`
  width: 100%;
  height: 94px;
  margin: 20px 0;
  & > p {
    font-size: 13px;
    font-weight: 400;
    line-height: 18px;
    color: ${({ theme }) => theme.gray500};
  }
  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 58px;
    margin-top: 12px;
    border: 1px solid ${({ theme }) => theme.gray200};
    border-radius: 12px;
    & h1 {
      margin-right: 8px;
      font-size: 18px;
      font-weight: 700;
      line-height: 26px;
      color: ${({ theme }) => theme.gray800};
    }
    & p {
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      color: ${({ theme }) => theme.gray600};
    }
    & div:not(:last-of-type) {
      margin-right: 20px;
    }
    & div:nth-last-of-type(2n) {
      height: 16px;
      border-right: 1px solid ${({ theme }) => theme.gray200};
    }
  }
`;

const contentTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0 16px 0;
`;

const content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px 20px;
  & section {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 54px;
    height: 24px;
    padding: 4px 8px;
    background-color: ${({ theme }) => theme.gray50};
    border-radius: 20px;
    & h3 {
      font-size: 12px;
      font-weight: 600;
      line-height: 16px;
      color: ${({ theme }) => theme.gray800};
    }
  }
  & svg {
    display: inline;
  }
  & p {
    margin: auto 0;
    text-align: center;
  }
`;

const ourSchoolStatisticsSection = styled.div`
  width: 100%;
  height: 236px;
  & > div:last-of-type {
    width: 100%;
    height: 144px;
    background-color: #fff4ec;
    border-radius: 20px;
  }
`;

const ourSchoolGuestBookSection = styled.div`
  width: 100%;
`;

const GuestBook = styled.div`
  display: flex;
  flex-direction: row;
  height: 200px;
  margin-top: 24px;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  & > div:not(:last-of-type) {
    margin-right: 8px;
  }
  & > span {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 350px;
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
`;

const M = {
  MainPageWrapper,
  mySchoolSection,
  ourSchoolStatisticsSection,
  contentTitle,
  content,
  ourSchoolGuestBookSection,
  GuestBook,
};

export default M;
