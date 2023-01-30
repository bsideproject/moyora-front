import '@styles/global.css';

import React from 'react';
import axios from 'axios';
import Head from 'next/head';
import Script from 'next/script';
import localFont from '@next/font/local';
import { ConfigProvider } from 'antd';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AppContext, AppProps } from 'next/app';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { dehydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';

import theme from '@styles/theme';

import AppLayout from '@components/Layout/AppLayout';

const baseURL =
  process.env.NODE_ENV !== 'production'
    ? process.env.NEXT_PUBLIC_SERVER_DEV_URL
    : process.env.NEXT_PUBLIC_SERVER_URL;

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const pretendard = localFont({
  src: [
    { path: '../public/font/Pretendard-Thin.woff2', weight: '100' },
    { path: '../public/font/Pretendard-ExtraLight.woff2', weight: '200' },
    { path: '../public/font/Pretendard-Light.woff2', weight: '300' },
    { path: '../public/font/Pretendard-Regular.woff2', weight: '400' },
    { path: '../public/font/Pretendard-Medium.woff2', weight: '500' },
    { path: '../public/font/Pretendard-SemiBold.woff2', weight: '600' },
    { path: '../public/font/Pretendard-Bold.woff2', weight: '700' },
    { path: '../public/font/Pretendard-ExtraBold.woff2', weight: '800' },
    { path: '../public/font/Pretendard-Black.woff2', weight: '900' },
  ],
  display: 'swap',
  fallback: [
    '-apple-system',
    'BlinkMacSystemFont',
    'system-ui',
    'Roboto',
    'Helvetica Neue',
    'Segoe UI',
    'Apple SD Gothic Neo',
    'Malgun Gothic',
    'sans-serif',
  ],
});

const GlobalStyle = createGlobalStyle`
  * {
  font-family: ${pretendard.style.fontFamily};
  }
`;

const antdTheme = {
  token: {
    colorPrimary: '#FF6D3A',
    colorError: '#D82C0D',
    colorSuccess: '#2C6ECB',
    fontSize: 16,
  },
};

const App = ({ Component, pageProps }: AppProps) => (
  <QueryClientProvider client={client}>
    <GlobalStyle />
    {process.env.NODE_ENV !== 'production' ? <ReactQueryDevtools initialIsOpen={false} /> : null}
    <ConfigProvider theme={antdTheme}>
      <ThemeProvider theme={theme}>
        <Head>
          <title>모여라</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1, minimal-scale=1"
          />
          <meta name="title" content="모여라" />
          <meta name="description" content="초등학교 온라인 동창회, 우리 학교 여기여기 모여라!" />
          <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
          <link rel="manifest" href="/icons/site.webmanifest" />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.moyorafriends.co.kr/" />
          <meta property="og:title" content="모여라" />
          <meta
            property="og:description"
            content="초등학교 온라인 동창회, 우리 학교 여기여기 모여라!"
          />
          <meta property="og:image" content="https://www.moyorafriends.co.kr/thumbnail.png" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://www.moyorafriends.co.kr/" />
          <meta property="twitter:title" content="모여라" />
          <meta
            property="twitter:description"
            content="초등학교 온라인 동창회, 우리 학교 여기여기 모여라!"
          />
          <meta property="twitter:image" content="https://www.moyorafriends.co.kr/thumbnail.png" />
        </Head>
        <Script
          src="https://t1.kakaocdn.net/kakao_js_sdk/2.1.0/kakao.min.js"
          integrity="sha384-dpu02ieKC6NUeKFoGMOKz6102CLEWi9+5RQjWSV0ikYSFFd8M3Wp2reIcquJOemx"
          crossOrigin="anonymous"
        />
        <AppLayout>
          <main>
            <Component {...pageProps} />
          </main>
        </AppLayout>
      </ThemeProvider>
    </ConfigProvider>
  </QueryClientProvider>
);

export default App;

App.getInitialProps = async ({ ctx }: AppContext) => {
  try {
    const queryClient = new QueryClient();
    const myInfo = await queryClient.getQueryData(['/user/myinfo']);
    const moyoraCookie =
      (ctx?.req as unknown as { cookies: { moyora: string } })?.cookies?.moyora || '';
    if (!moyoraCookie || !myInfo) return { props: {} };
    else {
      const queryKey = `${baseURL}/user/myinfo`;
      const getMyInfo = await axios
        .get(queryKey, {
          headers: { Authorization: `Bearer ${moyoraCookie}` },
        })
        .then((res) => res.data);
      if (getMyInfo) {
        await queryClient.setQueryData(['/user/myinfo'], getMyInfo);
        return {
          props: {
            dehydratedState: dehydrate(queryClient),
          },
        };
      } else throw new Error('Not Login');
    }
  } catch (error) {
    console.log(error);
    return { props: {} };
  }
};
