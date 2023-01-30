import 'dayjs/locale/ko';

import React, { FC } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';
import { GetServerSideProps } from 'next';
import { dehydrate, QueryClient } from '@tanstack/react-query';

import Beta from '@components/Beta/Beta';
import MainPage from '@components/MainPage/MainPage';
import { useMyInfo } from '@APIs/user';

const baseURL =
  process.env.NODE_ENV !== 'production'
    ? process.env.NEXT_PUBLIC_SERVER_DEV_URL
    : process.env.NEXT_PUBLIC_SERVER_URL;

const DDAY = '2023-02-08';
const toDay = dayjs().format('YYYY-MM-DD');

dayjs.locale('ko');

const Home: FC = () => {
  const { data } = useMyInfo();
  return DDAY >= toDay || (DDAY < toDay && !data) ? <Beta /> : <MainPage />;
};

export default Home;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  try {
    const queryClient = new QueryClient();
    const moyoraCookie = req?.cookies?.moyora || '';
    if (!moyoraCookie) return { props: {} };
    else {
      const queryKey = `${baseURL}/user/myinfo`;
      const getMyInfo = () =>
        axios
          .get(queryKey, {
            headers: { Authorization: `Bearer ${moyoraCookie}` },
          })
          .then((res) => res.data);
      if (getMyInfo) {
        await queryClient.prefetchQuery(['/user/myinfo'], getMyInfo);
        return {
          props: {
            dehydratedState: dehydrate(queryClient),
          },
        };
      } else throw new Error('Not Login');
    }
  } catch (error) {
    console.log(error);
    return { props: {} };
  }
};
