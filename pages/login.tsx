import React from 'react';
import Image from 'next/image';

import Logo from '@public/svgs/logos/moyora-logo.svg';
import KakaoLogo from '@public/svgs/logos/kakao-logo.svg';

import L from '@components/Login/Login.styles';

const Login: React.FC = () => {
  return (
    <L.LoginWrapper>
      <Image src={Logo} alt="moyora-logo" />
      <div>
        <h3>반가워요!</h3>
        <p>
          궁금했던 동창 정보를 한눈에
          <br />
          지금 모여라에서 확인하세요.
        </p>
      </div>
      <L.KakaoLogin>
        <span>
          <Image src={KakaoLogo} alt="kakao-logo" />
          카카오로 시작하기
        </span>
      </L.KakaoLogin>
    </L.LoginWrapper>
  );
};

export default Login;
