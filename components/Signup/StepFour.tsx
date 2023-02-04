import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { BaseOptionType } from 'antd/es/select';

import useStore from '@reducers/store';
import { useGetCity, useGetState } from '@APIs/search';

import CommonButton from '@atoms/CommonButton';

import SelectAllow from '@public/svgs/select-allow.svg';
import S from './Signup.styles';

interface ICity {
  label: string;
  value: number;
}

const StepFour: React.FC = () => {
  const router = useRouter();
  const { me, onSaveSignup } = useStore();

  const [parentRegion, setParentRegion] = useState<string | null>(me?.parentRegion || null);
  const [childRegion, setChildRegion] = useState<ICity | null>(
    me?.childRegion ? { label: me?.childRegion ?? '', value: me?.regionId ?? 0 } : null,
  );

  const { data: stateData } = useGetState();
  const { data: cityData } = useGetCity(parentRegion ?? '', { enabled: Boolean(parentRegion) });

  const isDisabled = useMemo(
    () => Boolean(!parentRegion || !childRegion),
    [parentRegion, childRegion],
  );

  const stateOptions = useMemo(
    () =>
      stateData?.length
        ? stateData.map(({ regionName }) => ({ label: regionName, value: regionName }))
        : [],
    [stateData],
  );

  const cityOptions = useMemo(
    () =>
      cityData?.length
        ? cityData.map(({ id, regionName }) => ({ label: regionName, value: id }))
        : [],
    [cityData],
  );

  const onChangeState = (v: unknown) => {
    setChildRegion(null);
    setParentRegion(v as string);
  };

  const onChangeCity = (_: unknown, option: BaseOptionType) =>
    setChildRegion(option as unknown as ICity);

  const onClickNext = () => {
    onSaveSignup({
      parentRegion: parentRegion ?? '',
      childRegion: childRegion?.label,
      regionId: childRegion?.value,
    });
    router.push('/signup/introduction');
  };

  return (
    <S.SignupInputWrapper>
      <h3>지역을 선택해 주세요.</h3>
      <div className="select-group">
        <S.SignupSelect
          className="half"
          placeholder="시/도"
          isfill={parentRegion}
          value={parentRegion}
          options={stateOptions}
          onChange={onChangeState}
          suffixIcon={<Image src={SelectAllow} alt="select-allow" />}
        />
        <S.SignupSelect
          className="half"
          placeholder="시/구"
          isfill={childRegion}
          value={childRegion}
          options={cityOptions}
          onChange={onChangeCity}
          suffixIcon={<Image src={SelectAllow} alt="select-allow" />}
        />
      </div>
      <CommonButton type="primary" disabled={isDisabled} onClick={onClickNext}>
        다음
      </CommonButton>
    </S.SignupInputWrapper>
  );
};

export default StepFour;
