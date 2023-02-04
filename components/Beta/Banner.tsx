import 'dayjs/locale/ko';

import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import Image from 'next/image';
import { Button } from 'antd';

import fillZero from '@utils/fillZero';
import betaImages from '@configs/betaImages';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import B from './Beta.styles';

dayjs.locale('ko');
dayjs.extend(isSameOrAfter);

interface IProps {
  onClick: () => void;
}

const Banner: React.FC<IProps> = ({ onClick }) => {
  const [counterDay, setCounterDay] = useState('00');
  const [counterHour, setCounterHour] = useState('00');
  const [counterMinute, setCounterMinute] = useState('00');
  const [counterSecond, setCounterSecond] = useState('00');
  const [release, setRelease] = useState(dayjs().isSameOrAfter('2023-02-08 00:00:00'));
  useEffect(() => {
    const timer = setInterval(() => {
      const nowDate = dayjs();
      const releaseDate = dayjs('2023-02-08', 'YYYY-MM-DD');
      const timerDate = releaseDate.diff(nowDate, 's');
      const lastDay = fillZero(timerDate / 3600 / 24);
      const lastHour = fillZero((timerDate / 3600) % 24);
      const lastMinutes = fillZero((timerDate / 60) % 60);
      const lastSeconds = fillZero(timerDate % 60);

      setCounterDay(lastDay);
      setCounterHour(lastHour);
      setCounterMinute(lastMinutes);
      setCounterSecond(lastSeconds);
      if (!release) {
        setRelease(dayjs().isSameOrAfter('2023-02-08 00:00:00'));
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <B.BannerSection>
      <div>
        <Image src={betaImages.MoyoraLogo} alt="moyora-logo" />
        <div>
          <div>
            <h4>우리 학교 온라인 동창회, 모여라</h4>
            {release ? (
              <>
                <div className="prodBanner">
                  <h3>
                    초등학교 온라인 동창회 서비스
                    <br />
                    우리 학교 여기여기 <b>모여라</b>
                  </h3>
                  <p>간단한 가입으로 우리 학교 온라인 동창회를 참여해 보세요.</p>
                  <Button type="primary" onClick={onClick}>
                    모여라 시작하기
                  </Button>
                </div>
              </>
            ) : (
              <>
                <h3>
                  2023년 2월 8일 수요일
                  <br />
                  전국민 초등학교
                  <br />
                  <b>온라인 동창회</b>가 열립니다!
                </h3>
                <h2>
                  <span>{counterDay}</span>일 : <span>{counterHour}</span>시 :&nbsp;
                  <span>{counterMinute}</span>분 : <span>{counterSecond}</span>초
                </h2>
                <p>
                  학교 정보를 입력하고 <br className="mobile" />
                  동창회까지 친구들이 모이기를 기다려보세요!
                </p>
                <Button type="primary" onClick={onClick}>
                  우리 학교 동창회 참여하기
                </Button>
              </>
            )}
          </div>
          <Image src={betaImages.BetaMain} alt="beta-main" />
        </div>
      </div>
    </B.BannerSection>
  );
};

export default Banner;
