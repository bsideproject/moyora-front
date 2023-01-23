import { QueryOptions, useMutation, useQuery, UseQueryOptions } from '@tanstack/react-query';

import { fetch } from '@configs/axios';
import { IJobCategory, IRegion, ISchool } from './search.types';
import { AxiosError, AxiosResponse } from 'axios';

export const baseSchoolUrl = '/school';
export const baseJobUrl = '/job/category';
export const baseRegionUrl = '/region';

export const useSearchSchools = (options?: QueryOptions) => {
  const queryKey = `${baseSchoolUrl}/schoolName`;
  const queryFn = (schoolName: string) =>
    fetch.get(`${queryKey}?schoolName=${schoolName}`).then((res) => res.data);
  const onSuccess = (data: ISchool[]) => data;

  return useMutation([queryKey], queryFn, { onSuccess, ...options });
};

export const useGetJobCategory = (
  options?: UseQueryOptions<AxiosResponse<IJobCategory[]>, AxiosError, IJobCategory[], string[]>,
) => {
  const queryKey = `${baseJobUrl}/parent`;
  const queryFn = () => fetch(queryKey).then((res) => res.data);
  return useQuery([queryKey], queryFn, options);
};

export const useGetJobs = (
  category: string,
  options?: UseQueryOptions<AxiosResponse<IJobCategory[]>, AxiosError, IJobCategory[], string[]>,
) => {
  const queryKey = `${baseJobUrl}/child?category=${category}`;
  const queryFn = () => fetch(queryKey).then((res) => res.data);
  const onSuccess = (data: IJobCategory[]) => data;
  return useQuery([queryKey, category], queryFn, { onSuccess, ...options });
};

export const useGetState = (
  options?: UseQueryOptions<AxiosResponse<IRegion[]>, AxiosError, IRegion[], string[]>,
) => {
  const queryKey = `${baseRegionUrl}/state`;
  const queryFn = () => fetch(queryKey).then((res) => res.data);
  return useQuery([queryKey], queryFn, { ...options });
};

export const useGetCity = (
  state: string,
  options?: UseQueryOptions<AxiosResponse<IRegion[]>, AxiosError, IRegion[], string[]>,
) => {
  const queryKey = `${baseRegionUrl}/city?state=${state}`;
  const queryFn = () => fetch(queryKey).then((res) => res.data);
  return useQuery([queryKey, state], queryFn, { ...options });
};
