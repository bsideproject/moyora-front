import 'dayjs/locale/ko';

import React, { FC } from 'react';
import dayjs from 'dayjs';

import Beta from '@components/Beta/Beta';
import MainPage from '@components/MainPage/MainPage';

const DDAY = '2023-02-06';
const toDay = dayjs().format('YYYY-MM-DD');

dayjs.locale('ko');

const Home: FC = () => {
  return DDAY >= toDay ? <Beta /> : <MainPage />;
};

export default Home;
