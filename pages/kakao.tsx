import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useLogin } from '@APIs/user';
import { Spin } from 'antd';

const Kakao: React.FC = () => {
  const router = useRouter();
  const code = (router?.query?.code as string) ?? '';

  const { mutate } = useLogin();
  useEffect(() => {
    if (code) mutate(code);
  }, [code, mutate, router]);
  return (
    <div className="loading-page">
      <Spin size="large" />
    </div>
  );
};

export default Kakao;
