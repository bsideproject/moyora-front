import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import useStore from '@reducers/store';
import getGraduationYear from '@utils/getGraduationYear';

import CommonButton from '@atoms/CommonButton';
import SelectAllow from '@public/svgs/select-allow.svg';
import S from './Signup.styles';

const StepOne: React.FC = () => {
  const router = useRouter();
  const schoolName = router.query?.schoolName as string | undefined;
  const schoolCode = router.query?.schoolCode as string | undefined;

  const { me, onSaveSignup } = useStore();

  const [graduationYear, setGraduationYear] = useState<string | null>(
    me?.graduationYear ? '' + me?.graduationYear : null,
  );
  const options = useMemo(() => getGraduationYear(), []);

  const onSelectGraduationYear = (value: unknown) => setGraduationYear(value as string);

  const isDisabled = useMemo(
    () => Boolean(!schoolCode || !graduationYear),
    [graduationYear, schoolCode],
  );

  const onClickNext = () => {
    onSaveSignup({ schoolName, schoolCode, graduationYear: +(graduationYear as string) });
    router.push('/signup/2');
  };

  const onClickSearchSchool = () => {
    router.replace('/search?isSchool=/signup/1', '/search', { shallow: true });
  };

  return (
    <S.SignupInputWrapper>
      <h3>졸업하신 초등학교는 어디인가요?</h3>
      <S.SearchButton
        readOnly
        bordered={false}
        isfill={schoolCode}
        placeholder="학교 검색"
        value={schoolName}
        onClick={onClickSearchSchool}
      />
      <h3>졸업연도는 언제인가요?</h3>
      <S.SignupSelect
        placeholder="졸업연도"
        isfill={graduationYear}
        onChange={onSelectGraduationYear}
        options={options}
        value={graduationYear}
        suffixIcon={<Image src={SelectAllow} alt="select-allow" />}
      />
      <h4>태어난 년도에 +13을 하면 초등학교 졸업연도 입니다.</h4>
      <CommonButton type="primary" disabled={isDisabled} onClick={onClickNext}>
        다음
      </CommonButton>
    </S.SignupInputWrapper>
  );
};

export default StepOne;
