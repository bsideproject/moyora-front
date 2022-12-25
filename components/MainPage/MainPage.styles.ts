import styled from 'styled-components';

import 'swiper/css';
// import "swiper/css/free-mode";
import 'swiper/css/bundle';

const MainPageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  & h1 {
    display: inline;
    font-size: 20rem;
    font-weight: 700;
    line-height: 28rem;
    color: ${({ theme }) => theme.gray900};
  }
  & h2 {
    display: inline;
    font-size: 16rem;
    font-weight: 700;
    line-height: 24rem;
    color: ${({ theme }) => theme.primary};
  }
  & h3 {
    display: inline;
  }
  & p {
    display: inline;
    font-size: 14rem;
    font-weight: 500;
    line-height: 20rem;
    color: ${({ theme }) => theme.gray600};
  }
`;

const logoSectionButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 104rem;
`;

const mySchoolSection = styled.div`
  width: 100%;
  height: 94rem;
  margin: 20rem 0;
  & > p {
    font-size: 13rem;
    font-weight: 400;
    line-height: 18rem;
    color: ${({ theme }) => theme.gray500};
  }
  & > div {
    width: 100%;
    height: 58rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1rem solid ${({ theme }) => theme.gray200};
    border-radius: 12rem;
    margin-top: 12rem;
    & h1 {
      font-weight: 700;
      font-size: 18rem;
      line-height: 26rem;
      margin-right: 8rem;
      color: ${({ theme }) => theme.gray800};
    }
    & p {
      font-weight: 400;
      font-size: 14rem;
      line-height: 20rem;
      color: ${({ theme }) => theme.gray600};
    }
    & div:not(:last-of-type) {
      margin-right: 20rem;
    }
    & div:nth-last-of-type(2n) {
      height: 16rem;
      border-right: 1rem solid ${({ theme }) => theme.gray200};
    }
  }
`;

const contentTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20rem 0 16rem 0;
`;

const content = styled.div`
  padding: 16rem 20rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & section {
    background-color: ${({ theme }) => theme.gray50};
    width: 54rem;
    height: 24rem;
    border-radius: 20rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 4rem 8rem;
    & h3 {
      font-size: 12rem;
      font-weight: 600;
      line-height: 16rem;
      color: ${({ theme }) => theme.gray800};
    }
  }
  & svg {
    display: inline;
  }
  & p {
    vertical-align: center;
  }
`;

const ourSchoolStatisticsSection = styled.div`
  width: 100%;
  height: 236rem;
  & > div:last-of-type {
    width: 100%;
    height: 144rem;
    background-color: #fff4ec;
    border-radius: 20rem;
  }
`;

const ourSchoolGuestBookSection = styled.div`
  width: 100%;
  height: 284rem;
  overflow: hidden;
  .swiper-wrapper {
    display: flex;
    margin-top: 16rem;
  }
  & > div:last-of-type:not(.swiper) {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 200rem;
    background-color: ${({ theme }) => theme.gray50};
    border: 1rem solid ${({ theme }) => theme.gray100};
    border-radius: 20rem;
    & h4 {
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
    }
  }
`;

const M = {
  MainPageWrapper,
  logoSectionButton,
  mySchoolSection,
  ourSchoolStatisticsSection,
  contentTitle,
  content,
  ourSchoolGuestBookSection,
};

export default M;
