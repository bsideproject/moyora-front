import 'dayjs/locale/ko';

import React, { FC } from 'react';
import { useRouter } from 'next/router';
import dayjs from 'dayjs';

import TestButton from '@atoms/TestButton';

import Beta from '@components/Beta/Beta';
import MainPage from '@components/MainPage/MainPage';

const DDAY = '2023-02-06';
const toDay = dayjs().format('YYYY-MM-DD');

dayjs.locale('ko');

const Home: FC = () => {
  const router = useRouter();
  if (true) {
    return (
      <div>
        <h2
          style={{ fontSize: '32px', fontWeight: 'bold', textAlign: 'center', marginTop: '30px' }}
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
  }
  return DDAY >= toDay ? <Beta /> : <MainPage />;
};

export default Home;
