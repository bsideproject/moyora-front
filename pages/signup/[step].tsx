import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import SignupLayout from '@components/Layout/SignupLayout';

import StepOne from '@components/Signup/StepOne';
import StepTwo from '@components/Signup/StepTwo';
import StepThree from '@components/Signup/StepThree';
import StepFour from '@components/Signup/StepFour';
import useStore from '@reducers/store';

type TStep = '1' | '2' | '3' | '4';

const StepSection = {
  '1': <StepOne />,
  '2': <StepTwo />,
  '3': <StepThree />,
  '4': <StepFour />,
};

const Signup: React.FC = () => {
  const router = useRouter();
  const { onResetSignup } = useStore();
  const isAddSchool = router.query?.isAddSchool as string | undefined;
  const step = (router.query?.step ?? '1') as TStep;

  useEffect(() => {
    return () => {
      onResetSignup();
    };
  }, [onResetSignup]);

  return (
    <SignupLayout step={step} isAddSchool={isAddSchool}>
      {StepSection[step]}
    </SignupLayout>
  );
};

export default Signup;
