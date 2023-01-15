import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';
import { QueryOptions, useMutation, useQuery } from '@tanstack/react-query';

import { fetch } from '@configs/axios';
import { ISignin, IUser } from './user.types';

export const baseUrl = '/user';

export const useLogin = (options?: QueryOptions) => {
  const router = useRouter();
  const [, setCookie] = useCookies();

  const queryKey = `${baseUrl}/signin`;
  const queryFn = (code: string) =>
    fetch.post(queryKey, null, { headers: { Authorization: code } }).then((res) => res.data);

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

  return useMutation([queryKey], queryFn, { onSuccess, ...options });
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
