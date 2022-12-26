import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import LogoSmallSection from '@components/Common/LogoHeader/LogoHeader';

import S from '@components/Signup/Signup.styles';

const Introduction: React.FC = () => {
  const router = useRouter();
  const [introduction, setIntroduction] = useState('');
  const onChangeIntroduction: React.ChangeEventHandler<HTMLTextAreaElement> = (e) =>
    setIntroduction(e.target.value);

  const onClickRoute = () => router.replace('/signup/complete');

  return (
    <S.IntroductionWrapper>
      <LogoSmallSection>
        <Link href="/signup/complete" replace>
          <p>건너뛰기</p>
        </Link>
      </LogoSmallSection>
      <h2>
        전체 학교 동창 친구들에게
        <br />
        한마디 남겨주세요.😆
      </h2>
      <p>학교 방명록은 익명으로 기록됩니다.</p>
      <S.SignupTextArea
        showCount
        maxLength={200}
        value={introduction}
        onChange={onChangeIntroduction}
        placeholder="200자 이내로 입력해 주세요."
      />
      <S.SignupButton type="primary" onClick={onClickRoute} disabled={!Boolean(introduction)}>
        다음
      </S.SignupButton>
    </S.IntroductionWrapper>
  );
};

export default Introduction;
