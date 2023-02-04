import { message } from 'antd';
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';
import { AxiosError, AxiosResponse } from 'axios';
import {
  useMutation,
  UseMutationOptions,
  useQuery,
  useQueryClient,
  UseQueryOptions,
} from '@tanstack/react-query';

import { fetch, fetchWithToken } from '@configs/axios';

import {
  IEditName,
  IEditProfile,
  IEditSchool,
  ISignin,
  ISignup,
  IUser,
  IUsers,
} from './user.types';

export const baseUrl = '/user';

export const useLogin = (options?: UseMutationOptions<ISignin, AxiosError, string>) => {
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

  const onSuccess = () => {
    router.replace('/signup/complete');
  };
  const onError = (e: AxiosError) =>
    message.error(
      (e.response?.data as string) || '회원가입에 문제가 발생했습니다.\n다시 시도해 주세요 :(',
    );
  return useMutation([queryKey], queryFn, { onSuccess, onError, ...options });
};

export const useMyInfo = (
  options?: UseQueryOptions<AxiosResponse<IUser>, AxiosError, IUser, string[]>,
) => {
  const queryKey = `${baseUrl}/myinfo`;
  const queryFn = () => fetchWithToken.get(queryKey).then((res) => res.data);
  return useQuery([queryKey], queryFn, { ...options });
};

export const useGetClassMates = (
  options?: UseQueryOptions<AxiosResponse<IUsers[]>, AxiosError, IUsers[], string[]>,
) => {
  const queryKey = `${baseUrl}/classmates`;
  const queryFn = () => fetchWithToken.get(queryKey).then((res) => res.data);
  return useQuery([queryKey], queryFn, { ...options });
};

export const useSearchClassMates = (options?: UseMutationOptions<IUsers[], AxiosError, string>) => {
  const queryKey = `${baseUrl}/classmates`;
  const queryFn = (name: string) =>
    fetchWithToken.get(`${queryKey}?name=${name}`).then((res) => res.data);
  const onError = (e: AxiosError) =>
    message.error(
      (e.response?.data as string) || '학교 검색에 실패하셨습니다.\n다시 시도해 주세요 :(',
    );
  return useMutation([queryKey], queryFn, { onError, ...options });
};

export const useGetClassMate = (
  schoolmate_id: string,
  options?: UseQueryOptions<AxiosResponse<IUser>, AxiosError, IUser, string[]>,
) => {
  const queryKey = `${baseUrl}/classmate/detail?schoolmate_id=${schoolmate_id}`;
  const queryFn = () => fetchWithToken.get(queryKey).then((res) => res.data);
  return useQuery([queryKey], queryFn, { ...options });
};

export const useEditImage = (
  options?: UseMutationOptions<AxiosResponse<FormData>, AxiosError, FormData>,
) => {
  const queryClient = useQueryClient();
  const queryKey = `${baseUrl}/image`;
  const queryFn = (data: FormData) => fetchWithToken.put(queryKey, data).then((res) => res.data);

  const onSuccess = async () => {
    await queryClient.fetchQuery([`${baseUrl}/myinfo`]);
  };

  const onError = (e: AxiosError) =>
    message.error(
      (e.response?.status !== 500 && (e.response?.data as string)) ||
        '프로필 수정에 실패하셨습니다.\n다시 시도해 주세요 :(',
    );
  return useMutation([queryKey], queryFn, { onSuccess, onError, ...options });
};

export const useEditName = (
  options?: UseMutationOptions<AxiosResponse<string>, AxiosError, IEditName>,
) => {
  const queryKey = `${baseUrl}/name`;
  const queryFn = (data: IEditName) => fetchWithToken.put(queryKey, data).then((res) => res.data);

  const onError = (e: AxiosError) =>
    message.error((e.response?.data as string) || '수정에 실패하셨습니다.\n다시 시도해 주세요 :(');
  return useMutation([queryKey], queryFn, { onError, ...options });
};

export const useEditProfile = (
  options?: UseMutationOptions<AxiosResponse<string>, AxiosError, IEditProfile>,
) => {
  const queryKey = `${baseUrl}/profile`;
  const queryFn = (data: IEditProfile) =>
    fetchWithToken.put(queryKey, data).then((res) => res.data);

  const onError = (e: AxiosError) =>
    message.error((e.response?.data as string) || '수정에 실패하셨습니다.\n다시 시도해 주세요 :(');
  return useMutation([queryKey], queryFn, { onError, ...options });
};

export const useEditSchool = (
  options?: UseMutationOptions<AxiosResponse<string>, AxiosError, IEditSchool>,
) => {
  const queryKey = `${baseUrl}/school`;
  const queryFn = (data: IEditSchool) => fetchWithToken.put(queryKey, data).then((res) => res.data);

  const onError = (e: AxiosError) =>
    message.error((e.response?.data as string) || '수정에 실패하셨습니다.\n다시 시도해 주세요 :(');
  return useMutation([queryKey], queryFn, { onError, ...options });
};
