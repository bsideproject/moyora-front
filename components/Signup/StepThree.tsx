import React, { useState } from 'react';
import Image from 'next/image';
import { useToggle } from 'react-use';
import { useRouter } from 'next/router';

import { useGetJobCategory, useGetJobs } from '@APIs/search';

import useStore from '@reducers/store';
import CommonButton from '@atoms/CommonButton';

import ChevronRight from '@public/svgs/chevron-right.svg';

import S from './Signup.styles';

const StepThree: React.FC = () => {
  const router = useRouter();
  const { onSaveSignup } = useStore();

  const { data: jobCategories } = useGetJobCategory();

  const [jobCategory, setJobCategory] = useState(jobCategories?.[0].name ?? '');
  const [job, setJob] = useState('');
  const [isSelect, onToggle] = useToggle(false);

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
        placeholder="직군/직무를 선택하기"
        value={jobCategory}
        suffix={<Image src={ChevronRight} alt="chevron-right" />}
        onClick={onToggle}
      />
      {jobCategory ? (
        <S.SignupInput
          readOnly
          bordered={false}
          placeholder="직군/직무를 선택하기"
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
              <li className="all" onClick={onClickSignupInput({ category: name, jobName: '전체' })}>
                전체
              </li>
              {jobs?.map(({ name: jobName }) => (
                <li key={jobName} onClick={onClickSignupInput({ category: name, jobName })}>
                  {jobName}
                </li>
              ))}
            </S.Panel>
          ))}
        </S.SignupCollapse>
      </S.JobDrawer>
      <CommonButton type="primary" onClick={onClickNext}>
        다음
      </CommonButton>
    </S.SignupInputWrapper>
  );
};

export default StepThree;
