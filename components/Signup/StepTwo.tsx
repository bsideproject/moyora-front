import React from 'react';

import S from './Signup.styles';

const StepTwo: React.FC = () => {
  return (
    <S.SignupInputWrapper>
      <h3>졸업하신 초등학교는 어디인가요?</h3>
      <S.SignupInput placeholder="2자 이상 10자 이내" />
      <h3>닉네임(별명)</h3>
      <S.SignupInput placeholder="닉네임" />
    </S.SignupInputWrapper>
  );
};

export default StepTwo;
