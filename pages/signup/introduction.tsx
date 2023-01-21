import React, { useState } from 'react';
import { message } from 'antd';
import { useRouter } from 'next/router';

import { useSignup, ISignup } from '@APIs/user';
import useStore from '@reducers/store';

import LogoSmallSection from '@components/Common/LogoHeader/LogoHeader';
import S from '@components/Signup/Signup.styles';

const Introduction: React.FC = () => {
  const router = useRouter();
  const { me } = useStore();
  const { mutate } = useSignup();
  const [introduction, setIntroduction] = useState('');
  const onChangeIntroduction: React.ChangeEventHandler<HTMLTextAreaElement> = (e) =>
    setIntroduction(e.target.value);

  const onClickSignup = (isSave?: boolean) => () => {
    if (me === null) {
      message.error('회원가입에 문제가 발생했습니다.\n다시 시도해 주세요 :(');
      router.replace('/login');
    } else {
      let data = me;
      if (isSave) data = { ...me, introduction };
      mutate(data as ISignup);
    }
  };

  return (
    <S.IntroductionWrapper>
      <LogoSmallSection>
        <p onClick={onClickSignup()}>건너뛰기</p>
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
      <S.SignupButton
        type="primary"
        onClick={onClickSignup(true)}
        disabled={!Boolean(introduction)}
      >
        다음
      </S.SignupButton>
    </S.IntroductionWrapper>
  );
};

export default Introduction;
