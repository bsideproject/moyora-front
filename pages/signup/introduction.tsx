import React, { useState } from 'react';
import { message } from 'antd';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';

import useStore, { ISignupData } from '@reducers/store';
import { useSignup, ISignup } from '@APIs/user';

import LogoSmallSection from '@components/Common/LogoHeader/LogoHeader';
import S from '@components/Signup/Signup.styles';

const Introduction: React.FC = () => {
  const router = useRouter();
  const { me, onResetSignup } = useStore();
  const { graduationYear, job, name, nickname, regionId, schoolCode } = me as ISignupData;
  const { mutate } = useSignup();
  const [introduction, setIntroduction] = useState('');

  const onChangeIntroduction: React.ChangeEventHandler<HTMLTextAreaElement> = (e) =>
    setIntroduction(e.target.value);

  const onClickSignup = (isSave?: boolean) => () => {
    if (me === null) {
      message.error('회원가입에 문제가 발생했습니다.\n다시 시도해 주세요 :(');
      onResetSignup();
      router.replace('/login');
    } else {
      const schoolComment = isSave ? introduction : '';
      const data = { graduationYear, job, name, nickname, regionId, schoolCode, schoolComment };
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

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  if (!req.headers.referer) {
    res.statusCode = 302;
    res.setHeader('Location', `/login`);
    res.end();
  }
  return { props: {} };
};
