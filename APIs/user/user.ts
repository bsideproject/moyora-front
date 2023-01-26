import { message } from 'antd';
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';
import { AxiosError, AxiosResponse } from 'axios';
import { QueryOptions, useMutation, UseMutationOptions } from '@tanstack/react-query';

import { fetch, fetchWithToken } from '@configs/axios';
import { ISignin, ISignup } from './user.types';

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
          redirect_uri: `${
            process.env.NODE_ENV === 'production'
              ? process.env.NEXT_PUBLIC_DOMAIN_URL
              : 'http://localhost:3000'
          }/kakao`,

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
    setCookie('moyora', accessToken, {
      path: '/',
      sameSite: 'lax',
      secure: true,
    });
    if (isFirst) router.push('/signup/1');
    else router.replace('/');
  };

  const onError = () =>
    message
      .error('로그인에 문제가 발생했습니다.\n잠시 후 다시 시도해 주세요 :(')
      .then(() => router.replace('/'));

  return useMutation([queryKey], queryFn, { onSuccess, onError, ...options });
};

export const useSignup = (
  options?: UseMutationOptions<AxiosResponse<string>, AxiosError, ISignup>,
) => {
  const router = useRouter();

  const queryKey = `${baseUrl}/signup`;
  const queryFn = (data: ISignup) => fetchWithToken.post(queryKey, data).then((res) => res.data);

  const onSuccess = (v: AxiosResponse<string>) => {
    console.log(v);
    router.replace('/signup/complete');
  };
  const onError = (e: AxiosError) =>
    message.error(
      (e.response?.data as string) || '회원가입에 문제가 발생했습니다.\n다시 시도해 주세요 :(',
    );
  return useMutation([queryKey], queryFn, { onSuccess, onError, ...options });
};
