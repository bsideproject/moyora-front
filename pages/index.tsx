import React, { FC } from 'react';

import axios from 'axios';
import { useCookies } from 'react-cookie';
import { GetServerSideProps } from 'next';
import { dehydrate, QueryClient } from '@tanstack/react-query';

import { useMyInfo } from '@APIs/user';
import { baseURL } from '@configs/axios';

import Beta from '@components/Beta/Beta';
import MainPage from '@components/MainPage/MainPage';

const Home: FC = () => {
  const [cookie] = useCookies(['moyora']);
  const { data } = useMyInfo({ enabled: Boolean(cookie?.moyora) });
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
