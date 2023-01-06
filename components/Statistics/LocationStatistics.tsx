import React from 'react';
import Image from 'next/image';
import { useToggle } from 'react-use';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement } from 'chart.js';

import { dummyChartData, dummyLocationsData } from '@configs/bigContents';

import Arrow from '@public/svgs/arrow-bottom.svg';
import S from './Statistics.styles';

const LocationStatistics: React.FC = () => {
  ChartJS.register(ArcElement);
  const [isButtonTest, toggleButtonTest] = useToggle(true);
  return (
    <S.StatisticsCardWrap>
      <h2>내 동창들은 어느 지역에 많을까?</h2>
      <div className="chart-area">
        <Pie data={dummyChartData} />
      </div>
      <S.StatisticsDetailWrap>
        {dummyLocationsData.map(({ title, value }, index) => {
          if (index > 3 && isButtonTest) return;
          return (
            <S.StatisticsDetailCard key={index.toString()} colorIndex={index}>
              <div>
                <span className="chart-color" />
                <h4>{title}</h4>
              </div>
              <p>{value}%</p>
            </S.StatisticsDetailCard>
          );
        })}
      </S.StatisticsDetailWrap>
      <S.MoreStatisticsButton block onClick={toggleButtonTest} isToggle={isButtonTest}>
        직업 통계 {isButtonTest ? '더보기' : '접기'}
        <Image src={Arrow} alt="arrow" />
      </S.MoreStatisticsButton>
    </S.StatisticsCardWrap>
  );
};

export default LocationStatistics;
