import React, { FC } from 'react';

import Beta from '@components/Beta/Beta';
import MainPage from '@components/MainPage/MainPage';

import { useMyInfo } from '@APIs/user';

const Home: FC = () => {
  const { data } = useMyInfo();

  return data ? <MainPage /> : <Beta />;
};

export default Home;
