import { Button } from 'antd';
import styled from 'styled-components';

const chartColors = ['#FF6D3A', '#4181F0', '#F4B95C', '#71BA9D', '#B8C6FB'];

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
  & > div.chart-area-bar {
    width: 100%;
    height: 24rem;
    text-align: center;

    & > canvas {
      position: relative;
      width: calc(100% - 22rem) !important;
      height: 24rem !important;
      margin: 0 auto;
      border-radius: 40rem;
    }
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
`;

const StatisticsDetailCard = styled.div<{ colorIndex: number }>`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 12rem;

  & span.chart-color {
    display: inline-block;
    width: 8rem;
    height: 8rem;
    margin-right: 12rem;

    background-color: ${({ colorIndex }) =>
      colorIndex <= 3 ? chartColors[colorIndex] : chartColors[4]};

    border-radius: 4rem;
  }
  & h4 {
    display: inline-block;
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

const S = { StatisticsCardWrap, StatisticsDetailWrap, StatisticsDetailCard, MoreStatisticsButton };

export default S;
