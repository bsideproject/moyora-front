import { message } from 'antd';
import { AxiosError, AxiosResponse } from 'axios';
import { useMutation, UseMutationOptions, useQuery, UseQueryOptions } from '@tanstack/react-query';

import { fetch, fetchWithToken } from '@configs/axios';
import { IEditSchoolGuestBook, ISchoolGuestBook, ISchoolGuestBooks } from './schoolGuestBook.types';

export const baseUrl = '/schoolGuestBook';

export const useGetSchoolGuestBook = (
  schoolId: string,
  options?: UseQueryOptions<
    AxiosResponse<ISchoolGuestBooks[]>,
    AxiosError,
    ISchoolGuestBooks[],
    string[]
  >,
) => {
  const queryKey = `${baseUrl}/${schoolId}`;
  const queryFn = () => fetch.get(queryKey).then((res) => res.data);
  return useQuery([queryKey], queryFn, { ...options });
};

export const useGetMySchoolGuestBooks = (
  options?: UseQueryOptions<
    AxiosResponse<ISchoolGuestBooks[]>,
    AxiosError,
    ISchoolGuestBooks[],
    string[]
  >,
) => {
  const queryKey = `${baseUrl}/me`;
  const queryFn = () => fetch.get(`${queryKey}`).then((res) => res.data);
  return useQuery([queryKey], queryFn, { ...options });
};

export const useAddSchoolGuestBook = (
  options?: UseMutationOptions<AxiosResponse<string>, AxiosError, ISchoolGuestBook>,
) => {
  const queryKey = `${baseUrl}`;
  const queryFn = (data: ISchoolGuestBook) =>
    fetchWithToken.post(queryKey, data).then((res) => res.data);

  const onError = (e: AxiosError) =>
    message.error((e.response?.data as string) || '등록에 실패하셨습니다.\n다시 시도해 주세요 :(');
  return useMutation([queryKey], queryFn, { onError, ...options });
};

export const useEditSchoolGuestBook = (
  options?: UseMutationOptions<AxiosResponse<string>, AxiosError, IEditSchoolGuestBook>,
) => {
  const queryKey = `${baseUrl}`;
  const queryFn = (data: IEditSchoolGuestBook) =>
    fetchWithToken.put(queryKey, data).then((res) => res.data);

  const onError = (e: AxiosError) =>
    message.error((e.response?.data as string) || '수정에 실패하셨습니다.\n다시 시도해 주세요 :(');
  return useMutation([queryKey], queryFn, { onError, ...options });
};

export const useDeleteSchoolGuestBook = (
  options?: UseMutationOptions<AxiosResponse<string>, AxiosError, string>,
) => {
  const queryKey = `${baseUrl}`;
  const queryFn = (SchoolGuestBookId: string) =>
    fetchWithToken
      .delete(`${queryKey}?SchoolGuestBookId=${SchoolGuestBookId}`)
      .then((res) => res.data);

  const onError = (e: AxiosError) =>
    message.error((e.response?.data as string) || '삭제에 실패하셨습니다.\n다시 시도해 주세요 :(');
  return useMutation([queryKey], queryFn, { onError, ...options });
};
