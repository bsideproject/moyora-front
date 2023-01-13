import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const Kakao: React.FC = () => {
  const router = useRouter();
  const code = router?.query?.code ?? '';
  useEffect(() => {
    if (code) router.replace('/signup/1');
  }, [code, router]);
  return <div>{code}</div>;
};

export default Kakao;
