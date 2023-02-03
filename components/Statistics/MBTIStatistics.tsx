import React from 'react';
import Image from 'next/image';
import { useToggle } from 'react-use';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js';

import { barOptions } from '@configs/bigContents';

import Arrow from '@public/svgs/arrow-bottom.svg';
import S from './Statistics.styles';
import { useMyInfo } from '@APIs/user';
import { useGetMbti } from '@APIs/statistics';

const MBTIStatistics: React.FC = () => {
  ChartJS.register(BarElement, CategoryScale, LinearScale);
  const { data: me } = useMyInfo();
  const { data: mbti } = useGetMbti('' + me?.schoolId, { enabled: Boolean(me) });
  const [isButtonTest, toggleButtonTest] = useToggle(true);
  const barChartData = {
    labels: [''],
    datasets: [
      {
        data: [mbti?.chart[0]],
        backgroundColor: '#FF6D3A',
        borderRadius: 50,
      },
      {
        data: [mbti?.chart[1] ?? 0],
        backgroundColor: '#4181F0',
      },
      {
        data: [mbti?.chart[2] ?? 0],
        backgroundColor: '#F4B95C',
      },
      {
        data: [mbti?.chart[3] ?? 0],
        backgroundColor: '#71BA9D',
      },
      {
        data: [mbti?.chart[4] ?? 0],
        backgroundColor: '#B8C6FB',
        borderRadius: 50,
      },
    ],
  };
  if (!mbti?.data.length) return <></>;
  return (
    <S.StatisticsCardWrap>
      <h2>내 동창들은 어떤 MBTI가 가장 많을까?</h2>
      <div className="chart-area-bar">
        <Bar data={barChartData} options={barOptions} />
      </div>
      <S.StatisticsDetailWrap>
        {mbti?.data.map(({ title, value }, index) => {
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
