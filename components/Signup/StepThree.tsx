import React from 'react';
import Image from 'next/image';

import ChevronRight from '@public/svgs/chevron-right.svg';

import S from './Signup.styles';

const StepThree: React.FC = () => {
  return (
    <S.SignupInputWrapper>
      <h3>직군/직무를 선택해 주세요.</h3>
      <S.SignupInput
        readOnly
        bordered={false}
        placeholder="직군/직무를 선택하기"
        suffix={<Image src={ChevronRight} alt="chevron-right" />}
        onClick={() => alert('clicked')}
      />
    </S.SignupInputWrapper>
  );
};

export default StepThree;
