import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';
import { QueryOptions, useMutation, useQuery } from '@tanstack/react-query';

import { fetch } from '@configs/axios';
import { ISignin, IUser } from './user.types';
import { message } from 'antd';

export const baseUrl = '/user';

export const useLogin = (options?: QueryOptions) => {
  const router = useRouter();
  const [, setCookie] = useCookies();

  const queryKey = `${baseUrl}/signin`;
  const queryFn = (code: string) =>
    fetch
      .post(
        'https://kauth.kakao.com/oauth/token',
        {
          grant_type: 'authorization_code',
          client_id: process.env.NEXT_PUBLIC_KAKAO_KEY,
          redirect_uri: 'http://localhost:3000/kakao',
          code,
        },
        { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } },
      )
      .then(({ data }) => {
        return fetch
          .post(queryKey, null, {
            headers: { Authorization: 'Bearer ' + data?.access_token },
          })
          .then((res) => res.data);
      });

  const onSuccess = ({ isFirst, accessToken }: ISignin) => {
    if (isFirst) router.push('/signup/1');
    else {
      setCookie('moyora', accessToken, {
        path: '/',
        sameSite: 'lax',
        secure: true,
      });
      router.replace('/');
    }
  };

  const onError = () =>
    message
      .error('로그인에 문제가 발생했습니다.\n잠시 후 다시 시도해 주세요 :(')
      .then(() => router.replace('/'));

  return useMutation([queryKey], queryFn, { onSuccess, onError, ...options });
};

export const useGetUser = async (userId: string, options: QueryOptions) => {
  const queryKey = `${baseUrl}/user`;
  const queryFn = await fetch.get(`${queryKey}?userId=${userId}`).then((res) => res.data);
  return useQuery([queryKey, userId], queryFn, { ...options });
};

export const usePutUser = async (data: IUser, options: QueryOptions) => {
  const queryKey = `${baseUrl}/user`;
  const queryFn = await fetch.put(`${queryKey}?userId=${data.id}`, data).then((res) => res.data);
  return useMutation([queryKey, data.id], queryFn, { ...options });
};
