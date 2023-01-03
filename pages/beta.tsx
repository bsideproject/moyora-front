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

const Beta: React.FC = () => {
  const router = useRouter();

  const onClickStart = () => router.push('/login');

  return (
    <div>
      <B.GlobalStyle />
      <Banner onClick={onClickStart} />
      <Number />
      <Exam />
      <B.QuestionSection>
        <div>
          <h2>
            초등학교 동창 친구들은 <br />
            지금 뭐하고 지낼까?
          </h2>
          <h3>
            moyora는 우리 학교 동창 친구들의 근황을 통계로 확인하고 <br />
            방명록과 쪽지로 추억을 나눌 수 있는 서비스입니다.
          </h3>
          <Image src={betaImages.BetaExam2} alt="beta-exam2" />
        </div>
      </B.QuestionSection>
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
