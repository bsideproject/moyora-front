import React from 'react';
import Image from 'next/image';

import ChevronRight from '@public/svgs/chevron-right.svg';

import M from './Mypage.styles';
import { useGetJobCategory, useGetJobs } from '@APIs/search';

interface IProps {
  jobCategory: string;
  job: string;
  isSelect: boolean;
  onToggle: (nextValue: unknown) => void;
  onChangeCategory: (category: string | string[]) => void;
  onClickSelectJob: ({ category, jobName }: { category: string; jobName: string }) => () => void;
}

const SelectJobSection: React.FC<IProps> = ({
  jobCategory,
  job,
  onToggle,
  isSelect,
  onChangeCategory,
  onClickSelectJob,
}) => {
  const { data: jobCategories } = useGetJobCategory();
  const { data: jobs } = useGetJobs(jobCategory, { enabled: Boolean(jobCategory) });
  return (
    <>
      <M.MypageInput
        readOnly
        bordered={false}
        placeholder="직군/직무를 선택하기"
        isfill={Boolean(jobCategory)}
        value={jobCategory}
        suffix={<Image src={ChevronRight} alt="chevron-right" />}
        onClick={onToggle}
      />
      {jobCategory ? (
        <M.MypageInput
          readOnly
          bordered={false}
          placeholder="직군/직무를 선택하기"
          isfill={Boolean(job)}
          value={job}
          suffix={<Image src={ChevronRight} alt="chevron-right" />}
          onClick={onToggle}
        />
      ) : null}
      <M.JobDrawer
        title="직군/직무를 선택"
        placement="bottom"
        getContainer={false}
        height="100%"
        maskStyle={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}
        onClose={onToggle}
        open={isSelect}
      >
        <M.MypageCollapse
          ghost
          accordion
          expandIconPosition="end"
          bordered={false}
          expandIcon={({ isActive }) => (isActive ? '-' : '+')}
          onChange={onChangeCategory}
        >
          {jobCategories?.map(({ name }) => (
            <M.Panel header={name} key={name}>
              {jobs?.map(({ name: jobName }) => (
                <li key={jobName} onClick={onClickSelectJob({ category: name, jobName })}>
                  {jobName}
                </li>
              ))}
            </M.Panel>
          ))}
        </M.MypageCollapse>
      </M.JobDrawer>
    </>
  );
};

export default SelectJobSection;
