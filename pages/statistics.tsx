import S from '@components/Statistics/Statistics.styles';
import LogoHeader from '@components/Common/LogoHeader';
import React from 'react';
import Image from 'next/image';
import Arrow from '@public/svgs/arrow-bottom.svg';
import { useToggle } from 'react-use';
import { Chart as ChartJS, ArcElement } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement);

export const data = {
  datasets: [
    {
      data: [19, 12, 5, 3, 2],
      backgroundColor: ['#FF6D3A', '#4181F0', '#F4B95C', '#71BA9D', '#B8C6FB'],
      borderWidth: 1,
    },
  ],
};

const Statistics: React.FC = () => {
  const [isButtonTest, toggleButtonTest] = useToggle(true);
  return (
    <div>
      <LogoHeader headerIcons={true} />
      <S.StatisticsCardWrap>
        <h2>내 동창들은 무슨 일을 하고 있을까?</h2>
        <div className="chart-area">
          <Doughnut data={data} />
        </div>
        <S.StatisticsDetailWrap>
          <div>
            <div>
              <span className="chart-color" />
              <h4>마케팅/광고/홍보</h4>
            </div>
            <p>50%</p>
          </div>
          <div>
            <div>
              <span className="chart-color" />
              <h4>디자인</h4>
            </div>
            <p>38%</p>
          </div>
          <div>
            <div>
              <span className="chart-color" />
              <h4>교육</h4>
            </div>
            <p>20%</p>
          </div>
          <div>
            <div>
              <span className="chart-color" />
              <h4>무역 유통</h4>
            </div>
            <p>18%</p>
          </div>
        </S.StatisticsDetailWrap>
        <S.MoreStatisticsButton block onClick={toggleButtonTest} isToggle={isButtonTest}>
          직업 통계 {isButtonTest ? '더보기' : '접기'}
          <Image src={Arrow} alt="arrow" />
        </S.MoreStatisticsButton>
      </S.StatisticsCardWrap>
    </div>
  );
};

export default Statistics;
