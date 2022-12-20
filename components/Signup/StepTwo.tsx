import useInput from '@utils/useInput';
import React from 'react';

import S from './Signup.styles';

const StepTwo: React.FC = () => {
  const [name, onChangeName] = useInput('');
  return (
    <S.SignupInputWrapper>
      <h3>이름</h3>
      <S.SignupInput placeholder="2자 이상 10자 이내" value={name} onChange={onChangeName} />
      <h4>친구들이 알아볼 수 있도록 실명으로 입력해 주세요.</h4>
      {name ? (
        <>
          <h3>닉네임(별명)</h3>
          <S.SignupInput placeholder="닉네임" />
          <h4>학창시절 불렸던 별명도 좋아요.</h4>
        </>
      ) : null}
    </S.SignupInputWrapper>
  );
};

export default StepTwo;
