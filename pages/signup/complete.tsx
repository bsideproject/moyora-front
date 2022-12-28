import 'dayjs/locale/ko';

import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import Image from 'next/image';
import { Button } from 'antd';

import LogoHeader from '@components/Common/LogoHeader';

import LinkIcon from '@public/svgs/moyora-icons-link.svg';
import KakaoIcon from '@public/svgs/kakao-icons-sharing.svg';
import ParticleGroup from '@public/svgs/moyora-particles-group.svg';

import S from '@components/Signup/Signup.styles';

dayjs.locale('ko');

const fillZero = (number: number) => {
  return Math.floor(number).toString().padStart(2, '0');
};

const SignUpComplete: React.FC = () => {
  const [counterDay, setCounterDay] = useState('00');
  const [counterHour, setCounterHour] = useState('00');
  const [counterMinute, setCounterMinute] = useState('00');
  const [counterSecond, setCounterSecond] = useState('00');

  useEffect(() => {
    const timer = setInterval(() => {
      const nowDate = dayjs();
      const releaseDate = dayjs('2023-02-06', 'YYYY-MM-DD');
      const timerDate = releaseDate.diff(nowDate, 's');
      const lastDay = fillZero(timerDate / 3600 / 24);
      const lastHour = fillZero((timerDate / 3600) % 24);
      const lastMinutes = fillZero((timerDate / 60) % 60);
      const lastSeconds = fillZero(timerDate % 60);

      setCounterDay(lastDay);
      setCounterHour(lastHour);
      setCounterMinute(lastMinutes);
      setCounterSecond(lastSeconds);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (
    [counterDay, counterHour, counterMinute, counterSecond].every((isLoading) => isLoading === '00')
  )
    return null;

  return (
    <S.SignUpCompleteWrapper>
      <LogoHeader />
      <div>
        <Image src={ParticleGroup} alt="moyora-particle" priority />
        <h3>회원가입이 완료되었어요!</h3>
        <h2>
          <span>{counterDay}</span>일 : <span>{counterHour}</span>시 : <span>{counterMinute}</span>
          분 : <span>{counterSecond}</span>초
        </h2>
        <p>2월 6일에 정식 버전으로 만나요!</p>
        <S.SignupCompleteWrap>
          <p>
            더 많은 동창 친구들이 모일 수 있도록
            <br />
            공유해보세요!
          </p>
          <br />
          <div>
            <div>
              <Button shape="circle">
                <Image src={KakaoIcon} alt="kakao-icon" />
              </Button>
              <p>카카오톡</p>
            </div>
            <div>
              <Button shape="circle">
                <Image src={LinkIcon} alt="link-icon" />
              </Button>
              <p>링크 복사</p>
            </div>
          </div>
        </S.SignupCompleteWrap>
      </div>
    </S.SignUpCompleteWrapper>
  );
};

export default SignUpComplete;
