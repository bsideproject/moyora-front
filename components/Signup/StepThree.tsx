import React, { useState } from 'react';
import Image from 'next/image';
import { useToggle } from 'react-use';

import ChevronRight from '@public/svgs/chevron-right.svg';

import S from './Signup.styles';

const StepThree: React.FC = () => {
  const [isSelect, onToggle] = useToggle(false);
  const [job, setJob] = useState('');
  const onClickSignupInput = (value: string) => () => {
    setJob(value);
    onToggle(false);
  };
  return (
    <S.SignupInputWrapper>
      <h3>직군/직무를 선택해 주세요.</h3>
      <S.SignupInput
        readOnly
        bordered={false}
        placeholder="직군/직무를 선택하기"
        value={job}
        suffix={<Image src={ChevronRight} alt="chevron-right" />}
        onClick={onToggle}
      />
      {job ? (
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
        >
          <S.Panel header="마케팅/PR" key="pr">
            <li className="all" onClick={onClickSignupInput('전체')}>
              전체
            </li>
            <li>전체</li>
            <li>전체</li>
          </S.Panel>
          <S.Panel header="마케팅/PR" key="pr1">
            <li>전체</li>
            <li>전체</li>
            <li>전체</li>
          </S.Panel>
          <S.Panel header="마케팅/PR" key="pr2">
            <li>전체</li>
            <li>전체</li>
            <li>전체</li>
          </S.Panel>
        </S.SignupCollapse>
      </S.JobDrawer>
    </S.SignupInputWrapper>
  );
};

export default StepThree;
