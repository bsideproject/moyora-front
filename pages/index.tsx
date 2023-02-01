import React, { FC } from 'react';

import axios from 'axios';
import { GetServerSideProps } from 'next';
import { dehydrate, QueryClient } from '@tanstack/react-query';

import { useMyInfo } from '@APIs/user';

import Beta from '@components/Beta/Beta';
import MainPage from '@components/MainPage/MainPage';

const baseURL =
  process.env.NODE_ENV !== 'production'
    ? process.env.NEXT_PUBLIC_SERVER_DEV_URL
    : process.env.NEXT_PUBLIC_SERVER_URL;

const Home: FC = () => {
  const { data } = useMyInfo();
  return data ? <MainPage /> : <Beta />;
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
