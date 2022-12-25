import React from 'react';
import { useRouter } from 'next/router';

import SignupLayout from '@components/Layout/SignupLayout';

import StepOne from '@components/Signup/StepOne';
import StepTwo from '@components/Signup/StepTwo';
import StepThree from '@components/Signup/StepThree';
import StepFour from '@components/Signup/StepFour';

type TStep = '1' | '2' | '3' | '4';

const StepSection = {
  '1': <StepOne />,
  '2': <StepTwo />,
  '3': <StepThree />,
  '4': <StepFour />,
};

const Signup: React.FC = () => {
  const router = useRouter();
  const isAddSchool = router.query?.isAddSchool as string | undefined;
  const step = (router.query?.step ?? '1') as TStep;

  const onClick = () => {
    if (step === '1' && isAddSchool) {
      router.replace('/signup/1');
    }
    if (step === '4') router.push('/signup/introduction');
    else router.push(`/signup/${parseInt(step ?? '1') + 1}`, '', { shallow: true });
  };

  return (
    <SignupLayout step={step} onClick={onClick} isAddSchool={isAddSchool}>
      {StepSection[step]}
    </SignupLayout>
  );
};

export default Signup;
