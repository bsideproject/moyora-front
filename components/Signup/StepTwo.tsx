import CommonButton from '@atoms/CommonButton';
import useStore from '@reducers/store';
import useInput from '@utils/useInput';
import { useRouter } from 'next/router';
import React, { useMemo } from 'react';

import S from './Signup.styles';

const StepTwo: React.FC = () => {
  const router = useRouter();
  const { onSaveSignup } = useStore();

  const [name, onChangeName] = useInput('');
  const [nickname, onChangeNickname] = useInput('');

  const isDisabled = useMemo(() => Boolean(!name || !nickname), [name, nickname]);

  const onClickNext = () => {
    onSaveSignup({ name, nickname });
    router.push('/signup/3');
  };

  return (
    <S.SignupInputWrapper>
      <h3>이름</h3>
      <S.SignupInput placeholder="2자 이상 10자 이내" value={name} onChange={onChangeName} />
      <h4>친구들이 알아볼 수 있도록 실명으로 입력해 주세요.</h4>
      {name ? (
        <>
          <h3>닉네임(별명)</h3>
          <S.SignupInput placeholder="닉네임" value={nickname} onChange={onChangeNickname} />
          <h4>학창시절 불렸던 별명도 좋아요.</h4>
        </>
      ) : null}
      <CommonButton type="primary" disabled={isDisabled} onClick={onClickNext}>
        다음
      </CommonButton>
    </S.SignupInputWrapper>
  );
};

export default StepTwo;
