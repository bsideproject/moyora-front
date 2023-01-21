import React, { useMemo, useState } from 'react';
import Image from 'next/image';

import SelectAllow from '@public/svgs/select-allow.svg';

import S from './Signup.styles';
import { useRouter } from 'next/router';
import CommonButton from '@atoms/CommonButton';
import { useGetCity, useGetState } from '@APIs/search';
import useStore from '@reducers/store';

const StepFour: React.FC = () => {
  const router = useRouter();
  const { onSaveSignup } = useStore();

  const [parentRegion, setParentRegion] = useState('');
  const [childRegion, setChildRegion] = useState('');

  const { data: stateData } = useGetState();
  const { data: cityData } = useGetCity(parentRegion, { enabled: Boolean(parentRegion) });

  const stateOptions = useMemo(
    () => (stateData?.length ? stateData.map((v) => ({ label: v, value: v })) : []),
    [stateData],
  );

  const cityOptions = useMemo(
    () => (cityData?.length ? cityData.map((v) => ({ label: v, value: v })) : []),
    [cityData],
  );

  const onChangeState = (v: unknown) => {
    setChildRegion('');
    setParentRegion(v as string);
  };

  const onChangeCity = (v: unknown) => setChildRegion(v as string);

  const onClickNext = () => {
    onSaveSignup({ parentRegion, childRegion });
    router.push('/signup/introduction');
  };

  return (
    <S.SignupInputWrapper>
      <h3>지역을 선택해 주세요.</h3>
      <div className="select-group">
        <S.SignupSelect
          className="half"
          placeholder="시/도"
          options={stateOptions}
          suffixIcon={<Image src={SelectAllow} alt="select-allow" />}
          onChange={onChangeState}
        />
        <S.SignupSelect
          className="half"
          placeholder="시/구"
          options={cityOptions}
          suffixIcon={<Image src={SelectAllow} alt="select-allow" />}
          onChange={onChangeCity}
        />
      </div>
      <CommonButton type="primary" onClick={onClickNext}>
        다음
      </CommonButton>
    </S.SignupInputWrapper>
  );
};

export default StepFour;
