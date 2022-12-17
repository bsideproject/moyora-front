import useInput from '@utils/useInput';
import React from 'react';

import S from './Signup.styles';

const StepTwo: React.FC = () => {
  const [name, onChangeName] = useInput('');
  return (
    <S.SignupInputWrapper>
      <h3>이름</h3>
      <S.SignupInput placeholder="2자 이상 10자 이내" value={name} onChange={onChangeName} />
      {name ? (
        <>
          <h3>닉네임(별명)</h3>
          <S.SignupInput placeholder="닉네임" />
        </>
      ) : null}
    </S.SignupInputWrapper>
  );
};

export default StepTwo;
