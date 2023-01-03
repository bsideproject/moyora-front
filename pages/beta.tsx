import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from 'antd';
import { useRouter } from 'next/router';

import betaImages from '@configs/betaImages';

import Banner from '@components/Beta/Banner';
import Number from '@components/Beta/Number';
import Exam from '@components/Beta/Exam';
import Question from '@components/Beta/Question';
import End from '@components/Beta/End';

import B from '@components/Beta/Beta.styles';

const Beta: React.FC = () => {
  const router = useRouter();

  const onClickStart = () => router.push('/login');

  return (
    <div>
      <B.GlobalStyle />
      <Banner onClick={onClickStart} />
      <Number />
      <Exam />
      <Question />
      <End onClick={onClickStart} />
      <B.LinkSection>
        <div>
          <h2>
            더 많은 동창 친구들이 모일 수 있도록
            <br />
            친구에게 공유해 보세요!
          </h2>
          <div>
            <div>
              <Button shape="circle">
                <Image src={betaImages.KakaoIcon} alt="kakao-icon" />
              </Button>
              <p>카카오톡</p>
            </div>
            <div>
              <Button shape="circle">
                <Image src={betaImages.LinkIcon} alt="link-icon" />
              </Button>
              <p>링크 복사</p>
            </div>
          </div>
        </div>
      </B.LinkSection>
      <B.FooterSection>
        <div>
          <Link href="">반갑다친구야</Link>
          <div>
            <Link href="">서비스 이용약관</Link>
            <Link href="">개인정보 처리방침</Link>
          </div>
        </div>
      </B.FooterSection>
    </div>
  );
};

export default Beta;
