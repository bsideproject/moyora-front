import 'dayjs/locale/ko';

import React from 'react';
import Image from 'next/image';
import { Button } from 'antd';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';

import LogoHeader from '@components/Common/LogoHeader';

import ParticleGroup from '@public/svgs/moyora-particles-group.svg';

import S from '@components/Signup/Signup.styles';

const SignUpComplete: React.FC = () => {
  const router = useRouter();

  const onClickRoute = () => router.replace('/');

  return (
    <S.SignUpCompleteWrapper>
      <LogoHeader />
      <div>
        <Image src={ParticleGroup} alt="moyora-particle" priority />
        <h3 className="open">회원가입이 완료되었어요!</h3>
        <>
          <p>
            우리 학교 동창들은 얼마나 모였는지
            <br />
            지금 바로 우리 학교 공간에서 확인해 보세요!
          </p>
          <Button block type="primary" onClick={onClickRoute}>
            우리 학교로 이동하기
          </Button>
        </>
      </div>
    </S.SignUpCompleteWrapper>
  );
};

export default SignUpComplete;

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  if (!req.headers.referer) {
    res.statusCode = 302;
    res.setHeader('Location', `/login`);
    res.end();
  }
  return { props: {} };
};
