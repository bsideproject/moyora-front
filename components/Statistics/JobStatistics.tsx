import React from 'react';
import Image from 'next/image';
import { useToggle } from 'react-use';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement } from 'chart.js';

import { dummyChartData, dummyJobsData } from '@configs/bigContents';

import Arrow from '@public/svgs/arrow-bottom.svg';
import S from './Statistics.styles';

const JobStatistics: React.FC = () => {
  ChartJS.register(ArcElement);
  const [isButtonTest, toggleButtonTest] = useToggle(true);
  return (
    <S.StatisticsCardWrap>
      <h2>내 동창들은 무슨 일을 하고 있을까?</h2>
      <div className="chart-area">
        <Doughnut data={dummyChartData} />
      </div>
      <S.StatisticsDetailWrap>
        {dummyJobsData.map(({ title, value }, index) => {
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

export default JobStatistics;
