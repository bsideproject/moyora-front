import React from 'react';
import { useRouter } from 'next/router';

import { useMyInfo } from '@APIs/user';

import Banner from '@components/Beta/Banner';
import Number from '@components/Beta/Number';
import Exam from '@components/Beta/Exam';
import Question from '@components/Beta/Question';
import End from '@components/Beta/End';
import Link from '@components/Beta/Link';
import Footer from '@components/Beta/Footer';

import B from '@components/Beta/Beta.styles';

const Beta: React.FC = () => {
  const router = useRouter();
  const { data, isLoading } = useMyInfo();

  const onClickStart = () => router.push(data?.name && !isLoading ? '/signup/complete' : '/login');

  return (
    <div className="full-container">
      <B.GlobalStyle />
      <Banner onClick={onClickStart} />
      <Number />
      <Exam />
      <Question />
      <End onClick={onClickStart} />
      <Link />
      <Footer />
    </div>
  );
};

export default Beta;
