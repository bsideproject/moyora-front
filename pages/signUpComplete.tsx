import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import { Button } from 'antd';
import LogoSmall from '@public/svgs/logos/moyora-logo-small.svg';
import ParticleGroup from '@public/svgs/praticles/moyora-particles-group.svg';
import KakaoIcon from '@public/svgs/icons/kakao-icons-sharing.svg';
import LinkIcon from '@public/svgs/icons/moyora-icons-link.svg';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';

import S from '@components/SignUp/SignUpComplete.styles';

dayjs.locale('ko');

const SignUpComplete: React.FC = () => {
  const lpadZero = (num: number) => {
    return Math.floor(num).toString().padStart(2, '0');
  };

  const releaseDate = dayjs('2023-01-29', 'YYYY-MM-DD');
  let nowDate = dayjs();
  let diffDate = releaseDate.diff(nowDate, 'm');
  let diffDay = lpadZero(diffDate / 60 / 24);
  let diffHour = lpadZero((diffDate / 60) % 24);
  let diffMinute = lpadZero(diffDate % 60);

  const [releaseDay, setReleaseDay] = useState(diffDay);
  const [releaseHour, setReleaseHour] = useState(diffHour);
  const [releaseMinute, setReleaseMinute] = useState(diffMinute);

  const calculateDate = () => {
    nowDate = dayjs();
    diffDate = releaseDate.diff(nowDate, 'm');
    diffDay = lpadZero(diffDate / 60 / 24);
    diffHour = lpadZero((diffDate / 60) % 24);
    diffMinute = lpadZero(diffDate % 60);

    setReleaseDay(diffDay);
    setReleaseHour(diffHour);
    setReleaseMinute(diffMinute);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      calculateDate();
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <S.SignUpCompleteWrapper>
      <S.LogoSection>
        <Image src={LogoSmall} alt="moyora-logo" />
      </S.LogoSection>
      <div>
        <Image src={ParticleGroup} alt="moyora-particle" />
        <h3>회원가입이 완료되었어요!</h3>
        <h2>{`${releaseDay}일 : ${releaseHour}시 : ${releaseMinute}분`}</h2>
        <p>1월 29일에 정식 버전으로 만나요!</p>
        <S.shareSection>
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
        </S.shareSection>
      </div>
    </S.SignUpCompleteWrapper>
  );
};

export default SignUpComplete;
