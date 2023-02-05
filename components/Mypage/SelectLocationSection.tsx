import React, { useMemo } from 'react';
import Image from 'next/image';

import { useGetCity, useGetState } from '@APIs/search';

import SelectAllow from '@public/svgs/select-allow.svg';
import M from './Mypage.styles';
import { BaseOptionType } from 'antd/es/select';

export interface ICity {
  label: string;
  value: number;
}

interface IProps {
  parentRegion: string | null;
  childRegion: ICity | null;
  onChangeState: (v: unknown) => void;
  onChangeCity: (_: unknown, option: BaseOptionType) => void;
}

const SelectLocationSection: React.FC<IProps> = ({
  parentRegion,
  childRegion,
  onChangeState,
  onChangeCity,
}) => {
  const { data: stateData } = useGetState();
  const { data: cityData } = useGetCity(parentRegion ?? '', { enabled: Boolean(parentRegion) });
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

  return (
    <div className="select-group">
      <M.MypageSelect
        className="half"
        placeholder="시/도"
        isfill={Boolean(parentRegion)}
        value={parentRegion}
        options={stateOptions}
        onChange={onChangeState}
        suffixIcon={<Image src={SelectAllow} alt="select-allow" />}
      />
      <M.MypageSelect
        className="half"
        placeholder="시/구"
        isfill={Boolean(childRegion)}
        value={childRegion}
        options={cityOptions}
        onChange={onChangeCity}
        suffixIcon={<Image src={SelectAllow} alt="select-allow" />}
      />
    </div>
  );
};

export default SelectLocationSection;
