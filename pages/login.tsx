import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import Logo from '@public/svgs/moyora-logo.svg';
import KakaoLogo from '@public/svgs/kakao-logo.svg';

import L from '@components/Login/Login.styles';

const Login: React.FC = () => {
  const router = useRouter();
  const onClickLogin = () => {
    router.replace('/signup/1');
  };
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
      <L.KakaoLogin onClick={onClickLogin}>
        <span>
          <Image src={KakaoLogo} alt="kakao-logo" />
          카카오로 시작하기
        </span>
      </L.KakaoLogin>
    </L.LoginWrapper>
  );
};

export default Login;
