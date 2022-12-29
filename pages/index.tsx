import React, { FC } from 'react';
import { useRouter } from 'next/router';

import CommonButton from '@atoms/CommonButton';

const Home: FC = () => {
  const router = useRouter();
  return (
    <div>
      <h2
        style={{ fontSize: '32rem', fontWeight: 'bold', textAlign: 'center', marginTop: '30rem' }}
      >
        페이지 이동하기
      </h2>
      <CommonButton type="primary" size="large" block onClick={() => router.push('/login')}>
        Log In
      </CommonButton>
      <CommonButton size="large" block onClick={() => router.push('/mainPage')}>
        Main
      </CommonButton>
      <CommonButton type="primary" size="large" block onClick={() => router.push('/beta')}>
        베타 출시
      </CommonButton>
    </div>
  );
};

export default Home;
