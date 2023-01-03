import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from 'antd';
import { useRouter } from 'next/router';

import betaImages from '@configs/betaImages';

import Banner from '@components/Beta/Banner';
import B from '@components/Beta/Beta.styles';
import Number from '@components/Beta/Number';
import Exam from '@components/Beta/Exam';
import Question from '@components/Beta/Question';

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
      <B.EndSection>
        <div>
          <h2>
            당신을 보고 싶어 하는 동창 친구들이 모이고 있어요 <br />
            지금 바로 시작해 보세요!
          </h2>
          <Button type="primary" onClick={onClickStart}>
            모여라 시작하기
          </Button>
        </div>
      </B.EndSection>
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
