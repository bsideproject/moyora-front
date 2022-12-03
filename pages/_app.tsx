import '@styles/global.css';

import React from 'react';
import Head from 'next/head';
import localFont from '@next/font/local';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import theme from '@styles/theme';

import AppLayout from '@components/Layout/AppLayout';

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const pretendard = localFont({
  src: '../public/font/PretendardVariable.ttf',
});

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <QueryClientProvider client={client}>
    {process.env.NODE_ENV !== 'production' ? <ReactQueryDevtools initialIsOpen={false} /> : null}
    <ThemeProvider theme={theme}>
      <Head>
        <title>Next Template</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <AppLayout>
        <main className={pretendard.className}>
          <Component {...pageProps} />
        </main>
      </AppLayout>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
