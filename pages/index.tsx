import React, { FC } from 'react';
import { useRouter } from 'next/router';

import TestButton from '@atoms/TestButton';

const Home: FC = () => {
  const router = useRouter();
  return (
    <div>
      <h2
        style={{ fontSize: '32rem', fontWeight: 'bold', textAlign: 'center', marginTop: '30rem' }}
      >
        페이지 이동하기
      </h2>
      <TestButton type="primary" size="large" block onClick={() => router.push('/login')}>
        Log In
      </TestButton>
      <TestButton size="large" block onClick={() => router.push('/mainPage')}>
        Main
      </TestButton>
      <TestButton type="primary" size="large" block onClick={() => router.push('/beta')}>
        베타 출시
      </TestButton>
      <TestButton size="large" block onClick={() => router.push('/statistics')}>
        통계
      </TestButton>
      <TestButton type="primary" size="large" block onClick={() => router.push('/mypage')}>
        마이페이지
      </TestButton>
    </div>
  );
};

export default Home;
