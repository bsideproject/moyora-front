import React from 'react';
import Image from 'next/image';
import { useToggle } from 'react-use';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement } from 'chart.js';

import Arrow from '@public/svgs/arrow-bottom.svg';
import S from './Statistics.styles';
import { useGetJob } from '@APIs/statistics';
import { useMyInfo } from '@APIs/user';

const JobStatistics: React.FC = () => {
  ChartJS.register(ArcElement);
  const { data: me } = useMyInfo();
  const { data: job } = useGetJob('' + me?.schoolId, { enabled: Boolean(me) });
  const [isButtonTest, toggleButtonTest] = useToggle(true);
  const chartData = {
    datasets: [
      {
        data: job?.chart,
        backgroundColor: ['#FF6D3A', '#4181F0', '#F4B95C', '#71BA9D', '#B8C6FB'],
        borderWidth: 1,
      },
    ],
  };
  return (
    <S.StatisticsCardWrap>
      <h2>내 동창들은 무슨 일을 하고 있을까?</h2>
      <div className="chart-area">
        <Doughnut data={chartData} />
      </div>
      <S.StatisticsDetailWrap>
        {job?.data.map(({ title, value }, index) => {
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
        직업 통계 {isButtonTest ? '더보기' : '접기'}
        <Image src={Arrow} alt="arrow" />
      </S.MoreStatisticsButton>
    </S.StatisticsCardWrap>
  );
};

export default JobStatistics;
