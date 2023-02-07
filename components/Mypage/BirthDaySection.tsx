import React, { useMemo } from 'react';
import Image from 'next/image';

import getGraduationYear, { getDay, getMonth } from '@utils/getGraduationYear';

import SelectAllow from '@public/svgs/select-allow.svg';
import M from './Mypage.styles';

interface IProps {
  year?: string;
  month?: string;
  day?: string;
  onChangeYear: (v: unknown) => void;
  onChangeMonth: (v: unknown) => void;
  onChangeDay: (v: unknown) => void;
}

const BirthDaySection: React.FC<IProps> = ({
  year,
  month,
  day,
  onChangeYear,
  onChangeMonth,
  onChangeDay,
}) => {
  const yearOptions = useMemo(() => getGraduationYear(), []);
  const monthOptions = useMemo(() => getMonth(), []);
  const dayOptions = useMemo(() => getDay(), []);

  return (
    <div className="select-group">
      <M.MypageSelect
        isfill={Boolean(year)}
        className="half"
        placeholder="년"
        options={yearOptions}
        value={year}
        onChange={onChangeYear}
        suffixIcon={<Image src={SelectAllow} alt="select-allow" />}
      />
      <M.MypageSelect
        isfill={Boolean(month)}
        className="half"
        placeholder="월"
        options={monthOptions}
        value={month}
        onChange={onChangeMonth}
        suffixIcon={<Image src={SelectAllow} alt="select-allow" />}
      />
      <M.MypageSelect
        isfill={Boolean(day)}
        className="half"
        placeholder="일"
        options={dayOptions}
        value={day}
        onChange={onChangeDay}
        suffixIcon={<Image src={SelectAllow} alt="select-allow" />}
      />
    </div>
  );
};

export default BirthDaySection;
