import React from 'react';
import Image from 'next/image';
import { Progress } from 'antd';

import Moyora from '@public/svgs/moyora-logo-small.svg';
import Step1Disabled from '@public/svgs/step1-disabled.svg';
import Step2Disabled from '@public/svgs/step2-disabled.svg';
import Step3Disabled from '@public/svgs/step3-disabled.svg';
import Step4Disabled from '@public/svgs/step4-disabled.svg';
import Step1Active from '@public/svgs/step1-active.svg';
import Step2Active from '@public/svgs/step2-active.svg';
import Step3Active from '@public/svgs/step3-active.svg';
import Step4Active from '@public/svgs/step4-active.svg';

import S from '@components/Signup/Signup.styles';
import L from './Layout.styles';

type TStep = '1' | '2' | '3' | '4';

interface IProps {
  step: TStep;
  onClick: () => void;
  isAddSchool?: string;
  children: React.ReactElement;
}

const StepContents = {
  '1': { disabled: Step1Disabled, active: Step1Active, title: '학교 정보를 입력해 주세요.' },
  '2': { disabled: Step2Disabled, active: Step2Active, title: '간단한 정보를 알려주세요.' },
  '3': { disabled: Step3Disabled, active: Step3Active, title: '어떤 일을 하고 계신가요?' },
  '4': { disabled: Step4Disabled, active: Step4Active, title: '어디에 거주하고 계시나요?' },
};

const SignupLayout: React.FC<IProps> = ({ step, onClick, isAddSchool, children }) => {
  return (
    <L.SignupStepWrapper>
      <Image src={Moyora} alt="moyora-logo" />
      <Progress
        showInfo={false}
        strokeColor="#FF6D3A"
        strokeWidth={2}
        percent={25 * parseInt(step)}
      />
      <L.SignupStepWrap>
        {Array(4)
          .fill(null)
          .map((_, i) => {
            const index = (i + 1).toString() as TStep;
            return (
              <Image
                key={index}
                src={
                  step === index.toString()
                    ? StepContents[index].active
                    : StepContents[index].disabled
                }
                alt={step === index.toString() ? 'step-active' : 'step-disabled'}
              />
            );
          })}
      </L.SignupStepWrap>
      <h2>{StepContents[step].title}</h2>
      <section>{children}</section>
      <S.SignupButton type="primary" onClick={onClick}>
        {isAddSchool ? '등록' : '다음'}
      </S.SignupButton>
    </L.SignupStepWrapper>
  );
};

export default SignupLayout;
