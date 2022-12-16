import React from 'react';
import Image from 'next/image';

import SelectAllow from '@public/svgs/select-allow.svg';

import S from './Signup.styles';

const StepFour: React.FC = () => {
  return (
    <S.SignupInputWrapper>
      <h3>지역을 선택해 주세요.</h3>
      <div className="select-group">
        <S.SignupSelect
          className="half"
          placeholder="시/도"
          options={[]}
          suffixIcon={<Image src={SelectAllow} alt="select-allow" />}
        />
        <S.SignupSelect
          className="half"
          placeholder="시/구"
          options={[]}
          suffixIcon={<Image src={SelectAllow} alt="select-allow" />}
        />
      </div>
    </S.SignupInputWrapper>
  );
};

export default StepFour;
