import { AxiosError, AxiosResponse } from 'axios';
import { useQueries, useQuery, UseQueryOptions } from '@tanstack/react-query';

import { fetch } from '@configs/axios';
import { IChart } from './statistics.types';

export const baseUrl = '/school';
export const baseCountUrl = '/count';

export const useGetCounts = () => {
  const schoolKey = `${baseCountUrl}/school`;
  const schoolGuestBookKey = `${baseCountUrl}/schoolguestbook`;
  const userKey = `${baseCountUrl}/user`;
  return useQueries({
    queries: [
      {
        queryKey: [schoolKey],
        queryFn: () =>
          fetch(schoolKey).then((res) => ({
            schoolCount: res?.data,
          })),
        keepPreviousData: true,
        staleTime: 1000 * 60 * 5,
        cacheTime: 1000 * 60 * 5,
      },
      {
        queryKey: [schoolGuestBookKey],
        queryFn: () =>
          fetch(schoolGuestBookKey).then((res) => ({
            schoolGuestBookKeyCount: res?.data,
          })),
        keepPreviousData: true,
        staleTime: 1000 * 60 * 5,
        cacheTime: 1000 * 60 * 5,
      },
      {
        queryKey: [userKey],
        queryFn: () => fetch(userKey).then((res) => ({ userCount: res.data })),
        keepPreviousData: true,
        staleTime: 1000 * 60 * 5,
        cacheTime: 1000 * 60 * 5,
      },
    ],
  });
};

export const useGetOurCounts = (schoolId: string) => {
  const schoolGuestBookKey = `${baseCountUrl}/our/schoolguestbook?schoolId=${schoolId}`;
  const schoolmateKey = `${baseCountUrl}/schoolmate?schoolId=${schoolId}`;

  return useQueries({
    queries: [
      {
        queryKey: [schoolGuestBookKey, schoolId],
        queryFn: () => fetch.get(schoolGuestBookKey).then((res) => res?.data),
        keepPreviousData: true,
        staleTime: 1000 * 60 * 5,
        cacheTime: 1000 * 60 * 5,
      },
      {
        queryKey: [schoolmateKey, schoolId],
        queryFn: () => fetch.get(schoolmateKey).then((res) => res.data),
        keepPreviousData: true,
        staleTime: 1000 * 60 * 5,
        cacheTime: 1000 * 60 * 5,
      },
    ],
  });
};

export const useGetMbti = (
  schoolId: string,
  options?: UseQueryOptions<AxiosResponse<IChart>, AxiosError, IChart, string[]>,
) => {
  const queryKey = `${baseUrl}Mbti/${schoolId}`;
  const queryFn = () => fetch.get(`${queryKey}`).then((res) => res.data);
  return useQuery([queryKey], queryFn, { ...options });
};

export const useGetRegion = (
  schoolId: string,
  options?: UseQueryOptions<AxiosResponse<IChart>, AxiosError, IChart, string[]>,
) => {
  const queryKey = `${baseUrl}Region/${schoolId}`;
  const queryFn = () => fetch.get(`${queryKey}`).then((res) => res.data);
  return useQuery([queryKey], queryFn, { ...options });
};

export const useGetJob = (
  schoolId: string,
  options?: UseQueryOptions<AxiosResponse<IChart>, AxiosError, IChart, string[]>,
) => {
  const queryKey = `${baseUrl}Job/${schoolId}`;
  const queryFn = () => fetch.get(`${queryKey}`).then((res) => res.data);
  return useQuery([queryKey], queryFn, { ...options });
};
