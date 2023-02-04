import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import { useToggle } from 'react-use';
import { useRouter } from 'next/router';

import useStore from '@reducers/store';
import { useGetJobCategory, useGetJobs } from '@APIs/search';

import CommonButton from '@atoms/CommonButton';
import ChevronRight from '@public/svgs/chevron-right.svg';
import S from './Signup.styles';

const StepThree: React.FC = () => {
  const router = useRouter();
  const { me, onSaveSignup } = useStore();

  const { data: jobCategories } = useGetJobCategory();

  const [jobCategory, setJobCategory] = useState(me?.category ?? '');
  const [job, setJob] = useState(me?.job ?? '');
  const [isSelect, onToggle] = useToggle(false);

  const isDisabled = useMemo(() => Boolean(!jobCategory || !job), [jobCategory, job]);

  const { data: jobs } = useGetJobs(jobCategory, { enabled: Boolean(jobCategory) });

  const onChangeCategory = (category: string | string[]) => {
    if (typeof category === 'string') setJobCategory(category);
  };

  const onClickSignupInput =
    ({ category, jobName }: { category: string; jobName: string }) =>
    () => {
      setJobCategory(category);
      setJob(jobName);
      onToggle(false);
    };

  const onClickNext = () => {
    onSaveSignup({ category: jobCategory, job });
    router.push('/signup/4');
  };

  return (
    <S.SignupInputWrapper>
      <h3>직군/직무를 선택해 주세요.</h3>
      <S.SignupInput
        readOnly
        bordered={false}
        placeholder="직군/직무를 선택"
        isfill={jobCategory}
        value={jobCategory}
        suffix={<Image src={ChevronRight} alt="chevron-right" />}
        onClick={onToggle}
      />
      {jobCategory ? (
        <S.SignupInput
          readOnly
          bordered={false}
          placeholder="직군/직무를 선택"
          isfill={job}
          value={job}
          suffix={<Image src={ChevronRight} alt="chevron-right" />}
          onClick={onToggle}
        />
      ) : null}
      <S.JobDrawer
        title="직군/직무를 선택"
        placement="bottom"
        getContainer={false}
        height="100%"
        maskStyle={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}
        onClose={onToggle}
        open={isSelect}
      >
        <S.SignupCollapse
          ghost
          accordion
          expandIconPosition="end"
          bordered={false}
          expandIcon={({ isActive }) => (isActive ? '-' : '+')}
          onChange={onChangeCategory}
        >
          {jobCategories?.map(({ name }) => (
            <S.Panel header={name} key={name}>
              {jobs?.map(({ name: jobName }) => (
                <li key={jobName} onClick={onClickSignupInput({ category: name, jobName })}>
                  {jobName}
                </li>
              ))}
            </S.Panel>
          ))}
        </S.SignupCollapse>
      </S.JobDrawer>
      <CommonButton type="primary" disabled={isDisabled} onClick={onClickNext}>
        다음
      </CommonButton>
    </S.SignupInputWrapper>
  );
};

export default StepThree;
