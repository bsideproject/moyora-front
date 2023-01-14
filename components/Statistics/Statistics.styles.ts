import { Button } from 'antd';
import styled from 'styled-components';

const chartColors = ['#FF6D3A', '#4181F0', '#F4B95C', '#71BA9D', '#B8C6FB'];

const StatisticsCardWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0 40px;
  border-bottom: 8px solid ${({ theme }) => theme.gray50};

  & h2 {
    width: 100%;
    margin-bottom: 20px;
    font-size: 18px;
    font-weight: 700;
    line-height: 26px;
    color: #1f2022;
  }

  & > div.chart-area {
    width: 160px;
    height: 160px;
  }
  & > div.chart-area-bar {
    width: 100%;
    height: 24px;
    text-align: center;

    & > canvas {
      position: relative;
      width: calc(100% - 22px) !important;
      height: 24px !important;
      margin: 0 auto;
      border-radius: 40px;
    }
  }

  & > button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    font-size: 14px;
    font-weight: 600;

    color: ${({ theme }) => theme.gray650};

    border-radius: 4px;

    & img {
      display: inline-block;
      margin-left: 2px;
    }
  }
`;

const StatisticsDetailWrap = styled.div`
  width: 100%;
  margin: 16px 0 20px;
`;

const StatisticsDetailCard = styled.div<{ colorIndex: number }>`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 12px;

  & span.chart-color {
    display: inline-block;
    width: 8px;
    height: 8px;
    margin-right: 12px;

    background-color: ${({ colorIndex }) =>
      colorIndex <= 3 ? chartColors[colorIndex] : chartColors[4]};

    border-radius: 4px;
  }
  & h4 {
    display: inline-block;
  }
`;

const MoreStatisticsButton = styled(Button)<{ isToggle?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  font-size: 14px;
  font-weight: 600;

  color: ${({ theme }) => theme.gray650} !important;
  border-color: ${({ theme }) => theme.gray400} !important;

  border-radius: 4px;

  & img {
    display: inline-block;
    margin-left: 2px;
    rotate: ${({ isToggle }) => (isToggle ? 0 : 180)}deg;
  }
`;

const S = { StatisticsCardWrap, StatisticsDetailWrap, StatisticsDetailCard, MoreStatisticsButton };

export default S;
