import React from 'react';
import Image from 'next/image';
import { useToggle } from 'react-use';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement } from 'chart.js';

import Arrow from '@public/svgs/arrow-bottom.svg';
import S from './Statistics.styles';
import { useMyInfo } from '@APIs/user';
import { useGetRegion } from '@APIs/statistics';

const LocationStatistics: React.FC = () => {
  ChartJS.register(ArcElement);
  const { data: me } = useMyInfo();
  const { data: region } = useGetRegion('' + me?.schoolId, { enabled: Boolean(me) });
  const [isButtonTest, toggleButtonTest] = useToggle(true);
  const chartData = {
    datasets: [
      {
        data: region?.chart,
        backgroundColor: ['#FF6D3A', '#4181F0', '#F4B95C', '#71BA9D', '#B8C6FB'],
        borderWidth: 1,
      },
    ],
  };
  return (
    <S.StatisticsCardWrap>
      <h2>내 동창들은 어느 지역에 많을까?</h2>
      <div className="chart-area">
        <Pie data={chartData} />
      </div>
      <S.StatisticsDetailWrap>
        {region?.data.map(({ title, value }, index) => {
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
      <S.MoreStatisticsButton block onClick={toggleButtonTest} toggle={isButtonTest.toString()}>
        지역 통계 {isButtonTest ? '더보기' : '접기'}
        <Image src={Arrow} alt="arrow" />
      </S.MoreStatisticsButton>
    </S.StatisticsCardWrap>
  );
};

export default LocationStatistics;
