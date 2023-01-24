import { useQueries } from '@tanstack/react-query';

import { fetch } from '@configs/axios';

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
