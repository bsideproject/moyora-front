import React from 'react';
import Image from 'next/image';
import { useToggle } from 'react-use';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js';

import { barOptions, dummyBarChartData, dummyMBTIsData } from '@configs/bigContents';

import Arrow from '@public/svgs/arrow-bottom.svg';
import S from './Statistics.styles';

const MBTIStatistics: React.FC = () => {
  ChartJS.register(BarElement, CategoryScale, LinearScale);
  const [isButtonTest, toggleButtonTest] = useToggle(true);
  return (
    <S.StatisticsCardWrap>
      <h2>내 동창들은 어떤 MBTI가 가장 많을까?</h2>
      <div className="chart-area-bar">
        <Bar data={dummyBarChartData} options={barOptions} />
      </div>
      <S.StatisticsDetailWrap>
        {dummyMBTIsData.map(({ title, value }, index) => {
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

export default MBTIStatistics;
