import axios, { AxiosInstance, AxiosError } from 'axios';
import { Cookies } from 'react-cookie';

interface IError {
  code: number;
  error: string;
  message: string;
}

export type AxiosErrorType = AxiosError<IError>;

export const baseURL =
  process.env.NODE_ENV !== 'production'
    ? process.env.NEXT_PUBLIC_SERVER_DEV_URL
    : process.env.NEXT_PUBLIC_SERVER_URL;

export const fetch: AxiosInstance = axios.create({
  baseURL,
  withCredentials: false,
});

export const fetchWithToken: AxiosInstance = axios.create({
  baseURL,
  withCredentials: false,
});

fetchWithToken.interceptors.request.use((config) => {
  const cookies = new Cookies();
  const token = cookies.get('moyora');
  return { ...config, headers: { Authorization: `Bearer ${token}` } };
});
