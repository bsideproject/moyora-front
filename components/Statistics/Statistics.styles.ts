import { Button } from 'antd';
import styled from 'styled-components';

const StatisticsCardWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20rem 0 40rem;
  border-bottom: 8rem solid ${({ theme }) => theme.gray50};

  & h2 {
    width: 100%;
    margin-bottom: 20rem;
    font-size: 18rem;
    font-weight: 700;
    line-height: 26rem;
    color: #1f2022;
  }

  & > div.chart-area {
    width: 160rem;
    height: 160rem;
  }

  & > button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40rem;
    font-size: 14rem;
    font-weight: 600;

    color: ${({ theme }) => theme.gray650};

    border-radius: 4rem;

    & img {
      display: inline-block;
      margin-left: 2rem;
    }
  }
`;

const StatisticsDetailWrap = styled.div`
  width: 100%;
  margin: 16rem 0 20rem;
  & > div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 12rem;

    & span.chart-color {
      display: inline-block;
      width: 8rem;
      height: 8rem;
      margin-right: 12rem;

      background-color: ${({ theme }) => theme.primary};

      border-radius: 4rem;
    }
    & h4 {
      display: inline-block;
    }
  }
`;

const MoreStatisticsButton = styled(Button)<{ isToggle?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40rem;
  font-size: 14rem;
  font-weight: 600;

  color: ${({ theme }) => theme.gray650} !important;
  border-color: ${({ theme }) => theme.gray400} !important;

  border-radius: 4rem;

  & img {
    display: inline-block;
    margin-left: 2rem;
    rotate: ${({ isToggle }) => (isToggle ? 0 : 180)}deg;
  }
`;

const S = { StatisticsCardWrap, StatisticsDetailWrap, MoreStatisticsButton };

export default S;
