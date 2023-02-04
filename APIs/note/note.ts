import { message } from 'antd';
import { AxiosError, AxiosResponse } from 'axios';
import {
  useMutation,
  UseMutationOptions,
  useQuery,
  UseQueryOptions,
  useQueryClient,
} from '@tanstack/react-query';

import { fetch, fetchWithToken } from '@configs/axios';
import { IEditNote, INote, INotes } from './note.types';

export const baseUrl = '/user/note';

export const useGetNote = (
  userId: string,
  options?: UseQueryOptions<AxiosResponse<INotes[]>, AxiosError, INotes[], string[]>,
) => {
  const queryKey = `${baseUrl}`;
  const queryFn = () => fetch.get(`${queryKey}?user_id=${userId}`).then((res) => res.data);
  return useQuery([queryKey, userId], queryFn, { ...options });
};

export const useGetMyNotes = (
  options?: UseQueryOptions<AxiosResponse<INotes[]>, AxiosError, INotes[], string[]>,
) => {
  const queryKey = `${baseUrl}/my`;
  const queryFn = () => fetchWithToken.get(`${queryKey}`).then((res) => res.data);
  return useQuery([queryKey], queryFn, { ...options });
};

export const useAddNote = (
  options?: UseMutationOptions<AxiosResponse<string>, AxiosError, INote>,
) => {
  const queryClient = useQueryClient();
  const queryKey = `${baseUrl}`;
  const queryFn = (data: INote) => fetchWithToken.post(queryKey, data).then((res) => res.data);

  const onSuccess = async () => {
    await queryClient.fetchQuery([queryKey]);
  };

  const onError = (e: AxiosError) =>
    message.error((e.response?.data as string) || '등록에 실패하셨습니다.\n다시 시도해 주세요 :(');
  return useMutation([queryKey], queryFn, { onSuccess, onError, ...options });
};

export const useEditNote = (
  options?: UseMutationOptions<AxiosResponse<string>, AxiosError, IEditNote>,
) => {
  const queryKey = `${baseUrl}`;
  const queryFn = (data: IEditNote) => fetchWithToken.put(queryKey, data).then((res) => res.data);

  const onError = (e: AxiosError) =>
    message.error((e.response?.data as string) || '수정에 실패하셨습니다.\n다시 시도해 주세요 :(');
  return useMutation([queryKey], queryFn, { onError, ...options });
};

export const useDeleteNote = (
  options?: UseMutationOptions<AxiosResponse<string>, AxiosError, string>,
) => {
  const queryKey = `${baseUrl}`;
  const queryFn = (noteId: string) =>
    fetchWithToken.delete(`${queryKey}?noteId=${noteId}`).then((res) => res.data);

  const onError = (e: AxiosError) =>
    message.error((e.response?.data as string) || '삭제에 실패하셨습니다.\n다시 시도해 주세요 :(');
  return useMutation([queryKey], queryFn, { onError, ...options });
};
