import { AxiosError, AxiosResponse } from 'axios';
import { useQueries, useQuery, UseQueryOptions } from '@tanstack/react-query';

import { fetch, fetchWithToken } from '@configs/axios';
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
        queryFn: () => fetchWithToken.get(schoolGuestBookKey).then((res) => res?.data),
        keepPreviousData: true,
        staleTime: 1000 * 60 * 5,
        cacheTime: 1000 * 60 * 5,
      },
      {
        queryKey: [schoolmateKey, schoolId],
        queryFn: () => fetchWithToken.get(schoolmateKey).then((res) => res.data),
        keepPreviousData: true,
        staleTime: 1000 * 60 * 5,
        cacheTime: 1000 * 60 * 5,
      },
    ],
  });
};

export const useGetMbti = (
  schoolId: string,
  graduationYear: number,
  options?: UseQueryOptions<AxiosResponse<IChart>, AxiosError, IChart, string[]>,
) => {
  const queryKey = `${baseUrl}Mbti/statistics`;
  const queryFn = () =>
    fetchWithToken
      .get(`${queryKey}?schoolId=${schoolId}&graduationYear=${graduationYear}`)
      .then((res) => res.data);
  return useQuery([queryKey], queryFn, { ...options });
};

export const useGetRegion = (
  schoolId: string,
  graduationYear: number,
  options?: UseQueryOptions<AxiosResponse<IChart>, AxiosError, IChart, string[]>,
) => {
  const queryKey = `${baseUrl}Region/statistics`;
  const queryFn = () =>
    fetchWithToken
      .get(`${queryKey}?schoolId=${schoolId}&graduationYear=${graduationYear}`)
      .then((res) => res.data);
  return useQuery([queryKey], queryFn, { ...options });
};

export const useGetJob = (
  schoolId: string,
  graduationYear: number,
  options?: UseQueryOptions<AxiosResponse<IChart>, AxiosError, IChart, string[]>,
) => {
  const queryKey = `${baseUrl}Job/statistics`;
  const queryFn = () =>
    fetchWithToken
      .get(`${queryKey}?schoolId=${schoolId}&graduationYear=${graduationYear}`)
      .then((res) => res.data);
  return useQuery([queryKey], queryFn, { ...options });
};
