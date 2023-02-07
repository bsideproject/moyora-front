import React from 'react';
import Image from 'next/image';

import { MBTIOptions } from '@configs/bigContents';

import SelectAllow from '@public/svgs/select-allow.svg';
import M from './Mypage.styles';

interface IProps {
  mbti?: string | null;
  onChangeMBTI: (v: unknown) => void;
}

const SelectMBTISection: React.FC<IProps> = ({ mbti, onChangeMBTI }) => {
  return (
    <M.MypageSelect
      isfill={Boolean(mbti)}
      placeholder="MBTI 유형"
      options={MBTIOptions}
      value={mbti}
      onChange={onChangeMBTI}
      suffixIcon={<Image src={SelectAllow} alt="select-allow" />}
    />
  );
};

export default SelectMBTISection;
