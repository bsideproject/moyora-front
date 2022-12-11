import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import { Button } from 'antd';
import LogoSmall from '@public/svgs/logos/moyora-logo-small.svg';
import ParticleGroup from '@public/svgs/praticles/moyora-particles-group.svg';
import KakaoIcon from '@public/svgs/icons/kakao-icons-sharing.svg';
import LinkIcon from '@public/svgs/icons/moyora-icons-link.svg';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';

import L from '@components/Login/LoginComplete.styles';

dayjs.locale('ko');

const LoginComplete: React.FC = () => {
  const [diffD, setDiffD] = useState('00');
  const [diffH, setDiffH] = useState('00');
  const [diffM, setDiffM] = useState('00');
  const padNum = (num: number): string => {
    return ('0' + Math.floor(num)).slice(-2);
  };
  const calTimer = () => {
    const open = dayjs('2023-01-29', 'YYYY-MM-DD');
    const now = dayjs();
    const diff = open.diff(now, 'm');
    const d = Math.floor(diff / 60 / 24);
    const h = Math.floor((diff / 60) % 24);
    const m = Math.floor(diff % 60);
    setDiffD(padNum(d));
    setDiffH(padNum(h));
    setDiffM(padNum(m));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      calTimer();
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <L.LoginCompleteWrapper>
      <L.LogoSection>
        <Image src={LogoSmall} alt="moyora-logo" />
      </L.LogoSection>
      <div>
        <Image src={ParticleGroup} alt="moyora-particle" />
        <h3>회원가입이 완료되었어요!</h3>
        <h2>{`${diffD}일 : ${diffH}시 : ${diffM}분`}</h2>
        <p>1월 29일에 정식 버전으로 만나요!</p>
        <L.shareSection>
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
        </L.shareSection>
      </div>
    </L.LoginCompleteWrapper>
  );
};

export default LoginComplete;
