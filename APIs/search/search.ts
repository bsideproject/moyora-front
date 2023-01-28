import { message } from 'antd';
import { AxiosError } from 'axios';
import { useMutation, UseMutationOptions, useQuery, UseQueryOptions } from '@tanstack/react-query';

import { fetch } from '@configs/axios';
import { IJobCategory, IRegion, ISchool } from './search.types';

export const baseSchoolUrl = '/school';
export const baseJobUrl = '/job/category';
export const baseRegionUrl = '/region';

export const useSearchSchools = (options?: UseMutationOptions<ISchool[], AxiosError, string>) => {
  const queryKey = `${baseSchoolUrl}/schoolName`;
  const queryFn = (schoolName: string) =>
    fetch.get(`${queryKey}?schoolName=${schoolName}`).then((res) => res.data);

  const onError = (e: AxiosError) =>
    message.error(
      (e.response?.data as string) || '학교 검색에 실패하셨습니다.\n다시 시도해 주세요 :(',
    );
  return useMutation([queryKey], queryFn, { onError, ...options });
};

export const useSearchSchool = (
  schoolId: string,
  options?: UseQueryOptions<ISchool, AxiosError, ISchool, string[]>,
) => {
  const queryKey = `${baseSchoolUrl}/${schoolId}`;

  const queryFn = () => fetch.get(queryKey).then((res) => res.data);

  return useQuery([queryKey, schoolId], queryFn, options);
};

export const useGetJobCategory = (
  options?: UseQueryOptions<IJobCategory[], AxiosError, IJobCategory[], string[]>,
) => {
  const queryKey = `${baseJobUrl}/parent`;
  const queryFn = () => fetch.get(queryKey).then((res) => res.data);
  return useQuery([queryKey], queryFn, options);
};

export const useGetJobs = (
  category: string,
  options?: UseQueryOptions<IJobCategory[], AxiosError, IJobCategory[], string[]>,
) => {
  const queryKey = `${baseJobUrl}/child?category=${category}`;
  const queryFn = () => fetch.get(queryKey).then((res) => res.data);
  const onSuccess = (data: IJobCategory[]) => data;
  return useQuery([queryKey, category], queryFn, { onSuccess, ...options });
};

export const useGetState = (
  options?: UseQueryOptions<IRegion[], AxiosError, IRegion[], string[]>,
) => {
  const queryKey = `${baseRegionUrl}/state`;
  const queryFn = () => fetch.get(queryKey).then((res) => res.data);
  return useQuery([queryKey], queryFn, { ...options });
};

export const useGetCity = (
  state: string,
  options?: UseQueryOptions<IRegion[], AxiosError, IRegion[], string[]>,
) => {
  const queryKey = `${baseRegionUrl}/city?state=${state}`;
  const queryFn = () => fetch.get(queryKey).then((res) => res.data);
  return useQuery([queryKey, state], queryFn, { ...options });
};
