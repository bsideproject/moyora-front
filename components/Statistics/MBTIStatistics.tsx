import React from 'react';
import Image from 'next/image';
import { useToggle } from 'react-use';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js';
import { Button } from 'antd';
import { barOptions, dummyBarChartData, dummyMBTIsData } from '@configs/bigContents';
import { useMyInfo } from '@APIs/user';
import Arrow from '@public/svgs/arrow-bottom.svg';
import S from './Statistics.styles';
import { useRouter } from 'next/router';

const MBTIStatistics: React.FC = () => {
  const router = useRouter();
  ChartJS.register(BarElement, CategoryScale, LinearScale);
  const [isButtonTest, toggleButtonTest] = useToggle(true);
  const { data, isLoading } = useMyInfo();
  console.log(data);
  const onClick = () => {
    router.replace('/mypage/edit-profile', '', { shallow: true });
  };
  return (
    <S.StatisticsCardWrap>
      {data?.mbti && !isLoading ? (
        <>
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
          <S.MoreStatisticsButton block onClick={toggleButtonTest} toggle={isButtonTest.toString()}>
            MBTI 통계 {isButtonTest ? '더보기' : '접기'}
            <Image src={Arrow} alt="arrow" />
          </S.MoreStatisticsButton>
        </>
      ) : (
        <div className="empty">
          <h2>내 동창들의 MBTI가 궁금하다면?</h2>
          <Button type="primary" onClick={onClick}>
            MBTI 입력하기
          </Button>
        </div>
      )}
    </S.StatisticsCardWrap>
  );
};

export default MBTIStatistics;
